interface ToolHeaderProps {
  title: string
  description: string
  className?: string
}

export function ToolHeader({ title, description, className }: ToolHeaderProps) {
  return (
    <div className={`text-center space-y-2 ${className}`}>
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
        {title}
      </h1>
      <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
        {description}
      </p>
    </div>
  )
}
