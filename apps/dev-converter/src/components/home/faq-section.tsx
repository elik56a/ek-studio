"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@ek-studio/ui"

export default function FAQSection() {
  const faqs = [
    {
      question: "Are DevConverter tools really free?",
      answer:
        "Yes, absolutely! All DevConverter tools are 100% free with no hidden costs, premium tiers, or paywalls. We believe developer tools should be accessible to everyone. There are no limits on usage, no registration required, and no credit card needed.",
    },
    {
      question: "Is my data safe and private?",
      answer:
        "Your data is completely safe. All processing happens entirely in your browser using client-side JavaScript. Your code, tokens, and data never leave your device or get sent to any server. We don't collect, store, or transmit any of your data. This makes DevConverter perfect for handling sensitive information like API keys, JWT tokens, and production data.",
    },
    {
      question: "Do I need to create an account to use DevConverter?",
      answer:
        "No account required! You can start using any tool immediately without registration, login, or providing any personal information. Simply visit the tool you need and start working. This also means your usage is completely anonymous.",
    },
    {
      question: "Can I use DevConverter offline?",
      answer:
        "Yes! Once you've loaded a tool page, it will work offline thanks to browser caching. All processing happens in your browser, so you don't need an internet connection to use the tools. This makes DevConverter perfect for working on planes, trains, or anywhere without reliable internet.",
    },
    {
      question: "What tools are available on DevConverter?",
      answer:
        "DevConverter offers 20+ developer tools including JSON formatter and validator, Base64 encoder/decoder, JWT decoder, hash generators (MD5, SHA-1, SHA-256, SHA-512), UUID generator, Unix timestamp converter, URL encoder/decoder, regex tester, text diff checker, YAML/JSON/CSV converters, markdown converter, color converter, and many more. We're constantly adding new tools based on developer feedback.",
    },
    {
      question: "How fast are the tools?",
      answer:
        "Extremely fast! Since all processing happens in your browser with no server round trips, you get instant results. There's zero server delay, no network latency, and no waiting in queues. Even large files are processed quickly using optimized client-side algorithms.",
    },
    {
      question: "Can I use DevConverter for commercial projects?",
      answer:
        "Absolutely! DevConverter is free for both personal and commercial use. Whether you're a freelancer, startup, or enterprise developer, you can use all tools without any licensing restrictions or attribution requirements.",
    },
    {
      question: "Is DevConverter open source?",
      answer:
        "Yes! DevConverter is open source and available on GitHub. You can review the code, contribute improvements, report issues, or even fork it for your own use. We believe in transparency and community-driven development.",
    },
    {
      question: "Do the tools work on mobile devices?",
      answer:
        "Yes! All DevConverter tools are fully responsive and work great on mobile phones and tablets. The interface adapts to your screen size, making it easy to use tools on the go.",
    },
    {
      question: "How do I report a bug or request a feature?",
      answer:
        "We love feedback! You can report bugs or request new features through our GitHub repository. We actively monitor issues and prioritize features based on community demand. Your input helps make DevConverter better for everyone.",
    },
  ]

  return (
    <section className="space-y-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Everything you need to know about DevConverter
          </p>
        </div>

        <div className="glass rounded-2xl p-6 sm:p-8 border-0">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base sm:text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
