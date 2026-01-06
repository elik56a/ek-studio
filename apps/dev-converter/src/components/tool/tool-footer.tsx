import { Button, Card, CardContent, CardHeader, CardTitle } from "@ek-studio/ui"
import { ExternalLink, HelpCircle, Lightbulb, Settings } from "lucide-react"

import Link from "next/link"

interface Example {
  title: string
  input: string
  description?: string
}

interface FAQ {
  question: string
  answer: string
}

interface RelatedTool {
  name: string
  href: string
  description: string
}

interface ToolFooterProps {
  examples?: Example[]
  faqs?: FAQ[]
  relatedTools?: RelatedTool[]
  onExampleClick?: (input: string) => void
  settings?: React.ReactNode
  className?: string
  hideAds?: boolean
}

export function ToolFooter({
  examples = [],
  faqs = [],
  relatedTools = [],
  onExampleClick,
  settings,
  className,
  hideAds = true,
}: ToolFooterProps) {
  const handleExampleClick = (input: string) => {
    if (onExampleClick) {
      onExampleClick(input)
    }

    // Smooth scroll to the editor section
    setTimeout(() => {
      const editorSection = document.getElementById("editor-section")
      if (editorSection) {
        editorSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        })
      }
    }, 100)
  }

  // Create an ordered list of content sections
  const sections = []

  if (examples.length > 0) {
    sections.push({
      id: "examples",
      content: (
        <div key="examples" className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
              <Lightbulb className="h-6 w-6 text-accent" />
              Examples
            </h2>
            <p className="text-muted-foreground">
              Try these examples to get started
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {examples.map((example, index) => (
              <Card
                key={index}
                className="glass border-0 shadow-glow hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold">
                      {example.title}
                    </CardTitle>
                    {onExampleClick && (
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => handleExampleClick(example.input)}
                        className="h-9 px-4 font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        Try This
                      </Button>
                    )}
                  </div>
                  {example.description && (
                    <p className="text-sm text-muted-foreground">
                      {example.description}
                    </p>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/30 p-4 rounded-lg border text-sm overflow-x-auto">
                    <pre className="whitespace-pre-wrap break-words font-mono text-foreground/90">
                      {example.input}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ),
    })
  }

  if (settings) {
    sections.push({
      id: "settings",
      content: (
        <div key="settings" className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
              <Settings className="h-6 w-6 text-accent" />
              Settings
            </h2>
            <p className="text-muted-foreground">Customize your experience</p>
          </div>
          <Card className="glass border-0 shadow-glow">
            <CardContent className="p-6">{settings}</CardContent>
          </Card>
        </div>
      ),
    })
  }

  if (faqs.length > 0) {
    sections.push({
      id: "faqs",
      content: (
        <div key="faqs" className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
              <HelpCircle className="h-6 w-6 text-accent" />
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Common questions and answers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="glass border-0 shadow-glow">
                <CardContent className="p-6 space-y-3">
                  <h4 className="text-lg font-semibold text-foreground">
                    {faq.question}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ),
    })
  }

  if (relatedTools.length > 0) {
    sections.push({
      id: "related-tools",
      content: (
        <div key="related-tools" className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
              <ExternalLink className="h-6 w-6 text-accent" />
              Related Tools
            </h2>
            <p className="text-muted-foreground">
              Explore more developer tools
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedTools.map((tool, index) => (
              <Link key={index} href={tool.href} className="block group">
                <Card className="glass border-0 shadow-glow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardContent className="p-6 space-y-3">
                    <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {tool.name}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {tool.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      ),
    })
  }

  // When hiding ads (default), just return the sections without ad placeholders
  if (hideAds) {
    return (
      <div className={`space-y-16 ${className}`}>
        {sections.map(section => section.content)}
      </div>
    )
  }

  // Intersperse ad placeholders between content sections (only when showing ads)
  const contentWithAds: React.ReactNode[] = []
  sections.forEach((section, index) => {
    contentWithAds.push(section.content)

    // Add ad placeholder after each section except the last one
    if (index < sections.length - 1) {
      contentWithAds.push(
        <Card
          key={`ad-${index}`}
          className="glass border-2 border-dashed border-muted-foreground/30"
        >
          <CardContent className="flex items-center justify-center p-8 text-center">
            <div className="space-y-3">
              <div className="mx-auto h-8 w-8 rounded-full bg-muted-foreground/20" />
              <p className="text-lg font-medium text-muted-foreground">
                Ad Space
              </p>
              <p className="text-sm text-muted-foreground/60">Advertisement</p>
            </div>
          </CardContent>
        </Card>
      )
    }
  })

  return <div className={`space-y-16 ${className}`}>{contentWithAds}</div>
}
