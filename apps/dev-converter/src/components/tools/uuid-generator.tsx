"use client"

import { Card, NumberInput } from "@ek-studio/ui"

import { useState } from "react"

import { ToolLayout } from "@/components/tool/tool-layout"
import { generateUUIDs } from "@/features/security/uuid"
import { useTool } from "@/hooks/use-tool"

const UUIDGeneratorTool = () => {
  const [count, setCount] = useState(1)

  const {
    output,
    status,
    statusMessage,
    handleCopy,
    handleClear,
    generate,
    toolSlug,
    tool,
    relatedTools,
  } = useTool({
    generateFn: () => generateUUIDs(count),
  })

  if (!tool) {
    return <div>Tool not found</div>
  }

  const handleExampleClick = () => {
    generate()
  }

  const toolControls = (
    <Card className="flex-row items-center gap-4 px-6 py-3 bg-background/50 backdrop-blur-sm border-primary/10">
      <span className="text-sm font-medium whitespace-nowrap">
        Count
      </span>
      <NumberInput
        value={count}
        onChange={setCount}
        min={1}
        max={100}
      />
    </Card>
  )

  return (
    <ToolLayout
      onGenerate={generate}
      tool={tool}
      headerProps={{
        title: tool.name,
        description: tool.description,
      }}
      editorProps={{
        outputValue: output,
        outputPlaceholder: tool.ui.outputPlaceholder,
        outputLabel: tool.ui.outputLabel,
        errorMessage: status === "error" ? statusMessage : undefined,
      }}
      toolActionsProps={{
        onCopy: handleCopy,
        onClear: handleClear,
        toolSlug: toolSlug,
        shareData: { output },
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
      toolControlsPosition="inline"
    />
  )
}

export default UUIDGeneratorTool
