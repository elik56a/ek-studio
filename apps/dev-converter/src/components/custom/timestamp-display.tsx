"use client"

import { cn } from "@ek-studio/ui"
import { Calendar, Clock, Globe, Hash, Timer } from "lucide-react"

import { InfoRow } from "@/components/common/info-row"

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
      title: "Unix",
      value: timestamp.toString(),
    },
    {
      icon: Calendar,
      title: "ISO 8601",
      value: iso,
    },
    {
      icon: Globe,
      title: "UTC",
      value: utc,
    },
    {
      icon: Clock,
      title: "Local",
      value: local,
    },
    {
      icon: Timer,
      title: "Relative",
      value: relative,
    },
  ]

  return (
    <div className={cn("space-y-1.5 relative", className)}>
      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 opacity-50 blur-lg -z-10 animate-pulse" />

      {items.map((item, index) => (
        <InfoRow key={index} {...item} />
      ))}
    </div>
  )
}
