// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        pathname: '/**',
      },
         {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
         {
        protocol: 'https',
        hostname: 'pravatar.cc',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig