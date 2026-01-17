"use client"

import { MimeTypeDisplay } from "@/components/custom/mime-type-display"
import { ToolLayout } from "@/components/tool/tool-layout"
import { useTool } from "@/hooks/use-tool"

const MimeTypeLookupTool = () => {
  const { tool, relatedTools } = useTool({
    convertFn: async () => ({ success: true, data: "" }),
  })

  if (!tool) {
    return <div>Tool not found</div>
  }

  return (
    <ToolLayout
      tool={tool}
      headerProps={{
        title: tool.name,
        description: tool.description,
      }}
      footerProps={{
        examples: tool.examples,
        faqs: tool.faq,
        relatedTools,
        onExampleClick: () => {},
      }}
      customToolArea={<MimeTypeDisplay />}
    />
  )
}

export default MimeTypeLookupTool
