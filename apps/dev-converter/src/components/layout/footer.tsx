import { Github, Linkedin, Mail } from "lucide-react"

import Link from "next/link"

import { Logo } from "@/components/layout/logo"
import { SmoothLink } from "@/components/layout/smooth-link"
import { siteConfig } from "@/config/site"

export function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="space-y-4">
            <Logo size="sm" variant="default" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Free, fast, and secure online developer tools. All processing
              happens in your browser for complete privacy.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href={`mailto:${siteConfig.links.email}`}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-foreground">
              Popular Tools
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              <li>
                <SmoothLink
                  href="/json-formatter"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  JSON Formatter
                </SmoothLink>
              </li>
              <li>
                <SmoothLink
                  href="/base64-encode-decode"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Base64 Encoder
                </SmoothLink>
              </li>
              <li>
                <SmoothLink
                  href="/jwt-decoder"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  JWT Decoder
                </SmoothLink>
              </li>
              <li>
                <SmoothLink
                  href="/hash-generator"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Hash Generator
                </SmoothLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-foreground">
              Categories
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              <li>
                <SmoothLink
                  href="/categories/json-data"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  JSON & Data
                </SmoothLink>
              </li>
              <li>
                <SmoothLink
                  href="/categories/encoding"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Encoding & Decoding
                </SmoothLink>
              </li>
              <li>
                <SmoothLink
                  href="/categories/security"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Security & Crypto
                </SmoothLink>
              </li>
              <li>
                <SmoothLink
                  href="/categories/text"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Text Utilities
                </SmoothLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-foreground">
              Company
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              <li>
                <SmoothLink
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </SmoothLink>
              </li>
              <li>
                <SmoothLink
                  href="/faq"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  FAQ
                </SmoothLink>
              </li>
              <li>
                <SmoothLink
                  href="/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </SmoothLink>
              </li>
              <li>
                <SmoothLink
                  href="/terms"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </SmoothLink>
              </li>
              <li>
                <SmoothLink
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </SmoothLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
          <div className="text-sm text-muted-foreground">
            © 2026 {siteConfig.name}. All rights reserved.
          </div>
          <div className="text-sm text-muted-foreground">
            Made with ❤️ for developers worldwide
          </div>
        </div>
      </div>
    </footer>
  )
}
