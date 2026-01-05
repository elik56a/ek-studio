"use client"

import { Menu, Search } from "lucide-react"

import { useState } from "react"

import Link from "next/link"

import { Logo } from "@/components/layout/logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button, Input } from "@ek-studio/ui"
import { categories } from "@/lib/tools/categories"
import { searchTools } from "@/lib/tools/registry"

export function Header() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [showSearch, setShowSearch] = useState(false)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.length > 2) {
      const results = searchTools(query)
      setSearchResults(results)
      setShowSearch(true)
    } else {
      setShowSearch(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 glass border-b backdrop-blur-xl">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Logo size="sm" variant="default" href="/" />

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link 
            href="/" 
            className="transition-colors hover:text-primary relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </Link>
          {categories.slice(0, 4).map(category => (
            <Link
              key={category.id}
              href={`/categories/${category.id}`}
              className="transition-colors hover:text-primary relative group"
            >
              {category.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search tools..."
              value={searchQuery}
              onChange={e => handleSearch(e.target.value)}
              className="pl-10 w-64 bg-background/50 border-border/50 focus:bg-background focus:border-primary/50"
            />
            {showSearch && searchResults.length > 0 && (
              <div className="absolute top-full mt-2 w-full glass border rounded-xl shadow-glow z-50 overflow-hidden">
                {searchResults.slice(0, 5).map(tool => (
                  <Link
                    key={tool.id}
                    href={`/${tool.slug}`}
                    className="block px-4 py-3 hover:bg-accent/10 transition-colors border-b border-border/30 last:border-b-0"
                    onClick={() => setShowSearch(false)}
                  >
                    <div className="font-medium text-foreground">{tool.name}</div>
                    <div className="text-sm text-muted-foreground truncate">
                      {tool.description}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <ThemeToggle />

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}
