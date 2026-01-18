import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Carousel,
} from "@ek-studio/ui"
import type { CarouselItem } from "@ek-studio/ui"
import { ArrowRight, Clock, Star, Users } from "lucide-react"

import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { FAQ } from "@/components/common/faq"
import { Breadcrumb } from "@/components/layout/breadcrumb"
import { SmoothLink } from "@/components/layout/smooth-link"
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema"
import { categoryContent } from "@/config/category-content"
import { popularTools } from "@/config/popular-tools"
import { siteConfig } from "@/config/site"
import { generateCategoryMetadata } from "@/lib/seo/metadata"
import { generateCollectionPageSchema } from "@/lib/seo/schema-generators"
import { categories, getCategoryById } from "@/lib/tools/categories"
import { getToolsByCategory } from "@/lib/tools/registry"

interface CategoryPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { id } = await params
  const category = getCategoryById(id)

  if (!category) {
    return {
      title: "Category Not Found",
      description: "The requested category could not be found.",
    }
  }

  const tools = getToolsByCategory(category.id)

  return generateCategoryMetadata(
    category.name,
    category.description,
    category.id,
    tools.length
  )
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { id } = await params
  const category = getCategoryById(id)

  if (!category) {
    notFound()
  }

  const tools = getToolsByCategory(category.id)
  const IconComponent = category.icon
  const content = categoryContent[category.id]

  // Prepare other categories for carousel (without icon components)
  const otherCategories: CarouselItem[] = categories
    .filter(cat => cat.id !== category.id)
    .map(cat => ({
      name: cat.name,
      href: `/categories/${cat.id}`,
      description: cat.description,
    }))

  const breadcrumbItems = [
    { label: "Categories", href: "/categories" },
    { label: category.name },
  ]

  const toolsWithMeta = tools

  // Generate CollectionPage schema for category
  const collectionSchema = generateCollectionPageSchema({
    title: `${category.name} Tools - DevConverter`,
    description: category.description,
    url: `/categories/${category.id}`,
    numberOfItems: tools.length,
    keywords: [
      category.name.toLowerCase(),
      "tools",
      "developer tools",
      "free tools",
    ],
  })

  // Generate FAQPage schema if FAQs exist
  const categoryUrl = `${siteConfig.url}/categories/${category.id}`
  const faqSchema =
    content?.faqs && content.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": `${categoryUrl}#faq`,
          mainEntity: content.faqs.map((faq, index) => ({
            "@type": "Question",
            "@id": `${categoryUrl}#faq-question-${index}`,
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              "@id": `${categoryUrl}#faq-answer-${index}`,
              text: faq.answer,
            },
          })),
        }
      : null

  return (
    <>
      {/* CollectionPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      {/* FAQPage Schema */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* BreadcrumbList Schema */}
      <BreadcrumbSchema
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Categories", url: "/categories" },
          { name: category.name },
        ]}
      />

      <div className="gradient-bg min-h-screen">
        <div className="container mx-auto px-4 py-4 sm:py-6 space-y-8 sm:space-y-12 pb-12 sm:pb-16">
          <Breadcrumb items={breadcrumbItems} />

          {/* Hero Section */}
          <div className="text-center space-y-6 sm:space-y-8 pt-4 sm:pt-8">
            <div className="flex flex-col items-center justify-center gap-4 sm:gap-5 mb-4 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 flex items-center justify-center flex-shrink-0 shadow-lg">
                <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>
              <div className="text-center space-y-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  {category.name}
                </h1>
                <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 pt-2 sm:pt-4">
              <div className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-4 h-4 text-primary" />
                </div>
                <span className="font-medium">
                  {tools.length} {tools.length === 1 ? "tool" : "tools"}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <span className="font-medium">Updated regularly</span>
              </div>
            </div>
          </div>

          {/* Tools Grid */}
          {tools.length > 0 ? (
            <div className="space-y-6 sm:space-y-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 px-1">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold">
                    Available Tools
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Choose a tool to get started
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
                {toolsWithMeta.map((tool, index) => (
                  <SmoothLink
                    key={tool.id}
                    href={`/${tool.slug}`}
                    aria-label={`Go to ${tool.name}`}
                  >
                    <Card className="group h-full transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 glass border border-border/50 hover:border-primary/30 overflow-hidden">
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between mb-3 gap-2">
                          <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors duration-200 leading-tight">
                            {tool.name}
                          </CardTitle>
                        </div>
                        <CardDescription className="text-sm leading-relaxed min-h-[2.5rem]">
                          {tool.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="pt-0 space-y-4">
                        {/* Keywords */}
                        <div className="flex flex-wrap gap-2 min-h-[2rem]">
                          {tool.keywords.slice(0, 3).map(keyword => (
                            <Badge
                              key={keyword}
                              className="text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-200"
                            >
                              {keyword}
                            </Badge>
                          ))}
                          {tool.keywords.length > 3 && (
                            <Badge className="text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-200">
                              +{tool.keywords.length - 3}
                            </Badge>
                          )}
                        </div>

                        {/* CTA */}
                        <div className="flex items-center justify-between pt-2 border-t border-border/50">
                          <span className="text-sm font-semibold text-primary group-hover:text-accent transition-colors duration-200">
                            Try it now
                          </span>
                          <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 group-hover:text-accent transition-all duration-200" />
                        </div>
                      </CardContent>
                    </Card>
                  </SmoothLink>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-12 sm:py-16 space-y-4 px-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-muted/50 flex items-center justify-center mx-auto">
                <span className="text-xl sm:text-2xl">🚧</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">Coming Soon</h3>
              <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto">
                We're working hard to bring you amazing tools in this category.
                Check back soon for updates!
              </p>
              <Button asChild className="mt-4">
                <SmoothLink href="/">
                  Explore Other Categories
                  <ArrowRight className="w-4 h-4 ml-2" />
                </SmoothLink>
              </Button>
            </div>
          )}

          {/* About This Category Section */}
          {content?.description && (
            <Card className="glass border-0 shadow-glow p-6 sm:p-8">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold">
                  About {category.name} Tools
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {content.description}
                </p>
              </div>
            </Card>
          )}

          {/* Popular Tools Section */}
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                Popular Developer Tools
              </h2>
              <p className="text-sm text-muted-foreground">
                Most used tools across all categories
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pb-4">
              {popularTools.map(tool => {
                const IconComponent = tool.icon
                return (
                  <SmoothLink
                    key={tool.slug}
                    href={`/${tool.slug}`}
                    aria-label={`Go to ${tool.name}`}
                  >
                    <Card className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 glass border-0 h-full">
                      <CardHeader>
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
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
          </section>

          {/* FAQ Section */}
          {content?.faqs && content.faqs.length > 0 && (
            <section className="space-y-6 pb-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                  Frequently Asked Questions
                </h2>
                <p className="text-sm text-muted-foreground">
                  Common questions about {category.name.toLowerCase()} tools
                </p>
              </div>

              <Card className="glass border-0 shadow-glow overflow-visible">
                <CardContent className="overflow-visible">
                  <FAQ items={content.faqs} />
                </CardContent>
              </Card>
            </section>
          )}

          {/* Explore More Categories Section */}
          <Card className="glass border-0 shadow-glow p-6 sm:p-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  Explore More Categories
                </h2>
                <p className="text-sm text-muted-foreground mt-2">
                  Discover other tool categories
                </p>
              </div>

              <Carousel items={otherCategories} itemsPerView={3} />
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}
