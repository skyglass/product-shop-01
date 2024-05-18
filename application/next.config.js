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
  env: {
    DB_URI: process.env.DB_URI,
    API: process.env.API,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
    STRIPE_API_KEY: process.env.STRIPE_API_KEY,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    DOMAIN: process.env.DOMAIN,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
    STRIPE_TAX_RATE: process.env.STRIPE_TAX_RATE,
    STRIPE_SHIPPING_RATE: process.env.STRIPE_SHIPPING_RATE,
  },
};

module.exports = nextConfig;
