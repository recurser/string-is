import { isEmpty, startCase } from 'lodash'
import useTranslation from 'next-translate/useTranslation'
import { createRef, useEffect, useMemo, useState } from 'react'

import { LayoutColumn } from '@components/domain/convert/LayoutColumn'
import { outputs, OutputName } from '@components/domain/convert/outputs'
import { useConverterOptionsContext } from '@contexts/ConverterOptionsContext'
import { useInputContext } from '@contexts/InputContext'
import { Converter } from '@lib/converters'
import { ConverterOptions } from '@lib/types'
import { useAnalytics } from '@services/Analytics'

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
  const analytics = useAnalytics()
  const { inputString } = useInputContext()
  const textareaRef = createRef<HTMLTextAreaElement>()
  const [_options, setOptions] = useState<ConverterOptions>({})
  const { options } = useConverterOptionsContext(converter?.outputId || '')

  const value = useMemo(() => {
    if (!converter || isEmpty(converter)) {
      return ''
    }

    return converter.operation(inputString, options)
  }, [inputString, converter, options])

  // When a converter has been selected, we focus on the output field.
  useEffect(() => {
    if (focusOutput) {
      textareaRef.current?.focus()
      setFocusOutput(false)

      if (converter) {
        // Track which converter has been selected, to find out which are useful.
        analytics('Convert', {
          props: {
            converter: converter.id,
          },
        })
      }
    }
  }, [analytics, converter, focusOutput, setFocusOutput, textareaRef])

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
        setOptions={setOptions}
        tabIndex={3}
        value={value}
      />
    </LayoutColumn>
  )
}
