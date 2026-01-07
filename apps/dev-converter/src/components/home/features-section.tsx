import { Card } from "@ek-studio/ui"
import { Code2, Lock, Zap } from "lucide-react"

export default function FeaturesSection() {
  return (
    <div className="space-y-6 sm:space-y-8 px-4">
      <div className="text-center space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold">
          Why Choose Our Tools?
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground">
          Built for developers, by developers
        </p>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <Card className="glass border-0 text-center p-6 sm:p-8">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              Lightning Fast
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              All processing happens in your browser. No server delays, no
              waiting.
            </p>
          </Card>

          <Card className="glass border-0 text-center p-6 sm:p-8">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              100% Private
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Your data never leaves your device. Complete privacy guaranteed.
            </p>
          </Card>

          <Card className="glass border-0 text-center p-6 sm:p-8 sm:col-span-2 md:col-span-1">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              Developer First
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Keyboard shortcuts, dark mode, and features developers actually
              need.
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}
