import { isEmpty } from 'lodash'
import useTranslation from 'next-translate/useTranslation'
import { createRef, useEffect, useMemo } from 'react'

import { LayoutColumn } from '@components/domain/convert/LayoutColumn'
import { CodeTextarea } from '@components/forms'
import { useInputContext } from '@contexts/InputContext'
import { Converter } from '@lib/converters'

interface Props {
  focusOutput: boolean
  converter?: Converter
  setFocusOutput: (focusOutput: boolean) => void
}
export const OutputForm = ({
  focusOutput,
  converter,
  setFocusOutput,
}: Props) => {
  const { t } = useTranslation('domain-convert-converterForm')
  const { inputString } = useInputContext()
  const textareaRef = createRef<HTMLTextAreaElement>()
  const disabled = !converter

  const value = useMemo(() => {
    if (!converter || isEmpty(converter)) {
      return ''
    }

    return converter.operation(inputString)
  }, [inputString, converter])

  // When a converter has been selected, we focus on the output field.
  useEffect(() => {
    if (focusOutput) {
      textareaRef.current?.focus()
      setFocusOutput(false)
    }
  }, [focusOutput, setFocusOutput, textareaRef])

  return (
    <LayoutColumn
      disabled={disabled}
      inputString={inputString}
      label={
        converter
          ? `3. ${t(`lib-converters-results:${converter.id}`)} 👇`
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
