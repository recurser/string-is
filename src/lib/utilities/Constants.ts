import { isEmpty } from 'lodash'

/**
 * Decide what domain we want to use for sitemaps / robots.txt etc.
 */
export const BaseUrl = isEmpty(process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN)
  ? 'http://localhost:3000'
  : `https://${process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN}`

// Breakpoints.
export const MOBILE = 768
export const TABLET = 992
export const DESKTOP = 1400
