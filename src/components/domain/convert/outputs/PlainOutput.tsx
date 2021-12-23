import { forwardRef, useMemo } from 'react'

import { CodeTextarea } from '@components/forms'
import { useConverterOptionsContext } from '@contexts/ConverterOptionsContext'
import { OutputProps } from '@lib/types'

export const PlainOutput = forwardRef<HTMLTextAreaElement, OutputProps>(
  ({ converter, disabled, input, ...props }: OutputProps, ref) => {
    const { options } = useConverterOptionsContext(converter.outputId)

    const value = useMemo(() => {
      return converter.operation(input, options) || ''
    }, [input, converter, options])

    return (
      <CodeTextarea disabled={disabled} {...props} ref={ref} value={value} />
    )
  },
)
