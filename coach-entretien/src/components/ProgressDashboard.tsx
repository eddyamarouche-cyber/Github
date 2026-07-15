import { useI18n } from '../i18n/context'

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
  const { t, format } = useI18n()

  if (stats.total === 0) {
    return (
      <div className="progress-empty">
        <p>{t.progress.empty}</p>
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
      <h2>📊 {t.progress.title}</h2>

      <div className="score-circle">
        <span className="score-value">{score}%</span>
        <span className="score-label">{t.progress.scoreLabel}</span>
      </div>

      <div className="stats-bars">
        <div className="stat-row">
          <span>🌟 {t.ratings.excellent}</span>
          <div className="stat-bar">
            <div
              className="stat-fill excellent"
              style={{ width: `${(stats.excellent / stats.total) * 100}%` }}
            />
          </div>
          <span>{stats.excellent}</span>
        </div>
        <div className="stat-row">
          <span>🙂 {t.ratings.good}</span>
          <div className="stat-bar">
            <div
              className="stat-fill good"
              style={{ width: `${(stats.good / stats.total) * 100}%` }}
            />
          </div>
          <span>{stats.good}</span>
        </div>
        <div className="stat-row">
          <span>😐 {t.ratings.ok}</span>
          <div className="stat-bar">
            <div
              className="stat-fill ok"
              style={{ width: `${(stats.ok / stats.total) * 100}%` }}
            />
          </div>
          <span>{stats.ok}</span>
        </div>
        <div className="stat-row">
          <span>😕 {t.ratings.poor}</span>
          <div className="stat-bar">
            <div
              className="stat-fill poor"
              style={{ width: `${(stats.poor / stats.total) * 100}%` }}
            />
          </div>
          <span>{stats.poor}</span>
        </div>
      </div>

      <p className="stats-total">{format(t.progress.practiced, { count: stats.total })}</p>

      <button type="button" className="clear-btn" onClick={onClear}>
        {t.progress.clear}
      </button>
    </div>
  )
}
