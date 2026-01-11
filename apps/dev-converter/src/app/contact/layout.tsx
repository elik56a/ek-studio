import type { Metadata } from "next"

import { generateStaticPageMetadata } from "@/lib/seo/metadata"

export const metadata: Metadata = generateStaticPageMetadata({
  title: "Contact Us",
  description:
    "Get in touch with the DevConverter team. We're here to help with questions, feedback, and support.",
  url: "/contact",
  keywords: ["contact", "support", "feedback", "help", "devconverter"],
})

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
