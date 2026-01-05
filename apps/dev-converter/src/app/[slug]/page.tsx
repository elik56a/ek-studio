import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { Breadcrumb } from "@/components/layout/breadcrumb"
import { generateStructuredData, generateToolMetadata } from "@/lib/metadata"
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="space-y-4">
        <Breadcrumb items={breadcrumbItems} />
        <ToolComponent />
      </div>
    </>
  )
}
