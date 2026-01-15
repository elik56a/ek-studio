import { Metadata } from "next"
import dynamic from "next/dynamic"

import { HeroSection } from "@/components/home/hero-section"
import { StatsSection } from "@/components/home/stats-section"
import { TrustSection } from "@/components/home/trust-section"
import { siteConfig } from "@/config/site"
import { orgStructuredData } from "@/lib/seo/metadata"
import { categories } from "@/lib/tools/categories"

// Lazy load below-the-fold sections
const PopularToolsSection = dynamic(
  () => import("@/components/home/popular-tools-section"),
  { ssr: true }
)

const CategoriesSection = dynamic(
  () => import("@/components/home/categories-section"),
  { ssr: true }
)

const FeaturesSection = dynamic(
  () => import("@/components/home/features-section"),
  { ssr: true }
)

const UseCasesSection = dynamic(
  () => import("@/components/home/use-cases-section"),
  { ssr: true }
)

const TestimonialsSection = dynamic(
  () => import("@/components/home/testimonials-section"),
  { ssr: true }
)

const FAQSection = dynamic(() => import("@/components/home/faq-section"), {
  ssr: true,
})

const CTASection = dynamic(() => import("@/components/home/cta-section"), {
  ssr: true,
})

export const metadata: Metadata = {
  title: "Free Developer Tools - DevConverter | JSON, Base64, JWT & More",
  description:
    "Professional developer tools for JSON formatting, Base64 encoding/decoding, JWT token analysis, hash generation (MD5, SHA-256), and 20+ more utilities. Fast, secure, privacy-first tools that work entirely in your browser. No registration, no data collection, 100% free forever.",
  keywords: [
    "developer tools",
    "online tools",
    "json formatter",
    "json validator",
    "json beautifier",
    "base64 encoder",
    "base64 decoder",
    "jwt decoder",
    "jwt parser",
    "hash generator",
    "md5 generator",
    "sha256 generator",
    "free developer tools",
    "browser tools",
    "privacy-first tools",
    "web developer tools",
    "programming tools",
    "code formatter",
    "api tools",
    "unix timestamp converter",
    "url encoder",
    "uuid generator",
    "regex tester",
    "text diff checker",
    "yaml to json",
    "csv to json",
    "markdown converter",
  ],
  applicationName: "DevConverter",
  authors: [{ name: "DevConverter", url: siteConfig.url }],
  creator: "DevConverter",
  publisher: "DevConverter",
  category: "Developer Tools",
  alternates: {
    canonical: siteConfig.url,
    languages: {
      en: siteConfig.url,
      "x-default": siteConfig.url,
    },
  },
  openGraph: {
    title: "Free Developer Tools - DevConverter | JSON, Base64, JWT & More",
    description:
      "Professional developer tools: JSON formatter, Base64 encoder, JWT decoder, hash generator, and 20+ utilities. Fast, private, browser-based. No registration required.",
    type: "website",
    siteName: "DevConverter",
    url: siteConfig.url,
    images: [
      {
        url: `${siteConfig.url}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "DevConverter - Free Online Developer Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Developer Tools - DevConverter",
    description:
      "Professional developer tools: JSON formatter, Base64 encoder, JWT decoder, and 20+ utilities. Fast, private, browser-based.",
    images: [`${siteConfig.url}/opengraph-image`],
    creator: "@devconverter",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function Home() {
  // WebSite schema with SearchAction
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}#website`,
    name: "DevConverter",
    alternateName: "DevConverter - Free Online Developer Tools",
    url: siteConfig.url,
    description:
      "Free online developer tools for JSON formatting, Base64 encoding, JWT decoding, hash generation, and more. Lightning-fast, privacy-first tools that run entirely in your browser.",
    inLanguage: "en",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
    ],
  }

  return (
    <>
      {/* WebSite Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgStructuredData) }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="gradient-bg min-h-screen w-full relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div
            className="absolute top-40 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute bottom-20 left-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "4s" }}
          />
        </div>

        <div className="relative w-full space-y-24 pb-24">
          {/* Hero Section */}
          <HeroSection />

          {/* Stats Section */}
          <StatsSection />

          {/* Trust Section */}
          <TrustSection />

          {/* Popular Tools Section */}
          <PopularToolsSection />

          {/* Categories Grid */}
          <CategoriesSection categories={categories} />

          {/* Features Section */}
          <FeaturesSection />

          {/* Use Cases Section */}
          <UseCasesSection />

          {/* Testimonials Section */}
          {/* <TestimonialsSection /> */}

          {/* FAQ Section */}
          <FAQSection />

          {/* Final CTA */}
          <CTASection />
        </div>
      </div>
    </>
  )
}
