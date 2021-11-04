import { isEmpty, startCase } from 'lodash'
import useTranslation from 'next-translate/useTranslation'
import { createRef, useEffect, useMemo } from 'react'

import { LayoutColumn } from '@components/domain/convert/LayoutColumn'
import { outputs, OutputName } from '@components/domain/convert/outputs'
import { useInputContext } from '@contexts/InputContext'
import { Converter } from '@lib/converters'

interface Props {
  converter?: Converter
  disabled?: boolean
  focusOutput: boolean
  setFocusOutput: (focusOutput: boolean) => void
}
export const OutputForm = ({
  converter,
  disabled,
  focusOutput,
  setFocusOutput,
}: Props) => {
  const { t } = useTranslation('domain-convert-outputForm')
  const { inputString } = useInputContext()
  const textareaRef = createRef<HTMLTextAreaElement>()

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

  // Use a dynamic output component based on the converter's 'output' string.
  const OutputElement = useMemo(() => {
    if (!converter || isEmpty(converter)) {
      return outputs.PlainOutput
    }

    return outputs[`${startCase(converter.outputId)}Output` as OutputName]
  }, [converter])

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
      <OutputElement
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
