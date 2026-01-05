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
}: EditorPanelProps) {
  return (
    <div className={cn("space-y-6", className)}>
      {toolbar && <div className="flex justify-center">{toolbar}</div>}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="flex flex-col h-full">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium">
                {inputLabel}
              </CardTitle>
              <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                Input
              </span>
            </div>
          </CardHeader>
          <CardContent className="flex-1">
            <Textarea
              value={inputValue}
              onChange={e => onInputChange(e.target.value)}
              placeholder={inputPlaceholder}
              className="w-full h-full min-h-[300px] resize-none font-mono text-sm"
            />
          </CardContent>
        </Card>

        <Card className="flex flex-col h-full">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium">
                {outputLabel}
              </CardTitle>
              <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">
                Output
              </span>
            </div>
          </CardHeader>
          <CardContent className="flex-1">
            <Textarea
              value={outputValue}
              readOnly
              placeholder={outputPlaceholder}
              className="w-full h-full min-h-[300px] resize-none font-mono text-sm bg-muted"
            />
          </CardContent>
        </Card>
      </div>

      {status && <div className="flex justify-center">{status}</div>}
    </div>
  )
}
