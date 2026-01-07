"use client"

import { Badge, Button } from "@ek-studio/ui"
import { Card } from "@ek-studio/ui"
import { Check, Copy, FileText } from "lucide-react"

import { useState } from "react"

import { MimeTypeInfo } from "@/lib/utils/mime-utils"

interface MimeTypeDisplayProps {
  results: MimeTypeInfo[]
  placeholder?: string
}

const categoryColors: Record<string, string> = {
  Image: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  Document:
    "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
  Text: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
  Video: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
  Audio: "bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20",
  Archive:
    "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
  Programming:
    "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
  Font: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
  Other: "bg-gray-500/10 text-gray-600 dark:text-gray-400 border-gray-500/20",
}

export function MimeTypeDisplay({
  results,
  placeholder = "MIME type information will appear here...",
}: MimeTypeDisplayProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const handleCopy = async (mimeType: string, index: number) => {
    try {
      await navigator.clipboard.writeText(mimeType)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  if (!results || results.length === 0) {
    return (
      <div className="w-full h-full min-h-[200px] flex items-center justify-center bg-muted/30 border border-border/50 rounded-lg">
        <div className="text-center space-y-2">
          <FileText className="h-12 w-12 text-muted-foreground/50 mx-auto" />
          <p className="text-sm text-muted-foreground">{placeholder}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-h-[500px] overflow-y-auto space-y-2 pr-2">
      {results.length > 1 && (
        <div className="text-xs text-muted-foreground mb-2">
          Found {results.length} result{results.length !== 1 ? "s" : ""}
        </div>
      )}

      {results.map((item, index) => (
        <Card
          key={`${item.extension}-${index}`}
          className="p-3 bg-background/50 border-border/50 hover:border-primary/30 transition-colors"
        >
          <div className="space-y-2">
            {/* Header with extension and category */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <code className="text-sm font-bold text-foreground bg-muted/50 px-1.5 py-0.5 rounded">
                  {item.extension}
                </code>
                <Badge
                  className={`text-xs ${categoryColors[item.category] || categoryColors.Other}`}
                >
                  {item.category}
                </Badge>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs text-muted-foreground">{item.description}</p>

            {/* MIME Type with Copy Button */}
            <div className="flex items-center gap-2">
              <code className="flex-1 text-xs font-mono bg-muted/30 px-2 py-1.5 rounded border border-border/50 break-all">
                {item.mimeType}
              </code>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handleCopy(item.mimeType, index)}
                className="shrink-0 h-7 w-7 p-0"
                title="Copy MIME type"
              >
                {copiedIndex === index ? (
                  <Check className="h-3.5 w-3.5 text-green-600" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
