import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Zap,
  Target,
  Smartphone,
  Monitor,
  Settings,
  TrendingUp,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Web App Development | Nuvaru - Custom Business Applications",
  description:
    "Transform your business processes with custom web applications. From booking systems to calculators, we build tools that solve specific problems brilliantly.",
  keywords:
    "web app development, custom web applications, business tools, online calculators, booking systems, UK web development",
}

export default function WebAppDevelopmentPage() {
  const features = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Problem-Focused Solutions",
      description: "Each app targets a specific business challenge with laser precision",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast Performance",
      description: "Optimised for speed and responsiveness across all devices",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "User-Centric Design",
      description: "Intuitive interfaces that delight both customers and employees",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile-First Approach",
      description: "Perfect functionality on phones, tablets, and desktops",
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Custom-Built for You",
      description: "Tailored to your unique workflows and business requirements",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Scalable & Future-Ready",
      description: "Easily expandable as your business grows and evolves",
    },
  ]

  const appTypes = [
    {
      title: "Online Calculators & Quote Tools",
      description: "Help customers get instant, accurate estimates and pricing",
      examples: ["Mortgage calculators", "Service quote tools", "ROI calculators", "Cost estimators"],
    },
    {
      title: "Booking & Scheduling Systems",
      description: "Streamline appointment booking and resource management",
      examples: ["Service bookings", "Room reservations", "Equipment scheduling", "Staff calendars"],
    },
    {
      title: "Data Collection & Forms",
      description: "Gather information efficiently with smart, interactive forms",
      examples: ["Client onboarding", "Survey tools", "Application forms", "Feedback systems"],
    },
    {
      title: "Internal Business Tools",
      description: "Custom solutions for your team's specific workflows",
      examples: ["CRM systems", "Inventory tracking", "Project management", "Reporting dashboards"],
    },
  ]

  const developmentProcess = [
    {
      step: "01",
      title: "Problem Discovery",
      description: "We identify the specific challenge your web app needs to solve",
    },
    {
      step: "02",
      title: "User Experience Design",
      description: "Create intuitive interfaces that make complex tasks simple",
    },
    {
      step: "03",
      title: "Custom Development",
      description: "Build your app with modern technologies for optimal performance",
    },
    {
      step: "04",
      title: "Testing & Optimisation",
      description: "Ensure flawless functionality across all devices and browsers",
    },
    {
      step: "05",
      title: "Launch & Support",
      description: "Deploy your app and provide ongoing maintenance and updates",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-brand py-20 md:py-24 text-white">
        <div className="absolute inset-0 z-0 opacity-15">
          <Image src="/network-pattern.png" alt="" fill className="object-cover" priority />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Custom Web Applications</Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Your Basic Web App is Your Smartest Tool in the Shed
            </h1>
            <p className="mb-8 text-xl text-blue-100 leading-relaxed">
              Transform mundane business processes into powerful, efficient tools that delight users and drive growth.
              From booking systems to calculators, we build web apps that solve specific problems brilliantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-brand-purple hover:bg-gray-100 text-lg py-6 px-8">
                Get Your App Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm text-lg py-6 px-8"
              >
                View Examples
                <Monitor className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Sharp Tool or Rusty Clutter?</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Think of basic web apps not as huge, complicated systems, but as clever, specialised tools. Maybe it's
                an online booking system, a quote calculator, an internal tracking tool, or a client request form.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Sharp Tool */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200">
                <div className="flex items-center mb-4">
                  <div className="bg-green-500 p-2 rounded-full mr-3">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800">The Sharp Tool</h3>
                </div>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Gets the job done perfectly every time</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Saves time and delights users</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Simplifies processes that used to be headaches</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Builds trust and confidence in your brand</span>
                  </li>
                </ul>
              </div>

              {/* Rusty Tool */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl border border-red-200">
                <div className="flex items-center mb-4">
                  <div className="bg-red-500 p-2 rounded-full mr-3">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-red-800">The Rusty Tool</h3>
                </div>
                <ul className="space-y-3 text-red-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    <span>Clunky and prone to breaking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    <span>Makes people sigh in frustration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    <span>Adds more steps than it saves</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    <span>Damages trust in your brand</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-600 mb-6">
                Too many businesses are using the "rusty" tool. Their basic web apps are causing friction and missed
                opportunities.
              </p>
              <p className="text-xl font-semibold text-brand-purple">Let's build you the sharp tool instead.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Fresh, High-Performing Web Apps Are Game-Changers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A well-built web app isn't just convenient—it's a strategic investment that streamlines operations,
              delights users, and captures opportunities that generic solutions simply can't.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 mb-16">
            <div className="lg:col-span-4">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-violet-100 p-3 rounded-full mr-4">
                    <Target className="h-8 w-8 text-brand-purple" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">1. Solving Specific Headaches, Brilliantly</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-brand-purple mb-3">For Customers:</h4>
                    <p className="text-gray-600 mb-4">
                      Imagine a potential client trying to get a quick quote. If your online calculator is fast,
                      intuitive, and gives them an instant, accurate estimate, they're engaged, impressed, and much more
                      likely to take the next step.
                    </p>
                    <p className="text-sm text-gray-500 italic">
                      If it's slow, confusing, or freezes, you've lost them.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-brand-purple mb-3">For Your Team:</h4>
                    <p className="text-gray-600 mb-4">
                      If your sales team needs to log client interactions, a clunky, slow internal app makes their job
                      harder. A custom, super-fast app designed exactly for their workflow makes them more efficient,
                      happier, and ultimately helps them close more deals.
                    </p>
                    <p className="text-sm text-brand-purple font-medium">
                      Like a perfectly designed kitchen gadget—it makes one specific task incredibly easy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">2. Performance is Personal</h3>
              <p className="text-gray-600 mb-4">
                When someone uses your web app, their experience is deeply personal. If it's slow, buggy, or looks
                dated, they feel frustrated and question your brand quality.
              </p>
              <p className="text-brand-purple font-medium">A modern, fast-loading app builds confidence and trust.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="bg-green-100 p-3 rounded-full w-fit mb-6">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">3. Turning Tasks into Money-Makers</h3>
              <p className="text-gray-600 mb-4">
                Every time a customer uses your efficient online booking system instead of calling, that's time and
                money saved. Every accurate data entry saves costs and reduces errors.
              </p>
              <p className="text-brand-purple font-medium">Small improvements add up to significant savings.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="bg-purple-100 p-3 rounded-full w-fit mb-6">
                <Settings className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">4. Agility & Future-Proofing</h3>
              <p className="text-gray-600 mb-4">
                Unlike off-the-shelf software, a custom web app is built for you. It fits your unique business
                perfectly, like a tailor-made suit instead of one off the rack.
              </p>
              <p className="text-brand-purple font-medium">Easily updated and expanded as your business grows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* App Types Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Types of Web Apps We Build</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From simple calculators to complex business tools, we create applications that solve real problems for
              real people.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {appTypes.map((type, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-violet-50 to-blue-50 rounded-2xl p-8 border border-violet-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-brand-purple mb-2">Examples:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {type.examples.map((example, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Makes Our Web Apps Different</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every app we build is crafted with precision, performance, and user experience at its core.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="bg-violet-100 p-3 rounded-full w-fit mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Development Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From concept to launch, we follow a proven process that ensures your web app delivers results.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {developmentProcess.map((phase, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-gradient-brand text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg mr-6 flex-shrink-0">
                    {phase.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                    <p className="text-gray-600">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-violet-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Proven Results</h2>
            <p className="text-lg opacity-90">Our web apps deliver measurable improvements for businesses</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-blue-100">Faster Task Completion</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">92%</div>
              <div className="text-blue-100">User Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">60%</div>
              <div className="text-blue-100">Reduction in Support Calls</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3x</div>
              <div className="text-blue-100">ROI Within 12 Months</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Build Your Sharp Tool?</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Stop settling for rusty, clunky tools that frustrate users and waste time. Let's create a web app that
              solves your specific challenges brilliantly and drives real business results.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/book-consultation">
                <Button size="lg" className="bg-gradient-brand hover:bg-brand-purple-dark text-lg py-6 px-8">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-brand-purple text-brand-purple hover:bg-violet-50 text-lg py-6 px-8"
                >
                  Discuss Your Needs
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
