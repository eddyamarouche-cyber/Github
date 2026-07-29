# AGENTS.md

## Cursor Cloud specific instructions

This is a folder-based monorepo with two independent, purely client-side Vite + React + TypeScript SPAs. There is no backend, database, or external service — Coach Entretien persists only to browser `localStorage`.

- `coach-entretien/` — interview-prep app (question bank, mock interview, tips, progress dashboard).
- `plan-presentation/` — keyboard-navigable 30/60/90-day plan slide deck. This is the only app deployed to GitHub Pages (see `.github/workflows/deploy-plan-presentation.yml`).

Each app is a separate npm project with its own lockfile (no root `package.json` / workspaces). Run all commands from inside the app folder. Standard scripts live in each `package.json`: `dev`, `build` (`tsc -b && vite build`), `lint` (oxlint), `preview`.

Non-obvious caveats:
- Both dev servers default to Vite port `5173`. To run both at once, give the second a distinct port, e.g. `npm run dev -- --port 5174`.
- The dependency install (`npm ci` in each app) is handled by the startup update script; no manual install needed before running/building.
- `build` uses `VITE_BASE` only for the GitHub Pages base path; leave it unset for local dev/build.
