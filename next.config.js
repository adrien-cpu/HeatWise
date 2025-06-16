const nextIntl = require('next-intl/plugin');

// Wrap the config with the next-intl plugin
// The path now points to the consolidated i18n configuration file.
const withNextIntl = nextIntl('./src/i18n/settings.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
    // ...other configurations
};

module.exports = withNextIntl(nextConfig); 