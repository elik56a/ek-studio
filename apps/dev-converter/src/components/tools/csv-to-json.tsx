"use client"

import { useCallback, useMemo, useState } from "react"
import { Checkbox, Label } from "@ek-studio/ui"
import { ButtonGroup } from "@/components/common/button-group"
import { CollapsibleJsonViewer } from "@/components/custom/collapsible-json-viewer"
import { FileOrTextInput } from "@/components/custom/file-or-text-input"
import { ToolLayout } from "@/components/tool/tool-layout"
import { csvToJson, CsvToJsonOptions, CsvToJsonPreset } from "@/features/data-transform/csv"
import { useTool } from "@/hooks/use-tool"

interface CsvToJsonToolProps {
  preset?: CsvToJsonPreset
}

const CsvToJsonTool = ({ preset }: CsvToJsonToolProps) => {
  const [hasHeaders, setHasHeaders] = useState(preset?.hasHeaders ?? true)
  const [outputFormat, setOutputFormat] = useState<"array" | "object">(
    preset?.outputFormat ?? "array"
  )

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
    handleExampleClick,
  } = useTool({
    convertFn: useCallback(
      (csvInput: string) => {
        const options: CsvToJsonOptions = {
          hasHeaders,
          outputFormat,
        }
        return csvToJson(csvInput, options)
      },
      [hasHeaders, outputFormat]
    ),
  })

  if (!tool) {
    return <div>Tool not found</div>
  }

  const customInputComponent = useMemo(
    () => (
      <FileOrTextInput
        value={input}
        onChange={setInput}
        placeholder={tool.ui.inputPlaceholder}
        accept=".csv,.txt"
        acceptLabel="CSV, TXT"
        disabled={status === "loading"}
      />
    ),
    [input, setInput, tool.ui.inputPlaceholder, status]
  )

  // Input actions with options
  const inputActions = (
    <div className="flex flex-wrap items-end gap-4">
      {/* Output Format Selector */}
      <div className="flex flex-col gap-1">
        <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide">
          Output As
        </span>
        <ButtonGroup
          options={[
            { value: "array", label: "Array" },
            { value: "object", label: "Object" },
          ]}
          value={outputFormat}
          onChange={(value) => setOutputFormat(value as "array" | "object")}
          size="sm"
        />
      </div>

      {/* Headers Checkbox */}
      <div className="flex items-center gap-2 pb-[3px]">
        <Checkbox
          id="has-headers"
          checked={hasHeaders}
          onCheckedChange={(checked) => setHasHeaders(checked as boolean)}
          disabled={status === "loading"}
        />
        <Label 
          htmlFor="has-headers" 
          className="text-sm cursor-pointer"
        >
          First row is headers
        </Label>
      </div>
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
        inputLabel: tool.ui.inputLabel,
        outputLabel: tool.ui.outputLabel,
        errorMessage: status === "error" ? statusMessage : undefined,
        customInputComponent: customInputComponent,
        inputActions: inputActions,
        customOutputComponent: (
          <CollapsibleJsonViewer
            value={output}
            placeholder={tool.ui.outputPlaceholder}
          />
        ),
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
    />
  )
}

export default CsvToJsonTool
