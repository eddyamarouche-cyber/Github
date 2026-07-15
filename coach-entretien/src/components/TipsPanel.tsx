import { interviewTips } from '../data/questions'
import {
  meddicIntro,
  meddicPillars,
  meddicInterviewScenarios,
} from '../data/meddic'

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

      <section className="meddic-section">
        <div className="meddic-header">
          <h2>🎯 {meddicIntro.title}</h2>
          <span className="meddic-badge">{meddicIntro.subtitle}</span>
        </div>
        <p className="meddic-description">{meddicIntro.description}</p>
        <p className="meddic-when">{meddicIntro.whenToUse}</p>

        <div className="meddic-pillars">
          {meddicPillars.map((pillar) => (
            <div key={pillar.name} className="meddic-card">
              <div className="meddic-letter">{pillar.letter}</div>
              <div className="meddic-content">
                <h3>{pillar.name}</h3>
                <p className="meddic-desc">{pillar.description}</p>
                <div className="meddic-tip">
                  <strong>💡 En entretien :</strong> {pillar.interviewTip}
                </div>
                <div className="meddic-example">
                  <strong>Exemple Cursor :</strong> {pillar.cursorExample}
                </div>
                <details className="meddic-questions">
                  <summary>Questions de découverte</summary>
                  <ul>
                    {pillar.exampleQuestions.map((q, i) => (
                      <li key={i}>{q}</li>
                    ))}
                  </ul>
                </details>
              </div>
            </div>
          ))}
        </div>

        <div className="meddic-scenarios">
          <h3>Scénarios d'entretien avec MEDDIC</h3>
          <div className="scenarios-grid">
            {meddicInterviewScenarios.map((scenario, i) => (
              <div key={i} className="scenario-card">
                <h4>{scenario.title}</h4>
                <p>{scenario.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
