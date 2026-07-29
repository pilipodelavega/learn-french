/* Histoires A2 — passé composé, récits du quotidien un peu plus longs. */
var STORIES_A2 = [
  {
    titre: "Le déménagement",
    texte: `Samedi dernier, Camille a déménagé. Elle a quitté son petit studio du centre-ville pour un appartement plus grand.
Trois amis sont venus l'aider. Ils ont commencé à sept heures du matin. Il faisait froid et le ciel était gris.
Ils ont porté les cartons, les chaises et un vieux canapé très lourd. Dans l'escalier, Thomas a failli tomber !
À midi, ils ont fait une pause et ils ont mangé des sandwichs assis par terre.
Le soir, tout était fini. Camille a préparé des pâtes pour remercier ses amis.
Elle était fatiguée, mais très heureuse : son nouvel appartement a un balcon et beaucoup de lumière.`,
    questions: [
      { q: "Quand Camille a-t-elle déménagé ?", opts: ["Samedi dernier", "Dimanche dernier", "Vendredi dernier"], r: 0 },
      { q: "Que quitte-t-elle ?", opts: ["Une maison", "Un petit studio du centre-ville", "Un appartement à la campagne"], r: 1 },
      { q: "Combien d'amis sont venus l'aider ?", opts: ["Deux", "Quatre", "Trois"], r: 2 },
      { q: "À quelle heure ont-ils commencé ?", opts: ["À sept heures", "À huit heures", "À neuf heures"], r: 0 },
      { q: "Quel temps faisait-il ?", opts: ["Il faisait chaud", "Il faisait froid et le ciel était gris", "Il pleuvait"], r: 1 },
      { q: "Quel meuble était très lourd ?", opts: ["La table", "Le lit", "Un vieux canapé"], r: 2 },
      { q: "Qu'est-il arrivé à Thomas ?", opts: ["Il a failli tomber dans l'escalier", "Il s'est blessé", "Il est parti"], r: 0 },
      { q: "Qu'ont-ils mangé à midi ?", opts: ["Des pâtes", "Des sandwichs", "Une pizza"], r: 1 },
      { q: "Qu'a préparé Camille le soir ?", opts: ["Une soupe", "Un gâteau", "Des pâtes"], r: 2 },
      { q: "Qu'est-ce que le nouvel appartement a ?", opts: ["Un balcon et beaucoup de lumière", "Un jardin", "Une piscine"], r: 0 }
    ]
  },
  {
    titre: "La panne de voiture",
    texte: `Mardi matin, Julien est parti travailler comme d'habitude. Sur l'autoroute, sa voiture s'est arrêtée d'un coup.
Il a réussi à se garer sur le côté. Il a ouvert le capot, mais il n'a rien compris : il ne connaît rien à la mécanique.
Il a téléphoné à un garage. Le mécanicien lui a dit d'attendre quarante minutes.
Pendant ce temps, Julien a prévenu son patron. Heureusement, son patron a été compréhensif.
Le dépanneur est arrivé et a emmené la voiture au garage. Le problème venait de la batterie.
La réparation a coûté cent vingt euros. Julien est finalement arrivé au bureau à midi.`,
    questions: [
      { q: "Quel jour est-ce arrivé ?", opts: ["Lundi", "Mardi", "Mercredi"], r: 1 },
      { q: "Où la voiture s'est-elle arrêtée ?", opts: ["Sur l'autoroute", "En ville", "Devant chez lui"], r: 0 },
      { q: "Qu'a-t-il ouvert ?", opts: ["Le coffre", "La portière", "Le capot"], r: 2 },
      { q: "Pourquoi n'a-t-il rien compris ?", opts: ["Il ne connaît rien à la mécanique", "Il faisait nuit", "Il était pressé"], r: 0 },
      { q: "Qui a-t-il appelé ?", opts: ["La police", "Un garage", "Sa femme"], r: 1 },
      { q: "Combien de temps devait-il attendre ?", opts: ["Vingt minutes", "Une heure", "Quarante minutes"], r: 2 },
      { q: "Qui a-t-il prévenu pendant ce temps ?", opts: ["Son patron", "Ses collègues", "Sa mère"], r: 0 },
      { q: "Comment a réagi son patron ?", opts: ["Il s'est fâché", "Il a été compréhensif", "Il n'a pas répondu"], r: 1 },
      { q: "D'où venait le problème ?", opts: ["Du moteur", "Des pneus", "De la batterie"], r: 2 },
      { q: "Combien a coûté la réparation ?", opts: ["Cent vingt euros", "Deux cents euros", "Quatre-vingts euros"], r: 0 }
    ]
  },
  {
    titre: "Le premier jour de travail",
    texte: `Lundi, Inès a commencé son nouveau travail dans une agence de voyages.
Elle s'est levée très tôt parce qu'elle était nerveuse. Elle a mis une chemise blanche et une veste bleue.
Elle est arrivée avec vingt minutes d'avance. La directrice l'a accueillie et lui a présenté l'équipe.
Ils sont six dans le bureau. Une collègue, Sarah, lui a montré comment utiliser le logiciel de réservation.
À midi, tout le monde a déjeuné ensemble dans un restaurant italien à côté.
L'après-midi, Inès a répondu à ses premiers clients au téléphone. Elle a fait quelques erreurs, mais personne ne l'a critiquée.
Le soir, elle est rentrée fatiguée mais rassurée.`,
    questions: [
      { q: "Où Inès a-t-elle commencé à travailler ?", opts: ["Dans une banque", "Dans une agence de voyages", "Dans un hôtel"], r: 1 },
      { q: "Pourquoi s'est-elle levée très tôt ?", opts: ["Parce qu'elle était nerveuse", "Le bus partait tôt", "Elle n'a pas dormi"], r: 0 },
      { q: "Qu'a-t-elle mis ?", opts: ["Une robe", "Un pull", "Une chemise blanche et une veste bleue"], r: 2 },
      { q: "Avec combien d'avance est-elle arrivée ?", opts: ["Vingt minutes", "Dix minutes", "Une heure"], r: 0 },
      { q: "Qui l'a accueillie ?", opts: ["Sarah", "La directrice", "Un client"], r: 1 },
      { q: "Combien sont-ils dans le bureau ?", opts: ["Quatre", "Cinq", "Six"], r: 2 },
      { q: "Que lui a montré Sarah ?", opts: ["Le logiciel de réservation", "Les bureaux", "Les dossiers clients"], r: 0 },
      { q: "Où ont-ils déjeuné ?", opts: ["À la cantine", "Dans un restaurant italien", "Au bureau"], r: 1 },
      { q: "Qu'a fait Inès l'après-midi ?", opts: ["Elle a rangé", "Elle a lu des documents", "Elle a répondu à des clients au téléphone"], r: 2 },
      { q: "Comment s'est-elle sentie le soir ?", opts: ["Fatiguée mais rassurée", "Déçue", "En colère"], r: 0 }
    ]
  },
  {
    titre: "Le train raté",
    texte: `Vendredi soir, Nicolas devait prendre le train de dix-neuf heures pour aller voir sa sœur à Bordeaux.
Il est parti de chez lui en retard parce qu'il cherchait ses clés partout. Finalement, il les a trouvées dans la poche de son manteau.
Dans le métro, il y a eu un problème technique et la rame s'est arrêtée pendant dix minutes.
Quand Nicolas est arrivé à la gare, le train partait déjà. Il l'a regardé partir depuis le quai.
Il est allé au guichet. L'employé lui a proposé un autre train à vingt et une heures.
Nicolas a attendu deux heures dans un café de la gare. Il a lu son livre et il a bu trois cafés.
Il est arrivé chez sa sœur à minuit passé.`,
    questions: [
      { q: "À quelle heure était le train prévu ?", opts: ["À dix-neuf heures", "À vingt heures", "À dix-huit heures"], r: 0 },
      { q: "Où allait Nicolas ?", opts: ["À Lyon", "À Bordeaux", "À Marseille"], r: 1 },
      { q: "Pourquoi est-il parti en retard ?", opts: ["Il dormait", "Il travaillait", "Il cherchait ses clés"], r: 2 },
      { q: "Où étaient les clés ?", opts: ["Dans la poche de son manteau", "Sur la table", "Dans son sac"], r: 0 },
      { q: "Que s'est-il passé dans le métro ?", opts: ["Il s'est perdu", "Il y a eu un problème technique", "Il a oublié son ticket"], r: 1 },
      { q: "Combien de temps la rame s'est-elle arrêtée ?", opts: ["Cinq minutes", "Vingt minutes", "Dix minutes"], r: 2 },
      { q: "Qu'a-t-il vu en arrivant à la gare ?", opts: ["Le train qui partait", "Le train à quai", "La gare fermée"], r: 0 },
      { q: "Que lui a proposé l'employé ?", opts: ["Un remboursement", "Un autre train à vingt et une heures", "Un bus"], r: 1 },
      { q: "Qu'a-t-il fait en attendant ?", opts: ["Il a dormi", "Il a téléphoné", "Il a lu et bu trois cafés"], r: 2 },
      { q: "À quelle heure est-il arrivé chez sa sœur ?", opts: ["À minuit passé", "À vingt-trois heures", "Le lendemain matin"], r: 0 }
    ]
  },
  {
    titre: "La recette de grand-mère",
    texte: `Dimanche, j'ai décidé de faire la tarte aux pommes de ma grand-mère.
J'ai cherché sa vieille recette dans un carnet. L'écriture était difficile à lire.
J'ai acheté six pommes, du beurre, de la farine et du sucre.
J'ai préparé la pâte, mais elle était trop molle. J'ai ajouté un peu de farine et ça a marché.
J'ai coupé les pommes en fines tranches et je les ai posées en cercle.
J'ai mis la tarte au four pendant quarante minutes.
Quand ma mère est arrivée, elle a senti l'odeur depuis l'entrée. Elle a goûté et elle a souri :
« C'est exactement le goût de mon enfance », a-t-elle dit.`,
    questions: [
      { q: "Quel jour a-t-il fait la tarte ?", opts: ["Samedi", "Dimanche", "Lundi"], r: 1 },
      { q: "Où était la recette ?", opts: ["Dans un vieux carnet", "Sur internet", "Dans un livre"], r: 0 },
      { q: "Pourquoi était-elle difficile à lire ?", opts: ["Elle était en anglais", "Le papier était déchiré", "L'écriture était difficile"], r: 2 },
      { q: "Combien de pommes a-t-il achetées ?", opts: ["Six", "Quatre", "Huit"], r: 0 },
      { q: "Quel était le problème avec la pâte ?", opts: ["Elle était trop dure", "Elle était trop molle", "Elle était brûlée"], r: 1 },
      { q: "Comment a-t-il résolu le problème ?", opts: ["Il a ajouté du beurre", "Il a recommencé", "Il a ajouté un peu de farine"], r: 2 },
      { q: "Comment a-t-il coupé les pommes ?", opts: ["En fines tranches", "En gros morceaux", "En cubes"], r: 0 },
      { q: "Combien de temps la tarte a-t-elle cuit ?", opts: ["Trente minutes", "Quarante minutes", "Une heure"], r: 1 },
      { q: "Qu'a fait sa mère en arrivant ?", opts: ["Elle a mangé toute la tarte", "Elle n'a rien dit", "Elle a senti l'odeur depuis l'entrée"], r: 2 },
      { q: "Qu'a dit sa mère ?", opts: ["C'est le goût de son enfance", "C'est trop sucré", "Ce n'est pas la bonne recette"], r: 0 }
    ]
  },
  {
    titre: "Le concert",
    texte: `Le mois dernier, Amina est allée à son premier concert de rock avec deux amies.
Elles ont acheté les billets sur internet trois mois avant. Ils ont coûté quarante euros chacun.
Le concert avait lieu dans une grande salle près du stade. Il y avait environ cinq mille personnes.
Le groupe est monté sur scène à vingt et une heures. La musique était très forte.
Amina a chanté toutes les chansons. À un moment, le chanteur est descendu près du public.
Le concert s'est terminé vers vingt-trois heures trente. Les filles avaient mal aux jambes mais elles étaient ravies.
Sur le chemin du retour, elles ont parlé du concert pendant tout le trajet.`,
    questions: [
      { q: "Quand Amina est-elle allée au concert ?", opts: ["Le mois dernier", "La semaine dernière", "L'année dernière"], r: 0 },
      { q: "Avec qui y est-elle allée ?", opts: ["Son frère", "Deux amies", "Seule"], r: 1 },
      { q: "Quand ont-elles acheté les billets ?", opts: ["La veille", "Un mois avant", "Trois mois avant"], r: 2 },
      { q: "Combien coûtait un billet ?", opts: ["Quarante euros", "Trente euros", "Cinquante euros"], r: 0 },
      { q: "Où avait lieu le concert ?", opts: ["Dans un théâtre", "Dans une grande salle près du stade", "En plein air"], r: 1 },
      { q: "Combien de personnes y avait-il ?", opts: ["Mille", "Deux mille", "Environ cinq mille"], r: 2 },
      { q: "À quelle heure le groupe est-il monté sur scène ?", opts: ["À vingt et une heures", "À vingt heures", "À vingt-deux heures"], r: 0 },
      { q: "Qu'a fait le chanteur à un moment ?", opts: ["Il a arrêté le concert", "Il est descendu près du public", "Il a changé de guitare"], r: 1 },
      { q: "Comment se sentaient les filles à la fin ?", opts: ["Déçues", "Fatiguées et tristes", "Mal aux jambes mais ravies"], r: 2 },
      { q: "De quoi ont-elles parlé sur le chemin du retour ?", opts: ["Du concert", "De leur travail", "De leurs projets"], r: 0 }
    ]
  },
  {
    titre: "Une rencontre au café",
    texte: `Hier après-midi, je travaillais sur mon ordinateur dans un café du quartier.
Une femme est entrée et a cherché une place. Toutes les tables étaient occupées.
Elle m'a demandé poliment si elle pouvait s'asseoir en face de moi. J'ai dit oui.
Nous avons commencé à discuter. Elle s'appelle Léna et elle est architecte.
Elle venait de terminer un projet difficile : la rénovation d'une vieille école.
Nous avons parlé pendant plus d'une heure de voyages, de livres et de musique.
Avant de partir, nous avons échangé nos numéros. Nous allons prendre un café ensemble la semaine prochaine.
Parfois, les meilleures rencontres arrivent quand on ne les cherche pas.`,
    questions: [
      { q: "Que faisait le narrateur au café ?", opts: ["Il lisait", "Il travaillait sur son ordinateur", "Il attendait un ami"], r: 1 },
      { q: "Pourquoi la femme a-t-elle cherché une place ?", opts: ["Toutes les tables étaient occupées", "Elle était perdue", "Elle cherchait quelqu'un"], r: 0 },
      { q: "Qu'a-t-elle demandé ?", opts: ["L'heure", "Le wifi", "Si elle pouvait s'asseoir en face"], r: 2 },
      { q: "Comment s'appelle-t-elle ?", opts: ["Léna", "Lisa", "Laure"], r: 0 },
      { q: "Quel est son métier ?", opts: ["Professeure", "Architecte", "Journaliste"], r: 1 },
      { q: "Quel projet venait-elle de terminer ?", opts: ["Un immeuble", "Un pont", "La rénovation d'une vieille école"], r: 2 },
      { q: "Combien de temps ont-ils parlé ?", opts: ["Plus d'une heure", "Dix minutes", "Toute la soirée"], r: 0 },
      { q: "De quoi ont-ils parlé ?", opts: ["De travail", "De voyages, de livres et de musique", "De politique"], r: 1 },
      { q: "Qu'ont-ils échangé avant de partir ?", opts: ["Des livres", "Des adresses", "Leurs numéros"], r: 2 },
      { q: "Que vont-ils faire la semaine prochaine ?", opts: ["Prendre un café ensemble", "Aller au cinéma", "Travailler ensemble"], r: 0 }
    ]
  },
  {
    titre: "Le colis perdu",
    texte: `Il y a deux semaines, Rachid a commandé une paire de chaussures sur internet.
Le site annonçait une livraison en trois jours. Mais après une semaine, le colis n'était toujours pas arrivé.
Rachid a vérifié le suivi en ligne. Le colis était marqué « livré », mais il n'avait rien reçu.
Il a demandé à ses voisins. Personne n'avait pris son paquet.
Il a écrit au service client. Ils ont répondu au bout de trois jours et se sont excusés.
Finalement, le livreur s'était trompé d'adresse : il avait laissé le colis dans la rue voisine.
Une dame très honnête l'a rapporté elle-même. Rachid l'a remerciée avec une boîte de chocolats.`,
    questions: [
      { q: "Qu'a commandé Rachid ?", opts: ["Un manteau", "Une paire de chaussures", "Un livre"], r: 1 },
      { q: "Quelle livraison annonçait le site ?", opts: ["En trois jours", "En une semaine", "En 24 heures"], r: 0 },
      { q: "Que disait le suivi en ligne ?", opts: ["En cours", "Perdu", "Livré"], r: 2 },
      { q: "À qui a-t-il demandé d'abord ?", opts: ["À ses voisins", "À la police", "Au magasin"], r: 0 },
      { q: "En combien de temps le service client a-t-il répondu ?", opts: ["Le jour même", "Au bout de trois jours", "Jamais"], r: 1 },
      { q: "Quelle était la vraie explication ?", opts: ["Le colis était volé", "Le colis n'était jamais parti", "Le livreur s'était trompé d'adresse"], r: 2 },
      { q: "Où le colis avait-il été laissé ?", opts: ["Dans la rue voisine", "À la poste", "Chez le gardien"], r: 0 },
      { q: "Qui a rapporté le colis ?", opts: ["Le livreur", "Une dame honnête", "Un voisin"], r: 1 },
      { q: "Comment Rachid l'a-t-il remerciée ?", opts: ["Avec de l'argent", "Avec des fleurs", "Avec une boîte de chocolats"], r: 2 },
      { q: "Depuis combien de temps avait-il commandé ?", opts: ["Deux semaines", "Un mois", "Trois jours"], r: 0 }
    ]
  },
  {
    titre: "La randonnée en montagne",
    texte: `L'été dernier, nous sommes partis faire une randonnée dans les Alpes.
Nous sommes partis tôt, à cinq heures du matin, pour éviter la chaleur.
Le début du chemin était facile, à travers une forêt de sapins. Ensuite, la montée est devenue très raide.
Ma sœur voulait s'arrêter, mais nous l'avons encouragée à continuer.
Après quatre heures de marche, nous sommes arrivés au sommet. La vue était magnifique : on voyait toute la vallée et un lac bleu.
Nous avons pique-niqué là-haut. Il faisait frais et il y avait beaucoup de vent.
La descente a été plus rapide, mais mes genoux ont beaucoup souffert.`,
    questions: [
      { q: "Quand ont-ils fait la randonnée ?", opts: ["L'été dernier", "Le printemps dernier", "L'hiver dernier"], r: 0 },
      { q: "Où sont-ils allés ?", opts: ["Dans les Pyrénées", "Dans les Alpes", "En Corse"], r: 1 },
      { q: "Pourquoi sont-ils partis à cinq heures ?", opts: ["Pour voir le lever du soleil", "Le chemin était long", "Pour éviter la chaleur"], r: 2 },
      { q: "Comment était le début du chemin ?", opts: ["Facile, à travers une forêt", "Très difficile", "Dangereux"], r: 0 },
      { q: "Quels arbres y avait-il ?", opts: ["Des chênes", "Des sapins", "Des oliviers"], r: 1 },
      { q: "Qui voulait s'arrêter ?", opts: ["Le narrateur", "Le père", "Sa sœur"], r: 2 },
      { q: "Combien de temps ont-ils marché pour monter ?", opts: ["Quatre heures", "Deux heures", "Six heures"], r: 0 },
      { q: "Que voyait-on du sommet ?", opts: ["La mer", "Toute la vallée et un lac bleu", "Une ville"], r: 1 },
      { q: "Quel temps faisait-il au sommet ?", opts: ["Très chaud", "Il pleuvait", "Frais et venteux"], r: 2 },
      { q: "Qu'est-ce qui a souffert à la descente ?", opts: ["Ses genoux", "Son dos", "Ses pieds"], r: 0 }
    ]
  },
  {
    titre: "Le marché de Noël",
    texte: `En décembre, nous sommes allés au marché de Noël de Strasbourg.
Il faisait très froid, environ moins deux degrés, mais la ville était magnifique avec toutes ses lumières.
Il y avait des dizaines de petits chalets en bois. Les vendeurs proposaient des décorations, des bougies et des jouets.
Nous avons bu du vin chaud dans des gobelets rouges. L'odeur de cannelle était partout.
Ma fille a choisi une petite étoile en verre pour notre sapin.
Nous avons aussi mangé des bretzels et des gâteaux traditionnels.
Le soir, une chorale a chanté sur la place devant la cathédrale. Les gens écoutaient en silence.
C'était un moment vraiment magique.`,
    questions: [
      { q: "Où sont-ils allés ?", opts: ["Au marché de Noël de Strasbourg", "À Paris", "En Allemagne"], r: 0 },
      { q: "Quelle température faisait-il ?", opts: ["Zéro degré", "Environ moins deux degrés", "Cinq degrés"], r: 1 },
      { q: "En quoi étaient les petits chalets ?", opts: ["En pierre", "En métal", "En bois"], r: 2 },
      { q: "Que proposaient les vendeurs ?", opts: ["Des décorations, des bougies et des jouets", "Des vêtements", "Des livres"], r: 0 },
      { q: "Qu'ont-ils bu ?", opts: ["Du chocolat chaud", "Du vin chaud", "Du thé"], r: 1 },
      { q: "Quelle odeur y avait-il partout ?", opts: ["De pain", "De chocolat", "De cannelle"], r: 2 },
      { q: "Qu'a choisi sa fille ?", opts: ["Une petite étoile en verre", "Une bougie", "Un jouet"], r: 0 },
      { q: "Qu'ont-ils mangé ?", opts: ["Des crêpes", "Des bretzels et des gâteaux traditionnels", "Des sandwichs"], r: 1 },
      { q: "Qui a chanté le soir ?", opts: ["Un groupe", "Un chanteur", "Une chorale"], r: 2 },
      { q: "Où la chorale a-t-elle chanté ?", opts: ["Sur la place devant la cathédrale", "Dans un chalet", "Dans une église"], r: 0 }
    ]
  },
  {
    titre: "L'examen de conduite",
    texte: `Mardi dernier, Yasmine a passé son permis de conduire pour la deuxième fois.
La première fois, elle avait échoué à cause d'un stop qu'elle n'avait pas bien marqué.
Cette fois, elle avait beaucoup travaillé avec son moniteur. Elle avait fait vingt heures de conduite supplémentaires.
Le matin de l'examen, elle n'a presque rien mangé tellement elle était stressée.
L'inspecteur était un homme calme qui parlait doucement. Cela l'a beaucoup aidée.
Elle a conduit pendant trente minutes en ville et sur une route de campagne. Elle a fait un créneau parfait.
À la fin, l'inspecteur n'a rien dit. Elle a reçu le résultat deux jours après : elle avait réussi !`,
    questions: [
      { q: "C'était la combientième fois ?", opts: ["La première", "La deuxième", "La troisième"], r: 1 },
      { q: "Pourquoi avait-elle échoué la première fois ?", opts: ["Un stop mal marqué", "Un créneau raté", "Elle roulait trop vite"], r: 0 },
      { q: "Combien d'heures supplémentaires a-t-elle faites ?", opts: ["Dix", "Trente", "Vingt"], r: 2 },
      { q: "Qu'a-t-elle fait le matin de l'examen ?", opts: ["Elle n'a presque rien mangé", "Elle a beaucoup mangé", "Elle a dormi tard"], r: 0 },
      { q: "Comment était l'inspecteur ?", opts: ["Sévère", "Calme et il parlait doucement", "Pressé"], r: 1 },
      { q: "Combien de temps a-t-elle conduit ?", opts: ["Une heure", "Vingt minutes", "Trente minutes"], r: 2 },
      { q: "Où a-t-elle conduit ?", opts: ["En ville et sur une route de campagne", "Sur l'autoroute", "Seulement en ville"], r: 0 },
      { q: "Comment était son créneau ?", opts: ["Raté", "Parfait", "Moyen"], r: 1 },
      { q: "Qu'a dit l'inspecteur à la fin ?", opts: ["Bravo", "Que c'était raté", "Rien"], r: 2 },
      { q: "Quand a-t-elle reçu le résultat ?", opts: ["Deux jours après", "Le jour même", "Une semaine après"], r: 0 }
    ]
  },
  {
    titre: "Un dîner entre amis",
    texte: `Samedi soir, nous avons invité quatre amis à dîner à la maison.
J'ai passé l'après-midi à cuisiner. J'ai préparé une entrée de légumes grillés et un plat de poulet au citron.
Mon mari s'est occupé du dessert : une mousse au chocolat.
Nos amis sont arrivés à vingt heures avec deux bouteilles de vin et un bouquet de fleurs.
Nous avons beaucoup ri. Sébastien a raconté une histoire drôle sur ses vacances en Espagne.
Après le dîner, nous avons joué à un jeu de société jusqu'à une heure du matin.
Le lendemain, la cuisine était en désordre, mais nous étions très contents de cette soirée.`,
    questions: [
      { q: "Combien d'amis ont-ils invités ?", opts: ["Deux", "Quatre", "Six"], r: 1 },
      { q: "Qu'a préparé le narrateur en entrée ?", opts: ["Des légumes grillés", "Une soupe", "Une salade"], r: 0 },
      { q: "Quel était le plat principal ?", opts: ["Du poisson", "Des pâtes", "Du poulet au citron"], r: 2 },
      { q: "Qui s'est occupé du dessert ?", opts: ["Son mari", "Un ami", "Sa fille"], r: 0 },
      { q: "Quel était le dessert ?", opts: ["Une tarte", "Une mousse au chocolat", "Une glace"], r: 1 },
      { q: "À quelle heure les amis sont-ils arrivés ?", opts: ["À dix-neuf heures", "À vingt et une heures", "À vingt heures"], r: 2 },
      { q: "Qu'ont-ils apporté ?", opts: ["Du vin et des fleurs", "Un gâteau", "Rien"], r: 0 },
      { q: "Sur quoi portait l'histoire de Sébastien ?", opts: ["Son travail", "Ses vacances en Espagne", "Sa famille"], r: 1 },
      { q: "Qu'ont-ils fait après le dîner ?", opts: ["Ils ont regardé un film", "Ils sont sortis", "Ils ont joué à un jeu de société"], r: 2 },
      { q: "Jusqu'à quelle heure ?", opts: ["Une heure du matin", "Minuit", "Deux heures"], r: 0 }
    ]
  },
  {
    titre: "Le vélo volé",
    texte: `Jeudi matin, Manon a attaché son vélo devant la bibliothèque comme d'habitude.
Elle a mis un antivol, mais c'était un modèle assez ancien et pas très solide.
Quand elle est ressortie, deux heures plus tard, le vélo n'était plus là. Il ne restait que l'antivol cassé par terre.
Manon était très en colère. C'était un cadeau de son père.
Elle est allée au commissariat pour faire une déclaration. Le policier lui a dit que c'était fréquent dans ce quartier.
Trois semaines après, la police l'a appelée : ils avaient retrouvé le vélo dans une cave.
Il était un peu abîmé, mais il fonctionnait encore. Manon a acheté un antivol beaucoup plus solide.`,
    questions: [
      { q: "Où Manon a-t-elle attaché son vélo ?", opts: ["Devant la bibliothèque", "Devant chez elle", "À la gare"], r: 0 },
      { q: "Comment était l'antivol ?", opts: ["Neuf", "Assez ancien et pas solide", "Très solide"], r: 1 },
      { q: "Combien de temps est-elle restée à l'intérieur ?", opts: ["Une heure", "Trois heures", "Deux heures"], r: 2 },
      { q: "Qu'est-ce qui restait par terre ?", opts: ["L'antivol cassé", "La roue", "Rien"], r: 0 },
      { q: "Pourquoi ce vélo comptait-il pour elle ?", opts: ["Il était cher", "C'était un cadeau de son père", "Il était neuf"], r: 1 },
      { q: "Où est-elle allée ?", opts: ["Au magasin", "Chez son père", "Au commissariat"], r: 2 },
      { q: "Qu'a dit le policier ?", opts: ["Que c'était fréquent dans ce quartier", "Qu'il n'y avait rien à faire", "Qu'elle était responsable"], r: 0 },
      { q: "Quand la police a-t-elle appelé ?", opts: ["Le lendemain", "Trois semaines après", "Un mois après"], r: 1 },
      { q: "Où avait-on retrouvé le vélo ?", opts: ["Dans la rue", "Dans un magasin", "Dans une cave"], r: 2 },
      { q: "Qu'a acheté Manon ensuite ?", opts: ["Un antivol plus solide", "Un nouveau vélo", "Une assurance"], r: 0 }
    ]
  },
  {
    titre: "Une soirée au cinéma",
    texte: `Vendredi soir, Théo et Clara ont décidé d'aller au cinéma sans réserver.
Quand ils sont arrivés, il y avait une longue file d'attente. Le film qu'ils voulaient voir était complet.
Ils ont donc choisi un autre film, une comédie française qu'ils ne connaissaient pas.
Les places coûtaient neuf euros cinquante. Ils ont acheté du popcorn salé et deux boissons.
Au début, Clara trouvait le film un peu lent. Mais après vingt minutes, l'histoire est devenue passionnante.
Ils ont beaucoup ri, surtout dans la scène du restaurant.
En sortant, ils ont mangé une glace et ils ont discuté du film pendant tout le chemin du retour.
Finalement, ce hasard leur a fait découvrir un très bon film.`,
    questions: [
      { q: "Avaient-ils réservé ?", opts: ["Non", "Oui", "Ils avaient réservé la veille"], r: 0 },
      { q: "Qu'ont-ils trouvé en arrivant ?", opts: ["Le cinéma fermé", "Une longue file d'attente", "Une salle vide"], r: 1 },
      { q: "Pourquoi ont-ils changé de film ?", opts: ["Il était trop long", "Il était trop cher", "Le film voulu était complet"], r: 2 },
      { q: "Quel genre de film ont-ils vu ?", opts: ["Une comédie française", "Un film d'horreur", "Un documentaire"], r: 0 },
      { q: "Combien coûtaient les places ?", opts: ["Huit euros", "Neuf euros cinquante", "Douze euros"], r: 1 },
      { q: "Quel popcorn ont-ils pris ?", opts: ["Sucré", "Au caramel", "Salé"], r: 2 },
      { q: "Que pensait Clara au début ?", opts: ["Que le film était un peu lent", "Que le film était nul", "Qu'il était génial"], r: 0 },
      { q: "Après combien de temps est-ce devenu passionnant ?", opts: ["Dix minutes", "Vingt minutes", "Une heure"], r: 1 },
      { q: "Quelle scène les a fait le plus rire ?", opts: ["La scène finale", "La première scène", "La scène du restaurant"], r: 2 },
      { q: "Qu'ont-ils fait en sortant ?", opts: ["Ils ont mangé une glace", "Ils sont rentrés directement", "Ils ont revu le film"], r: 0 }
    ]
  },
  {
    titre: "La fête des voisins",
    texte: `Chaque année, notre immeuble organise une fête des voisins au mois de mai.
Cette année, nous avons installé de grandes tables dans la cour. Chacun a apporté un plat.
Madame Leroy, qui a quatre-vingts ans, a fait un énorme gâteau aux fruits.
Les enfants ont joué au ballon pendant que les adultes discutaient.
J'ai enfin rencontré le couple du dernier étage. Ils habitent là depuis un an, mais nous ne nous étions jamais parlé.
Vers vingt-deux heures, quelqu'un a mis de la musique et plusieurs personnes ont dansé.
Nous avons tout rangé vers minuit. Depuis cette soirée, on se dit bonjour dans l'escalier avec le sourire.`,
    questions: [
      { q: "Quand a lieu la fête ?", opts: ["Au mois de mai", "En juin", "En avril"], r: 0 },
      { q: "Où ont-ils installé les tables ?", opts: ["Dans la rue", "Dans la cour", "Dans le hall"], r: 1 },
      { q: "Qu'a apporté chacun ?", opts: ["Une boisson", "Rien", "Un plat"], r: 2 },
      { q: "Quel âge a Madame Leroy ?", opts: ["Quatre-vingts ans", "Soixante-dix ans", "Quatre-vingt-dix ans"], r: 0 },
      { q: "Qu'a-t-elle préparé ?", opts: ["Une tarte", "Un énorme gâteau aux fruits", "Une salade"], r: 1 },
      { q: "Qu'ont fait les enfants ?", opts: ["Ils ont dansé", "Ils ont mangé", "Ils ont joué au ballon"], r: 2 },
      { q: "Qui le narrateur a-t-il enfin rencontré ?", opts: ["Le couple du dernier étage", "Le gardien", "De nouveaux voisins"], r: 0 },
      { q: "Depuis combien de temps habitent-ils là ?", opts: ["Six mois", "Un an", "Deux ans"], r: 1 },
      { q: "Que s'est-il passé vers vingt-deux heures ?", opts: ["Tout le monde est parti", "Il a plu", "Quelqu'un a mis de la musique"], r: 2 },
      { q: "Qu'est-ce qui a changé depuis cette soirée ?", opts: ["On se dit bonjour avec le sourire", "Rien", "Les voisins sont partis"], r: 0 }
    ]
  },
  {
    titre: "Le chat sur le toit",
    texte: `Un matin, les enfants ont entendu un miaulement bizarre. Ils ont regardé partout dans la maison.
Finalement, ils ont compris : le chat était monté sur le toit du garage et il n'arrivait plus à descendre.
Mon père a apporté une échelle, mais elle était trop courte de deux mètres.
Nous avons essayé d'attirer le chat avec de la nourriture. Il nous regardait, mais il ne bougeait pas.
Après une heure, un voisin est venu avec une grande échelle. Il est monté doucement et il a attrapé le chat.
Le chat avait très peur : il tremblait beaucoup.
Une fois en bas, il a mangé et il s'est endormi immédiatement. Depuis, nous fermons la fenêtre du grenier.`,
    questions: [
      { q: "Qu'ont entendu les enfants ?", opts: ["Un miaulement bizarre", "Un bruit dans le jardin", "Un aboiement"], r: 0 },
      { q: "Où était le chat ?", opts: ["Dans un arbre", "Sur le toit du garage", "Dans la cave"], r: 1 },
      { q: "Quel était le problème ?", opts: ["Il était blessé", "Il était coincé dans une gouttière", "Il n'arrivait plus à descendre"], r: 2 },
      { q: "Qu'a apporté le père ?", opts: ["Une échelle", "Une corde", "Un panier"], r: 0 },
      { q: "Quel était le problème avec l'échelle ?", opts: ["Elle était cassée", "Elle était trop courte de deux mètres", "Elle était trop lourde"], r: 1 },
      { q: "Comment ont-ils essayé d'attirer le chat ?", opts: ["En criant", "Avec un jouet", "Avec de la nourriture"], r: 2 },
      { q: "Qui est venu aider ?", opts: ["Un voisin", "Les pompiers", "Un ami"], r: 0 },
      { q: "Après combien de temps ?", opts: ["Dix minutes", "Une heure", "Deux heures"], r: 1 },
      { q: "Comment était le chat ?", opts: ["Content", "En colère", "Il tremblait de peur"], r: 2 },
      { q: "Qu'a fait le chat une fois en bas ?", opts: ["Il a mangé et s'est endormi", "Il est reparti", "Il s'est caché"], r: 0 }
    ]
  },
  {
    titre: "Le week-end à la campagne",
    texte: `Le week-end dernier, nous sommes partis à la campagne chez des amis.
Le trajet a duré deux heures et demie. Il y avait beaucoup de circulation à la sortie de la ville.
Leur maison est ancienne, avec des murs en pierre et une cheminée.
Samedi, nous avons fait un grand tour à pied dans les champs. Nous avons vu des vaches et des chevaux.
Le soir, nous avons fait un feu dans la cheminée et nous avons grillé des châtaignes.
Dimanche matin, il a plu, alors nous sommes restés à l'intérieur à jouer aux cartes.
Nous sommes rentrés en fin d'après-midi, reposés et avec des légumes de leur jardin.`,
    questions: [
      { q: "Chez qui sont-ils allés ?", opts: ["Chez des amis", "Chez leurs parents", "À l'hôtel"], r: 0 },
      { q: "Combien de temps a duré le trajet ?", opts: ["Deux heures", "Deux heures et demie", "Trois heures"], r: 1 },
      { q: "Pourquoi le trajet était-il long ?", opts: ["La route était mauvaise", "Ils se sont perdus", "Il y avait beaucoup de circulation"], r: 2 },
      { q: "Comment est la maison des amis ?", opts: ["Ancienne, avec des murs en pierre", "Moderne", "Petite"], r: 0 },
      { q: "Qu'ont-ils fait samedi ?", opts: ["Du vélo", "Un grand tour à pied dans les champs", "Ils ont visité un village"], r: 1 },
      { q: "Quels animaux ont-ils vus ?", opts: ["Des moutons", "Des poules", "Des vaches et des chevaux"], r: 2 },
      { q: "Qu'ont-ils grillé le soir ?", opts: ["Des châtaignes", "De la viande", "Du pain"], r: 0 },
      { q: "Quel temps faisait-il dimanche matin ?", opts: ["Il faisait beau", "Il a plu", "Il y avait du brouillard"], r: 1 },
      { q: "Qu'ont-ils fait dimanche matin ?", opts: ["Ils ont dormi", "Ils sont sortis", "Ils ont joué aux cartes"], r: 2 },
      { q: "Qu'ont-ils rapporté ?", opts: ["Des légumes du jardin", "Des fleurs", "Du fromage"], r: 0 }
    ]
  },
  {
    titre: "La lettre surprise",
    texte: `Un jeudi, Élodie a trouvé une lettre manuscrite dans sa boîte aux lettres.
Aujourd'hui, presque personne n'écrit de lettres, alors elle était très intriguée.
L'enveloppe venait du Canada. Elle ne connaissait personne là-bas.
C'était une ancienne camarade de classe, Pauline, qu'elle n'avait pas vue depuis quinze ans.
Pauline avait retrouvé son adresse grâce à une amie commune. Elle racontait sa vie à Montréal, son travail et ses deux enfants.
Élodie a lu la lettre trois fois. Elle était très émue.
Le soir même, elle a pris un stylo et du papier, et elle a répondu. Elle a écrit six pages.
Depuis, elles s'écrivent tous les mois.`,
    questions: [
      { q: "Qu'a trouvé Élodie ?", opts: ["Une lettre manuscrite", "Un colis", "Une carte postale"], r: 0 },
      { q: "Pourquoi était-elle intriguée ?", opts: ["L'enveloppe était étrange", "Presque personne n'écrit de lettres", "Il n'y avait pas de nom"], r: 1 },
      { q: "D'où venait l'enveloppe ?", opts: ["De Belgique", "De Suisse", "Du Canada"], r: 2 },
      { q: "Qui avait écrit la lettre ?", opts: ["Une ancienne camarade de classe", "Sa cousine", "Une inconnue"], r: 0 },
      { q: "Depuis combien de temps ne s'étaient-elles pas vues ?", opts: ["Dix ans", "Quinze ans", "Vingt ans"], r: 1 },
      { q: "Comment Pauline avait-elle retrouvé son adresse ?", opts: ["Sur internet", "Par sa famille", "Grâce à une amie commune"], r: 2 },
      { q: "Où vit Pauline ?", opts: ["À Montréal", "À Québec", "À Toronto"], r: 0 },
      { q: "Combien d'enfants a-t-elle ?", opts: ["Un", "Deux", "Trois"], r: 1 },
      { q: "Combien de fois Élodie a-t-elle lu la lettre ?", opts: ["Une fois", "Deux fois", "Trois fois"], r: 2 },
      { q: "Combien de pages a-t-elle écrites en réponse ?", opts: ["Six", "Deux", "Dix"], r: 0 }
    ]
  },
  {
    titre: "Le stage en entreprise",
    texte: `L'année dernière, Malik a fait un stage de deux mois dans une entreprise d'informatique.
Au début, il ne savait pas quoi faire. Personne ne lui donnait de tâches précises.
Après une semaine, il a osé parler à son tuteur. Celui-ci s'est excusé : il avait été très occupé.
Ensuite, tout a changé. Malik a travaillé sur un vrai projet : améliorer le site internet de l'entreprise.
Il a appris à travailler en équipe et à présenter ses idées devant plusieurs personnes.
À la fin du stage, il a fait une présentation devant toute l'équipe. Il était très stressé, mais ça s'est bien passé.
L'entreprise lui a proposé de revenir l'été suivant.`,
    questions: [
      { q: "Combien de temps a duré le stage ?", opts: ["Deux mois", "Un mois", "Trois mois"], r: 0 },
      { q: "Dans quel domaine ?", opts: ["La finance", "L'informatique", "Le commerce"], r: 1 },
      { q: "Quel était le problème au début ?", opts: ["Il arrivait en retard", "Il ne comprenait rien", "Personne ne lui donnait de tâches"], r: 2 },
      { q: "Qu'a-t-il fait après une semaine ?", opts: ["Il a parlé à son tuteur", "Il a démissionné", "Il s'est plaint"], r: 0 },
      { q: "Pourquoi le tuteur s'est-il excusé ?", opts: ["Il avait oublié Malik", "Il avait été très occupé", "Il était en vacances"], r: 1 },
      { q: "Sur quoi Malik a-t-il travaillé ?", opts: ["Une application", "Une base de données", "Le site internet de l'entreprise"], r: 2 },
      { q: "Qu'a-t-il appris ?", opts: ["À travailler en équipe et présenter ses idées", "À coder", "À gérer un budget"], r: 0 },
      { q: "Qu'a-t-il fait à la fin du stage ?", opts: ["Un rapport", "Une présentation devant l'équipe", "Un entretien"], r: 1 },
      { q: "Comment se sentait-il ?", opts: ["Détendu", "Content", "Très stressé"], r: 2 },
      { q: "Que lui a proposé l'entreprise ?", opts: ["De revenir l'été suivant", "Un emploi fixe", "Rien"], r: 0 }
    ]
  },
  {
    titre: "La visite du musée",
    texte: `Jeudi dernier, la classe de Madame Roux a visité un musée d'histoire naturelle.
Le voyage en car a duré une heure. Les élèves ont chanté pendant tout le trajet.
Au musée, une guide les attendait. Elle s'appelait Nadia et elle connaissait beaucoup d'histoires intéressantes.
Les élèves ont d'abord vu un squelette de dinosaure de quinze mètres de long. Tout le monde était impressionné.
Ensuite, ils ont visité la salle des minéraux, avec des pierres de toutes les couleurs.
Un élève, Adam, a posé tellement de questions que la guide a ri.
À la fin, chacun a acheté une petite carte postale à la boutique. Ils sont rentrés fatigués mais enthousiastes.`,
    questions: [
      { q: "Quel musée ont-ils visité ?", opts: ["Un musée d'histoire naturelle", "Un musée d'art", "Un musée des sciences"], r: 0 },
      { q: "Combien de temps a duré le voyage en car ?", opts: ["Trente minutes", "Une heure", "Deux heures"], r: 1 },
      { q: "Qu'ont fait les élèves dans le car ?", opts: ["Ils ont dormi", "Ils ont lu", "Ils ont chanté"], r: 2 },
      { q: "Comment s'appelait la guide ?", opts: ["Nadia", "Madame Roux", "Sarah"], r: 0 },
      { q: "Qu'ont-ils vu en premier ?", opts: ["Des minéraux", "Un squelette de dinosaure", "Des animaux"], r: 1 },
      { q: "Quelle était sa longueur ?", opts: ["Dix mètres", "Vingt mètres", "Quinze mètres"], r: 2 },
      { q: "Qu'y avait-il dans la deuxième salle ?", opts: ["Des pierres de toutes les couleurs", "Des insectes", "Des fossiles"], r: 0 },
      { q: "Qu'a fait Adam ?", opts: ["Il s'est perdu", "Il a posé beaucoup de questions", "Il s'est ennuyé"], r: 1 },
      { q: "Comment a réagi la guide ?", opts: ["Elle s'est fâchée", "Elle n'a pas répondu", "Elle a ri"], r: 2 },
      { q: "Qu'ont-ils acheté à la boutique ?", opts: ["Une carte postale", "Un livre", "Un souvenir"], r: 0 }
    ]
  },
  {
    titre: "Le déjeuner oublié",
    texte: `Ce matin, Sonia est partie au travail très pressée. Elle avait préparé son déjeuner la veille au soir.
Mais elle a laissé la boîte sur la table de la cuisine. Elle s'en est rendu compte seulement à midi.
Elle n'avait pas beaucoup d'argent sur elle, seulement quatre euros.
Une collègue, Fatou, a remarqué qu'elle ne mangeait pas. Elle lui a proposé de partager son repas.
Elles se sont installées dehors, sur un banc, parce qu'il faisait très beau.
Elles ont parlé de leurs familles et de leurs projets de vacances. C'était la première fois qu'elles discutaient vraiment.
Depuis ce jour, elles déjeunent ensemble presque tous les jours.`,
    questions: [
      { q: "Quand Sonia avait-elle préparé son déjeuner ?", opts: ["La veille au soir", "Le matin même", "Deux jours avant"], r: 0 },
      { q: "Où a-t-elle laissé la boîte ?", opts: ["Dans le frigo", "Sur la table de la cuisine", "Dans sa voiture"], r: 1 },
      { q: "Quand s'en est-elle rendu compte ?", opts: ["Le matin", "En arrivant", "À midi"], r: 2 },
      { q: "Combien d'argent avait-elle ?", opts: ["Quatre euros", "Dix euros", "Rien"], r: 0 },
      { q: "Qui a remarqué le problème ?", opts: ["Son patron", "Sa collègue Fatou", "Personne"], r: 1 },
      { q: "Qu'a proposé Fatou ?", opts: ["De lui prêter de l'argent", "D'aller au restaurant", "De partager son repas"], r: 2 },
      { q: "Où se sont-elles installées ?", opts: ["Dehors, sur un banc", "À la cantine", "Au bureau"], r: 0 },
      { q: "Pourquoi dehors ?", opts: ["Il n'y avait pas de place", "Il faisait très beau", "Elles voulaient être seules"], r: 1 },
      { q: "De quoi ont-elles parlé ?", opts: ["Du travail", "De leurs collègues", "De leurs familles et de leurs vacances"], r: 2 },
      { q: "Que font-elles depuis ce jour ?", opts: ["Elles déjeunent ensemble presque tous les jours", "Elles s'évitent", "Elles travaillent ensemble"], r: 0 }
    ]
  }
];
