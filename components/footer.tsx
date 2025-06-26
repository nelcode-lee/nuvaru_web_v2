"use client"

import Link from "next/link"
import Image from "next/image"
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const handleChatOpen = () => {
    if (typeof window !== "undefined" && (window as any).openNuvaruChat) {
      ;(window as any).openNuvaruChat()
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image
                src="/nuvaru-logo.png"
                alt="Nuvaru Logo"
                width={120}
                height={50}
                className="object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 text-sm">
              Transform your business with agentic AI solutions. Custom AI development, process automation, and data
              optimization services.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={handleChatOpen}
                className="flex items-center gap-2 text-brand-gold hover:text-brand-gold-dark transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">Chat with AI</span>
              </button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/website-development"
                  className="text-gray-300 hover:text-brand-gold transition-colors"
                >
                  Website Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/web-app-development"
                  className="text-gray-300 hover:text-brand-gold transition-colors"
                >
                  Web App Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/custom-ai-solutions"
                  className="text-gray-300 hover:text-brand-gold transition-colors"
                >
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/process-automation"
                  className="text-gray-300 hover:text-brand-gold transition-colors"
                >
                  Process Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/data-analysis-optimization"
                  className="text-gray-300 hover:text-brand-gold transition-colors"
                >
                  Data Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#about" className="text-gray-300 hover:text-brand-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-300 hover:text-brand-gold transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/book-consultation" className="text-gray-300 hover:text-brand-gold transition-colors">
                  Book Consultation
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-brand-gold transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <span>hello@nuvaru.co.uk</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Phone className="w-4 h-4" />
                <span>+44 (0) 20 7946 0958</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>London, United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Nuvaru. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
