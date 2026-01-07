import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@ek-studio/ui"
import { ArrowRight, Clock, Star, Users } from "lucide-react"

import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Breadcrumb } from "@/components/layout/breadcrumb"
import { generateCategoryMetadata } from "@/lib/ seo/metadata"
import { getCategoryById } from "@/lib/tools/categories"
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

  return generateCategoryMetadata(
    category.name,
    category.description,
    category.id
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

  const breadcrumbItems = [
    { label: "Categories", href: "/" },
    { label: category.name },
  ]

  const toolsWithMeta = tools

  return (
    <div className="gradient-bg min-h-screen">
      <div className="container mx-auto px-4 py-4 sm:py-6 space-y-8 sm:space-y-12 pb-12 sm:pb-16">
        <Breadcrumb items={breadcrumbItems} />

        {/* Hero Section */}
        <div className="text-center space-y-6 sm:space-y-8 pt-4 sm:pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
              <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                {category.name}
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg mt-1">
                {category.description}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2 sm:pt-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <Users className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>
                {tools.length} {tools.length === 1 ? "tool" : "tools"}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Updated regularly</span>
            </div>
          </div>
        </div>

        {/* Tools Grid */}
        {tools.length > 0 ? (
          <div className="space-y-6 sm:space-y-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
              <h2 className="text-xl sm:text-2xl font-semibold">
                Available Tools
              </h2>
              <Button
                variant="outline"
                size="sm"
                className="text-xs sm:text-sm"
              >
                Sort by popularity
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {toolsWithMeta.map((tool, index) => (
                <Link key={tool.id} href={`/${tool.slug}`}>
                  <Card className="group h-full hover:shadow-glow transition-all duration-300 hover:-translate-y-1 glass border-0">
                    <CardHeader className="pb-3 sm:pb-4">
                      <div className="flex items-start justify-between mb-2 gap-2">
                        <CardTitle className="text-base sm:text-xl transition-colors leading-tight">
                          {tool.name}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-xs sm:text-sm leading-relaxed">
                        {tool.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="pt-0 space-y-3 sm:space-y-4">
                      {/* Keywords */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {tool.keywords.slice(0, 3).map(keyword => (
                          <Badge
                            key={keyword}
                            variant="outline"
                            className="text-xs"
                          >
                            {keyword}
                          </Badge>
                        ))}
                        {tool.keywords.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{tool.keywords.length - 3}
                          </Badge>
                        )}
                      </div>



                      {/* CTA */}
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-xs sm:text-sm font-medium text-primary group-hover:text-accent transition-colors">
                          Try it now
                        </span>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-all" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
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
              <Link href="/">
                Explore Other Categories
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
