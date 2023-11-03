/** @type {import('next').NextConfig} */

module.exports = {
    env: {
        API_PORT: '3001',
        API_HOST: '127.0.0.1',
        API_URL: '/apiv0.1.0/',
    },

    trailingSlash: true,

    images: {
        unoptimized: true,
    },

    webpack: (config) => {
        return config
    },
}
