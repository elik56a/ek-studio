import type { Metadata } from "next"

import { Tool } from "@/lib/tools/types"

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
  const url = `https://devconverter.dev/${tool.slug}`
  const optimizedTitle = optimizeTitle(tool)
  const optimizedDescription = optimizeDescription(tool)
  
  // Use absolute URL for images (metadataBase handles this, but being explicit)
  const ogImageUrl = "https://devconverter.dev/opengraph-image.png"

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
  const url = `https://devconverter.dev/categories/${categoryId}`
  
  // Optimize title with CTR terms
  const optimizedTitle = `${categoryName} Tools - Free Online Developer Tools | DevConverter`
  
  // Optimize description with tool count and benefits
  const toolCountText = toolCount ? `${toolCount} free ` : "Free "
  const optimizedDescription = `${toolCountText}online ${categoryName.toLowerCase()} tools for developers. ${categoryDescription} Instant results, no signup required.`
  
  // Use absolute URL for images
  const ogImageUrl = "https://devconverter.dev/opengraph-image.png"

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

export function generateStructuredData(tool: Tool) {
  const url = `https://devconverter.dev/${tool.slug}`

  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": url,
    name: tool.name,
    description: tool.description,
    url,
    image: "https://devconverter.dev/opengraph-image.png",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    inLanguage: "en",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    creator: {
      "@type": "Organization",
      name: "DevConverter",
      url: "https://devconverter.dev",
    },
  }
}

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "DevConverter",
  alternateName: "DevConverter - Free Online Developer Tools",
  description:
    "Free online tools for developers: JSON formatter, Base64 encoder, JWT decoder, and more. Fast, secure, client-side processing.",
  url: "https://devconverter.dev",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  browserRequirements: "Requires JavaScript. Requires HTML5.",
  permissions: "No special permissions required",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  creator: {
    "@type": "Organization",
    name: "DevConverter",
    url: "https://devconverter.dev",
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
  screenshot: "https://devconverter.dev/opengraph-image.png",
}

export const orgStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DevConverter",
  url: "https://devconverter.dev",
  logo: {
    "@type": "ImageObject",
    url: "https://devconverter.dev/icon",
    width: "32",
    height: "32",
  },
  image: "https://devconverter.dev/opengraph-image",
  description:
    "Providing free online developer tools for JSON formatting, Base64 encoding, JWT decoding, and more.",
  sameAs: [
    "https://github.com/devconverter",
    "https://twitter.com/devconverter",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    url: "https://devconverter.dev/contact",
  },
}
