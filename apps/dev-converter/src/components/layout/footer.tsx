import Link from "next/link"
import { Github, Twitter, Mail } from "lucide-react"
import { Logo } from "@/components/layout/logo"

export function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo size="sm" variant="default" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Free, fast, and secure online developer tools. All processing happens in your browser for complete privacy.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Popular Tools</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/json-formatter"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  JSON Formatter
                </Link>
              </li>
              <li>
                <Link
                  href="/base64-encode-decode"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Base64 Encoder
                </Link>
              </li>
              <li>
                <Link
                  href="/jwt-decoder"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  JWT Decoder
                </Link>
              </li>
              <li>
                <Link
                  href="/hash-generator"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Hash Generator
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Categories</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/categories/json-data"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  JSON & Data
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/encoding"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Encoding & Decoding
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/security"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Security & Crypto
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/text"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Text Utilities
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © 2026 DevConverter. All rights reserved.
          </div>
          <div className="text-sm text-muted-foreground">
            Made with ❤️ for developers worldwide
          </div>
        </div>
      </div>
    </footer>
  )
}
