export interface SiteContent {
  services: Array<{
    name: string
    description: string
    features: string[]
  }>
  caseStudies: Array<{
    title: string
    industry: string
    description: string
    results: string
  }>
  pages: Array<{
    title: string
    path: string
    description?: string
  }>
}

export function getSiteContent(): SiteContent {
  return {
    services: [
      {
        name: "AI Readiness Assessment",
        description: "Comprehensive evaluation of your current systems and AI implementation potential",
        features: [
          "Current system analysis",
          "AI opportunity identification",
          "Implementation roadmap",
          "ROI projections",
          "Risk assessment",
        ],
      },
      {
        name: "Custom AI Solutions",
        description: "Bespoke AI implementations tailored to your specific business needs",
        features: [
          "Custom AI development",
          "Integration with existing systems",
          "Scalable architecture",
          "Performance optimization",
          "Ongoing support",
        ],
      },
      {
        name: "Process Automation",
        description: "Streamline operations and reduce manual work through intelligent automation",
        features: [
          "Workflow automation",
          "Document processing",
          "Data entry automation",
          "Quality control systems",
          "Reporting automation",
        ],
      },
      {
        name: "Data Analysis & Optimization",
        description: "Transform your data into actionable insights for better decision making",
        features: [
          "Predictive analytics",
          "Performance dashboards",
          "Trend analysis",
          "Optimization recommendations",
          "Real-time monitoring",
        ],
      },
      {
        name: "GDPR Compliance Solutions",
        description: "Ensure your AI implementations meet UK and EU data protection requirements",
        features: [
          "Compliance auditing",
          "Data protection frameworks",
          "Privacy by design",
          "Documentation systems",
          "Staff training",
        ],
      },
      {
        name: "AI Implementation Training",
        description: "Comprehensive training programs to get your team up to speed with new AI systems",
        features: [
          "Hands-on workshops",
          "User documentation",
          "Best practices training",
          "Ongoing support",
          "Performance monitoring",
        ],
      },
    ],
    caseStudies: [
      {
        title: "Transport Manager AI",
        industry: "Logistics & Supply Chain",
        description: "AI-powered route optimization and fleet management system for a UK logistics company",
        results:
          "40% reduction in fuel costs, 25% improvement in delivery times, 60% reduction in manual planning time",
      },
      {
        title: "Customer Service Agent",
        industry: "Customer Support",
        description: "24/7 AI customer service agent handling inquiries and support tickets",
        results:
          "85% reduction in response time, 70% of queries resolved automatically, 95% customer satisfaction rate",
      },
      {
        title: "Sustainability Compliance Assistant",
        industry: "Environmental Compliance",
        description: "AI system for tracking and reporting environmental compliance metrics",
        results:
          "35% reduction in carbon footprint, 90% automation of compliance reporting, 100% regulatory compliance maintained",
      },
      {
        title: "Recruitment Candidate Matching",
        industry: "HR & Recruitment",
        description: "AI-powered candidate screening and matching system for recruitment agencies",
        results:
          "50% reduction in screening time, 80% improvement in candidate-role matching accuracy, 30% increase in successful placements",
      },
    ],
    pages: [
      {
        title: "Home",
        path: "/",
        description: "Main landing page showcasing Nuvaru's AI transformation services",
      },
      {
        title: "Services",
        path: "/services",
        description: "Complete overview of all AI services offered",
      },
      {
        title: "AI Readiness Assessment",
        path: "/services/ai-readiness-assessment",
        description: "Detailed information about our AI readiness evaluation service",
      },
      {
        title: "Custom AI Solutions",
        path: "/services/custom-ai-solutions",
        description: "Bespoke AI development and implementation services",
      },
      {
        title: "Process Automation",
        path: "/services/process-automation",
        description: "Business process automation and optimization services",
      },
      {
        title: "Data Analysis & Optimization",
        path: "/services/data-analysis-optimization",
        description: "Data analytics and business intelligence services",
      },
      {
        title: "GDPR Compliance Solutions",
        path: "/services/gdpr-compliance-solutions",
        description: "Data protection and compliance services for AI implementations",
      },
      {
        title: "AI Implementation Training",
        path: "/services/ai-implementation-training",
        description: "Training and support for AI system adoption",
      },
      {
        title: "Case Studies",
        path: "/case-studies",
        description: "Real-world examples of successful AI implementations",
      },
      {
        title: "Book Consultation",
        path: "/book-consultation",
        description: "Schedule a free 30-minute consultation with our AI experts",
      },
      {
        title: "CTO Services",
        path: "/cto-services",
        description: "Fractional CTO and technical leadership services",
      },
      {
        title: "Chat with AI",
        path: "/chat",
        description: "Interactive AI assistant to answer questions about our services",
      },
    ],
  }
}
