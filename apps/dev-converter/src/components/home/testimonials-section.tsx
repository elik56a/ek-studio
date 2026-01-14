"use client"

import { Card, CardHeader } from "@ek-studio/ui"
import { Quote, Star } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Frontend Developer",
      company: "Tech Startup",
      content:
        "DevConverter has become my go-to tool for JSON formatting and JWT debugging. The fact that everything runs locally means I can use it with sensitive production data without worrying about security.",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "Full Stack Engineer",
      company: "E-commerce Platform",
      content:
        "I love that there's no registration required and it works offline. The Base64 encoder and hash generator are tools I use daily for API development. Fast, reliable, and completely free!",
      rating: 5,
    },
    {
      name: "Emily Watson",
      role: "DevOps Engineer",
      company: "Cloud Services",
      content:
        "The privacy-first approach is exactly what I need. Being able to process data client-side without sending anything to a server is crucial for handling sensitive configuration files and tokens.",
      rating: 5,
    },
    {
      name: "David Kim",
      role: "Backend Developer",
      company: "Fintech Company",
      content:
        "Clean interface, instant results, and no ads. The regex tester and text diff checker have saved me countless hours during code reviews. This is how developer tools should be built.",
      rating: 5,
    },
  ]

  return (
    <section className="space-y-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Loved by Developers
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            See what developers are saying about DevConverter
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="glass border-0 hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Quote className="w-8 h-8 text-primary/30 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-sm sm:text-base text-foreground/90 leading-relaxed mb-4">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
