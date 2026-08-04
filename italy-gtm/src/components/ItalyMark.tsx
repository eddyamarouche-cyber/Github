/** Stylized Italian peninsula silhouette — decorative visual anchor. */
export function ItalyMark() {
  return (
    <svg
      className="italy-mark"
      viewBox="0 0 200 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="italyFill" x1="40" y1="20" x2="160" y2="260" gradientUnits="userSpaceOnUse">
          <stop stopColor="currentColor" stopOpacity="0.14" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      {/* Mainland boot */}
      <path
        className="italy-mark-fill"
        d="M92 18C108 22 124 34 132 52C140 72 136 92 128 112C122 128 126 146 136 160C148 178 152 200 142 220C134 236 118 246 100 254C88 260 82 272 86 286"
        fill="none"
      />
      <path
        className="italy-mark-path"
        d="M78 22C96 18 118 28 128 48C136 64 134 84 124 102C116 116 118 134 128 148C142 168 150 194 138 218C128 236 106 246 88 252C78 256 72 268 78 280M78 22C70 34 64 52 68 72C72 94 66 114 54 128C42 144 38 168 48 188C56 204 72 214 88 220"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Sicily */}
      <ellipse
        className="italy-mark-island"
        cx="72"
        cy="262"
        rx="18"
        ry="10"
        stroke="currentColor"
        strokeWidth="2.4"
        fill="url(#italyFill)"
      />
      {/* Sardinia */}
      <ellipse
        className="italy-mark-island delay"
        cx="42"
        cy="168"
        rx="10"
        ry="16"
        stroke="currentColor"
        strokeWidth="2.2"
        fill="url(#italyFill)"
      />
      {/* Priority city dots: Milan, Rome, Naples */}
      <circle className="italy-mark-dot" cx="98" cy="58" r="4.5" fill="currentColor" />
      <circle className="italy-mark-dot delay" cx="92" cy="148" r="4" fill="currentColor" />
      <circle className="italy-mark-dot delay-2" cx="108" cy="188" r="3.5" fill="currentColor" />
      <path
        className="italy-mark-fill-shape"
        d="M86 28C102 24 120 34 126 52C132 70 126 90 114 106C106 118 108 136 118 150C130 168 136 192 124 212C114 228 94 236 78 240C70 218 62 196 68 176C74 156 66 138 54 126C46 116 44 100 50 84C56 66 68 44 86 28Z"
        fill="url(#italyFill)"
      />
    </svg>
  )
}
