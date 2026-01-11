import { ImageResponse } from "next/og"

// Image metadata
export const alt = "DevConverter - Free Online Developer Tools"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"
export const runtime = "edge"

// Image generation
export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f0f23 0%, #1a1a3e 100%)",
          padding: "60px",
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: 120,
            height: 120,
            background: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
            borderRadius: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
          >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            background: "linear-gradient(90deg, #8b5cf6 0%, #3b82f6 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            marginBottom: 20,
          }}
        >
          DevConverter
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 32,
            color: "rgba(255, 255, 255, 0.8)",
            fontWeight: 600,
            marginBottom: 40,
          }}
        >
          Free Online Developer Tools
        </div>

        {/* Features */}
        <div
          style={{
            display: "flex",
            gap: 40,
            fontSize: 20,
            color: "rgba(255, 255, 255, 0.6)",
            marginBottom: 50,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#8b5cf6",
              }}
            />
            Lightning Fast
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#3b82f6",
              }}
            />
            100% Private
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#8b5cf6",
              }}
            />
            Always Free
          </div>
        </div>

        {/* Call to Action */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
            padding: "20px 50px",
            borderRadius: 12,
            fontSize: 28,
            fontWeight: 700,
            color: "white",
            boxShadow: "0 10px 40px rgba(139, 92, 246, 0.3)",
          }}
        >
          Try Tools Now →
        </div>

        {/* Domain */}
        <div
          style={{
            fontSize: 18,
            color: "rgba(255, 255, 255, 0.4)",
            marginTop: 30,
          }}
        >
          devconverter.dev
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
