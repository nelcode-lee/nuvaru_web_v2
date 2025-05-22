export function StaticNavbar() {
  return (
    <header className="w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          <a href="/" className="flex items-center gap-0">
            <div className="relative h-16 w-16">
              <img
                src="/ai-logo.png"
                alt="Nuvaru AI Logo"
                width={64}
                height={64}
                className="object-contain filter hue-rotate-15"
              />
            </div>
            <span className="text-3xl font-bold bg-gradient-brand bg-clip-text text-transparent">Nuvaru</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="/" className="text-sm font-medium hover:text-purple-700 transition-colors">
            Home
          </a>
          <a href="/services" className="text-sm font-medium hover:text-purple-700 transition-colors">
            Services
          </a>
          <a href="/case-studies" className="text-sm font-medium hover:text-purple-700 transition-colors">
            Case Studies
          </a>
          <a href="/#about" className="text-sm font-medium hover:text-purple-700 transition-colors">
            About
          </a>
          <a href="/#contact" className="text-sm font-medium hover:text-purple-700 transition-colors">
            Contact
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="mailto:info@nuvaru.com?subject=Hi%20Lee%20-%20I%20want%20to%20know%20more%20about%20your%20services"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-purple-900 text-white hover:bg-purple-800 h-10 px-4 py-2"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </header>
  )
}
