import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import React from 'react'
import { extractStyles } from 'evergreen-ui'

interface Props extends DocumentInitialProps {
  css: string
  hydrationScript: JSX.Element
}

// eslint-disable-next-line import/no-default-export
export default class StringIsDocument extends Document<Props> {
  static async getInitialProps({ renderPage }: DocumentContext) {
    const page = renderPage()
    const { css, hydrationScript } = extractStyles()

    return {
      ...page,
      css,
      hydrationScript,
    }
  }

  render() {
    const { css, hydrationScript } = this.props

    return (
      <Html>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </Head>

        <body>
          <Main />
          {hydrationScript}
          <NextScript />
        </body>
      </Html>
    )
  }
}
