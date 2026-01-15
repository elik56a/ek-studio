# Creating a New Tool

This guide walks through creating a new tool in DevConverter.

## Overview

Creating a tool involves three steps:

1. Create the feature logic
2. Create the tool configuration
3. Create the tool component

## Step 1: Create Feature Logic

Create your business logic in `src/features/[category]/[feature-name]/`

**Example:** Creating a Base32 encoder

```typescript
// src/features/encoding/base32/encode.ts
import { ConversionResult } from "@/shared/types"

export const encodeBase32 = (input: string): ConversionResult<string> => {
  if (!input.trim()) {
    return {
      success: false,
      error: "Input is empty",
    }
  }

  try {
    const encoded = btoa(input)
    return {
      success: true,
      data: encoded,
      message: "Encoded successfully",
    }
  } catch (error) {
    return {
      success: false,
      error: "Encoding failed",
    }
  }
}
```

**Rules:**

- Use `export const =>` style
- No comments in code
- Return `ConversionResult<T>` type
- Handle errors gracefully

**Create barrel export:**

```typescript
// src/features/encoding/base32/index.ts
export { encodeBase32 } from "./encode"
```

## Step 2: Create Tool Configuration

Create tool config in `src/tools/configs/[category]/[tool-name].ts`

**Example:**

```typescript
// src/tools/configs/encoding/base32-encoder.ts
import { Tool } from "@/lib/tools/types"

export const base32EncoderTool: Tool = {
  id: "base32-encoder",
  slug: "base32-encoder",
  name: "Base32 Encoder",
  description: "Encode text to Base32 format",
  category: "encoding",
  type: "converter",
  keywords: ["base32", "encode", "encoding"],
  metadata: {
    title: "Base32 Encoder - Encode Text to Base32",
    description: "Encode text to Base32 format online",
    keywords: ["base32 encoder", "encode base32"],
  },
  info: {
    description: "Base32 encoding converts text to Base32 format...",
    howToUse: [
      "Enter text in the input field",
      "Click 'Encode' to convert",
      "Copy the encoded result",
    ],
    useCases: ["Encode data for URLs", "Create human-readable identifiers"],
    features: ["Fast encoding", "Copy to clipboard", "Real-time conversion"],
  },
  examples: [
    {
      title: "Encode simple text",
      input: "Hello World",
      description: "Basic text encoding example",
    },
  ],
  faq: [
    {
      question: "What is Base32?",
      answer: "Base32 is an encoding scheme...",
    },
  ],
  relatedTools: ["base64-encode-decode", "url-encode-decode"],
  ui: {
    inputPlaceholder: "Enter text to encode...",
    outputPlaceholder: "Encoded result will appear here...",
    inputLabel: "Text Input",
    outputLabel: "Base32 Output",
    convertLabel: "Encode",
  },
}
```

**Add to category barrel:**

```typescript
// src/tools/configs/encoding/index.ts
export { base32EncoderTool } from "./base32-encoder"
```

## Step 3: Create Tool Component

Create component in `src/components/tools/[tool-name].tsx`

**Example:**

```typescript
// src/components/tools/base32-encoder.tsx
"use client"

import { ToolLayout } from "@/components/tool/tool-layout"
import { useTool } from "@/hooks/use-tool"
import { encodeBase32 } from "@/features/encoding/base32"

const Base32EncoderTool = () => {
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
    convertFn: encodeBase32,
  })

  if (!tool) {
    return <div>Tool not found</div>
  }

  return (
    <ToolLayout
      tool={tool}
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
        onCopy: handleCopy,
        onClear: handleClear,
        toolSlug: toolSlug,
        shareData: { input, output },
        isLoading: status === "loading",
        hasOutput: !!output,
        convertLabel: tool.ui.convertLabel,
        toolName: tool.name,
        outputValue: output,
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

export default Base32EncoderTool
```

## Step 4: Register the Tool

The tool is automatically registered via the tool configs. Ensure your tool config is exported from the category barrel in `src/tools/configs/[category]/index.ts`.

## Step 5: Create the Route

Create a dynamic route file:

```typescript
// src/app/[slug]/page.tsx
// This file already exists and handles all tool routes dynamically
```

The route is automatically created based on the tool's slug.

## Testing Your Tool

1. Start the dev server: `pnpm dev`
2. Navigate to `http://localhost:4000/[your-tool-slug]`
3. Test the conversion logic
4. Verify examples work
5. Check error handling

## Code Style Requirements

- Use `export const =>` for all functions
- No comments in feature code
- Use TypeScript strict mode
- Return proper `ConversionResult` types
- Handle all error cases
- Provide clear error messages

## Common Patterns

**Validation:**

```typescript
export const validateInput = (input: string): ValidationResult => {
  if (!input.trim()) {
    return { isValid: false, error: "Input is empty" }
  }
  return { isValid: true }
}
```

**Async Operations:**

```typescript
export const generateHash = async (
  input: string
): Promise<ConversionResult<string>> => {
  try {
    const result = await crypto.subtle.digest("SHA-256", encoder.encode(input))
    return { success: true, data: result }
  } catch (error) {
    return { success: false, error: "Hash generation failed" }
  }
}
```

**Multiple Outputs:**

```typescript
export const convertColor = (input: string): ConversionResult<string> => {
  const formats = parseColor(input)
  const output = `HEX: ${formats.hex}\nRGB: ${formats.rgb}`
  return { success: true, data: output }
}
```

## Tips

- Keep feature functions focused and small
- Use descriptive variable names
- Provide helpful error messages
- Add comprehensive examples in tool config
- Test edge cases (empty input, invalid format, etc.)
- Use existing features as reference
