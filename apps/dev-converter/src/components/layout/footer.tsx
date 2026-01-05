export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-3">DevConverter</h3>
            <p className="text-sm text-muted-foreground">
              Free online developer tools for conversion, formatting, and
              validation.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-3">Popular Tools</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/tools/json-formatter"
                  className="text-muted-foreground hover:text-foreground"
                >
                  JSON Formatter
                </a>
              </li>
              <li>
                <a
                  href="/tools/base64-encode-decode"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Base64 Encoder
                </a>
              </li>
              <li>
                <a
                  href="/tools/jwt-decoder"
                  className="text-muted-foreground hover:text-foreground"
                >
                  JWT Decoder
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-3">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/categories/json-data"
                  className="text-muted-foreground hover:text-foreground"
                >
                  JSON & Data
                </a>
              </li>
              <li>
                <a
                  href="/categories/encoding"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Encoding
                </a>
              </li>
              <li>
                <a
                  href="/categories/security"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Security
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/privacy-policy"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © 2026 DevConverter. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
