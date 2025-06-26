export interface SiteContent {
  services: Array<{
    name: string
    description: string
    features: string[]
  }>
  caseStudies: Array<{
    title: string
    industry: string
    results: string[]
    description: string
  }>
  company: {
    name: string
    description: string
    location: string
    expertise: string[]
  }
}

export function getSiteContent(): SiteContent {
  return {
    services: [
      {
        name: "AI Readiness Assessment",
        description: "Comprehensive evaluation of your organization's readiness for AI implementation",
        features: [
          "Current state analysis",
          "AI opportunity identification",
          "Implementation roadmap",
          "ROI projections",
          "Risk assessment",
        ],
      },
      {
        name: "Custom AI Solutions",
        description: "Tailored AI applications designed specifically for your business needs",
        features: [
          "Machine learning models",
          "Natural language processing",
          "Computer vision systems",
          "Predictive analytics",
          "Process automation",
        ],
      },
      {
        name: "AI Implementation & Training",
        description: "End-to-end AI deployment with comprehensive team training",
        features: [
          "System integration",
          "Staff training programs",
          "Change management",
          "Performance monitoring",
          "Ongoing support",
        ],
      },
      {
        name: "GDPR Compliance Solutions",
        description: "Ensure your AI systems meet GDPR and data protection requirements",
        features: [
          "Privacy by design",
          "Data audit trails",
          "Consent management",
          "Right to explanation",
          "Compliance monitoring",
        ],
      },
      {
        name: "Process Automation",
        description: "Streamline operations with intelligent automation solutions",
        features: [
          "Workflow optimization",
          "Document processing",
          "Decision automation",
          "Integration services",
          "Performance analytics",
        ],
      },
      {
        name: "Data Analysis & Optimization",
        description: "Transform your data into actionable business insights",
        features: [
          "Data visualization",
          "Predictive modeling",
          "Performance metrics",
          "Trend analysis",
          "Optimization recommendations",
        ],
      },
      {
        name: "Website Development",
        description: "Modern, responsive websites built with cutting-edge technology",
        features: [
          "Responsive design",
          "SEO optimization",
          "Performance optimization",
          "Content management",
          "Analytics integration",
        ],
      },
      {
        name: "Web App Development",
        description: "Custom web applications tailored to your business requirements",
        features: [
          "Custom functionality",
          "User authentication",
          "Database integration",
          "API development",
          "Cloud deployment",
        ],
      },
      {
        name: "Web Portal Development",
        description: "Comprehensive portals for customer and employee engagement",
        features: [
          "User management",
          "Role-based access",
          "Document sharing",
          "Communication tools",
          "Reporting dashboards",
        ],
      },
    ],
    caseStudies: [
      {
        title: "Transport Manager AI",
        industry: "Logistics & Transportation",
        results: [
          "40% reduction in route planning time",
          "25% improvement in fuel efficiency",
          "60% faster compliance reporting",
          "Real-time fleet monitoring",
        ],
        description:
          "AI-powered transport management system for UK logistics company handling timber and freight operations",
      },
      {
        title: "Customer Service Agent",
        industry: "Customer Support",
        results: [
          "80% reduction in response time",
          "95% customer satisfaction rate",
          "24/7 availability",
          "Multi-language support",
        ],
        description: "Intelligent customer service chatbot providing instant support and query resolution",
      },
      {
        title: "Financial Analytics Platform",
        industry: "Finance",
        results: [
          "50% faster financial reporting",
          "99.9% accuracy in calculations",
          "Real-time risk assessment",
          "Automated compliance checks",
        ],
        description:
          "Advanced analytics platform for financial institutions with predictive modeling and risk assessment",
      },
      {
        title: "Recruitment Optimization System",
        industry: "Human Resources",
        results: [
          "70% reduction in screening time",
          "85% improvement in candidate matching",
          "Automated interview scheduling",
          "Bias-free selection process",
        ],
        description:
          "AI-driven recruitment platform streamlining the hiring process with intelligent candidate matching",
      },
    ],
    company: {
      name: "Nuvaru",
      description:
        "Leading AI consultancy specializing in custom solutions, implementation, and training for businesses across the UK",
      location: "Hull, UK",
      expertise: [
        "Artificial Intelligence",
        "Machine Learning",
        "Process Automation",
        "Data Analytics",
        "GDPR Compliance",
        "Web Development",
        "Digital Transformation",
      ],
    },
  }
}

