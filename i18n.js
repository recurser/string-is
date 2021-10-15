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
    '/about': [...common, 'pages-about'],
    '/contact': [...common, 'pages-contact'],
    '/privacy': [...common, 'pages-privacy'],
    '/security': [...common, 'pages-security'],
    '/terms': [...common, 'pages-terms'],
  },
}
