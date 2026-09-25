import { places, questMarks } from './places.ts'
import type { NpcId } from './types.ts'

export type Progress = {
  visited: Set<string>
  discovered: Set<string>
  hints: Set<string>
  talked: Set<string>
  collected: Set<string>
  questDone: boolean
}

export type Script = {
  speaker: string
  lines: string[]
  completeQuest?: boolean
}

export function countSpores(collected: Set<string>): number {
  let count = 0
  for (const id of collected) if (id.startsWith('spore')) count++
  return count
}

function missingMarks(visited: Set<string>): string[] {
  return questMarks.filter((mark) => !visited.has(mark.id)).map((mark) => mark.name)
}

export function npcScript(id: NpcId, progress: Progress): Script {
  const spores = countSpores(progress.collected)
  if (id === 'mara') {
    const missing = missingMarks(progress.visited)
    if (missing.length === 0 && !progress.questDone) {
      return {
        speaker: 'Mara',
        completeQuest: true,
        lines: [
          'Saltlight, the shrine, and the ridge. That’s a world, not a rumor.',
          'I’ll ink it. The atlas was tired of being a guess.',
        ],
      }
    }
    if (progress.questDone) {
      return {
        speaker: 'Mara',
        lines: [
          'The page has a coastline now. Try not to look too pleased.',
          'If you wander further, name what you find. I left a margin.',
        ],
      }
    }
    if (progress.visited.size === 0 || missing.length === 3) {
      return {
        speaker: 'Mara',
        lines: [
          'Clean boots. I’m Mara. I keep the atlas, which stays blank until someone walks.',
          'Saltlight on the cape, the shrine in Greenveil, and Highwatch on the ridge. Then come back and make me write.',
        ],
      }
    }
    const left = missing.length === 1 ? missing[0] : missing.join(' and ')
    return {
      speaker: 'Mara',
      lines: [
        missing.length === 1
          ? `One mark still out there: ${left}.`
          : `Still unwalked: ${left}.`,
        'The page looks less like a blank stare. Keep going.',
      ],
    }
  }
  if (id === 'tomas') {
    return {
      speaker: 'Tomas',
      lines: [
        'Tomas. The pier is sound. The bay is a matter of opinion.',
        'At low tide a sandbar runs southwest off the end of the posts, out to a scrap of island. I don’t put it on charts.',
      ],
    }
  }
  if (id === 'lin') {
    if (spores >= 5) {
      return {
        speaker: 'Lin',
        lines: [
          'Five. You actually looked.',
          'West of the shrine the trees lean together around a stone. I left it off Mara’s page. Walk it yourself.',
        ],
      }
    }
    if (spores > 0) {
      return {
        speaker: 'Lin',
        lines: [
          `${spores} so far. Deeper Greenveil, off the road. They glow if you wait for dusk.`,
        ],
      }
    }
    return {
      speaker: 'Lin',
      lines: [
        'Lin. I dry herbs and argue with deer.',
        'Pale spores grow under the thick canopy. Five of them, if the forest is feeling generous.',
      ],
    }
  }
  if (id === 'ren') {
    return {
      speaker: 'Ren',
      lines: [
        'Ren. I keep the leaves off the stones.',
        'People come here to ask things. The stones keep the question and lose the name. It seems like a fair trade.',
      ],
    }
  }
  if (id === 'ivo') {
    return {
      speaker: 'Ivo',
      lines: [
        'Ivo. If the ridge is in your book, you can write that the wind was here first.',
        'South is the bay. On a clear day Hearthmere is the only part that looks warm.',
      ],
    }
  }
  return {
    speaker: 'Sam',
    lines: [
      'Sam. The river is the Siltrun, mostly according to Mara.',
      'The sea is south. Mara is usually near the red roof, collecting proof that you went outside.',
    ],
  }
}

export function journalEntries(progress: Progress): { title: string; body: string }[] {
  const entries: { title: string; body: string }[] = [
    {
      title: places.village.name ?? 'Hearthmere',
      body: 'A fishing village on the south bay. Mara keeps the atlas beside the red roof.',
    },
  ]
  if (progress.visited.has('lighthouse')) {
    entries.push({
      title: 'Saltlight',
      body: 'The cape light. After dusk its beam does the warning for the whole bay.',
    })
  }
  if (progress.visited.has('shrine')) {
    entries.push({
      title: 'Greenveil shrine',
      body: 'A ring of stones in the west wood. Ren sweeps it and doesn’t ask for answers.',
    })
  }
  if (progress.visited.has('tower')) {
    entries.push({
      title: 'Highwatch',
      body: 'The ridge tower. Ivo says the wind was here before the path.',
    })
  }
  if (progress.questDone) {
    entries.push({
      title: 'Atlas',
      body: 'Mara inked the coast, the shrine, and the ridge. The margin is yours.',
    })
  }
  const spores = countSpores(progress.collected)
  if (spores > 0 || progress.talked.has('lin')) {
    entries.push({
      title: 'Pale spores',
      body:
        spores >= 5
          ? 'Five spores gathered for Lin. She pointed west of the shrine.'
          : `${spores} of 5 pale spores. They sit off the road under Greenveil.`,
    })
  }
  if (progress.discovered.has('grove')) {
    entries.push({
      title: 'Unmarked grove',
      body: 'West of the shrine, a stone keeps a circle the atlas did not order.',
    })
  }
  if (progress.discovered.has('island')) {
    entries.push({
      title: 'Low-tide isle',
      body: 'A scrap of land southwest of the pier, reached on the sandbar.',
    })
  }
  if (progress.discovered.has('bottle')) {
    entries.push({
      title: 'Salt-stiff note',
      body: 'West of the shrine, the trees lean in around a stone. Left off the map on purpose.',
    })
  }
  return entries
}
