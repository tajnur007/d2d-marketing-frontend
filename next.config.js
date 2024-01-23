/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos', 'img.freepik.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/proxy/:path*',
        destination: `${process.env.API_BASE_URL ?? '/api'}/:path*`, // Proxy to Backend
      },
    ];
  },
};

module.exports = nextConfig
