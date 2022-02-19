/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate')

const dev = process.env.NODE_ENV !== 'production'
const plausible = 'https://plausible.io'
const connectSrc = dev
  ? `'self' ${plausible} ws://localhost:3000`
  : `'self' ${plausible}`
const scriptSrc = dev
  ? `'self' 'unsafe-inline' 'unsafe-eval' ${plausible}`
  : `'self' 'unsafe-eval' ${plausible}`

const cspHeaders = [
  {
    key: 'Access-Control-Allow-Origin',
    value:
      'https://string.test https://staging.string.is https://www.string.is',
  },
  {
    key: 'Content-Security-Policy',
    value:
      `base-uri 'none'; ` +
      `connect-src ${connectSrc}; ` +
      `default-src 'none'; ` +
      `font-src 'none'; ` +
      `form-action 'none'; ` +
      `frame-ancestors 'none'; ` +
      `img-src 'self'; ` +
      `manifest-src 'self'; ` +
      `prefetch-src 'self'; ` +
      `script-src ${scriptSrc}; ` +
      `script-src-elem ${scriptSrc} ${plausible}; ` +
      `style-src 'self' 'unsafe-inline';`,
  },
  {
    key: 'Permissions-Policy',
    value:
      'autoplay=(), camera=(), fullscreen=(self), geolocation=(), microphone=(), payment=(), usb=()',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=15768000; includeSubDomains',
  },
  {
    key: 'Referrer-Policy',
    value: 'same-origin',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Download-Options',
    value: 'noopen',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Permitted-Cross-Domain-Policies',
    value: 'none',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
]

const headers = async () => {
  return [
    {
      headers: cspHeaders,
      source: '/',
    },
    {
      headers: cspHeaders,
      source: '/(.*?)',
    },
    {
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=600, must-revalidate',
        },
      ],
      source: '/:all*(svg|jpg|png)',
    },
  ]
}

module.exports = nextTranslate({
  env: {
    CONTACT_EMAIL: 'hello@daveperrett.com',
  },
  headers,
  reactStrictMode: true,
  webpack: (config, { isServer, webpack }) => {
    return config
  },
})
