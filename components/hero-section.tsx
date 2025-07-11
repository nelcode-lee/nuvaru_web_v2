"use client"

import dynamic from "next/dynamic"
import Link from "next/link"
import { ServiceRecommenderButton } from "./service-recommender-button"
import { Button } from "./ui/button"

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
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Transform Your Business with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                AI & Automation
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              We help businesses unlock their potential through intelligent automation, 
              data-driven insights, and custom AI solutions that drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white text-lg py-4 px-8"
                asChild
              >
                <Link href="/contact">Book a Consultation</Link>
              </Button>
              <Button
                variant="outline"
                className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 text-lg py-4 px-8"
                asChild
              >
                <Link href="/business-audit">Business Capability Audit</Link>
              </Button>
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
