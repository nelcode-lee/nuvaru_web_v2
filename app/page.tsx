import type { Metadata } from "next"
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

export const metadata: Metadata = {
  title: "AI Transformation Consultancy for UK Businesses",
  description:
    "Nuvaru helps businesses leverage AI technologies to drive efficiency, optimise operations, and scale effectively with custom AI solutions and automation.",
  keywords: ["AI consultancy", "business transformation", "process automation", "UK AI solutions", "AI implementation"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: [
      {
        url: "/og-home.jpg", // Create this image for social sharing
        width: 1200,
        height: 630,
        alt: "Nuvaru - AI Transformation Consultancy",
      },
    ],
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
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
