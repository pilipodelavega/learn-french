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

const screens = ["rootMenu", "nav", "groupPicker", "listeView", "quizView", "articlesMenu", "lessonView",
                 "levelPicker", "storyList", "storyView", "storyQuiz", "vocabLevelPicker"];
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
    if (state.section === "verbes")   show("nav");
    else if (state.section === "articles") show("articlesMenu");
    else if (state.section === "vocabulaire") show("vocabLevelPicker");
    else show("levelPicker");
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

// Menu Vocabulaire -> choix du niveau -> quiz direct
document.querySelectorAll("#vocabLevelPicker .card").forEach(btn => {
  btn.addEventListener("click", () => {
    state.section = "vocabulaire";
    state.vlevel = btn.dataset.vlevel;
    document.getElementById("quizBack").dataset.back = "vocabLevelPicker";
    refreshQuiz(); show("quizView");
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
  if (state.section === "vocabulaire") return VOCAB[state.vlevel] || [];
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
  const title = state.section === "articles" ? "Articles & petits mots"
    : state.section === "vocabulaire" ? `Vocabulaire — ${LEVEL_LABEL[state.vlevel] || state.vlevel}`
    : DATA[state.group].label;
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
  } else if (state.section === "vocabulaire") {
    promptEl.textContent = enfr ? v.en : v.fr;
    answerEl.innerHTML   = enfr ? v.fr : v.en;
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

/* ---------- HISTOIRES ---------- */

// Les niveaux sont fournis par stories-a1.js … stories-b2.js
const STORIES = {};
[["A1", "STORIES_A1"], ["A2", "STORIES_A2"], ["B1", "STORIES_B1"], ["B2", "STORIES_B2"]]
  .forEach(([lvl, varName]) => {
    if (typeof window[varName] !== "undefined") STORIES[lvl] = window[varName];
  });

const LEVEL_LABEL = {
  A1: "A1 — Débutant", A2: "A2 — Élémentaire",
  B1: "B1 — Intermédiaire", B2: "B2 — Avancé"
};

/* ---------- VOCABULAIRE ---------- */

// Les niveaux sont fournis par vocab-a1.js … vocab-b2.js
const VOCAB = {};
[["A1", "VOCAB_A1"], ["A2", "VOCAB_A2"], ["B1", "VOCAB_B1"], ["B2", "VOCAB_B2"]]
  .forEach(([lvl, varName]) => {
    if (typeof window[varName] !== "undefined") VOCAB[lvl] = window[varName];
  });

let curLevel = "A1";
let curStory = null;
let sqIndex = 0, sqScore = 0, sqLocked = false;

// Progression des histoires réussies (10/10), persistée dans le navigateur.
const STORY_DONE_KEY = "lf_completed_stories";

function loadCompletedStories() {
  try { return JSON.parse(localStorage.getItem(STORY_DONE_KEY)) || {}; }
  catch (e) { return {}; }
}

function isStoryDone(level, titre) {
  const done = loadCompletedStories();
  return !!(done[level] && done[level][titre]);
}

function markStoryDone(level, titre) {
  const done = loadCompletedStories();
  if (!done[level]) done[level] = {};
  done[level][titre] = true;
  try { localStorage.setItem(STORY_DONE_KEY, JSON.stringify(done)); }
  catch (e) { /* stockage indisponible (navigation privée…) : on ignore silencieusement */ }
}

// Niveau -> liste des histoires
document.querySelectorAll("#levelPicker .card").forEach(btn => {
  btn.addEventListener("click", () => {
    curLevel = btn.dataset.level;
    renderStoryList();
    show("storyList");
  });
});

function renderStoryList() {
  const list = STORIES[curLevel] || [];
  document.getElementById("storyListTitle").textContent =
    `${LEVEL_LABEL[curLevel]} — ${list.length} histoire${list.length > 1 ? "s" : ""}`;
  const box = document.getElementById("storyListContent");
  box.innerHTML = "";

  if (list.length === 0) {
    box.innerHTML = `<p class="empty">Aucune histoire pour ce niveau (pas encore ajoutée).</p>`;
    return;
  }

  list.forEach((s, i) => {
    const done = isStoryDone(curLevel, s.titre);
    const b = document.createElement("button");
    b.className = "card story-card" + (done ? " done" : "");
    b.innerHTML =
      `<div class="num">${done ? "✅" : i + 1}</div>
       <div class="t"><span>${s.titre}</span><small>${done ? "Terminée · " : ""}${s.questions.length} questions</small></div>`;
    b.addEventListener("click", () => openStory(i));
    box.appendChild(b);
  });
}

function openStory(i) {
  curStory = STORIES[curLevel][i];
  document.getElementById("storyTitle").textContent = curStory.titre;
  document.getElementById("storyText").innerHTML =
    curStory.texte.split("\n").filter(p => p.trim()).map(p => `<p>${p.trim()}</p>`).join("");
  show("storyView");
}

document.getElementById("startStoryQuiz").addEventListener("click", () => {
  sqIndex = 0; sqScore = 0;
  document.getElementById("sqTitle").textContent = curStory.titre;
  document.getElementById("sqCard").classList.remove("hidden");
  document.getElementById("sqResult").classList.add("hidden");
  showQuestion();
  show("storyQuiz");
});

function showQuestion() {
  const q = curStory.questions[sqIndex];
  sqLocked = false;

  document.getElementById("sqProgress").textContent =
    `Question ${sqIndex + 1} / ${curStory.questions.length}   ·   Score : ${sqScore}`;
  document.getElementById("sqQuestion").textContent = q.q;

  const box = document.getElementById("sqOptions");
  box.innerHTML = "";
  q.opts.forEach((opt, i) => {
    const b = document.createElement("button");
    b.textContent = opt;
    b.addEventListener("click", () => answer(i, b));
    box.appendChild(b);
  });

  const fb = document.getElementById("sqFeedback");
  fb.classList.add("hidden");
  fb.className = "feedback hidden";
  document.getElementById("sqNext").classList.add("hidden");
}

function answer(i, btn) {
  if (sqLocked) return;
  sqLocked = true;

  const q = curStory.questions[sqIndex];
  const buttons = [...document.getElementById("sqOptions").children];
  buttons.forEach(b => (b.disabled = true));
  buttons[q.r].classList.add("good");

  const fb = document.getElementById("sqFeedback");
  if (i === q.r) {
    sqScore++;
    fb.textContent = "✅ Bravo, c'est juste !";
    fb.className = "feedback ok";
  } else {
    btn.classList.add("bad");
    fb.textContent = `❌ La bonne réponse est : ${q.opts[q.r]}`;
    fb.className = "feedback ko";
  }

  const next = document.getElementById("sqNext");
  next.textContent = sqIndex + 1 >= curStory.questions.length ? "Voir le résultat →" : "Suivant →";
  next.classList.remove("hidden");
}

document.getElementById("sqNext").addEventListener("click", () => {
  sqIndex++;
  if (sqIndex >= curStory.questions.length) showResult();
  else showQuestion();
});

function showResult() {
  const total = curStory.questions.length;
  document.getElementById("sqCard").classList.add("hidden");
  document.getElementById("sqResult").classList.remove("hidden");
  document.getElementById("sqScore").textContent = `${sqScore} / ${total}`;

  const pct = sqScore / total;
  document.getElementById("sqScoreMsg").textContent =
    pct === 1   ? "Parfait ! Tu as tout compris 🎉" :
    pct >= 0.8  ? "Très bien ! Presque parfait 👏" :
    pct >= 0.5  ? "Pas mal — relis l'histoire et réessaie 🙂" :
                  "Courage ! Relis l'histoire tranquillement 💪";

  if (pct === 1) markStoryDone(curLevel, curStory.titre);
}

document.getElementById("sqRetry").addEventListener("click", () => {
  sqIndex = 0; sqScore = 0;
  document.getElementById("sqCard").classList.remove("hidden");
  document.getElementById("sqResult").classList.add("hidden");
  showQuestion();
});

document.getElementById("sqBackList").addEventListener("click", () => {
  renderStoryList(); // pour refléter immédiatement le badge "Terminée"
  show("storyList");
});

/* ---------- Démarrage ---------- */
show("rootMenu");
