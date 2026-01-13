import { Github, Linkedin, Mail } from "lucide-react"

import Link from "next/link"

import { Logo } from "@/components/layout/logo"
import { SmoothLink } from "@/components/layout/smooth-link"
import { popularTools } from "@/config/popular-tools"
import { siteConfig } from "@/config/site"
import { categories } from "@/lib/tools/categories"

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
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="DevConverter on GitHub - View Source Code"
                title="View DevConverter source code on GitHub"
              >
                <Github className="w-5 h-5" />
                <span className="sr-only">DevConverter GitHub Repository</span>
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Connect with DevConverter on LinkedIn"
                title="Connect with DevConverter team on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">DevConverter LinkedIn Profile</span>
              </a>
              <a
                href={`mailto:${siteConfig.links.email}`}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email DevConverter Support"
                title="Contact DevConverter via email"
                rel="noopener noreferrer"
              >
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email DevConverter</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-foreground">
              Popular Tools
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              {popularTools.map(tool => (
                <li key={tool.slug}>
                  <Link
                    href={`/${tool.slug}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-foreground">
              Categories
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              {categories.map(category => (
                <li key={category.id}>
                  <Link
                    href={`/categories/${category.id}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-foreground">
              Company
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-sm">
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
                  href="/blog"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  FAQ
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
