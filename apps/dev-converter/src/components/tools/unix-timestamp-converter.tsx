"use client"

import { useMemo } from "react"

import { TimestampDisplay } from "@/components/custom/timestamp-display"
import { ToolLayout } from "@/components/tool/tool-layout"
import { useTool } from "@/hooks/use-tool"
import { convertTimestamp } from "@/lib/utils/time-utils"

const UnixTimestampConverter = () => {
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
    convertFn: (input: string) => {
      const result = convertTimestamp(input)
      if (result.success && result.data) {
        // Convert the structured data to a string for the output
        const outputString = JSON.stringify(result.data)
        return {
          success: true,
          data: outputString,
        }
      }
      return {
        success: false,
        error: result.error,
      }
    },
  })

  if (!tool) {
    return <div>Tool not found</div>
  }

  // Parse the output JSON to get timestamp data
  const timestampData = useMemo(() => {
    if (!output) return null
    try {
      return JSON.parse(output)
    } catch {
      return null
    }
  }, [output])

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
        customOutputComponent: timestampData ? (
          <TimestampDisplay
            timestamp={timestampData.timestamp}
            iso={timestampData.iso}
            utc={timestampData.utc}
            local={timestampData.local}
            relative={timestampData.relative}
          />
        ) : null,
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

export default UnixTimestampConverter
