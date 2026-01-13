import type { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { Tool } from "@/lib/tools/types"

const SITE_URL = siteConfig.url
const OG_IMAGE = `${SITE_URL}/opengraph-image.png`

/**
 * Extracts the primary keyword from the tool name
 * Example: "Base64 Encoder & Decoder" -> "Base64"
 */
function extractPrimaryKeyword(toolName: string): string {
  // Take the first significant word (usually the primary keyword)
  const words = toolName.split(/[\s&-]+/)
  return words[0] || toolName
}

/**
 * Optimizes title for SERP CTR by adding CTR-optimizing terms
 * and placing primary keywords early
 */
function optimizeTitle(tool: Tool): string {
  const primaryKeyword = extractPrimaryKeyword(tool.name)

  // Check if title already has CTR-optimizing terms
  const ctrTerms = ["Free", "Online", "Instant", "No Signup", "Fast", "Easy"]
  const hasOptimizingTerm = ctrTerms.some(term =>
    tool.metadata.title.includes(term)
  )

  if (hasOptimizingTerm) {
    // Title already optimized, ensure canonical URL format
    return tool.metadata.title
  }

  // Add CTR-optimizing terms: "Free Online" for most tools
  return `${tool.name} - Free Online ${primaryKeyword} Tool | DevConverter`
}

/**
 * Optimizes description for SERP CTR by adding benefit-focused language
 */
function optimizeDescription(tool: Tool): string {
  // Prefer metadata.description over info.description for CTR optimization check
  const metadataDescription = tool.metadata.description

  // Check if metadata description already has CTR-optimizing terms
  const ctrTerms = ["Free", "online", "Instant", "no signup", "Fast", "Easy"]
  const hasOptimizingTerm = ctrTerms.some(term =>
    metadataDescription.toLowerCase().includes(term.toLowerCase())
  )

  if (hasOptimizingTerm) {
    return metadataDescription
  }

  // Add CTR-optimizing prefix if not present
  return `Free online ${tool.name.toLowerCase()} - ${metadataDescription} Instant results, no signup required.`
}

export function generateToolMetadata(tool: Tool): Metadata {
  const url = `${SITE_URL}/${tool.slug}`
  const optimizedTitle = optimizeTitle(tool)
  const optimizedDescription = optimizeDescription(tool)

  // Use absolute URL for images (metadataBase handles this, but being explicit)
  const ogImageUrl = OG_IMAGE

  return {
    title: optimizedTitle,
    description: optimizedDescription,
    keywords: tool.metadata.keywords,
    applicationName: "DevConverter",
    authors: [{ name: "DevConverter" }],
    creator: "DevConverter",
    publisher: "DevConverter",
    category: "Developer Tools",
    alternates: {
      canonical: url,
      languages: {
        "en": url,
        "x-default": url,
      },
    },
    openGraph: {
      title: optimizedTitle,
      description: optimizedDescription,
      type: "website",
      siteName: "DevConverter",
      url,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: optimizedTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: optimizedTitle,
      description: optimizedDescription,
      images: [ogImageUrl],
      creator: "@devconverter",
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export function generateCategoryMetadata(
  categoryName: string,
  categoryDescription: string,
  categoryId: string,
  toolCount?: number
): Metadata {
  const url = `${SITE_URL}/categories/${categoryId}`

  // Optimize title with CTR terms
  const optimizedTitle = `${categoryName} Tools - Free Online Developer Tools | DevConverter`

  // Optimize description with tool count and benefits
  const toolCountText = toolCount ? `${toolCount} free ` : "Free "
  const optimizedDescription = `${toolCountText}online ${categoryName.toLowerCase()} tools for developers. ${categoryDescription} Instant results, no signup required.`

  // Use absolute URL for images
  const ogImageUrl = OG_IMAGE

  return {
    title: optimizedTitle,
    description: optimizedDescription,
    applicationName: "DevConverter",
    authors: [{ name: "DevConverter" }],
    creator: "DevConverter",
    publisher: "DevConverter",
    category: "Developer Tools",
    alternates: {
      canonical: url,
      languages: {
        "en": url,
        "x-default": url,
      },
    },
    openGraph: {
      title: optimizedTitle,
      description: optimizedDescription,
      type: "website",
      siteName: "DevConverter",
      url,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: optimizedTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: optimizedTitle,
      description: optimizedDescription,
      images: [ogImageUrl],
      creator: "@devconverter",
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

/**
 * Parameters for generating static page metadata
 */
export interface StaticPageMetadataParams {
  /** Page title (will be appended with "| DevConverter") */
  title: string
  /** Page description for meta tags and social sharing */
  description: string
  /** Page URL path (e.g., "/about", "/terms") */
  url: string
  /** Optional: Additional keywords for the page */
  keywords?: string[]
  /** Optional: Whether to index the page (default: true) */
  index?: boolean
  /** Optional: Whether to follow links on the page (default: true) */
  follow?: boolean
}

/**
 * Generates complete metadata for static pages (About, Terms, Contact, Privacy, etc.)
 * Includes canonical URL, robots directives, and social sharing tags
 *
 * @example
 * export const metadata = generateStaticPageMetadata({
 *   title: "About Us",
 *   description: "Learn about DevConverter and our mission",
 *   url: "/about",
 * })
 */
export function generateStaticPageMetadata(
  params: StaticPageMetadataParams
): Metadata {
  const {
    title,
    description,
    url,
    keywords,
    index = true,
    follow = true,
  } = params

  const fullUrl = `${SITE_URL}${url}`
  const fullTitle = `${title} | DevConverter`
  const ogImageUrl = OG_IMAGE

  return {
    title: fullTitle,
    description,
    keywords,
    applicationName: "DevConverter",
    authors: [{ name: "DevConverter" }],
    creator: "DevConverter",
    publisher: "DevConverter",
    category: "Developer Tools",
    alternates: {
      canonical: fullUrl,
      languages: {
        "en": fullUrl,
        "x-default": fullUrl,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      type: "website",
      siteName: "DevConverter",
      url: fullUrl,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImageUrl],
      creator: "@devconverter",
    },
    robots: {
      index,
      follow,
    },
  }
}

export function generateStructuredData(tool: Tool) {
  const url = `${SITE_URL}/${tool.slug}`

  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${url}#webapp`,
    name: tool.name,
    description: tool.description,
    url,
    image: OG_IMAGE,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      name: "DevConverter",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}#organization`,
      name: "DevConverter",
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    creator: {
      "@type": "Organization",
      name: "DevConverter",
      url: SITE_URL,
    },
  }
}

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "@id": `${SITE_URL}#webapp`,
  name: "DevConverter",
  alternateName: "DevConverter - Free Online Developer Tools",
  description:
    "Free online tools for developers: JSON formatter, Base64 encoder, JWT decoder, and more. Fast, secure, client-side processing.",
  url: SITE_URL,
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  browserRequirements: "Requires JavaScript. Requires HTML5.",
  permissions: "No special permissions required",
  isPartOf: {
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    name: "DevConverter",
    url: SITE_URL,
  },
  publisher: {
    "@type": "Organization",
    "@id": `${SITE_URL}#organization`,
    name: "DevConverter",
    url: SITE_URL,
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": SITE_URL,
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  creator: {
    "@type": "Organization",
    name: "DevConverter",
    url: SITE_URL,
  },
  featureList: [
    "JSON Formatter and Validator",
    "Base64 Encoder/Decoder",
    "JWT Token Decoder",
    "URL Encoder/Decoder",
    "Hash Generator",
    "Text Diff Checker",
    "QR Code Generator",
    "Color Converter",
  ],
  screenshot: OG_IMAGE,
}

export const orgStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}#organization`,
  name: "DevConverter",
  url: siteConfig.url,
  logo: {
    "@type": "ImageObject",
    url: `${siteConfig.url}/opengraph-image.png`,
    width: 1200,
    height: 630,
  },
  image: `${siteConfig.url}/opengraph-image.png`,
  description:
    "Providing free online developer tools for JSON formatting, Base64 encoding, JWT decoding, and more.",
  sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: siteConfig.links.email,
    url: `${siteConfig.url}/contact`,
  },
}

/**
 * Generates FAQPage schema for tools with FAQ sections
 * This helps search engines display rich FAQ results in SERPs
 *
 * @param tool - The tool object containing FAQ data
 * @returns FAQPage schema object or null if no FAQs exist
 */
export function generateFAQPageSchema(tool: Tool) {
  // Don't generate schema if there are no FAQs
  if (!tool.faq || tool.faq.length === 0) {
    return null
  }

  const url = `${SITE_URL}/${tool.slug}`

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faqpage`,
    mainEntity: tool.faq.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}
