"use client"

import { Menu, Search, X } from "lucide-react"

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.length >= 1) {
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

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
          <Link 
            href="/" 
            className="transition-colors hover:text-primary relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </Link>
          {categories.slice(0, 3).map(category => (
            <Link
              key={category.id}
              href={`/categories/${category.id}`}
              className="transition-colors hover:text-primary relative group whitespace-nowrap"
            >
              {category.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          {/* Desktop Search */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            <Input
              placeholder="Search tools..."
              value={searchQuery}
              onChange={e => handleSearch(e.target.value)}
              className="pl-10 w-48 lg:w-64 bg-background/50 border-border/50 focus:bg-background focus:border-primary/50"
            />
            {showSearch && (
              <div className="absolute top-full mt-2 w-full glass border rounded-xl shadow-glow z-50 overflow-hidden max-h-[400px] overflow-y-auto">
                {searchResults.length > 0 ? (
                  searchResults.slice(0, 5).map(tool => (
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
                  ))
                ) : (
                  <div className="px-4 py-6 text-center">
                    <div className="text-muted-foreground text-sm">
                      No results found for "{searchQuery}"
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Try a different search term
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          <ThemeToggle />

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t glass">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {/* Mobile Search */}
            <div className="relative md:hidden">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <Input
                placeholder="Search tools..."
                value={searchQuery}
                onChange={e => handleSearch(e.target.value)}
                className="pl-10 w-full bg-background/50 border-border/50 focus:bg-background focus:border-primary/50"
              />
              {showSearch && (
                <div className="absolute top-full mt-2 w-full glass border rounded-xl shadow-glow z-50 overflow-hidden max-h-[300px] overflow-y-auto">
                  {searchResults.length > 0 ? (
                    searchResults.slice(0, 5).map(tool => (
                      <Link
                        key={tool.id}
                        href={`/${tool.slug}`}
                        className="block px-4 py-3 hover:bg-accent/10 transition-colors border-b border-border/30 last:border-b-0"
                        onClick={() => {
                          setShowSearch(false)
                          setMobileMenuOpen(false)
                        }}
                      >
                        <div className="font-medium text-foreground">{tool.name}</div>
                        <div className="text-sm text-muted-foreground truncate">
                          {tool.description}
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="px-4 py-6 text-center">
                      <div className="text-muted-foreground text-sm">
                        No results found for "{searchQuery}"
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Navigation Links */}
            <nav className="flex flex-col space-y-3 pt-2">
              <Link 
                href="/" 
                className="text-sm font-medium transition-colors hover:text-primary py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              {categories.map(category => (
                <Link
                  key={category.id}
                  href={`/categories/${category.id}`}
                  className="text-sm font-medium transition-colors hover:text-primary py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
