/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "img.clerk.com",
          },
          {
            protocol: "https",
            hostname: "images.clerk.dev",
          },
          {
            protocol: "https",
            hostname: "www.jambase.com",
          },
          {
            protocol: "https",
            hostname: "kprofiles.com",
          },
          {
            protocol: "https",
            hostname: "**",
          }
        ],
      },
      experimental: {
        serverActions: true,
      },
}

module.exports = nextConfig
