/* Histoires A1 — présent, phrases courtes, vocabulaire du quotidien.
 * Format : { titre, texte, questions: [{ q, opts: [...], r: index de la bonne réponse }] }
 * `var` (et non const) pour être accessible via window[...] dans app.js.
 */
var STORIES_A1 = [
  {
    titre: "Le matin de Léa",
    texte: `Léa se réveille à sept heures. Elle est dans sa chambre. Elle ouvre la fenêtre : il fait beau.
Léa prend une douche, puis elle s'habille. Elle porte un pull bleu et un pantalon noir.
Dans la cuisine, elle prend son petit déjeuner : un café et deux tartines. Sa mère mange une pomme.
À huit heures, Léa prend son sac et sort de la maison. Elle marche cinq minutes.
Elle arrive à l'école à huit heures et quart. Elle est contente : aujourd'hui, elle a un cours de dessin.`,
    questions: [
      { q: "À quelle heure Léa se réveille-t-elle ?", opts: ["À six heures", "À sept heures", "À huit heures"], r: 1 },
      { q: "Où est Léa quand elle se réveille ?", opts: ["Dans la cuisine", "Dans le jardin", "Dans sa chambre"], r: 2 },
      { q: "Quel temps fait-il ?", opts: ["Il fait beau", "Il pleut", "Il neige"], r: 0 },
      { q: "De quelle couleur est son pull ?", opts: ["Rouge", "Bleu", "Vert"], r: 1 },
      { q: "Que porte-t-elle avec le pull ?", opts: ["Une jupe", "Un short", "Un pantalon noir"], r: 2 },
      { q: "Que boit Léa au petit déjeuner ?", opts: ["Du thé", "Du café", "Du jus d'orange"], r: 1 },
      { q: "Combien de tartines mange-t-elle ?", opts: ["Une", "Deux", "Trois"], r: 1 },
      { q: "Que mange sa mère ?", opts: ["Une banane", "Une pomme", "Un gâteau"], r: 1 },
      { q: "Combien de temps Léa marche-t-elle ?", opts: ["Cinq minutes", "Dix minutes", "Vingt minutes"], r: 0 },
      { q: "Pourquoi Léa est-elle contente ?", opts: ["Elle a un cours de dessin", "Il n'y a pas d'école", "Elle a un cours de sport"], r: 0 }
    ]
  },
  {
    titre: "La famille de Paul",
    texte: `Paul a dix ans. Il habite à Lyon avec ses parents et sa sœur.
Son père s'appelle Marc. Il est cuisinier dans un restaurant. Sa mère s'appelle Sophie. Elle est professeur de musique.
Sa sœur Julie a quinze ans. Elle aime beaucoup lire.
La famille a un chien. Il s'appelle Rex et il est très gentil.
Le dimanche, ils vont au parc ensemble. Paul joue au football avec son père. Julie et sa mère marchent avec le chien.`,
    questions: [
      { q: "Quel âge a Paul ?", opts: ["Huit ans", "Dix ans", "Quinze ans"], r: 1 },
      { q: "Dans quelle ville habite-t-il ?", opts: ["Paris", "Marseille", "Lyon"], r: 2 },
      { q: "Comment s'appelle son père ?", opts: ["Marc", "Paul", "Rex"], r: 0 },
      { q: "Quel est le métier du père ?", opts: ["Professeur", "Cuisinier", "Médecin"], r: 1 },
      { q: "Que fait la mère de Paul ?", opts: ["Elle est professeur de musique", "Elle est cuisinière", "Elle est vendeuse"], r: 0 },
      { q: "Quel âge a Julie ?", opts: ["Dix ans", "Douze ans", "Quinze ans"], r: 2 },
      { q: "Qu'est-ce que Julie aime faire ?", opts: ["Lire", "Danser", "Cuisiner"], r: 0 },
      { q: "Quel animal a la famille ?", opts: ["Un chat", "Un chien", "Un oiseau"], r: 1 },
      { q: "Où va la famille le dimanche ?", opts: ["Au cinéma", "Au parc", "Au restaurant"], r: 1 },
      { q: "Avec qui Paul joue-t-il au football ?", opts: ["Avec sa sœur", "Avec sa mère", "Avec son père"], r: 2 }
    ]
  },
  {
    titre: "Au marché",
    texte: `C'est samedi matin. Madame Durand va au marché. Le marché est sur la grande place.
Elle achète des tomates, des carottes et une salade. Les tomates sont rouges et belles.
Chez le boulanger, elle prend deux baguettes. Le pain est encore chaud.
Elle voit son amie Claire. Elles parlent cinq minutes. Claire achète du fromage.
Madame Durand paie vingt euros. Son sac est lourd. Elle rentre à la maison à midi.`,
    questions: [
      { q: "Quel jour va-t-elle au marché ?", opts: ["Vendredi", "Samedi", "Dimanche"], r: 1 },
      { q: "Où est le marché ?", opts: ["Sur la grande place", "Près de l'école", "Dans le parc"], r: 0 },
      { q: "Quels légumes achète-t-elle ?", opts: ["Des pommes de terre", "Des tomates et des carottes", "Des oignons"], r: 1 },
      { q: "De quelle couleur sont les tomates ?", opts: ["Vertes", "Jaunes", "Rouges"], r: 2 },
      { q: "Combien de baguettes prend-elle ?", opts: ["Une", "Deux", "Trois"], r: 1 },
      { q: "Comment est le pain ?", opts: ["Encore chaud", "Froid", "Dur"], r: 0 },
      { q: "Qui rencontre-t-elle ?", opts: ["Sa sœur", "Son amie Claire", "Sa voisine"], r: 1 },
      { q: "Qu'achète Claire ?", opts: ["Du fromage", "Du pain", "Des fruits"], r: 0 },
      { q: "Combien paie Madame Durand ?", opts: ["Dix euros", "Quinze euros", "Vingt euros"], r: 2 },
      { q: "À quelle heure rentre-t-elle ?", opts: ["À dix heures", "À midi", "À deux heures"], r: 1 }
    ]
  },
  {
    titre: "Le chat de Marie",
    texte: `Marie a un chat. Il s'appelle Minou. Il est petit et noir, avec des yeux verts.
Minou dort beaucoup. Il aime dormir sur le canapé, près de la fenêtre.
Le matin, il mange du poisson. L'après-midi, il joue avec une balle rouge.
Minou n'aime pas l'eau. Quand il pleut, il reste à la maison.
Marie adore son chat. Le soir, Minou dort sur le lit de Marie.`,
    questions: [
      { q: "Comment s'appelle le chat ?", opts: ["Minou", "Rex", "Félix"], r: 0 },
      { q: "De quelle couleur est le chat ?", opts: ["Blanc", "Noir", "Gris"], r: 1 },
      { q: "De quelle couleur sont ses yeux ?", opts: ["Bleus", "Jaunes", "Verts"], r: 2 },
      { q: "Où aime-t-il dormir ?", opts: ["Sur le canapé", "Sous la table", "Dans le jardin"], r: 0 },
      { q: "Près de quoi est le canapé ?", opts: ["De la porte", "De la fenêtre", "De la cuisine"], r: 1 },
      { q: "Que mange Minou le matin ?", opts: ["De la viande", "Du lait", "Du poisson"], r: 2 },
      { q: "Avec quoi joue-t-il l'après-midi ?", opts: ["Une balle rouge", "Une souris", "Une corde"], r: 0 },
      { q: "Qu'est-ce que Minou n'aime pas ?", opts: ["Le poisson", "L'eau", "Dormir"], r: 1 },
      { q: "Que fait-il quand il pleut ?", opts: ["Il sort", "Il joue dehors", "Il reste à la maison"], r: 2 },
      { q: "Où dort Minou le soir ?", opts: ["Sur le lit de Marie", "Sur le canapé", "Dans la cuisine"], r: 0 }
    ]
  },
  {
    titre: "À l'école",
    texte: `Tom est à l'école. Sa classe est au premier étage. Il y a vingt élèves.
Le professeur s'appelle Monsieur Blanc. Il est grand et il porte des lunettes.
Le matin, les élèves font des mathématiques. Tom aime les chiffres.
À dix heures, il y a une récréation. Les enfants jouent dans la cour.
L'après-midi, ils font du français. Tom écrit une petite histoire. Le professeur est content de son travail.`,
    questions: [
      { q: "Où est la classe de Tom ?", opts: ["Au rez-de-chaussée", "Au premier étage", "Au deuxième étage"], r: 1 },
      { q: "Combien d'élèves y a-t-il ?", opts: ["Dix", "Quinze", "Vingt"], r: 2 },
      { q: "Comment s'appelle le professeur ?", opts: ["Monsieur Blanc", "Monsieur Noir", "Monsieur Petit"], r: 0 },
      { q: "Comment est le professeur ?", opts: ["Petit", "Grand", "Vieux"], r: 1 },
      { q: "Que porte-t-il ?", opts: ["Un chapeau", "Une cravate", "Des lunettes"], r: 2 },
      { q: "Que font les élèves le matin ?", opts: ["Des mathématiques", "Du sport", "Du dessin"], r: 0 },
      { q: "Qu'est-ce que Tom aime ?", opts: ["Les livres", "Les chiffres", "La musique"], r: 1 },
      { q: "À quelle heure est la récréation ?", opts: ["À neuf heures", "À onze heures", "À dix heures"], r: 2 },
      { q: "Où jouent les enfants ?", opts: ["Dans la cour", "Dans la classe", "Dans la rue"], r: 0 },
      { q: "Qu'écrit Tom l'après-midi ?", opts: ["Une lettre", "Une petite histoire", "Un poème"], r: 1 }
    ]
  },
  {
    titre: "Le week-end de Sophie",
    texte: `Le samedi, Sophie ne travaille pas. Elle se lève tard, à dix heures.
Elle prend un grand café et elle lit le journal.
L'après-midi, elle fait du vélo dans la forêt. Le chemin est joli et calme.
Le soir, elle regarde un film à la télé. Elle mange une pizza.
Le dimanche, Sophie va chez ses parents. Ils habitent à la campagne. Elle mange avec eux et rentre à sept heures.`,
    questions: [
      { q: "Que fait Sophie le samedi ?", opts: ["Elle travaille", "Elle ne travaille pas", "Elle va à l'école"], r: 1 },
      { q: "À quelle heure se lève-t-elle ?", opts: ["À huit heures", "À neuf heures", "À dix heures"], r: 2 },
      { q: "Que boit-elle le matin ?", opts: ["Un grand café", "Un thé", "Un jus"], r: 0 },
      { q: "Que lit-elle ?", opts: ["Un livre", "Le journal", "Une lettre"], r: 1 },
      { q: "Que fait-elle l'après-midi ?", opts: ["Du vélo", "De la natation", "Du football"], r: 0 },
      { q: "Où fait-elle du vélo ?", opts: ["En ville", "Dans la forêt", "Au parc"], r: 1 },
      { q: "Comment est le chemin ?", opts: ["Difficile", "Long", "Joli et calme"], r: 2 },
      { q: "Que mange-t-elle le soir ?", opts: ["Une pizza", "Une salade", "Du poisson"], r: 0 },
      { q: "Où habitent ses parents ?", opts: ["En ville", "À la campagne", "À la mer"], r: 1 },
      { q: "À quelle heure rentre-t-elle le dimanche ?", opts: ["À cinq heures", "À six heures", "À sept heures"], r: 2 }
    ]
  },
  {
    titre: "Dans la cuisine",
    texte: `Ce soir, Antoine prépare le dîner. Il fait une soupe de légumes.
Il lave les carottes et les pommes de terre. Il coupe les légumes sur une planche en bois.
Il met de l'eau dans une grande casserole. Il ajoute du sel et un peu de poivre.
La soupe cuit pendant trente minutes. La cuisine sent très bon.
Sa femme arrive à huit heures. Elle est fatiguée mais elle est contente : le dîner est prêt.`,
    questions: [
      { q: "Que prépare Antoine ?", opts: ["Une salade", "Une soupe de légumes", "Un gâteau"], r: 1 },
      { q: "Quels légumes lave-t-il ?", opts: ["Des tomates et des oignons", "Des carottes et des pommes de terre", "Des haricots"], r: 1 },
      { q: "Sur quoi coupe-t-il les légumes ?", opts: ["Une planche en bois", "Une assiette", "La table"], r: 0 },
      { q: "Où met-il l'eau ?", opts: ["Dans un verre", "Dans un bol", "Dans une grande casserole"], r: 2 },
      { q: "Qu'ajoute-t-il ?", opts: ["Du sucre", "Du sel et du poivre", "Du fromage"], r: 1 },
      { q: "Combien de temps cuit la soupe ?", opts: ["Dix minutes", "Vingt minutes", "Trente minutes"], r: 2 },
      { q: "Comment sent la cuisine ?", opts: ["Très bon", "Mauvais", "Rien"], r: 0 },
      { q: "Qui arrive à huit heures ?", opts: ["Son fils", "Sa femme", "Son ami"], r: 1 },
      { q: "Comment est-elle ?", opts: ["Malade", "En colère", "Fatiguée"], r: 2 },
      { q: "Pourquoi est-elle contente ?", opts: ["Le dîner est prêt", "Elle ne travaille pas demain", "Il fait beau"], r: 0 }
    ]
  },
  {
    titre: "Le bus de Julie",
    texte: `Julie prend le bus tous les jours. L'arrêt est devant sa maison.
Le bus numéro 12 arrive à huit heures moins dix. Le chauffeur est très gentil ; il dit toujours bonjour.
Julie s'assoit près de la fenêtre. Elle écoute de la musique avec son téléphone.
Le voyage dure vingt minutes. Julie regarde les maisons et les arbres.
Elle descend devant la bibliothèque. Elle travaille là-bas. Elle aime beaucoup son travail.`,
    questions: [
      { q: "Où est l'arrêt de bus ?", opts: ["Devant sa maison", "Près de l'école", "Au centre-ville"], r: 0 },
      { q: "Quel est le numéro du bus ?", opts: ["Le 10", "Le 12", "Le 20"], r: 1 },
      { q: "À quelle heure arrive le bus ?", opts: ["À huit heures", "À huit heures et quart", "À huit heures moins dix"], r: 2 },
      { q: "Comment est le chauffeur ?", opts: ["Très gentil", "Fatigué", "Sévère"], r: 0 },
      { q: "Que dit-il toujours ?", opts: ["Au revoir", "Bonjour", "Merci"], r: 1 },
      { q: "Où s'assoit Julie ?", opts: ["Près de la porte", "Au fond", "Près de la fenêtre"], r: 2 },
      { q: "Qu'écoute-t-elle ?", opts: ["De la musique", "La radio", "Rien"], r: 0 },
      { q: "Combien de temps dure le voyage ?", opts: ["Dix minutes", "Vingt minutes", "Trente minutes"], r: 1 },
      { q: "Où descend-elle ?", opts: ["Devant l'école", "Devant la gare", "Devant la bibliothèque"], r: 2 },
      { q: "Où travaille Julie ?", opts: ["À la bibliothèque", "Dans un magasin", "À l'école"], r: 0 }
    ]
  },
  {
    titre: "La chambre de Lucas",
    texte: `La chambre de Lucas est petite mais agréable. Les murs sont jaunes.
Il y a un lit, un bureau et une grande armoire. Sur le bureau, il y a un ordinateur et une lampe.
Sous le lit, Lucas garde ses chaussures de sport. Devant la fenêtre, il y a une plante verte.
Au mur, il y a une photo de sa famille et une carte du monde.
Lucas range sa chambre le samedi. Il n'aime pas beaucoup ça, mais sa mère est contente.`,
    questions: [
      { q: "Comment est la chambre ?", opts: ["Grande", "Petite mais agréable", "Sombre"], r: 1 },
      { q: "De quelle couleur sont les murs ?", opts: ["Bleus", "Blancs", "Jaunes"], r: 2 },
      { q: "Qu'y a-t-il sur le bureau ?", opts: ["Un ordinateur et une lampe", "Des livres", "Un téléphone"], r: 0 },
      { q: "Que garde-t-il sous le lit ?", opts: ["Ses jouets", "Ses chaussures de sport", "Ses livres"], r: 1 },
      { q: "Qu'y a-t-il devant la fenêtre ?", opts: ["Une chaise", "Un fauteuil", "Une plante verte"], r: 2 },
      { q: "Qu'y a-t-il au mur ?", opts: ["Une photo et une carte du monde", "Un miroir", "Une horloge"], r: 0 },
      { q: "Quel meuble garde ses vêtements ?", opts: ["Le bureau", "Une grande armoire", "Le lit"], r: 1 },
      { q: "Quand range-t-il sa chambre ?", opts: ["Le lundi", "Le dimanche", "Le samedi"], r: 2 },
      { q: "Aime-t-il ranger ?", opts: ["Non, pas beaucoup", "Oui, beaucoup", "Il adore ça"], r: 0 },
      { q: "Qui est contente ?", opts: ["Sa sœur", "Sa mère", "Son père"], r: 1 }
    ]
  },
  {
    titre: "Une journée de pluie",
    texte: `Aujourd'hui, il pleut. Le ciel est gris et il fait froid.
Les enfants ne vont pas au parc. Ils restent à la maison.
Emma dessine avec des crayons de couleur. Elle dessine une maison et un arbre.
Son frère Hugo joue avec ses voitures sur le tapis.
À quatre heures, leur mère prépare un chocolat chaud. Les enfants sont très contents.
Le soir, la pluie s'arrête enfin. On voit la lune par la fenêtre.`,
    questions: [
      { q: "Quel temps fait-il ?", opts: ["Il pleut", "Il fait beau", "Il neige"], r: 0 },
      { q: "Comment est le ciel ?", opts: ["Bleu", "Gris", "Noir"], r: 1 },
      { q: "Fait-il chaud ?", opts: ["Oui, très chaud", "Il fait doux", "Non, il fait froid"], r: 2 },
      { q: "Où restent les enfants ?", opts: ["À la maison", "Au parc", "À l'école"], r: 0 },
      { q: "Que fait Emma ?", opts: ["Elle lit", "Elle dessine", "Elle dort"], r: 1 },
      { q: "Que dessine-t-elle ?", opts: ["Un chat", "Une voiture", "Une maison et un arbre"], r: 2 },
      { q: "Comment s'appelle son frère ?", opts: ["Hugo", "Lucas", "Tom"], r: 0 },
      { q: "Avec quoi joue-t-il ?", opts: ["Un ballon", "Ses voitures", "Un train"], r: 1 },
      { q: "Que prépare la mère à quatre heures ?", opts: ["Un gâteau", "Une soupe", "Un chocolat chaud"], r: 2 },
      { q: "Que voit-on le soir par la fenêtre ?", opts: ["La lune", "Le soleil", "Des étoiles"], r: 0 }
    ]
  },
  {
    titre: "À la boulangerie",
    texte: `La boulangerie de mon quartier ouvre à sept heures.
La boulangère s'appelle Madame Petit. Elle travaille avec son mari.
Le matin, il y a beaucoup de monde. Les gens attendent devant le comptoir.
J'achète une baguette et deux croissants. La baguette coûte un euro dix.
Madame Petit me donne aussi un petit gâteau pour mon fils. Elle est très gentille.
Je rentre à la maison et nous prenons le petit déjeuner ensemble.`,
    questions: [
      { q: "À quelle heure ouvre la boulangerie ?", opts: ["À six heures", "À sept heures", "À huit heures"], r: 1 },
      { q: "Comment s'appelle la boulangère ?", opts: ["Madame Petit", "Madame Durand", "Madame Blanc"], r: 0 },
      { q: "Avec qui travaille-t-elle ?", opts: ["Sa fille", "Son frère", "Son mari"], r: 2 },
      { q: "Comment est la boulangerie le matin ?", opts: ["Vide", "Il y a beaucoup de monde", "Fermée"], r: 1 },
      { q: "Où attendent les gens ?", opts: ["Devant le comptoir", "Dans la rue", "Sur des chaises"], r: 0 },
      { q: "Qu'est-ce que j'achète ?", opts: ["Un gâteau", "Du pain de mie", "Une baguette et deux croissants"], r: 2 },
      { q: "Combien coûte la baguette ?", opts: ["Un euro", "Un euro dix", "Deux euros"], r: 1 },
      { q: "Que donne Madame Petit en plus ?", opts: ["Un petit gâteau", "Un croissant", "Un bonbon"], r: 0 },
      { q: "Pour qui est ce cadeau ?", opts: ["Pour ma femme", "Pour ma fille", "Pour mon fils"], r: 2 },
      { q: "Que faisons-nous à la maison ?", opts: ["Nous prenons le petit déjeuner", "Nous dormons", "Nous regardons la télé"], r: 0 }
    ]
  },
  {
    titre: "Le sport de Marc",
    texte: `Marc aime beaucoup le sport. Il court trois fois par semaine.
Le lundi, le mercredi et le vendredi, il se lève à six heures et demie.
Il met un short, un tee-shirt et ses chaussures de sport.
Il court dans le parc, près de la rivière. Il court pendant quarante minutes.
Après, il rentre, il prend une douche et il boit un grand verre d'eau.
Marc dit que le sport donne de l'énergie pour toute la journée.`,
    questions: [
      { q: "Combien de fois par semaine Marc court-il ?", opts: ["Deux fois", "Trois fois", "Quatre fois"], r: 1 },
      { q: "Quels jours court-il ?", opts: ["Lundi, mercredi et vendredi", "Mardi et jeudi", "Le week-end"], r: 0 },
      { q: "À quelle heure se lève-t-il ?", opts: ["À six heures", "À sept heures", "À six heures et demie"], r: 2 },
      { q: "Que met-il ?", opts: ["Un pantalon", "Un short et un tee-shirt", "Un manteau"], r: 1 },
      { q: "Où court-il ?", opts: ["Dans le parc", "Dans la rue", "À la salle de sport"], r: 0 },
      { q: "Près de quoi court-il ?", opts: ["De la forêt", "De la mer", "De la rivière"], r: 2 },
      { q: "Combien de temps court-il ?", opts: ["Vingt minutes", "Quarante minutes", "Une heure"], r: 1 },
      { q: "Que fait-il après ?", opts: ["Il prend une douche", "Il dort", "Il mange"], r: 0 },
      { q: "Que boit-il ?", opts: ["Un café", "Un jus", "Un grand verre d'eau"], r: 2 },
      { q: "Que donne le sport, selon Marc ?", opts: ["De la fatigue", "De l'énergie", "De la faim"], r: 1 }
    ]
  },
  {
    titre: "Au restaurant",
    texte: `Ce soir, Nathalie et Pierre vont au restaurant. C'est l'anniversaire de Nathalie.
Le restaurant est petit et joli. Il y a des fleurs sur les tables.
Le serveur apporte la carte. Nathalie choisit du poisson avec du riz.
Pierre prend une viande avec des légumes. Ils boivent de l'eau et un verre de vin.
Pour le dessert, ils partagent un gâteau au chocolat. Il est délicieux.
Pierre paie l'addition : quarante-cinq euros. Ils rentrent à pied.`,
    questions: [
      { q: "Pourquoi vont-ils au restaurant ?", opts: ["C'est l'anniversaire de Nathalie", "C'est Noël", "Pour le travail"], r: 0 },
      { q: "Comment est le restaurant ?", opts: ["Grand", "Petit et joli", "Bruyant"], r: 1 },
      { q: "Qu'y a-t-il sur les tables ?", opts: ["Des bougies", "Des livres", "Des fleurs"], r: 2 },
      { q: "Qui apporte la carte ?", opts: ["Le serveur", "Le cuisinier", "Le patron"], r: 0 },
      { q: "Que choisit Nathalie ?", opts: ["Une pizza", "Du poisson avec du riz", "Une salade"], r: 1 },
      { q: "Que prend Pierre ?", opts: ["Du poisson", "Une soupe", "Une viande avec des légumes"], r: 2 },
      { q: "Que boivent-ils ?", opts: ["De l'eau et du vin", "De la bière", "Du jus"], r: 0 },
      { q: "Quel dessert partagent-ils ?", opts: ["Une glace", "Un gâteau au chocolat", "Une tarte"], r: 1 },
      { q: "Combien coûte l'addition ?", opts: ["Trente euros", "Quarante euros", "Quarante-cinq euros"], r: 2 },
      { q: "Comment rentrent-ils ?", opts: ["À pied", "En taxi", "En bus"], r: 0 }
    ]
  },
  {
    titre: "Les vacances à la mer",
    texte: `En été, la famille Martin va à la mer. Ils partent au mois de juillet.
Ils louent une petite maison blanche près de la plage.
Le matin, les enfants nagent dans l'eau. Elle est froide mais très claire.
L'après-midi, ils jouent dans le sable. Ils font des châteaux.
Le père pêche avec un ami. La mère lit un livre sous un parasol.
Le soir, ils mangent du poisson sur la terrasse et ils regardent le coucher du soleil.`,
    questions: [
      { q: "Quand la famille part-elle ?", opts: ["En juin", "En juillet", "En août"], r: 1 },
      { q: "Où vont-ils ?", opts: ["À la montagne", "À la campagne", "À la mer"], r: 2 },
      { q: "Où logent-ils ?", opts: ["Dans une petite maison blanche", "À l'hôtel", "Chez des amis"], r: 0 },
      { q: "Que font les enfants le matin ?", opts: ["Ils dorment", "Ils nagent", "Ils lisent"], r: 1 },
      { q: "Comment est l'eau ?", opts: ["Chaude", "Sale", "Froide mais claire"], r: 2 },
      { q: "Que font-ils l'après-midi ?", opts: ["Des châteaux de sable", "Du vélo", "Du football"], r: 0 },
      { q: "Que fait le père ?", opts: ["Il nage", "Il pêche", "Il dort"], r: 1 },
      { q: "Que fait la mère ?", opts: ["Elle cuisine", "Elle nage", "Elle lit un livre"], r: 2 },
      { q: "Que mangent-ils le soir ?", opts: ["Du poisson", "De la viande", "Une pizza"], r: 0 },
      { q: "Que regardent-ils le soir ?", opts: ["La télé", "Le coucher du soleil", "Les étoiles"], r: 1 }
    ]
  },
  {
    titre: "Le chien perdu",
    texte: `Un petit chien marche seul dans la rue. Il est brun avec une oreille blanche.
Il n'a pas de collier. Il a froid et il a faim.
Une petite fille, Alice, le voit devant la boulangerie. Elle donne un peu de pain au chien.
Le chien la suit jusqu'à la maison. La mère d'Alice téléphone à la police.
Une heure après, une dame arrive. C'est la propriétaire du chien ! Elle est très heureuse.
Le chien s'appelle Bibi. Alice est un peu triste, mais elle est contente pour Bibi.`,
    questions: [
      { q: "De quelle couleur est le chien ?", opts: ["Noir", "Brun avec une oreille blanche", "Blanc"], r: 1 },
      { q: "Qu'est-ce qu'il n'a pas ?", opts: ["De collier", "De pattes", "De queue"], r: 0 },
      { q: "Comment se sent le chien ?", opts: ["Il est fatigué", "Il est content", "Il a froid et faim"], r: 2 },
      { q: "Comment s'appelle la petite fille ?", opts: ["Alice", "Emma", "Julie"], r: 0 },
      { q: "Où voit-elle le chien ?", opts: ["Au parc", "Devant la boulangerie", "À l'école"], r: 1 },
      { q: "Que donne-t-elle au chien ?", opts: ["De l'eau", "De la viande", "Un peu de pain"], r: 2 },
      { q: "Où va le chien après ?", opts: ["Il suit Alice à la maison", "Il part", "Il reste dans la rue"], r: 0 },
      { q: "À qui téléphone la mère ?", opts: ["Au vétérinaire", "À la police", "À l'école"], r: 1 },
      { q: "Qui arrive une heure après ?", opts: ["Un policier", "Un voisin", "La propriétaire du chien"], r: 2 },
      { q: "Comment s'appelle le chien ?", opts: ["Bibi", "Rex", "Minou"], r: 0 }
    ]
  },
  {
    titre: "L'anniversaire d'Emma",
    texte: `Aujourd'hui, Emma a huit ans. Elle organise une fête à la maison.
Six amis arrivent à trois heures. Ils apportent des cadeaux.
Emma reçoit un livre, un puzzle et une jolie poupée.
Sa mère prépare un grand gâteau au chocolat avec huit bougies.
Emma souffle les bougies et tout le monde chante. Les enfants dansent dans le salon.
À six heures, les amis rentrent chez eux. Emma est fatiguée mais très heureuse.`,
    questions: [
      { q: "Quel âge a Emma aujourd'hui ?", opts: ["Sept ans", "Huit ans", "Neuf ans"], r: 1 },
      { q: "Où est la fête ?", opts: ["À la maison", "Au parc", "À l'école"], r: 0 },
      { q: "Combien d'amis arrivent ?", opts: ["Quatre", "Cinq", "Six"], r: 2 },
      { q: "À quelle heure arrivent-ils ?", opts: ["À trois heures", "À quatre heures", "À deux heures"], r: 0 },
      { q: "Quels cadeaux reçoit Emma ?", opts: ["Des vêtements", "Un livre, un puzzle et une poupée", "Un vélo"], r: 1 },
      { q: "Quel gâteau prépare sa mère ?", opts: ["Un gâteau aux fruits", "Une tarte", "Un gâteau au chocolat"], r: 2 },
      { q: "Combien de bougies y a-t-il ?", opts: ["Huit", "Sept", "Dix"], r: 0 },
      { q: "Que font les enfants dans le salon ?", opts: ["Ils dorment", "Ils dansent", "Ils lisent"], r: 1 },
      { q: "À quelle heure les amis rentrent-ils ?", opts: ["À quatre heures", "À cinq heures", "À six heures"], r: 2 },
      { q: "Comment se sent Emma à la fin ?", opts: ["Fatiguée mais heureuse", "Triste", "En colère"], r: 0 }
    ]
  },
  {
    titre: "Le jardin de grand-mère",
    texte: `Ma grand-mère habite dans un village. Elle a un beau jardin derrière sa maison.
Dans le jardin, il y a des fleurs rouges et jaunes, et un grand arbre.
Sous l'arbre, il y a une table et deux chaises en bois.
Grand-mère cultive aussi des tomates, des fraises et des herbes.
En été, nous mangeons dehors. Nous buvons de la limonade fraîche.
J'aime beaucoup ce jardin. C'est calme et les oiseaux chantent.`,
    questions: [
      { q: "Où habite la grand-mère ?", opts: ["Dans un village", "En ville", "À la mer"], r: 0 },
      { q: "Où est le jardin ?", opts: ["Devant la maison", "Derrière la maison", "À côté de l'école"], r: 1 },
      { q: "De quelle couleur sont les fleurs ?", opts: ["Bleues et blanches", "Roses", "Rouges et jaunes"], r: 2 },
      { q: "Qu'y a-t-il sous l'arbre ?", opts: ["Une table et deux chaises", "Un banc", "Une balançoire"], r: 0 },
      { q: "En quoi sont les chaises ?", opts: ["En plastique", "En bois", "En métal"], r: 1 },
      { q: "Que cultive grand-mère ?", opts: ["Des pommes", "Des carottes", "Des tomates, des fraises et des herbes"], r: 2 },
      { q: "Quand mangent-ils dehors ?", opts: ["En été", "En hiver", "Au printemps"], r: 0 },
      { q: "Que boivent-ils ?", opts: ["Du café", "De la limonade fraîche", "Du thé"], r: 1 },
      { q: "Comment est le jardin ?", opts: ["Bruyant", "Petit", "Calme"], r: 2 },
      { q: "Qu'est-ce qu'on entend dans le jardin ?", opts: ["Les oiseaux qui chantent", "Les voitures", "La musique"], r: 0 }
    ]
  },
  {
    titre: "Une visite à Paris",
    texte: `Cette semaine, Karim visite Paris pour la première fois.
Il arrive à la gare à neuf heures. Il prend le métro jusqu'au centre.
D'abord, il regarde la tour Eiffel. Elle est très grande et il prend beaucoup de photos.
À midi, il mange un sandwich dans un petit café près du fleuve.
L'après-midi, il visite un musée. Il aime surtout les tableaux anciens.
Le soir, Karim marche le long de la Seine. Paris est belle avec ses lumières.`,
    questions: [
      { q: "C'est la première fois que Karim visite Paris ?", opts: ["Oui", "Non, la deuxième fois", "Il habite à Paris"], r: 0 },
      { q: "À quelle heure arrive-t-il à la gare ?", opts: ["À huit heures", "À neuf heures", "À dix heures"], r: 1 },
      { q: "Comment va-t-il au centre ?", opts: ["En bus", "En taxi", "En métro"], r: 2 },
      { q: "Que regarde-t-il d'abord ?", opts: ["La tour Eiffel", "Le musée", "La cathédrale"], r: 0 },
      { q: "Que fait-il devant la tour ?", opts: ["Il mange", "Il prend beaucoup de photos", "Il dort"], r: 1 },
      { q: "Que mange-t-il à midi ?", opts: ["Une pizza", "Une salade", "Un sandwich"], r: 2 },
      { q: "Où mange-t-il ?", opts: ["Dans un petit café près du fleuve", "Dans un restaurant", "Dans le parc"], r: 0 },
      { q: "Que visite-t-il l'après-midi ?", opts: ["Un parc", "Un musée", "Un magasin"], r: 1 },
      { q: "Qu'aime-t-il surtout au musée ?", opts: ["Les statues", "Les photos", "Les tableaux anciens"], r: 2 },
      { q: "Que fait-il le soir ?", opts: ["Il marche le long de la Seine", "Il rentre à l'hôtel", "Il va au cinéma"], r: 0 }
    ]
  },
  {
    titre: "Le nouveau voisin",
    texte: `Un nouveau voisin arrive dans notre immeuble. Il s'appelle Monsieur Rossi.
Il habite au troisième étage, juste au-dessus de chez nous.
Il est italien. Il parle français, mais avec un petit accent.
Monsieur Rossi joue du piano. Le soir, on entend de la musique douce. C'est très agréable.
Ma mère prépare un gâteau pour lui dire bonjour. Nous montons chez lui samedi après-midi.
Monsieur Rossi est très content. Il nous offre un café et il joue une chanson italienne.`,
    questions: [
      { q: "Comment s'appelle le nouveau voisin ?", opts: ["Monsieur Rossi", "Monsieur Blanc", "Monsieur Petit"], r: 0 },
      { q: "À quel étage habite-t-il ?", opts: ["Au deuxième", "Au troisième", "Au quatrième"], r: 1 },
      { q: "Où est son appartement ?", opts: ["À côté de chez nous", "En dessous de chez nous", "Au-dessus de chez nous"], r: 2 },
      { q: "De quelle nationalité est-il ?", opts: ["Italien", "Espagnol", "Portugais"], r: 0 },
      { q: "Comment parle-t-il français ?", opts: ["Très mal", "Avec un petit accent", "Sans accent"], r: 1 },
      { q: "De quel instrument joue-t-il ?", opts: ["De la guitare", "Du violon", "Du piano"], r: 2 },
      { q: "Comment est la musique ?", opts: ["Douce et agréable", "Trop forte", "Triste"], r: 0 },
      { q: "Que prépare la mère ?", opts: ["Une soupe", "Un gâteau", "Un café"], r: 1 },
      { q: "Quand montent-ils chez lui ?", opts: ["Vendredi soir", "Dimanche matin", "Samedi après-midi"], r: 2 },
      { q: "Que fait Monsieur Rossi pour eux ?", opts: ["Il joue une chanson italienne", "Il prépare le dîner", "Il montre des photos"], r: 0 }
    ]
  },
  {
    titre: "Le petit déjeuner de la semaine",
    texte: `Chez nous, le petit déjeuner est différent chaque jour.
Le lundi, je bois un thé et je mange des céréales avec du lait.
Le mercredi, ma sœur prépare des œufs. Elle adore cuisiner.
Le vendredi, mon père achète des croissants à la boulangerie du coin.
Le dimanche, c'est le meilleur jour : nous faisons des crêpes ! Ma mère met du sucre et du citron.
Nous restons à table longtemps et nous parlons de la semaine.`,
    questions: [
      { q: "Le petit déjeuner est-il toujours le même ?", opts: ["Oui", "Non, il est différent chaque jour", "Seulement le week-end"], r: 1 },
      { q: "Que bois-je le lundi ?", opts: ["Un thé", "Un café", "Un jus"], r: 0 },
      { q: "Que mange-je avec le lait ?", opts: ["Du pain", "Un gâteau", "Des céréales"], r: 2 },
      { q: "Qui prépare des œufs le mercredi ?", opts: ["Ma mère", "Ma sœur", "Mon père"], r: 1 },
      { q: "Qu'est-ce que ma sœur adore ?", opts: ["Cuisiner", "Dormir", "Lire"], r: 0 },
      { q: "Qui achète des croissants ?", opts: ["Ma sœur", "Ma mère", "Mon père"], r: 2 },
      { q: "Quel jour achète-t-il les croissants ?", opts: ["Le vendredi", "Le jeudi", "Le samedi"], r: 0 },
      { q: "Que faisons-nous le dimanche ?", opts: ["Des gâteaux", "Des crêpes", "Des tartines"], r: 1 },
      { q: "Que met la mère sur les crêpes ?", opts: ["Du chocolat", "De la confiture", "Du sucre et du citron"], r: 2 },
      { q: "Que faisons-nous à table ?", opts: ["Nous parlons de la semaine", "Nous regardons la télé", "Nous lisons"], r: 0 }
    ]
  }
];
