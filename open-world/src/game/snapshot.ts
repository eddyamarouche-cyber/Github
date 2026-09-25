import type { Bridge } from '../bridge.ts'
import { daylight } from './clock.ts'
import { countSpores, journalEntries, type Progress } from './dialogue.ts'
import { center, places, questMarks } from './places.ts'
import { nearestHit } from './simulate.ts'
import type { Sim } from './types.ts'

export type QuestLine = { label: string; done: boolean }

export type Marker = {
  id: string
  x: number
  y: number
  label: string
  reached: boolean
}

export type HudModel = {
  mode: 'attract' | 'play'
  region: string
  clock: string
  charted: number
  questTitle: string
  quests: QuestLine[]
  spores: { show: boolean; count: number }
  prompt: string | null
  toast: string | null
  speech: { speaker: string; text: string; last: boolean } | null
  atlas: boolean
  hasSave: boolean
  rev: number
  journal: { title: string; body: string }[]
  runLatch: boolean
}

function progress(sim: Sim): Progress {
  return {
    visited: sim.visited,
    discovered: sim.discovered,
    hints: sim.hints,
    talked: sim.talked,
    collected: sim.collected,
    questDone: sim.questDone,
  }
}

export function mapMarkers(sim: Sim): Marker[] {
  const markers: Marker[] = [
    {
      id: 'hearthmere',
      x: center(places.village.tx, places.village.ty).x,
      y: center(places.village.tx, places.village.ty).y,
      label: 'Hearthmere',
      reached: true,
    },
  ]
  for (const mark of questMarks) {
    const at = center(mark.tx, mark.ty)
    markers.push({
      id: mark.id,
      x: at.x,
      y: at.y,
      label: mark.name,
      reached: sim.visited.has(mark.id),
    })
  }
  if (sim.discovered.has('grove') || sim.hints.has('grove')) {
    const at = center(places.grove.tx, places.grove.ty)
    markers.push({
      id: 'grove',
      x: at.x,
      y: at.y,
      label: 'Unmarked grove',
      reached: sim.discovered.has('grove'),
    })
  }
  if (sim.discovered.has('island') || sim.hints.has('island')) {
    const at = center(places.island.tx, places.island.ty)
    markers.push({
      id: 'island',
      x: at.x,
      y: at.y,
      label: 'Low-tide isle',
      reached: sim.discovered.has('island'),
    })
  }
  return markers
}

export function snapshot(sim: Sim, bridge: Bridge, hasSave: boolean): HudModel {
  const sky = daylight(sim.time)
  const spores = countSpores(sim.collected)
  const now = typeof performance !== 'undefined' ? performance.now() : 0
  const prompt = sim.mode === 'play' && !sim.speech && !sim.atlas ? nearestHit(sim, 48)?.prompt ?? null : null
  return {
    mode: sim.mode,
    region: sim.region,
    clock: sky.label,
    charted: Math.round((sim.exploredCount / Math.max(1, sim.world.tiles.length)) * 100),
    questTitle: sim.questDone ? 'Atlas inked' : 'Chart the wilds',
    quests: [
      ...questMarks.map((mark) => ({ label: mark.name, done: sim.visited.has(mark.id) })),
      { label: 'Tell Mara', done: sim.questDone },
    ],
    spores: { show: sim.talked.has('lin') || spores > 0, count: spores },
    prompt,
    toast: sim.toast && sim.toast.until > now ? sim.toast.text : null,
    speech: sim.speech
      ? {
          speaker: sim.speech.speaker,
          text: sim.speech.lines[sim.speech.index] ?? '',
          last: sim.speech.index >= sim.speech.lines.length - 1,
        }
      : null,
    atlas: sim.atlas,
    hasSave,
    rev: sim.rev,
    journal: journalEntries(progress(sim)),
    runLatch: bridge.runLatch,
  }
}
