import { ImageResponse } from "next/og"

// Image metadata
export const alt = "DevConverter - Free Online Developer Tools"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

// Image generation
export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #8b5cf6 0%, #0ea5e9 100%)",
        padding: "80px",
      }}
    >
      {/* Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "24px",
            background: "rgba(255, 255, 255, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(10px)",
          }}
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span
            style={{
              fontSize: "80px",
              fontWeight: "bold",
              color: "white",
              lineHeight: 1,
            }}
          >
            DevConverter
          </span>
          <span
            style={{
              fontSize: "32px",
              color: "rgba(255, 255, 255, 0.9)",
              marginTop: "8px",
            }}
          >
            Free Online Developer Tools
          </span>
        </div>
      </div>

      {/* Description */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          maxWidth: "900px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "36px",
            color: "rgba(255, 255, 255, 0.95)",
            margin: 0,
            lineHeight: 1.4,
          }}
        >
          Fast, secure, client-side processing for JSON, Base64, JWT, and more
        </p>
        <div
          style={{
            display: "flex",
            gap: "32px",
            marginTop: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontSize: "48px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              20+
            </span>
            <span
              style={{
                fontSize: "20px",
                color: "rgba(255, 255, 255, 0.8)",
              }}
            >
              Tools
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontSize: "48px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              100%
            </span>
            <span
              style={{
                fontSize: "20px",
                color: "rgba(255, 255, 255, 0.8)",
              }}
            >
              Private
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontSize: "48px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              0ms
            </span>
            <span
              style={{
                fontSize: "20px",
                color: "rgba(255, 255, 255, 0.8)",
              }}
            >
              Server Delay
            </span>
          </div>
        </div>
      </div>
    </div>,
    {
      ...size,
    }
  )
}
