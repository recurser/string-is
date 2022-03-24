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
import { styled } from '@compiled/react'

import { MOBILE } from '@services/Breakpoints'
import { theme } from '@services/Theme'

/**
 * Add some global styles by styling Head → body (global
 * styles are not supported by 'compiled' yet).
 */
export const StyledHtml = styled(Html)`
  body {
    background-color: ${theme.colors.gray50};
  }

  @media only screen and (max-width: ${MOBILE}px) {
    body {
      background-color: transparent;
    }
  }
`

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
      <StyledHtml>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </Head>

        <body>
          <Main />
          {hydrationScript}
          <NextScript />
        </body>
      </StyledHtml>
    )
  }
}
