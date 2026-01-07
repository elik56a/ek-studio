import { Card, CardContent, CardHeader, CardTitle } from "@ek-studio/ui"
import { Cookie, Database, Eye, Globe, Lock, Shield } from "lucide-react"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "DevConverter Privacy Policy - Learn how we protect your data and respect your privacy.",
}

export default function PrivacyPage() {
  return (
    <div className="gradient-bg min-h-screen w-full">
      <div className="container mx-auto px-4 py-12 sm:py-16 space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <Shield className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground">
            Last updated: January 7, 2026
          </p>
        </div>

        {/* Key Points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          <Card className="glass border-0 text-center p-6">
            <Lock className="w-10 h-10 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">100% Client-Side</h3>
            <p className="text-sm text-muted-foreground">
              All processing happens in your browser
            </p>
          </Card>
          <Card className="glass border-0 text-center p-6">
            <Database className="w-10 h-10 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Zero Data Storage</h3>
            <p className="text-sm text-muted-foreground">
              We don't store any of your data
            </p>
          </Card>
          <Card className="glass border-0 text-center p-6 sm:col-span-2 lg:col-span-1">
            <Eye className="w-10 h-10 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">No Tracking</h3>
            <p className="text-sm text-muted-foreground">
              We don't track your activity
            </p>
          </Card>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="glass border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Our Privacy Commitment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                At DevConverter, privacy isn't just a feature—it's our
                foundation. We built our tools with a simple principle: your
                data belongs to you, and only you.
              </p>
              <p className="leading-relaxed">
                Unlike traditional web applications, DevConverter processes
                everything directly in your browser. This means your data never
                leaves your device, never touches our servers, and is never
                stored anywhere except your local machine.
              </p>
            </CardContent>
          </Card>

          <Card className="glass border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5 text-primary" />
                Data Processing
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  What We Don't Collect
                </h4>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Your input data or tool outputs</li>
                  <li>Personal information or identifiers</li>
                  <li>IP addresses or location data</li>
                  <li>Browsing history or behavior patterns</li>
                  <li>Files you upload or process</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  How It Works
                </h4>
                <p className="leading-relaxed">
                  When you use any tool on DevConverter, all processing happens
                  using JavaScript in your browser. The data you input is
                  processed locally and displayed back to you instantly. No
                  network requests are made to process your data.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                Analytics & Performance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                We use privacy-focused analytics (Vercel Analytics) to
                understand basic usage patterns and improve our service. This
                includes:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Page views and navigation patterns</li>
                <li>Device type and browser information</li>
                <li>Performance metrics (page load times)</li>
                <li>General geographic region (country level only)</li>
              </ul>
              <p className="leading-relaxed">
                These analytics are anonymized and aggregated. They help us
                understand which tools are most popular and where we should
                focus our development efforts.
              </p>
            </CardContent>
          </Card>

          <Card className="glass border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cookie className="w-5 h-5 text-primary" />
                Cookies & Local Storage
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                We use local storage and cookies only for essential
                functionality:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  <span className="font-semibold text-foreground">
                    Theme Preference:
                  </span>{" "}
                  To remember if you prefer dark or light mode
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Tool Settings:
                  </span>{" "}
                  To save your preferences for specific tools (like indentation
                  size)
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Recent History:
                  </span>{" "}
                  Optional local history of your recent conversions (stored only
                  on your device)
                </li>
              </ul>
              <p className="leading-relaxed">
                You can clear this data at any time using your browser's
                settings. We never use cookies for tracking or advertising.
              </p>
            </CardContent>
          </Card>

          <Card className="glass border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-primary" />
                Third-Party Services
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                DevConverter uses the following third-party services:
              </p>
              <ul className="space-y-3">
                <li>
                  <span className="font-semibold text-foreground">
                    Vercel (Hosting):
                  </span>{" "}
                  Our website is hosted on Vercel. They may collect basic server
                  logs as part of their service.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Vercel Analytics:
                  </span>{" "}
                  Privacy-focused analytics that don't use cookies or collect
                  personal data.
                </li>
              </ul>
              <p className="leading-relaxed">
                We carefully vet all third-party services to ensure they align
                with our privacy standards.
              </p>
            </CardContent>
          </Card>

          <Card className="glass border-0">
            <CardHeader>
              <CardTitle>Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                Since we don't collect or store your personal data, there's
                nothing for us to access, modify, or delete. You have complete
                control over your data because it never leaves your device.
              </p>
              <p className="leading-relaxed">
                If you have questions about our privacy practices, please
                contact us at privacy@devconverter.dev
              </p>
            </CardContent>
          </Card>

          <Card className="glass border-0">
            <CardHeader>
              <CardTitle>Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                We may update this privacy policy from time to time. We will
                notify users of any material changes by updating the "Last
                updated" date at the top of this policy.
              </p>
              <p className="leading-relaxed">
                We encourage you to review this policy periodically to stay
                informed about how we protect your privacy.
              </p>
            </CardContent>
          </Card>

          <Card className="glass border-0 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="pt-6 text-center space-y-3">
              <Shield className="w-12 h-12 text-primary mx-auto" />
              <h3 className="text-xl font-semibold">Privacy is Our Priority</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                If you have any questions or concerns about our privacy
                practices, we're here to help. Contact us at
                privacy@devconverter.dev
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
