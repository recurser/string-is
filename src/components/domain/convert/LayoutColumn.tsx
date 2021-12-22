import { majorScale, Pane, Paragraph } from 'evergreen-ui'
import { PropsWithChildren } from 'react'

import { useBreakpoints } from '@services/Responsive'
import { theme } from '@services/Theme'

// Used to calculate a height for the textarea to fill the content.
const TextAreaLineHeight = 17

interface Props {
  disabled?: boolean
  inputString?: string
  label?: string
}
export const LayoutColumn = ({
  children,
  disabled,
  inputString,
  label,
}: PropsWithChildren<Props>) => {
  const { isMobile } = useBreakpoints()
  const labelColor = disabled ? theme.colors.gray500 : undefined
  const style = disabled ? { filter: 'grayscale(100%)' } : undefined
  const height = inputString
    ? inputString.split('\n').length * TextAreaLineHeight
    : undefined

  return (
    <Pane
      display="flex"
      flexBasis={0}
      flexDirection="column"
      flexGrow={1}
      flexShrink={0}
      minWidth={0}
    >
      {label && (
        <Paragraph
          color={labelColor}
          marginBottom={majorScale(1)}
          role="label"
          style={style}
        >
          {label}
        </Paragraph>
      )}
      {!label && !isMobile && <Paragraph>&nbsp;</Paragraph>}
      <Pane
        display="flex"
        flex={1}
        flexDirection="column"
        height="100%"
        justifyContent="center"
        minHeight={isMobile ? undefined : `min(80vh, ${height}px)`}
      >
        {children}
      </Pane>
    </Pane>
  )
}

LayoutColumn.defaultProps = {
  disabled: false,
}
