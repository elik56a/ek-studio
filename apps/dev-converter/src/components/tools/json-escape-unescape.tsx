"use client"

import { ToolLayout } from "@/components/tool/tool-layout"
import { useTool } from "@/hooks/use-tool"
import {
  detectJsonEscaped,
  jsonEscapeUnescape,
} from "@/lib/utils/encoding-utils"

const JsonEscapeUnescapeTool = () => {
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
    convertFn: jsonEscapeUnescape,
  })

  if (!tool) {
    return <div>Tool not found</div>
  }

  // Dynamic button label based on input detection
  const convertLabel = !input.trim()
    ? tool.ui.convertLabel
    : detectJsonEscaped(input)
      ? "Unescape"
      : "Escape"

  return (
    <ToolLayout
      onConvert={convert}
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
        showSwapButton: tool.ui.showSwapButton,
        onSwap: handleSwap,
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

export default JsonEscapeUnescapeTool
