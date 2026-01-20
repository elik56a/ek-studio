import { Card, CardContent } from "@ek-studio/ui"
import { HelpCircle, MessageCircle } from "lucide-react"

import type { Metadata } from "next"

import { FAQ, FAQItem } from "@/components/common/faq"
import { SmoothLink } from "@/components/layout/smooth-link"
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema"
import { siteConfig } from "@/config/site"
import { generateStaticPageMetadata } from "@/lib/seo/metadata"
import {
  generateFAQQuestionsSchema,
  generateStaticPageSchema,
} from "@/lib/seo/schema-generators"

export const metadata: Metadata = generateStaticPageMetadata({
  title: "FAQ - Frequently Asked Questions",
  description:
    "Find answers to common questions about DevConverter tools, privacy, features, and more.",
  url: "/faq",
  keywords: [
    "faq",
    "frequently asked questions",
    "help",
    "support",
    "devconverter",
  ],
})

const faqSections: { category: string; questions: FAQItem[] }[] = [
  {
    category: "General",
    questions: [
      {
        question: "What is DevConverter?",
        answer:
          "DevConverter is a collection of free, privacy-first developer tools that run entirely in your browser. We provide tools for JSON formatting, encoding/decoding, hashing, text manipulation, and more—all without sending your data to any server.",
      },
      {
        question: "Is DevConverter really free?",
        answer:
          "Yes, absolutely! All our tools are completely free to use with no hidden costs, subscriptions, or paywalls. We believe essential developer tools should be accessible to everyone.",
      },
      {
        question: "Do I need to create an account?",
        answer:
          "No account needed! All tools work instantly without any registration or login. Just visit the tool you need and start using it right away.",
      },
    ],
  },
  {
    category: "Privacy & Security",
    questions: [
      {
        question: "Is my data safe?",
        answer:
          "Absolutely. All processing happens entirely in your browser using JavaScript. Your data never leaves your device, never touches our servers, and is never stored or transmitted anywhere. This is true client-side processing.",
      },
      {
        question: "Do you collect or store my data?",
        answer:
          "No. We don't collect, store, or have access to any data you process with our tools. Everything runs locally in your browser. We may collect anonymous analytics about page visits, but never the content you're working with.",
      },
      {
        question: "Can I use these tools with sensitive data?",
        answer:
          "Yes! Since all processing happens in your browser and nothing is sent to any server, you can safely use our tools with sensitive data like API keys, tokens, passwords, or confidential information.",
      },
    ],
  },
  {
    category: "Features & Usage",
    questions: [
      {
        question: "Do the tools work offline?",
        answer:
          "Once a tool page is loaded, most functionality works offline since processing happens in your browser. However, you'll need an internet connection to initially load the page.",
      },
      {
        question: "Are there any file size limits?",
        answer:
          "Since processing happens in your browser, limits depend on your device's memory and browser capabilities. Most tools can handle files up to several megabytes without issues. Very large files may slow down or crash your browser tab.",
      },
      {
        question: "Can I use keyboard shortcuts?",
        answer:
          "Yes! Many tools support keyboard shortcuts for common actions. Look for the keyboard icon or check the tool's documentation for available shortcuts.",
      },
      {
        question: "Do you support dark mode?",
        answer:
          "Yes! DevConverter automatically adapts to your system's theme preference. You can also toggle between light and dark mode using the theme switcher in the navigation.",
      },
    ],
  },
  {
    category: "Technical",
    questions: [
      {
        question: "Which browsers are supported?",
        answer:
          "DevConverter works on all modern browsers including Chrome, Firefox, Safari, Edge, and Brave. We recommend using the latest version of your browser for the best experience.",
      },
      {
        question: "Is the code open source?",
        answer:
          "Yes! DevConverter is open source. You can view the source code, contribute, or report issues on our GitHub repository.",
      },
      {
        question: "Can I use these tools in my own projects?",
        answer:
          "Yes! Since we're open source, you can use our code in your projects according to our license. You can also embed or link to our tools from your applications.",
      },
      {
        question: "How do I report a bug or request a feature?",
        answer:
          "You can report bugs or request features through our GitHub repository, or contact us directly via email. We appreciate all feedback and contributions!",
      },
    ],
  },
]

export default function FAQPage() {
  // Flatten all FAQ items for the schema
  const allFAQs = faqSections.flatMap(section => section.questions)

  const faqUrl = `${siteConfig.url}/faq`

  // Generate FAQPage schema with questions
  const pageSchema = {
    ...generateStaticPageSchema({
      title: "FAQ - Frequently Asked Questions",
      description:
        "Find answers to common questions about DevConverter tools, privacy, features, and more.",
      url: "/faq",
      type: "FAQPage",
      keywords: [
        "faq",
        "frequently asked questions",
        "help",
        "support",
        "devconverter",
      ],
    }),
    mainEntity: generateFAQQuestionsSchema(allFAQs, faqUrl),
  }

  return (
    <>
      {/* FAQPage Schema with Questions */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* BreadcrumbList Schema */}
      <BreadcrumbSchema
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "FAQ" }]}
      />

      <div className="gradient-bg min-h-screen">
        <div className="container mx-auto px-4 py-12 sm:py-16 space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground">
              <HelpCircle className="w-4 h-4 text-accent" />
              <span>Frequently Asked Questions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              How Can We Help?
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Find answers to common questions about our tools, privacy, and
              features.
            </p>
          </div>

          {/* FAQ Sections */}
          <div className="max-w-4xl mx-auto space-y-8">
            {faqSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">
                  {section.category}
                </h2>
                <Card className="glass border-0">
                  <CardContent className="p-6">
                    <FAQ items={section.questions} />
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <Card className="glass border-0 max-w-3xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="pt-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto">
                <MessageCircle className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Still Have Questions?</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Can't find the answer you're looking for? Feel free to reach out
                to us directly.
              </p>
              <SmoothLink
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
              >
                Contact Us
              </SmoothLink>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
