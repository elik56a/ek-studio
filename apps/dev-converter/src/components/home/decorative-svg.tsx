export function CodePatternSVG() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.02]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="code-pattern"
          x="0"
          y="0"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          <text
            x="10"
            y="20"
            fontSize="12"
            fill="currentColor"
            fontFamily="monospace"
          >
            {"{ }"}
          </text>
          <text
            x="50"
            y="40"
            fontSize="12"
            fill="currentColor"
            fontFamily="monospace"
          >
            {"< />"}
          </text>
          <text
            x="20"
            y="60"
            fontSize="12"
            fill="currentColor"
            fontFamily="monospace"
          >
            {"[ ]"}
          </text>
          <text
            x="60"
            y="80"
            fontSize="12"
            fill="currentColor"
            fontFamily="monospace"
          >
            {"=>"}
          </text>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#code-pattern)" />
    </svg>
  )
}

export function GridPatternSVG() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.02] dark:opacity-[0.015]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="grid-pattern"
          x="0"
          y="0"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
    </svg>
  )
}

export function DotsPatternSVG() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.02]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="dots-pattern"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="1" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots-pattern)" />
    </svg>
  )
}
