import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@ek-studio/ui"
import {
  ArrowRight,
  Code2,
  Database,
  FileText,
  Lock,
  Search,
  Shield,
  Zap,
} from "lucide-react"

import type { Metadata } from "next"

import { FAQ } from "@/components/common/faq"
import { Breadcrumb } from "@/components/layout/breadcrumb"
import { SmoothLink } from "@/components/layout/smooth-link"
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema"
import { siteConfig } from "@/config/site"
import { generateStaticPageMetadata } from "@/lib/seo/metadata"
import {
  generateCollectionPageSchema,
  generateFAQQuestionsSchema,
} from "@/lib/seo/schema-generators"
import { categoryConfigs } from "@/lib/tools/categories"
import { getAllTools } from "@/lib/tools/registry"

export const metadata: Metadata = generateStaticPageMetadata({
  title: "All Tool Categories - Free Developer Tools",
  description:
    "Browse all developer tool categories: JSON & Data, Encoding & Decoding, Security & Crypto, Text Utilities, Time & Date, and more. Find the perfect tool for your development needs.",
  url: "/categories",
  keywords: [
    "developer tools categories",
    "tool categories",
    "json tools",
    "encoding tools",
    "security tools",
    "text tools",
    "time tools",
    "developer utilities",
    "free online tools",
    "web developer tools",
    "programming tools",
  ],
})

