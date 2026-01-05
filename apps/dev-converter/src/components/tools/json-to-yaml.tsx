"use client"

import { ToolLayout } from "@/components/tool/tool-layout"
import { useKeyboardShortcuts } from "@/hooks/use-keyboard-shortcuts"
import { useToolState } from "@/hooks/use-tool-state"
import { jsonToYaml } from "@/lib/utils/json-utils"

const JsonToYamlTool = () => {
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

  const convertToYaml = () => {
    if (!input.trim()) {
      setOutput("")
      setStatus("idle")
      setStatusMessage("")
      return
    }

    setStatus("loading")

    const result = jsonToYaml(input)

    if (result.success && result.data) {
      setOutput(result.data)
      setStatus("success")
      setStatusMessage("JSON converted to YAML successfully")
    } else {
      setStatus("error")
      setStatusMessage(result.error || "Failed to convert JSON to YAML")
      setOutput("")
    }
  }

  const handleExampleClick = (exampleInput: string) => {
    setInput(exampleInput)
    // Trigger conversion after setting input
    setTimeout(convertToYaml, 0)
  }

  useKeyboardShortcuts({
    onConvert: convertToYaml,
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
        onConvert: convertToYaml,
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

export default JsonToYamlTool
