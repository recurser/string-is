import { Alert, Code, majorScale } from 'evergreen-ui'

import { useConverterContext } from '@contexts/ConverterContext'

interface Props {
  message: string | undefined
}

export const OutputError = ({ message }: Props) => {
  const { clearConverter, useOutput } = useConverterContext()

  // Avoid flash-of-error if we're in the process of clearing
  // the converter or the output.
  if (!message || clearConverter || useOutput) {
    return <></>
  }

  return (
    <Alert
      intent="warning"
      marginBottom={majorScale(1)}
      overflowX="scroll"
      paddingBottom={majorScale(2)}
    >
      <Code
        appearance="minimal"
        dangerouslySetInnerHTML={{ __html: message.replace('\n', '<br/>') }}
        size={300}
      />
    </Alert>
  )
}
