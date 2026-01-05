import { Badge, Card } from "@ek-studio/ui"
import { cn } from "@ek-studio/ui"

import { EditorPanel } from "./editor-panel"
import { ToolActions } from "./tool-actions"
import { ToolFooter } from "./tool-footer"
import { ToolHeader } from "./tool-header"
import { ToolStatus } from "./tool-status"

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
  // Create the toolbar with ToolActions automatically
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
      <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Header Section - No card, just text */}
        {headerProps && (
          <ToolHeader
            title={headerProps.title}
            description={headerProps.description}
          />
        )}

        {/* Main Tool Section - Enhanced with glassmorphism */}
        <Card className="glass border-0 shadow-glow p-0 md:p-8 overflow-hidden">
          <div className="space-y-8">
            {/* Actions Toolbar - More prominent positioning */}
            <div className="flex justify-center px-4 md:px-0">
              {toolbarWithActions}
            </div>

            {/* Editor Panel - Enhanced spacing */}
            <div className="px-4 md:px-0">
              <EditorPanel 
                {...editorProps}
                hasError={statusProps?.status === "error"}
                className="space-y-8"
              />
            </div>
          </div>
        </Card>

        {/* Footer Section - Separate card for better organization */}
        {(footerProps.examples?.length || footerProps.faqs?.length || footerProps.relatedTools?.length) && (
          <Card className="glass border-0 shadow-glow p-8">
            <ToolFooter {...footerProps} />
          </Card>
        )}
      </div>
    </div>
  )
}
