import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { notFound } from "next/navigation"

import { Breadcrumb } from "@/components/layout/breadcrumb"
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema"
import { FAQSchema } from "@/components/seo/FAQSchema"
import { ToolStructuredData } from "@/components/seo/structured-data"
import { generateToolMetadata } from "@/lib/seo/metadata"
import { getCategoryByToolId } from "@/lib/tools/categories"
import { getToolBySlug } from "@/lib/tools/registry"

const ComingSoonPlaceholder = dynamic(
  () =>
    import("@/components/custom/coming-soon-placeholder").then(
      mod => mod.ComingSoonPlaceholder
    ),
  { ssr: true }
)

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

  // Build breadcrumb data for both UI and schema
  const breadcrumbItems = [
    ...(category
      ? [{ label: category.name, href: `/categories/${category.id}` }]
      : []),
    { label: tool.name },
  ]

  // Build breadcrumb schema data with absolute URLs
  const breadcrumbSchemaData = [
    { name: "Home", url: "/" },
    ...(category
      ? [{ name: category.name, url: `/categories/${category.id}` }]
      : []),
    { name: tool.name }, // Last item has no URL
  ]

  if (!ToolComponent) {
    return (
      <>
        {/* Enhanced WebApplication Schema */}
        <ToolStructuredData tool={tool} />

        {/* BreadcrumbList Schema */}
        <BreadcrumbSchema breadcrumbs={breadcrumbSchemaData} />

        {/* FAQPage Schema (conditionally rendered if FAQs exist) */}
        {tool.faq && tool.faq.length > 0 && <FAQSchema faqs={tool.faq} />}

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
      {/* Enhanced WebApplication Schema */}
      <ToolStructuredData tool={tool} />

      {/* BreadcrumbList Schema */}
      <BreadcrumbSchema breadcrumbs={breadcrumbSchemaData} />

      {/* FAQPage Schema (conditionally rendered if FAQs exist) */}
      {tool.faq && tool.faq.length > 0 && <FAQSchema faqs={tool.faq} />}

      <div className="container mx-auto px-4 py-6 space-y-4">
        <Breadcrumb items={breadcrumbItems} />
        <ToolComponent />
      </div>
    </>
  )
}
