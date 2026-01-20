"use client"

import { Checkbox, Label } from "@ek-studio/ui"

import { useCallback, useState } from "react"

import { ButtonGroup } from "@/components/common/button-group"
import { ToolLayout } from "@/components/tool/tool-layout"
import {
  type Base64Preset,
  type CharacterEncoding,
  base64Convert,
  detectBase64,
} from "@/features/encoding/base64"
import { useAutoDetect } from "@/hooks/use-auto-detect"
import { useTool } from "@/hooks/use-tool"

interface Base64EncodeDecodeToolProps {
  preset?: Base64Preset
}

const Base64EncodeDecodeTool = ({ preset }: Base64EncodeDecodeToolProps) => {
  const [useUrlSafe, setUseUrlSafe] = useState(preset?.urlSafe)
  const [removePadding, setRemovePadding] = useState(preset?.noPadding)
  const [encoding, setEncoding] = useState<CharacterEncoding>(
    preset?.encoding || "utf8"
  )

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
      (input: string) =>
        base64Convert(input, { useUrlSafe, removePadding, encoding }),
      [useUrlSafe, removePadding, encoding]
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
      isDetected: Boolean(input.trim() && detectBase64(input)),
    })

  // Split error message and details (separated by |)
  const [errorMessage, errorDetails] = statusMessage?.includes("|")
    ? statusMessage.split("|")
    : [statusMessage, undefined]

  // Input actions with encoding options (displayed below auto-detect)
  const inputActions = (
    <div className="flex flex-wrap items-end gap-3">
      {/* Base64 Mode Selector */}
      <div className="flex flex-col gap-1">
        <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide">
          Mode
        </span>
        <ButtonGroup
          options={[
            { value: "standard", label: "Base64" },
            { value: "url", label: "Base64URL" },
          ]}
          value={useUrlSafe ? "url" : "standard"}
          onChange={value => {
            const isUrl = value === "url"
            setUseUrlSafe(isUrl)
            // Auto-enable "without padding" when URL-safe is enabled
            if (isUrl && !removePadding) {
              setRemovePadding(true)
            }
          }}
          size="sm"
        />
      </div>

            {/* Character Encoding Selector */}
      <div className="flex flex-col gap-1">
        <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide">
          Encoding
        </span>
        <ButtonGroup
          options={[
            { value: "utf8", label: "UTF-8" },
            { value: "binary", label: "Binary (btoa/atob)" },
          ]}
          value={encoding}
          onChange={value => setEncoding(value as CharacterEncoding)}
          size="sm"
        />
      </div>

      {/* No Padding Toggle - Only show when Base64URL is selected */}
      {useUrlSafe && (
        <div className="flex items-center gap-1.5 pb-[3px]">
          <Checkbox
            id="remove-padding"
            checked={removePadding}
            onCheckedChange={checked => setRemovePadding(checked === true)}
          />
          <Label
            htmlFor="remove-padding"
            className="text-xs font-medium cursor-pointer select-none text-muted-foreground"
          >
            No padding
          </Label>
        </div>
      )}
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
        onSwap: handleSwap,
        showAutoDetect: tool.ui.autoDetect?.enabled,
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

export default Base64EncodeDecodeTool
