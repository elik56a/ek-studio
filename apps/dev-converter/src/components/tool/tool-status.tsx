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
      icon: <Info className="h-4 w-4" />,
      variant: "secondary" as const,
      className: "text-muted-foreground bg-muted/50 border-muted",
    },
    loading: {
      icon: <Loader2 className="h-4 w-4 animate-spin" />,
      variant: "secondary" as const,
      className: "text-blue-600 bg-blue-50 border-blue-200 dark:text-blue-400 dark:bg-blue-950/50 dark:border-blue-800",
    },
    success: {
      icon: <CheckCircle2 className="h-4 w-4" />,
      variant: "default" as const,
      className: "text-green-600 bg-green-50 border-green-200 dark:text-green-400 dark:bg-green-950/50 dark:border-green-800",
    },
    error: {
      icon: <AlertCircle className="h-4 w-4" />,
      variant: "destructive" as const,
      className: "text-red-600 bg-red-50 border-red-200 dark:text-red-400 dark:bg-red-950/50 dark:border-red-800",
    },
    info: {
      icon: <Info className="h-4 w-4" />,
      variant: "secondary" as const,
      className: "text-blue-600 bg-blue-50 border-blue-200 dark:text-blue-400 dark:bg-blue-950/50 dark:border-blue-800",
    },
  }

  const config = statusConfig[status]

  return (
    <div className="flex items-center gap-4">
      <Badge
        variant={config.variant}
        className={cn(
          "flex items-center gap-2 px-4 py-2 min-h-[40px] text-sm font-medium rounded-full shadow-sm",
          config.className,
          className
        )}
      >
        {config.icon}
        {message && <span>{message}</span>}
      </Badge>
      {details && (
        <div className="flex items-center gap-2">
          {details}
        </div>
      )}
    </div>
  )
}
