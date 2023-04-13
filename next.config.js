/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["fakestoreapi.com"],
  },
  experimental: {
    appDir: true,
  },
};
