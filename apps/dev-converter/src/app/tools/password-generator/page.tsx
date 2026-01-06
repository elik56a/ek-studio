import { Metadata } from "next"
import dynamic from "next/dynamic"

import { getToolBySlug } from "@/lib/tools/registry"

const PasswordGeneratorTool = dynamic(
  () => import("@/components/tools/password-generator"),
  { ssr: false }
)

export async function generateMetadata(): Promise<Metadata> {
  const tool = getToolBySlug("password-generator")

  if (!tool) {
    return {
      title: "Tool Not Found",
    }
  }

  return {
    title: tool.metadata.title,
    description: tool.metadata.description,
    keywords: tool.metadata.keywords,
    openGraph: {
      title: tool.metadata.title,
      description: tool.metadata.description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: tool.metadata.title,
      description: tool.metadata.description,
    },
  }
}

export default function PasswordGeneratorPage() {
  return <PasswordGeneratorTool />
}
