import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Nuvaru helped us implement an AI solution that reduced our operational costs by 30% within the first six months. Their understanding of both the technology and our business needs was exceptional.",
      author: "Sarah Johnson",
      position: "Operations Director",
      company: "Hull Logistics Ltd",
    },
    {
      quote:
        "The team at Nuvaru translated complex AI concepts into practical solutions that our staff could easily adopt. The ROI has been remarkable, and we continue to find new ways to leverage the technology.",
      author: "Michael Thompson",
      position: "CEO",
      company: "Yorkshire Recruitment",
    },
    {
      quote:
        "As a small business, we were sceptical about AI implementation, but Nuvaru created a tailored solution that fit our budget and delivered immediate results. Their ongoing support has been invaluable.",
      author: "Emma Richards",
      position: "Managing Director",
      company: "Humber Financial Services",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-violet-50 to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">What Our Clients Say</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-500">
            Hear from businesses that have transformed their operations with our AI solutions
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-brand-purple opacity-30 mb-4" />
                <p className="mb-6 text-lg italic text-gray-700">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-500">{testimonial.position}</p>
                  <p className="text-gray-500">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
