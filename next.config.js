/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

// next.config.js
module.exports = {
  distDir: 'build',
  images: {
    domains: ['th.bing.com', 'metropolitanhost.com', 'primehostingindia.com'],
    formats: ['image/avif', 'image/webp'],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}