"use client"

import {
  Badge,
  Card,
  CardContent,
  Checkbox,
  Input,
  Label,
  Textarea,
} from "@ek-studio/ui"
import { cn } from "@ek-studio/ui"

import { useEffect, useRef, useState } from "react"

import { RegexCheatSheet } from "@/components/custom/regex-cheat-sheet"
import { ToolLayout } from "@/components/tool/tool-layout"
import { useTool } from "@/hooks/use-tool"
import { testRegex, testRegexWithFormatting } from "@/features/text/regex"

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
    handleExampleClick,
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
    if (!input || !regexPattern) {
      return (
        <div className="text-muted-foreground text-sm">
          {tool.ui.inputPlaceholder}
        </div>
      )
    }

    const flagsString = Object.entries(flags)
      .filter(([_, enabled]) => enabled)
      .map(([flag]) => flag)
      .join("")

    const fullRegex = `/${regexPattern}/${flagsString}`
    const result = testRegex(fullRegex, input)

    if (!result.success || !result.data || result.data.matches.length === 0) {
      return (
        <div className="whitespace-pre-wrap break-words font-mono text-sm">
          {input}
        </div>
      )
    }

    const matches = result.data.matches
    const parts: { text: string; isMatch: boolean; matchIndex?: number }[] = []
    let lastIndex = 0

    matches.forEach((match, idx) => {
      if (match.index > lastIndex) {
        parts.push({
          text: input.slice(lastIndex, match.index),
          isMatch: false,
        })
      }
      parts.push({ text: match.match, isMatch: true, matchIndex: idx + 1 })
      lastIndex = match.index + match.match.length
    })

    if (lastIndex < input.length) {
      parts.push({ text: input.slice(lastIndex), isMatch: false })
    }

    return (
      <div className="whitespace-pre-wrap break-words font-mono text-sm">
        {parts.map((part, idx) =>
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

  const inputToolbar = (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs font-semibold text-muted-foreground mr-1">
        Regex Flags:
      </span>
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
            onCheckedChange={() => handleFlagToggle(key as keyof typeof flags)}
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
  )

  const customOutputComponent = (
    <div className="h-full flex flex-col gap-4">
      {/* Match Results with Highlighting */}
      <div className="flex flex-col space-y-2">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-semibold">Highlighted Matches</Label>
          {output && output !== "No matches found" && (
            <Badge variant="secondary" className="text-xs">
              {output.split("\n\n").length}{" "}
              {output.split("\n\n").length === 1 ? "match" : "matches"}
            </Badge>
          )}
        </div>
        <Card className="bg-background/30 border-border/50">
          <CardContent className="p-4">{renderHighlightedText()}</CardContent>
        </Card>
      </div>

      {/* Regex Cheat Sheet */}
      <div className="flex-1 flex flex-col space-y-2 min-h-0">
        <Label className="text-sm font-semibold">Regex Cheat Sheet</Label>
        <Card className="flex-1 min-h-0 bg-background/30 border-border/50">
          <CardContent className="p-4 h-full overflow-hidden min-h-[300px] max-h-[500px]">
            <RegexCheatSheet onInsert={handleInsertPattern} />
          </CardContent>
        </Card>
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
        inputLabel: "Regex Pattern & Test Text",
        outputLabel: "Results & Cheat Sheet",
        errorMessage: status === "error" ? statusMessage : undefined,
        customInputComponent,
        customOutputComponent,
        inputActions: inputToolbar,
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
          // Parse example input format: /pattern/flags\n\ntest text
          const parts = exampleInput.split("\n\n")
          if (parts.length >= 2) {
            const regexPart = parts[0]
            const testText = parts.slice(1).join("\n\n")

            // Parse regex pattern and flags
            const match = regexPart.match(/^\/(.+)\/([gimsuvy]*)$/)
            if (match) {
              setRegexPattern(match[1])
              const flagsStr = match[2]
              setFlags({
                g: flagsStr.includes("g"),
                i: flagsStr.includes("i"),
                m: flagsStr.includes("m"),
                s: flagsStr.includes("s"),
                u: flagsStr.includes("u"),
                y: flagsStr.includes("y"),
              })
            }

            setInput(testText)
          }
        },
      }}
    />
  )
}

export default RegexTesterTool
