import { sections } from '../data/slides'
import { usePresentation } from '../hooks/usePresentation'
import { useTimer } from '../hooks/useTimer'
import { PresenterNotesPanel } from './PresenterNotesPanel'
import { PrintDeck } from './PrintDeck'
import { ProgressBar } from './ProgressBar'
import { SectionMenu } from './SectionMenu'
import { SlideRenderer } from './SlideRenderer'
import { TimerControls } from './TimerControls'
import { Toolbar } from './Toolbar'

export function PresentationApp() {
  const presentation = usePresentation()
  const timer = useTimer()

  const sectionLabel =
    sections.find((section) => section.id === presentation.slide.section)?.label ??
    presentation.slide.section

  const handlePrint = () => {
    window.print()
  }

  return (
    <>
      <div className="presentation-shell flex h-full flex-col bg-bg">
        <Toolbar
          slideNumber={presentation.slide.number}
          totalSlides={presentation.totalSlides}
          sectionLabel={sectionLabel}
          hasPlaceholders={presentation.hasPlaceholders}
          showNotes={presentation.showNotes}
          isFullscreen={presentation.isFullscreen}
          onPrev={presentation.prev}
          onNext={presentation.next}
          onToggleMenu={() => presentation.setShowMenu((open) => !open)}
          onToggleNotes={() => presentation.setShowNotes((open) => !open)}
          onToggleFullscreen={() => {
            void presentation.toggleFullscreen()
          }}
          onPrint={handlePrint}
          timerSlot={
            <TimerControls
              remainingSeconds={timer.remainingSeconds}
              elapsedSeconds={timer.elapsedSeconds}
              isRunning={timer.isRunning}
              isOvertime={timer.isOvertime}
              overtimeSeconds={timer.overtimeSeconds}
              isRehearsal={timer.isRehearsal}
              onToggle={timer.toggle}
              onReset={timer.reset}
              onToggleRehearsal={timer.toggleRehearsal}
              recommendedMinutes={presentation.slide.recommendedMinutes}
              cumulativeMinutes={presentation.cumulativeMinutes}
            />
          }
        />

        <ProgressBar progress={presentation.progress} />

        <div className="relative min-h-0 flex-1">
          <div className="flex h-full items-center justify-center p-4 lg:p-6">
            <div className="slide-stage w-full max-w-[1600px] overflow-hidden rounded-2xl border border-border bg-bg-elevated shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
              <SlideRenderer
                slide={presentation.slide}
                hasPlaceholders={presentation.hasPlaceholders}
              />
            </div>
          </div>

          <SectionMenu
            open={presentation.showMenu}
            currentIndex={presentation.index}
            onClose={() => presentation.setShowMenu(false)}
            onSelect={presentation.goTo}
          />
        </div>

        {presentation.showNotes ? (
          <PresenterNotesPanel notes={presentation.notes} />
        ) : null}

        {timer.isOvertime ? (
          <div className="no-print border-t border-danger/40 bg-danger/10 px-4 py-2 text-center text-xs font-semibold tracking-wide text-danger uppercase">
            Overtime warning — session has exceeded 90 minutes
          </div>
        ) : null}

        {timer.isRehearsal &&
        !timer.isOvertime &&
        timer.elapsedSeconds > presentation.cumulativeMinutes * 60 ? (
          <div className="no-print border-t border-warning/40 bg-warning/10 px-4 py-2 text-center text-xs font-semibold tracking-wide text-warning uppercase">
            Pace warning — elapsed time is ahead of recommended cumulative timing
          </div>
        ) : null}

        <div className="no-print border-t border-border px-4 py-2 text-[11px] text-text-dim">
          Keyboard: ← → navigate · N notes · M sections · F fullscreen · Home/End jump
        </div>
      </div>

      <PrintDeck />
    </>
  )
}
