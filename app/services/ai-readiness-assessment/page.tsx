import type { Metadata } from "next"
import { generateMetadata } from "@/components/page-seo"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, ArrowRight, FileText, BarChart3, Shield, Users, Database, Brain } from "lucide-react"

export const metadata: Metadata = generateMetadata({
  title: "AI Readiness Assessment | Nuvaru - AI Transformation Consultancy",
  description:
    "Evaluate your organisation's AI readiness with our comprehensive assessment. Identify opportunities, gaps, and create a strategic roadmap for successful AI adoption.",
  keywords: [
    "AI readiness assessment UK",
    "AI maturity evaluation",
    "business AI readiness",
    "AI capability assessment",
    "AI implementation roadmap",
    "AI strategy UK",
    "data infrastructure evaluation",
    "AI opportunity identification",
    "AI gap analysis",
    "AI readiness framework",
  ],
})

export default function AIReadinessAssessmentPage() {
  const dimensions = [
    {
      title: "Strategic Alignment & Vision",
      icon: <Brain className="h-10 w-10 text-brand-blue" />,
      items: [
        "Clarity of AI vision and strategic goals",
        "Executive sponsorship and leadership commitment",
        "Identified business use cases with clear value propositions",
        "Alignment of AI initiatives with organisational priorities",
        "Realistic expectations and understanding of AI capabilities",
      ],
    },
    {
      title: "Data Infrastructure & Quality",
      icon: <Database className="h-10 w-10 text-brand-purple" />,
      items: [
        "Data availability, accessibility, and completeness",
        "Data governance policies and practices",
        "Data quality, consistency, and standardisation",
        "Data storage and processing capabilities",
        "Integration capabilities across systems",
        "Compliance with relevant data regulations (GDPR, CCPA, etc.)",
      ],
    },
    {
      title: "Technical Readiness",
      icon: <BarChart3 className="h-10 w-10 text-brand-blue" />,
      items: [
        "Computing resources and scalability",
        "System architecture compatibility",
        "Integration capabilities with existing systems",
        "Technical debt assessment",
        "DevOps practices and capability maturity",
        "MLOps infrastructure readiness",
        "Cloud infrastructure readiness and strategy",
      ],
    },
    {
      title: "Organisational Capabilities",
      icon: <Users className="h-10 w-10 text-brand-purple" />,
      items: [
        "AI literacy across the organisation",
        "Data science and machine learning expertise",
        "Change management capabilities",
        "Cross-functional collaboration practices",
        "Training and upskilling programs",
        "Project management maturity",
      ],
    },
    {
      title: "Governance & Ethics",
      icon: <Shield className="h-10 w-10 text-brand-blue" />,
      items: [
        "AI ethics policies and guidelines",
        "Risk management practices",
        "Model governance frameworks",
        "Bias detection and mitigation strategies",
        "Explainability and transparency approaches",
        "Compliance with emerging AI regulations",
      ],
    },
    {
      title: "Implementation Readiness",
      icon: <CheckCircle2 className="h-10 w-10 text-brand-purple" />,
      items: [
        "Project prioritisation methodology",
        "Funding and resource allocation",
        "Success metrics and KPI definition",
        "Agile development capabilities",
        "Testing and validation protocols",
        "Deployment and maintenance planning",
      ],
    },
  ]

  const phases = [
    {
      title: "Phase 1: Discovery & Data Collection",
      items: [
        "Initial stakeholder interviews with leadership, IT, data teams, and business units",
        "Documentation review of strategies, policies, and technical specifications",
        "Systems and infrastructure evaluation",
        "Data landscape analysis",
        "Skills and capabilities assessment",
        "Current state workshop with key stakeholders",
      ],
    },
    {
      title: "Phase 2: Analysis & Evaluation",
      items: [
        "Gap analysis against industry benchmarks",
        "Capability maturity scoring across all dimensions",
        "Risk identification and assessment",
        "Opportunity prioritisation based on business impact and feasibility",
        "Identification of quick wins and long-term initiatives",
      ],
    },
    {
      title: "Phase 3: Recommendations & Roadmap",
      items: [
        "Detailed findings report with maturity scores",
        "Prioritised recommendations across all dimensions",
        "Implementation roadmap with clear milestones",
        "Resource requirements and budget estimates",
        "Success metrics and measurement framework",
        "Executive presentation of findings and recommendations",
      ],
    },
  ]

  const deliverables = [
    {
      title: "Executive Summary",
      description: "High-level overview of findings, key insights, and strategic recommendations",
    },
    {
      title: "Comprehensive Assessment Report",
      description: "Detailed analysis across all dimensions with maturity scores and benchmarking",
    },
    {
      title: "Gap Analysis",
      description: "Identification of capability gaps with prioritised recommendations",
    },
    {
      title: "AI Readiness Roadmap",
      description: "Phased implementation plan with clear milestones and dependencies",
    },
    {
      title: "Investment Framework",
      description: "Resource requirements and expected ROI for recommended initiatives",
    },
    {
      title: "Implementation Toolkit",
      description: "Templates, guidelines, and best practices to accelerate AI adoption",
    },
  ]

  const benefits = [
    "Avoid Costly Mistakes: Identify and address gaps before a significant investment",
    "Accelerate Time-to-Value: Focus on high-impact, feasible opportunities first",
    "Reduce Risk: Develop governance and risk management frameworks early",
    "Align Stakeholders: Create shared understanding and vision across the organisation",
    "Optimise Resources: Target investments where they will deliver maximum value",
    "Build Sustainable Capabilities: Develop the foundation for long-term AI success",
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
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              AI Readiness Assessment Framework
            </h1>
            <p className="mb-6 text-xl text-blue-100">
              Evaluate your organisation's AI readiness and build a strategic roadmap for successful implementation
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
            <p className="text-lg text-gray-700 mb-6">
              At Nuvaru, we understand that implementing AI solutions requires careful planning and preparation. Our AI
              Readiness Assessment provides organisations with a clear understanding of their current capabilities,
              identifies gaps, and creates a roadmap for successful AI adoption. This structured evaluation helps
              businesses maximise ROI on AI investments while minimising risks.
            </p>
            <div className="bg-gradient-to-br from-blue-50 to-violet-50 p-6 rounded-lg border border-blue-100 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Assessment Methodology</h3>
              <p className="text-gray-700">
                Nuvaru's AI Readiness Assessment combines industry best practices with our proprietary evaluation
                framework developed through years of successful AI implementations across various sectors. Our
                comprehensive approach examines six critical dimensions of organisational readiness:
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Dimensions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Six Critical Dimensions</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {dimensions.map((dimension, index) => (
              <Card
                key={index}
                className="border-2 border-gray-100 transition-all hover:border-violet-100 hover:shadow-md"
              >
                <CardContent className="p-6">
                  <div className="mb-4">{dimension.icon}</div>
                  <h3 className="text-xl font-bold mb-4">
                    {index + 1}. {dimension.title}
                  </h3>
                  <ul className="space-y-2">
                    {dimension.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Assessment Process</h2>
            <p className="text-lg text-gray-700 mb-10 text-center">
              Our AI Readiness Assessment follows a structured, collaborative process:
            </p>

            <div className="space-y-12">
              {phases.map((phase, index) => (
                <div key={index} className="relative">
                  {index < phases.length - 1 && (
                    <div className="absolute left-6 top-12 bottom-0 w-1 bg-gradient-brand"></div>
                  )}
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-brand flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{phase.title}</h3>
                      <ul className="space-y-3">
                        {phase.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-violet-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Deliverables</h2>
          <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
            At the conclusion of the assessment, Nuvaru provides:
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((deliverable, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{deliverable.title}</h3>
                <p className="text-gray-700">{deliverable.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Benefits of Nuvaru's AI Readiness Assessment
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-brand-purple mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-violet-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Get Started</h2>
            <p className="text-xl mb-8">
              Ready to assess your organisation's AI readiness? Contact our team to schedule an initial consultation and
              learn how our assessment can help you build a solid foundation for AI success.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-brand-purple hover:bg-blue-50 text-lg py-6 px-8">
                Schedule a Consultation
              </Button>
              <Link href="/contact">
                <Button className="bg-gray-200 text-gray-800 hover:bg-gray-300 text-lg py-6 px-8 border-0">
                  Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
