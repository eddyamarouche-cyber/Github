import { useState, useMemo, useCallback } from 'react'
import type { Category } from '../data/types'
import { allCategories } from '../data/types'
import { useTimer } from '../hooks/useTimer'
import { useProgress } from '../hooks/useProgress'
import { useI18n } from '../i18n/context'
import { QuestionCard } from './QuestionCard'

const MOCK_DURATION = 45 * 60

export function MockInterview() {
  const { t, questions, format } = useI18n()
  const [started, setStarted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([
    'comportemental',
    'technique',
    'produit',
    'culture',
  ])
  const timer = useTimer(MOCK_DURATION)
  const { saveEntry, getRating } = useProgress()

  const mockQuestions = useMemo(() => {
    const filtered = questions.filter((q) => selectedCategories.includes(q.category))
    const shuffled = [...filtered].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, 6)
  }, [questions, selectedCategories])

  const toggleCategory = (cat: Category) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat],
    )
  }

  const handleStart = () => {
    setStarted(true)
    setCurrentIndex(0)
    timer.reset(MOCK_DURATION)
    timer.start()
  }

  const handleEnd = useCallback(() => {
    timer.pause()
    setStarted(false)
  }, [timer])

  if (!started) {
    return (
      <div className="mock-setup">
        <h2>🎯 {t.mock.title}</h2>
        <p className="mock-description">{t.mock.description}</p>

        <div className="category-selection">
          <h3>{t.mock.categoriesTitle}</h3>
          <div className="category-checkboxes">
            {allCategories.map((cat) => (
              <label key={cat} className="checkbox-label">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                />
                {t.categories[cat].label}
              </label>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="start-btn"
          onClick={handleStart}
          disabled={selectedCategories.length === 0}
        >
          {t.mock.start}
        </button>
      </div>
    )
  }

  const currentQuestion = mockQuestions[currentIndex]

  if (!currentQuestion || timer.isExpired) {
    return (
      <div className="mock-complete">
        <h2>⏱️ {t.mock.completeTitle}</h2>
        <p>
          {format(t.mock.completeText, {
            count: currentIndex + 1,
            minutes: Math.floor((MOCK_DURATION - timer.seconds) / 60),
          })}
        </p>
        <button type="button" className="start-btn" onClick={handleEnd}>
          {t.mock.backToMenu}
        </button>
      </div>
    )
  }

  return (
    <div className="mock-session">
      <div className="mock-timer-bar">
        <div className="timer-display">
          <span className={`timer ${timer.seconds < 300 ? 'urgent' : ''}`}>
            ⏱ {timer.formatted}
          </span>
          <span className="mock-progress">
            {format(t.mock.question, {
              current: currentIndex + 1,
              total: mockQuestions.length,
            })}
          </span>
        </div>
        <div className="timer-progress">
          <div
            className="timer-fill"
            style={{ width: `${(timer.seconds / MOCK_DURATION) * 100}%` }}
          />
        </div>
        <button type="button" className="end-btn" onClick={handleEnd}>
          {t.mock.end}
        </button>
      </div>

      <QuestionCard
        question={currentQuestion}
        index={currentIndex}
        total={mockQuestions.length}
        progress={getRating(currentQuestion.id)}
        onRate={(rating, notes) => saveEntry({ questionId: currentQuestion.id, rating, notes })}
        onNext={() => setCurrentIndex((i) => Math.min(i + 1, mockQuestions.length - 1))}
        onPrev={() => setCurrentIndex((i) => Math.max(i - 1, 0))}
      />
    </div>
  )
}
