import Link from "next/link"

import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@ek-studio/ui"
import { categories } from "@/lib/tools/categories"

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Free Online Developer Tools
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Fast, secure, client-side tools for JSON formatting, encoding,
          hashing, and more. No data leaves your browser.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map(category => (
          <Link key={category.id} href={`/categories/${category.id}`}>
            <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">{category.icon}</span>
                  {category.name}
                </CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  {category.tools.slice(0, 3).map(toolId => (
                    <Badge key={toolId} variant="secondary" className="text-xs">
                      {toolId.replace(/-/g, " ")}
                    </Badge>
                  ))}
                  {category.tools.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{category.tools.length - 3} more
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Popular Tools Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Popular Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "JSON Formatter",
            "Base64 Encoder",
            "JWT Decoder",
            "Hash Generator",
          ].map(tool => (
            <Card
              key={tool}
              className="hover:shadow-md transition-shadow cursor-pointer"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{tool}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
