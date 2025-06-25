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
  ClipboardCheck,
  BarChart3,
  Users,
  TruckIcon,
  Clock,
  Bot,
  Network,
  Brain,
  Zap,
  Shield,
  PoundSterling,
  LineChart,
  Layers,
  Calendar,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Process Automation | Nuvaru - AI Transformation Consultancy",
  description: "Transform repetitive tasks into strategic growth with AI-driven automation for UK SMEs.",
}

export default function ProcessAutomationPage() {
  const automationTypes = [
    {
      title: "Task Automation",
      icon: <Bot className="h-10 w-10 text-brand-blue" />,
      definition:
        "Agentic AI agents autonomously handle repetitive tasks like data entry, appointment scheduling, or report generation.",
      example: "Automatically sync customer orders across your CRM, inventory, and accounting software.",
    },
    {
      title: "Multi-Agent Workflow Systems",
      icon: <Network className="h-10 w-10 text-brand-purple" />,
      definition:
        "Coordinated agentic AI agents autonomously managing end-to-end processes (e.g., order fulfillment, lead nurturing).",
      example: "Agents for sales, shipping, and support collaborate to resolve customer issues in real time.",
    },
    {
      title: "Intelligent Decision-Making",
      icon: <Brain className="h-10 w-10 text-brand-blue" />,
      definition:
        "Agentic AI autonomously analyses data to trigger actions (e.g., restocking inventory, escalating support tickets).",
      example: "Predictive analytics auto-adjusts staffing levels based on seasonal demand.",
    },
  ]

  const solutions = [
    {
      title: "Customer Service Automation",
      icon: <MessageSquare className="h-10 w-10 text-brand-purple" />,
      features: [
        "AI Chatbots: Resolve FAQs, book appointments, and collect feedback 24/7.",
        "Sentiment Analysis: Auto-flag unhappy customers for immediate follow-up.",
      ],
    },
    {
      title: "Finance & Accounting",
      icon: <PoundSterling className="h-10 w-10 text-brand-blue" />,
      features: [
        "Invoice Processing: Extract data, approve payments, and reconcile accounts.",
        "Expense Management: Auto-categorize receipts and enforce budget policies.",
      ],
    },
    {
      title: "Sales & Marketing",
      icon: <BarChart3 className="h-10 w-10 text-brand-purple" />,
      features: [
        "Lead Nurturing Workflows: Auto-send personalized emails based on behavior.",
        "Social Media Automation: Schedule posts, analyse engagement, and suggest content.",
      ],
    },
    {
      title: "HR & Operations",
      icon: <Users className="h-10 w-10 text-brand-blue" />,
      features: [
        "Onboarding Workflows: Automate document signing, training, and equipment setup.",
        "Shift Scheduling: AI optimises staff rosters based on demand and availability.",
      ],
    },
    {
      title: "Supply Chain & Inventory",
      icon: <TruckIcon className="h-10 w-10 text-brand-purple" />,
      features: [
        "Smart Replenishment: AI predicts stock needs and places orders with suppliers.",
        "Delivery Routing: Automatically optimise routes to reduce fuel costs and delays.",
      ],
    },
  ]

  const benefits = [
    {
      title: "Time Savings",
      description: "Reduce manual work by 50–80% in key processes.",
      icon: <Clock className="h-8 w-8 text-white" />,
    },
    {
      title: "Error Reduction",
      description: "Eliminate human mistakes in data entry and calculations.",
      icon: <CheckCircle2 className="h-8 w-8 text-white" />,
    },
    {
      title: "Scalability",
      description: "Handle higher volumes without hiring more staff.",
      icon: <Layers className="h-8 w-8 text-white" />,
    },
    {
      title: "Compliance",
      description: "Automatically log actions for GDPR, VAT, or industry audits.",
      icon: <Shield className="h-8 w-8 text-white" />,
    },
  ]

  const caseStudies = [
    {
      title: "Edinburgh E-commerce Store",
      challenge: "Manual order processing caused delays and errors.",
      solution: "AI workflow integrating Shopify, warehouse, and Royal Mail systems.",
      result: "Orders processed in 2 hours (down from 2 days), 99% accuracy.",
    },
    {
      title: "Leeds Accounting Firm",
      challenge: "Clients missed deadlines due to manual reminders.",
      solution: "Automated client portals with AI payment reminders and document uploads.",
      result: "40% fewer late payments, 15 hours/month saved.",
    },
  ]

  const whyAutomate = [
    {
      title: "Post-Brexit Complexity",
      description: "Streamline customs, tariffs, and cross-border sales.",
      icon: <ClipboardCheck className="h-6 w-6 text-brand-purple" />,
    },
    {
      title: "Hybrid Work",
      description: "Keep teams aligned with automated workflows and cloud tools.",
      icon: <Calendar className="h-6 w-6 text-brand-blue" />,
    },
    {
      title: "Cost Pressures",
      description: "Automation cuts operational costs by 20–40% (McKinsey).",
      icon: <LineChart className="h-6 w-6 text-brand-purple" />,
    },
  ]

  const concerns = [
    {
      concern: "Affordability",
      solution: '"Start small with one process—no upfront IT costs."',
    },
    {
      concern: "Ease of Use",
      solution: '"No coding needed: drag-and-drop workflow builders."',
    },
    {
      concern: "Security",
      solution: '"UK-based servers, GDPR-compliant data handling."',
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
        <div className="absolute right-0 bottom-0 w-1/3 h-2/3 z-0 opacity-80 hidden lg:block">
          <Image
            src="/automation.jpg"
            alt="Process automation illustration showing workflow optimisation"
            fill
            className="object-contain object-right-bottom"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Agentic AI Process Automation for UK SMEs: Work Smarter, Grow Faster
            </h1>
            <p className="mb-6 text-xl text-blue-100">
              Transform Repetitive Tasks into Strategic Growth with Agentic AI-Driven Automation
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
                "UK SMEs waste countless hours on manual processes—data entry, invoicing, customer inquiries, and more.
                Agentic AI process automation powered by autonomous agents and workflows lets you reclaim time, slash
                errors, and focus on innovation. Discover how to turn routine tasks into automated growth engines."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Is AI-Driven Process Automation? */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Is Agentic AI-Driven Process Automation?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {automationTypes.map((type, index) => (
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

      {/* Key Automation Solutions for UK SMEs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Automation Solutions for UK SMEs</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className="border-2 border-gray-100 transition-all hover:border-violet-100 hover:shadow-md"
              >
                <CardContent className="p-6">
                  <div className="mb-4">{solution.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{solution.title}</h3>
                  <ul className="space-y-3">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits for UK SMEs */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-violet-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Benefits of Automation for UK SMEs</h2>
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

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Case Studies (Process Automation in Action)
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
            See how UK businesses like yours are transforming operations with process automation
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

      {/* Why Automate Now? */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Automate Now?</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {whyAutomate.map((reason, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-violet-100 p-2 rounded-full mr-3">{reason.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{reason.title}</h3>
                </div>
                <p className="text-gray-700">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Addressing SME Concerns */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Addressing SME Concerns</h2>
            <div className="space-y-8">
              {concerns.map((concern, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-violet-50 p-6 rounded-lg shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="md:w-1/3">
                      <h3 className="text-xl font-bold text-gray-900">{concern.concern}</h3>
                    </div>
                    <div className="md:w-2/3">
                      <p className="text-gray-700 italic">{concern.solution}</p>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Automate Your Business Processes?</h2>
            <p className="text-xl mb-8">
              Identify automation opportunities in 30 minutes – Book a free process audit today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-brand-purple hover:bg-blue-50 text-lg py-6 px-8">
                Book a Free Process Audit
              </Button>
              <Button className="bg-gray-200 text-gray-800 hover:bg-gray-300 text-lg py-6 px-8 border-0">
                Join Our Webinar <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
