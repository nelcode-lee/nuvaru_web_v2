import type { Metadata } from "next"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Shield,
  Search,
  UserCheck,
  Bell,
  ClipboardList,
  FileText,
  Database,
  Clock,
  AlertTriangle,
  FileCheck,
  Server,
  Users,
  Zap,
} from "lucide-react"
import { ServiceSchema } from "@/components/structured-data"
import { PoundSterling, AlertOctagon, AlertCircle, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "GDPR Compliance Solutions",
  description:
    "Stay ahead of data privacy regulations with intelligent, automated compliance tools that protect your business and customer data.",
  keywords: ["GDPR compliance", "data protection", "privacy regulations", "AI compliance", "data security"],
  alternates: {
    canonical: "/services/gdpr-compliance-solutions",
  },
  openGraph: {
    title: "GDPR Compliance Solutions | Nuvaru - AI Transformation Consultancy",
    description: "Stay ahead of data privacy regulations with intelligent, automated compliance tools.",
    url: "/services/gdpr-compliance-solutions",
    images: [
      {
        url: "/og-gdpr-compliance.jpg", // Create this image for social sharing
        width: 1200,
        height: 630,
        alt: "GDPR Compliance Solutions",
      },
    ],
  },
}

export default function GDPRComplianceSolutionsPage() {
  const serviceData = {
    title: "GDPR Compliance Solutions",
    description:
      "AI-powered data protection tools to ensure compliance with UK and EU regulations while minimizing manual effort.",
  }

  const solutionFeatures = [
    {
      title: "Intelligent Data Discovery & Classification",
      icon: <Search className="h-10 w-10 text-brand-blue" />,
      description:
        "Automatically scan and identify personal, sensitive, and regulated data across your systems—on-premise or in the cloud. AI-driven pattern recognition ensures data is accurately tagged and categorized with minimal manual effort.",
    },
    {
      title: "Smart Handling of Data Subject Access Requests (DSARs)",
      icon: <UserCheck className="h-10 w-10 text-brand-purple" />,
      description:
        "Respond to data subject requests quickly and accurately. Our system automates identity verification, data retrieval, and communication tracking, ensuring GDPR-mandated response timelines are consistently met.",
    },
    {
      title: "Continuous Monitoring & Real-Time Alerts",
      icon: <Bell className="h-10 w-10 text-brand-blue" />,
      description:
        "Our solution continuously monitors data usage, access patterns, and potential breaches. Receive real-time alerts to address non-compliant behavior before it becomes a liability.",
    },
    {
      title: "Automated Data Protection Impact Assessments (DPIAs)",
      icon: <ClipboardList className="h-10 w-10 text-brand-purple" />,
      description:
        "AI algorithms assist in identifying and analyzing potential risks in new data processing activities, automatically generating DPIAs that meet legal requirements and internal governance standards.",
    },
    {
      title: "Comprehensive Reporting & Audit Trails",
      icon: <FileText className="h-10 w-10 text-brand-blue" />,
      description:
        "Easily generate detailed compliance reports and maintain full audit trails to demonstrate GDPR compliance during regulatory inspections or internal reviews.",
    },
  ]

  const benefits = [
    {
      title: "Automated Data Discovery & Classification",
      description: "Gain a real-time view of all personal data in your environment—structured or unstructured.",
      icon: <Database className="h-8 w-8 text-white" />,
    },
    {
      title: "Streamlined DSAR Management",
      description: "Reduce manual workloads and meet deadlines with intelligent request handling workflows.",
      icon: <Clock className="h-8 w-8 text-white" />,
    },
    {
      title: "Continuous Compliance Monitoring",
      description: "Identify compliance risks as they emerge and take proactive action with AI-powered alerts.",
      icon: <AlertTriangle className="h-8 w-8 text-white" />,
    },
    {
      title: "Automated DPIA Workflows",
      description: "Quickly assess data processing risks with pre-built templates and AI-driven recommendations.",
      icon: <ClipboardList className="h-8 w-8 text-white" />,
    },
    {
      title: "Robust Compliance Documentation",
      description:
        "Stay audit-ready with up-to-date logs, reports, and records—all generated and maintained automatically.",
      icon: <FileCheck className="h-8 w-8 text-white" />,
    },
  ]

  const whyChooseUs = [
    {
      title: "UK-Focused Expertise",
      description:
        "Our solutions are specifically designed for UK data protection regulations and business environments.",
      icon: <Shield className="h-6 w-6 text-brand-purple" />,
    },
    {
      title: "SME-Friendly Implementation",
      description: "Scalable solutions that grow with your business without enterprise-level complexity or cost.",
      icon: <Zap className="h-6 w-6 text-brand-blue" />,
    },
    {
      title: "AI-Powered Efficiency",
      description:
        "Leverage artificial intelligence to automate compliance tasks that would otherwise require significant manual effort.",
      icon: <Server className="h-6 w-6 text-brand-purple" />,
    },
    {
      title: "Continuous Improvement",
      description: "Our solutions evolve with changing regulations and your business needs through regular updates.",
      icon: <Users className="h-6 w-6 text-brand-blue" />,
    },
  ]

  const complianceRisks = [
    {
      title: "Financial Penalties",
      description: "Up to £17.5 million or 4% of annual global turnover for serious violations.",
      icon: <PoundSterling className="h-6 w-6 text-red-500" />,
    },
    {
      title: "Reputational Damage",
      description: "Loss of customer trust and brand damage following data breaches or non-compliance.",
      icon: <AlertOctagon className="h-6 w-6 text-red-500" />,
    },
    {
      title: "Operational Disruption",
      description: "Business interruptions during investigations or remediation activities.",
      icon: <AlertCircle className="h-6 w-6 text-red-500" />,
    },
  ]

  return (
    <>
      <main className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <section className="relative bg-gradient-brand py-20 md:py-24">
          <div className="absolute inset-0 z-0 opacity-15">
            <Image src="/network-pattern.png" alt="" fill className="object-cover" priority />
          </div>
          <div className="absolute right-0 bottom-0 w-1/3 h-2/3 z-0 opacity-80 hidden lg:block">
            <Image
              src="/GDPR.jpg"
              alt="GDPR compliance shield with team members managing data protection"
              fill
              className="object-contain object-right-bottom"
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="max-w-3xl">
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                GDPR Compliance Solutions
              </h1>
              <p className="mb-6 text-xl text-blue-100">
                Stay ahead of data privacy regulations with intelligent, automated compliance tools
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
              <div className="bg-gradient-to-br from-blue-50 to-violet-50 p-6 rounded-lg border border-blue-100 mb-8">
                <p className="text-lg text-gray-700">
                  Navigating the complex world of GDPR compliance can be time-consuming and
                  resource-intensive—especially for small and mid-sized businesses that handle large volumes of personal
                  data. Our AI-driven GDPR Compliance Solutions are designed to reduce that burden by automating key
                  compliance tasks, enhancing accuracy, and keeping your business audit-ready at all times.
                </p>
                <p className="text-lg text-gray-700 mt-4">
                  By leveraging advanced artificial intelligence and machine learning technologies, we help you take
                  control of your data governance strategy—making regulatory compliance not just manageable, but a
                  strategic advantage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How Our AI-Enhanced GDPR Solutions Work */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              How Our AI-Enhanced GDPR Solutions Work
            </h2>
            <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
              Our platform uses cutting-edge AI tools to streamline and automate the core pillars of GDPR compliance:
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {solutionFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="border-2 border-gray-100 transition-all hover:border-violet-100 hover:shadow-md"
                >
                  <CardContent className="p-6">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-gray-700">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Benefits</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-violet-50 p-6 rounded-lg shadow-md">
                  <div className="w-16 h-16 rounded-full bg-gradient-brand mx-auto flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center">{benefit.title}</h3>
                  <p className="text-gray-700 text-center">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GDPR Compliance Visualization */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-violet-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive GDPR Protection</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Our AI-powered GDPR compliance platform provides a complete shield for your business data, ensuring
                  continuous compliance with all aspects of data protection regulations while minimizing manual effort.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Automated data discovery and classification across all systems
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Intelligent data subject request handling with identity verification
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Real-time monitoring and alerts for potential compliance issues
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Comprehensive audit trails and documentation for regulators</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-green-700 rounded-xl opacity-20 blur-lg"></div>
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/GDPR.jpg"
                    alt="GDPR compliance shield with team members managing data protection"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Us?</h2>
            <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
              We understand the unique challenges that SMEs face when trying to implement enterprise-grade compliance
              solutions. That's why our GDPR platform is scalable, user-friendly, and tailored to deliver
              enterprise-level data protection without the complexity.
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-violet-100 p-2 rounded-full mr-3">{reason.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900">{reason.title}</h3>
                  </div>
                  <p className="text-gray-700">{reason.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-700 font-medium">
                With AI as the foundation, your business can stay compliant, secure, and competitive—no matter your
                size.
              </p>
            </div>
          </div>
        </section>

        {/* Risks of Non-Compliance */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">The Cost of Non-Compliance</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {complianceRisks.map((risk, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-red-100">
                    <div className="flex items-center mb-4">
                      <div className="bg-red-50 p-2 rounded-full mr-3">{risk.icon}</div>
                      <h3 className="text-lg font-bold text-gray-900">{risk.title}</h3>
                    </div>
                    <p className="text-gray-700">{risk.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 bg-gradient-to-br from-blue-50 to-violet-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-center mb-4">Protect Your Business Today</h3>
                <p className="text-center text-gray-700">
                  Our AI-powered GDPR compliance solutions help you avoid these risks while turning data protection into
                  a competitive advantage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-violet-600 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Simplify GDPR Compliance?</h2>
              <p className="text-xl mb-8">
                Get a free compliance assessment and discover how our AI solutions can protect your business.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-white text-brand-purple hover:bg-blue-50 text-lg py-6 px-8">
                  Book a Free Compliance Assessment
                </Button>
                <Button className="bg-gray-200 text-gray-800 hover:bg-gray-300 text-lg py-6 px-8 border-0">
                  Download GDPR Guide <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
      <ServiceSchema service={serviceData} />
    </>
  )
}
