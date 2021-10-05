/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate')

module.exports = nextTranslate({
  reactStrictMode: true,
  webpack: (config, { isServer, webpack }) => {
    return config
  },
})
