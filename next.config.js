/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    webpack: (config, {isServer}) => {
        config.resolve.alias['@create_character'] = path.resolve(__dirname, 'public/assets/create_character');


        return config;
    },
};

module.exports = nextConfig
