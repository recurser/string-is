import { Text } from 'evergreen-ui'
import { uniqBy } from 'lodash'
import { useMemo } from 'react'

import { Input } from '@lib/inputs'

interface Props {
  inputs: Input[]
}

export const OutputSelector = ({ inputs }: Props) => {
  const outputs = useMemo(
    () => uniqBy(inputs.map((input) => input.outputs).flat(), 'id'),
    [inputs],
  )

  return (
    <ul>
      {outputs.map((output, index) => (
        <li key={`output-${index}`}>
          <Text>{output.id}</Text>
        </li>
      ))}
    </ul>
  )
}
