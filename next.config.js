/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: process.env.API_URL + "/:path*",
      },
    ];
  },
  images: {
    domains: ["ipfs-2.thirdwebcdn.com", "http://localhost:3000/"],
  },
};

module.exports = nextConfig;
