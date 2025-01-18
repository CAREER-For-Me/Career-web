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
    domains: ["avatars.githubusercontent.com", "lh3.googleusercontent.com"],
  },
  eslint: {
    // ESLint 오류를 무시. for 배포
    ignoreDuringBuilds: true,
  },
  //타입스크립트 에러 무시
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
