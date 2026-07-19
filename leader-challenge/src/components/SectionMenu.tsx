import { X } from 'lucide-react'
import { getSectionStartIndex, sections, slides } from '../data/slides'

interface SectionMenuProps {
  open: boolean
  currentIndex: number
  onClose: () => void
  onSelect: (index: number) => void
}

export function SectionMenu({ open, currentIndex, onClose, onSelect }: SectionMenuProps) {
  if (!open) return null

  return (
    <div className="no-print absolute inset-0 z-40 flex">
      <button
        type="button"
        className="flex-1 bg-black/50"
        aria-label="Close section menu"
        onClick={onClose}
      />
      <aside className="flex h-full w-full max-w-md flex-col border-l border-border bg-bg-elevated shadow-2xl">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.16em] text-accent uppercase">
              Navigate
            </p>
            <h2 className="font-display text-lg font-semibold">Sections</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-border p-2 text-text-muted hover:text-text"
            aria-label="Close menu"
          >
            <X size={16} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-3">
          {sections.map((section) => {
            const start = getSectionStartIndex(section.id)
            const sectionSlides = slides.filter((slide) => slide.section === section.id)
            const active = slides[currentIndex]?.section === section.id

            return (
              <div key={section.id} className="mb-4">
                <button
                  type="button"
                  onClick={() => onSelect(start)}
                  className={`mb-2 flex w-full items-center justify-between rounded-lg px-3 py-2 text-left transition ${
                    active ? 'bg-accent-dim text-accent' : 'hover:bg-bg-panel'
                  }`}
                >
                  <span className="font-medium">{section.label}</span>
                  <span className="text-xs text-text-dim">{section.allocatedMinutes} min</span>
                </button>
                <div className="space-y-1 pl-2">
                  {sectionSlides.map((slide) => (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => onSelect(slide.number - 1)}
                      className={`flex w-full items-center gap-3 rounded-md px-3 py-1.5 text-left text-sm transition ${
                        currentIndex === slide.number - 1
                          ? 'bg-bg-panel text-text'
                          : 'text-text-muted hover:bg-bg-panel/70 hover:text-text'
                      }`}
                    >
                      <span className="w-6 text-xs text-text-dim">{slide.number}</span>
                      <span className="truncate">{slide.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </aside>
    </div>
  )
}
