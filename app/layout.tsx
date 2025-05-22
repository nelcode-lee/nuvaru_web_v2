import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@/components/analytics"
import { GoogleTag } from "@/components/google-tag"
import { OrganizationStructuredData } from "@/components/structured-data"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: {
    default: "Nuvaru | AI Consultancy & Implementation Services",
    template: "%s | Nuvaru AI Consultancy",
  },
  description:
    "Nuvaru provides expert AI consultancy, implementation, and training services for businesses across the UK. Specializing in custom AI solutions, process automation, and GDPR compliance.",
  keywords: [
    "AI consultancy",
    "artificial intelligence services",
    "AI implementation",
    "process automation",
    "GDPR compliance",
    "AI training",
    "custom AI solutions",
    "UK AI consultant",
    "business automation",
    "AI readiness assessment",
    "data analysis",
    "AI strategy",
    "machine learning solutions",
    "digital transformation",
    "AI for business",
  ],
  authors: [{ name: "Nuvaru" }],
  creator: "Nuvaru",
  publisher: "Nuvaru",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://nuvaru.co.uk"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nuvaru | AI Consultancy & Implementation Services",
    description:
      "Expert AI consultancy, implementation, and training services for businesses across the UK. Specializing in custom AI solutions, process automation, and GDPR compliance.",
    url: "https://nuvaru.co.uk",
    siteName: "Nuvaru",
    images: [
      {
        url: "/professional-business-consultant.png",
        width: 1200,
        height: 630,
        alt: "Nuvaru AI Consultancy",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuvaru | AI Consultancy & Implementation Services",
    description: "Expert AI consultancy, implementation, and training services for businesses across the UK.",
    images: ["/professional-business-consultant.png"],
    creator: "@nuvaru",
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
  icons: {
    icon: [{ url: "/ai-logo.png" }, { url: "/ai-logo.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/ai-logo.png" }],
    shortcut: ["/ai-logo.png"],
  },
  manifest: "/manifest.json",
  verification: {
    google: "your-google-site-verification-code",
  },
    generator: 'v0.dev'
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
        <GoogleTag />
      </head>
      <body className="min-h-screen bg-white font-sans antialiased">
        <Navbar />
        <Suspense>
          <main>{children}</main>
        </Suspense>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
