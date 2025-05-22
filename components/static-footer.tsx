export function StaticFooter() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-violet-900 text-gray-300">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Nuvaru</h3>
            <p className="text-gray-400">
              AI transformation consultancy helping businesses leverage technology to drive efficiency and optimise
              growth.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="/case-studies" className="hover:text-white">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="/services/ai-readiness-assessment" className="hover:text-white">
                  AI Readiness Assessment
                </a>
              </li>
              <li>
                <a href="/services/custom-ai-solutions" className="hover:text-white">
                  Custom AI Solutions
                </a>
              </li>
              <li>
                <a href="/services/process-automation" className="hover:text-white">
                  Process Automation
                </a>
              </li>
              <li>
                <a href="/services/data-analysis-optimization" className="hover:text-white">
                  Data Analysis
                </a>
              </li>
              <li>
                <a href="/services/ai-implementation-training" className="hover:text-white">
                  AI Implementation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact</h3>
            <ul className="space-y-2">
              <li>Hull, East Yorkshire, UK</li>
              <li>info@nuvaru.co.uk</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Nuvaru. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
