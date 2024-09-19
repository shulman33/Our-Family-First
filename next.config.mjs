/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/augll",
        destination: "/aug11",
        permanent: true, // triggers 308
      },
    ];
  },
};

export default nextConfig;
