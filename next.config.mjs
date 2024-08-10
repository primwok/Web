/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        // hostname: "medusa-public-images.s3.eu-west-1.amazonaws.com",
      },
      // {
      //   protocol: "https",
      //   hostname: "via.placeholder.com",
      // },
    ],
  },
};

export default nextConfig;
