import { BarChart3, Cog, Database, LineChart, Users, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ServicesSection() {
  const services = [
    {
      title: "AI Readiness Assessment",
      description: "Evaluate your company's data infrastructure and identify AI opportunities",
      icon: <Database className="h-10 w-10 text-brand-purple" />,
      link: "/services/ai-readiness-assessment",
    },
    {
      title: "Custom AI Solution Development",
      description: "Tailored agentic AI systems designed specifically for your business needs",
      icon: <Cog className="h-10 w-10 text-brand-blue" />,
      link: "/services/custom-ai-solutions",
    },
    {
      title: "Process Automation",
      description: "Streamline operations in logistics, recruitment, and administrative tasks",
      icon: <LineChart className="h-10 w-10 text-brand-purple" />,
      link: "/services/process-automation",
    },
    {
      title: "Data Analysis & Optimisation",
      description: "Extract actionable insights from your business data",
      icon: <BarChart3 className="h-10 w-10 text-brand-blue" />,
      link: "/services/data-analysis-optimization",
    },
    {
      title: "GDPR Compliance Solutions",
      description: "AI-powered data protection tools to ensure compliance with UK and EU regulations",
      icon: <Shield className="h-10 w-10 text-brand-purple" />,
      link: "/services/gdpr-compliance-solutions",
    },
    {
      title: "AI Implementation & Training",
      description: "Seamless integration with existing systems and staff training",
      icon: <Users className="h-10 w-10 text-brand-blue" />,
      link: "/services/ai-implementation-training",
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Agentic AI Solutions for Real Business Challenges
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-500">
            We provide practical agentic AI solutions that address specific business needs and deliver measurable
            results through autonomous, intelligent agents.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-2 border-gray-100 transition-all hover:border-violet-100 hover:shadow-md"
            >
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-500 mb-4">
                  {service.description.replace(/optimization/g, "optimisation")}
                </CardDescription>
                <Link href={service.link} passHref>
                  <Button variant="outline" className="text-brand-purple border-brand-purple hover:bg-violet-50">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
