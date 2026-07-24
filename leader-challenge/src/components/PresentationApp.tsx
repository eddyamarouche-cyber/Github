import { AnimatePresence, motion } from 'framer-motion'
import { sections } from '../data/slides'
import { useIdleCursor } from '../hooks/useIdleCursor'
import { usePresentation } from '../hooks/usePresentation'
import { useTimer } from '../hooks/useTimer'
import { PresentMode } from './PresentMode'
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
  const cursorHidden = useIdleCursor(presentation.isPresenting, 3000)

  const sectionLabel =
    sections.find((section) => section.id === presentation.slide.section)?.label ??
    presentation.slide.section

  const handlePrint = () => {
    window.print()
  }

  return (
    <>
      <div
        className={`presentation-shell flex h-full flex-col ${
          presentation.isPresenting ? 'overflow-hidden' : ''
        }`}
      >
        {!presentation.isPresenting ? (
          <>
            <Toolbar
              slideNumber={presentation.slide.number}
              totalSlides={presentation.totalSlides}
              sectionLabel={sectionLabel}
              showNotes={presentation.showNotes}
              isFullscreen={presentation.isFullscreen}
              isPresenting={presentation.isPresenting}
              onPrev={presentation.prev}
              onNext={presentation.next}
              onToggleMenu={() => presentation.setShowMenu((open) => !open)}
              onToggleNotes={() => presentation.setShowNotes((open) => !open)}
              onToggleFullscreen={() => {
                void presentation.toggleFullscreen()
              }}
              onTogglePresent={() => {
                void presentation.togglePresent()
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
          </>
        ) : null}

        <div className="relative min-h-0 flex-1">
          {!presentation.isPresenting ? (
            <div className="flex h-full items-center justify-center p-4 lg:p-6">
              <motion.div
                layout
                className="slide-stage glass-strong w-full max-w-[1600px] overflow-hidden rounded-[28px]"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={presentation.slide.id}
                    initial={{ opacity: 0, x: presentation.transitionDirection === 'next' ? 18 : -18 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: presentation.transitionDirection === 'next' ? -12 : 12 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full w-full"
                  >
                    <SlideRenderer slide={presentation.slide} />
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>
          ) : null}

          {!presentation.isPresenting ? (
            <SectionMenu
              open={presentation.showMenu}
              currentIndex={presentation.index}
              onClose={() => presentation.setShowMenu(false)}
              onSelect={presentation.goTo}
            />
          ) : null}
        </div>

        {!presentation.isPresenting && presentation.showNotes ? (
          <PresenterNotesPanel notes={presentation.notes} />
        ) : null}

        {!presentation.isPresenting && timer.isOvertime ? (
          <div className="no-print border-t border-danger/40 bg-danger/10 px-4 py-2 text-center text-xs font-semibold tracking-wide text-danger uppercase">
            Overtime warning — session has exceeded 90 minutes
          </div>
        ) : null}

        {!presentation.isPresenting &&
        timer.isRehearsal &&
        !timer.isOvertime &&
        timer.elapsedSeconds > presentation.cumulativeMinutes * 60 ? (
          <div className="no-print border-t border-warning/40 bg-warning/10 px-4 py-2 text-center text-xs font-semibold tracking-wide text-warning uppercase">
            Pace warning — elapsed time is ahead of recommended cumulative timing
          </div>
        ) : null}

        {!presentation.isPresenting ? (
          <div className="no-print border-t border-white/8 px-4 py-2 text-[11px] text-white/35">
            ← → navigate · Space next · P present · N notes · M workspace · F fullscreen · Esc
            exit present
          </div>
        ) : null}
      </div>

      {presentation.isPresenting ? (
        <PresentMode
          slide={presentation.slide}
          transitionDirection={presentation.transitionDirection}
          cursorHidden={cursorHidden}
          onExit={() => {
            void presentation.exitPresent()
          }}
        />
      ) : null}

      <PrintDeck />
    </>
  )
}
