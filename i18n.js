const common = ['common', 'layout-footer', 'layout-header']

module.exports = {
  defaultLocale: 'en',
  locales: ['en'],
  pages: {
    '/': [...common, 'domain-convert-form', 'pages-convert'],
    '/about': [...common, 'pages-about'],
    '/contact': [...common, 'pages-contact'],
    '/privacy': [...common, 'pages-privacy'],
    '/security': [...common, 'pages-security'],
    '/terms': [...common, 'pages-terms'],
  },
}
