# Creating New Tools Guide

This guide explains how to create new tool pages in the DevConverter app, using a clean, maintainable pattern with reusable utilities and hooks.

## UI Library

This project uses **`@ek-studio/ui`** as the UI component library. When importing UI components, always use:

```tsx
import { Badge, Button, Card } from "@ek-studio/ui"
```

Common components available:

- `Button` - Button component with variants (default, outline, ghost, etc.)
- `Card` - Card container component
- `Badge` - Badge/label component
- `Input`, `Textarea` - Form input components
- `Select`, `Checkbox`, `Label` - Form components
- And more...

## Overview

Each tool in DevConverter follows a consistent pattern with:

- A utility function that handles the core conversion logic
- A React component that uses the `useTool` hook (or `useToolConverter` for backward compatibility)
- Registration in the tools registry
- Categorization for navigation
- Metadata for SEO and sharing
- Examples and FAQ content

## Step-by-Step Guide

### 1. Create the Utility Function

First, create or add to a utility file in `src/lib/utils/` that contains your conversion logic.

**Example: `src/lib/utils/encoding-utils.ts`**

```tsx
export interface ConversionResult<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
  metadata?: Record<string, any>
}

/**
 * Encodes text to Base64 or decodes Base64 to text
 * @param input - The text to encode or Base64 string to decode
 * @returns ConversionResult with encoded/decoded data or error
 */
export function base64Convert(input: string): ConversionResult<string> {
  if (!input.trim()) {
    return {
      success: false,
      error: "Input is empty",
    }
  }

  try {
    // Detect if input is Base64 (decode) or plain text (encode)
    const isBase64 = /^[A-Za-z0-9+/]*={0,2}$/.test(input.trim())

    if (isBase64) {
      // Try to decode
      const decoded = atob(input.trim())
      return {
        success: true,
        data: decoded,
        message: "Base64 decoded successfully",
      }
    } else {
      // Encode to Base64
      const encoded = btoa(input)
      return {
        success: true,
        data: encoded,
        message: "Text encoded to Base64 successfully",
      }
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Conversion failed",
    }
  }
}
```

**Key Points:**

- Return a `ConversionResult` object with `success`, `data`, `error`, and `message` fields
- Handle all validation and error cases
- Include a success `message` that will be displayed to users
- Keep the function pure - no side effects or state management

### 2. Create the Tool Component

Create a new file in `src/components/tools/` following the naming pattern `{tool-slug}.tsx`.

**Example: `src/components/tools/base64-encoder.tsx`**

