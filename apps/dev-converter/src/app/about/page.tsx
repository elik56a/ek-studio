import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@ek-studio/ui"
import {
  Code2,
  Heart,
  Lock,
  Sparkles,
  Users,
  Zap,
  Globe,
  Shield,
} from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about DevConverter - free, privacy-first developer tools built by developers, for developers.",
}

export default function AboutPage() {
  return (
    <div className="gradient-bg min-h-screen w-full">
      <div className="container mx-auto px-4 py-12 sm:py-16 space-y-12 sm:space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-4 sm:space-y-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground">
            <Sparkles className="w-4 h-4 text-accent" />
            <span>About DevConverter</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Built for Developers,
            <br />
            By Developers
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            We believe developer tools should be fast, private, and accessible
            to everyone. That's why we created DevConverter.
          </p>
        </div>

        {/* Mission Section */}
        <Card className="glass border-0 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl text-center">
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-center">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              DevConverter was born from a simple frustration: why do we need to
              upload sensitive data to random servers just to format JSON or
              decode Base64?
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              We set out to create a suite of developer tools that respect your
              privacy, work instantly, and are completely free. Every tool runs
              entirely in your browser—your data never touches our servers.
            </p>
          </CardContent>
        </Card>

        {/* Values Grid */}
        <div className="space-y-6 sm:space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <Card className="glass border-0 text-center p-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                <Lock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Privacy First</h3>
              <p className="text-sm text-muted-foreground">
                Your data stays on your device. Always.
              </p>
            </Card>

            <Card className="glass border-0 text-center p-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground">
                No server delays. Instant results every time.
              </p>
            </Card>

            <Card className="glass border-0 text-center p-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Always Free</h3>
              <p className="text-sm text-muted-foreground">
                No paywalls, no subscriptions, no hidden costs.
              </p>
            </Card>

            <Card className="glass border-0 text-center p-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                <Code2 className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Developer UX</h3>
              <p className="text-sm text-muted-foreground">
                Keyboard shortcuts, dark mode, and intuitive design.
              </p>
            </Card>
          </div>
        </div>

        {/* Stats Section */}
        <Card className="glass border-0 max-w-4xl mx-auto">
          <CardContent className="pt-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">
                  10M+
                </div>
                <div className="text-sm text-muted-foreground">
                  Active Users
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">
                  20+
                </div>
                <div className="text-sm text-muted-foreground">
                  Developer Tools
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">
                  180+
                </div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">
                  100%
                </div>
                <div className="text-sm text-muted-foreground">
                  Client-Side
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Story Section */}
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center">
            Our Story
          </h2>
          <Card className="glass border-0">
            <CardContent className="pt-6 space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                DevConverter started in 2024 when a group of developers got
                tired of using clunky, ad-filled tools that required uploading
                sensitive data to unknown servers. We knew there had to be a
                better way.
              </p>
              <p className="leading-relaxed">
                We built the first tool—a JSON formatter—in a weekend. It was
                fast, private, and did exactly what we needed. We shared it with
                friends, and they loved it. Soon, requests started coming in for
                more tools.
              </p>
              <p className="leading-relaxed">
                Today, DevConverter serves over 10 million developers worldwide,
                processing billions of operations every month—all without ever
                storing a single byte of user data. We're proud to be the
                privacy-first choice for developers everywhere.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Commitment Section */}
        <Card className="glass border-0 max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5">
          <CardContent className="pt-8 text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Our Commitment to You
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We promise to keep DevConverter free, fast, and private. No ads,
              no tracking, no data collection. Just great tools that help you
              get your work done.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm font-medium text-primary pt-2">
              <Heart className="w-4 h-4 fill-current" />
              <span>Made with love for the developer community</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
