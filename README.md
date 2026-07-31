# 🇫🇷 Apprendre le français

Petite app pour apprendre le français à partir de l'anglais.
Fonctionne **en extension** (Chrome / Brave / Edge sur ordi) **et** comme **page web** autonome (mobile).

## Contenu
- **1er groupe** : 50 verbes en `-er` (conjugaison auto du présent)
- **2e groupe** : 50 verbes en `-ir` (type *finir*)
- **Autres verbes** : 50 verbes (3e groupe + *être*, *avoir*, *aller*…), conjugaisons complètes
- Chaque verbe : traduction anglaise + une phrase simple traduite
- Deux vues : **Liste** (tout voir) et **Quiz** (clique pour révéler la traduction, puis *Suivant*)
- Bascule **Verbes / Phrases** dans chaque vue

## Installer comme extension (ordinateur — Chrome ou Brave)
1. Ouvre `chrome://extensions` (ou `brave://extensions`)
2. Active **Mode développeur** (en haut à droite)
3. Clique **Charger l'extension non empaquetée**
4. Sélectionne ce dossier `learn-french`
5. Clique l'icône 🇫🇷 dans la barre → l'app s'ouvre en popup

## Sur téléphone
Chrome Android **ne supporte pas** les extensions. Deux options :
- **Brave Android** : `brave://extensions` → activer le mode dev → charger le dossier
- **Plus simple (recommandé)** : héberge le dossier (GitHub Pages, Netlify…) ou ouvre `index.html`,
  puis dans le navigateur → menu → **Ajouter à l'écran d'accueil**. Ça se comporte comme une app.

## Modifier / ajouter des verbes
Tout le contenu est dans **`data.js`**. Ajoute un objet dans le bon groupe :
```js
{ inf: "manger", en: "to eat", ex: "Je mange du pain.", exEn: "I eat bread." }
```
- Groupes 1 et 2 : la conjugaison est **générée automatiquement**.
  Pour une exception d'orthographe, ajoute `over: { 3: "mangeons" }` (index 0=je … 5=ils).
- Autres verbes : fournis les 6 formes dans `full: ["suis","es","est","sommes","êtes","sont"]`.

## Après chaque déploiement : penser au cache
Tous les `<script>` et `<link>` de `index.html` ont un paramètre `?v=N`.
**À chaque modification de JS/CSS, incrémente ce numéro** (ex: `v=3` → `v=4`) pour forcer
les navigateurs à recharger les nouveaux fichiers au lieu de servir une version en cache.
Sans ça, GitHub Pages peut être à jour côté serveur alors que les visiteurs voient encore
l'ancienne version tant que leur navigateur ne vide pas son cache.
```
