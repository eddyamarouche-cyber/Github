interface Props {
  stats: {
    total: number
    excellent: number
    good: number
    ok: number
    poor: number
  }
  onClear: () => void
}

export function ProgressDashboard({ stats, onClear }: Props) {
  if (stats.total === 0) {
    return (
      <div className="progress-empty">
        <p>
          Aucune progression enregistrée. Commencez à pratiquer des questions pour suivre vos
          progrès !
        </p>
      </div>
    )
  }

  const score =
    stats.total > 0
      ? Math.round(
          ((stats.excellent * 4 + stats.good * 3 + stats.ok * 2 + stats.poor * 1) /
            (stats.total * 4)) *
            100,
        )
      : 0

  return (
    <div className="progress-dashboard">
      <h2>📊 Votre progression</h2>

      <div className="score-circle">
        <span className="score-value">{score}%</span>
        <span className="score-label">Score global</span>
      </div>

      <div className="stats-bars">
        <div className="stat-row">
          <span>🌟 Excellent</span>
          <div className="stat-bar">
            <div
              className="stat-fill excellent"
              style={{ width: `${(stats.excellent / stats.total) * 100}%` }}
            />
          </div>
          <span>{stats.excellent}</span>
        </div>
        <div className="stat-row">
          <span>🙂 Bien</span>
          <div className="stat-bar">
            <div
              className="stat-fill good"
              style={{ width: `${(stats.good / stats.total) * 100}%` }}
            />
          </div>
          <span>{stats.good}</span>
        </div>
        <div className="stat-row">
          <span>😐 Correct</span>
          <div className="stat-bar">
            <div
              className="stat-fill ok"
              style={{ width: `${(stats.ok / stats.total) * 100}%` }}
            />
          </div>
          <span>{stats.ok}</span>
        </div>
        <div className="stat-row">
          <span>😕 À retravailler</span>
          <div className="stat-bar">
            <div
              className="stat-fill poor"
              style={{ width: `${(stats.poor / stats.total) * 100}%` }}
            />
          </div>
          <span>{stats.poor}</span>
        </div>
      </div>

      <p className="stats-total">{stats.total} question(s) pratiquée(s)</p>

      <button type="button" className="clear-btn" onClick={onClear}>
        Réinitialiser la progression
      </button>
    </div>
  )
}
