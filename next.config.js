/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: `${process.env.NEXT_PUBLIC_API_BASE_URL}/${process.env.NEXT_PUBLIC_API_VERSION}`,
        port: '',
        pathname: '/image-by-path**',
      },
    ],
    domains: ['157.245.204.196', 'picsum.photos', 'img.freepik.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/proxy/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/${process.env.NEXT_PUBLIC_API_VERSION}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
