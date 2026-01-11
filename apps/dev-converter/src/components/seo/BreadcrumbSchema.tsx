import { generateBreadcrumbListSchema } from "@/lib/seo/schema-generators"

interface BreadcrumbSchemaProps {
  breadcrumbs: Array<{ name: string; url?: string }>
}

/**
 * Server component that renders BreadcrumbList JSON-LD schema
 */
export function BreadcrumbSchema({ breadcrumbs }: BreadcrumbSchemaProps) {
  const schema = generateBreadcrumbListSchema(breadcrumbs)

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
