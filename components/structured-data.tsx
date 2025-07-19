export function OrganizationStructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nuvaru",
    url: "https://www.nuvaru.co.uk",
    logo: "https://www.nuvaru.co.uk/nuvaru-logo.png",
    description:
      "AI transformation consultancy helping UK businesses leverage technology to drive efficiency and optimize growth.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hull",
      addressRegion: "East Yorkshire",
      addressCountry: "UK",
    },
    contactPoint: [
      {
      "@type": "ContactPoint",
      email: "info@nuvaru.co.uk",
      contactType: "customer service",
        availableLanguage: "English"
    },
      {
        "@type": "ContactPoint",
        telephone: "+44-7741-654145",
        contactType: "customer service",
        availableLanguage: "English"
      }
    ],
    sameAs: [
      "https://www.linkedin.com/company/nuvaru", 
      "https://twitter.com/nuvaru", 
      "https://facebook.com/nuvaru"
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI and Web Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Readiness Assessment",
            description: "Evaluate your company's data infrastructure and identify AI opportunities"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom AI Solution Development",
            description: "Tailored AI tools designed specifically for your business needs"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Process Automation",
            description: "Streamline operations with AI-powered automation"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Data Analysis & Optimization",
            description: "Extract actionable insights from your business data"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "GDPR Compliance Solutions",
            description: "AI-powered data protection tools for UK and EU regulations"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website Development",
            description: "Professional websites built with modern technologies"
          }
        }
      ]
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom"
    },
    serviceArea: {
      "@type": "Place",
      name: "Hull, East Yorkshire, UK"
    }
  }

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nuvaru - AI Solutions & Consulting",
    url: "https://www.nuvaru.co.uk",
    description: "Transform your business with agentic AI solutions. Custom AI development, process automation, and data optimization services.",
    publisher: {
      "@type": "Organization",
      name: "Nuvaru"
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.nuvaru.co.uk/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }} />
    </>
  )
}
