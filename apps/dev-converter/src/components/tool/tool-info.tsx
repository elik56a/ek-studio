"use client"

import { Card } from "@ek-studio/ui"
import { cn } from "@ek-studio/ui"
import {
  BookOpen,
  CheckCircle2,
  Lightbulb,
  ListOrdered,
  Sparkles,
} from "lucide-react"

export interface ToolInfo {
  description: string
  howToUse: string[]
  useCases: string[]
  features: string[]
}

export interface ToolInfoProps {
  info: ToolInfo
  toolName: string
  className?: string
}

export function ToolInfo({ info, toolName, className }: ToolInfoProps) {
  if (!info) return null

  return (
    <div className={cn("space-y-4 sm:space-y-6", className)}>
      {/* What is this tool? */}
      <Card className="glass border-0 shadow-glow p-4 sm:p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          </div>
          <div className="flex-1 space-y-2 sm:space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-foreground">
              What is {toolName}?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {info.description}
            </p>
          </div>
        </div>
      </Card>

      {/* How to Use & Common Use Cases - Side by side on larger screens */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* How to Use */}
        <Card id="how-to-use" className="glass border-0 shadow-glow p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300 scroll-mt-20">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <ListOrdered className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-foreground">
                How to Use
              </h2>
            </div>
            <div className="space-y-2 sm:space-y-3">
              {info.howToUse.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-200"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary group-hover:bg-primary/20 transition-colors">
                    {index + 1}
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed flex-1">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Common Use Cases */}
        <Card className="glass border-0 shadow-glow p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-foreground">
                Common Use Cases
              </h2>
            </div>
            <div className="space-y-2 sm:space-y-3">
              {info.useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-200"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 group-hover:bg-primary/20 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed flex-1">
                    {useCase}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* Key Features */}
      <Card className="glass border-0 shadow-glow p-4 sm:p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
        <div className="space-y-4 sm:space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-foreground">
              Key Features
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {info.features.map((feature, index) => {
              // Split feature into title and description if it contains a colon
              const [title, ...descParts] = feature.split(":")
              const description = descParts.join(":").trim()
              const hasDescription = descParts.length > 0

              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/50 hover:bg-card/80 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative p-4 flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors duration-300">
                      <CheckCircle2 className="w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      {hasDescription ? (
                        <>
                          <h3 className="text-sm sm:text-base font-semibold text-foreground mb-1">
                            {title}
                          </h3>
                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                            {description}
                          </p>
                        </>
                      ) : (
                        <p className="text-sm sm:text-base text-foreground leading-relaxed">
                          {feature}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Card>
    </div>
  )
}
