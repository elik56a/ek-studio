import { Button } from "./button"
import { Input } from "./input"
import { Minus, Plus } from "lucide-react"

import * as React from "react"

import { cn } from "./utils"

export interface NumberInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "type"> {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
  step?: number
}

const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  ({ className, value, onChange, min = 0, max = 100, step = 1, ...props }, ref) => {
    const handleIncrement = () => {
      const newValue = Math.min(max, value + step)
      onChange(newValue)
    }

    const handleDecrement = () => {
      const newValue = Math.max(min, value - step)
      onChange(newValue)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = parseInt(e.target.value) || min
      onChange(Math.max(min, Math.min(max, newValue)))
    }

    return (
      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={handleDecrement}
          disabled={value <= min}
          className="h-9 w-9 rounded-lg hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-colors"
        >
          <Minus className="h-4 w-4" />
        </Button>
        <Input
          ref={ref}
          type="number"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleInputChange}
          className={cn(
            "w-[80px] h-9 text-center font-semibold [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
            className
          )}
          {...props}
        />
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={handleIncrement}
          disabled={value >= max}
          className="h-9 w-9 rounded-lg hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-colors"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    )
  }
)
NumberInput.displayName = "NumberInput"

export { NumberInput }
