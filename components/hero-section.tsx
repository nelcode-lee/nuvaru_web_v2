"use client"

import Link from "next/link"
import { Button } from "./ui/button"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-brand py-20 md:py-24">
      <div className="absolute inset-0 z-0 opacity-15">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/20 to-brand-gold/20"></div>
      </div>
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid gap-12 items-center lg:grid-cols-2">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Transform Your Business with{" "}
              <span className="text-brand-gold">AI & Automation</span>
            </h1>
            <p className="text-xl text-white max-w-2xl">
              We help businesses unlock their potential through intelligent automation, 
              data-driven insights, and custom AI solutions that drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-brand-gold hover:bg-brand-gold-dark text-white text-lg py-4 px-8"
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
          <div className="relative w-full max-w-xl mx-auto">
            <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/9' }}>
              <iframe
                src="https://share.synthesia.io/embeds/videos/bbe81560-76f4-4214-9445-6d3552a14671"
                loading="lazy"
                title="Synthesia video player - website transparent"
                allowFullScreen
                allow="encrypted-media; fullscreen;"
                style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0, overflow: 'hidden' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
