"use client"

import { MimeTypeDisplay } from "@/components/custom/mime-type-display"
import { ToolLayout } from "@/components/tool/tool-layout"
import { MimeTypeInfo, lookupMimeType } from "@/features/data/mime"
import { useTool } from "@/hooks/use-tool"
import { ConversionResult } from "@/shared/types"

const MimeTypeLookupTool = () => {
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
    convertFn: async (input: string): Promise<ConversionResult<string>> => {
      const result = lookupMimeType(input)

      // Convert array result to string for the tool system
      if (result.success && result.data) {
        // Store the array in a JSON string
        return {
          success: true,
          data: JSON.stringify(result.data),
        }
      }

      return {
        success: true,
        data: "[]",
      }
    },
  })

  if (!tool) {
    return <div>Tool not found</div>
  }

  // Parse the results from JSON string
  let results: MimeTypeInfo[] = []
  try {
    if (output) {
      results = JSON.parse(output)
    }
  } catch {
    results = []
  }

  // Format output for copy functionality
  const formattedOutput =
    results.length > 0
      ? results
          .map(
            item =>
              `Extension:   ${item.extension}\nMIME Type:   ${item.mimeType}\nDescription: ${item.description}\nCategory:    ${item.category}`
          )
          .join("\n\n---\n\n")
      : ""

  return (
    <ToolLayout
      tool={tool}
      headerProps={{
        title: tool.name,
        description: tool.description,
      }}
      editorProps={{
        inputValue: input,
        outputValue: formattedOutput,
        onInputChange: setInput,
        inputPlaceholder: tool.ui.inputPlaceholder,
        outputPlaceholder: tool.ui.outputPlaceholder,
        inputLabel: tool.ui.inputLabel,
        outputLabel: tool.ui.outputLabel,
        errorMessage: status === "error" ? statusMessage : undefined,
        customOutputComponent: (
          <MimeTypeDisplay
            results={results}
            placeholder={tool.ui.outputPlaceholder}
          />
        ),
      }}
      toolActionsProps={{
        onCopy: handleCopy,
        onClear: handleClear,
        toolSlug: toolSlug,
        shareData: { input, output: formattedOutput },
        isLoading: status === "loading",
        hasOutput: results.length > 0,
        convertLabel: tool.ui.convertLabel,
        toolName: tool.name,
        outputValue: formattedOutput,
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

export default MimeTypeLookupTool
