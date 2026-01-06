"use client"

import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
} from "@ek-studio/ui"
import {
  ArrowRight,
  Code2,
  Database,
  FileText,
  Hash,
  Lock,
  Sparkles,
  Zap,
} from "lucide-react"

import Link from "next/link"

import { Logo } from "@/components/layout/logo"
import { categories } from "@/lib/tools/categories"
import { getAllTools } from "@/lib/tools/registry"

export default function Home() {
  const popularTools = [
    {
      name: "JSON Formatter",
      slug: "json-formatter",
      icon: Database,
      users: "2.1M",
    },
    {
      name: "Base64 Encoder",
      slug: "base64-encode-decode",
      icon: Lock,
      users: "1.8M",
    },
    { name: "JWT Decoder", slug: "jwt-decoder", icon: FileText, users: "1.5M" },
    {
      name: "Hash Generator",
      slug: "hash-generator",
      icon: Hash,
      users: "1.2M",
    },
  ]

  const scrollToCategories = () => {
    document
      .getElementById("categories")
      ?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToPopular = () => {
    document.getElementById("popular")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="gradient-bg min-h-screen w-full">
      <div className="w-full space-y-16 pb-16">
        {/* Hero Section */}
        <div className="text-center space-y-6 sm:space-y-8 pt-8 sm:pt-16 pb-6 sm:pb-8 px-4">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex justify-center mb-4 sm:mb-6">
              <Logo size="xl" variant="default" showTagline={false} />
            </div>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-muted-foreground mb-3 sm:mb-4">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
              <span>Trusted by 10M+ developers worldwide</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent px-4">
              Developer Tools
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground/80">
              That Actually Work
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Lightning-fast, privacy-first tools for JSON formatting, encoding,
              hashing, and more. Everything runs in your browser—no data ever
              leaves your device.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
            <Button
              size="lg"
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-glow"
              onClick={scrollToCategories}
            >
              <Code2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Explore Tools
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
              onClick={scrollToPopular}
            >
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Popular Tools
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 pt-6 sm:pt-8 max-w-2xl mx-auto px-4">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-primary">
                20+
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Tools
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-primary">
                10M+
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Users
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-primary">
                100%
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Private
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-primary">
                0ms
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Server Delay
              </div>
            </div>
          </div>
        </div>

        {/* Popular Tools Section */}
        <div id="popular" className="space-y-6 sm:space-y-8 px-4">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Most Popular Tools
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              The tools developers use every day
            </p>
          </div>

          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {popularTools.map((tool, index) => {
                const IconComponent = tool.icon
                return (
                  <Link key={tool.slug} href={`/${tool.slug}`}>
                    <Card className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 glass border-0">
                      <CardHeader className="pb-3 sm:pb-4">
                        <div className="flex items-center justify-between">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                            <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {tool.users} users
                          </Badge>
                        </div>
                        <CardTitle className="text-base sm:text-lg transition-colors">
                          {tool.name}
                        </CardTitle>
                      </CardHeader>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div id="categories" className="space-y-6 sm:space-y-8 px-4">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold">All Categories</h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Organized tools for every development need
            </p>
          </div>

          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {categories.map((category, index) => {
                const IconComponent = category.icon
                return (
                  <Link key={category.id} href={`/categories/${category.id}`}>
                    <Card className="group h-full hover:shadow-glow transition-all duration-300 hover:-translate-y-1 glass border-0">
                      <CardHeader className="pb-3 sm:pb-4">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-all flex-shrink-0">
                            <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                          </div>
                          <div className="min-w-0">
                            <CardTitle className="text-base sm:text-xl transition-colors">
                              {category.name}
                            </CardTitle>
                            <CardDescription className="text-xs sm:text-sm">
                              {category.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {category.tools.slice(0, 3).map(toolId => (
                            <Badge
                              key={toolId}
                              variant="outline"
                              className="text-xs"
                            >
                              {toolId.replace(/-/g, " ")}
                            </Badge>
                          ))}
                          {category.tools.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{category.tools.length - 3} more
                            </Badge>
                          )}
                        </div>
                        <div className="mt-3 sm:mt-4 flex items-center text-xs sm:text-sm text-muted-foreground transition-colors">
                          <span>{category.tools.length} tools</span>
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        {/* Features Section */}
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
                  Your data never leaves your device. Complete privacy
                  guaranteed.
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
                  Keyboard shortcuts, dark mode, and features developers
                  actually need.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
