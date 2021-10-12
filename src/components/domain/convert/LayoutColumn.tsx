import { Pane, Paragraph } from 'evergreen-ui'
import { PropsWithChildren } from 'react'

interface Props {
  label?: string
}
export const LayoutColumn = ({ children, label }: PropsWithChildren<Props>) => (
  <Pane display="flex" flex={1} flexDirection="column">
    {label && <Paragraph role="label">{label}</Paragraph>}
    {!label && <Paragraph>&nbsp;</Paragraph>}
    <Pane
      display="flex"
      flex={1}
      flexDirection="column"
      height="100%"
      justifyContent="center"
    >
      {children}
    </Pane>
  </Pane>
)
