"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { ArrowRight, Code2, Sparkles, Zap, Database, Lock, FileText, Hash, Search, TrendingUp, Star } from "lucide-react"

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
import { Logo } from "@/components/layout/logo"
import { categories } from "@/lib/tools/categories"
import { getAllTools, searchTools } from "@/lib/tools/registry"

export default function Home() {
  const popularTools = [
    { name: "JSON Formatter", slug: "json-formatter", icon: Database, users: "2.1M" },
    { name: "Base64 Encoder", slug: "base64-encode-decode", icon: Lock, users: "1.8M" },
    { name: "JWT Decoder", slug: "jwt-decoder", icon: FileText, users: "1.5M" },
    { name: "Hash Generator", slug: "hash-generator", icon: Hash, users: "1.2M" },
  ]

  const scrollToCategories = () => {
    document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToPopular = () => {
    document.getElementById('popular')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="gradient-bg min-h-screen w-full">
      <div className="w-full space-y-16 pb-16">
        {/* Hero Section */}
        <div className="text-center space-y-8 pt-16 pb-8 px-4">
          <div className="space-y-4">
            <div className="flex justify-center mb-6">
              <Logo size="xl" variant="default" showTagline={false} />
            </div>
            <div className="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground mb-4">
              <Sparkles className="w-4 h-4 text-accent" />
              <span>Trusted by 10M+ developers worldwide</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Developer Tools
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80">
              That Actually Work
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Lightning-fast, privacy-first tools for JSON formatting, encoding, hashing, and more. 
              Everything runs in your browser—no data ever leaves your device.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 shadow-glow"
              onClick={scrollToCategories}
            >
              <Code2 className="w-5 h-5 mr-2" />
              Explore Tools
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={scrollToPopular}
            >
              <Zap className="w-5 h-5 mr-2" />
              Popular Tools
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">20+</div>
              <div className="text-sm text-muted-foreground">Tools</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">10M+</div>
              <div className="text-sm text-muted-foreground">Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Private</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">0ms</div>
              <div className="text-sm text-muted-foreground">Server Delay</div>
            </div>
          </div>
        </div>

        {/* Popular Tools Section */}
        <div id="popular" className="space-y-8 px-4">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Most Popular Tools</h2>
            <p className="text-muted-foreground">The tools developers use every day</p>
          </div>
          
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularTools.map((tool, index) => {
                const IconComponent = tool.icon
                return (
                  <Link key={tool.slug} href={`/${tool.slug}`}>
                    <Card className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 glass border-0">
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {tool.users} users
                          </Badge>
                        </div>
                        <CardTitle className="text-lg transition-colors">
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
        <div id="categories" className="space-y-8 px-4">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">All Categories</h2>
            <p className="text-muted-foreground">Organized tools for every development need</p>
          </div>
          
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => {
                const IconComponent = category.icon
                return (
                  <Link key={category.id} href={`/categories/${category.id}`}>
                    <Card className="group h-full hover:shadow-glow transition-all duration-300 hover:-translate-y-1 glass border-0">
                      <CardHeader className="pb-4">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-all">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-xl transition-colors">
                              {category.name}
                            </CardTitle>
                            <CardDescription className="text-sm">
                              {category.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex flex-wrap gap-2">
                          {category.tools.slice(0, 3).map(toolId => (
                            <Badge key={toolId} variant="outline" className="text-xs">
                              {toolId.replace(/-/g, " ")}
                            </Badge>
                          ))}
                          {category.tools.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{category.tools.length - 3} more
                            </Badge>
                          )}
                        </div>
                        <div className="mt-4 flex items-center text-sm text-muted-foreground transition-colors">
                          <span>{category.tools.length} tools</span>
                          <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
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
        <div className="space-y-8 px-4">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Why Choose Our Tools?</h2>
            <p className="text-muted-foreground">Built for developers, by developers</p>
          </div>
          
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="glass border-0 text-center p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                <p className="text-muted-foreground">
                  All processing happens in your browser. No server delays, no waiting.
                </p>
              </Card>
              
              <Card className="glass border-0 text-center p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">100% Private</h3>
                <p className="text-muted-foreground">
                  Your data never leaves your device. Complete privacy guaranteed.
                </p>
              </Card>
              
              <Card className="glass border-0 text-center p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Code2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Developer First</h3>
                <p className="text-muted-foreground">
                  Keyboard shortcuts, dark mode, and features developers actually need.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
