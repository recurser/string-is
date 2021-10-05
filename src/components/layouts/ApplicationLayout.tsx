import { Image, majorScale, Pane, Paragraph } from 'evergreen-ui'

import Logo from '@images/logo.svg'
import { theme } from '@services/Theme'

export const ApplicationLayout = ({ children }) => {
  return (
    <Pane>
      <Pane>
        <Image
          alt="Dev Toolbar Logo"
          borderRadius={theme.radii[1]}
          height={majorScale(5)}
          src={`${Logo.src}`}
          width={majorScale(5)}
        />
      </Pane>

      <Pane>{children}</Pane>

      <Paragraph>Footer</Paragraph>
    </Pane>
  )
}
