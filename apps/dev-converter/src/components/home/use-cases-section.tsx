"use client"

import { Card, CardHeader, CardTitle } from "@ek-studio/ui"
import { Code2, Database, Lock, Search } from "lucide-react"

export default function UseCasesSection() {
  const useCases = [
    {
      icon: Code2,
      title: "API Development & Testing",
      description:
        "Format JSON responses, decode JWT authentication tokens, encode API credentials in Base64, and generate hash signatures for webhooks. Perfect for REST API development, GraphQL debugging, and API integration testing.",
    },
    {
      icon: Database,
      title: "Data Processing & ETL",
      description:
        "Convert between JSON, CSV, YAML, and XML formats. Transform text encodings, generate checksums for data validation, and process large datasets entirely in your browser without server uploads.",
    },
    {
      icon: Lock,
      title: "Security & Cryptography",
      description:
        "Generate secure hashes (MD5, SHA-1, SHA-256, SHA-512) for password verification, create UUIDs for unique identifiers, validate cryptographic signatures, and encode sensitive data client-side for maximum privacy.",
    },
    {
      icon: Search,
      title: "Code Review & Debugging",
      description:
        "Compare code changes with text diff checker, beautify minified JavaScript and JSON, validate syntax errors, decode error messages, and test regular expressions with our regex tester for faster debugging workflows.",
    },
  ]

  return (
    <section className="space-y-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Common Developer Use Cases
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            From API development to security tasks, DevConverter has the tools you need for everyday
            coding challenges. Format JSON responses, decode JWT tokens, encode credentials, and
            generate hash signatures—all in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon
            return (
              <Card key={index} className="glass border-0 hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-3">{useCase.title}</CardTitle>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
