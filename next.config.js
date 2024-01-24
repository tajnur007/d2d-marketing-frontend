/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos', 'img.freepik.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/proxy/:path*',
        destination: `https://${process.env.API_BASE_URL}/${process.env.API_VERSION}/:path*`,
      },
    ];
  },
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    API_VERSION: process.env.API_VERSION,
  },
};

module.exports = nextConfig;
