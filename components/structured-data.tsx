export function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Nuvaru",
          url: "https://nuvaru.co.uk",
          logo: "https://nuvaru.co.uk/logo.png",
          sameAs: [
            "https://twitter.com/nuvaru",
            "https://www.linkedin.com/company/nuvaru",
            // Add other social profiles
          ],
          contactPoint: {
            "@type": "ContactPoint",
            email: "info@nuvaru.co.uk",
            contactType: "customer service",
            areaServed: "GB",
            availableLanguage: "English",
          },
          address: {
            "@type": "PostalAddress",
            addressCountry: "GB",
            addressLocality: "Hull", // Update with your actual location
            postalCode: "HU1 1AA", // Update with your actual postal code
          },
        }),
      }}
    />
  )
}

export function ServiceSchema({ service }: { service: any }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          provider: {
            "@type": "Organization",
            name: "Nuvaru",
          },
          description: service.description,
          serviceType: "AI Consultancy",
        }),
      }}
    />
  )
}
