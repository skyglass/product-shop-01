/** @type {import('next').NextConfig} */

/**
 * nextjs typescript stripe webhook example
 * https://github.dev/shadcn-ui/taxonomy/tree/main
 */

const nextConfig = {
  swcMinify: false,
  serverRuntimeConfig: {
    // timeout: 120000, // 2 minutes (adjust as needed)
    timeout: 30000, // 30 sec
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

module.exports = nextConfig;
