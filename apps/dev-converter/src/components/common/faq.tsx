"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@ek-studio/ui"
import { motion } from "framer-motion"

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
    <section itemScope itemType="https://schema.org/FAQPage">
      <Accordion
        type="single"
        collapsible
        defaultValue={defaultOpen}
        className={className}
      >
        {items.map((item, index) => {
          const value = `item-${index}`
          return (
            <motion.div
              key={value}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <AccordionItem value={value}>
                <AccordionTrigger className="hover:no-underline group">
                  <h3
                    className="text-left font-medium group-hover:text-primary transition-colors text-base"
                    itemProp="name"
                  >
                    {item.question}
                  </h3>
                </AccordionTrigger>
                <AccordionContent
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div
                    className="text-muted-foreground leading-relaxed"
                    itemProp="text"
                  >
                    {item.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          )
        })}
      </Accordion>
    </section>
  )
}
