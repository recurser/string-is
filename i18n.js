const common = ['common', 'layout-footer', 'layout-header']

module.exports = {
  defaultLocale: 'en',
  locales: ['en'],
  pages: {
    '/': [
      ...common,
      'domain-convert-converterSelector',
      'domain-convert-inputForm',
      'domain-convert-outputForm',
      'domain-convert-outputs-csvOutput',
      'domain-convert-outputs-datetimeOutput',
      'domain-convert-outputs-htmlOutput',
      'domain-convert-outputs-jsonOutput',
      'domain-convert-outputs-shaOutput',
      'domain-convert-outputs-yamlOutput',
      'lib-converters-commands',
      'lib-converters-results',
      'pages-convert',
    ],
    '/404': [...common, 'pages-errors-notFound'],
    '/about': [...common, 'pages-about'],
    '/privacy': [...common, 'pages-privacy'],
    '/security': [...common, 'pages-security'],
    '/terms': [...common, 'pages-terms'],
  },
}
