"use client"

import { ArrowRight, Code2, Sparkles, Zap } from "lucide-react"

import { useEffect, useState } from "react"

import { Logo } from "@/components/layout/logo"
import { SmoothLink } from "@/components/layout/smooth-link"

import { CodePatternSVG } from "./decorative-svg"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative text-center space-y-6 pt-12 sm:pt-16 pb-8 px-4">
      {/* Decorative background pattern */}
      <CodePatternSVG />

      {/* Logo */}
      <div className="flex justify-center mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <Logo size="lg" variant="default" showTagline={false} />
      </div>

      {/* Main Headline */}
      <div className="space-y-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          <Sparkles className="w-4 h-4" />
          <span>50+ Professional Developer Tools</span>
          <Sparkles className="w-4 h-4" />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
            Developer Tools
          </span>
          <span className="block mt-1 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            That Actually Work
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          Format JSON, decode JWT, encode Base64, generate hashes, and 20+ more
          utilities.
          <span className="block mt-1 font-semibold text-foreground">
            Fast. Private. Free Forever.
          </span>
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
        <SmoothLink
          href="/json-formatter"
          className="group relative inline-flex items-center justify-center w-full sm:w-auto text-lg px-8 py-4 rounded-2xl font-semibold shadow-glow bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Code2 className="w-5 h-5 mr-2 relative z-10" aria-hidden="true" />
          <span className="relative z-10">Try JSON Formatter</span>
          <ArrowRight
            className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform relative z-10"
            aria-hidden="true"
          />
        </SmoothLink>

        <SmoothLink
          href="/categories"
          className="inline-flex items-center justify-center w-full sm:w-auto text-lg px-8 py-4 rounded-2xl font-semibold border-2 border-input bg-background/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 hover:scale-105"
        >
          <Zap className="w-5 h-5 mr-2" aria-hidden="true" />
          <span>Explore All Tools</span>
        </SmoothLink>
      </div>

      {/* Feature Pills */}
      <div className="flex flex-wrap items-center justify-center gap-3 pt-4 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
        {[
          "✓ No Registration",
          "✓ 100% Private",
          "✓ Works Offline",
          "✓ Open Source",
        ].map((feature, index) => (
          <span
            key={index}
            className="px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border text-sm font-medium text-foreground shadow-sm"
          >
            {feature}
          </span>
        ))}
      </div>

      {/* Animated Code Preview */}
      {mounted && (
        <div className="max-w-4xl mx-auto mt-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-600">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition duration-1000" />
            <div className="relative glass rounded-2xl p-6 sm:p-8 border-2 border-primary/10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mt-2" />
                  <div className="w-3 h-3 rounded-full bg-green-500 mt-2" />
                </div>
                <div className="flex-1 text-left">
                  <pre className="text-sm sm:text-base font-mono text-foreground/80 overflow-x-auto">
                    {`{
  "tool": "DevConverter",
  "features": ["fast", "private", "free"],
  "processing": "client-side",
  "dataCollection": false,
  "status": "✓ Ready to use"
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
