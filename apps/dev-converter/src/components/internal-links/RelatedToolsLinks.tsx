import Link from "next/link"

import { generateAnchorText } from "@/lib/seo/internal-linking"
import { getToolBySlug } from "@/lib/tools/registry"

interface RelatedToolsLinksProps {
  toolIds: string[]
  context?: "sidebar" | "content" | "faq"
  className?: string
}

/**
 * Component for rendering internal links to related tools
 * Optimized for SEO with descriptive anchor text
 */
export function RelatedToolsLinks({
  toolIds,
  context = "content",
  className = "",
}: RelatedToolsLinksProps) {
  if (!toolIds || toolIds.length === 0) {
    return null
  }

  const tools = toolIds
    .map(id => getToolBySlug(id))
    .filter((tool): tool is NonNullable<typeof tool> => tool !== null)

  if (tools.length === 0) {
    return null
  }

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {tools.map(tool => (
        <Link
          key={tool.id}
          href={`/${tool.slug}`}
          className="inline-flex items-center px-4 py-2 rounded-md bg-muted hover:bg-muted/80 transition-colors text-sm font-medium"
        >
          {generateAnchorText(tool, context)}
        </Link>
      ))}
    </div>
  )
}
