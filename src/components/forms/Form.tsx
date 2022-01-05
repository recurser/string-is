import { Pane, majorScale } from 'evergreen-ui'
import { PropsWithChildren, ReactElement } from 'react'

export const Form = ({
  children,
}: PropsWithChildren<Record<string, unknown>>): ReactElement => (
  <Pane
    display="flex"
    flexDirection="column"
    flexGrow={1}
    marginBottom={majorScale(1)}
  >
    {children}
  </Pane>
)
