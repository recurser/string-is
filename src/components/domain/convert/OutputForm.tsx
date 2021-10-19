import useTranslation from 'next-translate/useTranslation'
import { createRef, useEffect, useMemo } from 'react'

import { LayoutColumn } from '@components/domain/convert/LayoutColumn'
import { CodeTextarea } from '@components/forms'
import { useInputContext } from '@contexts/InputContext'
import { Output } from '@lib/outputs'

interface Props {
  focusOutput: boolean
  output?: Output
  setFocusOutput: (focusOutput: boolean) => void
}
export const OutputForm = ({ focusOutput, output, setFocusOutput }: Props) => {
  const { t } = useTranslation('domain-convert-outputForm')
  const { inputString } = useInputContext()
  const textareaRef = createRef<HTMLTextAreaElement>()
  const disabled = !output

  const value = useMemo(() => {
    if (!output) {
      return ''
    }

    return output.operation(inputString)
  }, [inputString, output])

  // When an output converter has been selected, we focus on the output field.
  useEffect(() => {
    if (focusOutput) {
      textareaRef.current?.focus()
      setFocusOutput(false)
    }
  }, [focusOutput, setFocusOutput, textareaRef])

  return (
    <LayoutColumn
      disabled={disabled}
      label={
        output
          ? `3. ${t(`lib-outputs-results:${output.id}`)} 👇`
          : t('default_label')
      }
    >
      <CodeTextarea
        disabled={disabled}
        flex={1}
        height="100%"
        readOnly={true}
        ref={textareaRef}
        tabIndex={3}
        value={value}
      />
    </LayoutColumn>
  )
}
