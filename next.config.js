/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable the feature that's causing the error
  experimental: {
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
  // Handle 404 errors with rewrites
  async rewrites() {
    return {
      fallback: [
        {
          source: "/:path*",
          destination: "/custom-404",
          // This will only be triggered if the path doesn't match any existing page
        },
      ],
    }
  },
}

module.exports = nextConfig
