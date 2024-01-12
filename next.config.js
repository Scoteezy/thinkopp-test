/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "celes.club",
            port: ""
        }]
    }
}

module.exports = nextConfig
