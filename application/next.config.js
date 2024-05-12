/** @type {import('next').NextConfig} */
const config = require("./config");

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
    DB_URI: config.DB_URI,
    API: config.API,
    NEXTAUTH_SECRET: config.NEXTAUTH_SECRET,
    GOOGLE_CLIENT_ID: config.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: config.GOOGLE_CLIENT_SECRET,
    CLOUDINARY_CLOUD_NAME: config.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY: config.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: config.CLOUDINARY_API_SECRET,
    STRIPE_API_KEY: config.STRIPE_API_KEY,
    STRIPE_SECRET_KEY: config.STRIPE_SECRET_KEY,
    DOMAIN: config.DOMAIN,
    NEXTAUTH_URL: config.NEXTAUTH_URL,
    STRIPE_WEBHOOK_SECRET: config.STRIPE_WEBHOOK_SECRET,
    STRIPE_TAX_RATE: config.STRIPE_TAX_RATE,
    STRIPE_SHIPPING_RATE: config.STRIPE_SHIPPING_RATE,
    SENDGRID_API_KEY: config.SENDGRID_API_KEY,
    GMAIL_AUTH_USER: config.GMAIL_AUTH_USER,
    GMAIL_AUTH_PASS: config.GMAIL_AUTH_PASS,
  },
};

module.exports = nextConfig;
