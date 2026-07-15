# Coach Entretien Cursor

Ce dépôt contient deux applications web de préparation aux entretiens.

## Interview Process Coach

Application simple pour préparer chaque étape d'un processus de recrutement (Recruiter Screen, Hiring Manager, Product Interview, etc.).

```bash
cd interview-process-coach
npx --yes serve .
```

Voir [interview-process-coach/README.md](interview-process-coach/README.md) pour plus de détails.

---

## Coach Entretien Cursor

Application web de préparation aux entretiens chez **Cursor**. Entraînez-vous avec des questions comportementales, techniques, produit, system design et culture.

## Fonctionnalités

- **Pratique** — Parcourez 14 questions par catégorie avec indices et points clés
- **Simulation** — Entretien chronométré de 45 minutes avec 6 questions aléatoires
- **Conseils** — Méthode STAR, tips produit et culture Cursor
- **Progression** — Auto-évaluation et suivi local de vos réponses

## Démarrage rapide

```bash
cd coach-entretien
npm install
npm run dev
```

Ouvrez [http://localhost:5173](http://localhost:5173) dans votre navigateur.

## Build production

```bash
npm run build
npm run preview
```

## Catégories de questions

| Catégorie | Description |
|-----------|-------------|
| Comportemental | STAR, leadership, collaboration |
| Technique | Algorithmes, debugging, agents IA |
| Produit & IA | LLMs, UX développeur, vision produit |
| System Design | Architecture, scalabilité, latence |
| Culture Cursor | Mission, valeurs, fit culturel |

## Stack

- React 19 + TypeScript
- Vite 8
- CSS custom (dark theme)
