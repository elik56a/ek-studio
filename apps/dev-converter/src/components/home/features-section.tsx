import { Card } from "@ek-studio/ui"
import { Code2, Lock, Zap } from "lucide-react"

export default function FeaturesSection() {
  return (
    <section className="space-y-12 px-4">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Why Developers Choose DevConverter
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground">
          Whether you're debugging APIs, encoding data, or validating tokens, our developer tools
          help you work faster. No installation needed—just open your browser and start using
          professional-grade tools instantly.
        </p>
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-4">
          <Card className="glass border-0 text-center py-8 px-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Lightning Fast
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              All processing happens in your browser. No server delays, no waiting. Handle large
              files and complex operations without breaking a sweat.
            </p>
          </Card>

          <Card className="glass border-0 text-center py-8 px-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              100% Private
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Your data never leaves your device. Complete privacy guaranteed. Perfect for handling
              sensitive information like API keys and tokens.
            </p>
          </Card>

          <Card className="glass border-0 text-center py-8 px-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 sm:col-span-2 md:col-span-1">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
              <Code2 className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Developer First
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Keyboard shortcuts, dark mode, syntax highlighting, and features developers actually
              need for maximum efficiency.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
