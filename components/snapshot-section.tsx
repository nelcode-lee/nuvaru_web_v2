import { TrendingDown, TrendingUp, Zap, Clock, BarChart3, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export function SnapshotSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transforming Businesses Through AI & Automation</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Nuvaru, we simplify your journey into AI and automation, delivering measurable results without the
            complexity.
          </p>
        </div>

        {/* Business Impact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-violet-50 rounded-xl p-8 shadow-md">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-brand rounded-full p-3 mr-4">
                <TrendingDown className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Cost Reduction</h3>
            </div>
            <p className="text-gray-700 mb-4">
              We help clients reduce operational costs by 25-40% through intelligent process automation, eliminating
              redundant workflows and optimizing resource allocation.
            </p>
            <div className="bg-white/60 rounded-lg p-4 flex items-center">
              <div className="text-3xl font-bold text-brand-blue mr-3">40%</div>
              <div className="text-gray-700">Average operational cost reduction</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-violet-50 rounded-xl p-8 shadow-md">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-brand rounded-full p-3 mr-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Revenue Growth</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Our AI-powered insights have helped businesses increase sales conversion rates by up to 32% and customer
              lifetime value by 27% by identifying opportunities hidden in your data.
            </p>
            <div className="bg-white/60 rounded-lg p-4 flex items-center">
              <div className="text-3xl font-bold text-brand-purple mr-3">32%</div>
              <div className="text-gray-700">Average increase in conversion rates</div>
            </div>
          </div>
        </div>

        {/* Our Approach */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We translate complex AI and automation concepts into practical business solutions. No technical
              jargon—just clear pathways to improved efficiency and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-brand-blue" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Rapid Implementation</h4>
              <p className="text-gray-600">60% faster than industry average</p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-violet-100 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-brand-purple" />
              </div>
              <h4 className="text-lg font-semibold mb-2">ROI-Focused Solutions</h4>
              <p className="text-gray-600">Measurable outcomes guaranteed</p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
                <CheckCircle2 className="h-6 w-6 text-brand-blue" />
              </div>
              <h4 className="text-lg font-semibold mb-2">End-to-End Support</h4>
              <p className="text-gray-600">From strategy to deployment</p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-violet-100 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-brand-purple" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Seamless Integration</h4>
              <p className="text-gray-600">Works with your existing systems</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/services">
            <button className="bg-gradient-brand text-white hover:bg-brand-purple-dark text-lg py-4 px-8 rounded-md font-medium transition-colors">
              Discover Our Approach
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
