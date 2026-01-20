"use client"

import { ButtonGroup } from "@/components/common/button-group"
import { ToolLayout } from "@/components/tool/tool-layout"
import {
  convertHtmlWithMode,
  getHtmlLabels,
  type HtmlEscapeMode,
  type HtmlEscapePreset,
} from "@/features/encoding/html"
import { useAutoDetect } from "@/hooks/use-auto-detect"
import { useTool } from "@/hooks/use-tool"
import { useState, useCallback } from "react"

interface HtmlEscapeUnescapeToolProps {
  preset?: HtmlEscapePreset
}

const HtmlEscapeUnescapeTool = ({ preset }: HtmlEscapeUnescapeToolProps) => {
  const [mode, setMode] = useState<HtmlEscapeMode>(preset?.mode || "auto")

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
    handleExampleClick,
  } = useTool({
    convertFn: useCallback(
      (input: string) => convertHtmlWithMode(input, mode),
      [mode]
    ),
  })

  if (!tool) {
    return <div>Tool not found</div>
  }

  const labels = getHtmlLabels(mode, input, tool.ui.autoDetect)
  const { inputLabel, outputLabel, convertLabel } = labels

  const { autoDetectLabel } = useAutoDetect({
    tool,
    input,
    isDetected: false,
  })

  const [errorMessage, errorDetails] = statusMessage?.includes("|")
    ? statusMessage.split("|")
    : [statusMessage, undefined]

  const handleModeSwap = () => {
    if (mode === "escape") {
      setMode("unescape")
    } else if (mode === "unescape") {
      setMode("escape")
    }
    handleSwap()
  }

  // Input actions with mode selector
  const inputActions = (
    <div className="flex flex-col gap-1">
      <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide">
        Mode
      </span>
      <ButtonGroup
        options={[
          { value: "auto", label: "Auto" },
          { value: "escape", label: "Escape" },
          { value: "unescape", label: "Unescape" },
        ]}
        value={mode}
        onChange={value => setMode(value as HtmlEscapeMode)}
        size="sm"
      />
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
        inputLabel: inputLabel,
        outputLabel: outputLabel,
        errorMessage: status === "error" ? errorMessage : undefined,
        errorDetails: status === "error" ? errorDetails : undefined,
        showSwapButton: tool.ui.showSwapButton,
        onSwap: handleModeSwap,
        showAutoDetect: mode === "auto" && tool.ui.autoDetect?.enabled,
        autoDetectLabel: autoDetectLabel,
        inputActions: inputActions,
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
        tool,
      }}
    />
  )
}

export default HtmlEscapeUnescapeTool
