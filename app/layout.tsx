import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { OrganizationSchema } from "@/components/structured-data"
import GoogleAnalytics from "@/components/google-analytics"
import Script from "next/script"

export const metadata: Metadata = {
  title: {
    template: "%s | Nuvaru - AI Transformation Consultancy",
    default: "Nuvaru - AI Transformation Consultancy for UK Businesses",
  },
  description:
    "Nuvaru helps UK businesses transform operations with custom AI solutions, process automation, and data analysis to drive growth and efficiency.",
  keywords: [
    "AI consultancy",
    "artificial intelligence",
    "business transformation",
    "process automation",
    "UK AI solutions",
  ],
  authors: [{ name: "Nuvaru" }],
  creator: "Nuvaru",
  publisher: "Nuvaru",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  metadataBase: new URL("https://nuvaru.co.uk"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://nuvaru.co.uk",
    siteName: "Nuvaru",
    title: "Nuvaru - AI Transformation Consultancy for UK Businesses",
    description:
      "Nuvaru helps UK businesses transform operations with custom AI solutions, process automation, and data analysis to drive growth and efficiency.",
    images: [
      {
        url: "/og-image.jpg", // Create this image for social sharing
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
      "Nuvaru helps UK businesses transform operations with custom AI solutions, process automation, and data analysis to drive growth and efficiency.",
    images: ["/og-image.jpg"],
    creator: "@nuvaru", // Replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=G-N2CZ6H8NRY`} />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N2CZ6H8NRY');
          `,
          }}
        />
      </head>
      <body>
        {children}
        <OrganizationSchema />
        <GoogleAnalytics measurementId="G-N2CZ6H8NRY" />
      </body>
    </html>
  )
}
