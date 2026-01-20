"use client"

import { ButtonGroup } from "@/components/common/button-group"
import { ToolLayout } from "@/components/tool/tool-layout"
import { detectUrlEncoded, urlEncodeDecodeWithMode, type UrlEncodeMode, type UrlEncodePreset } from "@/features/encoding/url"
import { useAutoDetect } from "@/hooks/use-auto-detect"
import { useTool } from "@/hooks/use-tool"
import { useState, useCallback } from "react"

interface UrlEncodeDecodeToolProps {
  preset?: UrlEncodePreset
}

const UrlEncodeDecodeTool = ({ preset }: UrlEncodeDecodeToolProps) => {
  const [mode, setMode] = useState<UrlEncodeMode>(preset?.mode || "auto")

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
      (input: string) => urlEncodeDecodeWithMode(input, mode),
      [mode]
    ),
  })

  if (!tool) {
    return <div>Tool not found</div>
  }

  // Use auto-detect hook for all dynamic labels
  const { inputLabel, outputLabel, autoDetectLabel, convertLabel } =
    useAutoDetect({
      tool,
      input,
      isDetected: Boolean(input.trim() && detectUrlEncoded(input)),
    })

  // Split error message and details (separated by |)
  const [errorMessage, errorDetails] = statusMessage?.includes("|")
    ? statusMessage.split("|")
    : [statusMessage, undefined]

  const handleModeSwap = () => {
    if (mode === "encode") {
      setMode("decode")
    } else if (mode === "decode") {
      setMode("encode")
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
          { value: "encode", label: "Encode" },
          { value: "decode", label: "Decode" },
        ]}
        value={mode}
        onChange={value => setMode(value as UrlEncodeMode)}
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

export default UrlEncodeDecodeTool
