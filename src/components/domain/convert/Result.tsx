import { Textarea } from 'evergreen-ui'

import { LayoutColumn } from '@components/domain/convert/LayoutColumn'
import { useInputContext } from '@contexts/InputContext'
import { Output } from '@lib/outputs'

interface Props {
  output: Output
}
export const Result = ({ output }: Props) => {
  const { inputString } = useInputContext()

  return (
    <LayoutColumn label={output.id}>
      <Textarea readOnly={true} value={output.operation(inputString)} />
    </LayoutColumn>
  )
}
