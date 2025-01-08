// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
};

export default nextConfig;
