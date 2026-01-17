# SidePanel Component

A simple side panel component that slides in from the left or right side of the screen with a backdrop overlay.

## Usage

```tsx
import { SidePanel } from "@ek-studio/ui"
import { useState } from "react"

function MyComponent() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Panel</button>
      
      <SidePanel
        open={open}
        onOpenChange={setOpen}
        title="My Panel"
      >
        <div className="p-4">
          <p>Panel content goes here</p>
        </div>
      </SidePanel>
    </>
  )
}
```

## Props

- `open` (required): Boolean to control panel visibility
- `onOpenChange` (required): Callback when panel should open/close
- `title` (optional): Title displayed in the panel header
- `children` (required): Content to display in the panel
- `side` (optional): "left" | "right" (default: "right")
- `width` (optional): CSS width value (default: "400px")
- `className` (optional): Additional CSS classes for the panel

## Features

- Smooth slide-in/out animation
- Backdrop overlay with blur effect
- Close on backdrop click
- Close on Escape key press
- Close button in header (when title is provided)
- Scrollable content area
- Customizable width and side
- Accessible with proper ARIA attributes

## Examples

### Right Side Panel (default)
```tsx
<SidePanel open={open} onOpenChange={setOpen} title="Settings">
  <div className="p-4">Settings content</div>
</SidePanel>
```

### Left Side Panel
```tsx
<SidePanel open={open} onOpenChange={setOpen} title="Menu" side="left">
  <nav className="p-4">Navigation items</nav>
</SidePanel>
```

### Custom Width
```tsx
<SidePanel open={open} onOpenChange={setOpen} title="Details" width="600px">
  <div className="p-4">Wide panel content</div>
</SidePanel>
```

### Without Title (no header)
```tsx
<SidePanel open={open} onOpenChange={setOpen}>
  <div className="p-4">Content without header</div>
</SidePanel>
```
