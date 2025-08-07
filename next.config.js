/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // 👈 esto desactiva la optimización automática
  },
};

module.exports = nextConfig;
