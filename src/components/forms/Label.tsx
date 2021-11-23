import { majorScale, minorScale, Pane, Text } from 'evergreen-ui'
import { PropsWithChildren } from 'react'

interface Props {
  label: string
}
export const Label = ({ children, label }: PropsWithChildren<Props>) => {
  return (
    <Pane
      alignItems="center"
      display="flex"
      flexDirection="row"
      marginBottom={minorScale(2)}
    >
      <Text width={majorScale(15)}>{label}</Text>

      {children}
    </Pane>
  )
}
