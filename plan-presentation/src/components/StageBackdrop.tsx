/** Persistent scene atmosphere behind every slide. */
export function StageBackdrop() {
  return (
    <div className="stage-backdrop" aria-hidden="true">
      <div className="stage-vignette" />
      <div className="stage-glow stage-glow-a" />
      <div className="stage-glow stage-glow-b" />
      <div className="stage-noise" />
      <div className="stage-frame" />
    </div>
  )
}
