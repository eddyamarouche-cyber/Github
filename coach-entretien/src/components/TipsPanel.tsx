import { interviewTips } from '../data/questions'

export function TipsPanel() {
  return (
    <div className="tips-panel">
      <h2>📚 Conseils pour réussir</h2>
      <div className="tips-grid">
        {interviewTips.map((tip, i) => (
          <div key={i} className="tip-card">
            <h3>{tip.title}</h3>
            <p>{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
