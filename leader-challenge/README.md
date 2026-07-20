# Building the Southern Europe Growth Engine

Executive presentation application for the Cursor **Leader Challenge** — Regional Director, Southern Europe.

A 90-minute strategy session presented as a premium SaaS product UI (not a PowerPoint deck) for a C-level audience. Interactive cards, KPI widgets, timelines, expandable sections and Framer Motion transitions. No backend, authentication, database or external API. All content lives in local TypeScript data files.

## 1. Install

```bash
cd leader-challenge
npm install
```

## 2. Launch

```bash
npm run dev
```

Open the local URL shown in the terminal (typically `http://localhost:5173`).

Build for production:

```bash
npm run build
npm run preview
```

## 3. Edit your profile

File: [`src/data/profile.ts`](src/data/profile.ts)

Update:

- `candidateName`
- `interviewDate`

These fields appear on the cover slide.

## 4. Edit the five target candidates

File: [`src/data/candidates.ts`](src/data/candidates.ts)

Replace placeholders such as `[ADD CANDIDATE NAME]` and `[ADD COMPANY]` with validated profiles. Do not invent real personal information.

## 5. Edit coaching examples

File: [`src/data/coachingCases.ts`](src/data/coachingCases.ts)

Replace labels such as:

- `[ADD PERSONAL EXAMPLE]`
- `[ADD INITIAL METRIC]`
- `[ADD COACHING ACTION]`
- `[ADD MEASURED RESULT]`

## 6. Edit market assumptions

File: [`src/data/markets.ts`](src/data/markets.ts)

Update the country cards for France, Spain, Italy, Portugal and additional priority markets. Keep `[VALIDATE WITH CURSOR]` until assumptions are confirmed.

## 7. Edit presenter notes

File: [`src/data/presenterNotes.ts`](src/data/presenterNotes.ts)

Each slide has:

- Opening statement
- Core message
- Supporting example
- Executive implication
- Likely question
- Transition

Slide structure, headlines and takeaways live in [`src/data/slides.ts`](src/data/slides.ts).

## 8. Export to PDF

1. Launch the app
2. Click **PDF** in the toolbar (or use the browser print dialog)
3. Choose **Save as PDF** / **Microsoft Print to PDF**
4. Use landscape orientation
5. Enable background graphics so the dark theme prints correctly

The print stylesheet renders **one slide per page** at a 16:9 presentation ratio.

## 9. Deploy to Vercel

This app lives in the `leader-challenge/` folder of a monorepo. Deploy it as its own Vercel project with that folder as the **Root Directory**.

### Option A — Vercel Dashboard (recommended)

1. Open [vercel.com/new](https://vercel.com/new) and sign in with GitHub
2. Import the repository `eddyamarouche-cyber/Github`
3. Set **Root Directory** to `leader-challenge` (click Edit next to Root Directory)
4. Confirm framework preset: **Vite**
5. Confirm:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
6. Click **Deploy**
7. Open the production URL Vercel gives you (e.g. `https://….vercel.app`)

Later pushes to the connected branch will redeploy automatically.

### Option B — Vercel CLI

```bash
cd leader-challenge
npm install
npx vercel login
npx vercel        # preview deployment
npx vercel --prod # production deployment
```

A `vercel.json` file is already included for SPA routing and Vite settings.

## Presentation controls

| Control | Action |
|--------|--------|
| ← / → | Previous / next slide |
| Space | Next slide |
| P or **Present** | Enter / exit presentation mode |
| Esc | Exit presentation mode |
| N | Toggle presenter notes |
| M | Open section menu |
| F | Toggle fullscreen |
| Home / End | First / last slide |
| Start / Pause / Reset | 90-minute session timer |
| Rehearsal | Show elapsed time, recommended slide time and cumulative time |

### Presentation mode

Press **P** or click **Present** to enter a distraction-free 16:9 view:

- All navigation chrome is hidden
- One slide fills the screen with a smooth transition
- The cursor hides after 3 seconds of inactivity
- ← / → and Space navigate slides
- Esc exits presentation mode (and fullscreen when active)

Slides that still contain unresolved placeholders show a discreet **Placeholders** badge (hidden during presentation mode).

## Tech stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide Icons
