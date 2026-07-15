import { useState } from 'react'
import type { Question } from '../data/questions'
import { categoryLabels } from '../data/questions'
import type { ProgressEntry } from '../hooks/useProgress'

interface Props {
  question: Question
  index: number
  total: number
  progress?: ProgressEntry
  onRate: (rating: ProgressEntry['rating'], notes: string) => void
  onNext: () => void
  onPrev: () => void
}

const ratings: { value: ProgressEntry['rating']; label: string; emoji: string }[] = [
  { value: 'poor', label: 'À retravailler', emoji: '😕' },
  { value: 'ok', label: 'Correct', emoji: '😐' },
  { value: 'good', label: 'Bien', emoji: '🙂' },
  { value: 'excellent', label: 'Excellent', emoji: '🌟' },
]

export function QuestionCard({
  question,
  index,
  total,
  progress,
  onRate,
  onNext,
  onPrev,
}: Props) {
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
          <span className="category-badge">{categoryLabels[question.category]}</span>
          <span className={`difficulty-badge ${question.difficulty}`}>
            {question.difficulty}
          </span>
        </div>
        <span className="question-counter">
          {index + 1} / {total}
        </span>
      </div>

      <h2 className="question-text">{question.question}</h2>

      {question.followUp && (
        <div className="follow-up">
          <strong>Question de suivi :</strong> {question.followUp}
        </div>
      )}

      <div className="question-actions">
        <button
          type="button"
          className={`toggle-btn ${showHints ? 'active' : ''}`}
          onClick={() => setShowHints(!showHints)}
        >
          💡 Indices {showHints ? '▲' : '▼'}
        </button>
        <button
          type="button"
          className={`toggle-btn ${showKeyPoints ? 'active' : ''}`}
          onClick={() => setShowKeyPoints(!showKeyPoints)}
        >
          ✅ Points clés {showKeyPoints ? '▲' : '▼'}
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
        <p className="rating-label">Auto-évaluation de votre réponse :</p>
        <div className="rating-buttons">
          {ratings.map((r) => (
            <button
              key={r.value}
              type="button"
              className={`rating-btn ${selectedRating === r.value ? 'selected' : ''}`}
              onClick={() => handleRate(r.value)}
            >
              <span className="rating-emoji">{r.emoji}</span>
              <span className="rating-text">{r.label}</span>
            </button>
          ))}
        </div>
        <textarea
          className="notes-input"
          placeholder="Notes personnelles sur votre réponse..."
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
          ← Précédent
        </button>
        <button
          type="button"
          className="nav-btn primary"
          onClick={onNext}
          disabled={index === total - 1}
        >
          Suivant →
        </button>
      </div>
    </div>
  )
}
