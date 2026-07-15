# Interview Process Coach

Application web simple pour aider un candidat à comprendre et préparer chaque étape d'un processus de recrutement.

## Fonctionnalités actuelles

- **Écran d'accueil** — présentation et reprise de préparation
- **Informations personnelles** — nom, entreprise, poste, date du prochain entretien
- **Parcours des 6 étapes** — vue d'ensemble avec statut (À faire / En cours / Terminé)
- **Détail de chaque étape** — objectif, questions probables, conseils, questions à poser
- **Sauvegarde locale** — vos données restent dans votre navigateur

## Les 6 étapes

1. Recruiter Screen
2. Hiring Manager Interview
3. Product Interview
4. Business Case
5. Role Play
6. Final Interview

## Démarrage

Aucune installation nécessaire. Ouvrez simplement le fichier `index.html` dans votre navigateur.

Pour un serveur local (recommandé pour les modules JavaScript) :

```bash
cd interview-process-coach
npx --yes serve .
```

Puis ouvrez l'adresse affichée (généralement http://localhost:3000).

## Structure du projet

```
interview-process-coach/
├── index.html       # Page principale
├── css/style.css    # Design
├── js/
│   ├── app.js       # Navigation et affichage
│   ├── data.js      # Contenu des 6 étapes
│   └── storage.js   # Sauvegarde dans le navigateur
└── README.md
```

## Prochaines étapes (à venir)

- Simulation d'entretien avec feedback
- Plan de préparation personnalisé

## Contraintes respectées

- Aucune authentification
- Aucune base de données externe
- Aucun paiement
- Compatible ordinateur et mobile
