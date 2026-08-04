/** Soft silhouette mark suggesting the Italian peninsula — decorative, not a map. */
export function ItalyMark() {
  return (
    <svg
      className="italy-mark"
      viewBox="0 0 160 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        className="italy-mark-path"
        d="M78 12c18 8 34 22 38 44 3 18-2 34-8 50-5 14-4 28 2 40 7 14 8 30 2 44-5 12-16 22-28 28-10 5-18 14-18 26 0 8 4 14 4 22-12-4-22-14-26-26-5-14-2-28 4-40 5-11 4-24-2-34-8-14-14-30-10-46 4-18 18-32 34-40 4-2 6-6 8-8z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <circle className="italy-mark-dot" cx="96" cy="48" r="4" fill="currentColor" />
      <circle className="italy-mark-dot delay" cx="70" cy="118" r="3.5" fill="currentColor" />
      <circle className="italy-mark-dot delay-2" cx="82" cy="168" r="3" fill="currentColor" />
    </svg>
  )
}
