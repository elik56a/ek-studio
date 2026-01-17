"use client"

import { Button, cn } from "@ek-studio/ui"
import { Copy, LucideIcon } from "lucide-react"

import { useCopy } from "@/hooks/use-copy"

interface InfoRowProps {
  icon?: LucideIcon
  title: string
  value: string
  color?: string
  bgColor?: string
  className?: string
}

export function InfoRow({
  icon: Icon,
  title,
  value,
  color = "text-primary/70",
  bgColor = "bg-primary/5",
  className,
}: InfoRowProps) {
  const { copy } = useCopy()

  return (
    <div
      className={cn(
        "flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-md border border-border/50 transition-colors hover:bg-muted/50 group",
        bgColor,
        className
      )}
    >
      {Icon && <Icon className={cn("h-4 w-4 flex-shrink-0", color)} />}
      <span
        className={cn(
          "text-xs sm:text-sm font-bold flex-shrink-0 min-w-[60px] sm:min-w-[80px]",
          color
        )}
      >
        {title}
      </span>
      <span className="text-xs sm:text-sm font-mono text-foreground/90 break-all flex-1">
        {value}
      </span>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => copy(value)}
        className="h-7 w-7 sm:h-8 sm:w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
        title={`Copy ${title}`}
      >
        <Copy className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
      </Button>
    </div>
  )
}
