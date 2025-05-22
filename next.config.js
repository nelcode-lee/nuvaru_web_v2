/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable automatic static optimization for problematic routes
  experimental: {
    // This will force the 404 page to be generated at runtime
    missingSuspenseWithCSRBailout: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Add custom 404 page handling
  async redirects() {
    return [
      // Redirect any non-existent routes to a custom static 404 page
      {
        source: "/_not-found",
        destination: "/custom-404",
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
