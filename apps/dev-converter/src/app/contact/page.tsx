import type { Metadata } from "next"

import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema"
import { generateStaticPageMetadata } from "@/lib/seo/metadata"
import { generateStaticPageSchema } from "@/lib/seo/schema-generators"

import { ContactForm } from "./contact-form"

export const metadata: Metadata = generateStaticPageMetadata({
  title: "Contact Us",
  description:
    "Get in touch with the DevConverter team. We're here to help with questions, feedback, and support.",
  url: "/contact",
  keywords: ["contact", "support", "feedback", "help", "devconverter"],
})

export default function ContactPage() {
  // Generate ContactPage schema
  const pageSchema = generateStaticPageSchema({
    title: "Contact Us - DevConverter",
    description:
      "Get in touch with the DevConverter team. We're here to help with questions, feedback, and support.",
    url: "/contact",
    type: "ContactPage",
  })

  return (
    <>
      {/* ContactPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* BreadcrumbList Schema */}
      <BreadcrumbSchema
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Contact" }]}
      />

      <ContactForm />
    </>
  )
}
