import type { Metadata } from "next"
import { ContactSection } from "@/components/contact-section"
import { PageSEO } from "@/components/page-seo"

export const metadata: Metadata = {
  title: "Contact Us - Nuvaru | AI Solutions & Business Automation",
  description:
    "Get in touch with Nuvaru for AI solutions, business automation, and digital transformation services. Book a free consultation today.",
  keywords: "contact Nuvaru, AI consultation, business automation contact, digital transformation inquiry",
}

export default function ContactPage() {
  return (
    <>
      <PageSEO
        title="Contact Us - Nuvaru"
        description="Get in touch with Nuvaru for AI solutions, business automation, and digital transformation services. Book a free consultation today."
        path="/contact"
      />
      <main className="min-h-screen">
        <div className="pt-20">
          <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to transform your business with Web, AI and Automation? Get in touch with our experts for a free
                consultation and discover how we can help you achieve your goals.
              </p>
            </div>
            <ContactSection />
          </div>
        </div>
      </main>
    </>
  )
}
