import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { getSectionStartIndex, sections, slides } from '../data/slides'

interface SectionMenuProps {
  open: boolean
  currentIndex: number
  onClose: () => void
  onSelect: (index: number) => void
}

export function SectionMenu({ open, currentIndex, onClose, onSelect }: SectionMenuProps) {
  return (
    <AnimatePresence>
      {open ? (
        <div className="no-print absolute inset-0 z-40 flex">
          <motion.button
            type="button"
            className="flex-1 bg-black/50 backdrop-blur-sm"
            aria-label="Close workspace menu"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.aside
            initial={{ x: 28, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 28, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="glass-strong flex h-full w-full max-w-md flex-col border-l border-white/10"
          >
            <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.16em] text-accent uppercase">
                  Workspace
                </p>
                <h2 className="font-display text-lg font-semibold text-white">Sections</h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/60 hover:text-white"
                aria-label="Close menu"
              >
                <X size={16} />
              </button>
            </div>

            <div className="scrollbar-thin flex-1 overflow-y-auto px-3 py-3">
              {sections.map((section) => {
                const start = getSectionStartIndex(section.id)
                const sectionSlides = slides.filter((slide) => slide.section === section.id)
                const active = slides[currentIndex]?.section === section.id

                return (
                  <div key={section.id} className="mb-4">
                    <button
                      type="button"
                      onClick={() => onSelect(start)}
                      className={`mb-2 flex w-full items-center justify-between rounded-xl px-3 py-2 text-left transition ${
                        active
                          ? 'bg-accent-dim text-accent'
                          : 'text-white/80 hover:bg-white/5'
                      }`}
                    >
                      <span className="font-medium">{section.label}</span>
                      <span className="text-xs text-white/35">{section.allocatedMinutes} min</span>
                    </button>
                    <div className="space-y-1 pl-2">
                      {sectionSlides.map((slide) => (
                        <button
                          key={slide.id}
                          type="button"
                          onClick={() => onSelect(slide.number - 1)}
                          className={`flex w-full items-center gap-3 rounded-lg px-3 py-1.5 text-left text-sm transition ${
                            currentIndex === slide.number - 1
                              ? 'bg-white/8 text-white'
                              : 'text-white/50 hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          <span className="w-6 text-xs text-white/30">{slide.number}</span>
                          <span className="truncate">{slide.title}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.aside>
        </div>
      ) : null}
    </AnimatePresence>
  )
}
