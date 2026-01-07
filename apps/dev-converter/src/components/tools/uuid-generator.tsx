"use client"

import { Input, Label } from "@ek-studio/ui"

import { useState } from "react"

import { ToolLayout } from "@/components/tool/tool-layout"
import { useTool } from "@/hooks/use-tool"
import { generateUUIDs } from "@/lib/utils/security-utils"

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
    <div className="flex items-center gap-2">
      <Label htmlFor="uuid-count" className="text-sm whitespace-nowrap">
        Count:
      </Label>
      <Input
        id="uuid-count"
        type="number"
        min="1"
        max="100"
        value={count}
        onChange={e =>
          setCount(Math.max(1, Math.min(100, parseInt(e.target.value) || 1)))
        }
        className="w-[100px]"
      />
    </div>
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
    />
  )
}

export default UUIDGeneratorTool
