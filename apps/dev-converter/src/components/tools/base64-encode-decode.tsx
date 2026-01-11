"use client"

import { ToolLayout } from "@/components/tool/tool-layout"
import { useTool } from "@/hooks/use-tool"
import { base64Convert, detectBase64 } from "@/lib/utils/encoding-utils"

const Base64EncodeDecodeTool = () => {
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
    convertFn: base64Convert,
  })

  if (!tool) {
    return <div>Tool not found</div>
  }

  // Dynamic button label based on input detection
  const convertLabel = !input.trim()
    ? tool.ui.convertLabel
    : detectBase64(input)
      ? "Decode"
      : "Encode"

  // Dynamic input/output labels based on operation
  const isDecoding = input.trim() && detectBase64(input)
  const inputLabel = isDecoding ? "Base64 (Encoded)" : "Text (Plain)"
  const outputLabel = isDecoding ? "Text (Decoded)" : "Base64 (Encoded)"

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
        showAutoDetect: true,
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

export default Base64EncodeDecodeTool
