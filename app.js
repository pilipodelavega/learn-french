"use strict";

/* ---------- Fusion des ajouts (extras.js) dans DATA ---------- */

// Nouveau groupe : verbes pronominaux
if (typeof PRONOMINAUX !== "undefined") {
  DATA.pronominaux = { label: "Verbes pronominaux", verbs: PRONOMINAUX };
}
// Phrases négatives : on les rattache aux verbes existants
if (typeof NEGATIONS !== "undefined") {
  for (const g in NEGATIONS) {
    const map = NEGATIONS[g];
    if (!DATA[g]) continue;
    DATA[g].verbs.forEach(v => {
      if (map[v.inf]) { v.neg = map[v.inf][0]; v.negEn = map[v.inf][1]; }
    });
  }
}

/* ---------- Conjugaison ---------- */

// Ajoute le pronom avec élision de "je" -> "j'" devant voyelle / h.
function withPronoun(i, form) {
  if (i === 0 && /^[aeiouyàâäéèêëîïôöûüh]/i.test(form)) return "j'" + form;
  return PRONOUNS[i] + " " + form;
}

// Retourne les 6 formes conjuguées (sans pronom sujet) d'un verbe.
function conjugate(verb, group) {
  if (verb.full) return verb.full.slice();
  const stem = verb.inf.slice(0, -2);
  const endings = group === "groupe2"
    ? ["is", "is", "it", "issons", "issez", "issent"]
    : ["e", "es", "e", "ons", "ez", "ent"];
  const forms = endings.map(e => stem + e);
  if (verb.over) for (const k in verb.over) forms[k] = verb.over[k];
  return forms;
}

// forme conjuguée seule, avec j' si besoin (pour la liste)
function elide(i, form) {
  if (i === 0 && /^[aeiouyàâäéèêëîïôöûüh]/i.test(form)) return "j'" + form;
  return form;
}

/* ---------- Navigation entre écrans ---------- */

const screens = ["rootMenu", "nav", "groupPicker", "listeView", "quizView", "articlesMenu", "lessonView"];
function show(id) {
  screens.forEach(s => document.getElementById(s).classList.toggle("hidden", s !== id));
  window.scrollTo(0, 0);
}

// section: "verbes" | "articles" · neg: "aff" | "neg"
let state = { section: "verbes", mode: "liste", group: "groupe1", show: "verbes", dir: "enfr", neg: "aff" };

// Racine -> Verbes ou Articles
document.querySelectorAll("#rootMenu .card").forEach(btn => {
  btn.addEventListener("click", () => {
    state.section = btn.dataset.section;
    show(state.section === "verbes" ? "nav" : "articlesMenu");
  });
});

// Menu Verbes -> choix du groupe
document.querySelectorAll("#nav .card").forEach(btn => {
  btn.addEventListener("click", () => {
    state.mode = btn.dataset.mode;
    document.getElementById("groupTitle").textContent =
      (state.mode === "quiz" ? "Quiz" : "Liste") + " — choisis un groupe";
    show("groupPicker");
  });
});

// Choix du groupe -> liste ou quiz
document.querySelectorAll("#groupPicker .card").forEach(btn => {
  btn.addEventListener("click", () => {
    state.section = "verbes";
    state.group = btn.dataset.group;
    if (state.mode === "quiz") {
      document.getElementById("quizBack").dataset.back = "groupPicker";
      refreshQuiz(); show("quizView");
    } else {
      document.getElementById("listeBack").dataset.back = "groupPicker";
      refreshListe(); show("listeView");
    }
  });
});

// Menu Articles -> leçon ou quiz
document.querySelectorAll("#articlesMenu .card").forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.dataset.articles === "lesson") {
      show("lessonView");
    } else {
      state.section = "articles"; state.mode = "quiz"; state.show = "phrases";
      document.getElementById("quizBack").dataset.back = "articlesMenu";
      refreshQuiz(); show("quizView");
    }
  });
});

// Boutons retour
document.querySelectorAll(".back").forEach(b =>
  b.addEventListener("click", () => show(b.dataset.back)));

/* ---------- Toggles (Verbes/Phrases + Négation + Sens) ---------- */

function wireToggle(id, key, onChange) {
  document.querySelectorAll("#" + id + " button").forEach(b => {
    b.addEventListener("click", () => {
      document.querySelectorAll("#" + id + " button").forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      state[key] = b.dataset[key];
      onChange();
    });
  });
}

// Affiche/masque les toggles selon le contexte.
function syncToggles(view) { // view = "list" | "quiz"
  const verbes = state.section === "verbes";
  document.getElementById(view + "Toggle").style.display = verbes ? "" : "none";
  document.getElementById(view + "Neg").style.display =
    (verbes && state.show === "phrases") ? "" : "none";
}

function refreshListe() { syncToggles("list"); renderListe(); }
function refreshQuiz()  { syncToggles("quiz"); startQuiz(); }

wireToggle("listToggle", "show", refreshListe);
wireToggle("listNeg",    "neg", refreshListe);
wireToggle("listDir",    "dir", refreshListe);
wireToggle("quizToggle", "show", refreshQuiz);
wireToggle("quizNeg",    "neg", refreshQuiz);
wireToggle("quizDir",    "dir", refreshQuiz);

