import { majorScale, minorScale, Pane, PaneProps, Text } from 'evergreen-ui'
import { PropsWithChildren } from 'react'

import { theme } from '@services/Theme'

interface Props extends PaneProps {
  disabled?: boolean
  label?: string
  suffix?: string
}

export const Label = ({
  children,
  disabled,
  label,
  suffix,
  ...props
}: PropsWithChildren<Props>) => {
  const labelColor = disabled ? theme.colors.gray500 : undefined

  return (
    <Pane
      alignItems="center"
      display="flex"
      flexDirection="row"
      marginBottom={minorScale(2)}
      {...props}
    >
      <Text color={labelColor} width={majorScale(15)}>
        {label || ' '}
      </Text>

      {children}

      {suffix && <Text color={labelColor}>&nbsp;{suffix}</Text>}
    </Pane>
  )
}

Label.defaultProps = {
  flexDirection: 'row',
}
