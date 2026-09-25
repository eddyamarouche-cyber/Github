# Open World — Hearthmere Wilds

A browser open world. One coastline, one forest, one ridge, and no required road. Walk anywhere. The atlas fills in only where you have been.

Mara in Hearthmere asks you to mark Saltlight, the Greenveil shrine, and Highwatch. Lin wants five pale spores. A sandbar and an unmarked grove are not on the first page.

## Run

```bash
cd open-world
npm install
npm run dev
```

Open the local URL (port 5176 when it is free).

```bash
npm test
npm run build
```

## Controls

| Input | Action |
| --- | --- |
| WASD or arrows | Walk |
| Click the ground | Walk there |
| Shift, or Run | Run |
| E, Enter, or click a person | Talk, read, or gather |
| M, or the round map | Open the atlas |
| Esc | Close the atlas or a conversation |

On a narrow screen, a joystick sits at the lower left.

Progress is kept in this browser under `hearthmere-wilds-v1`.

## How the world is put together

- `src/game/generate.ts` lays down the bay, the Siltrun, the cape, Greenveil, and Highwatch, then paves roads with A*.
- `src/game/simulate.ts` moves you, the deer, and the quest flags.
- `src/game/draw.ts` paints the viewport, the night, and both maps.
- Fog of war and the quest log are written to `localStorage` from `src/game/save.ts`.
