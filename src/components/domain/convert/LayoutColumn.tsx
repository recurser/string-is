import { Label, Pane, majorScale } from 'evergreen-ui'
import { PropsWithChildren } from 'react'

import { theme } from '@services/Theme'
import { useBreakpoints } from '@services/Responsive'

// Used to calculate a height for the textarea to fill the content.
const TextAreaLineHeight = 17

interface Props {
  /**
   * True if the form inputs in this column should be disabled, false or undefined otherwise.
   */
  disabled?: boolean

  /**
   * The ID of an input element that the column label should focus on-click.
   */
  htmlFor?: string

  /**
   * The input string provided by the user, which is used to calculate
   * an appropriate height for the column dynamically.
   */
  inputString?: string

  /**
   * An optional label to display at the top of the column.
   */
  label?: string

  /**
   * The output string after conversion.
   */
  outputString?: string
}

/**
 * Renders a standard flexbox column which can grow and shrink to accomodate
 * input and output text height.
 *
 * @param props - The component props.
 */
export const LayoutColumn = ({
  children,
  disabled,
  htmlFor,
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
      {label ? (
        <Label
          color={labelColor}
          fontWeight="bold"
          htmlFor={htmlFor}
          lineHeight={`${majorScale(3)}px`}
          marginBottom={majorScale(1)}
          role="label"
          style={style}
        >
          {label}
        </Label>
      ) : null}
      {!label && !isMobile && <Label>&nbsp;</Label>}
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
