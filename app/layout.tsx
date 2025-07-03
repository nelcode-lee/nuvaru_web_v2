import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import dynamic from "next/dynamic"
import { GoogleTag } from "@/components/google-tag"
import { OrganizationStructuredData } from "@/components/structured-data"
import { ChatButton } from "@/components/chat-button"
import { Suspense } from "react"
import Head from "next/head"

const Analytics = dynamic(() => import("@/components/analytics").then(mod => ({ default: mod.Analytics })), {
  ssr: false,
  loading: () => null
})

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
    images: ["/nuvaru-logo.png"],
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
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title>Nuvaru | AI, Web & Automation Solutions</title>
        <meta name="description" content="Nuvaru helps UK businesses grow with AI, web development, and automation. Get a free website audit and discover how we can improve your performance, conversions, and SEO." />
        <meta property="og:title" content="Nuvaru | AI, Web & Automation Solutions" />
        <meta property="og:description" content="Nuvaru helps UK businesses grow with AI, web development, and automation." />
        <meta property="og:image" content="/ai-logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nuvaru.co.uk" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Nuvaru",
          "url": "https://www.nuvaru.co.uk",
          "logo": "/ai-logo.png",
          "description": "Nuvaru helps UK businesses grow with AI, web development, and automation.",
          "sameAs": [
            "https://www.linkedin.com/company/nuvaru/",
            "https://twitter.com/nuvaru",
            "https://facebook.com/nuvaru",
            "https://instagram.com/nuvaru",
            "https://youtube.com/@nuvaru"
          ],
          "contactPoint": [{
            "@type": "ContactPoint",
            "telephone": "+447741654145",
            "contactType": "customer support",
            "areaServed": "GB",
            "availableLanguage": ["English"]
          }]
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "AI, Web & Automation Solutions",
          "provider": {
            "@type": "Organization",
            "name": "Nuvaru",
            "url": "https://www.nuvaru.co.uk"
          },
          "areaServed": "GB",
          "description": "Custom AI development, process automation, data analysis, and web development for UK businesses.",
          "offers": {
            "@type": "Offer",
            "price": "Contact for quote",
            "priceCurrency": "GBP"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Nuvaru Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Custom AI Solutions",
                  "description": "Tailored AI agents and automation for your business."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Web Development",
                  "description": "Modern, responsive websites built with React and Next.js."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Process Automation",
                  "description": "Automate repetitive business processes to save time and money."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Data Analysis & Optimization",
                  "description": "Unlock insights and optimize your business with data-driven solutions."
                }
              }
            ]
          }
        }) }} />
      </Head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>
            <OrganizationStructuredData />
            {children}
            <ChatButton />
            <Toaster />
            <Analytics />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
