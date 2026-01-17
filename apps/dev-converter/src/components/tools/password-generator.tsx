"use client"

import { Card, Checkbox, Label, Slider } from "@ek-studio/ui"

import { useState } from "react"

import { ToolLayout } from "@/components/tool/tool-layout"
import { PasswordOptions, generatePassword } from "@/features/security/password"
import { useTool } from "@/hooks/use-tool"

const PasswordGeneratorTool = () => {
  const [length, setLength] = useState(16)
  const [options, setOptions] = useState<PasswordOptions>({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  })

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
    generateFn: () => generatePassword(length, options),
  })

  if (!tool) {
    return <div>Tool not found</div>
  }

  const handleExampleClick = () => {
    generate()
  }

  const handleOptionChange = (key: keyof PasswordOptions) => {
    const newOptions = { ...options, [key]: !options[key] }
    // Ensure at least one option is selected
    const hasAtLeastOne = Object.values(newOptions).some(v => v)
    if (hasAtLeastOne) {
      setOptions(newOptions)
    }
  }

  const toolControls = (
    <div className="w-full">
      <Card className="p-6 space-y-6 bg-background/50 backdrop-blur-sm border-primary/10">
        {/* Slider */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="password-length" className="text-sm font-medium">
              Password Length
            </Label>
            <span className="text-lg font-bold text-primary">{length}</span>
          </div>
          <Slider
            id="password-length"
            min={1}
            max={50}
            step={1}
            value={[length]}
            onValueChange={(value: number[]) => setLength(value[0])}
          />
        </div>

        {/* Checkboxes */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Character Types</Label>
          <div className="flex flex-wrap items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
              <Checkbox
                checked={options.uppercase}
                onCheckedChange={() => handleOptionChange("uppercase")}
              />
              <span className="text-sm font-medium">A-Z</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
              <Checkbox
                checked={options.lowercase}
                onCheckedChange={() => handleOptionChange("lowercase")}
              />
              <span className="text-sm font-medium">a-z</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
              <Checkbox
                checked={options.numbers}
                onCheckedChange={() => handleOptionChange("numbers")}
              />
              <span className="text-sm font-medium">0-9</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
              <Checkbox
                checked={options.symbols}
                onCheckedChange={() => handleOptionChange("symbols")}
              />
              <span className="text-sm font-medium">Symbols</span>
            </label>
          </div>
        </div>
      </Card>
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
      toolControlsPosition="above"
    />
  )
}

export default PasswordGeneratorTool
