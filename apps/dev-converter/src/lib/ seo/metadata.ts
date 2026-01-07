import type { Metadata } from "next"

import { Tool } from "@/lib/tools/types"

export function generateToolMetadata(tool: Tool): Metadata {
  const url = `https://devconverter.dev/${tool.slug}`

  return {
    title: tool.metadata.title,
    description: tool.metadata.description,
    keywords: tool.metadata.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: tool.metadata.title,
      description: tool.metadata.description,
      type: "website",
      siteName: "DevConverter",
      url,
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: tool.metadata.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: tool.metadata.title,
      description: tool.metadata.description,
      images: ["/opengraph-image.png"],
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
