import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { SnapshotSection } from "@/components/snapshot-section"
import { AIAgentsSection } from "@/components/ai-agents-section"
import { ServicesSection } from "@/components/services-section"
import { IndustryExpertiseSection } from "@/components/industry-expertise-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WebsiteOptimizationSection } from "@/components/website-optimization-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WebsiteOptimizationSection />
      <SnapshotSection />
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
