import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Breadcrumb } from "@/components/layout/breadcrumb"
import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@ek-studio/ui"
import { generateCategoryMetadata } from "@/lib/metadata"
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

  const breadcrumbItems = [
    { label: "Categories", href: "/" },
    { label: category.name },
  ]

  return (
    <div className="space-y-6">
      <Breadcrumb items={breadcrumbItems} />

      <div className="text-center space-y-4">
        <div className="text-6xl">{category.icon}</div>
        <h1 className="text-4xl font-bold tracking-tight">{category.name}</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {category.description}
        </p>
        <Badge variant="secondary" className="text-sm">
          {tools.length} {tools.length === 1 ? "tool" : "tools"}
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map(tool => (
          <Link key={tool.id} href={`/${tool.slug}`}>
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">{tool.name}</CardTitle>
                <CardDescription>{tool.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  {tool.keywords.slice(0, 3).map(keyword => (
                    <Badge key={keyword} variant="outline" className="text-xs">
                      {keyword}
                    </Badge>
                  ))}
                  {tool.keywords.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{tool.keywords.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {tools.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No tools available in this category yet.
          </p>
        </div>
      )}
    </div>
  )
}
