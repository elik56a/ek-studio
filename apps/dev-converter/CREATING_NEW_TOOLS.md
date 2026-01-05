# Creating New Tools Guide

This guide explains how to create new tool pages in the DevConverter app, using the JsonFormatterTool as a reference example.

## Overview

Each tool in DevConverter follows a consistent pattern with:
- A React component that implements the tool logic
- Registration in the tools registry
- Categorization for navigation
- Metadata for SEO and sharing
- Examples and FAQ content

## Step-by-Step Guide

### 1. Create the Tool Component

Create a new file in `src/components/tools/` following the naming pattern `{tool-slug}.tsx`.

**Example: `src/components/tools/base64-encoder.tsx`**

```tsx
"use client"

import { ToolLayout } from "@/components/tool/tool-layout"
import { useKeyboardShortcuts } from "@/hooks/use-keyboard-shortcuts"
import { useToolState } from "@/hooks/use-tool-state"

const Base64EncoderTool = () => {
  const {
    input,
    setInput,
    output,
    setOutput,
    status,
    setStatus,
    statusMessage,
    setStatusMessage,
    handleClear,
    handleCopy,
    toolSlug,
    tool,
    relatedTools,
  } = useToolState()

  // Main conversion function
  const convertText = () => {
    if (!input.trim()) {
      setOutput("")
      setStatus("idle")
      setStatusMessage("")
      return
    }

    setStatus("loading")

    try {
      // Detect if input is Base64 (decode) or plain text (encode)
      const isBase64 = /^[A-Za-z0-9+/]*={0,2}$/.test(input.trim())
      
      if (isBase64) {
        // Try to decode
        const decoded = atob(input.trim())
        setOutput(decoded)
        setStatusMessage("Base64 decoded successfully")
      } else {
        // Encode to Base64
        const encoded = btoa(input)
        setOutput(encoded)
        setStatusMessage("Text encoded to Base64 successfully")
      }
      
      setStatus("success")
    } catch (error) {
      setStatus("error")
      setStatusMessage(error instanceof Error ? error.message : "Conversion failed")
      setOutput("")
    }
  }

  const handleExampleClick = (exampleInput: string) => {
    setInput(exampleInput)
    // Trigger conversion after setting input
    setTimeout(convertText, 0)
  }

  useKeyboardShortcuts({
    onConvert: convertText,
    onCopy: handleCopy,
    onClear: handleClear,
  })

  if (!tool) {
    return <div>Tool not found</div>
  }

  return (
    <ToolLayout
      headerProps={{
        title: tool.name,
        description: tool.description,
      }}
      editorProps={{
        inputValue: input,
        outputValue: output,
        onInputChange: setInput,
        inputPlaceholder: tool.ui.inputPlaceholder,
        outputPlaceholder: tool.ui.outputPlaceholder,
        inputLabel: tool.ui.inputLabel,
        outputLabel: tool.ui.outputLabel,
      }}
      toolActionsProps={{
        onConvert: convertText,
        onCopy: handleCopy,
        onClear: handleClear,
        toolSlug: toolSlug,
        shareData: { input, output },
        isLoading: status === "loading",
        hasOutput: !!output,
        convertLabel: tool.ui.convertLabel,
        toolName: tool.name,
      }}
      statusProps={{
        status: status,
        message: statusMessage,
      }}
      footerProps={{
        examples: tool.examples,
        faqs: tool.faq,
        relatedTools,
        onExampleClick: handleExampleClick,
      }}
    />
  )
}

export default Base64EncoderTool
```

### 2. Register the Tool

Add your tool to the registry in `src/lib/tools/registry.ts`:

1. **Import the component** at the top:
```tsx
import Base64EncoderTool from "@/components/tools/base64-encoder"
```

2. **Add the tool object** to the `tools` array:
```tsx
{
  id: "base64-encoder",
  slug: "base64-encoder", 
  name: "Base64 Encoder & Decoder",
  description: "Encode text to Base64 or decode Base64 back to text",
  category: "encoding", // Must match a category ID
  keywords: ["base64", "encode", "decode", "binary"],
  metadata: {
    title: "Base64 Encoder & Decoder - Encode and Decode Base64 Online",
    description: "Free online Base64 encoder and decoder. Convert text to Base64 encoding or decode Base64 back to readable text.",
    keywords: [
      "base64 encoder",
      "base64 decoder", 
      "base64 converter",
      "binary encoding",
    ],
  },
  examples: [
    {
      title: "Encode text",
      input: "Hello, World!",
      description: "Encode plain text to Base64",
    },
    {
      title: "Decode Base64",
      input: "SGVsbG8sIFdvcmxkIQ==",
      description: "Decode Base64 back to text",
    },
  ],
  faq: [
    {
      question: "What is Base64 encoding?",
      answer: "Base64 is a binary-to-text encoding scheme that represents binary data in ASCII format.",
    },
    {
      question: "When should I use Base64?",
      answer: "Base64 is commonly used for encoding binary data in URLs, emails, and data URIs.",
    },
  ],
  relatedTools: ["url-encode-decode", "html-escape-unescape"],
  ui: {
    inputPlaceholder: "Enter text to encode or Base64 to decode...",
    outputPlaceholder: "Encoded/decoded result will appear here...",
    inputLabel: "Text Input",
    outputLabel: "Base64 Output", 
    convertLabel: "Encode/Decode",
  },
  component: Base64EncoderTool,
}
```

