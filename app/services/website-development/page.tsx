import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import {
  CheckCircle2,
  ArrowRight,
  Zap,
  Search,
  Shield,
  Clock,
  Users,
  UserCheck,
  UserX,
  TrendingUp,
  Award,
  Target,
  Lightbulb,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Website Development Services | Modern React Websites | Nuvaru",
  description:
    "Transform your website into your best employee. Professional React website development that builds trust, converts visitors, and works 24/7 for your business.",
  keywords:
    "website development, React websites, web design, UK web development, business websites, professional web design",
}

export default function WebsiteDevelopmentPage() {
  const employeeComparison = [
    {
      type: "good",
      icon: <UserCheck className="h-12 w-12 text-green-600" />,
      title: "Your Ideal Digital Employee",
      traits: [
        "Shows up looking sharp and professional",
        "Responds instantly to every inquiry",
        "Never takes a sick day or vacation",
        "Knows your business inside and out",
        "Guides clients exactly where they need to go",
        "Works 24/7 without overtime pay",
      ],
    },
    {
      type: "bad",
      icon: <UserX className="h-12 w-12 text-red-600" />,
      title: "The Employee You Don't Want",
      traits: [
        "Shows up in a dated, wrinkled suit",
        "Takes forever to find information",
        "Gives confusing, unclear answers",
        "Makes clients wait and get frustrated",
        "Looks unprofessional and unreliable",
        "Drives potential customers away",
      ],
    },
  ]

  const trustBuilders = [
    {
      icon: <Award className="h-8 w-8 text-brand-blue" />,
      title: "Professional Credibility",
      description: "A modern, polished website instantly communicates that you're a serious, established business",
    },
    {
      icon: <Zap className="h-8 w-8 text-brand-purple" />,
      title: "Lightning-Fast Performance",
      description: "Fast loading times show you value your clients' time and have your technical act together",
    },
    {
      icon: <Target className="h-8 w-8 text-brand-blue" />,
      title: "Clear Value Proposition",
      description: "Visitors immediately understand what you do and how you can help solve their problems",
    },
    {
      icon: <Shield className="h-8 w-8 text-brand-purple" />,
      title: "Security & Reliability",
      description: "HTTPS, GDPR compliance, and robust security measures build confidence in your business",
    },
  ]

  const businessImpact = [
    {
      icon: <TrendingUp className="h-10 w-10 text-green-600" />,
      title: "More Qualified Leads",
      description: "Convert 3x more visitors into potential customers with optimized conversion paths",
      metric: "300% increase",
    },
    {
      icon: <Clock className="h-10 w-10 text-blue-600" />,
      title: "Faster Decision Making",
      description: "Help prospects find information quickly so they can make buying decisions faster",
      metric: "50% faster sales cycle",
    },
    {
      icon: <Users className="h-10 w-10 text-purple-600" />,
      title: "Better Client Experience",
      description: "Create positive first impressions that lead to stronger business relationships",
      metric: "95% client satisfaction",
    },
    {
      icon: <Search className="h-10 w-10 text-indigo-600" />,
      title: "Higher Search Rankings",
      description: "Modern, fast websites rank higher on Google, bringing you more organic traffic",
      metric: "85% SEO improvement",
    },
  ]

  const developmentProcess = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We understand your business, target audience, and goals to create a strategic foundation",
    },
    {
      step: "02",
      title: "Design & User Experience",
      description: "Create wireframes and designs that prioritize user experience and conversion optimisation",
    },
    {
      step: "03",
      title: "React Development",
      description: "Build your website using modern React and Next.js for superior performance and functionality",
    },
    {
      step: "04",
      title: "Testing & Optimisation",
      description: "Rigorous testing across devices and browsers, plus performance optimisation for speed",
    },
    {
      step: "05",
      title: "Launch & Support",
      description: "Smooth deployment with ongoing support, maintenance, and performance monitoring",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-brand relative overflow-hidden">
        {/* Purple semicircular aura on the right side */}
        <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none">
          <div className="absolute -right-1/4 top-1/2 -translate-y-1/2 w-full aspect-square rounded-full bg-purple-600/20 blur-[100px]"></div>
        </div>
        {/* Decorative Swirls */}
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute top-10 left-10 w-32 h-32 text-blue-300" viewBox="0 0 100 100" fill="none">
            <path
              d="M20 50C20 30 30 20 50 20C70 20 80 30 80 50C80 70 70 80 50 80C30 80 20 70 20 50Z"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M30 50C30 40 40 30 50 30C60 30 70 40 70 50C70 60 60 70 50 70C40 70 30 60 30 50Z"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
          <svg className="absolute top-20 right-20 w-24 h-24 text-violet-300" viewBox="0 0 100 100" fill="none">
            <path
              d="M10 50Q30 10 50 50Q70 90 90 50Q70 10 50 50Q30 90 10 50Z"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
          <svg className="absolute bottom-20 left-1/4 w-28 h-28 text-blue-200" viewBox="0 0 100 100" fill="none">
            <path
              d="M50 10C70 10 90 30 90 50C90 70 70 90 50 90C30 90 10 70 10 50C10 30 30 10 50 10Z"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M25 25Q50 50 75 25Q50 50 75 75Q50 50 25 75Q50 50 25 25Z"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
            />
          </svg>
          <svg className="absolute bottom-10 right-1/3 w-20 h-20 text-violet-200" viewBox="0 0 100 100" fill="none">
            <path
              d="M20 20Q50 10 80 20Q90 50 80 80Q50 90 20 80Q10 50 20 20Z"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
        {/* Network pattern overlay */}
        <div className="absolute inset-0 z-0 opacity-30">
          <img src="/network-pattern.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your Website is Like Your Company's Best Employee
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Think of your website as a key member of your team—your most visible, hardest-working employee who never
              sleeps. It's on duty 24/7, ready to meet new people and represent your business. But what kind of employee
              is it?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-700 font-semibold shadow-lg text-lg py-6 px-8">
                Get Your Website Audit
              </Button>
              <Button
                variant="outline"
                className="border-white bg-white/10 text-white hover:bg-white hover:text-blue-600 text-lg py-6 px-8 backdrop-blur-sm"
              >
                View Our Portfolio <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Comparison */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Which Employee is Representing Your Business?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Is it the sharp, confident, and articulate one? Or is it the one who shows up in a dated suit, fumbles
              with papers, and mumbles when asked a question?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {employeeComparison.map((employee, index) => (
              <Card
                key={index}
                className={`border-2 ${
                  employee.type === "good" ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"
                }`}
              >
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    {employee.icon}
                    <h3 className="text-xl font-bold text-gray-900 mt-4">{employee.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {employee.traits.map((trait, traitIndex) => (
                      <li key={traitIndex} className="flex items-start">
                        {employee.type === "good" ? (
                          <CheckCircle2 className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        ) : (
                          <div className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5">
                            <div className="h-3 w-3 bg-red-500 rounded-full mx-auto mt-1"></div>
                          </div>
                        )}
                        <span className="text-gray-700">{trait}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Here's Why That's a Massive Problem
            </h2>

            <div className="space-y-12">
              {/* First Impressions */}
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6 text-center md:text-left">
                  <div className="bg-red-100 p-4 rounded-full flex-shrink-0 mx-auto md:mx-0">
                    <Lightbulb className="h-8 w-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                      First Impressions Are Everything
                    </h3>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      When a potential client lands on your website, they're not just looking for information—they're
                      judging you. They're making a split-second decision about whether you're a professional, reliable
                      company they can trust. If your site looks like it's from 2005, it tells them you haven't kept up
                      with the times. It's an instant credibility killer. Your digital handshake is weak, and that's not
                      a good start to any business relationship.
                    </p>
                  </div>
                </div>
              </div>

              {/* Getting Things Done */}
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6 text-center md:text-left">
                  <div className="bg-orange-100 p-4 rounded-full flex-shrink-0 mx-auto md:mx-0">
                    <Target className="h-8 w-8 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                      It's Not Just About Looking Good; It's About Getting Things Done
                    </h3>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                      A high-performing website is a powerful tool. A slow, clunky site is like a salesperson who keeps
                      getting lost on the way to a meeting. It's frustrating, and clients will just give up and go to
                      your competitor who has their act together.
                    </p>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      A fresh, modern React site is fast, easy to use, and intuitive. It guides visitors exactly where
                      they need to go, whether that's to download a case study, request a quote, or simply learn more
                      about what you do. It's all about making their journey effortless. When it's easy for them, you
                      get more leads and close more deals.
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Building */}
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6 text-center md:text-left">
                  <div className="bg-green-100 p-4 rounded-full flex-shrink-0 mx-auto md:mx-0">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">It Builds Trust and Confidence</h3>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Think of your website as a trust-builder. When a potential client sees that your site is clean,
                      professional, and full of useful information like case studies and testimonials, they start to
                      feel confident in your business. It shows you take your work seriously and are an expert in your
                      field. This is crucial in the B2B world, where relationships are built on trust and a perceived
                      sense of competence.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12 p-8 bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-4">The Bottom Line</h3>
              <p className="text-lg leading-relaxed">
                A great website isn't just a brochure; it's an active sales and marketing machine. It works tirelessly
                to attract clients, build trust, and convert leads. If you want your business to be seen as a leader,
                you need to make sure your digital front door is always wide open and welcoming.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Builders */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Build Trust Through Design</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every element of your website should work together to build confidence and trust with your potential
              clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {trustBuilders.map((builder, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-violet-200 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-blue-100 to-violet-100 p-3 rounded-full flex-shrink-0">
                      {builder.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{builder.title}</h3>
                      <p className="text-gray-700">{builder.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-violet-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Real Business Impact</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See the measurable results our clients achieve with professional website development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessImpact.map((impact, index) => (
              <Card key={index} className="bg-white border-2 border-gray-100 text-center">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">{impact.icon}</div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">{impact.metric}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{impact.title}</h3>
                  <p className="text-sm text-gray-600">{impact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Website Development Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A proven methodology that delivers results every time
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {developmentProcess.map((step, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-violet-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Hire Your Best Digital Employee?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Stop letting an outdated website cost you business. Let's build you a website that works as hard as you do
            and represents your business with the professionalism it deserves.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/#contact">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg py-6 px-8">
                Get Your Free Website Audit
              </Button>
            </Link>
            <Link href="/book-consultation">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 text-lg py-6 px-8"
              >
                Book Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
