/** Full-bleed atmospheric plane for the hero — editor-like geometry, not a card. */
export function HeroAtmosphere() {
  return (
    <div className="hero-atmosphere" aria-hidden="true">
      <div className="atm-wash atm-wash-a" />
      <div className="atm-wash atm-wash-b" />
      <div className="atm-grid" />
      <div className="atm-panel">
        <div className="atm-chrome">
          <span />
          <span />
          <span />
        </div>
        <div className="atm-lines">
          <div className="atm-line w-80" />
          <div className="atm-line w-55" />
          <div className="atm-line w-70 accent" />
          <div className="atm-line w-40" />
          <div className="atm-line w-65" />
          <div className="atm-line w-50 accent soft" />
          <div className="atm-line w-75" />
          <div className="atm-cursor" />
        </div>
      </div>
      <div className="atm-orb" />
    </div>
  )
}
