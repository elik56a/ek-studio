import * as React from "react"

import { Button, buttonVariants } from "./button"
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip"

export interface ButtonWithTooltipProps
  extends React.ComponentProps<typeof Button> {
  tooltip: string
  tooltipSide?: "top" | "right" | "bottom" | "left"
}

const ButtonWithTooltip = React.forwardRef<
  HTMLButtonElement,
  ButtonWithTooltipProps
>(({ tooltip, tooltipSide = "top", children, ...props }, ref) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button ref={ref} {...props}>
          {children}
        </Button>
      </TooltipTrigger>
      <TooltipContent side={tooltipSide}>{tooltip}</TooltipContent>
    </Tooltip>
  )
})

ButtonWithTooltip.displayName = "ButtonWithTooltip"

export { ButtonWithTooltip }
