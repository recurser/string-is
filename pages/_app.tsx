import type { ReactElement, ReactNode } from 'react'
import type { AppProps } from 'next/app'
import type { NextPage } from 'next'

/**
 * See https://nextjs.org/docs/basic-features/layouts#with-typescript
 */
type NextPageWithLayout = NextPage & {
  /**
   * Returns the page-specific layout component.
   */
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  /**
   * The page component that will be rendered.
   */
  Component: NextPageWithLayout
}

/**
 * This is the standard Next JS global application page, altered
 * to allow page-specific layouts.
 *
 * @param props - Contains the page component that will be rendered, and the props to pass to the page.
 */
function StringIs({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<Component {...pageProps} />)
}

export default StringIs // eslint-disable-line import/no-default-export
