export default function ToolLoading() {
  return (
    <div className="gradient-bg min-h-screen w-full">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-8 space-y-4 sm:space-y-8">
        {/* Header skeleton */}
        <div className="space-y-2 animate-pulse">
          <div className="h-10 bg-muted/30 rounded-lg w-2/3" />
          <div className="h-6 bg-muted/20 rounded-lg w-1/2" />
        </div>

        {/* Main tool skeleton */}
        <div className="glass border-0 shadow-glow p-3 sm:p-4 md:p-8 rounded-2xl">
          <div className="space-y-4 sm:space-y-8 animate-pulse">
            {/* Toolbar skeleton */}
            <div className="h-12 bg-muted/30 rounded-lg" />

            {/* Editor skeleton */}
            <div className="grid gap-4 sm:gap-8 grid-cols-1 xl:grid-cols-2">
              <div className="h-[400px] bg-muted/20 rounded-lg" />
              <div className="h-[400px] bg-muted/20 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
