// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://media.abhishekdhuparfilms.com',
      },
    ],
  },
};

export default nextConfig;