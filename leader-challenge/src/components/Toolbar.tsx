import type { ReactNode } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  FileDown,
  Maximize2,
  Menu,
  Minimize2,
  Presentation,
  StickyNote,
} from 'lucide-react'
import { PlaceholderBadge } from './ui'

interface ToolbarProps {
  slideNumber: number
  totalSlides: number
  sectionLabel: string
  hasPlaceholders: boolean
  showNotes: boolean
  isFullscreen: boolean
  isPresenting: boolean
  onPrev: () => void
  onNext: () => void
  onToggleMenu: () => void
  onToggleNotes: () => void
  onToggleFullscreen: () => void
  onTogglePresent: () => void
  onPrint: () => void
  timerSlot: ReactNode
}

export function Toolbar({
  slideNumber,
  totalSlides,
  sectionLabel,
  hasPlaceholders,
  showNotes,
  isFullscreen,
  isPresenting,
  onPrev,
  onNext,
  onToggleMenu,
  onToggleNotes,
  onToggleFullscreen,
  onTogglePresent,
  onPrint,
  timerSlot,
}: ToolbarProps) {
  return (
    <div className="no-print flex flex-wrap items-center justify-between gap-3 border-b border-border bg-bg-elevated/95 px-4 py-2.5 backdrop-blur">
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={onToggleMenu}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-bg-panel px-2.5 py-1.5 text-xs text-text-muted transition hover:border-accent/50 hover:text-text"
          title="Section menu (M)"
        >
          <Menu size={14} />
          Sections
        </button>
        <div className="rounded-lg border border-border bg-bg-panel px-2.5 py-1.5 text-xs text-text-muted">
          <span className="font-semibold text-text">
            {slideNumber} / {totalSlides}
          </span>
          <span className="mx-2 text-border">|</span>
          <span>{sectionLabel}</span>
        </div>
        {hasPlaceholders ? <PlaceholderBadge /> : null}
      </div>

      <div className="flex flex-wrap items-center gap-2">{timerSlot}</div>

      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={onPrev}
          className="inline-flex items-center gap-1 rounded-lg border border-border bg-bg-panel px-2.5 py-1.5 text-xs text-text-muted transition hover:border-accent/50 hover:text-text"
          title="Previous slide (←)"
        >
          <ChevronLeft size={14} />
          Prev
        </button>
        <button
          type="button"
          onClick={onNext}
          className="inline-flex items-center gap-1 rounded-lg border border-border bg-bg-panel px-2.5 py-1.5 text-xs text-text-muted transition hover:border-accent/50 hover:text-text"
          title="Next slide (→)"
        >
          Next
          <ChevronRight size={14} />
        </button>
        <button
          type="button"
          onClick={onToggleNotes}
          className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs transition ${
            showNotes
              ? 'border-accent bg-accent-dim text-accent'
              : 'border-border bg-bg-panel text-text-muted hover:border-accent/50 hover:text-text'
          }`}
          title="Presenter notes (N)"
        >
          <StickyNote size={14} />
          Notes
        </button>
        <button
          type="button"
          onClick={onTogglePresent}
          className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs transition ${
            isPresenting
              ? 'border-accent bg-accent-dim text-accent'
              : 'border-accent/60 bg-accent text-bg hover:bg-accent-soft'
          }`}
          title="Presentation mode (P)"
        >
          <Presentation size={14} />
          Present
        </button>
        <button
          type="button"
          onClick={onToggleFullscreen}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-bg-panel px-2.5 py-1.5 text-xs text-text-muted transition hover:border-accent/50 hover:text-text"
          title="Fullscreen (F)"
        >
          {isFullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
          {isFullscreen ? 'Exit' : 'Fullscreen'}
        </button>
        <button
          type="button"
          onClick={onPrint}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-bg-panel px-2.5 py-1.5 text-xs text-text-muted transition hover:border-accent/50 hover:text-text"
          title="Print / Export to PDF"
        >
          <FileDown size={14} />
          PDF
        </button>
      </div>
    </div>
  )
}