### 3. Add to Category

Update `src/lib/tools/categories.ts` to include your tool in the appropriate category:

```tsx
{
  id: "encoding",
  name: "Encoding & Decoding",
  description: "Tools for encoding and decoding data in various formats",
  icon: "🔐",
  tools: [
    "base64-encoder", // Add your tool ID here
    "url-encode-decode",
    "html-escape-unescape",
    // ... other tools
  ],
}
```

## Tool Component Structure

### Required Props for ToolLayout

The `ToolLayout` component expects these props:

- **`headerProps`**: Tool title and description
- **`editorProps`**: Input/output configuration
- **`toolActionsProps`**: Action buttons (convert, copy, clear, share)
- **`statusProps`**: Status indicator (loading, success, error)
- **`footerProps`**: Examples, FAQs, and related tools

### State Management with useToolState

The `useToolState` hook provides:
- `input/setInput`: Input text state
- `output/setOutput`: Output text state  
- `status/setStatus`: Tool status ("idle" | "loading" | "success" | "error")
- `statusMessage/setStatusMessage`: Status message text
- `handleClear`: Clear all inputs and outputs
- `handleCopy`: Copy output to clipboard
- `tool`: Current tool configuration
- `relatedTools`: Related tools for footer

### Keyboard Shortcuts

Use `useKeyboardShortcuts` to add keyboard support:
```tsx
useKeyboardShortcuts({
  onConvert: convertText,    // Ctrl/Cmd + Enter
  onCopy: handleCopy,        // Ctrl/Cmd + C (when output focused)
  onClear: handleClear,      // Ctrl/Cmd + K
})
```

## Tool Configuration Fields

### Required Fields

- **`id`**: Unique identifier (kebab-case)
- **`slug`**: URL slug (same as id)
- **`name`**: Display name
- **`description`**: Short description
- **`category`**: Category ID (must exist in categories.ts)
- **`keywords`**: Array of search keywords
- **`component`**: React component

### Metadata (SEO)

- **`title`**: Page title for SEO
- **`description`**: Meta description
- **`keywords`**: SEO keywords array

### UI Configuration

- **`inputPlaceholder`**: Input textarea placeholder
- **`outputPlaceholder`**: Output textarea placeholder  
- **`inputLabel`**: Input section label
- **`outputLabel`**: Output section label
- **`convertLabel`**: Convert button text

### Content (Optional)

- **`examples`**: Array of example inputs with descriptions
- **`faq`**: Array of frequently asked questions
- **`relatedTools`**: Array of related tool IDs

## Best Practices

### 1. Error Handling
Always wrap conversion logic in try-catch blocks:
```tsx
try {
  const result = performConversion(input)
  setOutput(result)
  setStatus("success")
  setStatusMessage("Conversion successful")
} catch (error) {
  setStatus("error")
  setStatusMessage(error instanceof Error ? error.message : "Conversion failed")
  setOutput("")
}
```

### 2. Input Validation
Check for empty inputs before processing:
```tsx
if (!input.trim()) {
  setOutput("")
  setStatus("idle")
  setStatusMessage("")
  return
}
```

### 3. Loading States
Set loading status for async operations:
```tsx
setStatus("loading")
// ... perform conversion
setStatus("success")
```

### 4. Example Integration
Implement `handleExampleClick` to populate input from examples:
```tsx
const handleExampleClick = (exampleInput: string) => {
  setInput(exampleInput)
  // Trigger conversion if needed
  setTimeout(convertFunction, 0)
}
```

### 5. Consistent Naming
- Use kebab-case for IDs and slugs
- Use descriptive, action-oriented names
- Keep URLs clean and SEO-friendly

## Testing Your Tool

1. **Start the development server**: `pnpm dev-converter:dev`
2. **Navigate to your tool**: `http://localhost:4000/your-tool-slug`
3. **Test functionality**:
   - Input validation
   - Conversion logic
   - Error handling
   - Examples
   - Keyboard shortcuts
   - Copy/clear functions

## Next Tool to Implement

Based on the registry, the next tool to implement would be **Base64 Encoder & Decoder** (`base64-encode-decode`), as it's already defined but uses a placeholder component.

The implementation should:
1. Auto-detect if input is Base64 (decode) or plain text (encode)
2. Handle encoding/decoding errors gracefully
3. Provide clear examples for both operations
4. Include relevant FAQs about Base64 usage

## File Checklist

When creating a new tool, ensure you've updated:

- [ ] Created component in `src/components/tools/{slug}.tsx`
- [ ] Added import in `src/lib/tools/registry.ts`
- [ ] Added tool object to `tools` array in registry
- [ ] Added tool ID to appropriate category in `src/lib/tools/categories.ts`
- [ ] Tested the tool functionality
- [ ] Verified routing works (`/{slug}`)
- [ ] Checked examples and FAQs display correctly

This structure ensures consistency across all tools and provides a great user experience with proper SEO, sharing capabilities, and accessibility features.