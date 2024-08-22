/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  generateBuildId: async () => {
    // You can, for example, get the latest git commit hash here
    return process.env.NEXT_PUBLIC_BUILD_ID;
  },
};

export default nextConfig;
