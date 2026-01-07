import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@ek-studio/ui"

export interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
  defaultOpen?: string
}

export function FAQ({ items, defaultOpen }: FAQProps) {
  return (
    <Accordion type="single" collapsible defaultValue={defaultOpen}>
      {items.map((item, index) => {
        const value = `item-${index}`
        return (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground leading-relaxed">
                {item.answer}
              </p>
            </AccordionContent>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}
