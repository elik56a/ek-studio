"use client"

import { cn } from "@ek-studio/ui"
import { Calendar, Clock, Globe, Hash, Timer } from "lucide-react"

interface TimestampDisplayProps {
  timestamp: number
  iso: string
  utc: string
  local: string
  relative: string
  className?: string
}

export function TimestampDisplay({
  timestamp,
  iso,
  utc,
  local,
  relative,
  className,
}: TimestampDisplayProps) {
  const items = [
    {
      icon: Hash,
      label: "Unix",
      value: timestamp.toString(),
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Calendar,
      label: "ISO 8601",
      value: iso,
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: Globe,
      label: "UTC",
      value: utc,
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Clock,
      label: "Local",
      value: local,
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-500/10",
    },
    {
      icon: Timer,
      label: "Relative",
      value: relative,
      color: "text-pink-600 dark:text-pink-400",
      bgColor: "bg-pink-500/10",
    },
  ]

  return (
    <div className={cn("space-y-1.5", className)}>
      {items.map((item, index) => {
        const Icon = item.icon
        return (
          <div
            key={index}
            className={cn(
              "flex items-center gap-2 p-2 rounded-md border transition-colors hover:bg-muted/50",
              item.bgColor,
              "border-border/50"
            )}
          >
            <Icon className={cn("h-3.5 w-3.5 flex-shrink-0", item.color)} />
            <span
              className={cn(
                "text-xs font-medium flex-shrink-0 min-w-[60px]",
                item.color
              )}
            >
              {item.label}
            </span>
            <span className="text-xs font-mono text-foreground/90 break-all">
              {item.value}
            </span>
          </div>
        )
      })}
    </div>
  )
}
