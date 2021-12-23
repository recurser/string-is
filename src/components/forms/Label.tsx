import { majorScale, minorScale, Pane, PaneProps, Text } from 'evergreen-ui'
import { PropsWithChildren } from 'react'
import styledComponents from 'styled-components'

import { theme } from '@services/Theme'

interface Props extends PaneProps {
  disabled?: boolean
  inputId: string
  label?: string
  suffix?: string
}

const Wrapper = styledComponents(Pane)`
  /* labels in forms are checkbox wrappers. */
  label {
    margin: 0;
  }
`

export const Label = ({
  children,
  disabled,
  inputId,
  label,
  suffix,
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
      <Text color={labelColor} width={majorScale(15)}>
        <label htmlFor={inputId}>{label || ' '}</label>
      </Text>

      {children}

      {suffix && <Text color={labelColor}>&nbsp;{suffix}</Text>}
    </Wrapper>
  )
}
