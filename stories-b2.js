/* Histoires B2 — textes plus nuancés, subjonctif, registre plus soutenu. */
var STORIES_B2 = [
  {
    titre: "La démission",
    texte: `Cela faisait des mois que Camille envisageait de démissionner, sans jamais oser franchir le pas. Il fallait, disait-elle, que les conditions soient réunies : un projet clair, des économies suffisantes, l'assentiment de son compagnon.
Ce jour-là pourtant, aucune de ces conditions n'était remplie. C'est une remarque anodine de son directeur, glissée entre deux dossiers, qui a précipité sa décision. Il avait dit, sans même la regarder : « De toute façon, vous êtes interchangeable. »
Elle a rédigé sa lettre le soir même, convaincue qu'il fallait qu'elle parte avant que la peur ne reprenne le dessus.
Ses proches n'ont pas compris qu'elle renonce ainsi à un poste stable pour l'incertitude. Sa mère craignait qu'elle ne le regrette amèrement.
Six mois plus tard, Camille travaille en indépendante. Ses revenus sont irréguliers, mais elle affirme n'avoir jamais autant apprécié un lundi matin.
Il est probable, dit-elle en riant, qu'elle doive une fière chandelle à ce directeur maladroit.`,
    questions: [
      { q: "Depuis combien de temps Camille envisageait-elle de démissionner ?", opts: ["Quelques jours", "Des mois", "Des années"], r: 1 },
      { q: "Quelles conditions estimait-elle nécessaires ?", opts: ["Un projet clair, des économies, l'accord de son compagnon", "Une promotion", "Un nouveau contrat"], r: 0 },
      { q: "Qu'est-ce qui a précipité sa décision ?", opts: ["Une remarque de son directeur", "Un conflit ouvert", "Une offre d'emploi"], r: 0 },
      { q: "Qu'avait dit le directeur ?", opts: ["Qu'elle était incompétente", "Qu'elle était interchangeable", "Qu'elle devait démissionner"], r: 1 },
      { q: "Quand a-t-elle rédigé sa lettre ?", opts: ["Le lendemain", "Une semaine après", "Le soir même"], r: 2 },
      { q: "Pourquoi voulait-elle partir vite ?", opts: ["Avant que la peur ne reprenne le dessus", "Pour un nouveau poste", "Pour des raisons de santé"], r: 0 },
      { q: "Comment ses proches ont-ils réagi ?", opts: ["Ils l'ont soutenue immédiatement", "Ils n'ont pas compris ce choix", "Ils étaient indifférents"], r: 1 },
      { q: "Que craignait sa mère ?", opts: ["Qu'elle le regrette amèrement", "Qu'elle perde ses amis", "Qu'elle ne trouve rien"], r: 0 },
      { q: "Comment sont ses revenus aujourd'hui ?", opts: ["Stables", "Irréguliers", "Très élevés"], r: 1 },
      { q: "Que dit-elle en riant à propos du directeur ?", opts: ["Qu'elle lui doit une fière chandelle", "Qu'elle le déteste", "Qu'elle veut se venger"], r: 0 }
    ]
  },
  {
    titre: "L'héritage encombrant",
    texte: `Lorsque son oncle est décédé, Julien a hérité d'une maison qu'il n'avait jamais vraiment aimée : une bâtisse sombre, chargée de souvenirs qui n'étaient pas les siens.
Il fallait qu'il décide rapidement : la vendre, la louer, ou s'y installer. Chaque option semblait insatisfaisante, comme si accepter l'une d'elles revenait à trahir quelque chose.
Sa sœur, elle, ne comprenait pas ces hésitations. Pour elle, il était évident qu'on vende et qu'on partage l'argent au plus vite.
Julien a fini par passer un week-end seul dans la maison, sans autre objectif que d'y réfléchir. Il a ouvert des cartons qu'il croyait sans intérêt.
Il y a découvert des lettres que son oncle, homme taciturne, avait écrites sans jamais les envoyer, adressées à un amour de jeunesse.
Cette découverte a tout changé. Julien a décidé de garder la maison, non par sentimentalisme naïf, mais parce qu'il avait soudain l'impression de connaître, enfin, l'homme dont il portait le nom de famille.`,
    questions: [
      { q: "De quoi Julien a-t-il hérité ?", opts: ["D'une maison", "D'une entreprise", "D'un terrain"], r: 0 },
      { q: "Comment décrit-il la maison ?", opts: ["Lumineuse et accueillante", "Sombre, chargée de souvenirs", "Moderne"], r: 1 },
      { q: "Quelles options envisageait-il ?", opts: ["La vendre, la louer, s'y installer", "La détruire", "La donner"], r: 0 },
      { q: "Que pensait sa sœur ?", opts: ["Qu'il fallait la vendre et partager l'argent", "Qu'il fallait la garder", "Elle était indifférente"], r: 0 },
      { q: "Qu'a fait Julien pour réfléchir ?", opts: ["Il a consulté un notaire", "Il a passé un week-end seul dans la maison", "Il a demandé conseil à des amis"], r: 1 },
      { q: "Qu'a-t-il trouvé dans des cartons ?", opts: ["De l'argent", "Des photos", "Des lettres jamais envoyées"], r: 2 },
      { q: "À qui étaient adressées ces lettres ?", opts: ["À un frère", "À un amour de jeunesse", "À sa mère"], r: 1 },
      { q: "Comment était son oncle, selon le texte ?", opts: ["Taciturne", "Bavard", "Joyeux"], r: 0 },
      { q: "Qu'a finalement décidé Julien ?", opts: ["De vendre la maison", "De la louer", "De la garder"], r: 2 },
      { q: "Pourquoi a-t-il pris cette décision ?", opts: ["Pour des raisons financières", "Il avait l'impression de connaître enfin son oncle", "Sa sœur a changé d'avis"], r: 1 }
    ]
  },
  {
    titre: "Le procès du silence",
    texte: `Il aura fallu vingt ans pour que l'affaire soit enfin jugée. Le village entier attendait ce moment avec une impatience mêlée d'appréhension.
À l'origine de ce procès, un accident survenu dans l'usine locale : trois ouvriers avaient été gravement intoxiqués par un produit chimique dont la dangerosité était, semble-t-il, connue de la direction depuis longtemps.
Pendant des années, personne n'avait osé porter plainte, de peur de perdre son emploi dans une région où l'usine était le principal employeur.
C'est finalement la fille de l'un des ouvriers, devenue avocate, qui a réuni les preuves nécessaires. Elle exigeait que justice soit rendue, quitte à s'opposer à des gens qu'elle avait connus enfant.
Le procès a duré trois semaines. La direction a nié jusqu'au bout, avant qu'un document interne ne soit produit, prouvant qu'elle savait.
Le jugement a été sévère. Mais pour beaucoup d'habitants, ce qui comptait n'était pas tant la sanction que le fait, enfin, d'avoir été entendus.`,
    questions: [
      { q: "Combien de temps a-t-il fallu pour que l'affaire soit jugée ?", opts: ["Dix ans", "Vingt ans", "Cinq ans"], r: 1 },
      { q: "Quelle était l'origine du procès ?", opts: ["Un licenciement collectif", "Un accident chimique dans une usine", "Une fraude financière"], r: 1 },
      { q: "Combien d'ouvriers avaient été intoxiqués ?", opts: ["Deux", "Trois", "Cinq"], r: 1 },
      { q: "Pourquoi personne n'avait porté plainte avant ?", opts: ["Par peur de perdre son emploi", "Par manque de preuves", "Par indifférence"], r: 0 },
      { q: "Qui a réuni les preuves ?", opts: ["Un journaliste", "La fille d'un ouvrier, devenue avocate", "Un syndicat"], r: 1 },
      { q: "Qu'exigeait-elle ?", opts: ["Une compensation financière", "Que justice soit rendue", "La fermeture de l'usine"], r: 1 },
      { q: "Combien de temps a duré le procès ?", opts: ["Une semaine", "Trois semaines", "Deux mois"], r: 1 },
      { q: "Qu'a fait la direction jusqu'au bout ?", opts: ["Elle a nié", "Elle a reconnu les faits", "Elle a proposé un accord"], r: 0 },
      { q: "Qu'est-ce qui a fait basculer le procès ?", opts: ["Un témoignage", "Un document interne", "Une expertise"], r: 1 },
      { q: "Qu'est-ce qui comptait le plus pour les habitants ?", opts: ["Le montant de la sanction", "D'avoir été entendus", "La fermeture de l'usine"], r: 1 }
    ]
  },
  {
    titre: "L'atelier clandestin",
    texte: `Dans les années qui ont suivi la fermeture de l'usine textile, la petite ville semblait résignée à son déclin. Les commerces fermaient les uns après les autres.
Sans que personne ne s'en aperçoive vraiment, un groupe d'anciennes ouvrières s'était mis à se réunir chaque semaine dans un garage désaffecté, pour continuer à coudre.
Ce qui n'était au départ qu'une manière de rester ensemble est peu à peu devenu autre chose. Elles ont commencé à vendre leurs créations sur les marchés voisins, bien que la plupart n'y aient jamais pensé sérieusement auparavant.
Un journaliste local, intrigué par la qualité inhabituelle de ces vêtements artisanaux, a consacré un article à leur initiative. L'article a été partagé bien au-delà de la région.
Il a fallu qu'une styliste parisienne les contacte pour qu'elles réalisent l'ampleur de ce qu'elles avaient créé, sans le vouloir vraiment.
Aujourd'hui, l'atelier emploie douze personnes et forme d'anciens ouvriers d'autres secteurs. Nul n'aurait pu prédire qu'un simple prétexte pour se retrouver deviendrait une entreprise.`,
    questions: [
      { q: "Qu'est-ce qui avait fermé dans cette ville ?", opts: ["Une usine textile", "Une mine", "Une gare"], r: 0 },
      { q: "Que faisaient les anciennes ouvrières chaque semaine ?", opts: ["Elles se réunissaient pour coudre", "Elles cherchaient du travail", "Elles manifestaient"], r: 0 },
      { q: "Où se réunissaient-elles ?", opts: ["Dans une salle municipale", "Dans un garage désaffecté", "Chez l'une d'elles"], r: 1 },
      { q: "Qu'ont-elles commencé à faire avec leurs créations ?", opts: ["Les donner", "Les vendre sur des marchés", "Les exposer"], r: 1 },
      { q: "Qui a écrit un article sur elles ?", opts: ["Un journaliste local", "Une styliste", "Un chercheur"], r: 0 },
      { q: "Qu'a-t-il remarqué en particulier ?", opts: ["Le prix bas", "La qualité inhabituelle", "La rapidité de production"], r: 1 },
      { q: "Qui les a contactées ensuite ?", opts: ["Un investisseur", "Une styliste parisienne", "Un homme politique"], r: 1 },
      { q: "Combien de personnes emploie l'atelier aujourd'hui ?", opts: ["Six", "Douze", "Vingt"], r: 1 },
      { q: "Que forme aussi l'atelier ?", opts: ["Des étudiants", "D'anciens ouvriers d'autres secteurs", "Des touristes"], r: 1 },
      { q: "Comment cette entreprise est-elle née, selon le texte ?", opts: ["D'un projet mûrement réfléchi", "D'un simple prétexte pour se retrouver", "D'un financement public"], r: 1 }
    ]
  },
  {
    titre: "Le dernier cours",
    texte: `Après trente-huit ans d'enseignement, Monsieur Lévêque s'apprêtait à donner son dernier cours avant la retraite. Il redoutait ce moment plus qu'il ne l'espérait.
Contrairement à ce qu'il imaginait, il ne ressentait aucun soulagement à l'idée de quitter une profession qu'il jugeait, certains jours, épuisante.
Ses collègues avaient organisé, à son insu, une petite cérémonie. Il fallait cependant que tout paraisse naturel, pour ne pas éveiller ses soupçons.
En entrant dans la salle, il a d'abord cru à une plaisanterie : d'anciens élèves, dont certains n'avaient pas remis les pieds dans l'établissement depuis vingt ans, étaient venus.
L'un d'eux, devenu chirurgien, a pris la parole. Il a raconté comment une remarque, prononcée presque par hasard un après-midi de pluie, avait changé le cours de sa vie.
Monsieur Lévêque, peu enclin à l'émotion en public, n'a pas réussi à retenir ses larmes. Il a dit plus tard qu'il n'avait jamais mesuré, avant ce jour, l'ampleur réelle de son métier.`,
    questions: [
      { q: "Combien d'années Monsieur Lévêque avait-il enseigné ?", opts: ["Vingt-huit ans", "Trente-huit ans", "Quarante-cinq ans"], r: 1 },
      { q: "Comment envisageait-il son dernier cours ?", opts: ["Avec soulagement", "Avec appréhension", "Avec indifférence"], r: 1 },
      { q: "Qu'avaient organisé ses collègues ?", opts: ["Un pot de départ classique", "Une cérémonie surprise", "Rien de particulier"], r: 1 },
      { q: "Pourquoi fallait-il que tout paraisse naturel ?", opts: ["Pour ne pas éveiller ses soupçons", "Par manque de temps", "Pour respecter le règlement"], r: 0 },
      { q: "Qui est venu à la cérémonie ?", opts: ["Uniquement des collègues", "D'anciens élèves", "Des inspecteurs"], r: 1 },
      { q: "Depuis combien de temps certains n'étaient-ils pas revenus ?", opts: ["Dix ans", "Vingt ans", "Cinq ans"], r: 1 },
      { q: "Quel métier exerce l'ancien élève qui a pris la parole ?", opts: ["Avocat", "Chirurgien", "Professeur"], r: 1 },
      { q: "Qu'est-ce qui avait changé sa vie ?", opts: ["Un livre offert", "Une remarque dite presque par hasard", "Une punition"], r: 1 },
      { q: "Comment réagit Monsieur Lévêque, habituellement ?", opts: ["Il est peu enclin à l'émotion en public", "Il pleure facilement", "Il est très expressif"], r: 0 },
      { q: "Qu'a-t-il compris ce jour-là ?", opts: ["Qu'il devait continuer à enseigner", "L'ampleur réelle de son métier", "Qu'il avait fait des erreurs"], r: 1 }
    ]
  },
  {
    titre: "Le refus",
    texte: `Quand la maison d'édition a proposé à Sofia de publier son manuscrit, à condition qu'elle en modifie substantiellement la fin, elle s'est trouvée face à un dilemme qu'elle n'avait pas anticipé.
L'éditrice, pourtant bienveillante, estimait que le dénouement actuel, trop sombre, risquait de décevoir les lecteurs et, par conséquent, de nuire aux ventes.
Sofia comprenait cet argument commercial, sans pour autant parvenir à s'y résoudre. Il lui semblait que trahir cette fin reviendrait à trahir le livre tout entier.
Ses amis, partagés, l'encourageaient tantôt à accepter, considérant qu'un premier roman publié valait mieux qu'un chef-d'œuvre resté dans un tiroir, tantôt à refuser, au nom d'une intégrité qu'ils jugeaient précieuse.
Après plusieurs nuits sans sommeil, Sofia a décidé de refuser, quitte à ce que le manuscrit ne trouve jamais preneur.
Deux ans plus tard, une plus petite maison d'édition, spécialisée dans la littérature exigeante, a accepté de le publier tel quel. Le livre n'a pas connu un succès commercial retentissant, mais il a obtenu un prix littéraire dont Sofia dit qu'il vaut, à ses yeux, toutes les ventes du monde.`,
    questions: [
      { q: "Que proposait la maison d'édition à Sofia ?", opts: ["De publier son manuscrit sans changement", "De le publier à condition de modifier la fin", "De le refuser"], r: 1 },
      { q: "Que pensait l'éditrice de la fin actuelle ?", opts: ["Qu'elle était trop sombre", "Qu'elle était trop courte", "Qu'elle était incompréhensible"], r: 0 },
      { q: "Pourquoi l'éditrice voulait-elle ce changement ?", opts: ["Par goût personnel", "Pour ne pas nuire aux ventes", "Sur ordre de la direction"], r: 1 },
      { q: "Que ressentait Sofia à l'idée de changer la fin ?", opts: ["Que ce serait trahir le livre", "Que c'était une bonne idée", "Que c'était sans importance"], r: 0 },
      { q: "Comment réagissaient ses amis ?", opts: ["Ils étaient tous d'accord pour accepter", "Ils étaient partagés", "Ils étaient tous contre"], r: 1 },
      { q: "Qu'a finalement décidé Sofia ?", opts: ["D'accepter les modifications", "De refuser", "D'abandonner le projet"], r: 1 },
      { q: "Quel risque prenait-elle en refusant ?", opts: ["Que le manuscrit ne trouve jamais preneur", "De perdre de l'argent", "D'être poursuivie"], r: 0 },
      { q: "Qui a finalement publié le livre ?", opts: ["La même maison d'édition", "Une plus petite maison, spécialisée", "Sofia elle-même"], r: 1 },
      { q: "Le livre a-t-il eu un grand succès commercial ?", opts: ["Oui, énorme", "Non, mais il a obtenu un prix littéraire", "Il n'a jamais été lu"], r: 1 },
      { q: "Que dit Sofia de ce prix ?", opts: ["Qu'il ne compte pas vraiment", "Qu'il vaut toutes les ventes du monde", "Qu'elle ne s'y attendait pas"], r: 1 }
    ]
  },
  {
    titre: "Le témoin discret",
    texte: `Personne, dans le quartier, n'aurait soupçonné Madame Ferrand, quatre-vingt-trois ans, d'avoir été le témoin clé d'une affaire qui allait défrayer la chronique pendant des semaines.
Elle vivait seule, passait le plus clair de son temps à sa fenêtre, observant sans grand intérêt apparent les allées et venues de la rue.
Le soir de l'incident, elle avait remarqué un détail que la police, dans un premier temps, jugeait insignifiant : une camionnette garée à un endroit inhabituel, pendant quelques minutes seulement.
Ce n'est que plusieurs semaines plus tard, alors que l'enquête piétinait, qu'un inspecteur a eu l'idée de l'interroger de nouveau, plus longuement cette fois.
Madame Ferrand, avec une précision qui a surpris tout le monde, a décrit non seulement le véhicule, mais aussi une partie de la plaque d'immatriculation, qu'elle avait mémorisée sans même en avoir conscience.
Cette information a permis de résoudre l'affaire. Interrogée par un journaliste sur les raisons de cette mémoire exceptionnelle, elle a simplement répondu qu'à son âge, il ne lui restait que peu de choses à faire, sinon regarder, vraiment regarder, ce qui se passait autour d'elle.`,
    questions: [
      { q: "Quel âge avait Madame Ferrand ?", opts: ["Soixante-treize ans", "Quatre-vingt-trois ans", "Quatre-vingt-treize ans"], r: 1 },
      { q: "Comment vivait-elle ?", opts: ["En famille", "Seule", "En maison de retraite"], r: 1 },
      { q: "Que faisait-elle souvent ?", opts: ["Elle jardinait", "Elle regardait la rue depuis sa fenêtre", "Elle lisait"], r: 1 },
      { q: "Qu'avait-elle remarqué le soir de l'incident ?", opts: ["Une camionnette garée à un endroit inhabituel", "Un cri", "Une bagarre"], r: 0 },
      { q: "Comment la police avait-elle d'abord jugé ce détail ?", opts: ["Très important", "Insignifiant", "Suspect"], r: 1 },
      { q: "Quand l'a-t-on interrogée à nouveau ?", opts: ["Le lendemain", "Plusieurs semaines plus tard", "Un an après"], r: 1 },
      { q: "Pourquoi l'a-t-on réinterrogée ?", opts: ["L'enquête piétinait", "Elle avait demandé à parler", "Un nouveau témoin l'a désignée"], r: 0 },
      { q: "Qu'a-t-elle réussi à décrire précisément ?", opts: ["Le visage du conducteur", "Une partie de la plaque d'immatriculation", "L'heure exacte"], r: 1 },
      { q: "Avait-elle conscience d'avoir mémorisé ce détail ?", opts: ["Oui, parfaitement", "Non, pas vraiment", "Elle l'avait noté"], r: 1 },
      { q: "Que répond-elle sur sa mémoire exceptionnelle ?", opts: ["Qu'elle a un don", "Qu'elle n'a que peu de choses à faire, sinon regarder", "Qu'elle a suivi une formation"], r: 1 }
    ]
  },
  {
    titre: "Le pari insensé",
    texte: `À quarante-sept ans, sans expérience préalable, Denis a décidé de traverser l'Atlantique à la rame, en solitaire. La plupart de ses proches ont d'abord cru à une plaisanterie.
Il s'agissait, pour lui, moins d'un exploit sportif que d'une manière de faire le deuil de son couple, après une séparation qu'il n'avait pas vue venir.
Sa préparation a duré deux ans, durant lesquels il a appris la navigation, la météorologie et la gestion du sommeil en autonomie complète.
Beaucoup d'experts doutaient qu'un homme de son âge, sans passé de marin, puisse mener à bien un tel projet.
La traversée, prévue pour durer soixante jours, en a finalement duré quatre-vingt-trois, en raison d'une tempête qui a endommagé son embarcation à mi-parcours.
Il a dû, pendant une semaine, réparer ce qu'il pouvait avec les moyens du bord, convaincu qu'abandonner serait pire que tout le reste.
À son arrivée, épuisé mais indemne, il a déclaré que ce voyage lui avait appris moins sur l'océan que sur lui-même : il n'aurait jamais imaginé, avant cela, de quoi il était réellement capable.`,
    questions: [
      { q: "Quel âge avait Denis ?", opts: ["Trente-sept ans", "Quarante-sept ans", "Cinquante-sept ans"], r: 1 },
      { q: "Quel était son projet ?", opts: ["Faire le tour du monde en voilier", "Traverser l'Atlantique à la rame, en solitaire", "Naviguer autour de la France"], r: 1 },
      { q: "Que représentait ce voyage pour lui ?", opts: ["Un exploit sportif avant tout", "Une manière de faire le deuil de son couple", "Un défi financier"], r: 1 },
      { q: "Combien de temps a duré sa préparation ?", opts: ["Un an", "Deux ans", "Six mois"], r: 1 },
      { q: "Que pensaient les experts ?", opts: ["Qu'il réussirait facilement", "Qu'ils doutaient qu'il puisse réussir", "Ils étaient indifférents"], r: 1 },
      { q: "Combien de temps la traversée devait-elle durer initialement ?", opts: ["Quarante jours", "Soixante jours", "Cent jours"], r: 1 },
      { q: "Combien de temps a-t-elle duré réellement ?", opts: ["Soixante jours", "Quatre-vingt-trois jours", "Cent jours"], r: 1 },
      { q: "Pourquoi ce retard ?", opts: ["Il s'est perdu", "Une tempête a endommagé son embarcation", "Il est tombé malade"], r: 1 },
      { q: "Qu'a-t-il fait pendant une semaine ?", opts: ["Il a attendu du secours", "Il a réparé avec les moyens du bord", "Il a fait demi-tour"], r: 1 },
      { q: "Qu'a-t-il appris, selon lui ?", opts: ["Surtout sur l'océan", "Moins sur l'océan que sur lui-même", "Rien de particulier"], r: 1 }
    ]
  },
  {
    titre: "La rumeur",
    texte: `Il aura suffi d'une phrase mal comprise, échangée entre deux voisines sur le pas d'une porte, pour qu'une rumeur se répande dans tout le village en moins d'une semaine.
On racontait que le nouveau boulanger, arrivé depuis peu, aurait été condamné dans son ancienne ville pour des raisons que personne ne parvenait vraiment à préciser.
Bien que personne n'ait jamais vu le moindre document, cette histoire, à force d'être répétée, avait fini par sembler établie.
Les clients se sont progressivement raréfiés. Le boulanger, ne comprenant pas cette désaffection soudaine, a fini par en découvrir la cause par l'intermédiaire d'un client resté fidèle.
Plutôt que de se murer dans le silence, il a choisi d'organiser une porte ouverte, invitant chacun à visiter son fournil et à poser toutes les questions qu'il souhaitait.
Il a alors expliqué qu'il avait quitté sa ville natale non pas à cause d'un scandale, mais pour se rapprocher de sa fille, dont la garde avait été confiée à son ex-épouse dans cette région.
La confiance est revenue, lentement. Mais il a fallu des mois pour que les ventes retrouvent leur niveau initial, preuve, s'il en fallait, qu'une rumeur se propage bien plus vite qu'elle ne se dissipe.`,
    questions: [
      { q: "Qu'est-ce qui a déclenché la rumeur ?", opts: ["Une phrase mal comprise entre deux voisines", "Un article de journal", "Une dispute publique"], r: 0 },
      { q: "Que racontait-on sur le boulanger ?", opts: ["Qu'il avait été condamné dans son ancienne ville", "Qu'il était en faillite", "Qu'il était malhonnête avec les clients"], r: 0 },
      { q: "Y avait-il des preuves de cette rumeur ?", opts: ["Oui, un document officiel", "Non, aucune", "Un témoignage seulement"], r: 1 },
      { q: "Quelle a été la conséquence sur son commerce ?", opts: ["Rien n'a changé", "Les clients se sont raréfiés", "Il a dû fermer immédiatement"], r: 1 },
      { q: "Comment a-t-il appris la cause de cette désaffection ?", opts: ["Par un client resté fidèle", "Par la police", "Par le maire"], r: 0 },
      { q: "Qu'a-t-il décidé de faire ?", opts: ["De se murer dans le silence", "D'organiser une porte ouverte", "De porter plainte"], r: 1 },
      { q: "Quelle était la vraie raison de son déménagement ?", opts: ["Se rapprocher de sa fille", "Un nouveau contrat", "Des problèmes financiers"], r: 0 },
      { q: "Qui avait la garde de sa fille ?", opts: ["Son ex-épouse", "Ses parents", "Personne"], r: 0 },
      { q: "La confiance est-elle revenue rapidement ?", opts: ["Oui, immédiatement", "Lentement, sur plusieurs mois", "Jamais"], r: 1 },
      { q: "Quelle leçon tire-t-on du texte ?", opts: ["Une rumeur se propage plus vite qu'elle ne se dissipe", "Il faut toujours porter plainte", "Les voisins sont toujours malveillants"], r: 0 }
    ]
  },
  {
    titre: "Le legs invisible",
    texte: `Ma grand-mère n'a jamais rien possédé de particulièrement précieux : ni bijoux, ni tableaux, ni économies dignes de ce nom. Pourtant, à sa mort, nous avons compris qu'elle nous avait légué quelque chose d'essentiel.
Institutrice pendant quarante ans dans un village reculé, elle avait pour habitude de noter, chaque soir, une phrase ou une anecdote glanée dans la journée.
Nous ignorions l'existence de ces carnets jusqu'à ce que, en vidant sa maison, nous en trouvions une trentaine, soigneusement alignés dans une armoire.
Il a fallu que ma cousine, historienne de formation, insiste pour que nous prenions le temps de les lire attentivement, plutôt que de nous en débarrasser comme de vieux papiers sans valeur.
Ces carnets constituaient, en réalité, une chronique précieuse de la vie rurale d'une époque disparue : les récoltes, les naissances, les petites querelles de voisinage, mais aussi les grands événements historiques vus depuis ce village isolé.
Un éditeur régional, à qui nous avons proposé le manuscrit, a accepté de le publier. Le livre a connu un succès inattendu, bien au-delà de notre région.
Ma grand-mère, qui doutait souvent d'avoir mené une existence intéressante, ignorait qu'elle laisserait derrière elle un témoignage que tant de gens liraient un jour avec émotion.`,
    questions: [
      { q: "Que possédait la grand-mère du narrateur ?", opts: ["Des bijoux précieux", "Rien de particulièrement précieux", "Une grande fortune"], r: 1 },
      { q: "Quel était son métier ?", opts: ["Institutrice", "Infirmière", "Agricultrice"], r: 0 },
      { q: "Pendant combien de temps a-t-elle exercé ?", opts: ["Vingt ans", "Quarante ans", "Trente ans"], r: 1 },
      { q: "Qu'avait-elle l'habitude de faire chaque soir ?", opts: ["Écrire une phrase ou une anecdote", "Lire un livre", "Écrire à sa famille"], r: 0 },
      { q: "Combien de carnets ont-ils trouvés ?", opts: ["Une dizaine", "Une trentaine", "Une centaine"], r: 1 },
      { q: "Qui a insisté pour qu'on les lise ?", opts: ["Le narrateur", "Sa cousine, historienne", "Un voisin"], r: 1 },
      { q: "Que racontaient ces carnets ?", opts: ["Uniquement sa vie personnelle", "La vie rurale d'une époque disparue", "Des recettes de cuisine"], r: 1 },
      { q: "Qu'ont-ils proposé à un éditeur ?", opts: ["Le manuscrit", "Une photo", "Un film"], r: 0 },
      { q: "Comment a été accueilli le livre ?", opts: ["Un échec", "Un succès inattendu", "Ignoré"], r: 1 },
      { q: "Que pensait la grand-mère de sa propre vie ?", opts: ["Qu'elle était exceptionnelle", "Elle doutait qu'elle soit intéressante", "Elle ne s'en souciait pas"], r: 1 }
    ]
  },
  {
    titre: "Le doute raisonnable",
    texte: `Après dix-sept ans passés derrière les barreaux pour un crime qu'il n'avait pas commis, Antoine a été libéré grâce à une analyse ADN que la technologie de l'époque de son procès ne permettait pas de réaliser.
Cette annonce n'a suscité, dans un premier temps, qu'un silence gêné de la part des institutions concernées, comme s'il était plus simple de ne pas trop s'attarder sur une erreur aussi lourde de conséquences.
Antoine, contre toute attente, ne semblait animé d'aucune rancœur véritable, du moins en apparence. Il expliquait qu'il avait dû, pour survivre à cette épreuve, cesser de nourrir sa colère, sans quoi celle-ci l'aurait consumé de l'intérieur.
Il lui a fallu réapprendre des gestes du quotidien devenus, pour lui, presque étrangers : utiliser un téléphone portable, traverser une rue sans que personne ne le surveille.
Sa famille, entre-temps, avait poursuivi son existence sans lui. Ses enfants, qu'il avait quittés en bas âge, étaient devenus adultes.
Aujourd'hui, Antoine milite pour la révision des procès douteux, estimant qu'il serait indécent, après ce qu'il a vécu, de ne pas se battre pour ceux qui se trouvent dans une situation semblable.`,
    questions: [
      { q: "Combien d'années Antoine a-t-il passées en prison ?", opts: ["Douze ans", "Dix-sept ans", "Vingt-cinq ans"], r: 1 },
      { q: "Pourquoi a-t-il été libéré ?", opts: ["Grâce à une analyse ADN", "Un témoin s'est rétracté", "Il a purgé sa peine"], r: 0 },
      { q: "Comment les institutions ont-elles réagi ?", opts: ["Avec des excuses publiques immédiates", "Avec un silence gêné", "Avec indifférence totale"], r: 1 },
      { q: "Comment Antoine semblait-il se sentir ?", opts: ["Rempli de rancœur", "Sans rancœur véritable, en apparence", "Indifférent à tout"], r: 1 },
      { q: "Pourquoi avait-il cessé de nourrir sa colère ?", opts: ["Pour survivre à cette épreuve", "Sur conseil d'un avocat", "Il avait oublié les faits"], r: 0 },
      { q: "Que devait-il réapprendre ?", opts: ["À lire et écrire", "Des gestes du quotidien devenus étrangers", "À travailler"], r: 1 },
      { q: "Que s'était-il passé pour sa famille pendant ce temps ?", opts: ["Elle l'avait attendu sans changer", "Elle avait poursuivi son existence sans lui", "Elle avait déménagé à l'étranger"], r: 1 },
      { q: "Que sont devenus ses enfants ?", opts: ["Ils sont restés enfants dans son souvenir", "Ils sont devenus adultes", "Ils sont partis à l'étranger"], r: 1 },
      { q: "Pour quoi milite-t-il aujourd'hui ?", opts: ["Pour l'abolition des prisons", "Pour la révision des procès douteux", "Pour une indemnisation"], r: 1 },
      { q: "Pourquoi estime-t-il devoir se battre pour les autres ?", opts: ["Il serait indécent de ne pas le faire après ce qu'il a vécu", "C'est son métier désormais", "On le lui a demandé"], r: 0 }
    ]
  },
  {
    titre: "La traduction impossible",
    texte: `Lorsqu'on lui a proposé de traduire le dernier roman d'un auteur japonais réputé pour son style particulièrement elliptique, Hugo a d'abord refusé, estimant la tâche irréalisable.
Certains passages reposaient sur des jeux de mots et des références culturelles qui n'avaient, tout simplement, aucun équivalent en français.
L'éditeur a insisté, arguant qu'il valait mieux une traduction imparfaite qu'une absence totale de traduction, ce à quoi Hugo n'a pas su répondre grand-chose de convaincant.
Il s'est finalement attelé à la tâche, non sans réticence, convaincu qu'il trahirait inévitablement le texte original, quelle que soit la solution retenue.
Pendant huit mois, il a correspondu régulièrement avec l'auteur lui-même, afin que celui-ci l'autorise à s'éloigner, par endroits, du sens littéral pour en préserver l'esprit.
Le résultat, salué par la critique, n'est ni tout à fait fidèle ni complètement libre : c'est une œuvre à part entière, née du dialogue entre deux langues et deux sensibilités.
Hugo affirme aujourd'hui que la meilleure traduction n'est jamais celle qui prétend disparaître derrière l'original, mais celle qui assume honnêtement ses propres choix.`,
    questions: [
      { q: "Que devait traduire Hugo ?", opts: ["Un roman japonais", "Un essai chinois", "Un poème coréen"], r: 0 },
      { q: "Pourquoi a-t-il d'abord refusé ?", opts: ["Il n'avait pas le temps", "Il estimait la tâche irréalisable", "Il n'aimait pas l'auteur"], r: 1 },
      { q: "Quel était le problème avec certains passages ?", opts: ["Ils étaient trop longs", "Ils reposaient sur des jeux de mots sans équivalent", "Ils étaient censurés"], r: 1 },
      { q: "Qu'a argumenté l'éditeur ?", opts: ["Qu'il fallait attendre un autre traducteur", "Qu'une traduction imparfaite valait mieux qu'aucune", "Que le roman n'était pas si difficile"], r: 1 },
      { q: "De quoi était convaincu Hugo en acceptant ?", opts: ["Qu'il réussirait parfaitement", "Qu'il trahirait inévitablement le texte", "Que ce serait facile"], r: 1 },
      { q: "Avec qui a-t-il correspondu pendant huit mois ?", opts: ["Avec l'éditeur", "Avec l'auteur lui-même", "Avec d'autres traducteurs"], r: 1 },
      { q: "Pourquoi cette correspondance ?", opts: ["Pour être autorisé à s'éloigner du sens littéral", "Pour négocier son salaire", "Pour des raisons contractuelles"], r: 0 },
      { q: "Comment le résultat a-t-il été accueilli ?", opts: ["Mal reçu par la critique", "Salué par la critique", "Ignoré"], r: 1 },
      { q: "Comment Hugo décrit-il sa traduction ?", opts: ["Totalement fidèle", "Ni tout à fait fidèle ni complètement libre", "Complètement libre"], r: 1 },
      { q: "Quelle est sa conception de la meilleure traduction ?", opts: ["Celle qui disparaît derrière l'original", "Celle qui assume honnêtement ses choix", "Celle qui est la plus littérale possible"], r: 1 }
    ]
  },
  {
    titre: "Le vote contesté",
    texte: `Les élections municipales de cette petite commune de montagne se sont soldées par un résultat si serré – deux voix d'écart – que la légitimité du scrutin a immédiatement été remise en question par le camp perdant.
Un recomptage a été exigé, ce qui, dans une commune de cette taille, n'était encore jamais arrivé de mémoire d'habitant.
Pendant que les bulletins étaient recomptés sous la surveillance de plusieurs assesseurs, une tension palpable régnait dans la salle des fêtes transformée pour l'occasion en bureau de vote élargi.
Le second dépouillement a révélé une erreur : un bulletin, initialement classé comme nul en raison d'une légère déchirure, aurait dû, selon le règlement, être compté comme valide.
Cette découverte a inversé le résultat, provoquant la colère du camp qui se croyait vainqueur depuis plusieurs jours.
Un recours a été déposé devant le tribunal administratif, qui a fini par confirmer le second résultat, estimant que l'application stricte du règlement primait sur toute autre considération.
La commune, profondément divisée par cet épisode, a mis plusieurs mois à retrouver un semblant de sérénité, chacun continuant, en privé, à contester la légitimité du maire élu.`,
    questions: [
      { q: "Quel était l'écart de voix lors de l'élection ?", opts: ["Une voix", "Deux voix", "Dix voix"], r: 1 },
      { q: "Qu'a exigé le camp perdant ?", opts: ["De nouvelles élections", "Un recomptage", "L'annulation du scrutin"], r: 1 },
      { q: "Un tel recomptage était-il déjà arrivé ?", opts: ["Oui, souvent", "Jamais de mémoire d'habitant", "Une seule fois avant"], r: 1 },
      { q: "Où se déroulait le recomptage ?", opts: ["À la mairie", "Dans la salle des fêtes", "Au tribunal"], r: 1 },
      { q: "Quelle erreur le second dépouillement a-t-il révélée ?", opts: ["Un bulletin mal compté à cause d'une déchirure", "Des bulletins manquants", "Une urne non scellée"], r: 0 },
      { q: "Quelle a été la conséquence de cette erreur ?", opts: ["Aucune, le résultat est resté identique", "Le résultat s'est inversé", "L'élection a été annulée"], r: 1 },
      { q: "Qu'a fait le camp qui se croyait vainqueur ?", opts: ["Il a accepté calmement", "Il s'est mis en colère", "Il a démissionné"], r: 1 },
      { q: "Devant quelle instance un recours a-t-il été déposé ?", opts: ["Le Conseil constitutionnel", "Le tribunal administratif", "La préfecture"], r: 1 },
      { q: "Qu'a décidé cette instance ?", opts: ["D'organiser de nouvelles élections", "De confirmer le second résultat", "D'annuler l'élection"], r: 1 },
      { q: "Comment la commune a-t-elle vécu cet épisode ?", opts: ["Sans grande conséquence", "Profondément divisée pendant des mois", "Unie autour du nouveau maire"], r: 1 }
    ]
  },
  {
    titre: "L'appartement fantôme",
    texte: `Depuis près de quinze ans, un appartement du troisième étage demeurait inoccupé, volets clos, dans un immeuble par ailleurs tout à fait ordinaire.
Les nouveaux locataires de l'immeuble s'interrogeaient régulièrement sur cette étrange vacance, sans que le gardien ne consente jamais à fournir d'explications précises.
La rumeur, comme souvent en pareil cas, s'était emparée du mystère : certains évoquaient un héritage bloqué par un litige familial interminable, d'autres un propriétaire tout simplement excentrique.
La vérité, révélée bien plus tard par une petite-nièce venue régler la succession, était à la fois plus simple et plus émouvante.
Le propriétaire, un veuf inconsolable, avait quitté cet appartement le lendemain de la mort de son épouse, incapable d'affronter les objets, les meubles, les vêtements qui la lui rappelaient sans cesse.
Il avait continué à payer les charges depuis un studio voisin, sans jamais remettre les pieds dans ce qui avait été leur foyer commun.
En ouvrant enfin la porte après sa propre mort, la petite-nièce a découvert un appartement figé dans le temps, comme si le couple s'apprêtait à rentrer d'un instant à l'autre.`,
    questions: [
      { q: "Depuis combien de temps l'appartement était-il inoccupé ?", opts: ["Cinq ans", "Près de quinze ans", "Trente ans"], r: 1 },
      { q: "À quel étage se trouvait-il ?", opts: ["Au premier", "Au troisième", "Au dernier"], r: 1 },
      { q: "Qui refusait de donner des explications ?", opts: ["Le maire", "Le gardien", "La police"], r: 1 },
      { q: "Que disait une des rumeurs ?", opts: ["Un héritage bloqué par un litige", "Une malédiction", "Un crime non résolu"], r: 0 },
      { q: "Qui a révélé la vérité ?", opts: ["Le gardien", "Une petite-nièce", "Un voisin"], r: 1 },
      { q: "Pourquoi le propriétaire avait-il quitté l'appartement ?", opts: ["Pour des raisons financières", "Après la mort de son épouse", "Il avait déménagé à l'étranger"], r: 1 },
      { q: "Que ne supportait-il pas ?", opts: ["Le bruit de l'immeuble", "Les objets qui lui rappelaient sa femme", "Les voisins"], r: 1 },
      { q: "D'où continuait-il à payer les charges ?", opts: ["D'un studio voisin", "De l'étranger", "Il ne payait plus"], r: 0 },
      { q: "Quand la petite-nièce a-t-elle ouvert l'appartement ?", opts: ["De son vivant", "Après sa propre mort", "Peu après le décès de l'épouse"], r: 1 },
      { q: "Dans quel état a-t-elle trouvé l'appartement ?", opts: ["Vide et rénové", "Figé dans le temps", "En ruine"], r: 1 }
    ]
  },
  {
    titre: "Le sculpteur oublié",
    texte: `Il aura fallu attendre la mort de Roland Vasseur, sculpteur méconnu ayant vécu dans un dénuement quasi complet, pour que son atelier révèle l'ampleur insoupçonnée de son œuvre.
Refusant obstinément d'exposer, convaincu que le monde de l'art contemporain n'avait que faire de son travail, il avait continué à sculpter dans l'indifférence générale pendant plus de cinquante ans.
Ses voisins le considéraient comme un original inoffensif, sans jamais imaginer que les centaines de pièces entassées dans son atelier pussent avoir la moindre valeur.
C'est un commissaire-priseur, appelé pour estimer le mobilier après son décès, qui a immédiatement compris qu'il se trouvait face à quelque chose d'exceptionnel.
Plusieurs musées se sont ensuite disputés l'acquisition de certaines pièces, tandis que des historiens de l'art s'interrogeaient sur les raisons d'un tel anonymat.
Il semblerait que Vasseur ait, à plusieurs reprises au cours de sa jeunesse, essuyé des refus si humiliants qu'il avait fini par préférer l'obscurité totale à une reconnaissance qu'il jugeait, de toute façon, hors d'atteinte.
Une rétrospective posthume, organisée deux ans après sa mort, a rencontré un succès qu'il n'aurait probablement jamais imaginé, lui qui doutait jusqu'au bout de la valeur de son travail.`,
    questions: [
      { q: "Comment Roland Vasseur avait-il vécu ?", opts: ["Dans le luxe", "Dans un dénuement quasi complet", "Confortablement"], r: 1 },
      { q: "Que refusait-il obstinément de faire ?", opts: ["De vendre ses œuvres", "D'exposer", "De rencontrer d'autres artistes"], r: 1 },
      { q: "Pendant combien de temps a-t-il sculpté dans l'indifférence ?", opts: ["Vingt ans", "Plus de cinquante ans", "Dix ans"], r: 1 },
      { q: "Comment ses voisins le considéraient-ils ?", opts: ["Comme un génie méconnu", "Comme un original inoffensif", "Comme un danger"], r: 1 },
      { q: "Qui a découvert la valeur de son œuvre ?", opts: ["Un musée", "Un commissaire-priseur", "Un journaliste"], r: 1 },
      { q: "Pourquoi ce commissaire-priseur était-il venu ?", opts: ["Pour acheter une sculpture", "Pour estimer le mobilier après son décès", "Pour organiser une exposition"], r: 1 },
      { q: "Qui s'est disputé l'acquisition de ses pièces ?", opts: ["Des collectionneurs privés", "Plusieurs musées", "Des galeries d'art"], r: 1 },
      { q: "Pourquoi Vasseur avait-il préféré l'anonymat ?", opts: ["Il détestait la célébrité", "Il avait essuyé des refus humiliants jeune", "C'était son style artistique"], r: 1 },
      { q: "Quand a eu lieu la rétrospective ?", opts: ["De son vivant", "Deux ans après sa mort", "Immédiatement après sa mort"], r: 1 },
      { q: "Comment cette rétrospective a-t-elle été accueillie ?", opts: ["Avec indifférence", "Avec un grand succès", "Avec des critiques négatives"], r: 1 }
    ]
  },
  {
    titre: "La grève de la faim",
    texte: `Que des ouvriers en viennent à entamer une grève de la faim pour obtenir le paiement de salaires impayés depuis plusieurs mois n'est malheureusement pas un phénomène isolé, mais celui-ci a pris une ampleur inhabituelle.
L'entreprise, placée en redressement judiciaire, invoquait des difficultés de trésorerie pour justifier ces retards, sans que les explications fournies ne convainquent grand monde.
Sept salariés ont décidé, après plusieurs mois de négociations infructueuses, d'occuper le hall de l'usine et de refuser toute nourriture jusqu'à ce qu'une solution soit trouvée.
Les premiers jours, la direction est restée silencieuse, pariant apparemment sur un essoufflement rapide du mouvement.
C'est la médiatisation croissante de l'affaire, relayée par plusieurs chaînes nationales, qui a contraint les dirigeants à revenir à la table des négociations.
Après douze jours, un accord a été trouvé : les salaires dus seraient versés en trois échéances, et l'entreprise s'engageait à ne procéder à aucun licenciement avant la fin de l'année.
Les grévistes, affaiblis mais soulagés, ont mis plusieurs semaines à s'en remettre physiquement. L'un d'eux a confié qu'il referait le même choix, tout en espérant ne plus jamais s'y trouver contraint.`,
    questions: [
      { q: "Pourquoi les ouvriers ont-ils entamé une grève de la faim ?", opts: ["Pour obtenir une augmentation", "Pour obtenir le paiement de salaires impayés", "Pour protester contre des licenciements"], r: 1 },
      { q: "Dans quelle situation se trouvait l'entreprise ?", opts: ["En pleine expansion", "En redressement judiciaire", "En cours de vente"], r: 1 },
      { q: "Combien de salariés ont participé à la grève ?", opts: ["Trois", "Sept", "Quinze"], r: 1 },
      { q: "Qu'ont-ils fait exactement ?", opts: ["Occupé le hall de l'usine et refusé de manger", "Bloqué la production", "Manifesté devant la mairie"], r: 0 },
      { q: "Comment la direction a-t-elle réagi au début ?", opts: ["Elle a négocié immédiatement", "Elle est restée silencieuse", "Elle a licencié les grévistes"], r: 1 },
      { q: "Qu'est-ce qui a poussé la direction à négocier ?", opts: ["Une intervention du gouvernement", "La médiatisation croissante de l'affaire", "Une décision de justice"], r: 1 },
      { q: "Après combien de jours un accord a-t-il été trouvé ?", opts: ["Cinq jours", "Douze jours", "Un mois"], r: 1 },
      { q: "Comment les salaires dus seraient-ils versés ?", opts: ["En une seule fois", "En trois échéances", "Jamais intégralement"], r: 1 },
      { q: "Que promettait aussi l'entreprise ?", opts: ["Une augmentation générale", "Aucun licenciement avant la fin de l'année", "De nouveaux embauches"], r: 1 },
      { q: "Comment se sont sentis les grévistes après l'accord ?", opts: ["Affaiblis mais soulagés", "Complètement rétablis immédiatement", "En colère malgré tout"], r: 0 }
    ]
  },
  {
    titre: "Le jardin partagé du dernier espoir",
    texte: `Que la municipalité envisage de vendre ce terrain vague à un promoteur immobilier n'avait, jusqu'alors, suscité qu'une opposition timide et dispersée parmi les riverains.
Tout a changé lorsqu'un collectif d'habitants, mené par une septuagénaire aussi déterminée qu'inattendue, a proposé d'y créer un jardin partagé plutôt que de simplement protester sans alternative concrète.
La mairie, sceptique quant à la viabilité d'un tel projet porté par des amateurs, a néanmoins accepté d'accorder un délai de six mois avant de statuer définitivement sur la vente.
Il a fallu convaincre des dizaines de voisins, réunir des fonds, et surtout démontrer qu'un espace aussi délaissé pouvait redevenir vivant.
Contre toute attente, l'initiative a mobilisé bien au-delà du cercle habituel des militants associatifs : des adolescents désœuvrés, des retraités isolés, des familles entières s'y sont progressivement investis.
Au terme des six mois, le terrain, autrefois jonché de détritus, accueillait des dizaines de parcelles cultivées et une aire de jeux improvisée.
La mairie, embarrassée mais convaincue par l'ampleur de la mobilisation, a fini par renoncer définitivement à la vente, un dénouement que peu auraient osé prédire au départ.`,
    questions: [
      { q: "Que voulait faire la municipalité au départ ?", opts: ["Créer un parc", "Vendre le terrain à un promoteur", "Construire une école"], r: 1 },
      { q: "Comment était l'opposition initiale des riverains ?", opts: ["Forte et organisée", "Timide et dispersée", "Inexistante"], r: 1 },
      { q: "Qui a mené le collectif d'habitants ?", opts: ["Un jeune militant", "Une septuagénaire déterminée", "Un conseiller municipal"], r: 1 },
      { q: "Qu'ont-ils proposé plutôt que de simplement protester ?", opts: ["Une pétition", "Un jardin partagé", "Un recours en justice"], r: 1 },
      { q: "Quel délai la mairie a-t-elle accordé ?", opts: ["Trois mois", "Six mois", "Un an"], r: 1 },
      { q: "Qui s'est mobilisé au-delà des militants habituels ?", opts: ["Uniquement des experts", "Adolescents, retraités, familles", "Seulement des élus"], r: 1 },
      { q: "Dans quel état était le terrain au départ ?", opts: ["Déjà entretenu", "Jonché de détritus", "Fraîchement construit"], r: 1 },
      { q: "Qu'accueillait le terrain après six mois ?", opts: ["Des parcelles cultivées et une aire de jeux", "Un parking", "Rien de nouveau"], r: 0 },
      { q: "Comment la mairie a-t-elle réagi finalement ?", opts: ["Elle a maintenu la vente", "Elle a renoncé à la vente", "Elle a vendu une partie seulement"], r: 1 },
      { q: "Comment ce dénouement est-il qualifié ?", opts: ["Prévisible", "Peu prévisible au départ", "Décevant"], r: 1 }
    ]
  },
  {
    titre: "Le silence après la tempête",
    texte: `Après le passage dévastateur de l'ouragan, il fallait que les secours établissent rapidement des priorités, dans un chaos où absolument tout semblait urgent.
Parmi les nombreux villages sinistrés, l'un d'eux, particulièrement isolé, n'a pu être atteint que cinq jours après la catastrophe, en raison de routes complètement impraticables.
Les habitants, livrés à eux-mêmes, avaient dû s'organiser sans attendre une aide extérieure dont ils ignoraient si elle viendrait un jour.
Ce qui a le plus frappé les premiers secouristes arrivés sur place n'était pas tant l'ampleur des dégâts matériels que l'ordre inattendu qui régnait dans le village.
Les habitants avaient spontanément réparti les tâches : certains s'occupaient des blessés avec les moyens du bord, d'autres organisaient le partage des réserves d'eau et de nourriture restantes.
Un instituteur avait même improvisé une garderie pour que les parents puissent se consacrer aux réparations urgentes, sans que quiconque n'ait eu besoin de le lui demander.
Interrogé plus tard sur cette organisation remarquable, le maire du village, modeste, a simplement répondu qu'ils n'avaient fait que ce que n'importe quelle communauté ferait, s'il lui était donné le temps d'y réfléchir sereinement.`,
    questions: [
      { q: "Après quel événement se déroule cette histoire ?", opts: ["Un tremblement de terre", "Le passage d'un ouragan", "Une inondation"], r: 1 },
      { q: "Combien de jours a-t-il fallu pour atteindre le village isolé ?", opts: ["Deux jours", "Cinq jours", "Dix jours"], r: 1 },
      { q: "Pourquoi ce délai ?", opts: ["Manque de personnel", "Des routes complètement impraticables", "Un problème de communication"], r: 1 },
      { q: "Comment les habitants avaient-ils dû s'organiser ?", opts: ["En attendant patiemment les secours", "Sans attendre une aide extérieure incertaine", "En quittant le village"], r: 1 },
      { q: "Qu'est-ce qui a le plus frappé les secouristes ?", opts: ["L'ampleur des dégâts matériels", "L'ordre inattendu qui régnait", "Le nombre de victimes"], r: 1 },
      { q: "Comment les tâches avaient-elles été réparties ?", opts: ["Par le maire uniquement", "Spontanément entre les habitants", "Elles ne l'avaient pas été"], r: 1 },
      { q: "Que faisaient certains habitants ?", opts: ["Ils s'occupaient des blessés", "Ils quittaient le village", "Ils attendaient sans agir"], r: 0 },
      { q: "Qu'a improvisé l'instituteur ?", opts: ["Un hôpital de fortune", "Une garderie", "Un centre de distribution"], r: 1 },
      { q: "Pourquoi cette garderie ?", opts: ["Pour occuper les enfants seulement", "Pour que les parents se consacrent aux réparations", "Sur ordre du maire"], r: 1 },
      { q: "Que répond le maire sur cette organisation ?", opts: ["Qu'ils ont fait un travail exceptionnel", "Que n'importe quelle communauté ferait pareil", "Qu'il ne sait pas comment ils y sont arrivés"], r: 1 }
    ]
  },
  {
    titre: "L'aveu tardif",
    texte: `Ce n'est qu'à l'occasion de son quatre-vingtième anniversaire, entouré de ses enfants et petits-enfants, que Marcel a enfin révélé un secret gardé pendant plus de soixante ans.
Il fallait, disait-il, qu'il s'en libère avant qu'il ne soit trop tard, quitte à bouleverser l'image que sa famille s'était construite de lui.
Jeune homme, il avait été condamné à trois mois de prison pour un vol qu'il avait commis par désespoir, à une époque où sa famille manquait cruellement de tout.
Il n'en avait jamais parlé, ni à sa défunte épouse, ni à ses enfants, honteux d'un épisode qu'il jugeait indigne de l'homme qu'il était devenu par la suite.
La réaction de ses proches, qu'il redoutait tant, a été à l'opposé de ses craintes : loin de le juger, ses enfants ont exprimé une forme d'admiration pour le chemin parcouru depuis.
Son fils aîné, avocat de profession, lui a confié qu'il aurait aimé le savoir plus tôt, ne serait-ce que pour mieux comprendre certains silences et certaines colères de son enfance.
Marcel a dit, ce soir-là, se sentir enfin entier, comme si cette part de son histoire, longtemps tue, avait besoin d'être connue pour que le reste prenne tout son sens.`,
    questions: [
      { q: "À quelle occasion Marcel a-t-il révélé son secret ?", opts: ["Son mariage", "Son quatre-vingtième anniversaire", "Un enterrement"], r: 1 },
      { q: "Depuis combien de temps gardait-il ce secret ?", opts: ["Trente ans", "Plus de soixante ans", "Dix ans"], r: 1 },
      { q: "Quel était ce secret ?", opts: ["Une condamnation pour vol", "Un enfant caché", "Une maladie grave"], r: 0 },
      { q: "Pourquoi avait-il commis ce vol ?", opts: ["Par cupidité", "Par désespoir, sa famille manquant de tout", "Pour impressionner des amis"], r: 1 },
      { q: "À qui n'en avait-il jamais parlé ?", opts: ["À personne, ni son épouse ni ses enfants", "Seulement à ses enfants", "Seulement à son épouse"], r: 0 },
      { q: "Pourquoi n'en parlait-il pas ?", opts: ["Il avait peur des conséquences légales", "Il était honteux de cet épisode", "Il avait oublié"], r: 1 },
      { q: "Comment ses proches ont-ils réagi ?", opts: ["Ils l'ont jugé sévèrement", "À l'opposé de ses craintes, avec admiration", "Avec indifférence"], r: 1 },
      { q: "Quelle est la profession de son fils aîné ?", opts: ["Médecin", "Avocat", "Professeur"], r: 1 },
      { q: "Qu'aurait aimé son fils ?", opts: ["Ne jamais savoir", "Le savoir plus tôt", "Que son père se taise encore"], r: 1 },
      { q: "Comment Marcel s'est-il senti après cet aveu ?", opts: ["Plus honteux encore", "Enfin entier", "Indifférent"], r: 1 }
    ]
  },
  {
    titre: "Le refuge",
    texte: `Que des dizaines d'espèces menacées trouvent refuge sur un terrain militaire fermé au public depuis des décennies constitue, à première vue, un paradoxe pour le moins surprenant.
C'est pourtant exactement ce qu'ont découvert des naturalistes autorisés, à titre exceptionnel, à mener une étude sur cette zone habituellement inaccessible.
Contrairement à ce que l'on pourrait imaginer, l'absence quasi totale d'activité humaine, hormis quelques exercices militaires ponctuels, avait permis à un écosystème d'une richesse inattendue de se développer sans entrave.
Des espèces d'oiseaux disparues des régions environnantes depuis des décennies y nichaient encore, tout comme des plantes que l'on croyait localement éteintes.
L'annonce de cette découverte a immédiatement suscité un débat délicat : fallait-il ouvrir le site à la conservation officielle, au risque d'y attirer une fréquentation qui menacerait cet équilibre fragile, ou préserver le statu quo militaire qui, paradoxalement, avait permis cette préservation ?
Après plusieurs mois de discussions entre l'armée, des associations environnementales et les autorités locales, un compromis a été trouvé : une partie du terrain resterait fermée en zone militaire, tandis qu'une autre serait ouverte à des visites strictement encadrées.
Les naturalistes impliqués s'accordent à dire que cette histoire illustre, de façon presque ironique, combien la protection de la nature peut parfois emprunter des chemins que personne n'aurait anticipés.`,
    questions: [
      { q: "Où des espèces menacées ont-elles trouvé refuge ?", opts: ["Dans un parc national", "Sur un terrain militaire fermé", "Dans une réserve privée"], r: 1 },
      { q: "Qui a été autorisé à étudier cette zone ?", opts: ["Des chasseurs", "Des naturalistes", "Des journalistes"], r: 1 },
      { q: "Qu'est-ce qui avait permis cet écosystème de se développer ?", opts: ["Des programmes de reforestation", "L'absence quasi totale d'activité humaine", "Un climat particulier"], r: 1 },
      { q: "Qu'y trouvait-on encore ?", opts: ["Des espèces disparues des régions environnantes", "Uniquement des espèces communes", "Rien de particulier"], r: 0 },
      { q: "Quel débat a suscité cette découverte ?", opts: ["Ouvrir le site ou préserver le statu quo militaire", "Vendre le terrain", "Créer un zoo"], r: 0 },
      { q: "Quel était le risque d'ouvrir le site officiellement ?", opts: ["Aucun risque", "Attirer une fréquentation menaçant l'équilibre", "Un coût trop élevé"], r: 1 },
      { q: "Qui a participé aux discussions ?", opts: ["L'armée, des associations et les autorités locales", "Seulement l'armée", "Seulement des scientifiques"], r: 0 },
      { q: "Quel compromis a été trouvé ?", opts: ["Fermeture totale du site", "Ouverture totale au public", "Une partie fermée, une partie en visites encadrées"], r: 2 },
      { q: "Que trouvent ironique les naturalistes ?", opts: ["Que l'armée s'intéresse à la nature", "Les chemins qu'emprunte parfois la protection de la nature", "Le coût de l'étude"], r: 1 },
      { q: "Depuis combien de temps le terrain était-il fermé au public ?", opts: ["Quelques années", "Des décennies", "Un siècle"], r: 1 }
    ]
  },
  {
    titre: "La lettre du soldat",
    texte: `En rénovant le plancher d'une vieille ferme normande, un artisan est tombé sur une boîte métallique dissimulée sous une latte, contenant une liasse de lettres jaunies datant de la Première Guerre mondiale.
Il s'agissait de la correspondance d'un jeune soldat, adressée à celle qui allait devenir son épouse, mais dont il ignorait alors s'il reviendrait un jour du front pour l'épouser réellement.
L'artisan, intrigué et ému par la qualité de cette écriture, a entrepris de retrouver les descendants éventuels de ce couple, dont les noms figuraient au bas de chaque lettre.
Après plusieurs mois de recherches généalogiques menées avec l'aide d'une association locale, il a fini par localiser une arrière-petite-fille, qui ignorait totalement l'existence de ces lettres.
Celle-ci, bouleversée, a expliqué que son arrière-grand-père était effectivement revenu de la guerre, contrairement à tant d'autres, mais qu'il n'avait jamais évoqué cette période devant sa famille.
Ces lettres révélaient un homme d'une sensibilité insoupçonnée, très éloigné de l'image austère qu'en avaient gardée ses descendants.
La famille a décidé de faire don de cette correspondance à un musée régional consacré à la Grande Guerre, estimant qu'un tel témoignage méritait d'être partagé plutôt que conservé dans l'intimité d'un tiroir.`,
    questions: [
      { q: "Où l'artisan a-t-il trouvé la boîte ?", opts: ["Dans un grenier", "Sous une latte du plancher", "Dans une cave"], r: 1 },
      { q: "De quelle époque dataient les lettres ?", opts: ["De la Seconde Guerre mondiale", "De la Première Guerre mondiale", "De l'entre-deux-guerres"], r: 1 },
      { q: "À qui étaient adressées ces lettres ?", opts: ["À sa mère", "À celle qui allait devenir son épouse", "À un ami"], r: 1 },
      { q: "Qu'a entrepris l'artisan ?", opts: ["De vendre les lettres", "De retrouver les descendants du couple", "De les détruire"], r: 1 },
      { q: "Avec l'aide de qui a-t-il mené ses recherches ?", opts: ["D'une association locale", "De la mairie", "D'un généalogiste professionnel payé"], r: 0 },
      { q: "Qui a-t-il fini par retrouver ?", opts: ["Un petit-fils", "Une arrière-petite-fille", "Une nièce"], r: 1 },
      { q: "Cette personne connaissait-elle l'existence des lettres ?", opts: ["Oui, depuis toujours", "Non, elle l'ignorait totalement", "Elle en avait entendu parler vaguement"], r: 1 },
      { q: "Le soldat est-il revenu de la guerre ?", opts: ["Non, il est mort au front", "Oui, contrairement à beaucoup d'autres", "On ne le sait pas"], r: 1 },
      { q: "Que révélaient les lettres sur cet homme ?", opts: ["Une sensibilité insoupçonnée", "Une grande violence", "Rien de particulier"], r: 0 },
      { q: "Qu'a décidé de faire la famille des lettres ?", opts: ["Les garder secrètes", "En faire don à un musée régional", "Les vendre aux enchères"], r: 1 }
    ]
  }
];
