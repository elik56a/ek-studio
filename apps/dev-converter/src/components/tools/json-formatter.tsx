"use client"

import { ButtonGroup } from "@/components/common/button-group"
import { CollapsibleJsonViewer } from "@/components/custom/collapsible-json-viewer"
import { ToolLayout } from "@/components/tool/tool-layout"
import { formatJsonWithMode, type JsonFormatterPreset } from "@/features/data-transform/json"
import { useTool } from "@/hooks/use-tool"
import { useCallback, useState } from "react"

interface JsonFormatterToolProps {
  preset?: JsonFormatterPreset
}

const JsonFormatterTool = ({ preset }: JsonFormatterToolProps) => {
  const [viewMode, setViewMode] = useState<"tree" | "pretty" | "minify">(
    preset?.mode === "minify" ? "minify" : "tree"
  )

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
    convertFn: useCallback(
      (input: string) => formatJsonWithMode(input, preset?.mode || "format"),
      [preset?.mode]
    ),
  })

  if (!tool) {
    return <div>Tool not found</div>
  }

  // Input actions with view mode selector
  const inputActions = (
    <div className="flex flex-wrap items-end gap-3">
      {/* View Mode Selector */}
      <div className="flex flex-col gap-1">
        <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide">
          View Mode
        </span>
        <ButtonGroup
          options={[
            { value: "tree", label: "Tree" },
            { value: "pretty", label: "Pretty" },
            { value: "minify", label: "Minify" },
          ]}
          value={viewMode}
          onChange={value => setViewMode(value as "tree" | "pretty" | "minify")}
          size="sm"
        />
      </div>
    </div>
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
        inputActions: inputActions,
        customOutputComponent: (
          <CollapsibleJsonViewer
            value={output}
            placeholder={tool.ui.outputPlaceholder}
            preset={preset}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
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

export default JsonFormatterTool
