import { Badge, Card } from "@ek-studio/ui"
import { cn } from "@ek-studio/ui"
import { Button } from "@ek-studio/ui"
import { Zap } from "lucide-react"

import { isGeneratorTool } from "@/lib/tools/tool-utils"
import { Tool } from "@/lib/tools/types"
import { BlogToolLinks } from "@/components/internal-links/BlogToolLinks"

import { EditorPanel } from "./editor-panel"
import { ToolActions, ToolActionsProps } from "./tool-actions"
import { ToolFooter } from "./tool-footer"
import { ToolHeader } from "./tool-header"
import { ToolInfo } from "./tool-info"
import { ToolStatus } from "./tool-status"
import { ToolSwitcher } from "./tool-switcher"

interface ToolLayoutProps {
  tool: Tool
  onGenerate?: () => void
  headerProps?: {
    title: string
    description: string
  }
  editorProps?: {
    inputValue?: string
    outputValue: string
    onInputChange?: (value: string) => void
    inputPlaceholder?: string
    outputPlaceholder?: string
    inputLabel?: string
    outputLabel?: string
    errorMessage?: string
    customOutputComponent?: React.ReactNode
    customInputComponent?: React.ReactNode
    showSwapButton?: boolean
    onSwap?: () => void
    showAutoDetect?: boolean
    inputActions?: React.ReactNode
  }
  footerProps: {
    examples?: Array<{ title: string; input: string; description?: string }>
    faqs?: Array<{ question: string; answer: string }>
    relatedTools?: Array<{ name: string; href: string; description: string }>
    onExampleClick?: (input: string) => void
    settings?: React.ReactNode
  }
  toolActionsProps?: ToolActionsProps
  statusProps?: {
    status: "idle" | "loading" | "success" | "error" | "info"
    message?: string
    details?: React.ReactNode // If provided, overrides default details
    customDetailsRender?: (defaultDetails: React.ReactNode) => React.ReactNode
  }
  toolControls?: React.ReactNode | null
  customToolArea?: React.ReactNode
  className?: string
}

export function ToolLayout({
  headerProps,
  editorProps,
  footerProps,
  toolActionsProps,
  statusProps,
  toolControls,
  tool,
  onGenerate,
  customToolArea,
  className,
}: ToolLayoutProps) {
  const showGenerateButton = isGeneratorTool(tool)

  return (
    <div
      className={cn(
        "gradient-bg min-h-screen w-full animate-in fade-in duration-300",
        className
      )}
    >
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-8">
        {/* Main Tool Section - Enhanced with special styling */}
        <Card className="relative overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-card via-card to-primary/5 backdrop-blur-xl">
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

          {/* Animated border glow */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-50 blur-xl -z-10" />

          <div
            id="editor-section"
            className="relative space-y-4 sm:space-y-6 p-3 sm:p-4 md:p-8 scroll-mt-20"
          >
            {/* Header Section - Inside card at the top */}
            {headerProps && (
              <ToolHeader
                title={headerProps.title}
                description={headerProps.description}
              />
            )}

            {/* Custom Tool Area - If provided, use it instead of default editor */}
            {customToolArea ? (
              customToolArea
            ) : (
              <>
                {/* Actions Toolbar with Tool Switcher */}
                <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 sm:gap-4 w-full">
                  {/* Tool Controls - Left */}
                  {toolControls !== null && (
                    <div className="flex justify-start lg:w-auto lg:min-w-[200px]">
                      {toolControls !== undefined
                        ? toolControls
                        : tool && (
                            <ToolSwitcher
                              currentTool={tool}
                              hasInput={!!editorProps?.inputValue}
                            />
                          )}
                    </div>
                  )}

                  {/* Main Generate Button - Center (only for generator tools) */}
                  {showGenerateButton && onGenerate && toolActionsProps && (
                    <div className="flex justify-center lg:flex-1">
                      <Button
                        onClick={onGenerate}
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
                            <span className="drop-shadow-sm">
                              {toolActionsProps.convertLabel}
                            </span>
                          </div>
                        )}
                      </Button>
                    </div>
                  )}

                  {/* Right Spacer - Matches left side width for perfect centering */}
                  {showGenerateButton && toolControls !== null && (
                    <div className="hidden lg:block lg:w-auto lg:min-w-[200px]" />
                  )}

                  {/* Spacer for alignment when no generate button */}
                  {!showGenerateButton && (
                    <div className="hidden lg:block lg:flex-1" />
                  )}
                </div>

                {/* Editor Panel - Enhanced spacing */}
                {editorProps && toolActionsProps && (
                  <div>
                    <EditorPanel
                      {...editorProps}
                      hasError={statusProps?.status === "error"}
                      outputActions={<ToolActions {...toolActionsProps} />}
                      className="space-y-4 sm:space-y-8"
                    />
                  </div>
                )}
              </>
            )}
          </div>
        </Card>

        {/* Info Section - Educational content */}
        {tool.info && (
          <div className="mt-4 sm:mt-6">
            <ToolInfo info={tool.info} toolName={tool.name} />
          </div>
        )}

        {/* Blog Links Section - "Learn More" articles */}
        <div className="mt-4 sm:mt-6">
          <BlogToolLinks toolId={tool.id} />
        </div>

        {/* Footer Section - Separate card for better organization */}
        {(footerProps.examples?.length ||
          footerProps.faqs?.length ||
          footerProps.relatedTools?.length) && (
          <Card className="glass border-0 shadow-glow p-4 sm:p-6 md:p-8 mt-4 sm:mt-6">
            <ToolFooter {...footerProps} />
          </Card>
        )}
      </div>
    </div>
  )
}
