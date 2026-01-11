"use client"

import { ToolLayout } from "@/components/tool/tool-layout"
import { useTool } from "@/hooks/use-tool"
import {
  detectHtmlEscaped,
  htmlEscapeUnescape,
} from "@/lib/utils/encoding-utils"

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

  // Dynamic button label based on input detection
  const isDetectedEscaped = input.trim() && detectHtmlEscaped(input)
  const convertLabel = !input.trim()
    ? tool.ui.convertLabel
    : isDetectedEscaped
      ? "Unescape"
      : "Escape"

  // Dynamic input/output labels based on operation
  const inputLabel = isDetectedEscaped ? "HTML (Escaped)" : "HTML (Plain)"
  const outputLabel = isDetectedEscaped ? "HTML (Unescaped)" : "HTML (Escaped)"
  
  // Auto-detect label from config
  const autoDetectLabel = !input.trim() 
    ? undefined 
    : isDetectedEscaped 
      ? tool.ui.autoDetect?.labels.detected
      : tool.ui.autoDetect?.labels.plain

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
        errorMessage: status === "error" ? statusMessage : undefined,
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
