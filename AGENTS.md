# AGENTS.md

## Cursor Cloud specific instructions

This repo is a monorepo of two **independent** frontend apps (Vite 8 + React 19 + TypeScript). There is no backend, database, or secrets — both apps are pure client-side SPAs (`coach-entretien` persists progress in browser `localStorage` only).

- `coach-entretien/` — interview-prep app (question bank, hints, category filter, timed mock interview, progress dashboard).
- `plan-presentation/` — interactive 30/60/90-day slide deck (arrow-key navigation). This is the only app built/deployed in CI (GitHub Pages).

Each app is self-contained with its own `package-lock.json`. Run all commands from inside the app folder. Standard scripts are in each `package.json`: `npm run dev`, `npm run build` (`tsc -b && vite build`), `npm run lint` (oxlint), `npm run preview`. There are no automated tests; verify changes by running `npm run dev` and exercising the UI.

Non-obvious caveats:
- Both dev servers default to Vite port `5173`. To run both at once, give one a different port, e.g. `npm run dev -- --port 5174`.
- `plan-presentation` production build for GitHub Pages needs `VITE_BASE=/Github/`; leave it unset for local dev (defaults to `/`). `coach-entretien` has no base config.
- CI reference toolchain is Node 22 with `npm ci`.
