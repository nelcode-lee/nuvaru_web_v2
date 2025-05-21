import type { Metadata } from "next"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Users,
  Puzzle,
  Workflow,
  UserCheck,
  GraduationCap,
  FileText,
  HeartHandshake,
  BarChart3,
  Clock,
  Lightbulb,
  Award,
  CheckCircle2,
  Building2,
  ShoppingCart,
  Wrench,
  MessageSquare,
  Zap,
  Brain,
  Settings,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI Implementation & Training | Nuvaru - AI Transformation Consultancy",
  description:
    "Bridge the gap between AI technology and your team's success with our implementation and training services.",
}

export default function AIImplementationTrainingPage() {
  const approachSteps = [
    {
      title: "End-to-End Implementation",
      icon: <Puzzle className="h-10 w-10 text-brand-blue" />,
      sections: [
        {
          subtitle: "Seamless Integration",
          points: [
            "Compatibility checks with your existing systems (ERP, CRM, legacy software).",
            "API-driven or custom middleware development for smooth data flow.",
            "Example: Upgrading a retail client's POS system with AI inventory forecasting.",
          ],
        },
        {
          subtitle: "Workflow Alignment",
          points: [
            "Map AI tools to your unique business processes (e.g., automating invoice approvals in accounting).",
            "Pilot testing with real-world scenarios to refine outcomes.",
          ],
        },
      ],
    },
    {
      title: "Change Management & Adoption",
      icon: <Workflow className="h-10 w-10 text-brand-purple" />,
      sections: [
        {
          subtitle: "Stakeholder Buy-In",
          points: [
            "Workshops to align leadership and staff with AI goals.",
            'Address fears like job displacement with transparency (e.g., "AI handles tasks, not roles").',
          ],
        },
        {
          subtitle: "Cultural Shift",
          points: [
            'Foster an "AI-ready" mindset with communication frameworks.',
            "Celebrate quick wins (e.g., time saved on reports) to build momentum.",
          ],
        },
      ],
    },
    {
      title: "Tailored Training Programs",
      icon: <GraduationCap className="h-10 w-10 text-brand-blue" />,
      sections: [
        {
          subtitle: "Role-Specific Learning",
          points: [
            "Executives: Strategic AI use cases and ROI tracking.",
            "Managers: Monitoring AI outputs and refining workflows.",
            "Staff: Hands-on sessions for daily tool interaction (e.g., chatbots, analytics dashboards).",
          ],
        },
        {
          subtitle: "Flexible Formats",
          points: [
            'On-site workshops, e-learning modules, and "AI Help Desk" support.',
            "Example: A manufacturing client's floor supervisors mastered predictive maintenance tools in 2 weeks.",
          ],
        },
      ],
    },
    {
      title: "Knowledge Transfer & Ownership",
      icon: <FileText className="h-10 w-10 text-brand-purple" />,
      sections: [
        {
          subtitle: "Documentation",
          points: [
            "Technical manuals, process maps, and troubleshooting guides.",
            "Video libraries for onboarding new hires.",
          ],
        },
        {
          subtitle: "Internal Champions",
          points: ["Train select employees to become AI power users and peer mentors."],
        },
      ],
    },
    {
      title: "Ongoing Support",
      icon: <HeartHandshake className="h-10 w-10 text-brand-blue" />,
      sections: [
        {
          subtitle: "Performance Audits",
          points: [
            "Quarterly reviews to optimize AI models and workflows.",
            "Example: A logistics client reduced delivery delays by 35% post-audit.",
          ],
        },
        {
          subtitle: "Capability Building",
          points: ["Advanced training as your AI maturity grows (e.g., introducing multi-agent systems)."],
        },
      ],
    },
  ]

  const benefits = {
    business: [
      "Faster ROI on AI investments",
      "Minimal workflow disruption",
      "Scalability for future AI projects",
      "Compliance with data/industry standards",
    ],
    team: [
      "Reduced frustration with intuitive training",
      "Confidence in using AI tools daily",
      "Skills that future-proof careers",
      "Clear understanding of AI's role",
    ],
  }

  const useCases = [
    {
      title: "Edinburgh Healthcare Clinic",
      icon: <Building2 className="h-10 w-10 text-brand-blue" />,
      challenge: "Staff overwhelmed by patient scheduling and records.",
      solution: "Implemented AI appointment management + staff training.",
      result: "40% fewer admin errors, 10 hours/week saved for nurses.",
    },
    {
      title: "Manchester E-commerce SME",
      icon: <ShoppingCart className="h-10 w-10 text-brand-purple" />,
      challenge: "Warehouse team resisted new inventory bots.",
      solution: 'Gamified training + "AI Champions" program.',
      result: "90% adoption rate in 4 weeks, stock accuracy improved to 99%.",
    },
  ]

  const whyChooseUs = [
    {
      title: "Dual Expertise",
      description: "Technicians who speak code + trainers who speak human.",
      icon: <Brain className="h-6 w-6 text-brand-purple" />,
    },
    {
      title: "Proven Frameworks",
      description: "Adapted from 100+ SME implementations.",
      icon: <Settings className="h-6 w-6 text-brand-blue" />,
    },
    {
      title: "No One-Size-Fits-All",
      description: "Customized plans for your industry, size, and goals.",
      icon: <Wrench className="h-6 w-6 text-brand-purple" />,
    },
  ]

  const faqs = [
    {
      question: "How long does implementation take?",
      answer: '4–12 weeks, depending on complexity. We start with a "quick win" pilot.',
    },
    {
      question: "What if our team resists AI?",
      answer: "We specialize in change management—83% of employees embrace AI after our training.",
    },
    {
      question: "Do you support legacy systems?",
      answer: "Yes! We've integrated AI with 20+ year-old ERP systems.",
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
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              AI Implementation & Training for Seamless Adoption
            </h1>
            <p className="mb-6 text-xl text-blue-100">Bridge the Gap Between AI Technology and Your Team's Success</p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-full md:w-1/2 h-full opacity-20 md:opacity-30">
          <Image
            src="/training.jpg"
            alt="AI implementation and training session with instructor and participants"
            fill
            className="object-contain object-right-bottom"
          />
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
            <div className="bg-gradient-to-br from-blue-50 to-violet-50 p-6 rounded-lg border border-blue-100 mb-8">
              <p className="text-lg text-gray-700 italic">
                "Adopting AI isn't just about technology—it's about people, processes, and confidence. Our AI
                Implementation & Training services ensure your business not only deploys AI tools but embeds them into
                daily operations. From technical setup to empowering your team, we turn AI from a buzzword into a
                business ally."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Our Approach</h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            We combine technical expertise with human-centered training to ensure AI works for your team, not against
            it.
          </p>

          <div className="space-y-12">
            {approachSteps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-r from-blue-100 to-violet-100 p-3 rounded-full mr-3">
                        {step.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {index + 1}. {step.title}
                      </h3>
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <div className="space-y-6">
                      {step.sections.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                          <h4 className="text-xl font-semibold text-gray-900 mb-3">{section.subtitle}</h4>
                          <ul className="space-y-2">
                            {section.points.map((point, pointIndex) => (
                              <li key={pointIndex} className="flex items-start">
                                <CheckCircle2 className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process Visualization */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">The Implementation Journey</h2>
          <div className="relative max-w-4xl mx-auto">
            {/* <div className="hidden md:block absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-brand-blue to-brand-purple transform -translate-y-1/2 rounded-full"></div> */}

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="relative">
                <div className="md:absolute md:top-0 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 z-10 w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <div className="mt-8 md:mt-16 text-center">
                  <h3 className="font-bold text-gray-900">Discovery</h3>
                  <p className="text-sm text-gray-600 mt-2">Assess needs and set goals</p>
                </div>
              </div>

              <div className="relative">
                <div className="md:absolute md:top-0 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 z-10 w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <div className="mt-8 md:mt-16 text-center">
                  <h3 className="font-bold text-gray-900">Integration</h3>
                  <p className="text-sm text-gray-600 mt-2">Connect systems and data</p>
                </div>
              </div>

              <div className="relative">
                <div className="md:absolute md:top-0 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 z-10 w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="mt-8 md:mt-16 text-center">
                  <h3 className="font-bold text-gray-900">Training</h3>
                  <p className="text-sm text-gray-600 mt-2">Empower your team</p>
                </div>
              </div>

              <div className="relative">
                <div className="md:absolute md:top-0 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 z-10 w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <div className="mt-8 md:mt-16 text-center">
                  <h3 className="font-bold text-gray-900">Activation</h3>
                  <p className="text-sm text-gray-600 mt-2">Go live with support</p>
                </div>
              </div>

              <div className="relative">
                <div className="md:absolute md:top-0 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 z-10 w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <div className="mt-8 md:mt-16 text-center">
                  <h3 className="font-bold text-gray-900">Optimization</h3>
                  <p className="text-sm text-gray-600 mt-2">Refine and expand</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-violet-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Benefits</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-3">
                  <BarChart3 className="h-8 w-8 text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">For Your Business</h3>
              </div>
              <ul className="space-y-4">
                {benefits.business.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-blue mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="bg-violet-100 p-3 rounded-full mr-3">
                  <Users className="h-8 w-8 text-brand-purple" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">For Your Team</h3>
              </div>
              <ul className="space-y-4">
                {benefits.team.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Use Cases for UK SMEs</h2>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
            See how UK businesses have successfully implemented AI with our training and support
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {useCases.map((useCase, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-blue-100 to-violet-100 p-3 rounded-full mr-3">
                      {useCase.icon}
                    </div>
                    <h3 className="text-xl font-bold text-brand-purple">{useCase.title}</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="bg-red-100 p-2 rounded-full mr-3 mt-1">
                        <Clock className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Challenge:</h4>
                        <p className="text-gray-700">{useCase.challenge}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                        <Lightbulb className="h-5 w-5 text-brand-blue" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Solution:</h4>
                        <p className="text-gray-700">{useCase.solution}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-full mr-3 mt-1">
                        <Award className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Result:</h4>
                        <p className="text-gray-700">{useCase.result}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Us?</h2>
          <div className="grid gap-8 md:grid-cols-3">
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-violet-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Q: {faq.question}</h3>
                  <p className="text-gray-700">A: {faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Training Showcase */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert-Led Training Programs</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our training programs are designed to empower your team with the knowledge and skills they need to
                leverage AI effectively in their daily work. Led by experienced instructors, our sessions combine
                theoretical knowledge with hands-on practice.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-violet-100 p-2 rounded-full mr-3 mt-1">
                    <UserCheck className="h-5 w-5 text-brand-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Role-Specific Training</h4>
                    <p className="text-gray-700">Customized content for executives, managers, and staff</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                    <GraduationCap className="h-5 w-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Interactive Workshops</h4>
                    <p className="text-gray-700">Engaging sessions with real-world scenarios and exercises</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3 mt-1">
                    <HeartHandshake className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ongoing Support</h4>
                    <p className="text-gray-700">Post-training assistance to ensure successful implementation</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-blue to-brand-purple rounded-xl opacity-20 blur-lg"></div>
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/training.jpg"
                  alt="AI implementation training session with instructor and participants"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Approach Visualization */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-violet-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Training Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto bg-gradient-brand rounded-full flex items-center justify-center mb-4">
                <UserCheck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Personalized</h3>
              <p className="text-gray-600">
                Role-specific training tailored to each team member's needs and skill level
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto bg-gradient-brand rounded-full flex items-center justify-center mb-4">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Interactive</h3>
              <p className="text-gray-600">
                Hands-on workshops and real-world scenarios instead of theoretical lectures
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto bg-gradient-brand rounded-full flex items-center justify-center mb-4">
                <HeartHandshake className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Supportive</h3>
              <p className="text-gray-600">Ongoing assistance and resources to ensure long-term adoption and success</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-violet-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Empower Your Team with AI?</h2>
            <p className="text-xl mb-8">Discover your team's AI maturity in 20 minutes with our free assessment.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-brand-purple hover:bg-blue-50 text-lg py-6 px-8">
                Free AI Readiness Assessment
              </Button>
              <Button className="bg-gray-200 text-gray-800 hover:bg-gray-300 text-lg py-6 px-8 border-0">
                Schedule a Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
