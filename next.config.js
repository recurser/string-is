/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate')

const dev = process.env.NODE_ENV !== 'production'
const scriptSrc = dev ? "'self' 'unsafe-inline' 'unsafe-eval'" : "'self'"
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
      `connect-src 'self' https://vitals.vercel-insights.com; ` +
      `default-src 'none'; ` +
      `font-src 'self'; ` +
      `form-action 'self'; ` +
      `frame-ancestors 'self'; ` +
      `img-src 'self' data: ; ` +
      `manifest-src 'self'; ` +
      `prefetch-src 'self'; ` +
      `script-src ${scriptSrc}; ` +
      `script-src-elem ${scriptSrc}; ` +
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
