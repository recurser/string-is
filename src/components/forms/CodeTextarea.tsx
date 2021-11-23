import { majorScale, Textarea } from 'evergreen-ui'
import styledComponents from 'styled-components'

import { theme } from '@services/Theme'

export const CodeTextarea = styledComponents(Textarea)`
  font-family: ${theme.fontFamilies.mono} !important;
`

CodeTextarea.defaultProps = {
  minHeight: majorScale(20),
}
