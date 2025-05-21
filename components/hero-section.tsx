import { AIResponsesShowcase } from "./ai-responses-showcase"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-brand py-24 md:py-32 lg:py-40">
      {/* Purple semicircular aura on the right side */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none">
        <div className="absolute -right-1/4 top-1/2 -translate-y-1/2 w-full aspect-square rounded-full bg-purple-600/20 blur-[100px]"></div>
      </div>

      {/* Network pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-15">
        <img src="/network-pattern.png" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left column - Text content */}
          <div className="text-left max-w-xl">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              The Business AI and Automation Agency
            </h1>
            <p className="mb-8 text-xl text-blue-100">
              Empowering SMEs Through AI and Automation: We turn strategic insight into measurable impact by embedding next-generation
              artificial intelligence into the heart of everyday business—driving innovation, efficiency, and
              competitive edge for the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="bg-white text-brand-purple hover:bg-blue-50 text-lg py-6 px-8 rounded-md font-medium"
              >
                Start Today!
              </Link>
              <button className="bg-gray-200 text-gray-800 hover:bg-gray-300 text-lg py-6 px-8 border-0 rounded-md font-medium">
                View Our Services
              </button>
            </div>
          </div>

          {/* Right column - AI Responses Showcase */}
          <div className="hidden lg:block">
            <AIResponsesShowcase />
          </div>
        </div>
      </div>
    </section>
  )
}
