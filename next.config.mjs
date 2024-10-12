/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "res.cloudinary.com",
            "utfs.io"
        ]
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://rainbow-fingers-admin.vercel.app/api/d129ed73-5537-4106-a631-eaa0102345dc/:path*', // Proxy to external API
            },
        ];
    },
};

export default nextConfig;
