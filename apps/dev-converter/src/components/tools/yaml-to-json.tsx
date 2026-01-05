"use client"

import { ToolLayout } from "@/components/tool/tool-layout"
import { CollapsibleJsonViewer } from "@/components/tool/collapsible-json-viewer"
import { useKeyboardShortcuts } from "@/hooks/use-keyboard-shortcuts"
import { useToolState } from "@/hooks/use-tool-state"
import { yamlToJson } from "@/lib/utils/json-utils"

const YamlToJsonTool = () => {
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

  const convertToJson = () => {
    if (!input.trim()) {
      setOutput("")
      setStatus("idle")
      setStatusMessage("")
      return
    }

    setStatus("loading")

    const result = yamlToJson(input)

    if (result.success && result.data) {
      setOutput(result.data)
      setStatus("success")
      setStatusMessage("YAML converted to JSON successfully")
    } else {
      setStatus("error")
      setStatusMessage(result.error || "Failed to convert YAML to JSON")
      setOutput("")
    }
  }

  const handleExampleClick = (exampleInput: string) => {
    setInput(exampleInput)
    // Trigger conversion after setting input
    setTimeout(convertToJson, 0)
  }

  useKeyboardShortcuts({
    onConvert: convertToJson,
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
        customOutputComponent: (
          <CollapsibleJsonViewer
            value={output}
            placeholder={tool.ui.outputPlaceholder}
          />
        ),
      }}
      toolActionsProps={{
        onConvert: convertToJson,
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

export default YamlToJsonTool
