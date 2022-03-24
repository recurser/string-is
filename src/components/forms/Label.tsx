import { Pane, PaneProps, Text, majorScale, minorScale } from 'evergreen-ui'
import { PropsWithChildren } from 'react'
import { styled } from '@compiled/react'

import { theme } from '@services/Theme'

interface Props extends PaneProps {
  /**
   * True if this label should be displayed as disabled, false or undefined otherwise.
   */
  disabled?: boolean

  /**
   * Contains the ID of the input element that this label is related to.
   */
  htmlFor: string

  /**
   * An optional label string. If this is not provided we will still output
   * an empty label for layout purposes.
   */
  label?: string

  /**
   * A suffix string to display after any input elements.
   */
  suffix?: string

  /**
   * An optional width (in pixels) for the label, if the standard width
   * is not appropriate.
   */
  width?: string | number
}

const Wrapper = styled(Pane)`
  /* labels in forms are checkbox wrappers. */
  label {
    margin: 0;
  }
`

/**
 * Renders a label with standard layout and styling, whichcan have input
 * elements embedded inside as child components.
 *
 * @param props - the component props.
 */
export const Label = ({
  children,
  disabled,
  htmlFor,
  label,
  suffix,
  width,
  ...props
}: PropsWithChildren<Props>) => {
  const labelColor = disabled ? theme.colors.gray500 : undefined

  return (
    <Wrapper
      alignItems="center"
      display="flex"
      flexDirection="row"
      marginBottom={minorScale(2)}
      {...props}
    >
      <Text color={labelColor} width={width || majorScale(15)}>
        <label htmlFor={htmlFor}>{label || ' '}</label>
      </Text>

      {children}

      {suffix && <Text color={labelColor}>&nbsp;{suffix}</Text>}
    </Wrapper>
  )
}
