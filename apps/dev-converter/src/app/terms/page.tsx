import { Card, CardContent, CardHeader, CardTitle } from "@ek-studio/ui"
import { AlertCircle, FileText, Scale, Shield } from "lucide-react"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "DevConverter Terms of Service - Read our terms and conditions for using our developer tools.",
}

export default function TermsPage() {
  return (
    <div className="gradient-bg min-h-screen w-full">
      <div className="container mx-auto px-4 py-12 sm:py-16 space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <Scale className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-lg text-muted-foreground">
            Last updated: January 7, 2026
          </p>
        </div>

        {/* Introduction */}
        <Card className="glass border-0 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Agreement to Terms
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p className="leading-relaxed">
              Welcome to DevConverter! By accessing or using our website and
              tools, you agree to be bound by these Terms of Service. If you
              disagree with any part of these terms, please do not use our
              services.
            </p>
            <p className="leading-relaxed">
              DevConverter provides free, client-side developer tools. All
              processing happens in your browser, and we do not collect or store
              your data.
            </p>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="glass border-0">
            <CardHeader>
              <CardTitle>Use of Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Permitted Use
                </h4>
                <p className="leading-relaxed mb-2">
                  You may use DevConverter for any lawful purpose, including:
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Personal development and learning</li>
                  <li>Professional software development</li>
                  <li>Educational purposes</li>
                  <li>Commercial projects</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Prohibited Use
                </h4>
                <p className="leading-relaxed mb-2">You may not:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>
                    Use our services for any illegal or unauthorized purpose
                  </li>
                  <li>
                    Attempt to interfere with or disrupt our services or servers
                  </li>
                  <li>
                    Use automated systems to access our services in a way that
                    sends more requests than a human could reasonably produce
                  </li>
                  <li>
                    Reverse engineer, decompile, or disassemble any part of our
                    services
                  </li>
                  <li>Remove or modify any copyright or proprietary notices</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Intellectual Property
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                The DevConverter website, including its design, code, text,
                graphics, and other content, is owned by DevConverter and
                protected by copyright, trademark, and other intellectual
                property laws.
              </p>
              <p className="leading-relaxed">
                You may not copy, modify, distribute, sell, or lease any part of
                our services without our explicit written permission.
              </p>
            </CardContent>
          </Card>

          <Card className="glass border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-primary" />
                Disclaimer of Warranties
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                DevConverter is provided "as is" and "as available" without any
                warranties of any kind, either express or implied, including but
                not limited to:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Warranties of merchantability or fitness for a purpose</li>
                <li>
                  Warranties that the service will be uninterrupted or
                  error-free
                </li>
                <li>
                  Warranties regarding the accuracy or reliability of results
                </li>
              </ul>
              <p className="leading-relaxed">
                While we strive to provide accurate and reliable tools, we do
                not guarantee that the results will be error-free or suitable
                for your specific needs. Always verify critical outputs.
              </p>
            </CardContent>
          </Card>

          <Card className="glass border-0">
            <CardHeader>
              <CardTitle>Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                To the maximum extent permitted by law, DevConverter shall not
                be liable for any indirect, incidental, special, consequential,
                or punitive damages, or any loss of profits or revenues, whether
                incurred directly or indirectly, or any loss of data, use,
                goodwill, or other intangible losses resulting from:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Your use or inability to use our services</li>
                <li>Any unauthorized access to or use of our servers</li>
                <li>Any bugs, viruses, or other harmful code</li>
                <li>Any errors or omissions in any content</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass border-0">
            <CardHeader>
              <CardTitle>User Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                Since all processing happens in your browser, we never receive,
                store, or have access to any content you input into our tools.
                You retain all rights to your content.
              </p>
              <p className="leading-relaxed">
                You are solely responsible for the content you process using our
                tools and for ensuring you have the necessary rights and
                permissions to use such content.
              </p>
            </CardContent>
          </Card>

          <Card className="glass border-0">
            <CardHeader>
              <CardTitle>Third-Party Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                Our services may contain links to third-party websites or
                services that are not owned or controlled by DevConverter. We
                have no control over and assume no responsibility for the
                content, privacy policies, or practices of any third-party sites
                or services.
              </p>
            </CardContent>
          </Card>

          <Card className="glass border-0">
            <CardHeader>
              <CardTitle>Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                We reserve the right to modify or replace these Terms at any
                time at our sole discretion. If a revision is material, we will
                provide at least 30 days' notice prior to any new terms taking
                effect.
              </p>
              <p className="leading-relaxed">
                By continuing to access or use our services after revisions
                become effective, you agree to be bound by the revised terms.
              </p>
            </CardContent>
          </Card>

          <Card className="glass border-0">
            <CardHeader>
              <CardTitle>Governing Law</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                These Terms shall be governed and construed in accordance with
                the laws of the jurisdiction in which DevConverter operates,
                without regard to its conflict of law provisions.
              </p>
            </CardContent>
          </Card>

          <Card className="glass border-0">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                If you have any questions about these Terms, please contact us
                at legal@devconverter.dev
              </p>
            </CardContent>
          </Card>

          <Card className="glass border-0 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="pt-6 text-center space-y-3">
              <Scale className="w-12 h-12 text-primary mx-auto" />
              <h3 className="text-xl font-semibold">
                Questions About Our Terms?
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're here to help. If you have any questions or concerns about
                these terms, please don't hesitate to reach out at
                legal@devconverter.dev
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
