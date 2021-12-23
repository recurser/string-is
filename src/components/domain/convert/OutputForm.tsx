import { isEmpty, upperFirst } from 'lodash'
import useTranslation from 'next-translate/useTranslation'
import { Dispatch, SetStateAction, createRef, useEffect, useMemo } from 'react'

import { LayoutColumn } from '@components/domain/convert/LayoutColumn'
import * as outputs from '@components/domain/convert/outputs'
import type { OutputName } from '@components/domain/convert/outputs'
import { useInputContext } from '@contexts/InputContext'
import { Converter, NullConverter } from '@lib/converters'
import { useAnalytics } from '@services/Analytics'

interface Props {
  converter: Converter
  focusOutput: boolean
  setFocusOutput: Dispatch<SetStateAction<boolean>>
}
export const OutputForm = ({
  converter,
  focusOutput,
  setFocusOutput,
}: Props) => {
  const { t } = useTranslation('domain-convert-outputForm')
  const analytics = useAnalytics()
  const { inputString } = useInputContext()
  const textareaRef = createRef<HTMLTextAreaElement>()
  const disabled = useMemo(() => isEmpty(inputString), [inputString])

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
    return outputs[`${upperFirst(converter.outputId)}Output` as OutputName]
  }, [converter])

  return (
    <LayoutColumn
      disabled={disabled}
      inputString={inputString}
      label={
        converter.id !== NullConverter.id
          ? `3. ${t(`lib-converters-results:${converter.id}`)} 👇`
          : t('default_label')
      }
    >
      <OutputElement
        converter={converter}
        disabled={disabled}
        flex={1}
        height="100%"
        input={inputString}
        readOnly={true}
        ref={textareaRef}
        tabIndex={3}
      />
    </LayoutColumn>
  )
}
