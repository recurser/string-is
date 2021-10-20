const common = ['common', 'layout-footer', 'layout-header']

module.exports = {
  defaultLocale: 'en',
  locales: ['en'],
  pages: {
    '/': [
      ...common,
      'domain-convert-inputForm',
      'domain-convert-outputForm',
      'domain-convert-outputSelector',
      'lib-outputs-commands',
      'lib-outputs-results',
      'pages-convert',
    ],
    '/404': [...common, 'pages-errors-notFound'],
    '/about': [...common, 'pages-about'],
    '/privacy': [...common, 'pages-privacy'],
    '/security': [...common, 'pages-security'],
    '/terms': [...common, 'pages-terms'],
  },
}
