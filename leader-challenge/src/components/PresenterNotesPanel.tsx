import type { PresenterNote } from '../data/types'

export function PresenterNotesPanel({ notes }: { notes?: PresenterNote }) {
  if (!notes) {
    return (
      <div className="border-t border-border bg-bg-elevated px-6 py-4 text-sm text-text-muted">
        No presenter notes for this slide.
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
    <div className="no-print max-h-[34vh] overflow-y-auto border-t border-border bg-bg-elevated px-6 py-4">
      <p className="mb-3 text-[11px] font-semibold tracking-[0.16em] text-accent uppercase">
        Presenter Notes
      </p>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {rows.map((row) => (
          <div key={row.label} className="rounded-lg border border-border/80 bg-bg-panel/60 p-3">
            <p className="mb-1 text-[11px] font-semibold tracking-wide text-text-dim uppercase">
              {row.label}
            </p>
            <p className="text-sm leading-relaxed text-text-muted">{row.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
