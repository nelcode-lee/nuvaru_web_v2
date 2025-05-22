export function OrganizationStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nuvaru",
    url: "https://nuvaru.co.uk", // Replace with your actual domain
    logo: "https://nuvaru.co.uk/ai-logo.png", // Replace with your actual domain
    description:
      "AI transformation consultancy helping UK businesses leverage technology to drive efficiency and optimize growth.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hull",
      addressRegion: "East Yorkshire",
      addressCountry: "UK",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@nuvaru.co.uk",
      contactType: "customer service",
    },
    sameAs: ["https://www.linkedin.com/company/nuvaru", "https://twitter.com/nuvaru", "https://facebook.com/nuvaru"],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
