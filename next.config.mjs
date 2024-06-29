/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard/aboutme",
        permanent: true,
      },
      {
        source: "/dashboard",
        destination: "/dashboard/aboutme",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
