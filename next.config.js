/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: false } // laisse à false pour garder la sécurité
};
module.exports = nextConfig;
