import { createGlobalStyle } from 'styled-components'
import { extractStyles } from 'evergreen-ui'

import { MOBILE } from '@services/Responsive'
import { theme } from '@services/Theme'

const { css: evergreen } = extractStyles()

/**
 * Returns a global style object, suitable for use in the main
 * StringIsDocument component for embedding Evergreen UI styles.
 */
export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.colors.gray50};
  }

  @media only screen and (max-width: ${MOBILE}px) {
    body {
      background-color: transparent;
    }
  }
  ${evergreen}
`
