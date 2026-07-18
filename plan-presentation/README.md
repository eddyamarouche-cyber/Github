# Plan pour Cursor — Ed AMA

Présentation interactive du plan de contribution pour **Cursor** : motivation, preuve de travail, vision, et plan 30 / 60 / 90 jours.

## Démarrage

```bash
cd plan-presentation
npm install
npm run dev
```

Ouvrez [http://localhost:5173](http://localhost:5173).

## Navigation

- Flèches ← →, Espace, Page Up / Page Down
- **Mois 1 / 2 / 3** en haut (ou touches `1` `2` `3`) pour aller au plan du mois
- Boutons **Précédent** / **Suivant**
- Points en bas pour sauter à une slide

## Contenu

Les textes sont dans `src/data/slides.ts` — modifiez-les pour personnaliser le plan, le rôle visé, ou les points du 30/60/90.

## Build

```bash
npm run build
npm run preview
```

## Production (GitHub Pages)

Pushes to `main` that touch `plan-presentation/` deploy automatically.

Live URL: https://eddyamarouche-cyber.github.io/Github/

Manual deploy: Actions → **Deploy plan presentation** → Run workflow.

## Stack

- React 19 + TypeScript
- Vite 8
- CSS custom (fond noir cinématique, accent ambre)
