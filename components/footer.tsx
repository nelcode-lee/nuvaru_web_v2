import Link from "next/link"
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react"

export function Footer() {
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
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="hover:text-white">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-white">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-white">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#case-studies" className="hover:text-white">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white">
                  AI Readiness Assessment
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Custom AI Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Process Automation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Data Analysis
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  AI Implementation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact</h3>
            <ul className="space-y-2">
              <li>Hull, East Yorkshire, UK</li>
              <li>info@nuvaru.com</li>
              <li>+44 (0)1482 000000</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Nuvaru. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
