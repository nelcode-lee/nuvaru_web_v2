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
      <div className="absolute inset-0 z-0 opacity-30">
        <img src="/network-pattern.png" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left column - Text content */}
          <div className="text-left max-w-xl">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              We Build What's Next
            </h1>
            <p className="mb-8 text-xl text-blue-100">
              Transforming your business with powerful web, AI, and automation solutions for impactful results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="bg-brand-gold hover:bg-brand-gold-dark text-white text-lg py-6 px-8 rounded-md font-medium transition-colors"
              >
                Start Today!
              </Link>
              <Link
                href="/services"
                className="bg-white/10 text-white hover:bg-white/20 text-lg py-6 px-8 border border-white/30 rounded-md font-medium transition-colors"
              >
                View Our Services
              </Link>
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
