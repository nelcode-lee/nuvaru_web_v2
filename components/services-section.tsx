import { Database, Cog, LineChart, BarChart3, Shield, Users } from "lucide-react"
import Link from "next/link"

export function ServicesSection() {
  const services = [
    {
      title: "AI Readiness Assessment",
      description:
        "Evaluate your company's data infrastructure and identify AI opportunities with our comprehensive assessment.",
      icon: <Database className="h-10 w-10 text-white" />,
      link: "/services/ai-readiness-assessment",
      badge: "Readiness Score: 87%",
      gradient: "bg-gradient-to-br from-purple-500 to-purple-600",
    },
    {
      title: "Custom AI Solution Development",
      description: "Tailored AI tools designed specifically for your business needs and challenges.",
      icon: <Cog className="h-10 w-10 text-white" />,
      link: "/services/custom-ai-solutions",
      badge: "93% Client Satisfaction",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    {
      title: "Process Automation",
      description:
        "Streamline operations in logistics, recruitment, and administrative tasks with AI-powered automation.",
      icon: <LineChart className="h-10 w-10 text-white" />,
      link: "/services/process-automation",
      badge: "80% Time Savings",
      gradient: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
      title: "Data Analysis & Optimisation",
      description: "Extract actionable insights from your business data to drive informed decision-making.",
      icon: <BarChart3 className="h-10 w-10 text-white" />,
      link: "/services/data-analysis-optimization",
      badge: "42% Revenue Growth",
      gradient: "bg-gradient-to-br from-blue-500 to-teal-500",
    },
    {
      title: "GDPR Compliance Solutions",
      description: "AI-powered data protection tools to ensure compliance with UK and EU regulations.",
      icon: <Shield className="h-10 w-10 text-white" />,
      link: "/services/gdpr-compliance-solutions",
      badge: "100% Compliance Rate",
      gradient: "bg-gradient-to-br from-green-500 to-green-600",
    },
    {
      title: "AI Implementation & Training",
      description: "Seamless integration with existing systems and comprehensive staff training.",
      icon: <Users className="h-10 w-10 text-white" />,
      link: "/services/ai-implementation-training",
      badge: "95% Adoption Rate",
      gradient: "bg-gradient-to-br from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Our Services</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Comprehensive AI solutions designed to transform your business operations and drive measurable results.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-all hover:shadow-xl hover:scale-105"
            >
              {/* Gradient Header */}
              <div className={`${service.gradient} p-6 text-white relative`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">{service.icon}</div>
                  <div className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {service.badge}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              </div>

              {/* Content */}
              <div className="bg-white p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium group"
                >
                  Learn more
                  <svg
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
