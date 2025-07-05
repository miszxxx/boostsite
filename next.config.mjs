/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure headers for better caching
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=300, stale-while-revalidate=600',
          },
        ],
      },
    ];
  },

  // Environment variables validation
  env: {
    SELLAPP_API_KEY: process.env.SELLAPP_API_KEY,
    NEXT_PUBLIC_SELLAPP_STORE_ID: process.env.NEXT_PUBLIC_SELLAPP_STORE_ID,
  },

  // Disable strict mode to prevent hydration issues
  reactStrictMode: false,

  // Configure external packages for server components
  serverExternalPackages: ['mongodb'],

  // Optimize images
  images: {
    domains: ['sell.app'],
    formats: ['image/webp', 'image/avif'],
  },

  // Compress responses
  compress: true,

  // Enable SWC minification
  swcMinify: true,

  // Configure TypeScript
  typescript: {
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: false,
  },

  // Configure ESLint
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;