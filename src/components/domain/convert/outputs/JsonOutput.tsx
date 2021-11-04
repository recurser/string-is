import { TextareaProps } from 'evergreen-ui'
import { forwardRef } from 'react'

import { CodeTextarea } from '@components/forms'

export const JsonOutput = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    return <CodeTextarea {...props} ref={ref} />
  },
)
