"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  CheckCircle2,
  ArrowRight,
  Zap,
  Search,
  Smartphone,
  Shield,
  BarChart3,
  Clock,
  Users,
  Code,
  Palette,
  Globe,
} from "lucide-react"
import { useState } from "react"
import dynamic from "next/dynamic"

const MobileEcoDashboard = dynamic(() => import('@/components/mobile-eco-dashboard').then(mod => mod.MobileEcoDashboard), { ssr: false, loading: () => <div>Loading...</div> })

export function WebsiteOptimizationSection() {
  const [auditModalOpen, setAuditModalOpen] = useState(false)
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<{ rating: number; improvements: { issue: string; recommendation: string; impact: string }[] } | null>(null)
  const [error, setError] = useState<string | null>(null)

  const painPoints = [
    {
      icon: <Clock className="h-8 w-8 text-red-500" />,
      title: "Slow Loading Times",
      description: "53% of visitors leave if your site takes longer than 3 seconds to load",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-red-500" />,
      title: "Poor Mobile Experience",
      description: "60% of searches happen on mobile - is your site optimised?",
    },
    {
      icon: <Search className="h-8 w-8 text-red-500" />,
      title: "Low Search Rankings",
      description: "Outdated websites struggle to rank on Google's first page",
    },
    {
      icon: <Users className="h-8 w-8 text-red-500" />,
      title: "Poor User Experience",
      description: "Confusing navigation and design drive potential customers away",
    },
  ]

  const solutions = [
    {
      icon: <Zap className="h-10 w-10 text-brand-blue" />,
      title: "Lightning-Fast Performance",
      description: "Modern React architecture with optimised loading for 3x faster speeds",
      benefit: "3x Faster Loading",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-brand-purple" />,
      title: "Mobile-First Design",
      description: "Responsive designs that look perfect on every device and screen size",
      benefit: "100% Mobile Optimised",
    },
    {
      icon: <Search className="h-10 w-10 text-brand-blue" />,
      title: "SEO Optimisation",
      description: "Built-in SEO best practices to help you rank higher on Google",
      benefit: "85% SEO Improvement",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-brand-purple" />,
      title: "Conversion Optimisation",
      description: "Strategic design and user experience to turn visitors into customers",
      benefit: "150% More Conversions",
    },
  ]

  const features = [
    {
      icon: <Code className="h-6 w-6 text-brand-blue" />,
      title: "Modern React Development",
      description: "Built with the latest React and Next.js technologies for superior performance",
    },
    {
      icon: <Palette className="h-6 w-6 text-brand-purple" />,
      title: "Custom Design Systems",
      description: "Unique, professional designs that reflect your brand identity",
    },
    {
      icon: <Shield className="h-6 w-6 text-brand-blue" />,
      title: "Security & Compliance",
      description: "GDPR compliant with enterprise-level security measures",
    },
    {
      icon: <Globe className="h-6 w-6 text-brand-purple" />,
      title: "Global Performance",
      description: "CDN integration for fast loading times worldwide",
    },
  ]

  const results = [
    { metric: "3x", label: "Faster Loading" },
    { metric: "150%", label: "More Conversions" },
    { metric: "85%", label: "SEO Improvement" },
    { metric: "100%", label: "Mobile Optimised" },
  ]

  return (
    <section id="website-optimization" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transform Your Website Into a Lead Generation Machine
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stop losing customers to slow, outdated websites. Our modern React development and optimisation services
            help UK businesses attract, engage, and convert more visitors into paying customers.
          </p>
        </div>

        {/* Pain Points */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Is Your Website Costing You Customers?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((point, index) => (
              <Card key={index} className="border-red-100 bg-red-50">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{point.icon}</div>
                  <h4 className="font-bold text-gray-900 mb-2">{point.title}</h4>
                  <p className="text-sm text-gray-700">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Solutions */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">Our Website Development Solutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-violet-200 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-blue-100 to-violet-100 p-3 rounded-full flex-shrink-0">
                      {solution.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-bold text-gray-900">{solution.title}</h4>
                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                          {solution.benefit}
                        </span>
                      </div>
                      <p className="text-gray-700">{solution.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Results Showcase */}
        <div className="mb-16 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Proven Results for UK Businesses</h3>
            <p className="text-blue-100">Real improvements our clients have achieved</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{result.metric}</div>
                <div className="text-blue-100">{result.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">What Makes Our Websites Different</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-white p-2 rounded-lg shadow-sm">{feature.icon}</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                  <p className="text-gray-700 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Showcase - Beautiful React Website Examples */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Beautiful React Websites We've Built</h3>
            <p className="text-lg text-gray-600">
              Modern, responsive, and conversion-optimised websites for UK businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example 1 - E-commerce */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-violet-600 rounded-xl opacity-20 blur-sm group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white rounded-xl overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-violet-50 p-6">
                  <div className="h-full bg-white rounded-lg shadow-sm p-4 flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="h-8 bg-gradient-to-r from-blue-600 to-violet-600 rounded text-white flex items-center justify-center text-sm font-semibold">
                        Premium E-commerce Store
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-16 bg-gray-100 rounded"></div>
                        <div className="h-16 bg-gray-100 rounded"></div>
                        <div className="h-16 bg-gray-100 rounded"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-gray-200 rounded w-full"></div>
                        <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h4 className="font-bold text-gray-900 mb-1">Luxury Fashion Store</h4>
                  <p className="text-sm text-gray-600 mb-2">React + Next.js e-commerce platform</p>
                  <div className="flex items-center gap-2 text-xs text-green-600">
                    <CheckCircle2 className="h-3 w-3" />
                    <span>300% increase in conversions</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Example 2 - SaaS Dashboard */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl opacity-20 blur-sm group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white rounded-xl overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-violet-50 to-purple-50 p-6">
                  <div className="h-full bg-white rounded-lg shadow-sm p-4 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="text-xs text-gray-500">Dashboard</div>
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="h-6 bg-gradient-to-r from-violet-600 to-purple-600 rounded text-white flex items-center justify-center text-xs font-semibold">
                        Analytics Dashboard
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-12 bg-violet-100 rounded flex items-center justify-center">
                          <BarChart3 className="h-6 w-6 text-violet-600" />
                        </div>
                        <div className="h-12 bg-purple-100 rounded flex items-center justify-center">
                          <Users className="h-6 w-6 text-purple-600" />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="h-2 bg-violet-200 rounded w-full"></div>
                        <div className="h-2 bg-purple-200 rounded w-2/3"></div>
                        <div className="h-2 bg-violet-200 rounded w-4/5"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h4 className="font-bold text-gray-900 mb-1">SaaS Analytics Platform</h4>
                  <p className="text-sm text-gray-600 mb-2">React dashboard with real-time data</p>
                  <div className="flex items-center gap-2 text-xs text-green-600">
                    <CheckCircle2 className="h-3 w-3" />
                    <span>50% faster load times</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Example 3 - Corporate Website */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl opacity-20 blur-sm group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white rounded-xl overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-cyan-50 p-6">
                  <div className="h-full bg-white rounded-lg shadow-sm p-4 flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded text-white flex items-center justify-center text-sm font-semibold">
                        Professional Services
                      </div>
                      <div className="h-16 bg-blue-100 rounded flex items-center justify-center">
                        <Globe className="h-8 w-8 text-blue-600" />
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-blue-200 rounded w-full"></div>
                        <div className="h-2 bg-cyan-200 rounded w-5/6"></div>
                        <div className="h-2 bg-blue-200 rounded w-3/4"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h4 className="font-bold text-gray-900 mb-1">Corporate Website</h4>
                  <p className="text-sm text-gray-600 mb-2">Professional React site with CMS</p>
                  <div className="flex items-center gap-2 text-xs text-green-600">
                    <CheckCircle2 className="h-3 w-3" />
                    <span>200% more enquiries</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Modern, Professional Websites That Convert</h3>
              <p className="text-lg text-gray-700 mb-6">
                We don't just build websites - we create digital experiences that represent your brand professionally
                and drive real business results. Every website is custom-designed and optimised for your specific
                industry and target audience.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Custom React development for superior performance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Conversion-focused design and user experience</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">SEO optimisation built-in from day one</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Ongoing support and maintenance included</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-violet-600 rounded-xl opacity-20 blur-lg"></div>
              <div className="relative rounded-xl overflow-hidden shadow-xl bg-white p-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">98%</div>
                  <div className="text-gray-600 mb-4">Client Satisfaction Rate</div>
                  <div className="flex justify-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">★</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    "Exceptional React development and outstanding results for our business"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-blue-50 to-violet-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Website?</h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Get a free website audit and discover exactly how we can improve your site's performance, conversions, and
            search rankings.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white text-lg py-6 px-8"
              onClick={() => setAuditModalOpen(true)}
            >
              Get Free Website Audit
            </Button>
          </div>
          {/* Audit Modal (full logic) */}
          {auditModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
              <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
                <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600" onClick={() => {
                  setAuditModalOpen(false)
                  setUrl("")
                  setResult(null)
                  setError(null)
                  setLoading(false)
                }}>&times;</button>
                <h2 className="text-2xl font-bold mb-4 text-brand-purple">Free Website Audit</h2>
                <p className="mb-4 text-gray-700">Enter your website URL and get a free AI-powered audit with 4 improvement suggestions.</p>
                {result ? (
                  <div className="space-y-4 overflow-y-auto max-h-[70vh]">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-brand-purple mb-2">{result.rating}/10</div>
                      <div className="text-gray-600 mb-4">Website Rating</div>
                    </div>
                    <ul className="pl-0 text-gray-800 space-y-4">
                      {result.improvements.map((imp, i) => (
                        <li key={i} className="border rounded p-3 bg-gray-50">
                          <div className="font-semibold text-brand-purple mb-1">{imp.issue}</div>
                          <div className="mb-1"><span className="font-medium text-gray-700">Recommendation:</span> {imp.recommendation}</div>
                          <div className="text-sm text-green-700"><span className="font-medium">Impact:</span> {imp.impact}</div>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-4" onClick={() => {
                      setResult(null)
                      setUrl("")
                      setError(null)
                    }}>Audit Another Website</Button>
                  </div>
                ) : (
                  <form
                    className="flex flex-col gap-4"
                    onSubmit={async (e) => {
                      e.preventDefault()
                      setLoading(true)
                      setError(null)
                      setResult(null)
                      try {
                        const res = await fetch("/api/website-audit", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({ url }),
                        })
                        const data = await res.json()
                        if (!res.ok) throw new Error(data.error || "Unknown error")
                        setResult({ rating: data.rating, improvements: data.improvements })
                      } catch (err: any) {
                        setError(err.message || "Something went wrong.")
                      } finally {
                        setLoading(false)
                      }
                    }}
                  >
                    <input
                      type="url"
                      placeholder="https://yourwebsite.com"
                      className="border rounded px-4 py-2"
                      required
                      value={url}
                      onChange={e => setUrl(e.target.value)}
                      disabled={loading}
                    />
                    <Button type="submit" className="bg-gradient-to-r from-blue-600 to-violet-600 text-white" disabled={loading}>
                      {loading ? "Auditing..." : "Get Audit"}
                    </Button>
                    {error && <div className="text-red-600 text-sm text-center">{error}</div>}
                  </form>
                )}
                <Button className="w-full mt-6" variant="outline" onClick={() => {
                  setAuditModalOpen(false)
                  setUrl("")
                  setResult(null)
                  setError(null)
                  setLoading(false)
                }}>Close</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
