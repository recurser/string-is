import { Alert, Code, majorScale } from 'evergreen-ui'

interface Props {
  message: string | undefined
}

export const OutputError = ({ message }: Props) => {
  if (!message) {
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
