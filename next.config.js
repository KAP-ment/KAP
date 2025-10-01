/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [],
    formats: ['image/avif', 'image/webp']
  },
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig
