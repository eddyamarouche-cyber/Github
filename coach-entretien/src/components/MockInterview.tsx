import { useState, useMemo, useCallback } from 'react'
import { questions } from '../data/questions'
import type { Category } from '../data/questions'
import { useTimer } from '../hooks/useTimer'
import { useProgress } from '../hooks/useProgress'
import { QuestionCard } from './QuestionCard'

const MOCK_DURATION = 45 * 60 // 45 minutes

export function MockInterview() {
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
  }, [selectedCategories])

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
        <h2>🎯 Simulation d'entretien</h2>
        <p className="mock-description">
          Entraînez-vous dans des conditions réalistes : 45 minutes, 6 questions aléatoires
          avec chronomètre.
        </p>

        <div className="category-selection">
          <h3>Catégories à inclure :</h3>
          <div className="category-checkboxes">
            {(['comportemental', 'technique', 'produit', 'systeme', 'culture'] as Category[]).map(
              (cat) => (
                <label key={cat} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat)}
                    onChange={() => toggleCategory(cat)}
                  />
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </label>
              ),
            )}
          </div>
        </div>

        <button
          type="button"
          className="start-btn"
          onClick={handleStart}
          disabled={selectedCategories.length === 0}
        >
          Démarrer la simulation
        </button>
      </div>
    )
  }

  const currentQuestion = mockQuestions[currentIndex]

  if (!currentQuestion || timer.isExpired) {
    return (
      <div className="mock-complete">
        <h2>⏱️ Simulation terminée !</h2>
        <p>
          Vous avez répondu à {currentIndex + 1} question(s) en{' '}
          {Math.floor((MOCK_DURATION - timer.seconds) / 60)} minutes.
        </p>
        <button type="button" className="start-btn" onClick={handleEnd}>
          Retour au menu
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
            Question {currentIndex + 1} / {mockQuestions.length}
          </span>
        </div>
        <div className="timer-progress">
          <div
            className="timer-fill"
            style={{ width: `${(timer.seconds / MOCK_DURATION) * 100}%` }}
          />
        </div>
        <button type="button" className="end-btn" onClick={handleEnd}>
          Terminer
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
