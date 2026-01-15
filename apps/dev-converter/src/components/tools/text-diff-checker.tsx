"use client"

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Textarea,
} from "@ek-studio/ui"
import { cn } from "@ek-studio/ui"
import { GitCompare } from "lucide-react"

import { useState } from "react"

import { DiffViewer } from "@/components/custom/diff-viewer"
import { ToolLayout } from "@/components/tool/tool-layout"
import { compareDiff } from "@/features/text/diff"
import { useToolState } from "@/hooks/use-tool-state"

const TextDiffChecker = () => {
  const { tool, relatedTools } = useToolState()
  const [text1, setText1] = useState("")
  const [text2, setText2] = useState("")
  const [diffResult, setDiffResult] = useState<{
    changes: Array<{ value: string; added?: boolean; removed?: boolean }>
    addedLines: number
    removedLines: number
  } | null>(null)
  const [isComparing, setIsComparing] = useState(false)
  const [error, setError] = useState<string | null>(null)

  if (!tool) {
    return <div>Tool not found</div>
  }

  const handleCompare = () => {
    setIsComparing(true)
    setError(null)

    // Small delay for smooth UX
    setTimeout(() => {
      const result = compareDiff(text1, text2)

      if (result.success && result.data) {
        setDiffResult(result.data)
        // Scroll to results header with offset to show "Comparison Results"
        setTimeout(() => {
          const resultsElement = document.getElementById("diff-results")
          if (resultsElement) {
            const yOffset = -50 // Offset to show header
            const y =
              resultsElement.getBoundingClientRect().top +
              window.pageYOffset +
              yOffset
            window.scrollTo({ top: y, behavior: "smooth" })
          }
        }, 100)
      } else {
        setError(result.error || "Failed to compare texts")
        setDiffResult(null)
      }

      setIsComparing(false)
    }, 300)
  }

  const handleExampleClick = (exampleInput: string) => {
    const [input1, input2] = exampleInput.split("|||")
    setText1(input1?.trim() || "")
    setText2(input2?.trim() || "")
    setDiffResult(null)
    setError(null)
  }

  const customToolArea = (
    <div className="space-y-4 sm:space-y-6">
      {/* Dual Input Panels - Full Width */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Text 1 Input */}
        <Card className="glass border-0 shadow-glow flex flex-col">
          <CardHeader className="pb-2 px-4 sm:px-6 border-b border-border/30">
            <div className="flex items-center justify-between gap-2">
              <CardTitle className="text-lg sm:text-xl font-bold text-foreground tracking-tight">
                Original Text
              </CardTitle>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-semibold uppercase tracking-wide">
                  Text 1
                </span>
                {text1 && (
                  <span className="text-xs text-muted-foreground hidden sm:inline font-medium">
                    {text1.length} chars
                  </span>
                )}
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-1 p-3 sm:p-6 pt-3 sm:pt-4">
            <Textarea
              autoFocus
              value={text1}
              onChange={e => setText1(e.target.value)}
              placeholder="Paste your original text here..."
              className="w-full h-full min-h-[300px] max-h-[300px] resize-y font-mono text-xs sm:text-sm bg-background/50 border-border/50 focus:bg-background focus:border-primary/50 transition-all duration-200"
            />
          </CardContent>
        </Card>

        {/* Text 2 Input */}
        <Card className="glass border-0 shadow-glow flex flex-col">
          <CardHeader className="pb-2 px-4 sm:px-6 border-b border-border/30">
            <div className="flex items-center justify-between gap-2">
              <CardTitle className="text-lg sm:text-xl font-bold text-foreground tracking-tight">
                Modified Text
              </CardTitle>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-semibold uppercase tracking-wide">
                  Text 2
                </span>
                {text2 && (
                  <span className="text-xs text-muted-foreground hidden sm:inline font-medium">
                    {text2.length} chars
                  </span>
                )}
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-1 p-3 sm:p-6 pt-3 sm:pt-4">
            <Textarea
              value={text2}
              onChange={e => setText2(e.target.value)}
              placeholder="Paste your modified text here..."
              className="w-full h-full min-h-[300px] max-h-[300px] resize-y font-mono text-xs sm:text-sm bg-background/50 border-border/50 focus:bg-background focus:border-primary/50 transition-all duration-200"
            />
          </CardContent>
        </Card>
      </div>

      {/* Action Button - Bottom */}
      <div className="flex justify-center">
        <Button
          onClick={handleCompare}
          disabled={(!text1.trim() && !text2.trim()) || isComparing}
          size="lg"
          className="relative w-full sm:w-auto sm:min-w-[240px] h-14 sm:h-16 text-base sm:text-lg font-bold shadow-glow hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 hover:scale-[1.02] active:scale-[0.98] rounded-2xl border-0 overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          {isComparing ? (
            <div className="flex items-center gap-3 relative z-10">
              <div className="animate-spin rounded-full h-5 w-5 sm:h-6 sm:w-6 border-3 border-current border-t-transparent" />
              <span>Comparing...</span>
            </div>
          ) : (
            <div className="flex items-center gap-3 relative z-10">
              <GitCompare className="h-5 w-5 sm:h-6 sm:w-6 drop-shadow-sm" />
              <span className="drop-shadow-sm">Compare Texts</span>
            </div>
          )}
        </Button>
      </div>

      {/* Error Display */}
      {error && (
        <Card className="glass border-red-500/20 bg-red-500/5">
          <CardContent className="p-4">
            <p className="text-red-600 dark:text-red-400">{error}</p>
          </CardContent>
        </Card>
      )}

      {/* Diff Results - Expands when available */}
      {diffResult && (
        <div
          id="diff-results"
          className={cn("animate-in fade-in slide-in-from-top-4 duration-500")}
        >
          <DiffViewer
            changes={diffResult.changes}
            addedLines={diffResult.addedLines}
            removedLines={diffResult.removedLines}
          />
        </div>
      )}
    </div>
  )

  return (
    <ToolLayout
      tool={tool}
      headerProps={{
        title: tool.name,
        description: tool.description,
      }}
      customToolArea={customToolArea}
      footerProps={{
        examples: tool.examples,
        faqs: tool.faq,
        relatedTools,
        onExampleClick: handleExampleClick,
      }}
      className="text-diff-checker-page"
    />
  )
}

export default TextDiffChecker
