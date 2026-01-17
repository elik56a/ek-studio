# ButtonWithTooltip Component

A simple wrapper component that combines a Button with a Tooltip for easy use.

## Usage

```tsx
import { ButtonWithTooltip } from "@ek-studio/ui"
import { Save } from "lucide-react"

// Icon button with tooltip
<ButtonWithTooltip
  variant="outline"
  size="icon-sm"
  onClick={handleSave}
  tooltip="Save changes"
>
  <Save className="h-4 w-4" />
</ButtonWithTooltip>

// Button with text and tooltip
<ButtonWithTooltip
  variant="default"
  onClick={handleSubmit}
  tooltip="Submit the form"
>
  Submit
</ButtonWithTooltip>

// Custom tooltip position
<ButtonWithTooltip
  variant="ghost"
  size="icon"
  onClick={handleDelete}
  tooltip="Delete item"
  tooltipSide="right"
>
  <Trash className="h-4 w-4" />
</ButtonWithTooltip>
```

## Props

All props from the `Button` component are supported, plus:

- `tooltip` (required): The text to display in the tooltip
- `tooltipSide` (optional): Position of the tooltip - "top" | "right" | "bottom" | "left" (default: "top")

## Features

- Clean, simple API - just add a `tooltip` prop to any button
- Automatically wraps the button with Tooltip components
- Supports all button variants and sizes
- Perfect for icon-only buttons that need labels
- Accessible with proper ARIA attributes from Radix UI
