import { Alert, Code, majorScale } from 'evergreen-ui'

import { useConverterContext } from '@contexts/ConverterContext'

interface Props {
  /**
   * The error message to display.
   */
  message: string | undefined
}

/**
 * Renders a standard error alert box used in output components
 * when something goes wrong with the conversion process.
 *
 * @param props - The component props.
 */
export const OutputError = ({ message }: Props) => {
  const { forceInput } = useConverterContext()

  // Avoid flash-of-error if we're in the process of forcing the input.
  if (forceInput || !message) {
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
        data-testid="output-error"
        size={300}
      />
    </Alert>
  )
}
