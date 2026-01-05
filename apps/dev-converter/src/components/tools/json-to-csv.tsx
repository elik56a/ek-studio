"use client"

import { ToolLayout } from "@/components/tool/tool-layout"
import { useKeyboardShortcuts } from "@/hooks/use-keyboard-shortcuts"
import { useToolState } from "@/hooks/use-tool-state"
import Papa from "papaparse"

const JsonToCsvTool = () => {
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

  const convertToCsv = () => {
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
      
      // Ensure data is an array
      let dataArray: any[]
      if (Array.isArray(jsonData)) {
        dataArray = jsonData
      } else if (typeof jsonData === "object" && jsonData !== null) {
        // If it's a single object, wrap it in an array
        dataArray = [jsonData]
      } else {
        throw new Error("JSON must be an array or object")
      }

      if (dataArray.length === 0) {
        throw new Error("JSON array is empty")
      }

      // Convert to CSV using PapaParse
      const csvOutput = Papa.unparse(dataArray, {
        header: true,
        skipEmptyLines: true,
      })

      setOutput(csvOutput)
      setStatus("success")
      setStatusMessage(`JSON converted to CSV successfully (${dataArray.length} rows)`)
    } catch (error) {
      setStatus("error")
      if (error instanceof Error) {
        setStatusMessage(
          error.message.includes("JSON")
            ? error.message
            : `Invalid JSON: ${error.message}`
        )
      } else {
        setStatusMessage("Failed to convert JSON to CSV")
      }
      setOutput("")
    }
  }

  const handleExampleClick = (exampleInput: string) => {
    setInput(exampleInput)
    // Trigger conversion after setting input
    setTimeout(convertToCsv, 0)
  }

  useKeyboardShortcuts({
    onConvert: convertToCsv,
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
        onConvert: convertToCsv,
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

export default JsonToCsvTool
