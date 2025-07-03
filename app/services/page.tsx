import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ServiceRecommenderButton } from "@/components/service-recommender-button"
import { ServicesSection } from "@/components/services-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { ContactSection } from "@/components/contact-section"
import { PageSEO } from "@/components/page-seo"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Our Services | Nuvaru - AI & Automation Solutions",
  description: "Discover Nuvaru's comprehensive AI and automation services. From AI readiness assessments to custom development, GDPR compliance, and process automation.",
  keywords: "AI services, automation, AI readiness, custom AI development, GDPR compliance, process automation, web development",
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <PageSEO 
        title="Our Services | Nuvaru - AI & Automation Solutions"
        description="Discover Nuvaru's comprehensive AI and automation services. From AI readiness assessments to custom development, GDPR compliance, and process automation."
        keywords={["AI services", "automation", "AI readiness", "custom AI development", "GDPR compliance", "process automation", "web development"]}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-brand py-20 md:py-24">
        <div className="absolute inset-0 z-0 opacity-15">
          <Image src="/network-pattern.webp" alt="" fill className="object-cover" priority />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Comprehensive AI and automation solutions tailored to transform your business operations and drive growth.
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
        </div>
      </section>

      <ServicesSection />
      <CaseStudiesSection />
      <ContactSection />
      <Footer />
    </>
  )
}
