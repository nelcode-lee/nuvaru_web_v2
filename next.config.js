/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove the static export configuration
  // output: "export",
  // distDir: "out",

  // Keep these settings
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Remove trailingSlash
  // trailingSlash: true,
}

module.exports = nextConfig
