const common = ['common', 'layout-footer', 'layout-header']

module.exports = {
  defaultLocale: 'en',
  locales: ['en'],
  pages: {
    '/': [...common, 'pages-convert'],
    '/about': [...common, 'pages-about'],
    '/privacy': [...common, 'pages-privacy'],
    '/security': [...common, 'pages-security'],
    '/terms': [...common, 'pages-terms'],
  },
}
