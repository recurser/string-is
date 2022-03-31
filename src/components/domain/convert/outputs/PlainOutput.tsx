import { forwardRef } from 'react'

import { CodeTextarea } from '@components/forms'
import type { OutputProps } from '@lib/types'

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
  ({ output, ...props }: OutputProps, ref) => {
    return (
      <CodeTextarea
        {...props}
        data-testid="plain-output"
        id="converted-output"
        ref={ref}
        value={output}
      />
    )
  },
)
