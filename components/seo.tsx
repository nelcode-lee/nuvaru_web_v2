import Head from "next/head"

interface SEOProps {
  title?: string
  description?: string
  canonicalUrl?: string
  ogImage?: string
}

export function SEO({
  title = "AI Transformation Consultancy for UK Businesses",
  description = "AI transformation consultancy helping UK businesses leverage technology to drive efficiency and optimize growth.",
  canonicalUrl,
  ogImage = "/ai-logo.png",
}: SEOProps) {
  const siteTitle = title ? `${title} | Nuvaru` : "Nuvaru - AI Transformation Consultancy"

  return <Head>{canonicalUrl && <link rel="canonical" href={canonicalUrl} />}</Head>
}
