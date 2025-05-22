import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nuvaru.co.uk" // Replace with your actual domain

  // Core pages
  const routes = [
    "",
    "/services",
    "/services/ai-readiness-assessment",
    "/services/custom-ai-solutions",
    "/services/process-automation",
    "/services/data-analysis-optimization",
    "/services/gdpr-compliance-solutions",
    "/services/ai-implementation-training",
    "/case-studies",
    "/chat",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  return routes
}
