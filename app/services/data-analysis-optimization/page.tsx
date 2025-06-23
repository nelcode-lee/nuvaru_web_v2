import type { Metadata } from "next"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  CheckCircle2,
  ArrowRight,
  BarChart3,
  LineChart,
  PieChart,
  TrendingUp,
  Users,
  ShoppingCart,
  Clock,
  Zap,
  Brain,
  Database,
  Calculator,
  PoundSterling,
  Megaphone,
  Truck,
  Store,
  AlertCircle,
  Layers,
  Target,
  Gauge,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Data Analysis & Optimization | Nuvaru - AI Transformation Consultancy",
  description: "Turn data into your competitive edge with AI-powered insights and actionable intelligence for UK SMEs.",
}

export default function DataAnalysisOptimizationPage() {
  const analysisTypes = [
    {
      title: "AI-Powered Analytics",
      icon: <BarChart3 className="h-10 w-10 text-brand-blue" />,
      definition: "Agentic AI autonomously processes large datasets in seconds, identifying trends humans might miss.",
      example: "Spotting seasonal demand spikes to adjust inventory and staffing.",
    },
    {
      title: "Predictive Modeling",
      icon: <LineChart className="h-10 w-10 text-brand-purple" />,
      definition: "Forecast future outcomes (e.g., sales, cash flow) using historical and real-time data.",
      example: "Predicting customer churn and automating retention campaigns.",
    },
    {
      title: "Prescriptive Optimization",
      icon: <TrendingUp className="h-10 w-10 text-brand-blue" />,
      definition: "AI recommends actions to improve KPIs (e.g., pricing, marketing spend).",
      example: "Adjusting ad bids in real time to maximize ROI.",
    },
  ]

  const services = [
    {
      title: "Sales & Revenue Optimization",
      icon: <ShoppingCart className="h-10 w-10 text-brand-purple" />,
      features: [
        "Demand Forecasting: AI agents analyze market trends, weather, and events to predict sales.",
        "Dynamic Pricing: Automatically adjust prices based on demand, competition, and inventory.",
      ],
    },
    {
      title: "Operational Efficiency",
      icon: <Gauge className="h-10 w-10 text-brand-blue" />,
      features: [
        "Process Mining: AI maps workflows to identify bottlenecks (e.g., slow order fulfillment).",
        "Resource Allocation: Optimize staff schedules, energy use, or machinery maintenance.",
      ],
    },
    {
      title: "Customer Insights",
      icon: <Users className="h-10 w-10 text-brand-purple" />,
      features: [
        "Segmentation: AI clusters customers by behavior for hyper-targeted marketing.",
        "Lifetime Value Prediction: Focus resources on high-value clients.",
      ],
    },
    {
      title: "Financial Health",
      icon: <PoundSterling className="h-10 w-10 text-brand-blue" />,
      features: [
        "Cash Flow Analysis: AI flags late payments or budget overruns and suggests fixes.",
        "Fraud Detection: Spot unusual transactions in real time.",
      ],
    },
    {
      title: "Marketing ROI Boost",
      icon: <Megaphone className="h-10 w-10 text-brand-purple" />,
      features: [
        "Campaign Attribution: AI identifies which channels drive conversions.",
        "Content Optimization: Automatically A/B test ads, emails, or web copy.",
      ],
    },
  ]

  const benefits = [
    {
      title: "Speed",
      description: "Analyze data 100x faster than manual methods.",
      icon: <Clock className="h-8 w-8 text-white" />,
    },
    {
      title: "Accuracy",
      description: "Reduce human bias and errors in decision-making.",
      icon: <Target className="h-8 w-8 text-white" />,
    },
    {
      title: "Profitability",
      description: "Uncover cost-saving opportunities (e.g., 15–30% lower logistics costs).",
      icon: <PoundSterling className="h-8 w-8 text-white" />,
    },
    {
      title: "Agility",
      description: "Adapt quickly to market shifts (e.g., Brexit supply chain changes).",
      icon: <Zap className="h-8 w-8 text-white" />,
    },
  ]

  const caseStudies = [
    {
      title: "Birmingham Logistics Company",
      challenge: "Rising fuel costs and delayed deliveries.",
      solution: "AI analyzed GPS and traffic data to optimize delivery routes.",
      result: "22% fuel savings, 95% on-time deliveries.",
      icon: <Truck className="h-10 w-10 text-brand-blue" />,
    },
    {
      title: "London Retail Chain",
      challenge: "Declining foot traffic in stores.",
      solution: "AI combined sales data, weather, and local events to predict footfall.",
      result: "Dynamic staffing and promotions increased revenue by 18%.",
      icon: <Store className="h-10 w-10 text-brand-purple" />,
    },
  ]

  const whyMatters = [
    {
      title: "Data Overload",
      description: "Manual analysis can't keep up with growing data volumes.",
      icon: <Database className="h-6 w-6 text-brand-purple" />,
    },
    {
      title: "Post-Pandemic Recovery",
      description: "Optimize resources in uncertain markets.",
      icon: <Calculator className="h-6 w-6 text-brand-blue" />,
    },
    {
      title: "Competitive Pressure",
      description: "Leverage insights to outpace rivals.",
      icon: <TrendingUp className="h-6 w-6 text-brand-purple" />,
    },
  ]

  const concerns = [
    {
      concern: '"We\'re Not Tech Experts"',
      solution: "Use no-code dashboards with plain-English insights.",
    },
    {
      concern: '"Data Silos"',
      solution: "AI integrates disjointed systems (e.g., CRM, accounting, POS).",
    },
    {
      concern: '"Cost Prohibitive"',
      solution: "Start with one module (e.g., marketing analytics) and scale.",
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
            src="/analysis.jpg"
            alt="Data analysis dashboard with visualizations and analytics metrics"
            fill
            className="object-contain object-right-bottom"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Agentic AI Data Analysis & Optimization for UK SMEs: Smarter Decisions, Stronger Businesses
            </h1>
            <p className="mb-6 text-xl text-blue-100">
              Turn Data into Your Competitive Edge with Agentic AI-Powered Insights and Actionable Intelligence
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
                "UK SMEs generate vast amounts of data—sales, customer behavior, operations—but lack the time or tools
                to unlock its value. Agentic AI analyzes your data autonomously at lightning speed, revealing hidden
                patterns, predicting trends, and prescribing optimizations. Transform raw numbers into actionable
                strategies that cut costs, boost revenue, and future-proof your business."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Are AI-Driven Data Analysis & Optimization? */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Are Agentic AI-Driven Data Analysis & Optimization?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {analysisTypes.map((type, index) => (
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

      {/* Key Services & Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Services & Solutions</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-2 border-gray-100 transition-all hover:border-violet-100 hover:shadow-md"
              >
                <CardContent className="p-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
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

      {/* Data Visualization Showcase */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-violet-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Interactive Dashboards That Drive Decisions</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our custom-built analytics dashboards transform complex data into clear, actionable insights. We design
                intuitive visualizations that help you spot trends, identify opportunities, and make data-driven
                decisions with confidence.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-brand-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Real-time KPI tracking with drill-down capabilities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-brand-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Custom metrics tailored to your specific business goals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-brand-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Automated reporting delivered to key stakeholders</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-brand-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Mobile-friendly designs for insights on the go</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-700 rounded-xl opacity-20 blur-lg"></div>
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/analysis.jpg"
                  alt="Interactive data dashboard with analytics visualizations and metrics"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for UK SMEs */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-violet-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Benefits for UK SMEs</h2>
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
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Case Studies</h2>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
            See how UK businesses are transforming operations with data analysis and optimization
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-blue-100 to-violet-100 p-3 rounded-full mr-3">
                      {study.icon}
                    </div>
                    <h3 className="text-xl font-bold text-brand-purple">{study.title}</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="bg-red-100 p-2 rounded-full mr-3 mt-1">
                        <AlertCircle className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Challenge:</h4>
                        <p className="text-gray-700">{study.challenge}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                        <Brain className="h-5 w-5 text-brand-blue" />
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

      {/* Why AI-Driven Data Analysis Matters Now */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why AI-Driven Data Analysis Matters Now
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {whyMatters.map((reason, index) => (
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

      {/* Data Visualization Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-violet-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Transforming Complex Data into Clear Insights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="mb-3 flex justify-center">
                  <BarChart3 className="h-12 w-12 text-brand-blue" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Interactive Dashboards</h3>
                <p className="text-gray-600">Real-time KPI tracking with drill-down capabilities</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="mb-3 flex justify-center">
                  <PieChart className="h-12 w-12 text-brand-purple" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Custom Reports</h3>
                <p className="text-gray-600">Automated reports delivered to your inbox on schedule</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="mb-3 flex justify-center">
                  <Layers className="h-12 w-12 text-brand-blue" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Data Integration</h3>
                <p className="text-gray-600">Connect all your business systems for a unified view</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-lg text-gray-700 mb-6">
                Our visualizations transform complex data into clear, actionable insights that anyone in your
                organization can understand and use to make better decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-violet-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Unlock the Value in Your Data?</h2>
            <p className="text-xl mb-8">Discover hidden opportunities in your data—Get a free data health check.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-brand-purple hover:bg-blue-50 text-lg py-6 px-8">
                Book a Free Data Health Check
              </Button>
              <Button className="bg-gray-200 text-gray-800 hover:bg-gray-300 text-lg py-6 px-8 border-0">
                View Demo Dashboard <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
