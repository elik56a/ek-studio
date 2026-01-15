"use client"

import { useState } from "react"

import { Select, SelectOption } from "@/components/common/select"
import { ToolLayout } from "@/components/tool/tool-layout"
import { TextCaseType, convertCase } from "@/features/text/case-converter"
import { useTool } from "@/hooks/use-tool"

const caseOptions: SelectOption[] = [
  { value: "camelCase", label: "camelCase", description: "helloWorld" },
  { value: "PascalCase", label: "PascalCase", description: "HelloWorld" },
  { value: "snake_case", label: "snake_case", description: "hello_world" },
  { value: "kebab-case", label: "kebab-case", description: "hello-world" },
  {
    value: "CONSTANT_CASE",
    label: "CONSTANT_CASE",
    description: "HELLO_WORLD",
  },
  { value: "Title Case", label: "Title Case", description: "Hello World" },
  {
    value: "Sentence case",
    label: "Sentence case",
    description: "Hello world",
  },
  { value: "lowercase", label: "lowercase", description: "hello world" },
  { value: "UPPERCASE", label: "UPPERCASE", description: "HELLO WORLD" },
]

const CaseConverterTool = () => {
  const [selectedCase, setSelectedCase] = useState<TextCaseType>("camelCase")

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
    convert,
    handleExampleClick,
  } = useTool({
    convertFn: (text: string) => convertCase(text, selectedCase),
  })

  if (!tool) {
    return <div>Tool not found</div>
  }

  const handleCaseChange = (value: string) => {
    setSelectedCase(value as TextCaseType)
    convert()
  }

  const caseControls = (
    <Select
      options={caseOptions}
      value={selectedCase}
      onChange={handleCaseChange}
      align="left"
      size="sm"
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
      toolControls={caseControls}
    />
  )
}

export default CaseConverterTool
