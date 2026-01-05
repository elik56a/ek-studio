"use client"

import { ToolLayout } from "@/components/tool/tool-layout"
import { useKeyboardShortcuts } from "@/hooks/use-keyboard-shortcuts"
import { useToolState } from "@/hooks/use-tool-state"

const JsonFormatterTool = () => {
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

  const formatJson = () => {
    if (!input.trim()) {
      setOutput("")
      setStatus("idle")
      setStatusMessage("")
      return
    }

    setStatus("loading")

    try {
      const parsed = JSON.parse(input)
      const formatted = JSON.stringify(parsed, null, 2)

      setOutput(formatted)
      setStatus("success")
      setStatusMessage("JSON formatted successfully")
    } catch (error) {
      setStatus("error")
      setStatusMessage(error instanceof Error ? error.message : "Invalid JSON")
      setOutput("")
    }
  }

  const handleExampleClick = (exampleInput: string) => {
    setInput(exampleInput)
    formatJson()
  }

  useKeyboardShortcuts({
    onConvert: formatJson,
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
        errorMessage: status === "error" ? statusMessage : undefined,
      }}
      toolActionsProps={{
        onConvert: formatJson,
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

export default JsonFormatterTool
