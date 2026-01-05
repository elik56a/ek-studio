import { AlertCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, Textarea } from "@ek-studio/ui"
import { cn } from "@ek-studio/ui"

interface EditorPanelProps {
  inputValue: string
  outputValue: string
  onInputChange: (value: string) => void
  inputPlaceholder?: string
  outputPlaceholder?: string
  inputLabel?: string
  outputLabel?: string
  className?: string
  toolbar?: React.ReactNode
  status?: React.ReactNode
  hasError?: boolean
  errorMessage?: string
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
  toolbar,
  status,
  hasError = false,
  errorMessage,
}: EditorPanelProps) {
  return (
    <div className={cn("space-y-4 sm:space-y-8", className)}>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-8">
        {/* Input Panel */}
        <Card className="glass border-0 shadow-glow flex flex-col h-full transition-all duration-200">
          <CardHeader className="pb-3 sm:pb-4 px-4 sm:px-6">
            <div className="flex items-center justify-between gap-2">
              <CardTitle className="text-base sm:text-lg font-semibold text-foreground">
                {inputLabel}
              </CardTitle>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-secondary/80 text-secondary-foreground px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-medium">
                  Input
                </span>
                {inputValue && (
                  <span className="text-xs text-muted-foreground hidden sm:inline">
                    {inputValue.length} chars
                  </span>
                )}
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-1 p-3 sm:p-6 pt-0">
            <Textarea
              value={inputValue}
              onChange={e => onInputChange(e.target.value)}
              placeholder={inputPlaceholder}
              className="w-full h-full min-h-[250px] sm:min-h-[300px] resize-none font-mono text-xs sm:text-sm bg-background/50 border-border/50 focus:bg-background focus:border-primary/50 transition-all duration-200"
            />
          </CardContent>
        </Card>

        {/* Output Panel */}
        <Card className="glass border-0 shadow-glow flex flex-col h-full">
          <CardHeader className="pb-3 sm:pb-4 px-4 sm:px-6">
            <div className="flex items-center justify-between gap-2">
              <CardTitle className="text-base sm:text-lg font-semibold text-foreground">
                {outputLabel}
              </CardTitle>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-primary/90 text-primary-foreground px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-medium">
                  Output
                </span>
                {outputValue && !hasError && (
                  <span className="text-xs text-muted-foreground hidden sm:inline">
                    {outputValue.length} chars
                  </span>
                )}
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-1 p-3 sm:p-6 pt-0">
            {hasError && errorMessage ? (
              <div className="w-full h-full min-h-[250px] sm:min-h-[300px] flex items-center justify-center bg-red-50/50 dark:bg-red-950/10 border border-red-200 dark:border-red-800 rounded-lg p-4 sm:p-6">
                <div className="text-center space-y-3 sm:space-y-4 max-w-md">
                  <div className="flex justify-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-red-100 dark:bg-red-950/50 flex items-center justify-center">
                      <AlertCircle className="h-6 w-6 sm:h-8 sm:w-8 text-red-600 dark:text-red-400" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base sm:text-lg font-semibold text-red-900 dark:text-red-300">Error</h3>
                    <p className="text-xs sm:text-sm text-red-700 dark:text-red-400 font-mono break-words">
                      {errorMessage}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <Textarea
                value={outputValue}
                readOnly
                placeholder={outputPlaceholder}
                className="w-full h-full min-h-[250px] sm:min-h-[300px] resize-none font-mono text-xs sm:text-sm bg-muted/30 border-border/50 cursor-default"
              />
            )}
          </CardContent>
        </Card>
      </div>

      {status && <div className="flex justify-center">{status}</div>}
    </div>
  )
}