```tsx
"use client"

import { ToolLayout } from "@/components/tool/tool-layout"
import { useTool } from "@/hooks/use-tool"
import { base64Convert } from "@/lib/utils/encoding-utils"

const Base64EncoderTool = () => {
  const {
    input,
    setInput,
    output,
    status,
    statusMessage,
    handleCopy,
    handleClear,
    toolSlug,
    tool,
    relatedTools,
    convert,
    handleExampleClick,
  } = useTool({
    convertFn: base64Convert,
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
        errorMessage: status === "error" ? statusMessage : undefined,
      }}
      toolActionsProps={{
        onConvert: convert,
        onCopy: handleCopy,
        onClear: handleClear,
        toolSlug: toolSlug,
        shareData: { input, output },
        isLoading: status === "loading",
        hasOutput: !!output,
        convertLabel: tool.ui.convertLabel,
        toolName: tool.name,
        tool: tool,
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

**That's it!** The `useTool` hook handles:

- ✅ Empty input validation
- ✅ Loading state management
- ✅ Success/error handling
- ✅ Example click handling
- ✅ Keyboard shortcuts (Ctrl/Cmd + Enter, C, K)
- ✅ Status messages

### 3. Register the Tool

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

### 4. Add to Category

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

## Architecture Overview

### Separation of Concerns

1. **Utility Functions** (`src/lib/utils/`)
   - Pure conversion logic
   - No React dependencies
   - Easily testable
   - Returns `ConversionResult` with success/error/message

2. **useTool Hook** (`src/hooks/use-tool.ts`)
   - Handles all state management
   - Manages loading/success/error states
   - Provides keyboard shortcuts
   - Handles example clicks
   - Reusable across all tools
   - Supports both `convertFn` (for conversions) and `generateFn` (for generators)

3. **Tool Components** (`src/components/tools/`)
   - Minimal, focused on UI layout
   - Connects utility to hook
   - Configures tool-specific UI elements

### The useTool Hook

The hook provides everything you need:

```tsx
const {
  // State
  input, // Current input value
  setInput, // Set input value
  output, // Current output value
  status, // "idle" | "loading" | "success" | "error"
  statusMessage, // Status message to display

  // Actions
  convert, // Main conversion function (for convertFn)
  generate, // Main generation function (for generateFn)
  handleCopy, // Copy output to clipboard
  handleClear, // Clear all inputs/outputs
  handleExampleClick, // Handle example click
  handleSwap, // Swap input and output

  // Tool data
  toolSlug, // Current tool slug
  tool, // Tool configuration
  relatedTools, // Related tools list
} = useTool({
  convertFn: yourConversionFunction, // For conversion tools
  // OR
  generateFn: yourGenerationFunction, // For generator tools
  successMessage: "Optional override message", // Optional
})
```

**Note:** `useToolConverter` is still available as an alias for backward compatibility.

### ConversionResult Interface

All utility functions should return this structure:

```tsx
interface ConversionResult<T = any> {
  success: boolean // Whether conversion succeeded
  data?: T // The converted data (if successful)
  error?: string // Error message (if failed)
  message?: string // Success message to display
  metadata?: Record<string, any> // Optional metadata (e.g., row count)
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

### Custom Output Components

For tools that need special output rendering (like JSON with collapsible viewer):

```tsx
editorProps={{
  // ... other props
  customOutputComponent: (
    <CollapsibleJsonViewer
      value={output}
      placeholder={tool.ui.outputPlaceholder}
    />
  ),
}}
```

### Custom Tool Controls and Settings

You can add custom controls to your tool using the `toolControls` prop. This is perfect for tool-specific options like format selectors, mode toggles, etc.

**Using Select for Options (Recommended):**

The `Select` component is a wrapper around `Dropdown` that handles state management internally:

```tsx
import { Select, SelectOption } from "@/components/common/select"

const MyTool = () => {
  const [selectedOption, setSelectedOption] = useState("option1")

  const options: SelectOption[] = [
    { value: "option1", label: "Option 1", description: "Description 1" },
    { value: "option2", label: "Option 2", description: "Description 2" },
    { value: "option3", label: "Option 3", description: "Description 3" },
  ]

  const customControls = (
    <Select
      options={options}
      value={selectedOption}
      onChange={setSelectedOption}
      align="left"
      size="sm"
    />
  )

  return (
    <ToolLayout
      // ... other props
      toolControls={customControls} // Add custom controls here
      footerProps={{
        examples: tool.examples,
        faqs: tool.faq,
        relatedTools,
        onExampleClick: handleExampleClick,
      }}
    />
  )
}
```

**Using Dropdown for Advanced Cases:**

For more complex dropdown needs with custom trigger or behavior:

```tsx
import { Button } from "@ek-studio/ui"
import { ChevronDown } from "lucide-react"

import { Dropdown, DropdownItem } from "@/components/common/dropdown"

const MyTool = () => {
  const [selectedOption, setSelectedOption] = useState("option1")
  const [isOpen, setIsOpen] = useState(false)

  const options = [
    { value: "option1", label: "Option 1", description: "Description 1" },
    { value: "option2", label: "Option 2", description: "Description 2" },
    { value: "option3", label: "Option 3", description: "Description 3" },
  ]

  const selectedLabel = options.find(o => o.value === selectedOption)?.label

  const customControls = (
    <Dropdown
      trigger={
        <Button variant="outline" size="sm" className="gap-2">
          <span className="text-xs font-medium">{selectedLabel}</span>
          <ChevronDown className="h-3 w-3" />
        </Button>
      }
      align="left"
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      {options.map(option => (
        <DropdownItem
          key={option.value}
          title={option.label}
          description={option.description}
          onClick={() => {
            setSelectedOption(option.value)
            setIsOpen(false)
          }}
          className={
            selectedOption === option.value ? "bg-primary/10 text-primary" : ""
          }
        />
      ))}
    </Dropdown>
  )

  return (
    <ToolLayout
      // ... other props
      toolControls={customControls} // Add custom controls here
      footerProps={{
        examples: tool.examples,
        faqs: tool.faq,
        relatedTools,
        onExampleClick: handleExampleClick,
      }}
    />
  )
}
```

**Using ButtonGroup for Toggle Options:**

For a smaller set of options that should be visible at once:

```tsx
import { ButtonGroup } from "@/components/common/button-group"

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
]

const customControls = (
  <ButtonGroup
    options={options}
    value={selectedOption}
    onChange={setSelectedOption}
    size="sm"
  />
)
```

**Using Custom Settings in Footer:**

For more complex settings or configuration panels, use `footerProps.settings`:

```tsx
import { Card } from "@ek-studio/ui"

const customSettings = (
  <Card className="p-3 bg-background/50 backdrop-blur-sm border">
    <div className="space-y-2">
      <h3 className="font-semibold">Advanced Settings</h3>
      {/* Your custom settings UI */}
    </div>
  </Card>
)

// In ToolLayout
footerProps={{
  examples: tool.examples,
  faqs: tool.faq,
  relatedTools,
  onExampleClick: handleExampleClick,
  settings: customSettings, // Add settings panel here
}}
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

### 1. Utility Functions

- Keep them pure (no side effects)
- Handle all edge cases
- Return descriptive error messages
- Include success messages
- Add JSDoc comments

```tsx
/**
 * Converts JSON to YAML format
 * @param jsonInput - The JSON string to convert
 * @returns ConversionResult with YAML data or error
 */
export function jsonToYaml(jsonInput: string): ConversionResult<string> {
  // Implementation
}
```

### 2. Error Handling

Always return proper error messages in your utility:

```tsx
try {
  const result = performConversion(input)
  return {
    success: true,
    data: result,
    message: "Conversion successful",
  }
} catch (error) {
  return {
    success: false,
    error: error instanceof Error ? error.message : "Conversion failed",
  }
}
```

### 3. Input Validation

Validate in the utility function:

```tsx
if (!input.trim()) {
  return {
    success: false,
    error: "Input is empty",
  }
}
```

### 4. Success Messages

Include helpful success messages with metadata:

```tsx
return {
  success: true,
  data: csvOutput,
  message: `JSON converted to CSV successfully (${dataArray.length} rows)`,
  metadata: {
    rowCount: dataArray.length,
  },
}
```

### 5. Consistent Naming

- Use kebab-case for IDs and slugs
- Use descriptive, action-oriented names
- Keep URLs clean and SEO-friendly
- Group related utilities in the same file

## Organizing Utilities

Group related conversion functions in themed files:

- **`json-utils.ts`**: JSON conversions (CSV↔JSON, YAML↔JSON, format JSON)
- **`encoding-utils.ts`**: Encoding/decoding (Base64, URL, HTML)
- **`text-utils.ts`**: Text transformations (case conversion, sorting)
- **`hash-utils.ts`**: Hashing and encryption utilities

## Testing Your Tool

1. **Start the development server**: `pnpm dev-converter:dev`
2. **Navigate to your tool**: `http://localhost:4000/your-tool-slug`
3. **Test functionality**:
   - Input validation
   - Conversion logic
   - Error handling
   - Examples
   - Keyboard shortcuts (Ctrl/Cmd + Enter, C, K)
   - Copy/clear functions
   - Status messages

## File Checklist

When creating a new tool, ensure you've updated:

- [ ] Created/updated utility function in `src/lib/utils/{category}-utils.ts`
- [ ] Created component in `src/components/tools/{slug}.tsx`
- [ ] Added import in `src/lib/tools/registry.ts`
- [ ] Added tool object to `tools` array in registry
- [ ] Added tool ID to appropriate category in `src/lib/tools/categories.ts`
- [ ] Tested the tool functionality
- [ ] Verified routing works (`/{slug}`)
- [ ] Checked examples and FAQs display correctly
- [ ] Verified keyboard shortcuts work

## Example: Complete Tool Implementation

Here's a minimal example showing all pieces together:

**1. Utility (`src/lib/utils/text-utils.ts`):**

```tsx
export function reverseText(input: string): ConversionResult<string> {
  if (!input.trim()) {
    return { success: false, error: "Input is empty" }
  }

  return {
    success: true,
    data: input.split("").reverse().join(""),
    message: "Text reversed successfully",
  }
}
```

**2. Component (`src/components/tools/text-reverser.tsx`):**

```tsx
"use client"

import { ToolLayout } from "@/components/tool/tool-layout"
import { useTool } from "@/hooks/use-tool"
import { reverseText } from "@/lib/utils/text-utils"

const TextReverserTool = () => {
  const {
    input,
    setInput,
    output,
    status,
    statusMessage,
    handleCopy,
    handleClear,
    toolSlug,
    tool,
    relatedTools,
    convert,
    handleExampleClick,
  } = useTool({ convertFn: reverseText })

  if (!tool) return <div>Tool not found</div>

  return (
    <ToolLayout
      headerProps={{ title: tool.name, description: tool.description }}
      editorProps={{
        inputValue: input,
        outputValue: output,
        onInputChange: setInput,
        inputPlaceholder: tool.ui.inputPlaceholder,
        outputPlaceholder: tool.ui.outputPlaceholder,
        inputLabel: tool.ui.inputLabel,
        outputLabel: tool.ui.outputLabel,
        errorMessage: status === "error" ? statusMessage : undefined,
      }}
      toolActionsProps={{
        onConvert: convert,
        onCopy: handleCopy,
        onClear: handleClear,
        toolSlug,
        shareData: { input, output },
        isLoading: status === "loading",
        hasOutput: !!output,
        convertLabel: tool.ui.convertLabel,
        toolName: tool.name,
        tool,
      }}
      statusProps={{ status, message: statusMessage }}
      footerProps={{
        examples: tool.examples,
        faqs: tool.faq,
        relatedTools,
        onExampleClick: handleExampleClick,
      }}
    />
  )
}

export default TextReverserTool
```

**3. Registry entry** - Add to `src/lib/tools/registry.ts`

This structure ensures consistency, maintainability, and a great developer experience when creating new tools!

## Advanced Example: Case Converter with Custom Controls

Here's a complete real-world example showing how to create a tool with custom controls:

**1. Utility (`src/lib/utils/text-utils.ts`):**

```tsx
export interface ConversionResult<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
  metadata?: Record<string, any>
}

export function convertCase(
  input: string,
  caseType:
    | "camelCase"
    | "PascalCase"
    | "snake_case"
    | "kebab-case"
    | "CONSTANT_CASE"
    | "Title Case"
    | "Sentence case"
    | "lowercase"
    | "UPPERCASE"
): ConversionResult<string> {
  if (!input.trim()) {
    return { success: false, error: "Input is empty" }
  }

  try {
    const splitIntoWords = (text: string): string[] => {
      return text
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2")
        .split(/[\s_-]+/)
        .filter(word => word.length > 0)
    }

    const words = splitIntoWords(input)
    let result: string

    switch (caseType) {
      case "camelCase":
        result = words
          .map((word, index) => {
            const lower = word.toLowerCase()
            return index === 0
              ? lower
              : lower.charAt(0).toUpperCase() + lower.slice(1)
          })
          .join("")
        break
      case "snake_case":
        result = words.map(word => word.toLowerCase()).join("_")
        break
      // ... other cases
      default:
        return { success: false, error: "Invalid case type" }
    }

    return {
      success: true,
      data: result,
      message: `Text converted to ${caseType} successfully`,
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Conversion failed",
    }
  }
}
```

**2. Component (`src/components/tools/case-converter.tsx`):**

```tsx
"use client"

import { Button } from "@ek-studio/ui"
import { ChevronDown } from "lucide-react"

import { useState } from "react"

import { Dropdown, DropdownItem } from "@/components/common/dropdown"
import { ToolLayout } from "@/components/tool/tool-layout"
import { useTool } from "@/hooks/use-tool"
import { TextCaseType, convertCase } from "@/lib/utils/text-utils"

const CaseConverterTool = () => {
  const [selectedCase, setSelectedCase] = useState<TextCaseType>("camelCase")

  const {
    input,
    setInput,
    output,
    status,
    statusMessage,
    handleCopy,
    handleClear,
    toolSlug,
    tool,
    relatedTools,
    handleExampleClick,
  } = useTool({
    convertFn: (text: string) => convertCase(text, selectedCase),
  })

  if (!tool) {
    return <div>Tool not found</div>
  }

  const caseTypes: Array<{
    value: TextCaseType
    label: string
    example: string
  }> = [
    { value: "camelCase", label: "camelCase", example: "helloWorld" },
    { value: "PascalCase", label: "PascalCase", example: "HelloWorld" },
    { value: "snake_case", label: "snake_case", example: "hello_world" },
    { value: "kebab-case", label: "kebab-case", example: "hello-world" },
    { value: "CONSTANT_CASE", label: "CONSTANT_CASE", example: "HELLO_WORLD" },
  ]

  const handleCaseConvert = (caseType: TextCaseType) => {
    setSelectedCase(caseType)
    if (input.trim()) {
      const result = convertCase(input, caseType)
      if (result.success && result.data) {
        setInput(result.data)
      }
    }
  }

  const convert = () => {
    if (!input.trim()) return
    const result = convertCase(input, selectedCase)
    if (result.success && result.data) {
      setInput(result.data)
    }
  }

  const selectedCaseLabel =
    caseTypes.find(c => c.value === selectedCase)?.label || selectedCase

  // Custom tool controls with case type dropdown
  const caseControls = (
    <Dropdown
      trigger={
        <Button variant="outline" size="sm" className="gap-2">
          <span className="text-xs font-medium">{selectedCaseLabel}</span>
          <ChevronDown className="h-3 w-3" />
        </Button>
      }
      align="left"
    >
      {caseTypes.map(caseType => (
        <DropdownItem
          key={caseType.value}
          title={caseType.label}
          description={caseType.example}
          onClick={() => handleCaseConvert(caseType.value)}
          className={
            selectedCase === caseType.value ? "bg-primary/10 text-primary" : ""
          }
        />
      ))}
    </Dropdown>
  )

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
        errorMessage: status === "error" ? statusMessage : undefined,
      }}
      toolActionsProps={{
        onConvert: convert,
        onCopy: handleCopy,
        onClear: handleClear,
        toolSlug: toolSlug,
        shareData: { input, output },
        isLoading: status === "loading",
        hasOutput: !!output,
        convertLabel: tool.ui.convertLabel,
        toolName: tool.name,
        tool: tool,
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
      toolControls={caseControls}
    />
  )
}

export default CaseConverterTool
```

This example demonstrates:

- Using `@ek-studio/ui` components (Button) and common components (Dropdown)
- Custom state management for tool-specific options
- Dynamic conversion based on selected case type
- Dropdown with title and description for each option
- Proper TypeScript typing with `TextCaseType`
- Active state styling for selected option
