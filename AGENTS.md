# AGENTS.md

## Cursor Cloud specific instructions

### Project layout
- This repo contains a single product, **Coach Entretien Cursor**, a frontend-only React 19 + TypeScript + Vite 8 SPA located in the `coach-entretien/` subdirectory (not the repo root). All npm commands must be run from `coach-entretien/`.
- There is no backend, database, or external service. User progress is stored in the browser's `localStorage`, so end-to-end testing only requires the single Vite dev server.
- No environment variables or secrets are required.

### Commands (run from `coach-entretien/`)
Standard scripts are defined in `coach-entretien/package.json`:
- Dev server: `npm run dev` (Vite on http://localhost:5173)
- Lint: `npm run lint` (oxlint)
- Build: `npm run build` (`tsc -b && vite build`)
- Preview production build: `npm run preview`

### Notes
- Node 22 (or Node 20.19+/22.12+) is required for Vite 8. The VM ships with Node 22.
- Dependency install (`npm install` in `coach-entretien/`) is handled by the startup update script.
