import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import "./globals.css"
import { OrganizationStructuredData } from "@/components/structured-data"
import { GoogleTag } from "@/components/google-tag"
import { CookieConsent } from "@/components/cookie-consent"

export const metadata: Metadata = {
  title: {
    template: "%s | Nuvaru - AI Transformation Consultancy",
    default: "Nuvaru - AI Transformation Consultancy for UK Businesses",
  },
  description:
    "AI transformation consultancy helping UK businesses leverage technology to drive efficiency and optimize growth.",
  keywords: ["AI consultancy", "business automation", "AI transformation", "UK AI solutions", "process automation"],
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <OrganizationStructuredData />
      </head>
      <body>
        {children}
        <Suspense fallback={null}>
          <GoogleTag />
        </Suspense>
        <CookieConsent />
      </body>
    </html>
  )
}
