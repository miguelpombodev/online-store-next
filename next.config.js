/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["static.netshoes.com.br", "static.zattini.com.br"],
  },
};

module.exports = nextConfig;
