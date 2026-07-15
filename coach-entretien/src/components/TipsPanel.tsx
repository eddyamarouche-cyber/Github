import { useI18n } from '../i18n/context'

export function TipsPanel() {
  const { t } = useI18n()
  const { meddic } = t.tips

  return (
    <div className="tips-panel">
      <h2>📚 {t.tips.title}</h2>
      <div className="tips-grid">
        {t.tips.items.map((tip, i) => (
          <div key={i} className="tip-card">
            <h3>{tip.title}</h3>
            <p>{tip.description}</p>
          </div>
        ))}
      </div>

      <section className="meddic-section">
        <div className="meddic-header">
          <h2>🎯 {meddic.title}</h2>
          <span className="meddic-badge">{meddic.subtitle}</span>
        </div>
        <p className="meddic-description">{meddic.description}</p>
        <p className="meddic-when">{meddic.whenToUse}</p>

        <div className="meddic-pillars">
          {meddic.pillars.map((pillar) => (
            <div key={pillar.name} className="meddic-card">
              <div className="meddic-letter">{pillar.letter}</div>
              <div className="meddic-content">
                <h3>{pillar.name}</h3>
                <p className="meddic-desc">{pillar.description}</p>
                <div className="meddic-tip">
                  <strong>{meddic.interviewLabel}</strong> {pillar.interviewTip}
                </div>
                <div className="meddic-example">
                  <strong>{meddic.cursorExampleLabel}</strong> {pillar.cursorExample}
                </div>
                <details className="meddic-questions">
                  <summary>{meddic.discoveryQuestions}</summary>
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
          <h3>{meddic.scenariosTitle}</h3>
          <div className="scenarios-grid">
            {meddic.scenarios.map((scenario, i) => (
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
