import { useEffect, useRef, useState, type KeyboardEvent } from 'react'
import { slides, presenter } from '../data/slides'
import type { Slide } from '../data/slides'
import { ItalyMark } from './ItalyMark'
import { StageBackdrop } from './StageBackdrop'

function SlideContent({ slide, active }: { slide: Slide; active: boolean }) {
  const enter = active ? 'is-active' : ''

  if (slide.kind === 'focus') {
    return (
      <div className={`slide-inner focus ${enter}`}>
        <div className="focus-copy">
          <p className="brand-lockup">
            <span className="brand-name">{presenter.company}</span>
            <span className="brand-role">Italy</span>
          </p>
          {slide.eyebrow && <p className="eyebrow">{slide.eyebrow}</p>}
          <h1 className="hero-title">{slide.title}</h1>
          <p className="hero-lead">{slide.lead}</p>
          {slide.quote && (
            <p className="positioning">
              <span className="positioning-mark" aria-hidden="true" />
              {slide.quote}
            </p>
          )}
          <div className="vertical-strip" aria-label="Priority verticals">
            {slide.focusItems?.map((item, i) => (
              <span key={item} className="vertical-chip" style={{ ['--i' as string]: i }}>
                <span className="vertical-index">{String(i + 1).padStart(2, '0')}</span>
                <span className="vertical-name">{item}</span>
              </span>
            ))}
          </div>
        </div>
        <aside className="focus-aside">
          <div className="italy-stage">
            <ItalyMark />
            <p className="italy-caption">Milan · Rome · Naples</p>
          </div>
          <div className="why-block">
            <p className="aside-label">Why Italy</p>
            <ul className="aside-list">
              {slide.points?.map((point, i) => (
                <li key={point} style={{ ['--i' as string]: i }}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    )
  }

  if (slide.kind === 'verticals') {
    return (
      <div className={`slide-inner verticals ${enter}`}>
        <header className="slide-head">
          {slide.eyebrow && <p className="eyebrow">{slide.eyebrow}</p>}
          <h2 className="slide-title">{slide.title}</h2>
          {slide.lead && <p className="slide-lead">{slide.lead}</p>}
        </header>
        <div className="vertical-table" role="table" aria-label="Priority verticals">
          <div className="vertical-table-head" role="row">
            <span role="columnheader">Vertical</span>
            <span role="columnheader">Why now</span>
            <span role="columnheader">AI opportunities</span>
          </div>
          {slide.verticals?.map((row, i) => (
            <div
              key={row.name}
              className="vertical-table-row"
              role="row"
              style={{ ['--i' as string]: i }}
            >
              <div className="vertical-name-cell" role="cell">
                <span className="row-index">{String(i + 1).padStart(2, '0')}</span>
                <strong>{row.name}</strong>
              </div>
              <span role="cell">{row.whyNow}</span>
              <span role="cell" className="opportunities-cell">
                {row.opportunities}
              </span>
            </div>
          ))}
        </div>
        <div className="pain-row">
          <p className="aside-label">Common pain points</p>
          <ul className="pain-list">
            {slide.painPoints?.map((pain) => (
              <li key={pain}>{pain}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  if (slide.kind === 'gtm') {
    return (
      <div className={`slide-inner gtm ${enter}`}>
        <header className="slide-head">
          {slide.eyebrow && <p className="eyebrow">{slide.eyebrow}</p>}
          <h2 className="slide-title">{slide.title}</h2>
          {slide.lead && <p className="slide-lead">{slide.lead}</p>}
        </header>
        <div className="gtm-grid">
          <section className="gtm-panel">
            <p className="aside-label">Focus on</p>
            <ul className="point-list numbered">
              {slide.focusItems?.map((item, i) => (
                <li key={item} style={{ ['--i' as string]: i }}>
                  <span className="list-num">{String(i + 1).padStart(2, '0')}</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section className="gtm-panel pipeline-panel">
            <p className="aside-label">Pipeline generation</p>
            <ul className="pipeline-list">
              {slide.pipeline?.map((slice, i) => (
                <li key={slice.label} style={{ ['--i' as string]: i }}>
                  <span className="pipeline-share">{slice.share}</span>
                  <div className="pipeline-meta">
                    <span className="pipeline-label">{slice.label}</span>
                    <span
                      className="pipeline-bar"
                      style={{ ['--share' as string]: slice.share }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </section>
          <section className="gtm-panel">
            <p className="aside-label">Key multipliers</p>
            <ul className="point-list numbered">
              {slide.multipliers?.map((item, i) => (
                <li key={item} style={{ ['--i' as string]: i }}>
                  <span className="list-num">{String(i + 1).padStart(2, '0')}</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    )
  }

  if (slide.kind === 'expand') {
    return (
      <div className={`slide-inner expand ${enter}`}>
        <header className="slide-head">
          {slide.eyebrow && <p className="eyebrow">{slide.eyebrow}</p>}
          <h2 className="slide-title">{slide.title}</h2>
          {slide.lead && <p className="slide-lead">{slide.lead}</p>}
        </header>
        <ol className="phase-track">
          {slide.phases?.map((phase, i) => (
            <li key={phase.phase} style={{ ['--i' as string]: i }}>
              <span className="phase-watermark" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="phase-step">{phase.phase}</span>
              <strong className="phase-product">{phase.product}</strong>
              <p className="phase-outcome">{phase.outcome}</p>
            </li>
          ))}
        </ol>
        <p className="expand-goal">
          <span className="expand-goal-label">Goal</span>
          Expand from one successful use case into enterprise-wide adoption.
        </p>
      </div>
    )
  }

  if (slide.kind === 'account') {
    return (
      <div className={`slide-inner account ${enter}`}>
        <header className="slide-head account-head">
          {slide.eyebrow && <p className="eyebrow">{slide.eyebrow}</p>}
          <h2 className="slide-title account-title">{slide.title}</h2>
          {slide.lead && <p className="slide-lead">{slide.lead}</p>}
        </header>
        <div className="account-grid">
          <section style={{ ['--i' as string]: 0 }}>
            <p className="aside-label">Strategic fit</p>
            <ul className="point-list">
              {slide.fitItems?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section style={{ ['--i' as string]: 1 }}>
            <p className="aside-label">Initial opportunities</p>
            <ul className="point-list">
              {slide.opportunities?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section style={{ ['--i' as string]: 2 }}>
            <p className="aside-label">Target buyers</p>
            <ul className="point-list">
              {slide.buyers?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section style={{ ['--i' as string]: 3 }}>
            <p className="aside-label">Expected value</p>
            <ul className="point-list">
              {slide.valueItems?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    )
  }

  return (
    <div className={`slide-inner why ${enter}`}>
      <header className="slide-head">
        {slide.eyebrow && <p className="eyebrow">{slide.eyebrow}</p>}
        <h2 className="slide-title">{slide.title}</h2>
        {slide.lead && <p className="slide-lead">{slide.lead}</p>}
      </header>
      <div className="why-grid">
        <section style={{ ['--i' as string]: 0 }}>
          <p className="aside-label">Relevant experience</p>
          <ul className="point-list">
            {slide.experience?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section style={{ ['--i' as string]: 1 }}>
          <p className="aside-label">What I bring</p>
          <ul className="point-list">
            {slide.bring?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
      {slide.vision && (
        <blockquote className="vision-quote">
          <span className="vision-mark" aria-hidden="true">
            “
          </span>
          {slide.vision}
        </blockquote>
      )}
      <p className="close-meta">
        {presenter.name} · {presenter.email}
      </p>
    </div>
  )
}

export function SlideDeck() {
  const [index, setIndex] = useState(0)
  const shellRef = useRef<HTMLDivElement>(null)

  const go = (next: number) => {
    setIndex(Math.max(0, Math.min(slides.length - 1, next)))
  }

  useEffect(() => {
    shellRef.current?.focus()
  }, [])

  useEffect(() => {
    const onKey = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ') {
        event.preventDefault()
        go(index + 1)
      } else if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
        event.preventDefault()
        go(index - 1)
      } else if (event.key === 'Home') {
        event.preventDefault()
        go(0)
      } else if (event.key === 'End') {
        event.preventDefault()
        go(slides.length - 1)
      } else if (/^[1-6]$/.test(event.key)) {
        event.preventDefault()
        go(Number(event.key) - 1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index])

  const onShellKey = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight') go(index + 1)
    if (event.key === 'ArrowLeft') go(index - 1)
  }

  const progress = ((index + 1) / slides.length) * 100
  const slide = slides[index]

  return (
    <div
      className="deck"
      ref={shellRef}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Italy GTM Strategy presentation"
      onKeyDown={onShellKey}
      data-slide={slide.kind}
    >
      <StageBackdrop />

      <header className="deck-top">
        <div className="deck-identity">
          <span className="deck-mark" aria-hidden="true" />
          <span className="deck-name">{presenter.name}</span>
          <span className="deck-sep" aria-hidden="true">
            /
          </span>
          <span className="deck-company">{presenter.company}</span>
        </div>

        <nav className="slide-jump" aria-label="Jump to slide">
          {slides.map((item, i) => (
            <button
              key={item.id}
              type="button"
              className={`slide-jump-item ${i === index ? 'active' : ''}`}
              onClick={() => go(i)}
              aria-current={i === index ? 'true' : undefined}
            >
              {String(i + 1).padStart(2, '0')}
            </button>
          ))}
        </nav>

        <p className="deck-counter">
          <span>{String(index + 1).padStart(2, '0')}</span>
          <span className="deck-counter-sep">/</span>
          <span>{String(slides.length).padStart(2, '0')}</span>
        </p>

        <div className="deck-progress" aria-hidden="true">
          <div className="deck-progress-bar" style={{ width: `${progress}%` }} />
        </div>
      </header>

      <main className="deck-stage" key={slide.id}>
        <SlideContent slide={slide} active />
      </main>

      <footer className="deck-nav">
        <button
          type="button"
          className="nav-btn"
          onClick={() => go(index - 1)}
          disabled={index === 0}
          aria-label="Previous slide"
        >
          Previous
        </button>
        <div className="dots" role="tablist" aria-label="Slides">
          {slides.map((item, i) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              className={`dot ${i === index ? 'active' : ''}`}
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          type="button"
          className="nav-btn primary"
          onClick={() => go(index + 1)}
          disabled={index === slides.length - 1}
          aria-label="Next slide"
        >
          Next
        </button>
      </footer>
    </div>
  )
}
