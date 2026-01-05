import { Card } from "@ek-studio/ui"
import { cn } from "@ek-studio/ui"

interface ToolContainerProps {
  children: React.ReactNode
  className?: string
}

export function ToolContainer({ children, className }: ToolContainerProps) {
  return (
    <div className={cn("w-full max-w-7xl mx-auto", className)}>
      <Card className="p-0 md:p-6 shadow-sm border">{children}</Card>
    </div>
  )
}
