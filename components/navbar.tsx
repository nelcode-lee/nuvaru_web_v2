"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, User } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isServicesExpanded, setIsServicesExpanded] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const firstMenuItemRef = useRef<HTMLAnchorElement>(null)

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
    // Focus first menu item when opening
    if (!isMenuOpen) {
      setTimeout(() => {
        firstMenuItemRef.current?.focus()
      }, 100)
    }
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

  // Handle keyboard navigation for mobile menu
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener("keydown", handleKeyDown)
      return () => {
        document.removeEventListener("keydown", handleKeyDown)
      }
    }
  }, [isMenuOpen])

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

        {/* Always show hamburger menu button */}
        <button 
          className="p-2 rounded-md" 
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Hamburger Sidebar Overlay (all screen sizes) */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'}`}
        aria-label="Sidebar navigation overlay"
        role="dialog"
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black bg-opacity-40"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
        {/* Sidebar (right-aligned) */}
        <nav
          id="mobile-menu"
          className="fixed right-0 top-0 h-full w-full max-w-[340px] bg-white shadow-xl flex flex-col overflow-y-auto"
          aria-label="Main navigation"
          role="navigation"
          ref={mobileMenuRef}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
          <div className="px-6 py-8 flex flex-col gap-6 h-full">
            {/* Logo */}
            <Link href="/" className="flex items-center mb-4" onClick={() => setIsMenuOpen(false)}>
              <div className="relative h-10 w-28 flex items-center justify-start">
                <Image src="/nuvaru-logo.png" alt="Nuvaru Logo" width={112} height={40} className="object-contain" priority />
              </div>
            </Link>
            {/* Home */}
            <Link
              href="/"
              className="block text-lg font-semibold py-2 px-2 rounded hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
              tabIndex={isMenuOpen ? 0 : -1}
              ref={firstMenuItemRef}
            >
              Home
            </Link>
            {/* Services Group (Expandable) */}
            <div>
              <button
                className="flex items-center w-full text-xs font-bold uppercase text-gray-500 tracking-wider mb-2 pl-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
                aria-expanded={isServicesExpanded}
                aria-controls="services-list"
                onClick={() => setIsServicesExpanded(v => !v)}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                <span className="flex-1 text-left">Services</span>
                <ChevronDown className={`ml-2 transition-transform ${isServicesExpanded ? 'rotate-180' : ''}`} size={18} />
              </button>
              <div
                id="services-list"
                className={`flex flex-col gap-1 pl-2 transition-all duration-200 overflow-hidden ${isServicesExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
                aria-hidden={!isServicesExpanded}
              >
                {servicesItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block text-base py-2 px-4 rounded hover:bg-brand-gold/10 hover:text-brand-gold transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                    tabIndex={isMenuOpen ? 0 : -1}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            {/* Other Groups */}
            <div className="mt-4 flex flex-col gap-1">
              <div className="text-xs font-bold uppercase text-gray-500 tracking-wider mb-2 pl-2">Explore</div>
              <Link
                href="/case-studies"
                className="block text-base py-2 px-4 rounded hover:bg-brand-gold/10 hover:text-brand-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                Case Studies
              </Link>
              <button
                onClick={() => { handleSectionScroll('about'); setIsMenuOpen(false) }}
                className="block w-full text-left text-base py-2 px-4 rounded hover:bg-brand-gold/10 hover:text-brand-gold transition-colors"
                tabIndex={isMenuOpen ? 0 : -1}
                aria-label="Scroll to About section"
              >
                About
              </button>
              <Link
                href="/contact"
                className="block text-base py-2 px-4 rounded hover:bg-brand-gold/10 hover:text-brand-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                Contact
              </Link>
            </div>
            {/* Admin/Login Group */}
            <div className="mt-4 flex flex-col gap-1 border-t border-gray-200 pt-4">
              <div className="text-xs font-bold uppercase text-gray-500 tracking-wider mb-2 pl-2">Admin</div>
              {isLoggedIn ? (
                <>
                  <Link
                    href="/admin/contacts"
                    className="block text-base py-2 px-4 rounded hover:bg-brand-gold/10 hover:text-brand-gold transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                    tabIndex={isMenuOpen ? 0 : -1}
                  >
                    Admin Panel
                  </Link>
                  <button
                    onClick={() => { handleLogout(); setIsMenuOpen(false) }}
                    className="block w-full text-left text-base py-2 px-4 rounded hover:bg-brand-gold/10 hover:text-brand-gold transition-colors"
                    tabIndex={isMenuOpen ? 0 : -1}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  href="/admin/login"
                  className="block text-base py-2 px-4 rounded hover:bg-brand-gold/10 hover:text-brand-gold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  tabIndex={isMenuOpen ? 0 : -1}
                >
                  Admin Login
                </Link>
              )}
            </div>
            {/* Book a Consultation CTA */}
            <Link
              href="/book-consultation"
              className="mt-6 w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-brand-gold hover:bg-brand-gold-dark text-white h-12 px-6 py-3"
              onClick={() => setIsMenuOpen(false)}
              tabIndex={isMenuOpen ? 0 : -1}
            >
              Book a Consultation
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
