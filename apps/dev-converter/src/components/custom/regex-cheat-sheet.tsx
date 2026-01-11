"use client"

import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@ek-studio/ui"
import { BookOpen, Copy, Plus, Search, X } from "lucide-react"

import { useMemo, useState } from "react"

import { useCopy } from "@/hooks/use-copy"

interface RegexCheatSheetProps {
  onInsert?: (value: string) => void
}

interface RegexItem {
  category: string
  description: string
  pattern: string
  example?: string
}

const regexItems: RegexItem[] = [
  // Common Tokens
  {
    category: "Tokens",
    description: "Any character",
    pattern: ".",
    example: "a.c matches abc, axc",
  },
  {
    category: "Tokens",
    description: "Any digit",
    pattern: "\\d",
    example: "\\d+ matches 123",
  },
  {
    category: "Tokens",
    description: "Any non-digit",
    pattern: "\\D",
    example: "\\D+ matches abc",
  },
  {
    category: "Tokens",
    description: "Any whitespace",
    pattern: "\\s",
    example: "\\s+ matches spaces",
  },
  {
    category: "Tokens",
    description: "Any non-whitespace",
    pattern: "\\S",
    example: "\\S+ matches word",
  },
  {
    category: "Tokens",
    description: "Any word character",
    pattern: "\\w",
    example: "\\w+ matches word123",
  },
  {
    category: "Tokens",
    description: "Any non-word character",
    pattern: "\\W",
    example: "\\W+ matches !@#",
  },

  // Character Classes
  {
    category: "Classes",
    description: "Range a-z",
    pattern: "[a-z]",
    example: "[a-z]+ matches abc",
  },
  {
    category: "Classes",
    description: "Range A-Z",
    pattern: "[A-Z]",
    example: "[A-Z]+ matches ABC",
  },
  {
    category: "Classes",
    description: "Range 0-9",
    pattern: "[0-9]",
    example: "[0-9]+ matches 123",
  },
  {
    category: "Classes",
    description: "Not in range",
    pattern: "[^a-z]",
    example: "[^a-z] matches A,1,!",
  },
  {
    category: "Classes",
    description: "Set of chars",
    pattern: "[abc]",
    example: "[abc] matches a,b,c",
  },
  {
    category: "Classes",
    description: "All letters",
    pattern: "[a-zA-Z]",
    example: "[a-zA-Z]+ matches Word",
  },

  // Quantifiers
  {
    category: "Quantifiers",
    description: "Zero or more",
    pattern: "*",
    example: "a* matches '', a, aa",
  },
  {
    category: "Quantifiers",
    description: "One or more",
    pattern: "+",
    example: "a+ matches a, aa, aaa",
  },
  {
    category: "Quantifiers",
    description: "Zero or one",
    pattern: "?",
    example: "a? matches '', a",
  },
  {
    category: "Quantifiers",
    description: "Exactly n",
    pattern: "{n}",
    example: "a{3} matches aaa",
  },
  {
    category: "Quantifiers",
    description: "n or more",
    pattern: "{n,}",
    example: "a{2,} matches aa, aaa",
  },
  {
    category: "Quantifiers",
    description: "Between n and m",
    pattern: "{n,m}",
    example: "a{2,4} matches aa,aaa",
  },
  {
    category: "Quantifiers",
    description: "Non-greedy",
    pattern: "*?",
    example: ".*? matches minimal",
  },

  // Anchors
  {
    category: "Anchors",
    description: "Start of string",
    pattern: "^",
    example: "^abc matches abc...",
  },
  {
    category: "Anchors",
    description: "End of string",
    pattern: "$",
    example: "abc$ matches ...abc",
  },
  {
    category: "Anchors",
    description: "Word boundary",
    pattern: "\\b",
    example: "\\bword\\b matches word",
  },
  {
    category: "Anchors",
    description: "Non-word boundary",
    pattern: "\\B",
    example: "\\Bword\\B matches sword",
  },

  // Groups
  {
    category: "Groups",
    description: "Capture group",
    pattern: "(abc)",
    example: "(\\d+) captures numbers",
  },
  {
    category: "Groups",
    description: "Non-capture group",
    pattern: "(?:abc)",
    example: "(?:abc)+ matches abcabc",
  },
  {
    category: "Groups",
    description: "Named group",
    pattern: "(?<name>abc)",
    example: "(?<year>\\d{4})",
  },
  {
    category: "Groups",
    description: "Alternation (OR)",
    pattern: "a|b",
    example: "cat|dog matches cat or dog",
  },
  {
    category: "Groups",
    description: "Backreference",
    pattern: "\\1",
    example: "(\\w)\\1 matches aa, bb",
  },

  // Flags
  {
    category: "Flags",
    description: "Global search",
    pattern: "g",
    example: "/abc/g finds all matches",
  },
  {
    category: "Flags",
    description: "Case insensitive",
    pattern: "i",
    example: "/abc/i matches ABC",
  },
  {
    category: "Flags",
    description: "Multiline",
    pattern: "m",
    example: "/^abc/m matches line start",
  },
  {
    category: "Flags",
    description: "Dot matches newline",
    pattern: "s",
    example: "/a.b/s matches a\\nb",
  },

  // Common Patterns
  {
    category: "Patterns",
    description: "Email",
    pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
    example: "user@domain.com",
  },
  {
    category: "Patterns",
    description: "Phone (US)",
    pattern: "^\\(?[0-9]{3}\\)?[-. ]?[0-9]{3}[-. ]?[0-9]{4}$",
    example: "(555) 123-4567",
  },
  {
    category: "Patterns",
    description: "URL",
    pattern: "^https?:\\/\\/[^\\s/$.?#].[^\\s]*$",
    example: "https://example.com",
  },
  {
    category: "Patterns",
    description: "IPv4",
    pattern: "^(?:[0-9]{1,3}\\.){3}[0-9]{1,3}$",
    example: "192.168.1.1",
  },
  {
    category: "Patterns",
    description: "Hex color",
    pattern: "^#?[a-fA-F0-9]{6}$",
    example: "#FF5733",
  },
  {
    category: "Patterns",
    description: "Strong password",
    pattern:
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
    example: "MyPass123!",
  },
]

