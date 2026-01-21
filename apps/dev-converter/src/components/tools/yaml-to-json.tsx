"use client"

import { useMemo } from "react"
import { CollapsibleJsonViewer } from "@/components/custom/collapsible-json-viewer"
import { FileOrTextInput } from "@/components/custom/file-or-text-input"
import { ToolLayout } from "@/components/tool/tool-layout"
import { yamlToJson } from "@/features/data-transform/json"
import { useTool } from "@/hooks/use-tool"

const YamlToJsonTool = () => {
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
    convertFn: yamlToJson,
  })

  if (!tool) {
    return <div>Tool not found</div>
  }

  const customInputComponent = useMemo(
    () => (
      <FileOrTextInput
        value={input}
        onChange={setInput}
        placeholder={tool.ui.inputPlaceholder}
        accept=".yaml,.yml,.txt"
        acceptLabel="YAML, YML, TXT"
        disabled={status === "loading"}
      />
    ),
    [input, setInput, tool.ui.inputPlaceholder, status]
  )

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
        customInputComponent: customInputComponent,
        customOutputComponent: (
          <CollapsibleJsonViewer
            value={output}
            placeholder={tool.ui.outputPlaceholder}
          />
        ),
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

export default YamlToJsonTool
