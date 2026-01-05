import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

// Image generation
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #8b5cf6 0%, #0ea5e9 100%)',
          borderRadius: '36px',
        }}
      >
        <svg
          width="110"
          height="110"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Code2 icon */}
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
        {/* Zap accent */}
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="#0ea5e9"
          stroke="#0ea5e9"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            position: 'absolute',
            bottom: '15px',
            right: '15px',
            filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))',
          }}
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}
