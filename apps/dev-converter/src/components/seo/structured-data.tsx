import { orgStructuredData, structuredData } from "@/lib/seo/metadata"
import { generateWebApplicationSchema } from "@/lib/seo/schema-generators"
import { Tool } from "@/lib/tools/types"

export function WebsiteStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function OrganizationStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(orgStructuredData) }}
    />
  )
}

interface ToolStructuredDataProps {
  tool: Tool
}

/**
 * Server component that renders enhanced WebApplication JSON-LD schema for tool pages
 * Includes isAccessibleForFree and featureList fields
 */
export function ToolStructuredData({ tool }: ToolStructuredDataProps) {
  const schema = generateWebApplicationSchema(tool)

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
