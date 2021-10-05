import { extractStyles } from 'evergreen-ui'
import { createGlobalStyle } from 'styled-components'

import { MOBILE } from '@services/Responsive'
import { theme } from '@services/Theme'

const { css: evergreen } = extractStyles()

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
