"use client"

import { Card, CardContent } from "@ek-studio/ui"
import { cn } from "@ek-studio/ui"
import { Check, Minus, Plus } from "lucide-react"

interface DiffChange {
  value: string
  added?: boolean
  removed?: boolean
}

interface DiffViewerProps {
  changes: DiffChange[]
  className?: string
}

export function DiffViewer({ changes, className }: DiffViewerProps) {
  if (changes.length === 0) {
    return (
      <Card className="glass border-0 shadow-glow">
        <CardContent className="p-8 text-center text-muted-foreground">
          <p>No differences found. The texts are identical.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card
      className={cn("glass border-0 shadow-glow overflow-hidden", className)}
    >
      <CardContent className="p-0">
        <div className="max-h-[600px] overflow-y-auto">
          {changes.map((change, index) => {
            const lines = change.value.split("\n").filter((line, i, arr) => {
              // Keep all lines except the last one if it's empty
              return i < arr.length - 1 || line !== ""
            })

            return lines.map((line, lineIndex) => {
              const isAdded = change.added
              const isRemoved = change.removed
              const isUnchanged = !isAdded && !isRemoved

              return (
                <div
                  key={`${index}-${lineIndex}`}
                  className={cn(
                    "flex items-start gap-3 px-4 py-2 font-mono text-sm border-b border-border/30 last:border-b-0 transition-colors",
                    isAdded && "bg-green-500/10 hover:bg-green-500/15",
                    isRemoved && "bg-red-500/10 hover:bg-red-500/15",
                    isUnchanged && "bg-background/50 hover:bg-background/70"
                  )}
                >
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    {isAdded && (
                      <Plus className="h-4 w-4 text-green-600 dark:text-green-400" />
                    )}
                    {isRemoved && (
                      <Minus className="h-4 w-4 text-red-600 dark:text-red-400" />
                    )}
                    {isUnchanged && (
                      <Check className="h-4 w-4 text-muted-foreground/50" />
                    )}
                  </div>
                  <div
                    className={cn(
                      "flex-1 whitespace-pre-wrap break-all",
                      isAdded && "text-green-700 dark:text-green-300",
                      isRemoved && "text-red-700 dark:text-red-300",
                      isUnchanged && "text-foreground/80"
                    )}
                  >
                    {line || " "}
                  </div>
                </div>
              )
            })
          })}
        </div>
      </CardContent>
    </Card>
  )
}