/* ---------- Sélection des éléments à afficher ---------- */

// Renvoie la liste d'items du contexte courant (verbes du groupe, filtrés si négation).
function currentItems() {
  if (state.section === "articles") return ARTICLES_QUIZ;
  let items = DATA[state.group].verbs;
  if (state.show === "phrases" && state.neg === "neg") items = items.filter(v => v.neg);
  return items;
}

/* ---------- Vue LISTE ---------- */

function renderListe() {
  const g = DATA[state.group];
  document.getElementById("listeTitle").textContent = g.label;
  const box = document.getElementById("listeContent");
  box.innerHTML = "";

  const enfr = state.dir === "enfr";
  const items = currentItems();

  if (items.length === 0) {
    box.innerHTML = `<p class="empty">Pas encore de phrase négative dans ce groupe.</p>`;
    return;
  }

  items.forEach(v => {
    const el = document.createElement("div");
    el.className = "entry";

    if (state.show === "verbes") {
      const forms = conjugate(v, state.group);
      const primary   = enfr ? v.en  : v.inf;
      const secondary = enfr ? v.inf : v.en;
      el.innerHTML =
        `<div class="head"><span class="fr">${primary}</span><span class="en">${secondary}</span></div>
         <div class="conj">${
           forms.map((f, i) => `<div class="p">${PRONOUNS[i]} :</div><div>${elide(i, f)}</div>`).join("")
         }</div>`;
    } else {
      const neg = state.neg === "neg";
      const fr = neg ? v.neg  : v.ex;
      const en = neg ? v.negEn : v.exEn;
      const primary   = enfr ? en : fr;
      const secondary = enfr ? fr : en;
      el.innerHTML =
        `<div class="ex">${primary}</div><div class="exEn">${secondary}</div>` +
        `<div class="conj mini">${
           conjugate(v, state.group).map((f, i) => `<div class="p">${PRONOUNS[i]} :</div><div>${elide(i, f)}</div>`).join("")
         }</div>`;
    }
    box.appendChild(el);
  });
}

/* ---------- Vue QUIZ ---------- */

let quizItems = [];
let quizIndex = 0;

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startQuiz() {
  const title = state.section === "articles" ? "Articles & petits mots" : DATA[state.group].label;
  document.getElementById("quizTitle").textContent = title;
  quizItems = shuffle(currentItems());
  quizIndex = 0;
  showQuizCard();
}

function showQuizCard() {
  const promptEl = document.getElementById("quizPrompt");
  const answerEl = document.getElementById("quizAnswer");
  const revealBtn = document.getElementById("revealBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (quizItems.length === 0) {
    document.getElementById("quizProgress").textContent = "";
    promptEl.textContent = "Pas encore de phrase négative ici 🙂";
    answerEl.classList.add("hidden");
    revealBtn.classList.add("hidden");
    nextBtn.classList.add("hidden");
    return;
  }

  const v = quizItems[quizIndex];
  const enfr = state.dir === "enfr"; // on montre l'anglais, deviner le français
  document.getElementById("quizProgress").textContent = `${quizIndex + 1} / ${quizItems.length}`;

  if (state.section === "articles") {
    promptEl.textContent = enfr ? v.exEn : v.ex;
    answerEl.innerHTML   = enfr ? v.ex   : v.exEn;
  } else if (state.show === "verbes") {
    const forms = conjugate(v, state.group).map((f, i) => withPronoun(i, f)).join("\n");
    if (enfr) {
      promptEl.textContent = v.en;
      answerEl.innerHTML = `${v.inf}<span class="sub">${forms}</span>`;
    } else {
      promptEl.textContent = v.inf;
      answerEl.innerHTML = `${v.en}<span class="sub">${forms}</span>`;
    }
  } else { // phrases
    const neg = state.neg === "neg";
    const fr = neg ? v.neg : v.ex;
    const en = neg ? v.negEn : v.exEn;
    const forms = conjugate(v, state.group).map((f, i) => withPronoun(i, f)).join("\n");
    promptEl.textContent = enfr ? en : fr;
    answerEl.innerHTML = `${enfr ? fr : en}<span class="sub"><b>${v.inf}</b> — ${v.en}\n${forms}</span>`;
  }

  answerEl.classList.add("hidden");
  revealBtn.classList.remove("hidden");
  nextBtn.classList.add("hidden");
}

document.getElementById("revealBtn").addEventListener("click", () => {
  document.getElementById("quizAnswer").classList.remove("hidden");
  document.getElementById("revealBtn").classList.add("hidden");
  document.getElementById("nextBtn").classList.remove("hidden");
});

document.getElementById("nextBtn").addEventListener("click", () => {
  quizIndex++;
  if (quizIndex >= quizItems.length) {
    quizItems = shuffle(quizItems); // on recommence, mélangé
    quizIndex = 0;
  }
  showQuizCard();
});

/* ---------- Démarrage ---------- */
show("rootMenu");
