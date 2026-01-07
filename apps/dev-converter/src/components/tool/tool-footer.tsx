import { Button } from "@ek-studio/ui"
import {
  ArrowRight,
  HelpCircle,
  Lightbulb,
  Settings,
  Sparkles,
} from "lucide-react"

import { FAQ } from "@/components/common/faq"
import { SmoothLink } from "@/components/layout/smooth-link"

interface Example {
  title: string
  input: string
  description?: string
}

interface FAQItem {
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
  faqs?: FAQItem[]
  relatedTools?: RelatedTool[]
  onExampleClick?: (input: string) => void
  settings?: React.ReactNode
  className?: string
}

export function ToolFooter({
  examples = [],
  faqs = [],
  relatedTools = [],
  onExampleClick,
  settings,
  className,
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
        })
      }
    }, 100)
  }

  const hasContent =
    examples.length > 0 ||
    faqs.length > 0 ||
    relatedTools.length > 0 ||
    settings

  if (!hasContent) return null

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Examples Section */}
      {examples.length > 0 && (
        <section className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20">
              <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Quick Examples</h2>
              <p className="text-sm text-muted-foreground">
                Try these to get started
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {examples.map((example, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-border bg-card hover:border-amber-500/30 hover:shadow-lg transition-all duration-200"
              >
                <div className="p-4 space-y-2">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm mb-1 flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                        <span className="truncate">{example.title}</span>
                      </h3>
                      {example.description && (
                        <p className="text-xs text-muted-foreground line-clamp-1">
                          {example.description}
                        </p>
                      )}
                    </div>
                    {onExampleClick && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleExampleClick(example.input)}
                        className="h-8 px-3 text-xs font-medium hover:bg-amber-500/10 hover:text-amber-600 dark:hover:text-amber-400 transition-colors flex-shrink-0"
                      >
                        Try
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    )}
                  </div>
                  <div className="relative">
                    <div className="bg-muted/50 p-3 rounded-lg border border-border/50 text-xs overflow-x-auto max-h-24 overflow-y-auto">
                      <pre className="whitespace-pre-wrap break-words font-mono text-foreground/90">
                        {example.input}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Settings Section */}
      {settings && (
        <section className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
              <Settings className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Settings</h2>
              <p className="text-sm text-muted-foreground">
                Customize your experience
              </p>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-border bg-card">
            {settings}
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <section className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
              <HelpCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Common Questions</h2>
              <p className="text-sm text-muted-foreground">
                Find answers quickly
              </p>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-border bg-card">
            <FAQ items={faqs} />
          </div>
        </section>
      )}

      {/* Related Tools Section */}
      {relatedTools.length > 0 && (
        <section className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
              <ArrowRight className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Related Tools</h2>
              <p className="text-sm text-muted-foreground">
                You might also need
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {relatedTools.map((tool, index) => (
              <SmoothLink
                key={index}
                href={tool.href}
                className="group block p-4 rounded-xl border border-border bg-card hover:border-emerald-500/30 hover:shadow-lg transition-all duration-200"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-sm group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                      {tool.name}
                    </h3>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              </SmoothLink>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
