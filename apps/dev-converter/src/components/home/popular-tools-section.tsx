"use client"

import { Card, CardHeader, CardTitle } from "@ek-studio/ui"
import { ArrowRight } from "lucide-react"

import { SmoothLink } from "@/components/layout/smooth-link"
import { popularTools } from "@/config/popular-tools"

export default function PopularToolsSection() {
  return (
    <section id="popular" className="space-y-12 px-4">
      <div className="text-center space-y-4 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Most Popular Developer Tools
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          DevConverter provides essential{" "}
          <strong>free online developer tools</strong> including a{" "}
          <SmoothLink
            href="/json-formatter"
            className="text-primary hover:underline font-semibold"
          >
            JSON formatter and validator
          </SmoothLink>
          ,{" "}
          <SmoothLink
            href="/base64-encode-decode"
            className="text-primary hover:underline font-semibold"
          >
            Base64 encoder/decoder
          </SmoothLink>
          ,{" "}
          <SmoothLink
            href="/jwt-decoder"
            className="text-primary hover:underline font-semibold"
          >
            JWT decoder
          </SmoothLink>
          , and{" "}
          <SmoothLink
            href="/hash-generator"
            className="text-primary hover:underline font-semibold"
          >
            hash generator
          </SmoothLink>{" "}
          (MD5, SHA-1, SHA-256, SHA-512). All tools process data locally in your
          browser for maximum privacy and security. Need to work with
          timestamps? Try our{" "}
          <SmoothLink
            href="/unix-timestamp-converter"
            className="text-primary hover:underline font-semibold"
          >
            Unix timestamp converter
          </SmoothLink>{" "}
          for epoch time conversions. Perfect for API development, debugging,
          and data processing tasks.
        </p>
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularTools.map((tool, index) => {
            const IconComponent = tool.icon
            return (
              <SmoothLink
                key={tool.slug}
                href={`/${tool.slug}`}
                aria-label={`Go to ${tool.name}`}
                className="group"
              >
                <Card className="h-full glass border-0 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardHeader className="relative pb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all group-hover:scale-110">
                        <IconComponent className="w-7 h-7 text-primary" />
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                    <CardTitle className="text-xl transition-colors group-hover:text-primary">
                      {tool.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-2">
                      {getToolDescription(tool.slug)}
                    </p>
                  </CardHeader>
                </Card>
              </SmoothLink>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function getToolDescription(slug: string): string {
  const descriptions: Record<string, string> = {
    "json-formatter":
      "Format, validate, and beautify JSON data with syntax highlighting",
    "base64-encode-decode":
      "Encode and decode Base64 strings for data transmission",
    "jwt-decoder": "Decode and inspect JWT tokens without verification",
    "hash-generator": "Generate MD5, SHA-1, SHA-256, and SHA-512 hashes",
  }
  return descriptions[slug] || "Professional developer utility"
}
