# AGENTS.md

## Cursor Cloud specific instructions

- The actual project lives in the `coach-entretien/` subdirectory, not the repo root. Run all `npm` commands from there (e.g. `cd coach-entretien`).
- This is a 100% client-side React 19 + Vite SPA (TypeScript). There is no backend, database, or external service; all persistence is browser `localStorage`. Running the single Vite dev server is enough to test end to end.
- Standard commands (see `coach-entretien/package.json`): `npm run dev` (Vite dev server on port 5173), `npm run build` (`tsc -b && vite build`), `npm run lint` (Oxlint), `npm run preview` (serve production build).
- To reach the dev server from outside the VM, start it with `npm run dev -- --host`.
