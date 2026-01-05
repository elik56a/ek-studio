import { ExternalLink, HelpCircle, Lightbulb, Settings } from "lucide-react"

import { Button, Card, CardContent, CardHeader, CardTitle } from "@ek-studio/ui"

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
  // Create an ordered list of content sections
  const sections = []

  if (examples.length > 0) {
    sections.push({
      id: "examples",
      content: (
        <Card key="examples">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-sm">
              <Lightbulb className="h-4 w-4" />
              Examples
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {examples.map((example, index) => (
              <div
                key={index}
                className="space-y-3 p-3 rounded-lg border bg-muted/20"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{example.title}</span>
                  {onExampleClick && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onExampleClick(example.input)}
                      className="h-8 text-xs"
                    >
                      Try This
                    </Button>
                  )}
                </div>
                {example.description && (
                  <p className="text-xs text-muted-foreground">
                    {example.description}
                  </p>
                )}
                <div className="bg-background p-3 rounded border text-xs overflow-x-auto max-w-full">
                  <pre className="whitespace-pre-wrap break-words font-mono">
                    {example.input}
                  </pre>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      ),
    })
  }

  if (settings) {
    sections.push({
      id: "settings",
      content: (
        <Card key="settings">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-sm">
              <Settings className="h-4 w-4" />
              Settings
            </CardTitle>
          </CardHeader>
          <CardContent>{settings}</CardContent>
        </Card>
      ),
    })
  }

  if (faqs.length > 0) {
    sections.push({
      id: "faqs",
      content: (
        <Card key="faqs">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-sm">
              <HelpCircle className="h-4 w-4" />
              FAQ
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="space-y-2 pb-3 border-b last:border-b-0"
              >
                <h4 className="text-sm font-medium">{faq.question}</h4>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      ),
    })
  }

  if (relatedTools.length > 0) {
    sections.push({
      id: "related-tools",
      content: (
        <Card key="related-tools">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-sm">
              <ExternalLink className="h-4 w-4" />
              Related Tools
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {relatedTools.map((tool, index) => (
              <div key={index} className="space-y-1">
                <Button
                  variant="ghost"
                  className="h-auto p-0 justify-start text-left"
                  asChild
                >
                  <a href={tool.href}>
                    <span className="text-sm font-medium">{tool.name}</span>
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground pl-0">
                  {tool.description}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      ),
    })
  }

  // When hiding ads (default), just return the sections without ad placeholders
  if (hideAds) {
    return (
      <div className={`space-y-6 ${className}`}>
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
          className="bg-muted border-2 border-dashed border-muted-foreground/30"
        >
          <CardContent className="flex items-center justify-center p-6 text-center">
            <div className="space-y-2">
              <div className="mx-auto h-6 w-6 rounded-full bg-muted-foreground/20" />
              <p className="text-sm text-muted-foreground">Ad Space</p>
              <p className="text-xs text-muted-foreground/60">Advertisement</p>
            </div>
          </CardContent>
        </Card>
      )
    }
  })

  return <div className={`space-y-6 ${className}`}>{contentWithAds}</div>
}
