import { Paragraph, Textarea } from 'evergreen-ui'

import { useInputContext } from '@contexts/InputContext'
import { Output } from '@lib/outputs'

interface Props {
  output: Output
}
export const Result = ({ output }: Props) => {
  const { inputString } = useInputContext()

  return (
    <>
      <Paragraph>{output.id}</Paragraph>
      <Textarea readOnly={true} value={output.operation(inputString)} />
    </>
  )
}
