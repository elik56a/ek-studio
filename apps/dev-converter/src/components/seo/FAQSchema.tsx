import { generateFAQPageSchema } from "@/lib/seo/schema-generators"
import { ToolFAQ } from "@/lib/tools/types"

interface FAQSchemaProps {
  faqs: ToolFAQ[]
}

/**
 * Server component that renders FAQPage JSON-LD schema
 * Only renders if FAQs are provided
 */
export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = generateFAQPageSchema(faqs)

  // Don't render if no schema generated (empty FAQs)
  if (!schema) {
    return null
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
