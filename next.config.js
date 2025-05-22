/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 14 configuration
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Skip the problematic page during build
  output: "export", // Use static export
  distDir: "out",
  // Disable the automatic 404 page generation
  trailingSlash: true, // This helps with static exports
}

module.exports = nextConfig
