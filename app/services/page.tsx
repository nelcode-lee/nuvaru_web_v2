import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { BarChart3, Cog, Database, LineChart, Users, Shield, ArrowRight, ChevronRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "AI Services for UK Businesses",
  description:
    "Explore our comprehensive AI services designed to transform your business operations, drive efficiency, and accelerate growth with custom AI solutions.",
  keywords: [
    "AI services",
    "custom AI solutions",
    "process automation",
    "data analysis",
    "GDPR compliance",
    "AI implementation",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "AI Services | Nuvaru - AI Transformation Consultancy",
    description:
      "Explore our comprehensive AI services designed to transform your business operations and drive growth.",
    url: "/services",
    images: [
      {
        url: "/og-services.jpg", // Create this image for social sharing
        width: 1200,
        height: 630,
        alt: "Nuvaru AI Services",
      },
    ],
  },
}

export default function ServicesPage() {
  const services = [
    {
      id: "ai-readiness",
      title: "AI Readiness Assessment",
      description:
        "Evaluate your company's data infrastructure and identify AI opportunities with our comprehensive assessment.",
      icon: <Database className="h-12 w-12 text-brand-purple" />,
      longDescription:
        "Our AI Readiness Assessment provides a thorough evaluation of your organisation's current capabilities and identifies the most promising opportunities for AI implementation. We analyse your data infrastructure, business processes, and team capabilities to create a roadmap for successful AI adoption.",
      benefits: [
        "Comprehensive data infrastructure evaluation",
        "Identification of high-impact AI opportunities",
        "Gap analysis of current vs. required capabilities",
        "Prioritized implementation roadmap",
        "ROI projections for potential AI initiatives",
      ],
      image: "/ai-readiness.jpg",
      color: "from-violet-500 to-purple-700",
      highlight: "Readiness Score: 87%",
    },
    {
      id: "custom-ai",
      title: "Custom AI Solution Development",
      description: "Tailored AI tools designed specifically for your business needs and challenges.",
      icon: <Cog className="h-12 w-12 text-brand-blue" />,
      longDescription:
        "We develop custom AI solutions that address your specific business challenges. Our team of experts works closely with you to understand your requirements and build AI tools that deliver measurable results. From predictive analytics to natural language processing, we have the expertise to bring your AI vision to life.",
      benefits: [
        "Bespoke solutions tailored to your specific needs",
        "Seamless integration with existing systems",
        "Scalable architecture that grows with your business",
        "Ongoing support and maintenance",
        "Knowledge transfer to your team",
      ],
      image: "/ai-development.jpg",
      color: "from-blue-500 to-indigo-700",
      highlight: "93% Client Satisfaction",
    },
    {
      id: "process-automation",
      title: "Process Automation",
      description:
        "Streamline operations in logistics, recruitment, and administrative tasks with AI-powered automation.",
      icon: <LineChart className="h-12 w-12 text-brand-purple" />,
      longDescription:
        "Our Process Automation services help you identify and automate repetitive tasks across your organisation. By leveraging AI and machine learning, we can help you reduce manual effort, minimise errors, and free up your team to focus on higher-value activities that drive business growth.",
      benefits: [
        "Reduction in manual processing time by up to 80%",
        "Improved accuracy and consistency in operations",
        "24/7 operation capability without human intervention",
        "Detailed audit trails and process transparency",
        "Rapid ROI through operational cost savings",
      ],
      image: "/automation.jpg",
      color: "from-purple-500 to-pink-700",
      highlight: "80% Time Savings",
    },
    {
      id: "data-analysis",
      title: "Data Analysis & Optimisation",
      description: "Extract actionable insights from your business data to drive informed decision-making.",
      icon: <BarChart3 className="h-12 w-12 text-brand-blue" />,
      longDescription:
        "Our Data Analysis & Optimisation services help you unlock the value hidden in your data. We use advanced analytics and machine learning techniques to identify patterns, trends, and insights that can inform strategic decisions and drive business growth. From descriptive analytics to predictive modelling, we provide the insights you need to stay ahead.",
      benefits: [
        "Comprehensive data analysis across multiple sources",
        "Actionable insights presented in intuitive dashboards",
        "Predictive models to anticipate future trends",
        "Optimization recommendations for key business processes",
        "Ongoing monitoring and refinement of analytical models",
      ],
      image: "/analysis.jpg",
      color: "from-blue-500 to-cyan-700",
      highlight: "42% Revenue Growth",
    },
    {
      id: "gdpr-compliance",
      title: "GDPR Compliance Solutions",
      description: "AI-powered data protection tools to ensure compliance with UK and EU regulations.",
      icon: <Shield className="h-12 w-12 text-brand-purple" />,
      longDescription:
        "Our GDPR Compliance Solutions help you navigate the complex landscape of data protection regulations. We use AI to automate data discovery, classification, and protection, making it easier to maintain compliance while minimising the burden on your team. Our solutions help you protect sensitive data, respond to data subject requests, and demonstrate compliance to regulators.",
      benefits: [
        "Automated data discovery and classification",
        "Streamlined data subject request handling",
        "Continuous compliance monitoring and alerting",
        "Data protection impact assessment automation",
        "Comprehensive compliance documentation and reporting",
      ],
      image: "/GDPR.jpg",
      color: "from-emerald-500 to-green-700",
      highlight: "100% Compliance Rate",
    },
    {
      id: "ai-implementation",
      title: "AI Implementation & Training",
      description: "Seamless integration with existing systems and comprehensive staff training.",
      icon: <Users className="h-12 w-12 text-brand-blue" />,
      longDescription:
        "Our AI Implementation & Training services ensure that your AI solutions are successfully deployed and adopted across your organisation. We provide end-to-end implementation support, from technical integration to change management and user training. Our goal is to ensure that your team has the skills and confidence to leverage AI effectively in their daily work.",
      benefits: [
        "Smooth integration with existing systems and workflows",
        "Comprehensive training programs for all user levels",
        "Change management support to drive adoption",
        "Knowledge transfer to internal teams",
        "Ongoing support and capability building",
      ],
      image: "/training.jpg",
      color: "from-orange-500 to-red-700",
      highlight: "95% Adoption Rate",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-brand py-20 md:py-24">
        <div className="absolute inset-0 z-0 opacity-15">
          <Image src="/network-pattern.png" alt="" fill className="object-cover" priority />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Our Services</h1>
            <p className="mb-6 text-xl text-blue-100">
              Comprehensive AI solutions designed to transform your business operations and drive growth
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Transform Your Business with AI</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our suite of AI-powered services designed to help UK businesses optimize operations, drive
              efficiency, and achieve sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                href={
                  service.id === "ai-readiness"
                    ? "/services/ai-readiness-assessment"
                    : service.id === "custom-ai"
                      ? "/services/custom-ai-solutions"
                      : service.id === "process-automation"
                        ? "/services/process-automation"
                        : service.id === "data-analysis"
                          ? "/services/data-analysis-optimization"
                          : service.id === "gdpr-compliance"
                            ? "/services/gdpr-compliance-solutions"
                            : service.id === "ai-implementation"
                              ? "/services/ai-implementation-training"
                              : "#"
                }
                className="group block"
              >
                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 h-full transition-all duration-300 hover:shadow-xl hover:border-violet-200 hover:-translate-y-1">
                  <div className={`bg-gradient-to-r ${service.color} p-6 relative h-48 overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20">
                      <Image src="/network-pattern.png" alt="" fill className="object-cover" />
                    </div>
                    <div className="relative z-10">
                      <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                      {service.highlight}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex items-center text-brand-purple font-medium group-hover:translate-x-1 transition-transform">
                      Learn more <ChevronRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Sections */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-24">
                <div className="grid md:grid-cols-12 gap-8 items-center">
                  <div className={`md:col-span-5 ${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}>
                    <div className="relative">
                      <div
                        className={`absolute -inset-4 bg-gradient-to-r ${service.color} rounded-xl opacity-20 blur-lg`}
                      ></div>
                      <div className="relative rounded-xl overflow-hidden shadow-xl">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          width={600}
                          height={400}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg">
                        <Badge variant="purple" className="text-sm font-medium">
                          {service.highlight}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className={`md:col-span-7 ${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}>
                    <div className="mb-4 inline-flex items-center justify-center rounded-full bg-violet-100 p-3">
                      {service.icon}
                    </div>
                    <h2 className="mb-4 text-3xl font-bold text-gray-900">{service.title}</h2>
                    <p className="mb-6 text-lg text-gray-600">{service.longDescription}</p>

                    <h3 className="mb-3 text-xl font-semibold text-gray-900">Key Benefits</h3>
                    <ul className="mb-6 space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start bg-gray-50 p-3 rounded-lg shadow-sm">
                          <ChevronRight className="mr-2 h-5 w-5 text-brand-purple shrink-0 mt-0.5" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-4">
                      <Button className="bg-gradient-brand hover:bg-brand-purple-dark">Request a Consultation</Button>
                      {service.id === "ai-readiness" ? (
                        <Link href="/services/ai-readiness-assessment">
                          <Button
                            variant="outline"
                            className="border-brand-purple text-brand-purple hover:bg-violet-50"
                          >
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      ) : service.id === "custom-ai" ? (
                        <Link href="/services/custom-ai-solutions">
                          <Button
                            variant="outline"
                            className="border-brand-purple text-brand-purple hover:bg-violet-50"
                          >
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      ) : service.id === "process-automation" ? (
                        <Link href="/services/process-automation">
                          <Button
                            variant="outline"
                            className="border-brand-purple text-brand-purple hover:bg-violet-50"
                          >
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      ) : service.id === "data-analysis" ? (
                        <Link href="/services/data-analysis-optimization">
                          <Button
                            variant="outline"
                            className="border-brand-purple text-brand-purple hover:bg-violet-50"
                          >
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      ) : service.id === "gdpr-compliance" ? (
                        <Link href="/services/gdpr-compliance-solutions">
                          <Button
                            variant="outline"
                            className="border-brand-purple text-brand-purple hover:bg-violet-50"
                          >
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      ) : service.id === "ai-implementation" ? (
                        <Link href="/services/ai-implementation-training">
                          <Button
                            variant="outline"
                            className="border-brand-purple text-brand-purple hover:bg-violet-50"
                          >
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      ) : (
                        <Button variant="outline" className="border-brand-purple text-brand-purple hover:bg-violet-50">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-violet-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to Transform Your Business with AI?</h2>
            <p className="mb-8 text-lg opacity-90">
              Contact us today to discuss how our AI solutions can help you optimise operations, drive efficiency, and
              scale effectively.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-brand-purple hover:bg-gray-100 text-lg py-6 px-8">
                Book a Free Consultation
              </Button>
              <Link href="#footer">
                <Button className="text-lg py-6 px-8 bg-purple-900 text-white hover:bg-purple-800 border-0">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with ID for linking */}
      <div id="footer">
        <Footer />
      </div>
    </main>
  )
}
