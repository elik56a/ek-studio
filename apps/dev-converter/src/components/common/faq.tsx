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
  className?: string
}

export function FAQ({ items, defaultOpen, className }: FAQProps) {
  return (
    <section>
      <Accordion
        type="single"
        collapsible
        defaultValue={defaultOpen}
        className={className}
      >
        {items.map((item, index) => {
          const value = `item-${index}`
          return (
            <AccordionItem key={value} value={value}>
              <AccordionTrigger className="hover:no-underline group">
                <h3 className="text-left font-medium group-hover:text-primary transition-colors text-base">
                  {item.question}
                </h3>
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    </section>
  )
}
