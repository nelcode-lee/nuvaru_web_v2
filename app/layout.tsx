import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Suspense } from "react"
import { GoogleTag } from "@/components/google-tag"
import { OrganizationStructuredData } from "@/components/structured-data"
import { CookieConsent } from "@/components/cookie-consent"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: "%s | Nuvaru - AI Transformation Consultancy",
    default: "Nuvaru - AI Transformation Consultancy for UK Businesses",
  },
  description:
    "UK-based AI consultancy helping businesses implement custom AI solutions, process automation, data analysis, and GDPR compliance. Serving SMEs across the United Kingdom.",
  keywords: [
    "AI consultancy UK",
    "artificial intelligence solutions",
    "business process automation",
    "AI transformation",
    "data analysis UK",
    "custom AI solutions",
    "GDPR compliance tools",
    "AI implementation",
    "UK SME technology",
    "AI readiness assessment",
    "machine learning consultancy",
    "business automation UK",
    "AI for logistics",
    "AI for customer service",
    "AI for sales",
    "AI for finance",
    "AI for recruitment",
    "AI training UK",
  ],
  authors: [{ name: "Nuvaru" }],
  creator: "Nuvaru",
  publisher: "Nuvaru",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://nuvaru.co.uk"), // Replace with your actual domain
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://nuvaru.co.uk",
    title: "Nuvaru - AI Transformation Consultancy for UK Businesses",
    description:
      "AI transformation consultancy helping UK businesses leverage technology to drive efficiency and optimize growth.",
    siteName: "Nuvaru",
    images: [
      {
        url: "/ai-logo.png",
        width: 1200,
        height: 630,
        alt: "Nuvaru - AI Transformation Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuvaru - AI Transformation Consultancy for UK Businesses",
    description:
      "AI transformation consultancy helping UK businesses leverage technology to drive efficiency and optimize growth.",
    images: ["/ai-logo.png"],
  },
  generator: "Next.js",
  verification: {
    google: "YOUR_VERIFICATION_CODE", // Replace with the code Google provides
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16" },
      { url: "/icon.png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png" }],
  },
  themeColor: "#0f172a",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <OrganizationStructuredData />
      </head>
      <body className={inter.className}>
        {children}
        <Suspense fallback={null}>
          <GoogleTag />
        </Suspense>
        <CookieConsent />
      </body>
    </html>
  )
}
