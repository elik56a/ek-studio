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

import { useState, useEffect } from "react"

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

  // Listen for fullscreen changes (e.g., when user presses ESC)
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isCurrentlyFullscreen = !!(
        document.fullscreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).msFullscreenElement
      )
      setIsExpanded(isCurrentlyFullscreen)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange)
    document.addEventListener('msfullscreenchange', handleFullscreenChange)

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange)
      document.removeEventListener('msfullscreenchange', handleFullscreenChange)
    }
  }, [])

  const handleCopy = async () => {
    onCopy()
    setCopied(true)
    if (showToasts) {
      addToast("Copied to clipboard!", "success")
    }
    setTimeout(() => setCopied(false), 2000)
  }

  const handleExpand = async () => {
    try {
      if (!isExpanded) {
        // Enter fullscreen
        const elem = document.documentElement
        if (elem.requestFullscreen) {
          await elem.requestFullscreen()
        } else if ((elem as any).webkitRequestFullscreen) {
          await (elem as any).webkitRequestFullscreen()
        } else if ((elem as any).msRequestFullscreen) {
          await (elem as any).msRequestFullscreen()
        }
      
      } else {
        // Exit fullscreen
        if (document.exitFullscreen) {
          await document.exitFullscreen()
        } else if ((document as any).webkitExitFullscreen) {
          await (document as any).webkitExitFullscreen()
        } else if ((document as any).msExitFullscreen) {
          await (document as any).msExitFullscreen()
        }
     
      }
    } catch (error) {
      console.error('Fullscreen error:', error)
      if (showToasts) {
        addToast("Fullscreen not supported", "error")
      }
    }
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
     console.log(error)
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


  return (
    <TooltipProvider>
      <div className={`flex flex-col lg:flex-row items-center justify-between w-full gap-4 ${className}`}>
        {/* Left spacer for balance on desktop */}
        <div className="hidden lg:block flex-1" />

        {/* Main Action Button - Centered */}
        <div className="flex justify-center w-full lg:w-auto">
          <Button
            onClick={onConvert}
            disabled={isLoading}
            size="lg"
            className="relative w-full sm:w-auto sm:min-w-[240px] h-14 sm:h-16 text-base sm:text-lg font-bold shadow-glow hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 hover:scale-[1.02] active:scale-[0.98] rounded-2xl border-0 overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            {isLoading ? (
              <div className="flex items-center gap-3 relative z-10">
                <div className="animate-spin rounded-full h-5 w-5 sm:h-6 sm:w-6 border-3 border-current border-t-transparent" />
                <span>Processing...</span>
              </div>
            ) : (
              <div className="flex items-center gap-3 relative z-10">
                <Zap className="h-5 w-5 sm:h-6 sm:w-6 drop-shadow-sm" />
                <span className="drop-shadow-sm">{convertLabel}</span>
              </div>
            )}
          </Button>
        </div>

        {/* Action Toolbar - Right Side on desktop, below on mobile */}
        <div className="flex-1 flex justify-center lg:justify-end w-full lg:w-auto">
          <div className="flex items-center bg-background border rounded-lg shadow-sm p-1 gap-1 overflow-x-auto max-w-full">
            {/* Primary Actions */}
            <div className="flex items-center gap-1">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleCopy}
                    disabled={!hasOutput || isLoading}
                    className="h-9 w-9 hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer flex-shrink-0"
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
                    className="h-9 w-9 hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer flex-shrink-0"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Clear all</TooltipContent>
              </Tooltip>
            </div>

            <Separator orientation="vertical" className="h-6 hidden sm:block" />

            {/* Download Actions - Hidden on very small screens */}
            <div className="hidden sm:flex items-center gap-1">
              <DropdownMenu>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        disabled={!hasOutput || isLoading}
                        className="h-9 w-9 hover:bg-accent/10 hover:text-accent transition-colors cursor-pointer flex-shrink-0"
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
                    onClick={handlePrint}
                    disabled={!hasOutput || isLoading}
                    className="h-9 w-9 hover:bg-accent/10 hover:text-accent transition-colors cursor-pointer flex-shrink-0"
                  >
                    <Printer className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Print output</TooltipContent>
              </Tooltip>
            </div>

            <Separator orientation="vertical" className="h-6 hidden sm:block" />

            {/* Utility Actions */}
            <div className="flex items-center gap-1">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleExpand}
                    className="h-9 w-9 hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer flex-shrink-0 hidden sm:flex"
                  >
                    {isExpanded ? (
                      <Minimize2 className="h-4 w-4" />
                    ) : (
                      <Maximize2 className="h-4 w-4" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  {isExpanded ? "Exit fullscreen" : "Enter fullscreen"}
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleShare}
                    disabled={!shareData || isLoading || sharing}
                    className="h-9 w-9 hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer flex-shrink-0"
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
                      className="h-9 w-9 hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer flex-shrink-0"
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                </TooltipTrigger>
                <TooltipContent>More actions</TooltipContent>
              </Tooltip>
              <DropdownMenuContent align="end" className="w-48">
                {/* Mobile-only download options */}
                <div className="sm:hidden">
                  <DropdownMenuItem onClick={() => handleDownload("txt")}>
                    <Download className="h-4 w-4 mr-2" />
                    Download as TXT
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleDownload("json")}>
                    <Download className="h-4 w-4 mr-2" />
                    Download as JSON
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handlePrint}>
                    <Printer className="h-4 w-4 mr-2" />
                    Print output
                  </DropdownMenuItem>
                  <div className="my-1 h-px bg-border" />
                </div>
                <DropdownMenuItem
                  onClick={() => window.open(`/${toolSlug}`, "_blank")}
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
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}
