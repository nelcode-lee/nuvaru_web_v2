import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Nuvaru - AI Solutions & Digital Transformation",
  description: "Insights, guides, and thought leadership on AI implementation, digital transformation, and business automation.",
  keywords: "AI blog, digital transformation, business automation, AI insights, technology blog",
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 