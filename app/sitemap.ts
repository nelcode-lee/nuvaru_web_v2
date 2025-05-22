import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nuvaru.co.uk" // Replace with your actual domain

  // Define all your routes here
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
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }))
}
