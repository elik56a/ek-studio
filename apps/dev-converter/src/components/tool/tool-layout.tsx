import { Badge, Card } from "@ek-studio/ui"
import { cn } from "@ek-studio/ui"
import { Zap } from "lucide-react"
import { Button } from "@ek-studio/ui"

import { EditorPanel } from "./editor-panel"
import { ToolActions } from "./tool-actions"
import { ToolFooter } from "./tool-footer"
import { ToolHeader } from "./tool-header"
import { ToolStatus } from "./tool-status"
import { ToolSwitcher } from "./tool-switcher"
import { Tool } from "@/lib/tools/types"

interface ToolLayoutProps {
  headerProps?: {
    title: string
    description: string
  }
  editorProps: {
    inputValue: string
    outputValue: string
    onInputChange: (value: string) => void
    inputPlaceholder?: string
    outputPlaceholder?: string
    inputLabel?: string
    outputLabel?: string
    errorMessage?: string
    customOutputComponent?: React.ReactNode
  }
  footerProps: {
    examples?: Array<{ title: string; input: string; description?: string }>
    faqs?: Array<{ question: string; answer: string }>
    relatedTools?: Array<{ name: string; href: string; description: string }>
    onExampleClick?: (input: string) => void
    settings?: React.ReactNode
  }
  // New props for automatic ToolActions
  toolActionsProps: {
    onConvert: () => void
    onCopy: () => void
    onClear: () => void
    toolSlug: string
    shareData: any
    isLoading?: boolean
    hasOutput?: boolean
    convertLabel?: string
    toolName?: string
    tool?: Tool  // Add tool here
  }
  // Status props for ToolStatus integration
  statusProps?: {
    status: "idle" | "loading" | "success" | "error" | "info"
    message?: string
    details?: React.ReactNode // If provided, overrides default details
    customDetailsRender?: (defaultDetails: React.ReactNode) => React.ReactNode
  }
  className?: string
}

export function ToolLayout({
  headerProps,
  editorProps,
  footerProps,
  toolActionsProps,
  statusProps,
  className,
}: ToolLayoutProps) {
  // Create the toolbar with ToolActions (just the action buttons, not the convert button)
  const toolbarWithActions = (
    <ToolActions
      onConvert={toolActionsProps.onConvert}
      onCopy={toolActionsProps.onCopy}
      onClear={toolActionsProps.onClear}
      toolSlug={toolActionsProps.toolSlug}
      shareData={toolActionsProps.shareData}
      isLoading={toolActionsProps.isLoading}
      hasOutput={toolActionsProps.hasOutput}
      convertLabel={toolActionsProps.convertLabel}
      outputValue={editorProps.outputValue}
      inputValue={editorProps.inputValue}
      toolName={toolActionsProps.toolName || headerProps?.title}
      showConvertButton={false}
    />
  )

  // Render status with ToolStatus as default
  const renderStatus = () => {
    if (!statusProps) return null

    const { status, message, details, customDetailsRender } = statusProps

    // Create default details if none provided and status is success with output
    const defaultDetails =
      details !== undefined ? (
        details
      ) : status === "success" && editorProps.outputValue ? (
        <div className="flex items-center gap-2 text-xs">
          <Badge variant="secondary">
            {editorProps.outputValue.split("\n").length} lines
          </Badge>
          <Badge variant="secondary">
            {editorProps.outputValue.length} characters
          </Badge>
        </div>
      ) : undefined

    // Use custom details render if provided, otherwise use default/provided details
    const finalDetails = customDetailsRender
      ? customDetailsRender(defaultDetails)
      : defaultDetails

    return (
      <ToolStatus status={status} message={message} details={finalDetails} />
    )
  }

  return (
    <div className={cn("gradient-bg min-h-screen w-full", className)}>
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-8 space-y-4 sm:space-y-8">
        {/* Header Section - No card, just text */}
        {headerProps && (
          <ToolHeader
            title={headerProps.title}
            description={headerProps.description}
          />
        )}

        {/* Main Tool Section - Enhanced with glassmorphism */}
        <Card id="editor-section" className="glass border-0 shadow-glow p-3 sm:p-4 md:p-8 overflow-hidden scroll-mt-20">
          <div className="space-y-4 sm:space-y-8">
            {/* Actions Toolbar with Tool Switcher - All on same level */}
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 sm:gap-4 w-full">
              {/* Tool Switcher - Left (or empty space) */}
              <div className="flex justify-start lg:w-auto lg:min-w-[200px]">
                {toolActionsProps.tool && (
                  <ToolSwitcher 
                    currentTool={toolActionsProps.tool}
                    hasInput={!!editorProps.inputValue}
                  />
                )}
              </div>
              
              {/* Main Action Button - Center */}
              <div className="flex justify-center lg:flex-1">
                <Button
                  onClick={toolActionsProps.onConvert}
                  disabled={toolActionsProps.isLoading}
                  size="lg"
                  className="relative w-full sm:w-auto sm:min-w-[240px] h-14 sm:h-16 text-base sm:text-lg font-bold shadow-glow hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 hover:scale-[1.02] active:scale-[0.98] rounded-2xl border-0 overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  {toolActionsProps.isLoading ? (
                    <div className="flex items-center gap-3 relative z-10">
                      <div className="animate-spin rounded-full h-5 w-5 sm:h-6 sm:w-6 border-3 border-current border-t-transparent" />
                      <span>Processing...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3 relative z-10">
                      <Zap className="h-5 w-5 sm:h-6 sm:w-6 drop-shadow-sm" />
                      <span className="drop-shadow-sm">{toolActionsProps.convertLabel}</span>
                    </div>
                  )}
                </Button>
              </div>

              {/* Action Toolbar - Right */}
              <div className="flex justify-end lg:w-auto lg:min-w-[200px]">
                {toolbarWithActions}
              </div>
            </div>

            {/* Editor Panel - Enhanced spacing */}
            <div>
              <EditorPanel 
                {...editorProps}
                hasError={statusProps?.status === "error"}
                className="space-y-4 sm:space-y-8"
              />
            </div>
          </div>
        </Card>

        {/* Footer Section - Separate card for better organization */}
        {(footerProps.examples?.length || footerProps.faqs?.length || footerProps.relatedTools?.length) && (
          <Card className="glass border-0 shadow-glow p-4 sm:p-6 md:p-8">
            <ToolFooter {...footerProps} />
          </Card>
        )}
      </div>
    </div>
  )
}
