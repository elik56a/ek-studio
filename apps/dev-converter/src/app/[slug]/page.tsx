import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { Breadcrumb } from "@/components/layout/breadcrumb"
import { ComingSoonPlaceholder } from "@/components/custom/coming-soon-placeholder"
import {
  generateStructuredData,
  generateToolMetadata,
} from "@/lib/ seo/metadata"
import { getCategoryByToolId } from "@/lib/tools/categories"
import { getToolBySlug } from "@/lib/tools/registry"

interface ToolPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: ToolPageProps): Promise<Metadata> {
  const { slug } = await params
  const tool = getToolBySlug(slug)

  if (!tool) {
    return {
      title: "Tool Not Found",
      description: "The requested tool could not be found.",
    }
  }

  return generateToolMetadata(tool)
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params
  const tool = getToolBySlug(slug)

  if (!tool) {
    notFound()
  }

  const category = getCategoryByToolId(tool.id)
  const ToolComponent = tool.component
  const structuredData = generateStructuredData(tool)

  const breadcrumbItems = [
    ...(category
      ? [{ label: category.name, href: `/categories/${category.id}` }]
      : []),
    { label: tool.name },
  ]

  if (!ToolComponent) {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <div className="container mx-auto px-4 py-6 space-y-4">
          <Breadcrumb items={breadcrumbItems} />
          <ComingSoonPlaceholder
            toolName={tool.name}
            description={tool.description}
          />
        </div>
      </>
    )
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="container mx-auto px-4 py-6 space-y-4">
        <Breadcrumb items={breadcrumbItems} />
        <ToolComponent />
      </div>
    </>
  )
}
