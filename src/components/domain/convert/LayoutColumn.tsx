import { Pane, Paragraph, majorScale } from 'evergreen-ui'
import { PropsWithChildren } from 'react'

import { theme } from '@services/Theme'
import { useBreakpoints } from '@services/Responsive'

// Used to calculate a height for the textarea to fill the content.
const TextAreaLineHeight = 17

interface Props {
  disabled?: boolean
  inputString?: string
  label?: string
  outputString?: string
}
export const LayoutColumn = ({
  children,
  disabled,
  inputString,
  label,
  outputString,
}: PropsWithChildren<Props>) => {
  const { isMobile } = useBreakpoints()
  const labelColor = disabled ? theme.colors.gray500 : undefined
  const style = disabled ? { filter: 'grayscale(100%)' } : undefined
  const inputHeight = inputString
    ? inputString.split('\n').length * TextAreaLineHeight
    : undefined
  const outputHeight = outputString
    ? outputString.split('\n').length * TextAreaLineHeight
    : undefined
  const height =
    inputHeight || outputHeight
      ? Math.max(inputHeight || 0, outputHeight || 0)
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
          fontWeight="bold"
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
