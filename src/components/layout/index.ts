import dynamic, { DynamicOptions } from 'next/dynamic'
import { PropsWithChildren } from 'react'

export * from '@components/layout/Card'
export * from '@components/layout/Footer'
export * from '@components/layout/Header'
export * from '@components/layout/MetaTags'

/**
 * This is the main Application layout.
 *
 * We load this dynamically to avoid flash-of-unstyled-content.
 *
 * I've discovered that some of the styles (such as font sizes)
 * don't appear on the first page load. If you change route and
 * come back, then they appear (on development - they never
 * appear on production). I believe this is something to do with
 * Evergreen UI's 'hydrationScript', but couldn't get to the
 * bottom of it.
 */
export const Application = dynamic(
  (() =>
    import('./Application').then((mod) => mod.Application)) as DynamicOptions<
    PropsWithChildren<Record<string, unknown>>
  >,
  { ssr: false },
)
