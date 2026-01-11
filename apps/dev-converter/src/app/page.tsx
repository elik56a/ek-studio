import { Button, Card, CardHeader, CardTitle } from "@ek-studio/ui"
import {
  ArrowRight,
  Code2,
  Database,
  FileText,
  Hash,
  Lock,
  Zap,
} from "lucide-react"

import { Metadata } from "next"
import dynamic from "next/dynamic"

import { ScrollButton } from "@/components/home/scroll-button"
import { Logo } from "@/components/layout/logo"
import { SmoothLink } from "@/components/layout/smooth-link"
import { categories } from "@/lib/tools/categories"
import { generateStaticPageMetadata, orgStructuredData } from "@/lib/seo/metadata"
import { siteConfig } from "@/config/site"

// Lazy load below-the-fold sections
const CategoriesSection = dynamic(
  () => import("@/components/home/categories-section"),
  {
    ssr: true,
  }
)

const FeaturesSection = dynamic(
  () => import("@/components/home/features-section"),
  {
    ssr: true,
  }
)

export const metadata: Metadata = generateStaticPageMetadata({
  title: "Free Online Developer Tools | JSON, Base64, JWT & More",
  description:
    "Free online developer tools for JSON formatting, Base64 encoding, JWT decoding, hash generation, and more. Lightning-fast, privacy-first tools that run entirely in your browser. No signup required.",
  url: "/",
  keywords: [
    "developer tools",
    "online tools",
    "json formatter",
    "base64 encoder",
    "jwt decoder",
    "hash generator",
    "free developer tools",
    "browser tools",
    "privacy-first tools",
    "web developer tools",
    "programming tools",
  ],
})

export default function Home() {
  const popularTools = [
    {
      name: "JSON Formatter",
      slug: "json-formatter",
      icon: Database,
    },
    {
      name: "Base64 Encoder",
      slug: "base64-encode-decode",
      icon: Lock,
    },
    { name: "JWT Decoder", slug: "jwt-decoder", icon: FileText },
    {
      name: "Hash Generator",
      slug: "hash-generator",
      icon: Hash,
    },
  ]

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

  // ItemList schema for popular tools
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Popular Developer Tools",
    description: "The most popular developer tools on DevConverter",
    numberOfItems: popularTools.length,
    itemListElement: popularTools.map((tool, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: tool.name,
        url: `${siteConfig.url}/${tool.slug}`,
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Any",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
    })),
  }

  return (
    <>
      {/* WebSite Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* Organization Schema (from SEO lib) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgStructuredData) }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ItemList Schema for Popular Tools */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <div className="gradient-bg min-h-screen w-full">
      <div className="w-full space-y-16 pb-16">
        {/* Hero Section */}
        <section className="text-center space-y-6 sm:space-y-8 pt-8 sm:pt-16 pb-6 sm:pb-8 px-4">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex justify-center mb-4 sm:mb-6">
              <Logo size="xl" variant="default" showTagline={false} />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent px-4">
              Free Online Developer Tools
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground/80">
              Fast, Private, and Always Free
            </p>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Professional developer tools for JSON formatting, Base64 encoding,
              JWT decoding, hash generation, and more. Everything runs in your
              browser—100% private, no signup required.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
            <ScrollButton
              targetId="categories"
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-glow bg-primary hover:bg-primary/90"
              ariaLabel="Explore all developer tools"
            >
              <Code2
                className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                aria-hidden="true"
              />
              <span>Explore Tools</span>
              <ArrowRight
                className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
                aria-hidden="true"
              />
            </ScrollButton>
            <ScrollButton
              targetId="popular"
              variant="outline"
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
              ariaLabel="View most popular developer tools"
            >
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2" aria-hidden="true" />
              <span>Popular Tools</span>
            </ScrollButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 pt-6 sm:pt-8 max-w-3xl mx-auto px-4">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-primary">
                100%
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Private
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-primary">
                Free
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Forever
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-primary">
                0ms
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Server Delay
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-primary">
                Open
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Source
              </div>
            </div>
          </div>
        </section>

        {/* Popular Tools Section */}
        <section id="popular" className="space-y-6 sm:space-y-8 px-4">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Most Popular Developer Tools
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              The essential tools developers use every day
            </p>
          </div>

          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {popularTools.map(tool => {
                const IconComponent = tool.icon
                return (
                  <SmoothLink key={tool.slug} href={`/${tool.slug}`}>
                    <Card className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 glass border-0">
                      <CardHeader className="pb-3 sm:pb-4">
                        <div className="flex items-center justify-between">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                            <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                          </div>
                        </div>
                        <CardTitle className="text-base sm:text-lg transition-colors">
                          {tool.name}
                        </CardTitle>
                      </CardHeader>
                    </Card>
                  </SmoothLink>
                )
              })}
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <CategoriesSection categories={categories} />

        {/* Features Section */}
        <FeaturesSection />
      </div>
      </div>
    </>
  )
}
