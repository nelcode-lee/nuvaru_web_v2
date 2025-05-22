import Head from "next/head"
import type { Metadata } from "next"

interface PageSEOProps {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  ogType?: string
  canonical?: string
}

export function generateMetadata({ title, description, keywords = [] }: PageSEOProps): Metadata {
  return {
    title,
    description,
    keywords,
  }
}

export function PageSEO({
  title,
  description,
  keywords = [],
  ogImage = "/ai-logo.png",
  ogType = "website",
  canonical,
}: PageSEOProps) {
  // This component is for additional head elements that aren't covered by Next.js metadata
  return (
    <Head>
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  )
}
