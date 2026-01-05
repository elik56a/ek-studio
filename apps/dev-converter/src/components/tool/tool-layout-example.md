# ToolLayout Usage Examples

## Basic Usage with Default Status Details

```tsx
<ToolLayout
  headerProps={{
    title: "My Tool",
    description: "Tool description",
  }}
  editorProps={{
    inputValue: input,
    outputValue: output,
    onInputChange: setInput,
    inputPlaceholder: "Enter input...",
    outputPlaceholder: "Output will appear here...",
    inputLabel: "Input",
    outputLabel: "Output",
  }}
  toolActionsProps={{
    onConvert: handleConvert,
    onCopy: handleCopy,
    onClear: handleClear,
    toolSlug: "my-tool",
    shareData: { input, output },
    isLoading: false,
    hasOutput: !!output,
    convertLabel: "Convert",
    toolName: "My Tool",
  }}
  statusProps={{
    status: "success",
    message: "Conversion completed successfully",
    // No details provided - automatically shows "X lines, Y characters" for success status
  }}
  footerProps={{
    examples: [],
    faqs: [],
    relatedTools: [],
  }}
/>
```

## With Custom Details (Override Default)

```tsx
<ToolLayout
  // ... other props
  statusProps={{
    status: "success",
    message: "Processing complete",
    details: (
      <div className="flex gap-2">
        <Badge variant="secondary">Validated ✓</Badge>
        <Badge variant="secondary">Minified</Badge>
        <Badge variant="secondary">{output.length} bytes</Badge>
      </div>
    ),
  }}
/>
```

## With Custom Details Rendering (Wrap Default)

```tsx
<ToolLayout
  // ... other props
  statusProps={{
    status: "success",
    message: "Processing complete",
    // No details provided - will use default
    customDetailsRender: defaultDetails => (
      <div className="flex items-center gap-4 p-2 bg-green-50 rounded-md">
        {defaultDetails}
        <span className="text-xs text-green-600">✓ Validated & Optimized</span>
      </div>
    ),
  }}
/>
```

## Default Behavior

- **When `details` is not provided** and `status === "success"` and there's output:
  - Automatically shows: `"X lines, Y characters"`
- **When `details` is explicitly provided**:
  - Uses your custom details instead of default
- **When `customDetailsRender` is provided**:
  - Wraps the details (default or custom) with your custom rendering

## Status Types

- `"idle"` - Default state
- `"loading"` - Processing state
- `"success"` - Successful completion (shows default details if output exists)
- `"error"` - Error state
- `"info"` - Information state
