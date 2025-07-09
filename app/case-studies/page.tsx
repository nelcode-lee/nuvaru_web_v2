import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  ChevronRight,
  ArrowRight,
  BarChart3,
  TrendingUp,
  Clock,
  PieChart,
  Truck,
  CheckCircle2,
  MessageSquare,
  Leaf,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Case Studies | Nuvaru - AI Transformation Consultancy",
  description:
    "Explore real-world examples of how our AI solutions have transformed businesses across various industries.",
}

export default function CaseStudiesPage() {
  const featuredCaseStudies = [
    {
      id: "transport-manager",
      title: "Driving Efficiency in UK Flatbed Transport",
      industry: "Logistics",
      challenge:
        "Rising fuel costs, traffic congestion, inefficient resource allocation, and complex compliance requirements in flatbed transport operations",
      solution:
        "UK Transport Manager AI system with real-time traffic analysis, dynamic fuel optimization, intelligent vehicle selection, and automated compliance management",
      results: [
        "17% average cost reduction",
        "14% revenue increase through optimized backhaul utilization",
        "98% compliance incident reduction",
        "23% improvement in customer satisfaction",
      ],
      image: "/highway-monitoring-system.png",
      link: "https://virtual-transport-manager.vercel.app/",
      extended: true,
      features: [
        "Real-time traffic analysis with advanced APIs",
        "Dynamic fuel price integration saving £0.05-0.08 per liter",
        "Optimal vehicle selection based on cargo specifications",
        "Driver hours optimization with regulatory compliance",
        "Approved routes database for heavy/oversized loads",
        "Environmental zone management for city restrictions",
      ],
      testimonial: {
        quote:
          "The Transport Manager AI has completely transformed how we plan and execute deliveries. The fuel savings alone paid for the system within the first quarter.",
        author: "James Wilson",
        position: "Operations Director",
        company: "Northern Logistics Ltd",
      },
      metrics: {
        fuelSavings: "17%",
        routeEfficiency: "24%",
        complianceRate: "98%",
        customerSatisfaction: "23%",
      },
      secondaryImage: "/virtual-transport-manager-ui.png",
    },
    {
      id: "customer-service-agent",
      title: "AI-Powered Customer Service Agent for SMEs",
      industry: "Customer Support",
      challenge:
        "Small businesses struggling with customer service demands, long response times, and inability to provide 24/7 support",
      solution:
        "AI-powered customer service agent that handles inquiries, resolves common issues, and escalates complex problems",
      results: [
        "65% reduction in response time",
        "40% cost savings compared to traditional staffing",
        "24/7 availability with consistent service quality",
        "85% customer query resolution without human intervention",
      ],
      image: "/ai-customer-service.png",
      link: "https://customer-service-agent.vercel.app/",
      extended: true,
      features: [
        "Natural language processing for understanding customer queries",
        "Integration with knowledge bases and product catalogs",
        "Sentiment analysis to detect customer frustration",
        "Seamless handoff to human agents when necessary",
        "Continuous learning from interactions to improve responses",
        "Multi-channel support (website, email, social media)",
      ],
      testimonial: {
        quote:
          "Our small team was drowning in customer inquiries. The AI agent now handles 85% of queries automatically, allowing us to focus on complex cases and growing our business.",
        author: "Sarah Thompson",
        position: "Customer Experience Manager",
        company: "TechRetail Solutions",
      },
      metrics: {
        responseTime: "65%",
        costSavings: "40%",
        availability: "24/7",
        resolutionRate: "85%",
      },
      secondaryImage: "/nuvaru-customer-service-agent.png",
    },
    {
      id: "sustainability-compliance",
      title: "Sustainability Compliance Assistant",
      industry: "Environmental Compliance",
      challenge:
        "UK haulage operations struggling with complex environmental regulations, carbon footprint tracking, ULEZ compliance, and sustainability reporting",
      solution:
        "Comprehensive AI-powered dashboard with real-time compliance monitoring, carbon footprint analysis, and automated reporting",
      results: [
        "100% regulatory compliance achievement",
        "35% carbon footprint reduction",
        "£50,000 annual cost savings through optimized environmental performance",
        "98% reduction in compliance-related penalties",
      ],
      image: "/sustainability-compliance-dashboard.jpg",
      link: "https://v0-sustainability-compliance-assis.vercel.app/",
      extended: true,
      features: [
        "Real-time ULEZ, CAZ, and Euro 6 compliance monitoring",
        "Carbon footprint tracking with trend analysis",
        "Automated SECR and OCRS reporting",
        "AI-powered sustainability recommendations",
        "Fleet emissions optimization and maintenance scheduling",
        "Regulatory deadline notifications and compliance calendar",
      ],
      testimonial: {
        quote:
          "The Sustainability Compliance Assistant has revolutionized how we manage our environmental obligations. We've eliminated compliance penalties while significantly reducing our carbon footprint.",
        author: "Emma Richards",
        position: "Environmental Manager",
        company: "GreenHaul Logistics Ltd",
      },
      metrics: {
        complianceRate: "100%",
        carbonReduction: "35%",
        costSavings: "£50k",
        reportingEfficiency: "95%",
      },
      secondaryImage: "/ecohaulage-dashboard-interface.png",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-brand py-20 md:py-24">
        <div className="absolute inset-0 z-0 opacity-15">
          <Image src="/network-pattern.png" alt="Network pattern background" fill className="object-cover" priority />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Transformation in Action</h1>
            <p className="mb-6 text-xl text-blue-100">
              Explore how our AI solutions have delivered measurable results for businesses across various industries
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Case Studies</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how our AI solutions have transformed real businesses with measurable results
            </p>
          </div>

          <div className="space-y-16">
            {featuredCaseStudies.map((study, index) => (
              <div key={study.id} id={study.id} className="scroll-mt-24">
                <div className="grid md:grid-cols-12 gap-8 items-start">
                  <div className={`md:col-span-5 ${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}>
                    <div className="space-y-6">
                      <div className="relative rounded-xl overflow-hidden shadow-xl">
                        <Image
                          src={study.image || "/placeholder.svg"}
                          alt={`${study.title} image`}
                          width={600}
                          height={400}
                          className="w-full h-auto object-cover"
                          loading="lazy"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                          <Badge variant="default" className="mb-2">
                            {study.industry}
                          </Badge>
                          <p className="text-white text-sm">
                            {index === 0
                              ? "AI-powered traffic monitoring system for route optimization"
                              : index === 2
                                ? "Eco-friendly transport operations with environmental compliance monitoring"
                                : ""}
                          </p>
                        </div>
                      </div>

                      {study.secondaryImage && (
                        <div className="relative rounded-xl overflow-hidden shadow-xl">
                          <Image
                            src={study.secondaryImage || "/placeholder.svg"}
                            alt={`${study.title} interface`}
                            width={600}
                            height={400}
                            className="w-full h-auto object-contain bg-white"
                            loading="lazy"
                          />
                        </div>
                      )}

                      {study.testimonial && (
                        <Card className="border-0 bg-gradient-to-br from-violet-50 to-blue-50 shadow-md">
                          <CardContent className="pt-6">
                            <blockquote className="mb-6 text-lg italic text-gray-700">
                              "{study.testimonial.quote}"
                            </blockquote>
                            <div>
                              <p className="font-semibold text-gray-900">{study.testimonial.author}</p>
                              <p className="text-gray-600">{study.testimonial.position}</p>
                              <p className="text-gray-600">{study.testimonial.company}</p>
                            </div>
                          </CardContent>
                        </Card>
                      )}
                    </div>
                  </div>

                  <div className={`md:col-span-7 ${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}>
                    <Badge variant="outline" className="mb-4 bg-violet-50 text-brand-purple hover:bg-violet-100">
                      {study.industry}
                    </Badge>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">{study.title}</h2>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">The Challenge</h3>
                      <p className="text-gray-700">{study.challenge}</p>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Solution</h3>
                      <p className="text-gray-700 mb-4">{study.solution}</p>

                      {study.features && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                          <ul className="space-y-2">
                            {study.features.map((feature, i) => (
                              <li key={i} className="flex items-start">
                                <ChevronRight className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Results</h3>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        {study.metrics &&
                          Object.entries(study.metrics).map(([key, value], i) => {
                            const icons = [
                              <TrendingUp key="0" className="h-8 w-8 text-brand-blue" />,
                              <BarChart3 key="1" className="h-8 w-8 text-brand-purple" />,
                              <PieChart key="2" className="h-8 w-8 text-brand-purple" />,
                              <Clock key="3" className="h-8 w-8 text-brand-blue" />,
                              <Leaf key="4" className="h-8 w-8 text-green-600" />,
                            ]

                            const labels = {
                              fuelSavings: "Reduction in Fuel Costs",
                              routeEfficiency: "Improved Route Efficiency",
                              complianceRate: "Compliance Rate",
                              customerSatisfaction: "Customer Satisfaction",
                              responseTime: "Reduction in Response Time",
                              costSavings: "Cost Savings",
                              availability: "Availability",
                              resolutionRate: "Resolution Rate",
                              outreachTime: "Reduction in Outreach Time",
                              responseRate: "Increase in Response Rate",
                              qualifiedLeads: "Increase in Qualified Leads",
                              productivity: "Productivity Improvement",
                              carbonReduction: "Carbon Reduction",
                              reportingEfficiency: "Reporting Efficiency",
                            }

                            return (
                              <div
                                key={key}
                                className={`rounded-lg bg-gradient-to-br ${
                                  index === 2 ? "from-green-50 to-green-100" : "from-blue-50 to-violet-50"
                                } p-4 text-center`}
                              >
                                <div className="mb-2 flex justify-center">
                                  {index === 2 && key === "carbonReduction" ? (
                                    <Leaf className="h-8 w-8 text-green-600" />
                                  ) : (
                                    icons[i % icons.length]
                                  )}
                                </div>
                                <div
                                  className={`text-3xl font-bold ${index === 2 ? "text-green-600" : "text-brand-blue"}`}
                                >
                                  {value}
                                </div>
                                <p className="text-sm text-gray-600">{labels[key as keyof typeof labels] || key}</p>
                              </div>
                            )
                          })}
                      </div>

                      <ul className="space-y-2">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle2
                              className={`h-5 w-5 ${
                                index === 2 ? "text-green-600" : "text-green-600"
                              } mr-2 flex-shrink-0 mt-0.5`}
                            />
                            <span className="text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      {study.link && (
                        <Link href={study.link} target="_blank" rel="noopener noreferrer">
                          <Button
                            className={`${
                              index === 2 ? "bg-gradient-to-r from-green-600 to-green-500" : "bg-gradient-brand"
                            } hover:opacity-90`}
                          >
                            {index === 0
                              ? "Experience the Transport Manager AI"
                              : index === 1
                                ? "Try the Customer Service Agent"
                                : "Experience EcoHaulage Dashboard"}
                          </Button>
                        </Link>
                      )}
                      <Button className="bg-purple-900 text-white hover:bg-purple-800">
                        Discuss a Similar Project
                      </Button>
                    </div>
                  </div>
                </div>

                {index < featuredCaseStudies.length - 1 && <div className="border-b border-gray-200 my-16"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Solutions by Industry</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore how our AI solutions address specific challenges in different industries
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-2 border-gray-100 transition-all hover:border-violet-100 hover:shadow-md">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Truck className="h-10 w-10 text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2">Logistics & Supply Chain</h3>
                <p className="text-gray-600 mb-4">
                  AI-powered route optimization, inventory management, and predictive maintenance solutions that reduce
                  costs and improve efficiency.
                </p>
                <Link href="#transport-manager">
                  <Button
                    variant="outline"
                    className="w-full border-brand-blue text-brand-blue hover:bg-blue-50 bg-transparent"
                  >
                    View Logistics Case Studies
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 transition-all hover:border-violet-100 hover:shadow-md">
              <CardContent className="p-6">
                <div className="mb-4">
                  <MessageSquare className="h-10 w-10 text-brand-purple" />
                </div>
                <h3 className="text-xl font-bold mb-2">Customer Service</h3>
                <p className="text-gray-600 mb-4">
                  AI-powered customer service agents that provide 24/7 support, reduce response times, and improve
                  customer satisfaction.
                </p>
                <Link href="#customer-service-agent">
                  <Button
                    variant="outline"
                    className="w-full border-brand-purple text-brand-purple hover:bg-violet-50 bg-transparent"
                  >
                    View Customer Service Case Studies
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 transition-all hover:border-violet-100 hover:shadow-md">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Leaf className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Environmental Compliance</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive sustainability solutions for UK transport operations, ensuring regulatory compliance
                  while reducing environmental impact and costs.
                </p>
                <Link href="#sustainability-compliance">
                  <Button
                    variant="outline"
                    className="w-full border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                  >
                    View Sustainability Case Studies
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-violet-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to Transform Your Business with AI?</h2>
            <p className="mb-8 text-lg">
              Let's discuss how we can apply similar solutions to address your specific business challenges.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/book-consultation"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-brand-purple hover:bg-blue-50 py-6 px-8"
              >
                Book a Free Consultation
              </Link>
              <Button className="bg-purple-900 text-white hover:bg-purple-800 text-lg py-6 px-8 border-0">
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
