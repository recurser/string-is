import { forwardRef } from 'react'

import { CodeTextarea } from '@components/forms'
import { OutputProps } from '@lib/types'

/**
 * Forwards the Textarea ref to the output component.
 */
export const PlainOutput = forwardRef<HTMLTextAreaElement, OutputProps>(
  /**
   * Provides a UI for formatting plain text output.
   *
   * @param props - The output props.
   * @param ref   - The forwarded ref, which becomes a reference to the TextArea.
   */
  ({ disabled, output, ...props }: OutputProps, ref) => {
    return (
      <CodeTextarea disabled={disabled} {...props} ref={ref} value={output} />
    )
  },
)
