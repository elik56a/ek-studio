"use client"

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Textarea,
} from "@ek-studio/ui"
import { ArrowDown, GitCompare } from "lucide-react"

import { useState } from "react"

import { DiffViewer } from "@/components/custom/diff-viewer"
import { ToolFooter } from "@/components/tool/tool-footer"
import { ToolHeader } from "@/components/tool/tool-header"
import { ToolSwitcher } from "@/components/tool/tool-switcher"
import { useToolState } from "@/hooks/use-tool-state"
import { DiffResult, compareDiff } from "@/lib/utils/text-utils"

const TextDiffChecker = () => {
  const { tool, relatedTools, handleCopy } = useToolState()
  const [text1, setText1] = useState("")
  const [text2, setText2] = useState("")
  const [diffResult, setDiffResult] = useState<DiffResult | null>(null)
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
        // Scroll to results
        setTimeout(() => {
          document.getElementById("diff-results")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }, 100)
      } else {
        setError(result.error || "Failed to compare texts")
        setDiffResult(null)
      }

      setIsComparing(false)
    }, 300)
  }

  const handleClear = () => {
    setText1("")
    setText2("")
    setDiffResult(null)
    setError(null)
  }

  const handleExampleClick = (exampleInput: string) => {
    const [input1, input2] = exampleInput.split("|||")
    setText1(input1?.trim() || "")
    setText2(input2?.trim() || "")
    setDiffResult(null)
    setError(null)
  }

  const hasInput = !!(text1.trim() || text2.trim())

  return (
    <div className="gradient-bg min-h-screen w-full">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-8 space-y-4 sm:space-y-8">
        {/* Header */}
        <ToolHeader title={tool.name} description={tool.description} />

        {/* Main Tool Section */}
        <Card
          id="editor-section"
          className="glass border-0 shadow-glow p-3 sm:p-4 md:p-8 overflow-hidden scroll-mt-20"
        >
          <div className="space-y-4 sm:space-y-6">
            {/* Dual Input Panels */}
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
                    className="w-full h-full min-h-[200px] resize-none font-mono text-xs sm:text-sm bg-background/50 border-border/50 focus:bg-background focus:border-primary/50 transition-all duration-200"
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
                    className="w-full h-full min-h-[200px] resize-none font-mono text-xs sm:text-sm bg-background/50 border-border/50 focus:bg-background focus:border-primary/50 transition-all duration-200"
                  />
                </CardContent>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
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
          </div>
        </Card>

        {/* Diff Results Section */}
        {(diffResult || error) && (
          <Card
            id="diff-results"
            className="glass border-0 shadow-glow p-3 sm:p-4 md:p-8 scroll-mt-20"
          >
            <div className="space-y-4 sm:space-y-6">
              {/* Results Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <ArrowDown className="h-6 w-6 text-primary" />
                  <h2 className="text-xl sm:text-2xl font-bold">
                    Comparison Results
                  </h2>
                </div>
                {diffResult && (
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                      <span className="text-xs font-semibold text-green-600 dark:text-green-400">
                        +{diffResult.addedLines}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20">
                      <span className="text-xs font-semibold text-red-600 dark:text-red-400">
                        -{diffResult.removedLines}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Error Display */}
              {error && (
                <Card className="glass border-red-500/20 bg-red-500/5">
                  <CardContent className="p-4">
                    <p className="text-red-600 dark:text-red-400">{error}</p>
                  </CardContent>
                </Card>
              )}

              {/* Diff Viewer */}
              {diffResult && <DiffViewer changes={diffResult.changes} />}
            </div>
          </Card>
        )}

        {/* Footer Section */}
        {(tool.examples?.length ||
          tool.faq?.length ||
          relatedTools?.length) && (
          <Card className="glass border-0 shadow-glow p-4 sm:p-6 md:p-8">
            <ToolFooter
              examples={tool.examples}
              faqs={tool.faq}
              relatedTools={relatedTools}
              onExampleClick={handleExampleClick}
            />
          </Card>
        )}
      </div>
    </div>
  )
}

export default TextDiffChecker