// Helper function to highlight search matches
const highlightMatch = (text: string, query: string) => {
  if (!query.trim()) {
    return text
  }

  const regex = new RegExp(
    `(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
    "gi"
  )
  const parts = text.split(regex)

  return (
    <span>
      {parts.map((part, index) =>
        regex.test(part) ? (
          <mark
            key={index}
            className="bg-yellow-200 dark:bg-yellow-800 px-0.5 rounded"
          >
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </span>
  )
}

export const RegexCheatSheet = ({ onInsert }: RegexCheatSheetProps) => {
  const { copy } = useCopy({ successMessage: "Pattern copied!" })
  const [searchQuery, setSearchQuery] = useState("")

  const handleInsert = (pattern: string) => {
    if (onInsert) {
      onInsert(pattern)
    }
  }

  // Filter items based on search query
  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) {
      return regexItems
    }

    const query = searchQuery.toLowerCase()
    return regexItems.filter(
      item =>
        item.description.toLowerCase().includes(query) ||
        item.pattern.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        (item.example && item.example.toLowerCase().includes(query))
    )
  }, [searchQuery])

  const groupedItems = filteredItems.reduce(
    (acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = []
      }
      acc[item.category].push(item)
      return acc
    },
    {} as Record<string, RegexItem[]>
  )

  const clearSearch = () => {
    setSearchQuery("")
  }

  return (
    <TooltipProvider>
      <div className="h-full flex flex-col space-y-3">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search patterns..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="pl-9 pr-9 h-9 text-sm"
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearSearch}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 p-0 hover:bg-muted"
            >
              <X className="h-3 w-3" />
            </Button>
          )}
        </div>

        {/* Results */}
        <div className="flex-1 overflow-y-auto">
          {filteredItems.length === 0 ? (
            <div className="p-6 text-center text-muted-foreground">
              <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">No patterns found</p>
            </div>
          ) : (
            <div className="space-y-4">
              {Object.entries(groupedItems).map(([category, items]) => (
                <div key={category} className="space-y-2">
                  <div className="flex items-center justify-between border-b border-border/30 pb-1">
                    <h4 className="text-sm font-bold text-primary">
                      {category}
                    </h4>
                    <Badge variant="secondary" className="text-xs px-2 py-0.5">
                      {items.length}
                    </Badge>
                  </div>

                  <div className="space-y-1">
                    {items.map((item, index) => (
                      <div
                        key={`${category}-${index}`}
                        className="group p-2 rounded border border-border/30 hover:border-border/60 hover:bg-muted/20 transition-all"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0 space-y-1">
                            <div className="text-xs font-medium text-foreground truncate">
                              {highlightMatch(item.description, searchQuery)}
                            </div>
                            <code className="text-xs bg-muted/50 px-1.5 py-0.5 rounded font-mono block break-all">
                              {highlightMatch(item.pattern, searchQuery)}
                            </code>
                          </div>
                          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => copy(item.pattern)}
                                  className="h-6 w-6 p-0 hover:bg-primary/10"
                                >
                                  <Copy className="h-3 w-3" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Copy</p>
                              </TooltipContent>
                            </Tooltip>
                            {onInsert && (
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="default"
                                    size="sm"
                                    onClick={() => handleInsert(item.pattern)}
                                    className="h-6 w-6 p-0"
                                  >
                                    <Plus className="h-3 w-3" />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Insert</p>
                                </TooltipContent>
                              </Tooltip>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </TooltipProvider>
  )
}
