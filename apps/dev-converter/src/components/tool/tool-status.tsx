import { AlertCircle, CheckCircle2, Info, Loader2 } from "lucide-react"

import { Badge } from "@ek-studio/ui"
import { cn } from "@ek-studio/ui"

interface ToolStatusProps {
  status: "idle" | "loading" | "success" | "error" | "info"
  message?: string
  details?: React.ReactNode
  className?: string
}

export function ToolStatus({
  status,
  message,
  details,
  className,
}: ToolStatusProps) {
  if (status === "idle" && !message) return null

  const statusConfig = {
    idle: {
      icon: <Info className="h-3 w-3" />,
      variant: "secondary" as const,
      className: "text-muted-foreground bg-muted",
    },
    loading: {
      icon: <Loader2 className="h-3 w-3 animate-spin" />,
      variant: "secondary" as const,
      className: "text-blue-600 bg-blue-50 border-blue-200",
    },
    success: {
      icon: <CheckCircle2 className="h-3 w-3" />,
      variant: "default" as const,
      className: "text-green-600 bg-green-50 border-green-200",
    },
    error: {
      icon: <AlertCircle className="h-3 w-3" />,
      variant: "destructive" as const,
      className: "text-red-600 bg-red-50 border-red-200",
    },
    info: {
      icon: <Info className="h-3 w-3" />,
      variant: "secondary" as const,
      className: "text-blue-600 bg-blue-50 border-blue-200",
    },
  }

  const config = statusConfig[status]

  return (
    <div className="flex items-center gap-3">
      <Badge
        variant={config.variant}
        className={cn(
          "flex items-center gap-1.5 px-3 py-1.5 min-h-[32px]",
          config.className,
          className
        )}
      >
        {config.icon}
        {message && <span className="text-xs">{message}</span>}
      </Badge>
      {details && details}
    </div>
  )
}
