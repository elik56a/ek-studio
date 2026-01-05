"use client"

import { ToolLayout } from "@/components/tool/tool-layout"
import { useKeyboardShortcuts } from "@/hooks/use-keyboard-shortcuts"
import { useToolState } from "@/hooks/use-tool-state"
import yaml from "js-yaml"

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

    try {
      // Parse JSON input
      const jsonData = JSON.parse(input)
      
      // Convert to YAML
      const yamlOutput = yaml.dump(jsonData, {
        indent: 2,
        lineWidth: -1, // Don't wrap lines
        noRefs: true, // Don't use anchors/references
      })

      setOutput(yamlOutput)
      setStatus("success")
      setStatusMessage("JSON converted to YAML successfully")
    } catch (error) {
      setStatus("error")
      if (error instanceof Error) {
        setStatusMessage(
          error.message.includes("JSON")
            ? error.message
            : `Invalid JSON: ${error.message}`
        )
      } else {
        setStatusMessage("Failed to convert JSON to YAML")
      }
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
