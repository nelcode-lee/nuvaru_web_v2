"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-0">
            <div className="relative h-16 w-16">
              <Image
                src="/ai-logo.png"
                alt="Nuvaru AI Logo"
                width={64}
                height={64}
                className="object-contain filter hue-rotate-15"
              />
            </div>
            <span className="text-3xl font-bold bg-gradient-brand bg-clip-text text-transparent">Nuvaru</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-brand-purple transition-colors">
            Home
          </Link>
          <Link href="/services" className="text-sm font-medium hover:text-brand-purple transition-colors">
            Services
          </Link>
          <Link href="/case-studies" className="text-sm font-medium hover:text-brand-purple transition-colors">
            Case Studies
          </Link>
          <Link href="/#about" className="text-sm font-medium hover:text-brand-purple transition-colors" scroll={false}>
            About
          </Link>
          <Link href="/#contact" className="text-sm font-medium hover:text-brand-purple transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="mailto:info@nuvaru.com?subject=Hi%20Lee%20-%20I%20want%20to%20know%20more%20about%20your%20services"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-brand text-white hover:bg-brand-purple-dark h-10 px-4 py-2"
          >
            Book a Consultation
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 rounded-md" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b shadow-sm">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="/"
              className="text-sm font-medium py-2 hover:text-brand-purple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium py-2 hover:text-brand-purple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/case-studies"
              className="text-sm font-medium py-2 hover:text-brand-purple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Case Studies
            </Link>
            <Link
              href="/#about"
              className="text-sm font-medium py-2 hover:text-brand-purple transition-colors"
              onClick={() => setIsMenuOpen(false)}
              scroll={false}
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium py-2 hover:text-brand-purple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href="mailto:info@nuvaru.com?subject=Hi%20Lee%20-%20I%20want%20to%20know%20more%20about%20your%20services"
              className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-brand text-white hover:bg-brand-purple-dark h-10 px-4 py-2 mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
