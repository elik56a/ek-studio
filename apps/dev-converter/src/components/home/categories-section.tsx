import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@ek-studio/ui"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface Category {
  id: string
  name: string
  description: string
  icon: any
  tools: string[]
}

export default function CategoriesSection({
  categories,
}: {
  categories: Category[]
}) {
  return (
    <div id="categories" className="space-y-6 sm:space-y-8 px-4">
      <div className="text-center space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold">All Categories</h2>
        <p className="text-sm sm:text-base text-muted-foreground">
          Organized tools for every development need
        </p>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {categories.map(category => {
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
  )
}
