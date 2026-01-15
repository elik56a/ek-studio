"use client"

import { Github, Shield, Star, Zap } from "lucide-react"

export function TrustSection() {
  return (
    <section className="px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Trusted by Developers Worldwide
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of developers who rely on DevConverter for their
            daily workflow
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <TrustCard
            icon={Shield}
            title="Privacy First"
            description="Zero data collection. Your code never leaves your device."
          />
          <TrustCard
            icon={Zap}
            title="Lightning Fast"
            description="Instant processing with no server round trips."
          />
          <TrustCard
            icon={Github}
            title="Open Source"
            description="Transparent code you can review and trust."
          />
          <TrustCard
            icon={Star}
            title="Always Free"
            description="No premium tiers. All features, forever free."
          />
        </div>
      </div>
    </section>
  )
}

function TrustCard({
  icon: Icon,
  title,
  description,
}: {
  icon: any
  title: string
  description: string
}) {
  return (
    <div className="glass rounded-2xl p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
