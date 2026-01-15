"use client"

import { FileUpload } from "@ek-studio/ui"

import { useCallback, useMemo, useState } from "react"

import { ToolLayout } from "@/components/tool/tool-layout"
import { fileToBase64 } from "@/features/encoding/base64"
import { useTool } from "@/hooks/use-tool"

const FileToBase64Tool = () => {
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
  const customInputComponent = useMemo(
    () => (
      <FileUpload
        onFileSelect={handleFileSelect}
        onClear={handleClear}
        selectedFile={selectedFile}
        accept="*/*"
        acceptLabel="All file types supported"
        maxSize={10 * 1024 * 1024}
        disabled={status === "loading"}
      />
    ),
    [handleFileSelect, handleClear, selectedFile, status]
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
