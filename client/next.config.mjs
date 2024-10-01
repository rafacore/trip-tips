/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cms.inspirato.com'],
    path: '',
    loader: 'imgix',
  },
};

export default nextConfig;
