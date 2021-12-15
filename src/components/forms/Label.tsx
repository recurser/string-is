import { majorScale, minorScale, Pane, PaneProps, Text } from 'evergreen-ui'
import { PropsWithChildren } from 'react'

interface Props extends PaneProps {
  label?: string
}

export const Label = ({
  children,
  label,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <Pane
      alignItems="center"
      display="flex"
      flexDirection="row"
      marginBottom={minorScale(2)}
      {...props}
    >
      <Text width={majorScale(15)}>{label || ' '}</Text>

      {children}
    </Pane>
  )
}

Label.defaultProps = {
  flexDirection: 'row',
}
