import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { GoogleTag } from "@/components/google-tag"
import { OrganizationStructuredData } from "@/components/structured-data"
import { ChatButton } from "@/components/chat-button"
import { Suspense } from "react"
import { Analytics } from "@/components/analytics"
import { CookieConsent } from "@/components/cookie-consent"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Nuvaru - AI Solutions & Consulting",
    template: "%s | Nuvaru",
  },
  description:
    "Transform your business with agentic AI solutions. Custom AI development, process automation, and data optimization services.",
  keywords: [
    "AI solutions",
    "artificial intelligence",
    "automation",
    "data analysis",
    "business consulting",
    "machine learning",
  ],
  authors: [{ name: "Nuvaru" }],
  creator: "Nuvaru",
  publisher: "Nuvaru",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.nuvaru.co.uk"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.nuvaru.co.uk",
    title: "Nuvaru - AI Solutions & Consulting",
    description:
      "Transform your business with agentic AI solutions. Custom AI development, process automation, and data optimization services.",
    siteName: "Nuvaru",
    images: [
      {
        url: "/nuvaru-logo.png",
        width: 1200,
        height: 630,
        alt: "Nuvaru - AI Solutions & Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuvaru - AI Solutions & Consulting",
    description:
      "Transform your business with agentic AI solutions. Custom AI development, process automation, and data optimization services.",
    images: [
      {
        url: "/nuvaru-logo.png",
        width: 1200,
        height: 630,
        alt: "Nuvaru - AI Solutions & Consulting",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="keywords" content="AI solutions, artificial intelligence, automation, data analysis, business consulting, machine learning, UK SMEs, Hull, East Yorkshire, process automation, GDPR compliance, web development, custom AI, AI implementation, data optimization" />
        <meta name="author" content="Nuvaru - AI Solutions & Consulting" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="theme-color" content="#6366f1" />
        <meta name="msapplication-TileColor" content="#6366f1" />
        
        {/* Social Media Meta Tags */}
        <meta property="og:site_name" content="Nuvaru" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta name="twitter:site" content="@nuvaru" />
        <meta name="twitter:creator" content="@nuvaru" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/nuvaru-logo.png" as="image" type="image/png" />
        <link rel="preload" href="/network-pattern.webp" as="image" type="image/webp" />
        <link rel="preload" href="/ai-customer-service.webp" as="image" type="image/webp" />
        <link rel="preload" href="/professional-business-consultant.webp" as="image" type="image/webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Structured Data for SEO and Accessibility */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
          "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Nuvaru",
            "url": "https://www.nuvaru.co.uk",
            "logo": "https://www.nuvaru.co.uk/nuvaru-logo.png",
            "description": "AI Solutions & Consulting for UK SMEs",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Hull",
              "addressRegion": "East Yorkshire",
              "addressCountry": "GB"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "info@nuvaru.co.uk"
            },
            "sameAs": [
              "https://www.linkedin.com/company/nuvaru"
            ],
            "serviceArea": {
              "@type": "Country",
              "name": "United Kingdom"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
              "name": "AI Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                    "name": "AI Readiness Assessment",
                    "description": "Evaluate your organisation's AI readiness and build a strategic roadmap"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                    "name": "Custom AI Solutions",
                    "description": "Tailored AI development for UK SMEs"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Process Automation",
                    "description": "AI-driven process automation for business efficiency"
                  }
                }
              ]
            }
          })
        }} />
        
        {/* Breadcrumb Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.nuvaru.co.uk"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://www.nuvaru.co.uk/services"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Contact",
                "item": "https://www.nuvaru.co.uk/contact"
              }
            ]
          })
        }} />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Suspense fallback={null}>
            <GoogleTag />
          </Suspense>
            <OrganizationStructuredData />
            {children}
          <Toaster />
            <ChatButton />
            <Analytics />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}
