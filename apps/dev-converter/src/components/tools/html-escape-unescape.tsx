"use client"

import { ToolLayout } from "@/components/tool/tool-layout"
import { useAutoDetect } from "@/hooks/use-auto-detect"
import { useTool } from "@/hooks/use-tool"
import {
  detectHtmlEscaped,
  htmlEscapeUnescape,
} from "@/features/encoding/html"

const HtmlEscapeUnescapeTool = () => {
  const {
    input,
    setInput,
    output,
    status,
    statusMessage,
    handleCopy,
    handleClear,
    handleSwap,
    toolSlug,
    tool,
    relatedTools,
    convert,
    handleExampleClick,
  } = useTool({
    convertFn: htmlEscapeUnescape,
  })

  if (!tool) {
    return <div>Tool not found</div>
  }

  // Use auto-detect hook for all dynamic labels
  const { inputLabel, outputLabel, autoDetectLabel, convertLabel } =
    useAutoDetect({
      tool,
      input,
      isDetected: Boolean(input.trim() && detectHtmlEscaped(input)),
    })

  // Split error message and details (separated by |)
  const [errorMessage, errorDetails] = statusMessage?.includes("|")
    ? statusMessage.split("|")
    : [statusMessage, undefined]

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
        inputLabel: inputLabel,
        outputLabel: outputLabel,
        errorMessage: status === "error" ? errorMessage : undefined,
        errorDetails: status === "error" ? errorDetails : undefined,
        showSwapButton: tool.ui.showSwapButton,
        onSwap: handleSwap,
        showAutoDetect: tool.ui.autoDetect?.enabled,
        autoDetectLabel: autoDetectLabel,
      }}
      toolActionsProps={{
        onCopy: handleCopy,
        onClear: handleClear,
        toolSlug: toolSlug,
        shareData: { input, output },
        isLoading: status === "loading",
        hasOutput: !!output,
        convertLabel: convertLabel,
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

export default HtmlEscapeUnescapeTool
