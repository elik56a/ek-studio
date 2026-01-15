"use client"

import { ArrowRight, Sparkles } from "lucide-react"

import { SmoothLink } from "@/components/layout/smooth-link"

export default function CTASection() {
  return (
    <section className="px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-1000" />
          <div className="relative glass rounded-3xl p-12 sm:p-16 text-center border-2 border-primary/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
                <Sparkles className="w-4 h-4" />
                <span>Start Using DevConverter Today</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Ready to Boost Your Productivity?
              </h2>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Join thousands of developers who trust DevConverter for their
                daily workflow. No registration, no credit card, no hassle.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <SmoothLink
                  href="/categories"
                  className="group/btn relative inline-flex items-center justify-center w-full sm:w-auto text-lg px-8 py-4 rounded-2xl font-semibold shadow-glow bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10">Explore All Tools</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform relative z-10" />
                </SmoothLink>

                <SmoothLink
                  href="/json-formatter"
                  className="inline-flex items-center justify-center w-full sm:w-auto text-lg px-8 py-4 rounded-2xl font-semibold border-2 border-input bg-background/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 hover:scale-105"
                >
                  Try JSON Formatter
                </SmoothLink>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-6">
                {["✓ No Sign Up", "✓ 100% Free", "✓ Privacy First"].map(
                  (feature, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border text-sm font-medium"
                    >
                      {feature}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
