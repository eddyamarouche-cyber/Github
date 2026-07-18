import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from 'react'
import { slides, presenter, monthNav } from '../data/slides'
import type { Slide } from '../data/slides'
import { HeroAtmosphere } from './HeroAtmosphere'
import { StageBackdrop } from './StageBackdrop'

function SlideContent({ slide, active }: { slide: Slide; active: boolean }) {
  const enter = active ? 'is-active' : ''

  if (slide.kind === 'hero') {
    return (
      <div className={`slide-inner hero ${enter}`}>
        <HeroAtmosphere />
        <div className="hero-copy">
          <p className="brand-name">{presenter.name}</p>
          <h1 className="hero-brand">
            <span className="hero-for">Plan pour</span>
            <span className="hero-company">{slide.title}</span>
          </h1>
          <p className="hero-lead">{slide.lead}</p>
          <div className="hero-cta-row">
            <span className="hint-key">→</span>
            <span className="hint-text">Parcourir le plan</span>
          </div>
        </div>
      </div>
    )
  }

  if (slide.kind === 'phase') {
    return (
      <div className={`slide-inner phase ${enter}`}>
        <div className="phase-rail" aria-hidden="true">
          <span className="phase-watermark">{slide.phaseDays}</span>
          <span className="phase-num">{slide.phaseDays}</span>
          <span className="phase-unit">jours</span>
        </div>
        <div className="phase-body">
          {slide.eyebrow && <p className="eyebrow">{slide.eyebrow}</p>}
          <p className="phase-label">{slide.phaseLabel}</p>
          <h2 className="slide-title">{slide.title}</h2>
          <ul className="point-list">
            {slide.points?.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  if (slide.kind === 'close') {
    return (
      <div className={`slide-inner close ${enter}`}>
        <div className="close-mark" aria-hidden="true" />
        {slide.eyebrow && <p className="eyebrow">{slide.eyebrow}</p>}
        <h2 className="slide-title close-title">{slide.title}</h2>
        <p className="slide-lead">{slide.lead}</p>
        <p className="close-meta">
          {presenter.name} · {presenter.email}
        </p>
        {slide.cta && (
          <a className="cta" href={slide.cta.href}>
            <span>{slide.cta.label}</span>
            <span className="cta-arrow" aria-hidden="true">
              →
            </span>
          </a>
        )}
      </div>
    )
  }

  return (
    <div className={`slide-inner content ${enter} kind-${slide.kind}`}>
      <div className="content-rule" aria-hidden="true" />
      {slide.eyebrow && <p className="eyebrow">{slide.eyebrow}</p>}
      <h2 className="slide-title">{slide.title}</h2>
      {slide.lead && <p className="slide-lead">{slide.lead}</p>}
      {slide.points && slide.points.length > 0 && (
        <ul className="point-list">
          {slide.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export function SlideDeck() {
  const [index, setIndex] = useState(0)
  const shellRef = useRef<HTMLDivElement>(null)

  const monthIndexes = useMemo(() => {
    const map = new Map<string, number>()
    slides.forEach((item, i) => {
      map.set(item.id, i)
    })
    return map
  }, [])

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
      } else if (event.key === '1' || event.key === '2' || event.key === '3') {
        const month = monthNav[Number(event.key) - 1]
        const target = monthIndexes.get(month.id)
        if (target !== undefined) {
          event.preventDefault()
          go(target)
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, monthIndexes])

  const onShellKey = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight') go(index + 1)
    if (event.key === 'ArrowLeft') go(index - 1)
  }

  const progress = ((index + 1) / slides.length) * 100
  const slide = slides[index]
  const activeMonthId =
    slide.kind === 'phase' ? slide.id : monthNav.find((m) => monthIndexes.get(m.id) === index)?.id

  return (
    <div
      className="deck"
      ref={shellRef}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Présentation du plan pour Cursor"
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

        <nav className="month-nav" aria-label="Navigation par mois">
          {monthNav.map((month) => {
            const target = monthIndexes.get(month.id) ?? 0
            const active = activeMonthId === month.id
            return (
              <button
                key={month.id}
                type="button"
                className={`month-nav-item ${active ? 'active' : ''}`}
                onClick={() => go(target)}
                aria-current={active ? 'true' : undefined}
              >
                <span className="month-nav-label">{month.label}</span>
                <span className="month-nav-days">J {month.days}</span>
              </button>
            )
          })}
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
          aria-label="Slide précédente"
        >
          Précédent
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
              aria-label={`Aller à la slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          type="button"
          className="nav-btn primary"
          onClick={() => go(index + 1)}
          disabled={index === slides.length - 1}
          aria-label="Slide suivante"
        >
          Suivant
        </button>
      </footer>
    </div>
  )
}
