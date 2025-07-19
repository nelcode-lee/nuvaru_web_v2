import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, ArrowRight, Github, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Projects | Nuvaru - AI Solutions & Development",
  description:
    "Explore our portfolio of AI-powered projects and custom solutions. From transport management to customer service automation.",
  keywords: "AI projects, custom development, transport management, customer service AI, sustainability compliance",
}

export default function ProjectsPage() {
  const projects = [
    {
      id: "transport-manager",
      title: "Virtual Transport Manager",
      description: "AI-powered transport management system with real-time traffic analysis, fuel optimization, and compliance monitoring for UK logistics operations.",
      image: "/highway-monitoring-system.png",
      demoLink: "https://virtual-transport-manager.vercel.app/",
      githubLink: null,
      technologies: ["AI/ML", "React", "Next.js", "Real-time APIs"],
      category: "Logistics & Transport",
      status: "Live",
      features: [
        "Real-time traffic analysis",
        "Dynamic fuel optimization",
        "Vehicle selection AI",
        "Compliance management"
      ]
    },
    {
      id: "customer-service-agent",
      title: "AI Customer Service Agent",
      description: "Intelligent customer service automation that handles inquiries, resolves issues, and provides 24/7 support for SMEs.",
      image: "/ai-customer-service.png",
      demoLink: "https://customer-service-agent.vercel.app/",
      githubLink: null,
      technologies: ["AI/ML", "Natural Language Processing", "React", "Node.js"],
      category: "Customer Service",
      status: "Live",
      features: [
        "Natural language processing",
        "Multi-channel support",
        "Sentiment analysis",
        "Seamless human handoff"
      ]
    },
    {
      id: "sustainability-compliance",
      title: "Sustainability Compliance Assistant",
      description: "Comprehensive environmental compliance dashboard with carbon footprint tracking, ULEZ monitoring, and automated reporting for haulage operations.",
      image: "/sustainability-compliance-dashboard.jpg",
      demoLink: "https://v0-sustainability-compliance-assis.vercel.app/",
      githubLink: null,
      technologies: ["AI/ML", "React", "Data Analytics", "Compliance APIs"],
      category: "Environmental Compliance",
      status: "Live",
      features: [
        "ULEZ/CAZ compliance monitoring",
        "Carbon footprint tracking",
        "Automated reporting",
        "Regulatory notifications"
      ]
    },
    {
      id: "eco-dashboard-mobile",
      title: "EcoHaulage Mobile Dashboard",
      description: "Mobile-first sustainability dashboard for transport operators with real-time emissions tracking and compliance alerts.",
      image: "/ecohaulage-dashboard-interface.png",
      demoLink: "/eco-dashboard-mobile",
      githubLink: null,
      technologies: ["React Native", "Mobile UI", "Real-time Data", "Push Notifications"],
      category: "Mobile Development",
      status: "Live",
      features: [
        "Mobile-optimized interface",
        "Real-time emissions data",
        "Compliance alerts",
        "Fleet management"
      ]
    },
    {
      id: "business-audit-tool",
      title: "Business Capability Audit",
      description: "Comprehensive business assessment tool that evaluates AI readiness, digital transformation potential, and strategic opportunities.",
      image: "/professional-business-consultant.webp",
      demoLink: "/business-audit",
      githubLink: null,
      technologies: ["React", "Assessment Engine", "Data Visualization", "PDF Generation"],
      category: "Business Intelligence",
      status: "Live",
      features: [
        "AI readiness assessment",
        "Digital transformation analysis",
        "Strategic recommendations",
        "Detailed reporting"
      ]
    },
    {
      id: "ai-chat-assistant",
      title: "AI Chat Assistant",
      description: "Intelligent chat interface powered by advanced AI models for customer engagement and support automation.",
      image: "/ai-customer-service.webp",
      demoLink: "/chat",
      githubLink: null,
      technologies: ["AI/ML", "Chat Interface", "Real-time Processing", "Context Management"],
      category: "AI/ML",
      status: "Live",
      features: [
        "Advanced AI models",
        "Context-aware responses",
        "Real-time processing",
        "Multi-language support"
      ]
    },
    {
      id: "wellbeing-calculator",
      title: "Wellbeing Calculator",
      description: "Interactive wellbeing assessment tool that helps users evaluate and track their mental health and wellness metrics.",
      image: "/professional-business-consultant.webp",
      demoLink: "https://wellbeing-calculator.vercel.app/",
      githubLink: null,
      technologies: ["React", "Next.js", "Assessment Engine", "Data Visualization"],
      category: "Health & Wellness",
      status: "Live",
      features: [
        "Interactive assessment tools",
        "Wellness metrics tracking",
        "Personalized recommendations",
        "Progress visualization"
      ]
    }
  ]

  const categories = ["All", "AI/ML", "Logistics & Transport", "Customer Service", "Environmental Compliance", "Mobile Development", "Business Intelligence", "Health & Wellness"]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-brand py-20 md:py-24">
        <div className="absolute inset-0 z-0 opacity-15">
          <Image src="/network-pattern.webp" alt="Network pattern background" fill className="object-cover" priority />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Our Projects
            </h1>
            <p className="mb-6 text-xl text-white/90">
              Explore our portfolio of AI-powered solutions and custom developments that have transformed businesses across various industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-brand-gold hover:bg-brand-gold-dark text-white text-lg py-3 px-6 rounded-md font-medium transition-colors inline-flex items-center"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our latest AI solutions and custom developments that deliver real business value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-900">
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-white/90 text-gray-700">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-brand-purple transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex flex-col space-y-2">
                    <h4 className="text-sm font-semibold text-gray-900">Key Features:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-1 h-1 bg-brand-gold rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-2 pt-2">
                    {project.demoLink && (
                      <Link
                        href={project.demoLink}
                        className="inline-flex items-center justify-center bg-brand-gold hover:bg-brand-gold-dark text-white text-sm py-2 px-4 rounded-md font-medium transition-colors"
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        View Demo
                      </Link>
                    )}
                    {project.githubLink && (
                      <Link
                        href={project.githubLink}
                        className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white text-sm py-2 px-4 rounded-md font-medium transition-colors"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Let's discuss how we can create a custom AI solution or web application that transforms your business operations and drives growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-brand-gold hover:bg-brand-gold-dark text-white text-lg py-3 px-8 rounded-md font-medium transition-colors inline-flex items-center"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/case-studies"
                  className="border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white text-lg py-3 px-8 rounded-md font-medium transition-colors inline-flex items-center"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 