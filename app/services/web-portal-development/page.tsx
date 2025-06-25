import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Shield, Users, BarChart3, Zap, CheckCircle, ArrowRight, Star, Clock } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Web Portal Development | Nuvaru - Custom Business Portals",
  description:
    "Transform your business operations with custom web portals. Secure, scalable solutions for employee access, client management, and streamlined operations.",
  keywords:
    "web portal development, custom portals, business portals, employee portals, client portals, secure web applications",
}

export default function WebPortalDevelopmentPage() {
  const benefits = [
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Empowerment & Efficiency",
      description: "Enable self-service capabilities that empower users while reducing support overhead by up to 70%.",
      details: [
        "24/7 access to information and services",
        "Instant order tracking and account management",
        "Reduced support calls and emails",
        "Streamlined user workflows",
      ],
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Stronger Relationships",
      description: "Build deeper connections through personalized, tailored experiences that make users feel valued.",
      details: [
        "Personalised dashboards for each user",
        "Role-based access and permissions",
        "Customised content and features",
        "Enhanced user satisfaction and loyalty",
      ],
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Security & Trust",
      description: "Enterprise-grade security features that protect sensitive data and build user confidence.",
      details: [
        "Multi-factor authentication",
        "Encrypted data transmission",
        "Role-based access controls",
        "Comprehensive audit trails",
      ],
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-orange-600" />,
      title: "Insights & Growth",
      description: "Gather valuable user behaviour data to drive business decisions and identify growth opportunities.",
      details: [
        "User behaviour analytics",
        "Feature usage tracking",
        "Performance monitoring",
        "Data-driven optimisation",
      ],
    },
  ]

  const developmentProcess = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "We analyse your requirements, user needs, and existing systems to create a comprehensive portal strategy.",
    },
    {
      step: "02",
      title: "Design & Architecture",
      description:
        "Our team designs intuitive user interfaces and robust system architecture tailored to your business.",
    },
    {
      step: "03",
      title: "Development & Integration",
      description:
        "We build your portal using modern technologies and integrate it seamlessly with your existing systems.",
    },
    {
      step: "04",
      title: "Testing & Deployment",
      description: "Comprehensive testing ensures reliability and security before we deploy your portal to production.",
    },
    {
      step: "05",
      title: "Training & Support",
      description:
        "We provide user training and ongoing support to ensure successful adoption and optimal performance.",
    },
  ]

  const features = [
    "Custom user dashboards",
    "Role-based access control",
    "Document management",
    "Real-time notifications",
    "Mobile-responsive design",
    "API integrations",
    "Advanced search functionality",
    "Reporting and analytics",
    "Single sign-on (SSO)",
    "Multi-language support",
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
          <div className="max-w-4xl">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Your Web Portal is Your VIP Lounge
            </h1>
            <p className="mb-8 text-xl text-blue-100 leading-relaxed">
              Is it a sleek, modern space that empowers and delights your users? Or is it outdated, confusing, and
              frustrating? Transform your business operations with a custom web portal that serves as the perfect VIP
              experience for your customers, partners, and employees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-brand-purple hover:bg-gray-100 text-lg py-6 px-8">
                Get Your Portal Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm text-lg py-6 px-8"
              >
                View Examples
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* VIP Lounge Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The VIP Lounge Experience</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your web portal should be like a premium VIP lounge - welcoming, efficient, and designed to make every
              visitor feel valued.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Modern Portal */}
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Star className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-green-800">The Modern VIP Lounge</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-green-700">Sleek, intuitive design that guides users effortlessly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-green-700">Instant access to personalised information and tools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-green-700">Mobile-friendly and accessible from anywhere</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-green-700">Secure, reliable, and always available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-green-700">Makes users feel empowered and valued</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Outdated Portal */}
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 p-2 rounded-full">
                    <Clock className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-red-800">The Dusty Old Lounge</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="h-5 w-5 bg-red-600 rounded-full mt-0.5 shrink-0"></div>
                    <span className="text-red-700">Confusing navigation and outdated design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-5 w-5 bg-red-600 rounded-full mt-0.5 shrink-0"></div>
                    <span className="text-red-700">Slow loading times and frequent errors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-5 w-5 bg-red-600 rounded-full mt-0.5 shrink-0"></div>
                    <span className="text-red-700">Not mobile-friendly or accessible</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-5 w-5 bg-red-600 rounded-full mt-0.5 shrink-0"></div>
                    <span className="text-red-700">Security vulnerabilities and data risks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-5 w-5 bg-red-600 rounded-full mt-0.5 shrink-0"></div>
                    <span className="text-red-700">Frustrates users and wastes their time</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Your Business Needs a Modern Web Portal</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A well-designed portal isn't just functional—it's a strategic business asset that drives efficiency,
              builds relationships, and provides valuable insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="group">
                <Card className="h-full border-gray-200 hover:border-violet-300 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-gray-100 p-3 rounded-full group-hover:bg-violet-100 transition-colors">
                        {benefit.icon}
                      </div>
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">{benefit.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {benefit.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <ArrowRight className="h-4 w-4 text-violet-600 mt-0.5 shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Portal Features & Capabilities</h2>
            <p className="text-lg text-gray-600">
              Every portal we build includes these essential features and can be customised to your specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Portal Development Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure your portal is delivered on time, within budget, and exceeds
              expectations.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {developmentProcess.map((phase, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center text-white font-bold">
                    {phase.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-violet-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">70%</div>
              <div className="text-blue-100">Reduction in Support Calls</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Always Available Access</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">User Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3x</div>
              <div className="text-blue-100">Faster Task Completion</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your Business Portal?</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Don't let an outdated portal hold your business back. Let's discuss how a modern, secure, and
              user-friendly portal can empower your users, reduce costs, and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/book-consultation">
                <Button size="lg" className="bg-gradient-brand hover:bg-brand-purple-dark text-lg py-6 px-8">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-brand-purple text-brand-purple hover:bg-violet-50 text-lg py-6 px-8"
                >
                  Get Portal Audit
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
