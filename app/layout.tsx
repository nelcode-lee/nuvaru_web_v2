import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@/components/analytics"
import { GoogleTag } from "@/components/google-tag"
import { OrganizationStructuredData } from "@/components/structured-data"
import { ChatButton } from "@/components/chat-button"
import { Suspense } from "react"

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
      <head>
        <GoogleTag />
      </head>
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
