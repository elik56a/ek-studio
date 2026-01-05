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
