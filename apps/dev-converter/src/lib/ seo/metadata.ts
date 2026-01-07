import type { Metadata } from "next"

import { Tool } from "@/lib/tools/types"

export function generateToolMetadata(tool: Tool): Metadata {
  return {
    title: tool.metadata.title,
    description: tool.metadata.description,
    keywords: tool.metadata.keywords,
    openGraph: {
      title: tool.metadata.title,
      description: tool.metadata.description,
      type: "website",
      siteName: "DevConverter",
      url: `https://devconverter.dev/${tool.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: tool.metadata.title,
      description: tool.metadata.description,
    },
    alternates: {
      canonical: `https://devconverter.dev/${tool.slug}`,
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
  categoryId: string
): Metadata {
  return {
    title: `${categoryName} Tools - DevConverter`,
    description: `${categoryDescription} Free online tools for developers.`,
    openGraph: {
      title: `${categoryName} Tools - DevConverter`,
      description: `${categoryDescription} Free online tools for developers.`,
      type: "website",
      url: `https://devconverter.dev/categories/${categoryId}`,
    },
    alternates: {
      canonical: `https://devconverter.dev/categories/${categoryId}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export function generateStructuredData(tool: Tool) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: tool.name,
    description: tool.description,
    url: `https://devconverter.dev/${tool.slug}`,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    creator: {
      "@type": "Organization",
      name: "DevConverter",
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1250",
      bestRating: "5",
      worstRating: "1",
    },
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