export default function CategoriesPage() {
  const allTools = getAllTools()
  const totalTools = allTools.length

  // FAQ data
  const faqItems = [
    {
      question: "What tool categories are available on DevConverter?",
      answer:
        "DevConverter offers 6 main categories: JSON & Data (for formatting and converting data), Encoding & Decoding (Base64, URL encoding, etc.), Security & Crypto (JWT, hashing, encryption), Text Utilities (case conversion, formatting), Time & Date (timestamp conversion, timezone tools), and general Utilities (color pickers, UUID generators, etc.).",
    },
    {
      question: "Are all tools in every category completely free?",
      answer:
        "Yes! All tools across all categories are 100% free with no hidden costs, no account required, and no usage limits. We believe developer tools should be accessible to everyone.",
    },
    {
      question: "Do the tools work offline?",
      answer:
        "Yes, all tools process data locally in your browser. Once the page loads, you can use the tools even without an internet connection. Your data never leaves your device, ensuring maximum privacy and security.",
    },
    {
      question: "Which category has the most tools?",
      answer:
        "The number of tools varies by category based on developer needs. JSON & Data and Text Utilities typically have the most tools as they cover common development tasks. We regularly add new tools to all categories based on user feedback.",
    },
    {
      question: "Can I suggest a new tool or category?",
      answer:
        "Absolutely! We love hearing from our users. If you have ideas for new tools or categories, please reach out through our contact page or GitHub repository. We prioritize tools that solve real developer problems.",
    },
    {
      question: "How do I find a specific tool quickly?",
      answer:
        "You can browse by category to see all related tools, or use the search functionality on the homepage. Each category page also lists all available tools with descriptions and keywords to help you find exactly what you need.",
    },
  ]

  // Collection schema for the categories page
  const collectionSchema = generateCollectionPageSchema({
    title: "All Tool Categories - DevConverter",
    description:
      "Browse all developer tool categories including JSON & Data, Encoding & Decoding, Security & Crypto, Text Utilities, and more.",
    url: "/categories",
    numberOfItems: categoryConfigs.length,
    keywords: [
      "developer tools",
      "tool categories",
      "free online tools",
      "web developer",
    ],
  })

  // FAQ schema
  const categoriesUrl = `${siteConfig.url}/categories`
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${categoriesUrl}#faq`,
    mainEntity: generateFAQQuestionsSchema(faqItems, categoriesUrl),
  }

  // ItemList schema for categories
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Developer Tool Categories",
    description: "All available tool categories on DevConverter",
    numberOfItems: categoryConfigs.length,
    itemListElement: categoryConfigs.map((category, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CollectionPage",
        "@id": `${siteConfig.url}/categories/${category.id}`,
        name: category.name,
        description: category.description,
        url: `${siteConfig.url}/categories/${category.id}`,
      },
    })),
  }

  return (
    <>
      {/* CollectionPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      {/* ItemList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* BreadcrumbList Schema */}
      <BreadcrumbSchema
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Categories" }]}
      />

      <div className="gradient-bg min-h-screen">
        <div className="container mx-auto px-4 py-4 sm:py-6 space-y-8 sm:space-y-12 pb-12 sm:pb-16">
          <Breadcrumb items={[{ label: "Categories" }]} />

          {/* Hero Section */}
          <section className="text-center space-y-6 sm:space-y-8 pt-4 sm:pt-8">
            <div className="space-y-4">
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 flex items-center justify-center shadow-lg">
                  <Database className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent px-4">
                All Tool Categories
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                Explore our complete collection of developer tools organized by
                category. From JSON formatting to security tools, find
                everything you need in one place.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-4 max-w-4xl mx-auto pb-2">
              <Card className="glass border-0 text-center py-4 px-4">
                <div className="text-2xl sm:text-3xl font-bold text-primary">
                  {categoryConfigs.length}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Categories
                </div>
              </Card>
              <Card className="glass border-0 text-center py-4 px-4">
                <div className="text-2xl sm:text-3xl font-bold text-primary">
                  {totalTools}+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Tools
                </div>
              </Card>
              <Card className="glass border-0 text-center py-4 px-4">
                <div className="text-2xl sm:text-3xl font-bold text-primary">
                  100%
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Free
                </div>
              </Card>
              <Card className="glass border-0 text-center py-4 px-4">
                <div className="text-2xl sm:text-3xl font-bold text-primary">
                  0ms
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Server Delay
                </div>
              </Card>
            </div>
          </section>

          {/* Categories Grid */}
          <section className="space-y-6 sm:space-y-8">
            <div className="text-center space-y-2 max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold">
                Browse by Category
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Each category contains specialized tools designed to solve
                specific development challenges. Click any category to explore
                its tools.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 pb-4">
              {categoryConfigs.map(category => {
                const IconComponent = category.icon
                const toolCount = category.tools.length

                return (
                  <SmoothLink
                    key={category.id}
                    href={`/categories/${category.id}`}
                    aria-label={`View ${category.name} category with ${toolCount} tools`}
                  >
                    <Card className="group h-full transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 hover:scale-[1.02] glass border-0 relative">
                      <CardHeader className="pb-3 sm:pb-4">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300 flex-shrink-0 shadow-md">
                            <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors duration-300">
                              {category.name}
                            </CardTitle>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge className="text-xs bg-primary/10 text-primary">
                                {toolCount} {toolCount === 1 ? "tool" : "tools"}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <CardDescription className="text-sm leading-relaxed">
                          {category.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                          {category.tools.slice(0, 3).map(toolId => (
                            <Badge
                              key={toolId}
                              className="text-xs bg-primary/5 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                            >
                              {toolId.replace(/-/g, " ")}
                            </Badge>
                          ))}
                          {category.tools.length > 3 && (
                            <Badge className="text-xs bg-primary/5 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-300">
                              +{category.tools.length - 3} more
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center justify-between pt-3 border-t border-border/50">
                          <span className="text-sm font-semibold text-primary group-hover:text-accent transition-colors duration-200">
                            Explore category
                          </span>
                          <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-2 group-hover:text-accent transition-all duration-300" />
                        </div>
                      </CardContent>

                      {/* Hover border effect */}
                      <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-border transition-all duration-300 group-hover:ring-2 group-hover:ring-primary/30" />
                    </Card>
                  </SmoothLink>
                )
              })}
            </div>
          </section>

          {/* Why Use Categories Section */}
          <section className="space-y-6 sm:space-y-8">
            <div className="text-center space-y-2 max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold">
                Why Browse by Category?
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Organized categories help you discover tools faster and find
                related utilities for your workflow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pb-4">
              <Card className="glass border-0">
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Search className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-base sm:text-lg">
                    Easy Discovery
                  </CardTitle>
                  <CardDescription className="text-sm pt-2">
                    Find related tools quickly without searching. All tools in a
                    category solve similar problems.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="glass border-0">
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-base sm:text-lg">
                    Faster Workflow
                  </CardTitle>
                  <CardDescription className="text-sm pt-2">
                    Switch between related tools seamlessly. Perfect for complex
                    tasks requiring multiple utilities.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="glass border-0">
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Code2 className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-base sm:text-lg">
                    Learn & Explore
                  </CardTitle>
                  <CardDescription className="text-sm pt-2">
                    Discover tools you didn't know existed. Each category
                    introduces you to new utilities.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="glass border-0">
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-base sm:text-lg">
                    Organized Access
                  </CardTitle>
                  <CardDescription className="text-sm pt-2">
                    Clean, logical organization makes it easy to remember where
                    tools are located.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </section>

          {/* Popular Categories Highlight */}
          <section className="space-y-6 sm:space-y-8">
            <div className="text-center space-y-2 max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold">
                Most Popular Categories
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                These categories contain our most frequently used developer
                tools.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 pb-8">
              <Card className="glass border-0 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <Database className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">JSON & Data</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    Format, validate, and convert JSON, YAML, CSV, and other
                    data formats. Essential for API development and data
                    processing.
                  </CardDescription>
                  <div className="pt-4">
                    <SmoothLink href="/categories/json-data">
                      <span className="text-sm font-semibold text-primary hover:text-accent transition-colors inline-flex items-center gap-2">
                        View tools
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </SmoothLink>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass border-0 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <Lock className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">
                      Encoding & Decoding
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    Encode and decode Base64, URL, HTML entities, and more.
                    Perfect for handling encoded data in web development.
                  </CardDescription>
                  <div className="pt-4">
                    <SmoothLink href="/categories/encoding">
                      <span className="text-sm font-semibold text-primary hover:text-accent transition-colors inline-flex items-center gap-2">
                        View tools
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </SmoothLink>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass border-0 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Security & Crypto</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    JWT decoding, hash generation (MD5, SHA), UUID creation, and
                    other security-focused utilities for developers.
                  </CardDescription>
                  <div className="pt-4">
                    <SmoothLink href="/categories/security">
                      <span className="text-sm font-semibold text-primary hover:text-accent transition-colors inline-flex items-center gap-2">
                        View tools
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </SmoothLink>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="space-y-6 sm:space-y-8">
            <div className="text-center space-y-2 max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold">
                Frequently Asked Questions
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Common questions about our tool categories and how to use them.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="glass border-0">
                <CardContent>
                  <FAQ items={faqItems} />
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Related Links Section */}
          <section className="space-y-6 sm:space-y-8">
            <div className="text-center space-y-2 max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold">Explore More</h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Discover additional resources and pages to enhance your
                development workflow.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto pb-4">
              <SmoothLink href="/">
                <Card className="glass border-0 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Database className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-base">Home</CardTitle>
                    </div>
                    <CardDescription className="text-sm pt-2">
                      Return to the homepage to see featured tools and quick
                      access to popular utilities.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </SmoothLink>

              <SmoothLink href="/blog">
                <Card className="glass border-0 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-base">Blog</CardTitle>
                    </div>
                    <CardDescription className="text-sm pt-2">
                      Read tutorials, guides, and tips on using developer tools
                      effectively.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </SmoothLink>

              <SmoothLink href="/faq">
                <Card className="glass border-0 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Search className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-base">FAQ</CardTitle>
                    </div>
                    <CardDescription className="text-sm pt-2">
                      Find answers to common questions about DevConverter and
                      our tools.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </SmoothLink>

              <SmoothLink href="/about">
                <Card className="glass border-0 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Code2 className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-base">About</CardTitle>
                    </div>
                    <CardDescription className="text-sm pt-2">
                      Learn more about DevConverter, our mission, and why we
                      build free tools.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </SmoothLink>

              <SmoothLink href="/contact">
                <Card className="glass border-0 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Shield className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-base">Contact</CardTitle>
                    </div>
                    <CardDescription className="text-sm pt-2">
                      Get in touch with us for feedback, suggestions, or
                      support.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </SmoothLink>

              <SmoothLink href="/privacy">
                <Card className="glass border-0 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Lock className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-base">Privacy</CardTitle>
                    </div>
                    <CardDescription className="text-sm pt-2">
                      Read our privacy policy and learn how we protect your
                      data.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </SmoothLink>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center space-y-6 pt-8 pb-2">
            <Card className="glass border-0 max-w-3xl mx-auto">
              <CardHeader className="space-y-4 px-8 py-8 sm:px-10 sm:py-10">
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-2xl sm:text-3xl">
                  Ready to Get Started?
                </CardTitle>
                <CardDescription className="text-base">
                  Choose a category above and start using professional developer
                  tools instantly. No sign-up required, completely free forever.
                </CardDescription>
                <div className="pt-4">
                  <SmoothLink href="/">
                    <span className="inline-flex items-center gap-2 text-base font-semibold text-primary hover:text-accent transition-colors">
                      Browse all tools
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </SmoothLink>
                </div>
              </CardHeader>
            </Card>
          </section>
        </div>
      </div>
    </>
  )
}
