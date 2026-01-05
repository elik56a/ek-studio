import { ImageResponse } from "next/og"

import { getToolBySlug } from "@/lib/tools/registry"

export const runtime = "edge"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get("slug")

  if (!slug) {
    return new Response("Missing slug parameter", { status: 400 })
  }

  const tool = getToolBySlug(slug)

  if (!tool) {
    return new Response("Tool not found", { status: 404 })
  }

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        fontSize: 32,
        fontWeight: 600,
      }}
    >
      <div style={{ marginBottom: 20, fontSize: 48 }}>🛠️</div>
      <div style={{ marginBottom: 20 }}>{tool.name}</div>
      <div
        style={{
          fontSize: 24,
          color: "#666",
          textAlign: "center",
          maxWidth: "80%",
        }}
      >
        {tool.description}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 40,
          fontSize: 20,
          color: "#999",
        }}
      >
        DevConverter.dev
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    }
  )
}
