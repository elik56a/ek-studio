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
          >
            <AccordionItem value={value}>
              <AccordionTrigger className="hover:no-underline group">
                <span className="text-left font-medium group-hover:text-primary transition-colors">
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        )
      })}
    </Accordion>
  )
}
