"use client"

import { useState } from "react"

import { Select, SelectOption } from "@/components/common/select"
import { ToolLayout } from "@/components/tool/tool-layout"
import { useTool } from "@/hooks/use-tool"
import { ConversionMode, convertMarkdownHtml } from "@/features/text/markdown"

const modeOptions: SelectOption[] = [
  {
    value: "markdown-to-html",
    label: "Markdown → HTML",
    description: "Convert Markdown to HTML",
  },
  {
    value: "html-to-markdown",
    label: "HTML → Markdown",
    description: "Convert HTML to Markdown",
  },
]

const MarkdownHtmlConverter = () => {
  const [mode, setMode] = useState<ConversionMode>("markdown-to-html")

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
    convertFn: (text: string) => convertMarkdownHtml(text, mode),
  })

  if (!tool) {
    return <div>Tool not found</div>
  }

  const handleModeChange = (value: string) => {
    setMode(value as ConversionMode)
    convert()
  }

  const modeControls = (
    <Select
      options={modeOptions}
      value={mode}
      onChange={handleModeChange}
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
        inputPlaceholder:
          mode === "markdown-to-html"
            ? "Enter Markdown here..."
            : "Enter HTML here...",
        outputPlaceholder:
          mode === "markdown-to-html"
            ? "HTML output will appear here..."
            : "Markdown output will appear here...",
        inputLabel: mode === "markdown-to-html" ? "Markdown" : "HTML",
        outputLabel: mode === "markdown-to-html" ? "HTML" : "Markdown",
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
      toolControls={modeControls}
    />
  )
}

export default MarkdownHtmlConverter
