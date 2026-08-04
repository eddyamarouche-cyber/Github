export function StageBackdrop() {
  return (
    <div className="stage-backdrop" aria-hidden="true">
      <div className="stage-wash" />
      <div className="stage-sun" />
      <div className="stage-ray stage-ray-a" />
      <div className="stage-ray stage-ray-b" />
      <svg className="stage-hills" viewBox="0 0 1440 420" preserveAspectRatio="none">
        <path
          className="hill-far"
          d="M0 260C180 210 320 190 480 220C680 260 820 180 980 200C1140 220 1280 170 1440 190V420H0V260Z"
        />
        <path
          className="hill-near"
          d="M0 300C220 250 380 280 540 260C740 230 880 300 1060 280C1220 260 1320 230 1440 250V420H0V300Z"
        />
      </svg>
      <div className="stage-mist" />
      <div className="stage-grain" />
      <div className="stage-frame" />
    </div>
  )
}
