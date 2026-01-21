"use client"

import { Award, Clock, Lock, Users } from "lucide-react"

import { useEffect, useRef, useState } from "react"
import { getToolsCount } from "@/lib/tools/registry"

export function StatsSection() {
  const toolCount = getToolsCount()

  return (
    <section className="px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <StatCard
            icon={Lock}
            value="100%"
            label="Private & Secure"
            description="All processing happens in your browser"
          />
          <StatCard
            icon={Clock}
            value="0ms"
            label="Server Delay"
            description="Instant results, no waiting"
          />
          <StatCard
            icon={Users}
            value={`${toolCount}+`}
            label="Developer Tools"
            description="Growing collection of utilities"
          />
          <StatCard
            icon={Award}
            value="Free"
            label="Forever"
            description="No hidden costs or paywalls"
          />
        </div>
      </div>
    </section>
  )
}

function StatCard({
  icon: Icon,
  value,
  label,
  description,
}: {
  icon: any
  value: string
  label: string
  description: string
}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`glass rounded-2xl p-6 text-center transition-all duration-700 hover:scale-105 hover:shadow-glow ${
        isVisible ? "animate-in fade-in slide-in-from-bottom-4" : "opacity-0"
      }`}
    >
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 mb-4">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
        {value}
      </div>
      <div className="text-base sm:text-lg font-semibold text-foreground mb-1">
        {label}
      </div>
      <div className="text-sm text-muted-foreground">{description}</div>
    </div>
  )
}