export function getResponseForQuery(query: string): string {
  const content = getSiteContent()
  const lowerQuery = query.toLowerCase()

  // Service-specific responses
  if (lowerQuery.includes("ai readiness") || lowerQuery.includes("assessment")) {
    const service = content.services.find((s) => s.name.includes("AI Readiness"))
    return `Our AI Readiness Assessment helps you understand your organization's potential for AI implementation. We provide ${service?.features.join(", ")}. This comprehensive evaluation typically takes 2-3 weeks and includes a detailed roadmap for your AI journey.`
  }

  if (lowerQuery.includes("custom ai") || lowerQuery.includes("ai solution")) {
    const service = content.services.find((s) => s.name.includes("Custom AI"))
    return `We develop Custom AI Solutions tailored to your specific business needs. Our expertise includes ${service?.features.join(", ")}. Each solution is designed from the ground up to address your unique challenges and opportunities.`
  }

  if (lowerQuery.includes("gdpr") || lowerQuery.includes("compliance")) {
    const service = content.services.find((s) => s.name.includes("GDPR"))
    return `Our GDPR Compliance Solutions ensure your AI systems meet all data protection requirements. We implement ${service?.features.join(", ")} to keep your organization compliant and secure.`
  }

  if (lowerQuery.includes("training") || lowerQuery.includes("implementation")) {
    const service = content.services.find((s) => s.name.includes("Implementation"))
    return `Our AI Implementation & Training service provides end-to-end deployment support. We offer ${service?.features.join(", ")} to ensure successful adoption across your organization.`
  }

  if (lowerQuery.includes("automation") || lowerQuery.includes("process")) {
    const service = content.services.find((s) => s.name.includes("Process Automation"))
    return `Our Process Automation solutions streamline your operations with intelligent systems. We provide ${service?.features.join(", ")} to optimize your workflows and reduce manual tasks.`
  }

  if (lowerQuery.includes("data") || lowerQuery.includes("analytics")) {
    const service = content.services.find((s) => s.name.includes("Data Analysis"))
    return `Our Data Analysis & Optimization service transforms your data into actionable insights. We offer ${service?.features.join(", ")} to help you make data-driven decisions.`
  }

  if (lowerQuery.includes("website") || lowerQuery.includes("web development")) {
    const service = content.services.find((s) => s.name.includes("Website Development"))
    return `We create modern, responsive websites using cutting-edge technology. Our services include ${service?.features.join(", ")} to ensure your online presence is professional and effective.`
  }

  if (lowerQuery.includes("web app") || lowerQuery.includes("application")) {
    const service = content.services.find((s) => s.name.includes("Web App"))
    return `Our Web App Development service creates custom applications tailored to your business. We provide ${service?.features.join(", ")} to build powerful, scalable solutions.`
  }

  if (lowerQuery.includes("portal") || lowerQuery.includes("web portal")) {
    const service = content.services.find((s) => s.name.includes("Web Portal"))
    return `We develop comprehensive Web Portals for customer and employee engagement. Our solutions include ${service?.features.join(", ")} for seamless user experiences.`
  }

  // Case study responses
  if (lowerQuery.includes("transport") || lowerQuery.includes("logistics")) {
    const caseStudy = content.caseStudies.find((cs) => cs.title.includes("Transport"))
    return `Our Transport Manager AI case study shows impressive results: ${caseStudy?.results.join(", ")}. ${caseStudy?.description}`
  }

  if (lowerQuery.includes("customer service") || lowerQuery.includes("chatbot")) {
    const caseStudy = content.caseStudies.find((cs) => cs.title.includes("Customer Service"))
    return `Our Customer Service Agent achieved remarkable results: ${caseStudy?.results.join(", ")}. ${caseStudy?.description}`
  }

  if (lowerQuery.includes("finance") || lowerQuery.includes("financial")) {
    const caseStudy = content.caseStudies.find((cs) => cs.title.includes("Financial"))
    return `Our Financial Analytics Platform delivered significant improvements: ${caseStudy?.results.join(", ")}. ${caseStudy?.description}`
  }

  if (lowerQuery.includes("recruitment") || lowerQuery.includes("hiring")) {
    const caseStudy = content.caseStudies.find((cs) => cs.title.includes("Recruitment"))
    return `Our Recruitment Optimization System achieved outstanding results: ${caseStudy?.results.join(", ")}. ${caseStudy?.description}`
  }

  // Consultation and contact responses
  if (lowerQuery.includes("consultation") || lowerQuery.includes("book") || lowerQuery.includes("meeting")) {
    return `I'd be happy to help you book a consultation! You can schedule a free consultation through our booking form on the website, or contact us directly. During the consultation, we'll discuss your specific needs and how our AI solutions can benefit your business.`
  }

  if (lowerQuery.includes("contact") || lowerQuery.includes("get in touch")) {
    return `You can contact Nuvaru through our contact form on the website, or reach out directly for a consultation. We're based in Hull, UK, and work with businesses across the country to implement AI solutions.`
  }

  if (lowerQuery.includes("price") || lowerQuery.includes("cost") || lowerQuery.includes("pricing")) {
    return `Our pricing varies depending on the scope and complexity of your project. We offer competitive rates and can provide a detailed quote after understanding your specific requirements. Contact us for a free consultation and personalized pricing.`
  }

  // Company information
  if (lowerQuery.includes("about") || lowerQuery.includes("company") || lowerQuery.includes("nuvaru")) {
    return `${content.company.description} We're located in ${content.company.location} and specialize in ${content.company.expertise.join(", ")}. Our team has extensive experience helping businesses leverage AI for growth and efficiency.`
  }

  // General/default response
  return `Hello! I'm here to help you learn about Nuvaru's AI solutions and services. We specialize in AI readiness assessments, custom AI development, implementation training, GDPR compliance, process automation, and web development. We've helped businesses achieve significant improvements like 40% reduction in planning time and 80% faster response times. How can I assist you today?`
}
