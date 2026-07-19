export function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="no-print h-0.5 w-full bg-white/5">
      <div
        className="h-full bg-gradient-to-r from-accent to-accent-soft transition-[width] duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
