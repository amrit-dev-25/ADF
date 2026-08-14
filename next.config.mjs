// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-1677d55d7df14ebc89ad2b893563a0d8.r2.dev',
      },
    ],
  },
};

export default nextConfig;