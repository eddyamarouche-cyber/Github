import { useState } from 'react'
import type { Question } from '../data/types'
import type { ProgressEntry } from '../hooks/useProgress'
import { useI18n } from '../i18n/context'

interface Props {
  question: Question
  index: number
  total: number
  progress?: ProgressEntry
  onRate: (rating: ProgressEntry['rating'], notes: string) => void
  onNext: () => void
  onPrev: () => void
}

const ratingKeys: ProgressEntry['rating'][] = ['poor', 'ok', 'good', 'excellent']
const ratingEmojis: Record<ProgressEntry['rating'], string> = {
  poor: '😕',
  ok: '😐',
  good: '🙂',
  excellent: '🌟',
}

export function QuestionCard({
  question,
  index,
  total,
  progress,
  onRate,
  onNext,
  onPrev,
}: Props) {
  const { t } = useI18n()
  const [showHints, setShowHints] = useState(false)
  const [showKeyPoints, setShowKeyPoints] = useState(false)
  const [notes, setNotes] = useState(progress?.notes ?? '')
  const [selectedRating, setSelectedRating] = useState<ProgressEntry['rating'] | null>(
    progress?.rating ?? null,
  )

  const handleRate = (rating: ProgressEntry['rating']) => {
    setSelectedRating(rating)
    onRate(rating, notes)
  }

  return (
    <div className="question-card">
      <div className="question-header">
        <div className="question-meta">
          <span className="category-badge">{t.categories[question.category].label}</span>
          <span className={`difficulty-badge ${question.difficulty}`}>
            {t.difficulty[question.difficulty]}
          </span>
        </div>
        <span className="question-counter">
          {index + 1} / {total}
        </span>
      </div>

      <h2 className="question-text">{question.question}</h2>

      {question.followUp && (
        <div className="follow-up">
          <strong>{t.questionCard.followUp}</strong> {question.followUp}
        </div>
      )}

      <div className="question-actions">
        <button
          type="button"
          className={`toggle-btn ${showHints ? 'active' : ''}`}
          onClick={() => setShowHints(!showHints)}
        >
          💡 {t.questionCard.hints} {showHints ? '▲' : '▼'}
        </button>
        <button
          type="button"
          className={`toggle-btn ${showKeyPoints ? 'active' : ''}`}
          onClick={() => setShowKeyPoints(!showKeyPoints)}
        >
          ✅ {t.questionCard.keyPoints} {showKeyPoints ? '▲' : '▼'}
        </button>
      </div>

      {showHints && (
        <ul className="hints-list">
          {question.hints.map((hint, i) => (
            <li key={i}>{hint}</li>
          ))}
        </ul>
      )}

      {showKeyPoints && (
        <ul className="keypoints-list">
          {question.keyPoints.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      )}

      <div className="rating-section">
        <p className="rating-label">{t.questionCard.rating}</p>
        <div className="rating-buttons">
          {ratingKeys.map((key) => (
            <button
              key={key}
              type="button"
              className={`rating-btn ${selectedRating === key ? 'selected' : ''}`}
              onClick={() => handleRate(key)}
            >
              <span className="rating-emoji">{ratingEmojis[key]}</span>
              <span className="rating-text">{t.ratings[key]}</span>
            </button>
          ))}
        </div>
        <textarea
          className="notes-input"
          placeholder={t.questionCard.notesPlaceholder}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          onBlur={() => {
            if (selectedRating) onRate(selectedRating, notes)
          }}
          rows={3}
        />
      </div>

      <div className="nav-buttons">
        <button type="button" className="nav-btn" onClick={onPrev} disabled={index === 0}>
          {t.questionCard.prev}
        </button>
        <button
          type="button"
          className="nav-btn primary"
          onClick={onNext}
          disabled={index === total - 1}
        >
          {t.questionCard.next}
        </button>
      </div>
    </div>
  )
}
