export function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="h-1 w-full bg-border/60">
      <div
        className="h-full bg-accent transition-[width] duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
