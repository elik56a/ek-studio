"use client"

import { FileUpload } from "@ek-studio/ui"

import { useCallback, useMemo, useState } from "react"

import { ToolLayout } from "@/components/tool/tool-layout"
import { fileToBase64 } from "@/features/encoding/base64"
import { useTool } from "@/hooks/use-tool"
import { FileToBase64Preset } from "@/features/encoding"
import { getPreset } from "@/lib/tools/presets"

interface FileToBase64ToolProps {
  preset?: FileToBase64Preset
}

const FileToBase64Tool = ({ preset: presetProp }: FileToBase64ToolProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const {
    input,
    setInput,
    output,
    status,
    statusMessage,
    handleCopy,
    handleClear: originalHandleClear,
    toolSlug,
    tool,
    relatedTools,
    handleExampleClick,
  } = useTool({
    convertFn: useCallback(
      async (fileKeyInput: string) => {
        if (!selectedFile || !fileKeyInput) {
          return {
            success: false,
            error: "Please select a file",
          }
        }
        return await fileToBase64(selectedFile)
      },
      [selectedFile]
    ),
    config: {
      disableAutoSave: true,
    },
  })

  if (!tool) {
    return <div>Tool not found</div>
  }

  const preset = getPreset("file-to-base64", presetProp || tool.preset)

  const handleFileSelect = useCallback(
    (file: File) => {
      setSelectedFile(file)
      // Set a unique key to trigger conversion
      const key = `${file.name}-${file.size}`
      setInput(key)
    },
    [setInput]
  )

  const handleClear = useCallback(() => {
    setSelectedFile(null)
    originalHandleClear()
  }, [originalHandleClear])

  // Memoize the custom input component to prevent re-renders
  const customInputComponent = useMemo(() => {
    const accept = preset?.accept ? preset.accept.join(",") : "*/*"
    const acceptLabel = preset?.label
      ? `${preset.label} files`
      : "All file types supported"

    return (
      <FileUpload
        onFileSelect={handleFileSelect}
        onClear={handleClear}
        selectedFile={selectedFile}
        accept={accept}
        acceptLabel={acceptLabel}
        maxSize={10 * 1024 * 1024}
        disabled={status === "loading"}
      />
    )
  }, [handleFileSelect, handleClear, selectedFile, status, preset])

  return (
    <ToolLayout
      tool={tool}
      headerProps={{
        title: tool.name,
        description: tool.description,
      }}
      editorProps={{
        inputValue: input,
        onInputChange: setInput,
        outputValue: output,
        inputPlaceholder: tool.ui.inputPlaceholder,
        outputPlaceholder: tool.ui.outputPlaceholder,
        inputLabel: tool.ui.inputLabel,
        outputLabel: tool.ui.outputLabel,
        errorMessage: status === "error" ? statusMessage : undefined,
        customInputComponent: customInputComponent,
      }}
      toolActionsProps={{
        onCopy: handleCopy,
        onClear: handleClear,
        toolSlug: toolSlug,
        shareData: { input: selectedFile?.name || "", output },
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
      toolControls={
        selectedFile ? (
          <div className="text-sm text-muted-foreground">
            <span className="font-medium">{selectedFile.name}</span>
            <span className="ml-2">
              ({(selectedFile.size / 1024).toFixed(2)} KB)
            </span>
          </div>
        ) : null
      }
    />
  )
}

export default FileToBase64Tool
