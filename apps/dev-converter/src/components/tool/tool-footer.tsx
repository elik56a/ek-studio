import { Carousel } from "@ek-studio/ui"
import type { CarouselItem } from "@ek-studio/ui"
import {
  ArrowRight,
  HelpCircle,
  Lightbulb,
  Settings,
} from "lucide-react"

import { FAQ } from "@/components/common/faq"
import type { Tool } from "@/lib/tools/types"

import { ExampleCard } from "./tool-footer-client"

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
  tool?: Tool
}

export function ToolFooter({
  examples = [],
  faqs = [],
  relatedTools = [],
  onExampleClick,
  settings,
  className,
  tool,
}: ToolFooterProps) {
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
        <section
          id="examples"
          className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500 scroll-mt-20"
        >
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
              <ExampleCard
                key={index}
                example={example}
                index={index}
                onExampleClick={onExampleClick}
              />
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
        <section
          id="faq"
          className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150 scroll-mt-20"
        >
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
              <h2 className="text-xl font-bold">
                {tool?.ui.relatedToolsTitle ?? "Related Tools"}
              </h2>
              <p className="text-sm text-muted-foreground">
                You might also need
              </p>
            </div>
          </div>

          <Carousel items={relatedTools as CarouselItem[]} itemsPerView={3} />
        </section>
      )}
    </div>
  )
}
