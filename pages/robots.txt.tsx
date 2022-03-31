import { GetServerSideProps } from 'next'

import { BaseUrl } from '@lib/utilities/Constants'

/**
 * Placeholder - getServerSideProps() does all of the magic.
 */
// eslint-disable-next-line import/no-default-export
export default function RobotsTxt() {
  return null
}

/**
 * Build a list of page paths, by combining the static ones we
 * know about, with a list of the dynamic converters.
 */

/**
 * Generates a robots.txt file.
 *
 * @param context - The request context.
 */
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const content = `User-agent: *
Allow: /

Sitemap: ${BaseUrl}/sitemap.xml
`

  res.setHeader('Content-Type', 'text/plain')
  res.write(content)
  res.end()

  return { props: {} }
}
