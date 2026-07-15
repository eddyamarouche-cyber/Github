# Coach Entretien Cursor

Application web de préparation aux entretiens chez **Cursor**. Entraînez-vous avec des questions comportementales, techniques, produit, system design et culture.

## Fonctionnalités

- **Pratique** — Parcourez 14 questions par catégorie avec indices et points clés
- **Simulation** — Entretien chronométré de 45 minutes avec 6 questions aléatoires
- **Conseils** — Méthode STAR, MEDDIC, tips produit et culture Cursor
- **Progression** — Auto-évaluation et suivi local de vos réponses
- **Multilingue** — Interface disponible en français, anglais et italien

## Langues

L'application détecte automatiquement la langue du navigateur. Utilisez le sélecteur **FR / EN / IT** dans l'en-tête pour changer de langue. La préférence est sauvegardée dans le navigateur.

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
