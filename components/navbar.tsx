"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, User } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)

  // Check login status on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/auth/check")
        const data = await response.json()
        setIsLoggedIn(data.authenticated)
      } catch (error) {
        setIsLoggedIn(false)
      }
    }
    checkAuth()
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleSectionScroll = (sectionId: string) => {
    // First navigate to home page if not already there
    if (window.location.pathname !== "/") {
      window.location.href = `/#${sectionId}`
      return
    }

    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
    setIsServicesOpen(false)
  }

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" })
      setIsLoggedIn(false)
      window.location.href = "/"
    } catch (error) {
      console.error("Logout failed:", error)
    }
  }

  // Close services dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const servicesItems = [
    {
      title: "View All Services",
      href: "/services",
      isSection: false,
    },
    {
      title: "Website Development",
      href: "/services/website-development",
      isSection: false,
    },
    {
      title: "Web Portal Development",
      href: "/services/web-portal-development",
      isSection: false,
    },
    {
      title: "Web App Development",
      href: "/services/web-app-development",
      isSection: false,
    },
    {
      title: "AI Readiness Assessment",
      href: "/services/ai-readiness-assessment",
      isSection: false,
    },
    {
      title: "AI Solution Development",
      href: "/services/custom-ai-solutions",
      isSection: false,
    },
    {
      title: "Process Automation",
      href: "/services/process-automation",
      isSection: false,
    },
    {
      title: "Data Analytics",
      href: "/services/data-analysis-optimization",
      isSection: false,
    },
    {
      title: "GDPR Compliance Solutions",
      href: "/services/gdpr-compliance-solutions",
      isSection: false,
    },
    {
      title: "AI Implementation & Training",
      href: "/services/ai-implementation-training",
      isSection: false,
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-28 items-center justify-between px-4 md:px-6">
        <div className="flex items-center justify-center">
          <Link href="/" className="flex items-center">
            <div className="relative h-16 w-40 flex items-center justify-start">
              <Image
                src="/nuvaru-logo.png"
                alt="Nuvaru Logo"
                width={154}
                height={64}
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-brand-gold transition-colors">
            Home
          </Link>

          {/* Services Dropdown */}
          <div className="relative" ref={servicesRef}>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center text-sm font-medium hover:text-brand-gold transition-colors"
            >
              Services
              <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
            </button>

            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <div className="py-2">
                  {servicesItems.map((item, index) => (
                    <div key={index}>
                      {item.isSection ? (
                        <button
                          onClick={() => handleSectionScroll(item.sectionId!)}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-brand-gold transition-colors"
                        >
                          {item.title}
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-brand-gold transition-colors"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {item.title}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/case-studies" className="text-sm font-medium hover:text-brand-gold transition-colors">
            Case Studies
          </Link>
          <button
            onClick={() => handleSectionScroll("about")}
            className="text-sm font-medium hover:text-brand-gold transition-colors"
          >
            About
          </button>
          <Link href="/contact" className="text-sm font-medium hover:text-brand-gold transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {isLoggedIn ? (
            <div className="flex items-center gap-2">
              <Link
                href="/admin/contacts"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white h-10 px-4 py-2"
              >
                <User className="w-4 h-4 mr-2" />
                Admin
              </Link>
              <button
                onClick={handleLogout}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 text-gray-700 hover:bg-gray-50 h-10 px-4 py-2"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/admin/login"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white h-10 px-4 py-2"
            >
              <User className="w-4 h-4 mr-2" />
              Login
            </Link>
          )}

          <Link
            href="/book-consultation"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-brand-gold hover:bg-brand-gold-dark text-white h-10 px-4 py-2"
          >
            Book a Consultation
          </Link>
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
              className="text-sm font-medium py-2 hover:text-brand-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            {/* Mobile Services Section */}
            <div className="border-l-2 border-gray-200 pl-4">
              <div className="text-sm font-medium py-2 text-gray-900 mb-2">Services</div>
              {servicesItems.map((item, index) => (
                <div key={index}>
                  {item.isSection ? (
                    <button
                      onClick={() => handleSectionScroll(item.sectionId!)}
                      className="block w-full text-left text-sm py-2 text-gray-600 hover:text-brand-gold transition-colors"
                    >
                      {item.title}
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-sm py-2 text-gray-600 hover:text-brand-gold transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <Link
              href="/case-studies"
              className="text-sm font-medium py-2 hover:text-brand-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Case Studies
            </Link>
            <button
              onClick={() => handleSectionScroll("about")}
              className="block w-full text-left text-sm font-medium py-2 hover:text-brand-gold transition-colors"
            >
              About
            </button>
            <Link
              href="/contact"
              className="text-sm font-medium py-2 hover:text-brand-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            {/* Mobile Admin/Login */}
            {isLoggedIn ? (
              <div className="border-t pt-4 mt-4">
                <Link
                  href="/admin/contacts"
                  className="block text-sm font-medium py-2 hover:text-brand-gold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Admin Panel
                </Link>
                <button
                  onClick={() => {
                    handleLogout()
                    setIsMenuOpen(false)
                  }}
                  className="block w-full text-left text-sm py-2 text-gray-600 hover:text-brand-gold transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href="/admin/login"
                className="text-sm font-medium py-2 hover:text-brand-gold transition-colors border-t pt-4 mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Admin Login
              </Link>
            )}

            <Link
              href="/book-consultation"
              className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-brand-gold hover:bg-brand-gold-dark text-white h-10 px-4 py-2 mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
