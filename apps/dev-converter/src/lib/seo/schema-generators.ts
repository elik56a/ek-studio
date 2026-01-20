import { siteConfig } from "@/config/site"
import { Tool, ToolFAQ } from "@/lib/tools/types"

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
 * Handles both relative paths (/about) and already absolute URLs
 */
function ensureAbsoluteUrl(url: string): string {
  const trimmed = (url || "").trim()

  // Strip leading slashes so "/https://..." becomes "https://..."
  const noLeadingSlash = trimmed.replace(/^\/+/, "")

  // If it's already absolute (even if it originally had a leading slash) – return as-is
  if (
    noLeadingSlash.startsWith("http://") ||
    noLeadingSlash.startsWith("https://")
  ) {
    return noLeadingSlash
  }

  // Ensure base URL doesn't have trailing slash
  const baseUrl = siteConfig.url.endsWith("/")
    ? siteConfig.url.slice(0, -1)
    : siteConfig.url

  // Ensure path doesn't have leading slash
  const cleanPath = trimmed.startsWith("/") ? trimmed.slice(1) : trimmed

  return `${baseUrl}/${cleanPath}`
}

/**
 * Generates enhanced WebApplication schema with isAccessibleForFree and featureList
 */
export function generateWebApplicationSchema(tool: Tool) {
  const url = ensureAbsoluteUrl(`/${tool.slug}`)
  const imageUrl = ensureAbsoluteUrl("/opengraph-image.png")

  // Use fragment identifier for stable @id
  const schemaId = `${url}#webapp`

  // Use tool.info.description if available, otherwise fall back to tool.description
  const description = tool.info?.description || tool.description

  const schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": schemaId,
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
 * Generates FAQ questions schema (mainEntity for FAQPage)
 * This generates just the questions array, not the full page schema
 * Use this within a FAQPage or as part of another page type
 */
export function generateFAQQuestionsSchema(faqs: ToolFAQ[], baseUrl?: string) {
  // Don't generate schema if there are no FAQs
  if (!faqs || faqs.length === 0) {
    return null
  }

  return faqs.map((faq, index) => {
    const question: Record<string, any> = {
      "@type": "Question",
      name: sanitizeText(faq.question),
      acceptedAnswer: {
        "@type": "Answer",
        text: sanitizeText(faq.answer),
      },
    }

    // Add IDs if baseUrl is provided
    if (baseUrl) {
      question["@id"] = `${baseUrl}#faq-question-${index}`
      question.acceptedAnswer["@id"] = `${baseUrl}#faq-answer-${index}`
    }

    return question
  })
}

/**
 * Parameters for generating collection page schema
 */
export interface CollectionPageSchemaParams {
  /** Collection title */
  title: string
  /** Collection description */
  description: string
  /** Page URL path (e.g., "/blog", "/blog/tag/javascript") */
  url: string
  /** Number of items in the collection */
  numberOfItems?: number
  /** Optional: Additional keywords */
  keywords?: string[]
}

/**
 * Generates CollectionPage schema for listing pages (blog, tags, categories)
 * Used for pages that display a collection of items
 *
 * @example
 * const schema = generateCollectionPageSchema({
 *   title: "JavaScript Posts",
 *   description: "All posts tagged with JavaScript",
 *   url: "/blog/tag/javascript",
 *   numberOfItems: 12,
 * })
 */
export function generateCollectionPageSchema(
  params: CollectionPageSchemaParams
) {
  const { title, description, url, numberOfItems, keywords } = params

  const absoluteUrl = ensureAbsoluteUrl(url)
  const schemaId = `${absoluteUrl}#collection`
  const imageUrl = ensureAbsoluteUrl("/opengraph-image.png")

  const schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": schemaId,
    name: sanitizeText(title),
    description: sanitizeText(description),
    url: absoluteUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl,
    },
    image: imageUrl,
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      "@id": siteConfig.url,
      name: "DevConverter",
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: "DevConverter",
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: imageUrl,
      },
    },
  }

  // Add number of items if provided
  if (numberOfItems !== undefined) {
    schema.numberOfItems = numberOfItems
  }

  // Add keywords if provided
  if (keywords && keywords.length > 0) {
    schema.keywords = keywords.join(", ")
  }

  return schema
}

/**
 * Parameters for generating static page schema
 */
export interface StaticPageSchemaParams {
  /** Page title */
  title: string
  /** Page description */
  description: string
  /** Page URL path (e.g., "/about", "/terms") */
  url: string
  /**
   * Schema.org type for the page
   * - "AboutPage" for about pages
   * - "ContactPage" for contact pages
   * - "FAQPage" for FAQ pages (use generateFAQPageSchema instead)
   * - "WebPage" for generic pages (default)
   */
  type?: "AboutPage" | "ContactPage" | "FAQPage" | "WebPage"
  /** Optional: Date the page was published */
  datePublished?: string
  /** Optional: Date the page was last modified */
  dateModified?: string
  /** Optional: Additional keywords for the page */
  keywords?: string[]
}

/**
 * Generates WebPage schema for static pages (About, Terms, Contact, etc.)
 * This is a generic function that can be used for any informational page
 *
 * @example
 * // Basic usage for an About page
 * const schema = generateStaticPageSchema({
 *   title: "About Us - DevConverter",
 *   description: "Learn about our mission and values",
 *   url: "/about",
 * })
 *
 * @example
 * // With breadcrumbs and keywords
 * const schema = generateStaticPageSchema({
 *   title: "Terms of Service",
 *   description: "Read our terms and conditions",
 *   url: "/terms",
 *   breadcrumbs: [
 *     { name: "Home", url: "/" },
 *     { name: "Terms" },
 *   ],
 *   keywords: ["terms", "legal", "conditions"],
 * })
 *
 * @example
 * // With dates for content freshness
 * const schema = generateStaticPageSchema({
 *   title: "Privacy Policy",
 *   description: "How we protect your data",
 *   url: "/privacy",
 *   datePublished: "2024-01-01",
 *   dateModified: "2024-06-15",
 * })
 */
export function generateStaticPageSchema(params: StaticPageSchemaParams) {
  const {
    title,
    description,
    url,
    type = "WebPage",
    datePublished,
    dateModified,
    keywords,
  } = params

  const absoluteUrl = ensureAbsoluteUrl(url)
  const imageUrl = ensureAbsoluteUrl("/opengraph-image.png")

  // Use fragment identifier for stable @id (best practice)
  const schemaId = `${absoluteUrl}#webpage`

  const schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": type,
    "@id": schemaId,
    name: sanitizeText(title),
    description: sanitizeText(description),
    url: absoluteUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl,
    },
    image: imageUrl,
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      "@id": siteConfig.url,
      name: "DevConverter",
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: "DevConverter",
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: imageUrl,
      },
    },
  }

  // Add optional dates
  if (datePublished) {
    schema.datePublished = datePublished
  }

  if (dateModified) {
    schema.dateModified = dateModified
  }

  // Add keywords if provided
  if (keywords && keywords.length > 0) {
    schema.keywords = keywords.join(", ")
  }

  return schema
}
