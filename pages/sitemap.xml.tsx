import { GetServerSideProps } from 'next'
import { kebabCase } from 'lodash'

import { BaseUrl } from '@lib/utilities/Constants'
import type { Converter } from '@lib/converters'
import { converters } from '@lib/utilities/Converters'

/**
 * Placeholder - getServerSideProps() does all of the magic.
 */
// eslint-disable-next-line import/no-default-export
export default function Sitemap() {
  return null
}

/**
 * Build a list of page paths, by combining the static ones we
 * know about, with a list of the dynamic converters.
 */
const staticPaths = ['', 'about', 'privacy', 'security', 'terms']
const converterPaths = converters
  .filter((cnv: Converter) => !cnv.isHidden)
  .map((cnv: Converter) => kebabCase(cnv.id))
  .map((id) => id.replace('java-script', 'javascript')) // Hyphenated looks non-standard.
  .map((id) => id.replace(/-(\d)/g, '$1')) // Replace eg. /md-5-encoder with /md5-encoder.
const allPaths = [...staticPaths, ...converterPaths].sort()

/**
 * Generates an XML sitemap.
 *
 * @param context - The request context.
 */
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPaths
    .map((path) => {
      return `<url>
    <loc>${BaseUrl}/${path}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
    `
    })
    .join('')}
</urlset>
`

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return { props: {} }
}
