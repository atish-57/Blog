/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'photos.google.com',
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com"
      },
      {
        protocol: 'https',
        hostname: '**',
      }
    ],
  },
};

module.exports = nextConfig;
