import { motion } from 'framer-motion'
import type { PresenterNote } from '../data/types'

export function PresenterNotesPanel({ notes }: { notes?: PresenterNote }) {
  if (!notes) {
    return (
      <div className="border-t border-white/8 bg-bg-elevated/90 px-6 py-4 text-sm text-white/50 backdrop-blur-xl">
        No presenter notes for this screen.
      </div>
    )
  }

  const rows: { label: string; value: string }[] = [
    { label: 'Opening statement', value: notes.opening },
    { label: 'Core message', value: notes.coreMessage },
    { label: 'Supporting example', value: notes.supportingExample },
    { label: 'Executive implication', value: notes.executiveImplication },
    { label: 'Likely question', value: notes.likelyQuestion },
    { label: 'Transition', value: notes.transition },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="no-print max-h-[34vh] overflow-y-auto border-t border-white/8 bg-bg-elevated/90 px-6 py-4 backdrop-blur-xl"
    >
      <p className="mb-3 text-[11px] font-semibold tracking-[0.16em] text-accent uppercase">
        Presenter Notes
      </p>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {rows.map((row) => (
          <div key={row.label} className="glass rounded-2xl p-3">
            <p className="mb-1 text-[11px] font-semibold tracking-wide text-white/35 uppercase">
              {row.label}
            </p>
            <p className="text-sm leading-relaxed text-white/65">{row.value}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
