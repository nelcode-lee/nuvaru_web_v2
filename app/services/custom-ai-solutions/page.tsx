import type { Metadata } from "next"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  TruckIcon,
  BarChart3,
  Users,
  PoundSterling,
  Bot,
  Network,
  Workflow,
  Clock,
  Shield,
  Zap,
  Scale,
  Award,
} from "lucide-react"
import { ServiceSchema } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Custom AI Solutions",
  description:
    "Harness the power of AI agents and automated workflows to save time, reduce costs, and scale your business with tailored AI solutions.",
  keywords: ["custom AI", "AI agents", "AI workflows", "business automation", "AI development"],
  alternates: {
    canonical: "/services/custom-ai-solutions",
  },
  openGraph: {
    title: "Custom AI Solutions | Nuvaru - AI Transformation Consultancy",
    description:
      "Harness the power of AI agents and automated workflows to save time, reduce costs, and scale your business.",
    url: "/services/custom-ai-solutions",
    images: [
      {
        url: "/og-custom-ai.jpg", // Create this image for social sharing
        width: 1200,
        height: 630,
        alt: "Custom AI Solutions",
      },
    ],
  },
}

export default function CustomAISolutionsPage() {
  const serviceData = {
    title: "Custom AI Solution Development",
    description:
      "Tailored AI tools designed specifically for your business needs and challenges to drive efficiency and growth.",
  }

  const aiTypes = [
    {
      title: "AI Agents",
      icon: <Bot className="h-10 w-10 text-brand-blue" />,
      definition: "Autonomous software programs that perform tasks (e.g., customer support, data analysis).",
      example: "A chatbot resolving 80% of FAQs, freeing up your team.",
    },
    {
      title: "AI Multi-Agent Systems",
      icon: <Network className="h-10 w-10 text-brand-purple" />,
      definition: "Teams of AI agents collaborating to solve complex problems.",
      example: "Agents for inventory, sales, and logistics working together to optimise supply chains.",
    },
    {
      title: "AI Workflows",
      icon: <Workflow className="h-10 w-10 text-brand-blue" />,
      definition: "Automated processes that connect tasks, data, and people.",
      example: "Automating invoice processing, approval, and payment in 24/7 finance workflows.",
    },
  ]

  const services = [
    {
      title: "AI-Powered Customer Service",
      icon: <MessageSquare className="h-10 w-10 text-brand-purple" />,
      agents: "24/7 chatbots, sentiment analysis for feedback.",
      benefit: "Reduce response time by 70% while improving satisfaction.",
    },
    {
      title: "Smart Operations & Logistics",
      icon: <TruckIcon className="h-10 w-10 text-brand-blue" />,
      agents: "Demand forecasting, inventory management, delivery routing.",
      benefit: "Cut supply chain costs by 15–30%.",
    },
    {
      title: "Marketing & Sales Automation",
      icon: <BarChart3 className="h-10 w-10 text-brand-purple" />,
      agents: "Lead scoring, personalised email campaigns, social media scheduling.",
      benefit: "Generate 2x more qualified leads with AI-driven insights.",
    },
    {
      title: "HR & Recruitment",
      icon: <Users className="h-10 w-10 text-brand-blue" />,
      agents: "CV screening, interview scheduling, and onboarding workflows.",
      benefit: "Hire 50% faster while reducing bias.",
    },
    {
      title: "Financial Management",
      icon: <PoundSterling className="h-10 w-10 text-brand-purple" />,
      agents: "Expense tracking, fraud detection, cash flow forecasting.",
      benefit: "Improve financial accuracy and compliance.",
    },
  ]

  const caseStudies = [
    {
      title: "Bristol-Based Retailer",
      challenge: "Overstocking and staffing inefficiencies.",
      solution: "Multi-agent system for inventory + AI workforce scheduler.",
      result: "20% reduction in waste, 15% labour cost savings.",
    },
    {
      title: "Manchester Marketing Agency",
      challenge: "Time-consuming client reporting.",
      solution: "AI workflow automating data aggregation + report generation.",
      result: "Saved 10 hours/week, reinvested in client acquisition.",
    },
  ]

  const benefits = [
    {
      title: "Cost Savings",
      description: "Automate manual tasks to redirect resources.",
      icon: <PoundSterling className="h-8 w-8 text-white" />,
    },
    {
      title: "Scalability",
      description: "Grow without proportional overhead increases.",
      icon: <Scale className="h-8 w-8 text-white" />,
    },
    {
      title: "Competitiveness",
      description: "Compete with larger firms through data-driven decisions.",
      icon: <Award className="h-8 w-8 text-white" />,
    },
    {
      title: "Compliance",
      description: "Stay ahead of UK regulations (e.g., GDPR, tax automation).",
      icon: <Shield className="h-8 w-8 text-white" />,
    },
  ]

  const barriers = [
    {
      concern: '"Too Expensive"',
      solution: "Highlight subscription-based, pay-as-you-go AI tools.",
    },
    {
      concern: '"Too Complex"',
      solution: "Emphasise no-code/low-code platforms and your support.",
    },
    {
      concern: '"Data Security"',
      solution: "Showcase UK-hosted solutions and GDPR compliance.",
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
          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="max-w-3xl">
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Empowering UK SMEs with AI: Smarter Workflows, Smarter Growth
              </h1>
              <p className="mb-6 text-xl text-blue-100">
                Harness the Power of AI Agents and Automated Workflows to Save Time, Reduce Costs, and Scale Your
                Business
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
                <p className="text-lg text-gray-700 italic">
                  "UK SMEs face fierce competition, tight margins, and ever-growing demands. AI is no longer just for
                  big corporations. With AI agents and workflows, your business can automate repetitive tasks, make
                  data-driven decisions, and focus on what matters: growth."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Are AI Agents, Multi-Agent Systems & Workflows? */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              What Are AI Agents, Multi-Agent Systems & Workflows?
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {aiTypes.map((type, index) => (
                <Card
                  key={index}
                  className="border-2 border-gray-100 transition-all hover:border-violet-100 hover:shadow-md"
                >
                  <CardContent className="p-6">
                    <div className="mb-4">{type.icon}</div>
                    <h3 className="text-xl font-bold mb-4">{type.title}</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900">Definition:</h4>
                        <p className="text-gray-700">{type.definition}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Example:</h4>
                        <p className="text-gray-700">{type.example}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Services & Solutions for UK SMEs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Services & Solutions for UK SMEs</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="border-2 border-gray-100 transition-all hover:border-violet-100 hover:shadow-md"
                >
                  <CardContent className="p-6">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900">Agents:</h4>
                        <p className="text-gray-700">{service.agents}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Benefit:</h4>
                        <p className="text-gray-700">{service.benefit}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-violet-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Case Studies</h2>
            <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
              See how UK businesses like yours are transforming operations with custom AI solutions
            </p>
            <div className="grid gap-8 md:grid-cols-2">
              {caseStudies.map((study, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-brand-purple mb-4">{study.title}</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="bg-red-100 p-2 rounded-full mr-3 mt-1">
                          <Clock className="h-5 w-5 text-red-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Challenge:</h4>
                          <p className="text-gray-700">{study.challenge}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                          <Zap className="h-5 w-5 text-brand-blue" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Solution:</h4>
                          <p className="text-gray-700">{study.solution}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-green-100 p-2 rounded-full mr-3 mt-1">
                          <CheckCircle2 className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Result:</h4>
                          <p className="text-gray-700">{study.result}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why UK SMEs Choose AI */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why UK SMEs Choose AI</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-brand mx-auto flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Overcoming Common Barriers */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Overcoming Common Barriers</h2>
              <div className="space-y-8">
                {barriers.map((barrier, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="md:w-1/3">
                        <h3 className="text-xl font-bold text-gray-900">{barrier.concern}</h3>
                      </div>
                      <div className="md:w-2/3">
                        <p className="text-gray-700">{barrier.solution}</p>
                      </div>
                    </div>
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
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
              <p className="text-xl mb-8">Discover how AI can transform your SME – Book a free consultation today.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-white text-brand-purple hover:bg-blue-50 text-lg py-6 px-8">
                  Book a Free AI Audit
                </Button>
                <Button className="bg-gray-200 text-gray-800 hover:bg-gray-300 text-lg py-6 px-8 border-0">
                  Try Demo <ArrowRight className="ml-2 h-5 w-5" />
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
