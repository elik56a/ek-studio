"use client"

import { Card, CardContent } from "@ek-studio/ui"
import { Clock, Sparkles, Wrench } from "lucide-react"

interface ComingSoonPlaceholderProps {
  toolName?: string
  description?: string
}

export function ComingSoonPlaceholder({
  toolName = "This Tool",
  description = "This amazing tool is under development",
}: ComingSoonPlaceholderProps) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-8">
      <Card className="glass border-0 shadow-glow max-w-md w-full">
        <CardContent className="p-8 text-center space-y-6">
          {/* 3D-style icon */}
          <div className="relative mx-auto w-24 h-24">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl rotate-6 transform"></div>
            <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20">
              <div className="relative">
                <Wrench className="w-12 h-12 text-primary mx-auto" />
                <div className="absolute -top-2 -right-2">
                  <Clock className="w-6 h-6 text-accent animate-pulse" />
                </div>
                <div className="absolute -bottom-1 -left-1">
                  <Sparkles className="w-4 h-4 text-primary animate-bounce" />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Coming Soon
            </h3>
            <p className="text-muted-foreground">{description}</p>
            <div className="text-sm text-muted-foreground/80">
              We're working hard to bring you {toolName.toLowerCase()}!
            </div>
          </div>

          {/* Progress indicator */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Development Progress</span>
              <span>85%</span>
            </div>
            <div className="w-full bg-muted/30 rounded-full h-1.5">
              <div
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"
                style={{ width: "85%" }}
              />
            </div>
          </div>

          {/* Status */}
          <div className="text-xs text-muted-foreground bg-muted/20 rounded-lg p-3">
            🚧 In Development • Expected Soon
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
