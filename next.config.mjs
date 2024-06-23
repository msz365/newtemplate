/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'unsplash.com',
            port: '',
            
          },
          {
            protocol: 'https',
            hostname: 'eu-west-2.graphassets.com',
            port: '',
            
          },
        ],
      },
};

export default nextConfig;
