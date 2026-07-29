/* Histoires B1 — récits plus longs, imparfait / plus-que-parfait, nuances. */
var STORIES_B1 = [
  {
    titre: "Le choix difficile",
    texte: `Depuis huit ans, Vincent travaillait comme comptable dans une grande société. Le salaire était confortable et le poste stable, mais chaque matin, il se levait sans aucune envie.
Un jour, un ancien camarade lui a proposé de le rejoindre dans son atelier de menuiserie. C'était un métier qu'il avait toujours admiré, mais qu'il n'avait jamais osé essayer.
Pendant trois mois, Vincent a hésité. Sa femme l'encourageait à tenter l'expérience, alors que ses parents trouvaient l'idée irresponsable.
Finalement, il a démissionné. Les premiers mois ont été très durs : il gagnait deux fois moins et ses mains étaient couvertes d'ampoules.
Pourtant, il ne regrette rien. Aujourd'hui, il fabrique des meubles sur mesure et il dort mieux qu'avant.
« J'ai perdu de l'argent, dit-il souvent, mais j'ai retrouvé mes journées. »`,
    questions: [
      { q: "Quel était le métier de Vincent ?", opts: ["Menuisier", "Comptable", "Ingénieur"], r: 1 },
      { q: "Depuis combien de temps travaillait-il là ?", opts: ["Huit ans", "Cinq ans", "Dix ans"], r: 0 },
      { q: "Quel était le problème avec ce travail ?", opts: ["Le salaire était bas", "Ses collègues étaient désagréables", "Il n'avait aucune envie le matin"], r: 2 },
      { q: "Qui lui a fait une proposition ?", opts: ["Un ancien camarade", "Son frère", "Son patron"], r: 0 },
      { q: "Quel métier lui a-t-on proposé ?", opts: ["Peintre", "Menuisier", "Cuisinier"], r: 1 },
      { q: "Combien de temps a-t-il hésité ?", opts: ["Un mois", "Un an", "Trois mois"], r: 2 },
      { q: "Quelle était la position de sa femme ?", opts: ["Elle l'encourageait", "Elle était contre", "Elle était indifférente"], r: 0 },
      { q: "Que pensaient ses parents ?", opts: ["Que c'était courageux", "Que c'était irresponsable", "Ils n'ont rien dit"], r: 1 },
      { q: "Comment ont été les premiers mois ?", opts: ["Faciles", "Ennuyeux", "Très durs"], r: 2 },
      { q: "Que dit-il souvent aujourd'hui ?", opts: ["Il a perdu de l'argent mais retrouvé ses journées", "Il regrette un peu", "Il veut revenir en arrière"], r: 0 }
    ]
  },
  {
    titre: "La colocation",
    texte: `Quand Léo est arrivé à Toulouse pour ses études, il n'avait pas les moyens de louer seul. Il a donc répondu à une annonce de colocation.
L'appartement était grand mais mal isolé. Ses deux colocataires, Sarah et Diego, étudiaient la médecine.
Au début, la cohabitation a été compliquée. Diego laissait la vaisselle sale pendant des jours, et Léo n'osait rien dire.
La tension est montée jusqu'au soir où Sarah a proposé une réunion. Chacun a pu s'exprimer calmement.
Ils ont établi des règles simples : un planning de ménage, pas de bruit après vingt-trois heures et un dîner commun le dimanche.
Contre toute attente, ces dîners sont devenus le meilleur moment de leur semaine.
Trois ans plus tard, ils ne vivent plus ensemble, mais ils continuent de se voir régulièrement.`,
    questions: [
      { q: "Pourquoi Léo a-t-il choisi la colocation ?", opts: ["Il n'avait pas les moyens de louer seul", "Il n'aimait pas être seul", "C'était plus proche de l'université"], r: 0 },
      { q: "Dans quelle ville étudiait-il ?", opts: ["Bordeaux", "Toulouse", "Montpellier"], r: 1 },
      { q: "Quel était le défaut de l'appartement ?", opts: ["Il était trop petit", "Il était sombre", "Il était mal isolé"], r: 2 },
      { q: "Qu'étudiaient ses colocataires ?", opts: ["La médecine", "Le droit", "L'architecture"], r: 0 },
      { q: "Quel était le problème avec Diego ?", opts: ["Il faisait du bruit", "Il laissait la vaisselle sale", "Il ne payait pas le loyer"], r: 1 },
      { q: "Pourquoi Léo ne disait-il rien ?", opts: ["Il ne remarquait pas", "Ça ne le dérangeait pas", "Il n'osait pas"], r: 2 },
      { q: "Qui a proposé une réunion ?", opts: ["Sarah", "Diego", "Léo"], r: 0 },
      { q: "Quelle règle concernait le bruit ?", opts: ["Pas de musique du tout", "Pas de bruit après vingt-trois heures", "Pas d'invités"], r: 1 },
      { q: "Qu'est-ce qui est devenu le meilleur moment ?", opts: ["Le ménage", "Les soirées", "Le dîner commun du dimanche"], r: 2 },
      { q: "Que font-ils trois ans plus tard ?", opts: ["Ils se voient régulièrement", "Ils vivent toujours ensemble", "Ils ne se parlent plus"], r: 0 }
    ]
  },
  {
    titre: "Le malentendu au bureau",
    texte: `Aïcha travaillait depuis six mois dans une agence de communication. Un matin, elle a reçu un message de sa responsable : « Passez me voir dès votre arrivée. »
Le ton lui a paru sec. Pendant tout le trajet, elle a imaginé le pire : une erreur grave, peut-être même un licenciement.
Elle est entrée dans le bureau, le cœur battant. Sa responsable l'a regardée et lui a annoncé qu'elle voulait la proposer pour diriger un nouveau projet.
Aïcha est restée sans voix pendant quelques secondes. Puis elle a éclaté de rire nerveusement et a tout expliqué.
Sa responsable a compris et s'est excusée : elle avait écrit ce message rapidement, entre deux réunions, sans réfléchir au ton.
Depuis, l'agence fait attention à la formulation des messages internes. Un simple mot peut changer la journée de quelqu'un.`,
    questions: [
      { q: "Depuis combien de temps Aïcha travaillait-elle là ?", opts: ["Six mois", "Un an", "Trois mois"], r: 0 },
      { q: "Que disait le message ?", opts: ["De rappeler un client", "De passer la voir dès son arrivée", "De préparer une réunion"], r: 1 },
      { q: "Comment le ton lui a-t-il paru ?", opts: ["Chaleureux", "Neutre", "Sec"], r: 2 },
      { q: "Qu'a-t-elle imaginé ?", opts: ["Le pire, peut-être un licenciement", "Une promotion", "Une réunion ordinaire"], r: 0 },
      { q: "Que voulait vraiment sa responsable ?", opts: ["La réprimander", "La proposer pour diriger un projet", "Lui donner plus de travail"], r: 1 },
      { q: "Quelle a été la première réaction d'Aïcha ?", opts: ["Elle a pleuré", "Elle a refusé", "Elle est restée sans voix"], r: 2 },
      { q: "Qu'a-t-elle fait ensuite ?", opts: ["Elle a ri nerveusement et tout expliqué", "Elle est partie", "Elle n'a rien dit"], r: 0 },
      { q: "Pourquoi le message était-il si sec ?", opts: ["La responsable était fâchée", "Elle l'avait écrit vite entre deux réunions", "C'était son style habituel"], r: 1 },
      { q: "Qu'a fait la responsable ?", opts: ["Elle a ignoré le problème", "Elle a ri", "Elle s'est excusée"], r: 2 },
      { q: "Qu'est-ce qui a changé dans l'agence ?", opts: ["On fait attention à la formulation des messages", "On ne s'écrit plus", "Rien"], r: 0 }
    ]
  },
  {
    titre: "Retour au village",
    texte: `Après vingt ans passés à l'étranger,刻 Hélène est revenue dans le village où elle avait grandi.
Elle s'attendait à retrouver les lieux de son enfance intacts, mais beaucoup de choses avaient changé. L'école avait fermé, faute d'élèves. L'épicerie était devenue un simple dépôt de pain.
En revanche, la place centrale était toujours la même, avec ses platanes immenses et sa fontaine.
Elle a reconnu une ancienne voisine, Madame Aubert, qui avait beaucoup vieilli mais qui l'a identifiée immédiatement.
Elles ont bu un café ensemble et ont parlé pendant deux heures. Hélène a appris qui était parti, qui était resté, qui était mort.
En repartant, elle s'est rendu compte d'une chose étrange : elle ne se sentait ni tout à fait étrangère, ni tout à fait chez elle.`,
    questions: [
      { q: "Combien de temps Hélène a-t-elle passé à l'étranger ?", opts: ["Vingt ans", "Dix ans", "Trente ans"], r: 0 },
      { q: "À quoi s'attendait-elle ?", opts: ["À un village très différent", "À retrouver les lieux intacts", "À ne reconnaître personne"], r: 1 },
      { q: "Qu'est-il arrivé à l'école ?", opts: ["Elle a été agrandie", "Elle a déménagé", "Elle a fermé faute d'élèves"], r: 2 },
      { q: "Qu'est devenue l'épicerie ?", opts: ["Un simple dépôt de pain", "Un restaurant", "Une maison"], r: 0 },
      { q: "Qu'est-ce qui n'avait pas changé ?", opts: ["L'école", "La place centrale", "L'épicerie"], r: 1 },
      { q: "Qu'y a-t-il sur la place ?", opts: ["Une église", "Un marché", "Des platanes et une fontaine"], r: 2 },
      { q: "Qui a-t-elle reconnu ?", opts: ["Une ancienne voisine", "Son institutrice", "Un cousin"], r: 0 },
      { q: "Madame Aubert l'a-t-elle reconnue ?", opts: ["Non, pas du tout", "Oui, immédiatement", "Après un long moment"], r: 1 },
      { q: "Combien de temps ont-elles parlé ?", opts: ["Trente minutes", "Une heure", "Deux heures"], r: 2 },
      { q: "Comment se sentait Hélène en repartant ?", opts: ["Ni étrangère, ni tout à fait chez elle", "Complètement chez elle", "Totalement étrangère"], r: 0 }
    ]
  },
  {
    titre: "La grève des transports",
    texte: `Ce lundi-là, une grève générale des transports avait été annoncée depuis une semaine.
Karim, qui habitait à trente kilomètres de son bureau, avait prévu de partir plus tôt. Mais son réveil n'a pas sonné.
Quand il s'est levé, il était déjà sept heures et demie. Il a essayé de commander un taxi : tous étaient pris.
Il a alors sorti son vieux vélo du garage. Les pneus étaient à plat et la chaîne rouillée.
Après vingt minutes de réparation, il est parti. Le trajet, qu'il n'avait jamais fait à vélo, lui a pris presque deux heures.
Il est arrivé en retard, épuisé et trempé de sueur. Mais à sa grande surprise, la moitié de ses collègues n'étaient pas venus du tout.
Depuis ce jour, Karim fait le trajet à vélo une fois par semaine, par choix.`,
    questions: [
      { q: "Depuis quand la grève était-elle annoncée ?", opts: ["Une semaine", "La veille", "Un mois"], r: 0 },
      { q: "À quelle distance habitait Karim ?", opts: ["Dix kilomètres", "Trente kilomètres", "Cinquante kilomètres"], r: 1 },
      { q: "Quel a été son premier problème ?", opts: ["Il était malade", "Sa voiture ne démarrait pas", "Son réveil n'a pas sonné"], r: 2 },
      { q: "À quelle heure s'est-il levé ?", opts: ["Sept heures et demie", "Six heures", "Huit heures"], r: 0 },
      { q: "Pourquoi n'a-t-il pas pris de taxi ?", opts: ["C'était trop cher", "Tous étaient pris", "Il n'aime pas les taxis"], r: 1 },
      { q: "Dans quel état était le vélo ?", opts: ["Neuf", "Cassé", "Pneus à plat et chaîne rouillée"], r: 2 },
      { q: "Combien de temps a duré la réparation ?", opts: ["Vingt minutes", "Une heure", "Cinq minutes"], r: 0 },
      { q: "Combien de temps a duré le trajet ?", opts: ["Une heure", "Presque deux heures", "Trois heures"], r: 1 },
      { q: "Quelle a été la surprise en arrivant ?", opts: ["Le bureau était fermé", "Son patron l'attendait", "La moitié des collègues n'étaient pas venus"], r: 2 },
      { q: "Que fait Karim depuis ce jour ?", opts: ["Il vient à vélo une fois par semaine", "Il a déménagé", "Il travaille de chez lui"], r: 0 }
    ]
  },
  {
    titre: "Le bénévolat",
    texte: `Après son départ à la retraite, Bernard s'est vite ennuyé. Ses journées, autrefois trop courtes, lui paraissaient interminables.
Sa fille lui a suggéré de donner un peu de son temps à une association qui aidait les enfants en difficulté scolaire.
Il a hésité longtemps : il n'avait jamais enseigné et craignait de ne pas être à la hauteur.
Le premier jour, on lui a confié un garçon de dix ans, Noé, qui détestait les mathématiques.
Bernard n'a pas commencé par les exercices. Il lui a d'abord parlé de football, puis il a expliqué les pourcentages avec les statistiques des joueurs.
Au bout de quelques mois, les notes de Noé s'étaient nettement améliorées.
Bernard, lui, avait retrouvé le sentiment d'être utile. « Je croyais donner mon temps, dit-il, en réalité je reçois beaucoup plus. »`,
    questions: [
      { q: "Quel était le problème de Bernard après sa retraite ?", opts: ["Il s'ennuyait", "Il manquait d'argent", "Il était malade"], r: 0 },
      { q: "Qui lui a suggéré le bénévolat ?", opts: ["Sa femme", "Sa fille", "Un ami"], r: 1 },
      { q: "Que faisait l'association ?", opts: ["Elle aidait les personnes âgées", "Elle distribuait des repas", "Elle aidait les enfants en difficulté scolaire"], r: 2 },
      { q: "Pourquoi a-t-il hésité ?", opts: ["Il n'avait jamais enseigné", "Il n'avait pas le temps", "C'était trop loin"], r: 0 },
      { q: "Quel âge avait Noé ?", opts: ["Huit ans", "Dix ans", "Douze ans"], r: 1 },
      { q: "Qu'est-ce que Noé détestait ?", opts: ["La lecture", "L'école en général", "Les mathématiques"], r: 2 },
      { q: "Par quoi Bernard a-t-il commencé ?", opts: ["Il lui a parlé de football", "Par des exercices", "Par un test"], r: 0 },
      { q: "Comment a-t-il expliqué les pourcentages ?", opts: ["Avec des dessins", "Avec les statistiques des joueurs", "Avec de l'argent"], r: 1 },
      { q: "Quel a été le résultat ?", opts: ["Aucun changement", "Noé a changé d'école", "Ses notes se sont nettement améliorées"], r: 2 },
      { q: "Que dit Bernard de son expérience ?", opts: ["Il reçoit plus qu'il ne donne", "C'est fatigant", "Il va arrêter"], r: 0 }
    ]
  },
  {
    titre: "La photo retrouvée",
    texte: `En vidant le grenier de ses parents, Claire est tombée sur une vieille boîte en fer remplie de photographies.
La plupart étaient banales : des repas de famille, des vacances à la mer. Mais l'une d'elles l'a intriguée.
On y voyait son père, jeune, à côté d'une femme qu'elle ne connaissait pas. Ils riaient tous les deux devant une voiture rouge.
Au dos, une date : juin 1974, et un prénom : Martine.
Claire a longtemps hésité avant d'en parler à son père, aujourd'hui âgé de soixante-quinze ans.
Quand elle lui a montré la photo, il a souri tristement. Martine était sa sœur, morte à vingt-deux ans dans un accident.
Il n'en avait jamais parlé parce que la douleur était restée trop vive. Ce soir-là, ils ont discuté pendant des heures.`,
    questions: [
      { q: "Où Claire a-t-elle trouvé la boîte ?", opts: ["Dans le grenier de ses parents", "À la cave", "Dans un placard"], r: 0 },
      { q: "En quoi était la boîte ?", opts: ["En carton", "En fer", "En bois"], r: 1 },
      { q: "Comment étaient la plupart des photos ?", opts: ["Abîmées", "Anciennes", "Banales"], r: 2 },
      { q: "Qui apparaissait sur la photo intrigante ?", opts: ["Son père jeune et une femme inconnue", "Sa mère", "Ses grands-parents"], r: 0 },
      { q: "Que faisaient-ils sur la photo ?", opts: ["Ils dansaient", "Ils riaient devant une voiture rouge", "Ils mangeaient"], r: 1 },
      { q: "Quelle date figurait au dos ?", opts: ["Juin 1984", "Mai 1974", "Juin 1974"], r: 2 },
      { q: "Quel prénom était écrit ?", opts: ["Martine", "Marie", "Madeleine"], r: 0 },
      { q: "Quel âge a le père aujourd'hui ?", opts: ["Soixante-cinq ans", "Soixante-quinze ans", "Quatre-vingts ans"], r: 1 },
      { q: "Qui était Martine ?", opts: ["Une amie", "Une cousine", "Sa sœur"], r: 2 },
      { q: "Pourquoi n'en avait-il jamais parlé ?", opts: ["La douleur était trop vive", "Il avait oublié", "C'était un secret honteux"], r: 0 }
    ]
  },
  {
    titre: "Apprendre une langue",
    texte: `Quand Marta est arrivée en France, elle ne parlait pas un mot de français. Elle avait pourtant étudié l'anglais et l'allemand sans difficulté.
Les premières semaines ont été humiliantes. Au supermarché, elle montrait les produits du doigt. Au téléphone, elle raccrochait dès qu'on lui parlait trop vite.
Elle a essayé les applications, mais elle progressait lentement. Ce qui a vraiment changé les choses, c'est une décision simple : elle s'est inscrite à un club de randonnée.
Là, personne ne parlait sa langue. Elle était obligée de s'exprimer, même mal.
Au début, elle se contentait de sourire et d'écouter. Puis elle a commencé à poser des questions, à faire des blagues.
Deux ans plus tard, elle rêve parfois en français. Elle fait encore des fautes, mais elle a compris l'essentiel : on apprend une langue en la vivant, pas en l'étudiant.`,
    questions: [
      { q: "Quel était le niveau de Marta en arrivant ?", opts: ["Elle ne parlait pas un mot", "Elle se débrouillait", "Elle parlait couramment"], r: 0 },
      { q: "Quelles langues avait-elle apprises facilement ?", opts: ["L'espagnol et l'italien", "L'anglais et l'allemand", "Le russe"], r: 1 },
      { q: "Que faisait-elle au supermarché ?", opts: ["Elle demandait de l'aide", "Elle écrivait", "Elle montrait du doigt"], r: 2 },
      { q: "Que faisait-elle au téléphone ?", opts: ["Elle raccrochait", "Elle demandait de répéter", "Elle parlait anglais"], r: 0 },
      { q: "Pourquoi les applications ne suffisaient-elles pas ?", opts: ["Elles étaient chères", "Elle progressait lentement", "Elle n'aimait pas ça"], r: 1 },
      { q: "Quelle décision a tout changé ?", opts: ["Prendre des cours", "Déménager", "S'inscrire à un club de randonnée"], r: 2 },
      { q: "Pourquoi ce club était-il efficace ?", opts: ["Elle était obligée de s'exprimer", "Le professeur était bon", "C'était gratuit"], r: 0 },
      { q: "Que faisait-elle au début au club ?", opts: ["Elle parlait beaucoup", "Elle souriait et écoutait", "Elle restait à l'écart"], r: 1 },
      { q: "Que fait-elle parfois deux ans plus tard ?", opts: ["Elle enseigne", "Elle traduit", "Elle rêve en français"], r: 2 },
      { q: "Quelle est sa conclusion ?", opts: ["On apprend une langue en la vivant", "Il faut beaucoup étudier", "C'est une question de talent"], r: 0 }
    ]
  },
  {
    titre: "Le voisin bruyant",
    texte: `Pendant des mois, Julie a supporté la musique de son voisin du dessus. Chaque soir, vers vingt-deux heures, les basses faisaient vibrer son plafond.
Elle avait d'abord tapé au plafond avec un balai, sans résultat. Puis elle avait glissé un mot poli sous sa porte. Rien n'avait changé.
Excédée, elle a fini par écrire à la copropriété, en envisageant même une plainte.
Un samedi, elle l'a croisé dans l'escalier et a décidé de lui parler directement. Elle s'attendait à un conflit.
À sa surprise, le voisin est devenu tout rouge. Il ne s'était jamais rendu compte du problème : l'immeuble était ancien et il pensait que son casque suffisait quand il jouait de la batterie électronique.
Il a immédiatement installé un tapis isolant. Le bruit a cessé.
Julie a compris qu'elle avait perdu six mois par peur d'une simple conversation.`,
    questions: [
      { q: "Quel était le problème ?", opts: ["La musique du voisin du dessus", "Des travaux", "Des cris"], r: 0 },
      { q: "Vers quelle heure ?", opts: ["Vingt heures", "Vingt-deux heures", "Minuit"], r: 1 },
      { q: "Quelle a été sa première tentative ?", opts: ["Une lettre", "Un appel", "Taper au plafond avec un balai"], r: 2 },
      { q: "Qu'a-t-elle fait ensuite ?", opts: ["Glisser un mot poli sous sa porte", "Appeler la police", "Déménager"], r: 0 },
      { q: "À qui a-t-elle écrit ensuite ?", opts: ["À la mairie", "À la copropriété", "À un avocat"], r: 1 },
      { q: "Quand l'a-t-elle croisé ?", opts: ["Un dimanche", "Un vendredi", "Un samedi"], r: 2 },
      { q: "À quoi s'attendait-elle ?", opts: ["À un conflit", "À des excuses", "À une discussion agréable"], r: 0 },
      { q: "Quelle a été la réaction du voisin ?", opts: ["Il s'est fâché", "Il est devenu tout rouge", "Il a nié"], r: 1 },
      { q: "De quel instrument jouait-il ?", opts: ["De la guitare", "Du piano", "De la batterie électronique"], r: 2 },
      { q: "Qu'a compris Julie ?", opts: ["Elle avait perdu six mois par peur de parler", "Il fallait déménager", "Les voisins sont impossibles"], r: 0 }
    ]
  },
  {
    titre: "Le festival annulé",
    texte: `Depuis un an, une petite équipe de bénévoles préparait le festival de musique du village. Ils avaient réservé les groupes, loué la scène et vendu près de mille billets.
Trois jours avant l'événement, la météo a annoncé de violents orages. La préfecture a interdit tout rassemblement en plein air.
La nouvelle a été un choc. Certains bénévoles voulaient tout annuler et rembourser. D'autres refusaient d'abandonner.
En une nuit, ils ont trouvé une solution : déplacer le festival dans le gymnase, qui pouvait accueillir six cents personnes.
Ils ont contacté chaque spectateur, remboursé ceux qui ne pouvaient pas venir et réorganisé toute la logistique.
Le soir venu, le gymnase était plein. L'acoustique n'était pas idéale et il faisait très chaud, mais l'ambiance a été exceptionnelle.
Beaucoup disent aujourd'hui que c'était la meilleure édition du festival.`,
    questions: [
      { q: "Depuis combien de temps préparaient-ils le festival ?", opts: ["Un an", "Six mois", "Deux ans"], r: 0 },
      { q: "Combien de billets avaient-ils vendus ?", opts: ["Cinq cents", "Près de mille", "Deux mille"], r: 1 },
      { q: "Que s'est-il passé trois jours avant ?", opts: ["Un groupe a annulé", "La scène est tombée", "La météo a annoncé des orages"], r: 2 },
      { q: "Qu'a décidé la préfecture ?", opts: ["D'interdire tout rassemblement en plein air", "De reporter l'événement", "De ne rien faire"], r: 0 },
      { q: "Que voulaient certains bénévoles ?", opts: ["Continuer coûte que coûte", "Tout annuler et rembourser", "Attendre"], r: 1 },
      { q: "Quelle solution ont-ils trouvée ?", opts: ["Reporter d'un mois", "Faire le festival sous une tente", "Déplacer le festival dans le gymnase"], r: 2 },
      { q: "Quelle était la capacité du gymnase ?", opts: ["Six cents personnes", "Mille personnes", "Trois cents personnes"], r: 0 },
      { q: "Qu'ont-ils fait pour les spectateurs ?", opts: ["Rien", "Ils ont contacté chacun et remboursé certains", "Ils ont annulé les billets"], r: 1 },
      { q: "Quel était le défaut du gymnase ?", opts: ["Il était trop petit", "Il était mal éclairé", "L'acoustique et la chaleur"], r: 2 },
      { q: "Que dit-on aujourd'hui de cette édition ?", opts: ["Que c'était la meilleure", "Que c'était un échec", "Qu'on l'a oubliée"], r: 0 }
    ]
  },
  {
    titre: "L'entretien d'embauche",
    texte: `Samir avait envoyé plus de quarante candidatures avant d'obtenir enfin un entretien.
Il avait tout préparé : son parcours, ses motivations, des questions intelligentes sur l'entreprise.
Le jour venu, il est arrivé en avance, dans un costume acheté pour l'occasion.
L'entretien a mal commencé. Le recruteur, visiblement pressé, regardait sa montre et son téléphone.
Quand il lui a demandé pourquoi il avait quitté son poste précédent, Samir a hésité. Il ne voulait pas critiquer son ancien employeur, mais la vérité était que l'ambiance y était devenue toxique.
Il a choisi d'être honnête, sans accuser personne. Il a expliqué ce qu'il avait appris de cette expérience difficile.
Le recruteur a levé les yeux, a posé son téléphone et l'entretien a duré quarante minutes de plus.
Samir a été recruté deux semaines plus tard.`,
    questions: [
      { q: "Combien de candidatures avait-il envoyées ?", opts: ["Plus de quarante", "Une vingtaine", "Une dizaine"], r: 0 },
      { q: "Qu'avait-il acheté pour l'occasion ?", opts: ["Une cravate", "Un costume", "Des chaussures"], r: 1 },
      { q: "Quand est-il arrivé ?", opts: ["En retard", "Juste à l'heure", "En avance"], r: 2 },
      { q: "Comment était le recruteur au début ?", opts: ["Pressé et distrait", "Très attentif", "Agressif"], r: 0 },
      { q: "Que regardait-il ?", opts: ["Le CV", "Sa montre et son téléphone", "Par la fenêtre"], r: 1 },
      { q: "Quelle question a posé problème ?", opts: ["Sur son salaire", "Sur ses diplômes", "Pourquoi il avait quitté son poste"], r: 2 },
      { q: "Quelle était la vraie raison de son départ ?", opts: ["L'ambiance était devenue toxique", "Le salaire était bas", "L'entreprise a fermé"], r: 0 },
      { q: "Quel choix a-t-il fait ?", opts: ["Mentir", "Être honnête sans accuser personne", "Ne pas répondre"], r: 1 },
      { q: "Quelle a été la réaction du recruteur ?", opts: ["Il a mis fin à l'entretien", "Il s'est fâché", "Il a posé son téléphone"], r: 2 },
      { q: "Quand a-t-il été recruté ?", opts: ["Deux semaines plus tard", "Le jour même", "Un mois après"], r: 0 }
    ]
  },
  {
    titre: "Le potager partagé",
    texte: `Dans un quartier où beaucoup de gens ne se connaissaient pas, la mairie a mis à disposition un terrain vague pour créer un potager partagé.
Au début, seules six personnes se sont inscrites. Il a fallu enlever les gravats, retourner la terre et installer un point d'eau.
Les débuts ont été décevants : les tomates ont attrapé une maladie et les limaces ont dévoré presque toutes les salades.
Une retraitée, ancienne agricultrice, a alors proposé son aide. Elle a expliqué les rotations de cultures et les associations de plantes.
La deuxième année, la récolte a été abondante. Il y avait tellement de courgettes que les jardiniers en distribuaient aux passants.
Aujourd'hui, trente familles participent. Le potager a une liste d'attente.
Mais ce que les participants apprécient le plus, ce ne sont pas les légumes : ce sont les conversations autour des plantations.`,
    questions: [
      { q: "Qu'a mis à disposition la mairie ?", opts: ["Un terrain vague", "Un parc", "Une serre"], r: 0 },
      { q: "Combien de personnes se sont inscrites au début ?", opts: ["Trois", "Six", "Douze"], r: 1 },
      { q: "Qu'a-t-il fallu faire d'abord ?", opts: ["Planter", "Construire une cabane", "Enlever les gravats et retourner la terre"], r: 2 },
      { q: "Qu'est-il arrivé aux tomates ?", opts: ["Elles ont attrapé une maladie", "Elles ont gelé", "Elles ont été volées"], r: 0 },
      { q: "Qu'ont fait les limaces ?", opts: ["Rien", "Elles ont dévoré les salades", "Elles ont abîmé les courgettes"], r: 1 },
      { q: "Qui a proposé son aide ?", opts: ["Un jardinier de la ville", "Un professeur", "Une retraitée, ancienne agricultrice"], r: 2 },
      { q: "Qu'a-t-elle expliqué ?", opts: ["Les rotations et associations de plantes", "Comment arroser", "Comment vendre les légumes"], r: 0 },
      { q: "Comment a été la deuxième récolte ?", opts: ["Moyenne", "Abondante", "Mauvaise"], r: 1 },
      { q: "Combien de familles participent aujourd'hui ?", opts: ["Dix", "Vingt", "Trente"], r: 2 },
      { q: "Qu'apprécient le plus les participants ?", opts: ["Les conversations", "Les légumes", "L'exercice physique"], r: 0 }
    ]
  },
  {
    titre: "Un mensonge innocent",
    texte: `Pour l'anniversaire de sa mère, Élise avait organisé une fête surprise avec toute la famille.
Le plus difficile n'était pas la logistique, mais le mensonge. Pendant trois semaines, elle a dû inventer des excuses.
Sa mère, qui devinait souvent tout, a commencé à trouver le comportement de sa fille étrange. Elle lui a même demandé si elle avait des problèmes d'argent.
Le jour J, Élise a prétendu l'emmener à un simple déjeuner au restaurant. Sa mère n'avait pas envie de sortir et a failli refuser.
Quand elles sont entrées dans la salle et que trente personnes ont crié « surprise », sa mère est restée figée quelques secondes, puis elle a pleuré.
Plus tard dans la soirée, elle a avoué qu'elle avait des doutes depuis une semaine, mais qu'elle avait fait semblant de ne rien voir.`,
    questions: [
      { q: "Qu'avait organisé Élise ?", opts: ["Une fête surprise", "Un voyage", "Un dîner"], r: 0 },
      { q: "Quel était le plus difficile ?", opts: ["La logistique", "Le mensonge", "Le budget"], r: 1 },
      { q: "Pendant combien de temps a-t-elle menti ?", opts: ["Une semaine", "Un mois", "Trois semaines"], r: 2 },
      { q: "Que trouvait sa mère ?", opts: ["Le comportement de sa fille étrange", "Sa fille distante", "Rien du tout"], r: 0 },
      { q: "Que lui a-t-elle demandé ?", opts: ["Si elle était malade", "Si elle avait des problèmes d'argent", "Si elle déménageait"], r: 1 },
      { q: "Quel prétexte Élise a-t-elle utilisé le jour J ?", opts: ["Une visite chez le médecin", "Une promenade", "Un déjeuner au restaurant"], r: 2 },
      { q: "Quelle a été la réaction initiale de sa mère ?", opts: ["Elle n'avait pas envie de sortir", "Elle était enthousiaste", "Elle a tout deviné"], r: 0 },
      { q: "Combien de personnes attendaient ?", opts: ["Vingt", "Trente", "Cinquante"], r: 1 },
      { q: "Qu'a fait sa mère en entrant ?", opts: ["Elle a ri", "Elle est partie", "Elle est restée figée puis a pleuré"], r: 2 },
      { q: "Qu'a-t-elle avoué plus tard ?", opts: ["Qu'elle avait des doutes depuis une semaine", "Qu'elle n'aimait pas les surprises", "Qu'elle était déçue"], r: 0 }
    ]
  },
  {
    titre: "La panne d'électricité",
    texte: `Un soir d'hiver, une tempête a privé tout le quartier d'électricité vers dix-neuf heures.
Au début, la famille Morel a trouvé cela amusant. Ils ont allumé des bougies et sorti une vieille lampe de camping.
Puis les problèmes ont commencé : plus de chauffage, plus de wifi, et le contenu du congélateur qui risquait de fondre.
Les deux adolescents, privés d'écrans, se sont d'abord plaints pendant une heure. Ensuite, faute de mieux, ils ont accepté de jouer aux cartes avec leurs parents.
La soirée a duré jusqu'à une heure du matin. Ils ont parlé de sujets qu'ils n'abordaient jamais.
L'électricité est revenue le lendemain à midi. La première réaction des enfants a été de se précipiter sur leur téléphone.
Mais depuis, la famille a instauré une soirée sans écran par semaine.`,
    questions: [
      { q: "Quelle était la cause de la panne ?", opts: ["Une tempête", "Des travaux", "Un incendie"], r: 0 },
      { q: "À quelle heure a-t-elle commencé ?", opts: ["Dix-huit heures", "Dix-neuf heures", "Vingt heures"], r: 1 },
      { q: "Quelle a été la première réaction de la famille ?", opts: ["La panique", "La colère", "Ils ont trouvé cela amusant"], r: 2 },
      { q: "Qu'ont-ils sorti ?", opts: ["Des bougies et une lampe de camping", "Un générateur", "Des lampes de poche"], r: 0 },
      { q: "Quel était le risque avec le congélateur ?", opts: ["Qu'il explose", "Que le contenu fonde", "Qu'il tombe en panne"], r: 1 },
      { q: "Combien de temps les adolescents se sont-ils plaints ?", opts: ["Dix minutes", "Toute la soirée", "Une heure"], r: 2 },
      { q: "Qu'ont-ils fini par faire ?", opts: ["Jouer aux cartes avec leurs parents", "Se coucher", "Sortir"], r: 0 },
      { q: "Jusqu'à quelle heure a duré la soirée ?", opts: ["Minuit", "Une heure du matin", "Deux heures"], r: 1 },
      { q: "Quand l'électricité est-elle revenue ?", opts: ["Dans la nuit", "Le lendemain matin", "Le lendemain à midi"], r: 2 },
      { q: "Qu'a instauré la famille depuis ?", opts: ["Une soirée sans écran par semaine", "Un couvre-feu", "Rien"], r: 0 }
    ]
  },
  {
    titre: "Le client difficile",
    texte: `Nora travaillait depuis deux ans dans une librairie de quartier. Elle aimait conseiller les lecteurs et connaissait ses habitués par leur prénom.
Un homme entrait régulièrement, feuilletait des dizaines de livres pendant une heure, puis repartait sans rien acheter. Il critiquait souvent les choix de la librairie à voix haute.
Ses collègues l'évitaient. Nora, elle, a décidé un jour de lui poser une question simple : qu'est-ce qu'il cherchait vraiment ?
L'homme a été déstabilisé. Il a fini par expliquer qu'il avait été professeur de littérature et qu'il ne lisait plus depuis la mort de sa femme, deux ans plus tôt. Il venait par habitude.
Nora lui a conseillé un roman court, très différent de ce qu'il lisait autrefois.
Il est revenu la semaine suivante pour l'acheter. Puis un autre. Aujourd'hui, il anime le club de lecture de la librairie.`,
    questions: [
      { q: "Depuis combien de temps Nora travaillait-elle là ?", opts: ["Deux ans", "Un an", "Cinq ans"], r: 0 },
      { q: "Comment connaissait-elle ses habitués ?", opts: ["Par leur visage", "Par leur prénom", "Par leurs goûts"], r: 1 },
      { q: "Que faisait l'homme dans la librairie ?", opts: ["Il achetait beaucoup", "Il discutait", "Il feuilletait sans rien acheter"], r: 2 },
      { q: "Que faisait-il aussi ?", opts: ["Il critiquait les choix à voix haute", "Il dérangeait les clients", "Il volait des livres"], r: 0 },
      { q: "Comment réagissaient les collègues ?", opts: ["Ils lui parlaient", "Ils l'évitaient", "Ils se plaignaient"], r: 1 },
      { q: "Qu'a fait Nora ?", opts: ["Elle l'a ignoré", "Elle l'a chassé", "Elle lui a demandé ce qu'il cherchait"], r: 2 },
      { q: "Quel était son ancien métier ?", opts: ["Professeur de littérature", "Écrivain", "Éditeur"], r: 0 },
      { q: "Pourquoi ne lisait-il plus ?", opts: ["Il avait des problèmes de vue", "Sa femme était morte deux ans plus tôt", "Il n'avait plus le temps"], r: 1 },
      { q: "Que lui a conseillé Nora ?", opts: ["Un classique", "Un essai", "Un roman court très différent"], r: 2 },
      { q: "Que fait-il aujourd'hui ?", opts: ["Il anime le club de lecture", "Il travaille à la librairie", "Il écrit"], r: 0 }
    ]
  },
  {
    titre: "Le déménagement des cigognes",
    texte: `Chaque année, dans le village de Marc, les cigognes revenaient au printemps et construisaient leur nid sur le toit de l'église.
Mais cette année-là, des travaux de rénovation étaient prévus exactement à cette période. L'entreprise devait installer des échafaudages sur tout le clocher.
Une partie des habitants trouvait qu'il fallait respecter le calendrier des travaux. D'autres refusaient de déranger les oiseaux, protégés par la loi.
Une réunion publique a été organisée. Le débat a été vif et parfois désagréable.
Finalement, un compromis a été trouvé : les travaux commenceraient par l'autre côté de l'église et le clocher serait rénové en automne, après le départ des oiseaux.
Le chantier a coûté un peu plus cher et a duré plus longtemps.
Mais au printemps suivant, les cigognes sont revenues, exactement au même endroit.`,
    questions: [
      { q: "Où les cigognes construisaient-elles leur nid ?", opts: ["Sur le toit de l'église", "Sur la mairie", "Dans les arbres"], r: 0 },
      { q: "Quand revenaient-elles ?", opts: ["En été", "Au printemps", "En automne"], r: 1 },
      { q: "Quel était le problème cette année-là ?", opts: ["Elles n'étaient pas revenues", "Il y avait trop de nids", "Des travaux étaient prévus"], r: 2 },
      { q: "Que devait installer l'entreprise ?", opts: ["Des échafaudages sur le clocher", "Une nouvelle toiture", "Des filets"], r: 0 },
      { q: "Que pensait une partie des habitants ?", opts: ["Qu'il fallait protéger les oiseaux", "Qu'il fallait respecter le calendrier", "Qu'il fallait annuler"], r: 1 },
      { q: "Pourquoi ne pouvait-on pas déranger les oiseaux ?", opts: ["Ils étaient rares", "Ils étaient dangereux", "Ils sont protégés par la loi"], r: 2 },
      { q: "Qu'a-t-on organisé ?", opts: ["Une réunion publique", "Un vote", "Une pétition"], r: 0 },
      { q: "Comment a été le débat ?", opts: ["Calme", "Vif et parfois désagréable", "Très court"], r: 1 },
      { q: "Quel compromis a été trouvé ?", opts: ["Annuler les travaux", "Déplacer les nids", "Rénover le clocher en automne"], r: 2 },
      { q: "Que s'est-il passé au printemps suivant ?", opts: ["Les cigognes sont revenues au même endroit", "Elles ont changé de village", "Elles ne sont pas revenues"], r: 0 }
    ]
  },
  {
    titre: "La promesse",
    texte: `Quand ils avaient dix-huit ans, Thomas et Rachid s'étaient promis de faire ensemble le tour de l'Islande à moto avant leurs trente ans.
La vie en a décidé autrement. Thomas est devenu père très jeune. Rachid est parti travailler à l'étranger. Ils se sont peu à peu perdus de vue.
À trente-quatre ans, Thomas a reçu un message : « Il n'est pas trop tard. »
Ils ont mis un an à organiser le voyage. Il a fallu convaincre leurs familles, économiser et repasser le permis moto pour Rachid.
Le voyage n'a pas été idyllique. Il a plu presque tous les jours et une moto est tombée en panne à deux cents kilomètres de tout.
Mais pendant quinze jours, ils ont retrouvé quelque chose qu'ils croyaient perdu.
Depuis, ils s'appellent chaque mois, quoi qu'il arrive.`,
    questions: [
      { q: "Quel âge avaient-ils quand ils ont fait cette promesse ?", opts: ["Dix-huit ans", "Vingt ans", "Seize ans"], r: 0 },
      { q: "Que devaient-ils faire ?", opts: ["Un tour du monde", "Le tour de l'Islande à moto", "Traverser l'Europe"], r: 1 },
      { q: "Avant quel âge ?", opts: ["Vingt-cinq ans", "Trente-cinq ans", "Trente ans"], r: 2 },
      { q: "Qu'est-il arrivé à Thomas ?", opts: ["Il est devenu père très jeune", "Il est parti à l'étranger", "Il est tombé malade"], r: 0 },
      { q: "Et à Rachid ?", opts: ["Il s'est marié", "Il est parti travailler à l'étranger", "Il a arrêté la moto"], r: 1 },
      { q: "Quel âge avait Thomas quand il a reçu le message ?", opts: ["Trente ans", "Quarante ans", "Trente-quatre ans"], r: 2 },
      { q: "Que disait le message ?", opts: ["Il n'est pas trop tard", "Tu me manques", "On se voit ?"], r: 0 },
      { q: "Combien de temps ont-ils mis à organiser le voyage ?", opts: ["Six mois", "Un an", "Deux ans"], r: 1 },
      { q: "Qu'a dû refaire Rachid ?", opts: ["Un passeport", "Un examen médical", "Repasser le permis moto"], r: 2 },
      { q: "Que font-ils depuis ?", opts: ["Ils s'appellent chaque mois", "Ils voyagent chaque année", "Ils habitent près l'un de l'autre"], r: 0 }
    ]
  },
  {
    titre: "L'erreur de facturation",
    texte: `En vérifiant ses comptes, Nadia s'est aperçue qu'elle payait depuis quatorze mois un abonnement qu'elle avait pourtant résilié.
Elle a appelé le service client. Après vingt minutes d'attente, un conseiller lui a expliqué que la résiliation n'avait jamais été enregistrée.
Elle avait pourtant gardé une copie de sa lettre recommandée. Elle l'a envoyée par courriel le jour même.
Pendant trois semaines, personne ne lui a répondu. Elle a relancé quatre fois.
Elle a alors écrit un message public, factuel et poli, sur le réseau social de l'entreprise. La réponse est arrivée en deux heures.
On lui a remboursé la totalité de la somme, soit trois cent trente-six euros, avec des excuses.
Nadia en a tiré une leçon : garder toutes les preuves écrites, et ne jamais renoncer par fatigue.`,
    questions: [
      { q: "Depuis combien de temps payait-elle ?", opts: ["Quatorze mois", "Six mois", "Deux ans"], r: 0 },
      { q: "Combien de temps a-t-elle attendu au téléphone ?", opts: ["Dix minutes", "Vingt minutes", "Une heure"], r: 1 },
      { q: "Qu'a dit le conseiller ?", opts: ["Que c'était sa faute", "Qu'il ne pouvait rien faire", "Que la résiliation n'avait jamais été enregistrée"], r: 2 },
      { q: "Quelle preuve avait-elle gardée ?", opts: ["Une copie de sa lettre recommandée", "Un enregistrement", "Un courriel"], r: 0 },
      { q: "Combien de temps est-elle restée sans réponse ?", opts: ["Une semaine", "Trois semaines", "Deux mois"], r: 1 },
      { q: "Combien de fois a-t-elle relancé ?", opts: ["Deux fois", "Trois fois", "Quatre fois"], r: 2 },
      { q: "Qu'a-t-elle fait ensuite ?", opts: ["Un message public factuel et poli", "Une plainte", "Elle a abandonné"], r: 0 },
      { q: "En combien de temps a-t-on répondu ?", opts: ["Un jour", "Deux heures", "Une semaine"], r: 1 },
      { q: "Combien a-t-elle été remboursée ?", opts: ["Cent euros", "Deux cents euros", "Trois cent trente-six euros"], r: 2 },
      { q: "Quelle leçon en tire-t-elle ?", opts: ["Garder les preuves et ne pas renoncer", "Ne plus s'abonner", "Toujours téléphoner"], r: 0 }
    ]
  },
  {
    titre: "Le concours de cuisine",
    texte: `Le lycée organisait chaque année un concours de cuisine entre les classes. Cette fois, l'équipe de Lila partait avec un handicap : aucun de ses membres ne savait vraiment cuisiner.
Ils ont choisi un plat simple mais risqué : un soufflé au fromage.
Ils se sont entraînés quatre fois. Les trois premières tentatives ont été des échecs complets. Le soufflé retombait systématiquement.
Un membre de l'équipe a alors demandé conseil à sa grand-mère, qui leur a donné une astuce toute simple : ne jamais ouvrir le four avant la fin.
Le jour du concours, la cuisine était bruyante et le temps limité à quarante-cinq minutes.
Leur soufflé est sorti parfaitement gonflé. Ils ont terminé deuxièmes sur onze équipes.
Ce qui a le plus surpris Lila, ce n'est pas le résultat, mais de découvrir qu'elle aimait cuisiner.`,
    questions: [
      { q: "Quel était le handicap de l'équipe ?", opts: ["Personne ne savait cuisiner", "Ils étaient peu nombreux", "Ils n'avaient pas de matériel"], r: 0 },
      { q: "Quel plat ont-ils choisi ?", opts: ["Une tarte", "Un soufflé au fromage", "Un gratin"], r: 1 },
      { q: "Combien de fois se sont-ils entraînés ?", opts: ["Deux fois", "Trois fois", "Quatre fois"], r: 2 },
      { q: "Quel était le problème ?", opts: ["Le soufflé retombait", "Il brûlait", "Il manquait de goût"], r: 0 },
      { q: "À qui ont-ils demandé conseil ?", opts: ["À un professeur", "À une grand-mère", "À un chef"], r: 1 },
      { q: "Quelle était l'astuce ?", opts: ["Ajouter plus d'œufs", "Baisser la température", "Ne jamais ouvrir le four avant la fin"], r: 2 },
      { q: "Combien de temps avaient-ils le jour du concours ?", opts: ["Quarante-cinq minutes", "Une heure", "Trente minutes"], r: 0 },
      { q: "Comment était la cuisine ?", opts: ["Silencieuse", "Bruyante", "Trop petite"], r: 1 },
      { q: "À quelle place ont-ils terminé ?", opts: ["Premiers", "Troisièmes", "Deuxièmes"], r: 2 },
      { q: "Qu'est-ce qui a le plus surpris Lila ?", opts: ["De découvrir qu'elle aimait cuisiner", "Le résultat", "Le niveau des autres"], r: 0 }
    ]
  },
  {
    titre: "La montre de mon grand-père",
    texte: `À la mort de mon grand-père, j'ai hérité de sa montre. Ce n'était pas un objet de valeur : un modèle mécanique ordinaire, acheté dans les années soixante.
Elle ne fonctionnait plus depuis longtemps. Je l'ai gardée dans un tiroir pendant six ans sans y penser.
Un jour, en passant devant la vitrine d'un horloger, j'y suis entré sur un coup de tête.
Le réparateur, un homme d'une soixantaine d'années, l'a ouverte et a souri. Il m'a expliqué que ce mouvement était fabriqué dans une petite manufacture qui avait fermé en 1978.
La réparation a coûté plus cher que la montre ne valait. Je l'ai fait faire quand même.
Depuis, je la porte tous les jours. Elle retarde d'environ deux minutes par semaine.
Je pourrais la régler. Je ne le fais pas : ce léger décalage me rappelle qu'elle a une histoire.`,
    questions: [
      { q: "De quoi le narrateur a-t-il hérité ?", opts: ["De la montre de son grand-père", "D'une maison", "De bijoux"], r: 0 },
      { q: "Quand la montre avait-elle été achetée ?", opts: ["Dans les années cinquante", "Dans les années soixante", "Dans les années soixante-dix"], r: 1 },
      { q: "Combien de temps est-elle restée dans un tiroir ?", opts: ["Deux ans", "Dix ans", "Six ans"], r: 2 },
      { q: "Pourquoi est-il entré chez l'horloger ?", opts: ["Sur un coup de tête", "Sur conseil d'un ami", "Il avait rendez-vous"], r: 0 },
      { q: "Quel âge avait le réparateur ?", opts: ["Environ quarante ans", "Une soixantaine d'années", "Plus de quatre-vingts ans"], r: 1 },
      { q: "Quand la manufacture avait-elle fermé ?", opts: ["En 1968", "En 1988", "En 1978"], r: 2 },
      { q: "Combien a coûté la réparation ?", opts: ["Plus cher que la valeur de la montre", "Très peu", "Rien"], r: 0 },
      { q: "A-t-il fait réparer la montre ?", opts: ["Non", "Oui, quand même", "Il a hésité longtemps"], r: 1 },
      { q: "De combien retarde-t-elle ?", opts: ["Une minute par jour", "Cinq minutes par mois", "Deux minutes par semaine"], r: 2 },
      { q: "Pourquoi ne la règle-t-il pas ?", opts: ["Le décalage lui rappelle qu'elle a une histoire", "C'est trop cher", "Il n'y pense pas"], r: 0 }
    ]
  },
  {
    titre: "Le silence de la bibliothèque",
    texte: `La bibliothèque municipale allait fermer, faute de budget. La fréquentation avait baissé de moitié en cinq ans.
Une nouvelle directrice a été nommée six mois avant la date prévue de fermeture. Beaucoup pensaient que son rôle serait simplement d'organiser la fin.
Elle a fait le contraire. Elle a d'abord supprimé la règle du silence absolu dans une partie de la salle.
Ensuite, elle a créé des ateliers : aide aux devoirs, cours d'informatique pour les personnes âgées, heure du conte pour les enfants.
Certains lecteurs habitués se sont plaints du bruit. Trois d'entre eux ont écrit une lettre de protestation.
Mais en un an, la fréquentation a triplé. La mairie a renoncé à fermer l'établissement.
La directrice a alors aménagé une salle entièrement silencieuse, à l'étage. Les trois protestataires en sont aujourd'hui les plus fidèles usagers.`,
    questions: [
      { q: "Pourquoi la bibliothèque allait-elle fermer ?", opts: ["Faute de budget", "Le bâtiment était dangereux", "Il n'y avait plus de personnel"], r: 0 },
      { q: "De combien la fréquentation avait-elle baissé ?", opts: ["D'un tiers", "De moitié", "De trois quarts"], r: 1 },
      { q: "Quand la directrice a-t-elle été nommée ?", opts: ["Un an avant", "Deux mois avant", "Six mois avant la fermeture"], r: 2 },
      { q: "Que pensaient beaucoup de gens de son rôle ?", opts: ["Qu'elle devait organiser la fin", "Qu'elle allait tout sauver", "Qu'elle ne resterait pas"], r: 0 },
      { q: "Quelle règle a-t-elle supprimée ?", opts: ["L'interdiction de manger", "Le silence absolu dans une partie de la salle", "La limite d'emprunts"], r: 1 },
      { q: "Quel atelier a-t-elle créé pour les personnes âgées ?", opts: ["De la lecture", "De la gymnastique", "Des cours d'informatique"], r: 2 },
      { q: "Qui s'est plaint ?", opts: ["Des lecteurs habitués", "La mairie", "Le personnel"], r: 0 },
      { q: "Combien ont écrit une lettre ?", opts: ["Deux", "Trois", "Dix"], r: 1 },
      { q: "Comment a évolué la fréquentation ?", opts: ["Elle a doublé", "Elle a baissé encore", "Elle a triplé"], r: 2 },
      { q: "Que sont devenus les trois protestataires ?", opts: ["Les plus fidèles usagers de la salle silencieuse", "Ils ne viennent plus", "Ils travaillent là"], r: 0 }
    ]
  }
];
