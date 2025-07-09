"use client"

import dynamic from "next/dynamic"
import Link from "next/link"
import { ServiceRecommenderButton } from "./service-recommender-button"

const AIResponsesShowcase = dynamic(() => import("./ai-responses-showcase").then(mod => ({ default: mod.AIResponsesShowcase })), {
  ssr: false,
  loading: () => <div className="bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-100 h-[450px] animate-pulse" />
})

export function HeroSection() {
  return (
    <section className="relative bg-gradient-brand py-20 md:py-24">
      <div className="absolute inset-0 z-0 opacity-15">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/20 to-brand-gold/20"></div>
      </div>
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Supercharge Your Business with{" "}
              <span className="text-yellow-300">Web, AI & Automation</span> Solutions
            </h1>
            <p className="text-xl text-white/90 mb-8">
              We help UK SMEs streamline operations, boost efficiency, and unlock growth through{" "}
              <span className="text-yellow-300 font-semibold">smart websites</span>,{" "}
              <span className="text-yellow-300 font-semibold">powerful AI tools</span>, and{" "}
              <span className="text-yellow-300 font-semibold">tailored automation</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="bg-brand-gold hover:bg-brand-gold-dark text-white text-lg py-6 px-8 rounded-md font-medium transition-colors"
              >
                Start Today!
              </Link>
              <ServiceRecommenderButton />
            </div>
          </div>
          <div className="relative">
            <AIResponsesShowcase />
          </div>
        </div>
      </div>
    </section>
  )
}
