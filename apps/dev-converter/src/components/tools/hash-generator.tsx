"use client"

import { useState } from "react"

import { Select, SelectOption } from "@/components/common/select"
import { ToolLayout } from "@/components/tool/tool-layout"
import { HashAlgorithm, generateHash } from "@/features/security/hash"
import { useTool } from "@/hooks/use-tool"

const HashGeneratorTool = () => {
  const [algorithm, setAlgorithm] = useState<HashAlgorithm>("SHA-256")

  const {
    input,
    setInput,
    output,
    status,
    statusMessage,
    handleCopy,
    handleClear,
    convert,
    handleExampleClick,
    toolSlug,
    tool,
    relatedTools,
  } = useTool({
    convertFn: async (input: string) => {
      return await generateHash(input, algorithm)
    },
  })

  if (!tool) {
    return <div>Tool not found</div>
  }

  const algorithmOptions: SelectOption[] = [
    { value: "SHA-1", label: "SHA-1", description: "160-bit hash" },
    { value: "SHA-256", label: "SHA-256", description: "256-bit hash" },
    { value: "SHA-384", label: "SHA-384", description: "384-bit hash" },
    { value: "SHA-512", label: "SHA-512", description: "512-bit hash" },
  ]

  const toolControls = (
    <Select
      options={algorithmOptions}
      value={algorithm}
      onChange={value => setAlgorithm(value as HashAlgorithm)}
      className="w-[200px]"
      label="Algorithm"
    />
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
      toolControls={toolControls}
    />
  )
}

export default HashGeneratorTool
