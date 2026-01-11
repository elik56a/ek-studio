import { Tool, ToolFAQ } from "@/lib/tools/types"
import { siteConfig } from "@/config/site"

/**
 * Sanitizes text for use in JSON-LD schemas by removing HTML entities and tags
 */
function sanitizeText(text: string): string {
  // Remove HTML tags
  let sanitized = text.replace(/<[^>]*>/g, "")
  
  // Decode common HTML entities
  sanitized = sanitized
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
  
  // Trim whitespace
  return sanitized.trim()
}

/**
 * Ensures a URL is absolute by prepending the site URL if needed
 */
function ensureAbsoluteUrl(url: string): string {
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url
  }
  
  // Remove leading slash if present to avoid double slashes
  const cleanUrl = url.startsWith("/") ? url.slice(1) : url
  return `${siteConfig.url}/${cleanUrl}`
}

/**
 * Generates enhanced WebApplication schema with isAccessibleForFree and featureList
 */
export function generateWebApplicationSchema(tool: Tool) {
  const url = ensureAbsoluteUrl(`/${tool.slug}`)
  const imageUrl = ensureAbsoluteUrl("/opengraph-image.png")
  
  // Use tool.info.description if available, otherwise fall back to tool.description
  const description = tool.info?.description || tool.description
  
  const schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": url,
    name: tool.name,
    description: sanitizeText(description),
    url,
    image: imageUrl,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    inLanguage: "en",
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    creator: {
      "@type": "Organization",
      name: "DevConverter",
      url: siteConfig.url,
    },
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    permissions: "No special permissions required",
  }
  
  // Add featureList if tool.info.features exists
  if (tool.info?.features && tool.info.features.length > 0) {
    schema.featureList = tool.info.features.map(sanitizeText)
  }
  
  return schema
}

/**
 * Generates BreadcrumbList schema for navigation hierarchy
 */
export function generateBreadcrumbListSchema(
  breadcrumbs: Array<{ name: string; url?: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => {
      const item: Record<string, any> = {
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
      }
      
      // Only add item URL if it's not the last breadcrumb
      if (crumb.url && index < breadcrumbs.length - 1) {
        item.item = ensureAbsoluteUrl(crumb.url)
      }
      
      return item
    }),
  }
}

/**
 * Generates FAQPage schema with text sanitization
 */
export function generateFAQPageSchema(faqs: ToolFAQ[]) {
  // Don't generate schema if there are no FAQs
  if (!faqs || faqs.length === 0) {
    return null
  }
  
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: sanitizeText(faq.question),
      acceptedAnswer: {
        "@type": "Answer",
        text: sanitizeText(faq.answer),
      },
    })),
  }
}
