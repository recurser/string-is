import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

import { GlobalStyle } from '@components/utility/GlobalStyle'

class TeamServerDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(
              <>
                <GlobalStyle />
                <App {...props} />
              </>,
            ),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render(): React.ReactElement {
    return (
      <Html>
        <Head>
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
          <meta
            content="/favicons/browserconfig.xml"
            name="msapplication-config"
          />
          <meta content="#ffffff" name="theme-color" />

          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans:400,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// tslint:disable export-name
export default TeamServerDocument // eslint-disable-line import/no-default-export
