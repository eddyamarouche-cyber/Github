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

function ToolButton({
  children,
  onClick,
  title,
  active = false,
  accent = false,
}: {
  children: ReactNode
  onClick: () => void
  title: string
  active?: boolean
  accent?: boolean
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className={`inline-flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 text-xs transition ${
        accent
          ? 'border border-accent/50 bg-accent text-bg hover:bg-accent-soft'
          : active
            ? 'border border-accent/40 bg-accent-dim text-accent'
            : 'border border-white/10 bg-white/5 text-white/65 hover:border-white/20 hover:bg-white/8 hover:text-white'
      }`}
    >
      {children}
    </button>
  )
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
    <div className="no-print flex flex-wrap items-center justify-between gap-3 border-b border-white/8 bg-bg-elevated/80 px-4 py-2.5 backdrop-blur-xl">
      <div className="flex flex-wrap items-center gap-2">
        <ToolButton onClick={onToggleMenu} title="Section menu (M)">
          <Menu size={14} />
          Workspace
        </ToolButton>
        <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-white/60">
          <span className="font-semibold text-white">
            {slideNumber}
            <span className="text-white/30"> / {totalSlides}</span>
          </span>
          <span className="text-white/20">|</span>
          <span>{sectionLabel}</span>
        </div>
        {hasPlaceholders ? <PlaceholderBadge /> : null}
      </div>

      <div className="flex flex-wrap items-center gap-2">{timerSlot}</div>

      <div className="flex flex-wrap items-center gap-2">
        <ToolButton onClick={onPrev} title="Previous (←)">
          <ChevronLeft size={14} />
          Prev
        </ToolButton>
        <ToolButton onClick={onNext} title="Next (→)">
          Next
          <ChevronRight size={14} />
        </ToolButton>
        <ToolButton onClick={onToggleNotes} title="Presenter notes (N)" active={showNotes}>
          <StickyNote size={14} />
          Notes
        </ToolButton>
        <ToolButton
          onClick={onTogglePresent}
          title="Presentation mode (P)"
          accent={!isPresenting}
          active={isPresenting}
        >
          <Presentation size={14} />
          Present
        </ToolButton>
        <ToolButton onClick={onToggleFullscreen} title="Fullscreen (F)">
          {isFullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
          {isFullscreen ? 'Exit' : 'Fullscreen'}
        </ToolButton>
        <ToolButton onClick={onPrint} title="Print / Export to PDF">
          <FileDown size={14} />
          PDF
        </ToolButton>
      </div>
    </div>
  )
}
