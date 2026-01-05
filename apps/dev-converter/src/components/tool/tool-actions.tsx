import {
  Copy,
  Download,
  Eye,
  EyeOff,
  FileText,
  Maximize2,
  Minimize2,
  MoreHorizontal,
  Printer,
  RotateCcw,
  Save,
  Settings,
  Share2,
  Zap,
} from "lucide-react"

import { useState } from "react"

import { useToast } from "@/components/toast-provider"
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Separator,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@ek-studio/ui"
import { createShareUrl } from "@/lib/share"

interface ToolActionsProps {
  onConvert: () => void
  onCopy: () => void
  onClear: () => void
  toolSlug: string
  shareData: any
  isLoading?: boolean
  hasOutput?: boolean
  convertLabel?: string
  className?: string
  showToasts?: boolean
  outputValue?: string
  inputValue?: string
  toolName?: string
}

export function ToolActions({
  onConvert,
  onCopy,
  onClear,
  toolSlug,
  shareData,
  isLoading = false,
  hasOutput = false,
  convertLabel = "Convert",
  className,
  showToasts = true,
  outputValue = "",
  inputValue = "",
  toolName = "Tool",
}: ToolActionsProps) {
  const [copied, setCopied] = useState(false)
  const [sharing, setSharing] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [previewMode, setPreviewMode] = useState(false)
  const { addToast } = useToast()

  const handleCopy = async () => {
    onCopy()
    setCopied(true)
    if (showToasts) {
      addToast("Copied to clipboard!", "success")
    }
    setTimeout(() => setCopied(false), 2000)
  }

  const handleClear = () => {
    onClear()
    if (showToasts) {
      addToast("Cleared successfully", "success")
    }
  }

  const handleShare = async () => {
    if (!shareData || isLoading) return

    setSharing(true)
    try {
      const shareUrl = createShareUrl(toolSlug, shareData)

      if (navigator.share) {
        await navigator.share({
          title: `DevConverter - ${toolSlug}`,
          url: shareUrl,
        })
        if (showToasts) {
          addToast("Shared successfully!", "success")
        }
      } else {
        await navigator.clipboard.writeText(shareUrl)
        if (showToasts) {
          addToast("Share link copied to clipboard!", "success")
        }
      }
    } catch (error) {
      if (showToasts) {
        addToast("Failed to share", "error")
      }
    }
    setSharing(false)
  }

  const handleDownload = (format: "txt" | "json" | "csv" | "xml") => {
    if (!hasOutput || !outputValue) {
      if (showToasts) {
        addToast("No output to download", "error")
      }
      return
    }

    const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, "-")
    const filename = `${toolSlug}-output-${timestamp}.${format}`

    let content = outputValue
    let mimeType = "text/plain"

    switch (format) {
      case "json":
        mimeType = "application/json"
        try {
          // Try to format as JSON if it's valid JSON
          const parsed = JSON.parse(outputValue)
          content = JSON.stringify(parsed, null, 2)
        } catch {
          // Keep original content if not valid JSON
        }
        break
      case "csv":
        mimeType = "text/csv"
        break
      case "xml":
        mimeType = "application/xml"
        break
      default:
        mimeType = "text/plain"
    }

    const blob = new Blob([content], { type: mimeType })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)

    if (showToasts) {
      addToast(`Downloaded as ${filename}`, "success")
    }
  }

  const handlePrint = () => {
    if (!hasOutput || !outputValue) {
      if (showToasts) {
        addToast("No output to print", "error")
      }
      return
    }

    const printWindow = window.open("", "_blank")
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>${toolName} - Output</title>
            <style>
              body { font-family: monospace; margin: 20px; }
              pre { white-space: pre-wrap; word-wrap: break-word; }
              .header { margin-bottom: 20px; border-bottom: 1px solid #ccc; padding-bottom: 10px; }
            </style>
          </head>
          <body>
            <div class="header">
              <h2>${toolName} - Output</h2>
              <p>Generated on: ${new Date().toLocaleString()}</p>
            </div>
            <pre>${outputValue}</pre>
          </body>
        </html>
      `)
      printWindow.document.close()
      printWindow.print()
    }
  }

  const handleSaveToLocal = () => {
    if (!hasOutput || !outputValue) {
      if (showToasts) {
        addToast("No output to save", "error")
      }
      return
    }

    try {
      const saveData = {
        tool: toolSlug,
        input: inputValue,
        output: outputValue,
        timestamp: new Date().toISOString(),
        toolName,
      }

      const existingSaves = JSON.parse(
        localStorage.getItem("devconverter-saves") || "[]"
      )
      existingSaves.unshift(saveData)

      // Keep only last 10 saves
      const limitedSaves = existingSaves.slice(0, 10)
      localStorage.setItem("devconverter-saves", JSON.stringify(limitedSaves))

      if (showToasts) {
        addToast("Saved to local storage", "success")
      }
    } catch (error) {
      if (showToasts) {
        addToast("Failed to save locally", "error")
      }
    }
  }

  return (
    <TooltipProvider>
      <div className={`flex items-center justify-between w-full ${className}`}>
        {/* Left spacer for balance */}
        <div className="flex-1" />

        {/* Main Action Button - Centered */}
        <div className="flex justify-center">
          <Button
            onClick={onConvert}
            disabled={isLoading}
            size="lg"
            className="min-w-[200px] h-12 text-base font-medium shadow-md hover:shadow-lg transition-all duration-200"
          >
            {isLoading ? (
              <div className="flex items-center gap-3">
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-current border-t-transparent" />
                <span>Processing...</span>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Zap className="h-5 w-5" />
                <span>{convertLabel}</span>
              </div>
            )}
          </Button>
        </div>

        {/* Action Toolbar - Right Side */}
        <div className="flex-1 flex justify-end">
          <div className="flex items-center bg-background border rounded-lg shadow-sm p-1 gap-1">
            {/* Primary Actions */}
            <div className="flex items-center gap-1">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleCopy}
                    disabled={!hasOutput || isLoading}
                    className="h-9 w-9 hover:bg-muted transition-colors cursor-pointer"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Copy output</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleClear}
                    disabled={isLoading}
                    className="h-9 w-9 hover:bg-muted transition-colors cursor-pointer"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Clear all</TooltipContent>
              </Tooltip>
            </div>

            <Separator orientation="vertical" className="h-6" />

            {/* Download Actions */}
            <div className="flex items-center gap-1">
              <DropdownMenu>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        disabled={!hasOutput || isLoading}
                        className="h-9 w-9 hover:bg-muted transition-colors cursor-pointer"
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                  </TooltipTrigger>
                  <TooltipContent>Download output</TooltipContent>
                </Tooltip>
                <DropdownMenuContent align="center" className="w-48">
                  <DropdownMenuItem onClick={() => handleDownload("txt")}>
                    <FileText className="h-4 w-4 mr-2" />
                    Download as TXT
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleDownload("json")}>
                    <FileText className="h-4 w-4 mr-2" />
                    Download as JSON
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleDownload("csv")}>
                    <FileText className="h-4 w-4 mr-2" />
                    Download as CSV
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleDownload("xml")}>
                    <FileText className="h-4 w-4 mr-2" />
                    Download as XML
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleSaveToLocal}
                    disabled={!hasOutput || isLoading}
                    className="h-9 w-9 hover:bg-muted transition-colors cursor-pointer"
                  >
                    <Save className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Save locally</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handlePrint}
                    disabled={!hasOutput || isLoading}
                    className="h-9 w-9 hover:bg-muted transition-colors cursor-pointer"
                  >
                    <Printer className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Print output</TooltipContent>
              </Tooltip>
            </div>

            <Separator orientation="vertical" className="h-6" />

            {/* Utility Actions */}
            <div className="flex items-center gap-1">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setPreviewMode(!previewMode)}
                    disabled={!hasOutput || isLoading}
                    className="h-9 w-9 hover:bg-muted transition-colors cursor-pointer"
                  >
                    {previewMode ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  {previewMode ? "Exit preview" : "Preview mode"}
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="h-9 w-9 hover:bg-muted transition-colors cursor-pointer"
                  >
                    {isExpanded ? (
                      <Minimize2 className="h-4 w-4" />
                    ) : (
                      <Maximize2 className="h-4 w-4" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  {isExpanded ? "Minimize" : "Expand"}
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleShare}
                    disabled={!shareData || isLoading || sharing}
                    className="h-9 w-9 hover:bg-muted transition-colors cursor-pointer"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  {sharing ? "Sharing..." : "Share"}
                </TooltipContent>
              </Tooltip>
            </div>

            <Separator orientation="vertical" className="h-6" />

            {/* More Actions */}
            <DropdownMenu>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-9 w-9 hover:bg-muted transition-colors cursor-pointer"
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                </TooltipTrigger>
                <TooltipContent>More actions</TooltipContent>
              </Tooltip>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem
                  onClick={() => window.open(`/tools/${toolSlug}`, "_blank")}
                >
                  <Maximize2 className="h-4 w-4 mr-2" />
                  Open in new tab
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    const url = `${window.location.origin}/tools/${toolSlug}`
                    navigator.clipboard.writeText(url)
                    if (showToasts) {
                      addToast("Tool URL copied!", "success")
                    }
                  }}
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy tool URL
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => {
                    try {
                      const saves = JSON.parse(
                        localStorage.getItem("devconverter-saves") || "[]"
                      )
                      console.log("Saved conversions:", saves)
                      if (showToasts) {
                        addToast(
                          `Found ${saves.length} saved conversions`,
                          "success"
                        )
                      }
                    } catch {
                      if (showToasts) {
                        addToast("No saved conversions found", "error")
                      }
                    }
                  }}
                >
                  <Settings className="h-4 w-4 mr-2" />
                  View saved conversions
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}
