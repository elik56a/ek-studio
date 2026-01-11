import { getAllTools, getToolBySlug } from "@/lib/tools/registry"
import { Tool } from "@/lib/tools/types"

/**
 * Configuration for tool-to-blog bidirectional linking
 * Maps tool IDs to related blog post slugs
 */
export const toolToBlogMapping: Record<string, string[]> = {
  "base64-encode-decode": ["base64-encode-decode-guide"],
  "jwt-decoder": ["how-to-decode-jwt-token"],
  "json-to-yaml": ["json-to-yaml-converter-guide"],
  "hash-generator": ["hashing-vs-encryption"],
  // Add more mappings as blog posts are created
}

/**
 * Configuration for blog-to-tool bidirectional linking
 * Automatically generated from toolToBlogMapping
 */
export const blogToToolMapping: Record<string, string[]> = Object.entries(
  toolToBlogMapping
).reduce(
  (acc, [toolId, blogSlugs]) => {
    blogSlugs.forEach(blogSlug => {
      if (!acc[blogSlug]) {
        acc[blogSlug] = []
      }
      acc[blogSlug].push(toolId)
    })
    return acc
  },
  {} as Record<string, string[]>
)

/**
 * Extract keywords from a slug by splitting on hyphens and common separators
 */
function extractKeywords(slug: string): string[] {
  return slug
    .toLowerCase()
    .split(/[-_\s]+/)
    .filter(word => word.length > 2) // Filter out very short words
}

/**
 * Check if two sets of keywords have any overlap
 */
function hasKeywordOverlap(keywords1: string[], keywords2: string[]): boolean {
  const set1 = new Set(keywords1.map(k => k.toLowerCase()))
  return keywords2.some(k => set1.has(k.toLowerCase()))
}

/**
 * Get related tools for a given tool ID
 * Returns tools from the tool's relatedTools array
 */
export function getRelatedTools(toolId: string): Tool[] {
  const tool = getToolBySlug(toolId)
  if (!tool || !tool.relatedTools) {
    return []
  }

  return tool.relatedTools
    .map(relatedId => getToolBySlug(relatedId))
    .filter((t): t is Tool => t !== null)
}

/**
 * Get related blog post slugs for a given tool ID
 * Uses fuzzy matching based on keyword overlap between tool keywords and blog slugs
 */
export function getRelatedBlogs(toolId: string): string[] {
  // First check exact mapping
  const exactMatches = toolToBlogMapping[toolId] || []

  // If we have exact matches, return them
  if (exactMatches.length > 0) {
    return exactMatches
  }

  // Otherwise, use fuzzy matching based on keywords
  const tool = getToolBySlug(toolId)
  if (!tool) {
    return []
  }

  const toolKeywords = [
    ...tool.keywords,
    ...extractKeywords(tool.slug),
    ...extractKeywords(tool.id),
  ]

  // Get all blog slugs from the mapping and check for keyword overlap
  const allBlogSlugs = Object.keys(blogToToolMapping)

  const matchedBlogs = allBlogSlugs.filter(blogSlug => {
    const blogKeywords = extractKeywords(blogSlug)
    return hasKeywordOverlap(toolKeywords, blogKeywords)
  })

  return matchedBlogs
}

/**
 * Get related tool IDs for a given blog post slug
 * Uses fuzzy matching based on keyword overlap between blog slug and tool keywords
 */
export function getRelatedToolsForBlog(blogSlug: string): string[] {
  // First check exact mapping
  const exactMatches = blogToToolMapping[blogSlug] || []

  // If we have exact matches, return them
  if (exactMatches.length > 0) {
    return exactMatches
  }

  // Otherwise, use fuzzy matching based on keywords
  const blogKeywords = extractKeywords(blogSlug)
  const allTools = getAllTools()

  const matchedTools = allTools
    .filter(tool => {
      // Check if tool keywords overlap with blog slug keywords
      const toolKeywords = [
        ...tool.keywords,
        ...extractKeywords(tool.slug),
        ...extractKeywords(tool.id),
      ]
      return hasKeywordOverlap(blogKeywords, toolKeywords)
    })
    .map(tool => tool.id)

  return matchedTools
}

/**
 * Generate descriptive anchor text for internal links
 * Optimized for SEO with keyword-rich text
 */
export function generateAnchorText(
  tool: Tool,
  context: "sidebar" | "content" | "faq" = "content"
): string {
  const templates = {
    sidebar: tool.name,
    content: `Learn more about ${tool.name}`,
    faq: `our ${tool.name} tool`,
  }

  return templates[context] || tool.name
}

/**
 * Generate anchor text for blog links
 */
export function generateBlogAnchorText(
  blogTitle: string,
  context: "tool" | "related" = "tool"
): string {
  const templates = {
    tool: `Read: ${blogTitle}`,
    related: blogTitle,
  }

  return templates[context] || blogTitle
}

/**
 * Validate bidirectional mapping consistency
 * Returns array of inconsistencies found
 */
export function validateBidirectionalMapping(): string[] {
  const issues: string[] = []

  // Check that all blog-to-tool mappings have corresponding tool-to-blog mappings
  Object.entries(blogToToolMapping).forEach(([blogSlug, toolIds]) => {
    toolIds.forEach(toolId => {
      const blogSlugs = toolToBlogMapping[toolId]
      if (!blogSlugs || !blogSlugs.includes(blogSlug)) {
        issues.push(
          `Blog "${blogSlug}" links to tool "${toolId}", but tool doesn't link back`
        )
      }
    })
  })

  return issues
}
