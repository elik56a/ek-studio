# How to Create a New Tool

This guide explains how to add a new converter/generator tool to the dev-converter project.

## Quick Overview

Creating a tool involves 3 steps:

1. Create the tool component
2. Add tool configuration
3. Register the tool

## Step 1: Create the Tool Component

Create a new file in `src/components/tools/your-tool-name.tsx`:

```tsx
"use client"

import { ToolLayout } from "@/components/tool/tool-layout"
import { useTool } from "@/hooks/use-tool"

const YourToolName = () => {
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
    convertFn: yourConversionFunction, // Implement your logic
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

export default YourToolName
```

## Step 2: Add Tool Configuration

Add your tool to the appropriate config file in `src/lib/tools/tool-configs/` (e.g., `json-data-tools.ts`):

```typescript
import YourToolName from "@/components/tools/your-tool-name"

import { Tool } from "../types"

export const yourCategoryTools: Tool[] = [
  {
    id: "your-tool-id",
    slug: "your-tool-slug",
    name: "Your Tool Name",
    description: "Brief description of what your tool does",
    category: "json-data", // or your category
    type: "converter", // or "generator"
    keywords: ["keyword1", "keyword2", "keyword3"],
    metadata: {
      title: "Your Tool - SEO Title",
      description: "SEO description for search engines",
      keywords: ["seo", "keywords", "here"],
    },
    examples: [
      {
        title: "Example 1",
        input: "sample input",
        description: "What this example demonstrates",
      },
    ],
    faq: [
      {
        question: "Common question?",
        answer: "Helpful answer here.",
      },
    ],
    relatedTools: ["related-tool-id-1", "related-tool-id-2"],
    ui: {
      inputPlaceholder: "Paste your input here...",
      outputPlaceholder: "Output will appear here...",
      inputLabel: "Input",
      outputLabel: "Output",
      convertLabel: "Convert",
    },
    switcher: {
      enabled: true,
      mode: "category",
      showAllLink: true,
      preserveInput: true,
    },
    component: YourToolName,
  },
]
```

## Step 3: Register the Tool

1. Export your tools array from `src/lib/tools/tool-configs/index.ts`:

```typescript
export { yourCategoryTools } from "./your-category-tools"

export const allTools: Tool[] = [
  ...jsonDataTools,
  ...yourCategoryTools, // Add here
  // ... other tools
]
```

2. Import and add to `src/lib/tools/registry.ts`:

```typescript
import { yourCategoryTools } from "./tool-configs/your-category-tools"

export const tools: Tool[] = [
  ...jsonDataTools,
  ...yourCategoryTools, // Add here
  // ... other tools
]
```

## Example: JSON Formatter Tool

See `src/lib/tools/tool-configs/json-data-tools.ts` for a complete example of the JSON Formatter tool configuration.

## Tool Types Reference

- `type: "converter"` - Transforms input to output (e.g., JSON to YAML)
- `type: "generator"` - Generates output based on input parameters (e.g., UUID generator)

## Categories

Common categories: `json-data`, `encoding`, `security`, `text`, `time`, `utility`

Add new categories in `src/lib/tools/categories.ts` if needed.
