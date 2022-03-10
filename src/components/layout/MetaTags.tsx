import Head from 'next/head'
import { ReactElement } from 'react'
import useTranslation from 'next-translate/useTranslation'

interface Props {
  /**
   * The meta description of the page.
   */
  description?: string

  /**
   * The top-level title of the page.
   */
  title?: string
}

/**
 * Renders the default meta tags. These can be over-ridden on a per-page basis.
 */
export const MetaTags = ({
  description: optionalDescription,
  title: optionalTitle,
}: Props): ReactElement => {
  const { t } = useTranslation('common')

  const titleTag = optionalTitle
    ? `${optionalTitle}${t('page_title_suffix')}`
    : `${t('page_title')}${t('page_title_suffix')}`
  const title = optionalTitle ? optionalTitle : t('page_title')
  const description = optionalDescription
    ? optionalDescription
    : t('meta_description')

  return (
    <Head>
      <title>{titleTag}</title>
      <meta charSet="utf-8" />
      <meta content={description} name="description" />
      <meta content={title} key="title" property="og:title" />
      <meta content={description} property="og:description" />
      <meta
        content="https://string.is/images/twitter-card.png"
        property="og:image"
      />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content="@davemetrics" name="twitter:creator" />
      <meta content="@string__is" name="twitter:site" />
      <meta content={title} name="twitter:title" />)
      <meta content={description} name="twitter:description" />
      <meta
        content="https://string.is/images/twitter-card.png"
        name="twitter:image"
      />
      <link
        href="/favicons/apple-touch-icon.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link
        href="/favicons/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href="/favicons/favicon-16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
      <link href="/favicons/site.webmanifest" rel="manifest" />
      <link
        color="#45b980"
        href="/favicons/safari-pinned-tab.svg"
        rel="mask-icon"
      />
      <link href="/favicons/favicon.ico" rel="shortcut icon" />
      <meta content="#45b980" name="msapplication-TileColor" />
      <meta content="/favicons/browserconfig.xml" name="msapplication-config" />
      <meta content="#ffffff" name="theme-color" />
    </Head>
  )
}
