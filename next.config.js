/* eslint-disable @typescript-eslint/no-var-requires */

// next.config.js
const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin("./next-intl.config.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withNextIntl(nextConfig);
