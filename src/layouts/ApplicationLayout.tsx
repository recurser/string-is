import { Pane, Paragraph } from 'evergreen-ui'

export const ApplicationLayout = ({ children }) => {
  return (
    <Pane>
      <Paragraph>Header</Paragraph>

      <Pane>{children}</Pane>

      <Paragraph>Footer</Paragraph>
    </Pane>
  )
}
