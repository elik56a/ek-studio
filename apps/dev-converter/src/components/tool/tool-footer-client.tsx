"use client"

import { Button } from "@ek-studio/ui"
import { ArrowRight, Sparkles } from "lucide-react"

interface Example {
  title: string
  input: string
  description?: string
}

interface ExampleCardProps {
  example: Example
  index: number
  onExampleClick?: (input: string) => void
}

export function ExampleCard({ example, index, onExampleClick }: ExampleCardProps) {
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

  return (
    <div className="group relative overflow-hidden rounded-xl border border-border bg-card hover:border-amber-500/30 hover:shadow-lg transition-all duration-200">
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
  )
}
