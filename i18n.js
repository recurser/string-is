const common = ['common', 'layout-footer', 'layout-header']

const convert = [
  ...common,
  'domain-convert-converterSelector',
  'domain-convert-inputForm',
  'domain-convert-outputForm',
  'domain-convert-outputs-csvOutput',
  'domain-convert-outputs-jsonOutput',
  'lib-converters-commands',
  'lib-converters-results',
  'pages-convert',
]

module.exports = {
  defaultLocale: 'en',
  locales: ['en'],
  pages: {
    '/': convert,
    '/404': [...common, 'pages-errors-notFound'],
    '/[input]': convert,
    '/about': [...common, 'pages-about'],
    '/privacy': [...common, 'pages-privacy'],
    '/security': [...common, 'pages-security'],
    '/terms': [...common, 'pages-terms'],
  },
}
