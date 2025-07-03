/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable experimental features for better performance
  experimental: {
    serverComponentsExternalPackages: [],
  },
  
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
};

export default nextConfig;