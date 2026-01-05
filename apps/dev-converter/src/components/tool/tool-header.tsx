interface ToolHeaderProps {
  title: string
  description: string
  className?: string
}

export function ToolHeader({ title, description, className }: ToolHeaderProps) {
  return (
    <div className={`text-center space-y-3 ${className}`}>
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
        {description}
      </p>
    </div>
  )
}
