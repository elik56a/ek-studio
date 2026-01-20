import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  Textarea,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@ek-studio/ui"
import { cn } from "@ek-studio/ui"
import { AlertCircle, ArrowLeftRight, Zap } from "lucide-react"

import { useOutputAnimation } from "@/hooks/use-output-animation"

interface EditorPanelProps {
  inputValue?: string
  outputValue: string
  onInputChange?: (value: string) => void
  inputPlaceholder?: string
  outputPlaceholder?: string
  inputLabel?: string
  outputLabel?: string
  className?: string
  status?: React.ReactNode
  hasError?: boolean
  errorMessage?: string
  errorDetails?: string // Additional error details or suggestions
  customOutputComponent?: React.ReactNode
  customInputComponent?: React.ReactNode
  showSwapButton?: boolean
  onSwap?: () => void
  outputActions?: React.ReactNode
  inputActions?: React.ReactNode
  showAutoDetect?: boolean // New prop to indicate auto-detection
  autoDetectLabel?: string // Label to show what was detected (e.g., "Encoded", "Plain Text")
  useInputField?: boolean // New prop to use Input instead of Textarea
}

export function EditorPanel({
  inputValue,
  outputValue,
  onInputChange,
  inputPlaceholder = "Enter your input here...",
  outputPlaceholder = "Output will appear here...",
  inputLabel = "Input",
  outputLabel = "Output",
  className,
  status,
  hasError = false,
  errorMessage,
  errorDetails,
  customOutputComponent,
  customInputComponent,
  showSwapButton = false,
  onSwap,
  outputActions,
  inputActions,
  showAutoDetect = false,
  autoDetectLabel,
  useInputField = false,
}: EditorPanelProps) {
  const showInput = inputValue !== undefined && onInputChange !== undefined
  const isOutputAnimating = useOutputAnimation(outputValue)

  return (
    <div className={cn("space-y-4 sm:space-y-8", className)}>
      <div
        className={cn(
          "grid gap-4 sm:gap-8 relative",
          showInput ? "grid-cols-1 xl:grid-cols-2" : "grid-cols-1"
        )}
      >
        {/* Input Panel - Only show if inputValue is provided */}
        {showInput && (
          <Card className="glass border-0 shadow-glow flex flex-col h-full transition-all duration-200">
            <CardHeader className="pb-2 px-4 sm:px-6 border-b border-border/30">
              <div className="flex items-center justify-between gap-2">
                <div className="flex flex-col gap-1">
                  <CardTitle className="text-lg sm:text-xl font-bold text-foreground tracking-tight">
                    {inputLabel}
                  </CardTitle>
                  {/* Auto-detect status text under title */}
                  {showAutoDetect && autoDetectLabel && (
                    <span className="text-xs text-muted-foreground">
                      {inputValue?.trim()
                        ? `Detected: ${autoDetectLabel}`
                        : `Auto-detect: ${autoDetectLabel}`}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-semibold uppercase tracking-wide">
                    Input
                  </span>
                  {inputValue && (
                    <span className="text-xs text-muted-foreground hidden sm:inline font-medium">
                      {inputValue.length} chars
                    </span>
                  )}
                </div>
              </div>
            </CardHeader>
            {/* Input Toolbar - Below divider */}
            {inputActions && (
              <div className="px-4 sm:px-6 py-2">
                <div className="flex items-center justify-start gap-2">
                  {inputActions}
                </div>
              </div>
            )}
            {/* Spacer to match output toolbar height when no input toolbar */}
            {!inputActions && outputActions && (
              <div className="px-4 sm:px-6 py-2">
                <div className="h-[40px]" />
              </div>
            )}
            <CardContent className="flex-1 sm:p-6 pt-3 sm:pt-4">
              {customInputComponent ? (
                customInputComponent
              ) : useInputField ? (
                <Input
                  value={inputValue}
                  onChange={e => onInputChange(e.target.value)}
                  placeholder={inputPlaceholder}
                  autoFocus
                  className="w-full h-11 font-mono text-xs sm:text-sm bg-background/50 border-border/50 focus:bg-background focus:border-primary/50 transition-all duration-200"
                />
              ) : (
                <Textarea
                  value={inputValue}
                  onChange={e => onInputChange(e.target.value)}
                  placeholder={inputPlaceholder}
                  autoFocus
                  className="w-full h-full min-h-[100px] max-h-[800px] resize-none font-mono text-xs sm:text-sm bg-background/50 border-border/50 focus:bg-background focus:border-primary/50 transition-all duration-200"
                />
              )}
            </CardContent>
          </Card>
        )}

        {/* Swap Button - Floating between panels - Only show if input panel exists, temp hiding */}
        {false && (
          <div className="hidden xl:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/1 z-10">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    onClick={onSwap}
                    size="icon"
                    className="h-12 w-12 rounded-full shadow-glow bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 hover:scale-110 transition-all duration-300 border-2 border-background"
                    aria-label="Swap input and output"
                  >
                    <ArrowLeftRight className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Swap input and output</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        )}

        {/* Output Panel */}
        <Card className="glass border-0 shadow-glow flex flex-col h-full transition-all duration-500">
          <CardHeader className="pb-2 px-4 sm:px-6 border-b border-border/30">
            {/* Title Row */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex flex-col gap-1">
                <CardTitle className="text-lg sm:text-xl font-bold text-foreground tracking-tight">
                  {outputLabel}
                </CardTitle>
                {/* Spacer to match input auto-detect label height */}
                {showAutoDetect && autoDetectLabel && (
                  <span className="text-xs text-transparent select-none">
                    Spacer
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-semibold uppercase tracking-wide">
                  Output
                </span>
                {outputValue && !hasError && (
                  <span className="text-xs text-muted-foreground font-medium">
                    {outputValue.length} chars
                  </span>
                )}
              </div>
            </div>
          </CardHeader>
          {/* Action Toolbar - Below divider */}
          {outputActions && (
            <div className="px-4 sm:px-6 py-2">
              <div className="flex items-center justify-end gap-2">
                {outputActions}
              </div>
            </div>
          )}
          {/* Spacer to match input toolbar height when no output toolbar */}
          {!outputActions && inputActions && (
            <div className="px-4 sm:px-6 py-2">
              <div className="h-[40px]" />
            </div>
          )}
          <CardContent className="flex-1 p-3 sm:p-6 pt-3 sm:pt-4">
            {hasError && errorMessage ? (
              <div className="w-full h-full min-h-[100px] flex items-center justify-center bg-red-50/50 dark:bg-red-950/10 border border-red-200 dark:border-red-800 rounded-lg p-4 sm:p-6">
                <div className="text-center space-y-3 sm:space-y-4 max-w-2xl">
                  <div className="flex justify-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-red-100 dark:bg-red-950/50 flex items-center justify-center">
                      <AlertCircle className="h-6 w-6 sm:h-8 sm:w-8 text-red-600 dark:text-red-400" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base sm:text-lg font-semibold text-red-900 dark:text-red-300">
                      {errorMessage}
                    </h3>
                    {errorDetails && (
                      <p className="text-xs sm:text-sm text-red-700 dark:text-red-400 leading-relaxed">
                        {errorDetails}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ) : customOutputComponent ? (
              customOutputComponent
            ) : (
              <Textarea
                value={outputValue}
                readOnly
                placeholder={outputPlaceholder}
                className={cn(
                  "w-full h-full min-h-[100px] max-h-[800px] resize-none font-mono text-xs sm:text-sm bg-muted/30 border-border/50 cursor-default transition-all duration-500",
                  isOutputAnimating && "output-glow-animation"
                )}
                suppressHydrationWarning
              />
            )}
          </CardContent>
        </Card>
      </div>

      {status && <div className="flex justify-center">{status}</div>}
    </div>
  )
}
