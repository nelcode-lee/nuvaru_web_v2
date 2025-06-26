import { Database, Cog, LineChart, BarChart3, Shield, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

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
        {/* Web Services Cards */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Web Development Services</h3>
            <p className="text-gray-600">Modern, high-performance web solutions that drive business growth</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Web Design & Development */}
            <Link href="/services/website-development" className="group block">
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 h-full transition-all duration-300 hover:shadow-xl hover:border-violet-200 hover:-translate-y-1">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-700 p-6 relative h-48 overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <Image src="/network-pattern.png" alt="" fill className="object-cover" />
                  </div>
                  <div className="relative z-10">
                    <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Web Design & Development</h3>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                    Modern & Fast
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Professional websites built with React and modern technologies to enhance your digital presence and
                    convert visitors into customers.
                  </p>
                  <div className="flex items-center text-brand-purple font-medium group-hover:translate-x-1 transition-transform">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Web Portal Development */}
            <Link href="/services/web-portal-development" className="group block">
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 h-full transition-all duration-300 hover:shadow-xl hover:border-violet-200 hover:-translate-y-1">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-700 p-6 relative h-48 overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <Image src="/network-pattern.png" alt="" fill className="object-cover" />
                  </div>
                  <div className="relative z-10">
                    <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Web Portal Development</h3>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                    Secure & Scalable
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Custom web portals for employee access, client management, and business operations with secure
                    authentication and role-based permissions.
                  </p>
                  <div className="flex items-center text-brand-purple font-medium group-hover:translate-x-1 transition-transform">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Web App Development */}
            <Link href="/services/web-app-development" className="group block">
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 h-full transition-all duration-300 hover:shadow-xl hover:border-violet-200 hover:-translate-y-1">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-700 p-6 relative h-48 overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <Image src="/network-pattern.png" alt="" fill className="object-cover" />
                  </div>
                  <div className="relative z-10">
                    <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Web App Development</h3>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                    Interactive & Responsive
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Progressive web applications that work seamlessly across all devices, providing native app-like
                    experiences through the browser.
                  </p>
                  <div className="flex items-center text-brand-purple font-medium group-hover:translate-x-1 transition-transform">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
