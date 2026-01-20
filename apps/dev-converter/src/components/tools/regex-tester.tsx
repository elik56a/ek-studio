"use client"

import {
  Badge,
  ButtonWithTooltip,
  Card,
  CardContent,
  Checkbox,
  Collapsible,
  Input,
  Label,
  SidePanel,
  Textarea,
} from "@ek-studio/ui"
import { cn } from "@ek-studio/ui"
import { BookOpen, ChevronDown, ChevronUp } from "lucide-react"

import { useEffect, useRef, useState } from "react"

import { RegexCheatSheet } from "@/components/custom/regex-cheat-sheet"
import { ToolLayout } from "@/components/tool/tool-layout"
import { testRegexWithFormatting } from "@/features/text/regex/format"
import {
  getHighlightedParts,
  parseExampleInput,
} from "@/features/text/regex/render"
import { useTool } from "@/hooks/use-tool"

const RegexTesterTool = () => {
  const [regexPattern, setRegexPattern] = useState("")
  const [flags, setFlags] = useState({
    g: true,
    i: false,
    m: false,
    s: false,
    u: false,
    y: false,
  })
  const [testText, setTestText] = useState("")
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false)
  const [isCheatSheetOpen, setIsCheatSheetOpen] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)

  // Create conversion function that uses current pattern and flags
  const convertFn = (text: string) => {
    return testRegexWithFormatting(regexPattern, flags, text)
  }

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
  } = useTool({
    convertFn,
  })

  // Sync testText with input from useTool
  useEffect(() => {
    setTestText(input)
  }, [input])

  // Trigger conversion when pattern or flags change
  useEffect(() => {
    if (regexPattern && input) {
      convert()
    }
  }, [regexPattern, flags])

  // Focus cursor after opening slash on mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleFlagToggle = (flag: keyof typeof flags) => {
    setFlags(prev => ({ ...prev, [flag]: !prev[flag] }))
  }

  const handleInsertPattern = (pattern: string) => {
    setRegexPattern(prev => prev + pattern)
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleClearAll = () => {
    setRegexPattern("")
    setFlags({ g: true, i: false, m: false, s: false, u: false, y: false })
    handleClear()
  }

  if (!tool) {
    return <div>Tool not found</div>
  }

  // Highlight matches in the test text
  const renderHighlightedText = () => {
    const result = getHighlightedParts(regexPattern, flags, input)

    if (result.type === "empty" || result.type === "no-matches") {
      return (
        <div className="flex items-center justify-center h-32 text-center">
          <p className="text-muted-foreground/60 text-sm italic">
            {result.message}
          </p>
        </div>
      )
    }

    return (
      <div className="whitespace-pre-wrap break-words font-mono text-sm">
        {result.parts?.map((part, idx) =>
          part.isMatch ? (
            <mark
              key={idx}
              className="bg-yellow-300 dark:bg-yellow-600 px-1 rounded relative group cursor-help break-words"
              title={`Match ${part.matchIndex}`}
            >
              {part.text}
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Match {part.matchIndex}
              </span>
            </mark>
          ) : (
            <span key={idx}>{part.text}</span>
          )
        )}
      </div>
    )
  }

  const customInputComponent = (
    <div className="h-full flex flex-col gap-4">
      {/* Regex Pattern Input */}
      <div className="space-y-2">
        <Label className="text-sm font-semibold">Regular Expression</Label>
        <div className="flex items-center gap-1 bg-background/50 border border-border/50 rounded-lg px-3 py-2 focus-within:border-primary/50 focus-within:bg-background transition-all">
          <span className="text-muted-foreground font-mono text-sm select-none">
            /
          </span>
          <Input
            ref={inputRef}
            value={regexPattern}
            onChange={e => setRegexPattern(e.target.value)}
            placeholder="Enter regex pattern..."
            className="flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 font-mono text-sm px-1"
          />
          <span className="text-muted-foreground font-mono text-sm select-none">
            /
          </span>
          <span className="text-primary font-mono text-sm font-semibold">
            {Object.entries(flags)
              .filter(([_, enabled]) => enabled)
              .map(([flag]) => flag)
              .join("")}
          </span>
        </div>
      </div>

      {/* Advanced Flags Section */}
      <Collapsible
        open={isAdvancedOpen}
        onOpenChange={setIsAdvancedOpen}
        trigger={
          <ButtonWithTooltip
            variant="ghost"
            size="sm"
            className="w-full justify-between"
            tooltip="Toggle advanced regex flags configuration"
            tooltipSide="right"
          >
            <span className="text-sm font-medium">Advanced Flags</span>
            {isAdvancedOpen ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </ButtonWithTooltip>
        }
        contentClassName="mt-2"
      >
        <div className="flex items-center gap-2 flex-wrap p-3 bg-muted/30 rounded-lg border border-border/50">
          {[
            { key: "g", label: "Global" },
            { key: "i", label: "Ignore Case" },
            { key: "m", label: "Multiline" },
            { key: "s", label: "Dot All" },
            { key: "u", label: "Unicode" },
            { key: "y", label: "Sticky" },
          ].map(({ key, label }) => (
            <div
              key={key}
              className={cn(
                "flex items-center gap-1.5 px-2.5 py-1 rounded-md border transition-all cursor-pointer hover:bg-muted/50",
                flags[key as keyof typeof flags]
                  ? "border-primary bg-primary/5"
                  : "border-border/50"
              )}
              onClick={() => handleFlagToggle(key as keyof typeof flags)}
            >
              <Checkbox
                id={`flag-${key}`}
                checked={flags[key as keyof typeof flags]}
                onCheckedChange={() =>
                  handleFlagToggle(key as keyof typeof flags)
                }
              />
              <label
                htmlFor={`flag-${key}`}
                className="text-xs font-medium cursor-pointer flex items-center gap-1 whitespace-nowrap"
              >
                <span className="font-mono font-bold text-primary">{key}</span>
                <span className="text-muted-foreground">- {label}</span>
              </label>
            </div>
          ))}
        </div>
      </Collapsible>

      {/* Test Text Input */}
      <div className="flex-1 flex flex-col space-y-2 min-h-0">
        <Label className="text-sm font-semibold">Test Text</Label>
        <Textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder={tool.ui.inputPlaceholder}
          className="flex-1 min-h-[120px] font-mono text-sm bg-background/50 border-border/50 focus:bg-background focus:border-primary/50 transition-all resize-none"
        />
      </div>
    </div>
  )

  const customOutputComponent = (
    <div className="h-full flex flex-col gap-4">
      {/* Match Results with Highlighting */}
      <div className="flex flex-col space-y-2 flex-1">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-semibold">Highlighted Matches</Label>
          <div className="flex items-center gap-2">
            {output && output !== "No matches found" && (
              <Badge variant="secondary" className="text-xs">
                {output.split("\n\n").length}{" "}
                {output.split("\n\n").length === 1 ? "match" : "matches"}
              </Badge>
            )}
            <ButtonWithTooltip
              variant="outline"
              size="sm"
              onClick={() => setIsCheatSheetOpen(true)}
              tooltip="Open Regex Cheat Sheet"
              tooltipSide="left"
            >
              <BookOpen className="h-4 w-4" />
              <span>Cheat Sheet</span>
            </ButtonWithTooltip>
          </div>
        </div>
        <Card className="bg-background/30 border-border/50 flex-1">
          <CardContent className="p-4">{renderHighlightedText()}</CardContent>
        </Card>
      </div>
    </div>
  )

  return (
    <>
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
          inputLabel: "Regex Pattern & Test Text",
          outputLabel: "Results & Cheat Sheet",
          errorMessage: status === "error" ? statusMessage : undefined,
          customInputComponent,
          customOutputComponent,
        }}
        toolActionsProps={{
          onCopy: handleCopy,
          onClear: handleClearAll,
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
          onExampleClick: exampleInput => {
            const parsed = parseExampleInput(exampleInput)
            if (parsed) {
              setRegexPattern(parsed.pattern)
              setFlags(parsed.flags)
              setInput(parsed.testText)
            }
          },
        }}
      />

      {/* Regex Cheat Sheet Side Panel */}
      <SidePanel
        open={isCheatSheetOpen}
        onOpenChange={setIsCheatSheetOpen}
        title="Regex Cheat Sheet"
        side="right"
        width="500px"
      >
        <div className="p-4">
          <RegexCheatSheet onInsert={handleInsertPattern} />
        </div>
      </SidePanel>
    </>
  )
}

export default RegexTesterTool
