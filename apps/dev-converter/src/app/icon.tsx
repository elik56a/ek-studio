import { ImageResponse } from "next/og"

// Image metadata - 512x512 for PWA
export const size = {
  width: 512,
  height: 512,
}
export const contentType = "image/png"

// Image generation
export default function Icon512() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 320,
          background: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          borderRadius: "20%",
        }}
      >
        <svg
          width="320"
          height="320"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}