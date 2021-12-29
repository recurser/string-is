import { forwardRef } from 'react'

import { CodeTextarea } from '@components/forms'
import { OutputProps } from '@lib/types'

export const PlainOutput = forwardRef<HTMLTextAreaElement, OutputProps>(
  ({ disabled, output, ...props }: OutputProps, ref) => {
    return (
      <CodeTextarea disabled={disabled} {...props} ref={ref} value={output} />
    )
  },
)
