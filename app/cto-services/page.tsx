import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  Brain,
  TrendingUp,
  Shield,
  Zap,
  Users,
  Target,
  CheckCircle,
  ArrowRight,
  Truck,
  Cog,
  BarChart3,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Fractional CTO Services | Nuvaru - Technology Leadership for SMEs",
  description:
    "Expert CTO services combining logistics expertise with high-level tech skills. Help your SME stay ahead of the curve with strategic technology leadership.",
  keywords: [
    "fractional CTO UK",
    "part-time CTO services",
    "SME technology leadership",
    "logistics technology strategy",
    "supply chain CTO",
    "technology consulting UK",
    "SME digital transformation",
    "logistics tech expertise",
    "fractional technology officer",
    "SME tech strategy",
  ],
}

export default function CTOServicesPage() {
  const services = [
    {
      title: "Technology Strategy & Roadmap",
      description:
        "Develop comprehensive technology strategies aligned with your logistics operations and business goals.",
      icon: <Target className="h-8 w-8 text-brand-gold" />,
      benefits: [
        "3-5 year technology roadmap development",
        "Budget planning and ROI projections",
        "Risk assessment and mitigation strategies",
        "Competitive technology analysis",
      ],
    },
    {
      title: "Digital Transformation Leadership",
      description: "Guide your organisation through digital transformation with logistics-focused expertise.",
      icon: <TrendingUp className="h-8 w-8 text-brand-gold" />,
      benefits: [
        "Process digitalisation and automation",
        "Legacy system modernisation",
        "Change management support",
        "Staff training and adoption programmes",
      ],
    },
    {
      title: "AI & Automation Implementation",
      description:
        "Leverage our AI expertise to implement cutting-edge automation solutions for your logistics operations.",
      icon: <Brain className="h-8 w-8 text-brand-gold" />,
      benefits: [
        "AI readiness assessment and planning",
        "Custom automation solution design",
        "Implementation project management",
        "Performance monitoring and optimisation",
      ],
    },
    {
      title: "Technology Team Building",
      description: "Build and scale your technology capabilities with strategic hiring and team development.",
      icon: <Users className="h-8 w-8 text-brand-gold" />,
      benefits: [
        "Technical recruitment strategy",
        "Team structure and role definition",
        "Skills gap analysis and training",
        "Performance management frameworks",
      ],
    },
    {
      title: "Cybersecurity & Compliance",
      description: "Ensure your technology infrastructure meets security standards and regulatory requirements.",
      icon: <Shield className="h-8 w-8 text-brand-gold" />,
      benefits: [
        "Security audit and risk assessment",
        "GDPR and industry compliance",
        "Incident response planning",
        "Staff security training programmes",
      ],
    },
    {
      title: "Vendor Management & Procurement",
      description: "Optimise your technology investments through strategic vendor relationships and procurement.",
      icon: <Zap className="h-8 w-8 text-brand-gold" />,
      benefits: [
        "Technology vendor evaluation",
        "Contract negotiation and management",
        "Cost optimisation strategies",
        "Performance monitoring and SLAs",
      ],
    },
  ]

  const whyChooseUs = [
    {
      title: "Logistics Domain Expertise",
      description: "Deep understanding of supply chain, warehousing, and transport operations",
      icon: <Truck className="h-12 w-12 text-brand-gold" />,
    },
    {
      title: "High-Level Technical Skills",
      description: "Advanced expertise in AI, automation, and enterprise technology solutions",
      icon: <Cog className="h-12 w-12 text-brand-gold" />,
    },
    {
      title: "SME-Focused Approach",
      description: "Tailored solutions that fit SME budgets, timelines, and operational constraints",
      icon: <Target className="h-12 w-12 text-brand-gold" />,
    },
    {
      title: "Proven Track Record",
      description: "Demonstrated success in transforming logistics operations through technology",
      icon: <BarChart3 className="h-12 w-12 text-brand-gold" />,
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-brand py-24 md:py-32 lg:py-40">
        {/* Network pattern overlay */}
        <div className="absolute inset-0 z-0 opacity-15">
          <Image src="/network-pattern.png" alt="" fill className="object-cover" priority={false} />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <Badge className="mb-4 bg-brand-gold text-slate-900 font-semibold">Fractional CTO Services</Badge>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Technology Leadership for <span className="text-brand-gold">Logistics SMEs</span>
              </h1>
              <p className="mb-8 text-xl text-blue-100 leading-relaxed">
                The pivotal combination of <strong className="text-brand-gold">logistics expertise</strong> paired with{" "}
                <strong className="text-brand-gold">high-level tech skills</strong> to help your business stay ahead of
                the curve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-consultation">
                  <Button className="bg-brand-gold text-slate-900 hover:bg-brand-gold-dark text-lg py-6 px-8 font-semibold">
                    Book Strategy Session
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden shadow-2xl bg-blue-900/50">
                  <Image
                    src="/puzzle-pieces.png"
                    alt="AI, Logistics, Technology, and Data Integration"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Perfect Combination for Logistics Success</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Most technology consultants lack logistics expertise. Most logistics experts lack high-level tech skills.
              We uniquely combine both to deliver transformational results for SMEs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-yellow-50 p-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive CTO Services for SMEs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From strategy development to implementation, we provide the technology leadership your logistics business
              needs to thrive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-2 border-gray-100 hover:border-brand-gold hover:shadow-lg transition-all"
              >
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-brand-gold mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SME Focus Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Built for Small to Medium Enterprises</h2>
              <p className="text-lg text-gray-600 mb-6">
                Large enterprises have full-time CTOs and massive IT budgets. SMEs need strategic technology leadership
                that's both accessible and effective. Our fractional CTO services bridge this gap.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-gold mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Cost-Effective Leadership</h3>
                    <p className="text-gray-600">
                      Get C-level technology expertise without the full-time salary and benefits
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-gold mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Flexible Engagement</h3>
                    <p className="text-gray-600">
                      Scale our involvement up or down based on your current needs and projects
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-gold mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Immediate Impact</h3>
                    <p className="text-gray-600">Start benefiting from strategic technology leadership from day one</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-gold mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Industry-Specific Knowledge</h3>
                    <p className="text-gray-600">Deep understanding of logistics challenges and technology solutions</p>
                  </div>
                </div>
              </div>

              <Link href="/book-consultation">
                <Button className="bg-brand-gold text-slate-900 hover:bg-brand-gold-dark">
                  Discuss Your Needs <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="md:col-span-6">
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/timber-transport-truck.png"
                    alt="UK Haulage Operation"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Technology Strategy?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Don't let technology challenges hold your logistics business back. Get the strategic leadership you need
              to stay ahead of the curve and drive sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/book-consultation">
                <Button className="bg-brand-gold text-slate-900 hover:bg-brand-gold-dark text-lg py-6 px-8">
                  Book Your Strategy Session
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
