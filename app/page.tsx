import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AIAgentsSection } from "@/components/ai-agents-section"
import { ServicesSection } from "@/components/services-section"
import { IndustryExpertiseSection } from "@/components/industry-expertise-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatWeDoHowWeHelpSection } from "@/components/what-we-do-how-we-help-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhatWeDoHowWeHelpSection />
      <AIAgentsSection />
      <ServicesSection />
      <IndustryExpertiseSection />
      <CaseStudiesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
