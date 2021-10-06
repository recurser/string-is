import { majorScale, Pane, Paragraph, Textarea } from 'evergreen-ui'

import { Card } from '@components/layout/Card'

export const Convert = () => {
  return (
    <Pane display="flex" gap={majorScale(2)}>
      <Card>
        <Paragraph>Paste here</Paragraph>
        <Textarea />
      </Card>
      <Card>
        <Paragraph>Result here</Paragraph>
        <Textarea />
      </Card>
    </Pane>
  )
}
