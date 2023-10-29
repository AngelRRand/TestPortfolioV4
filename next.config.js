const path = require('path');

const nextConfig = {
    webpack: (config, {isServer}) => {
        config.resolve.alias['@create_character'] = path.resolve(__dirname, 'public/assets/create_character');
        config.resolve.alias['@home'] = path.resolve(__dirname, 'public/assets/home');

        return config;
    },
};

module.exports = nextConfig;
