import { TextareaProps } from 'evergreen-ui'
import { Dispatch, forwardRef, SetStateAction } from 'react'

import { CodeTextarea } from '@components/forms'
import { ConverterOptions } from '@lib/types'

interface Props extends TextareaProps {
  setOptions: Dispatch<SetStateAction<ConverterOptions>>
}

export const JsonOutput = forwardRef<HTMLTextAreaElement, Props>(
  ({ setOptions: _, ...props }: Props, ref) => {
    return <CodeTextarea {...props} ref={ref} />
  },
)
