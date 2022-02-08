import {
  Dispatch,
  SetStateAction,
  createRef,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { isEmpty, upperFirst } from 'lodash'
import useTranslation from 'next-translate/useTranslation'

import * as outputs from '@components/domain/convert/outputs'
import { LayoutColumn } from '@components/domain/convert/LayoutColumn'
import { NullConverter } from '@lib/converters'
import { OutputError } from '@components/domain/convert/OutputError'
import type { OutputName } from '@components/domain/convert/outputs'
import { useConverterContext } from '@contexts/ConverterContext'
import { useConverterOptionsContext } from '@contexts/ConverterOptionsContext'

interface Props {
  focusOutput: boolean
  setFocusOutput: Dispatch<SetStateAction<boolean>>
}
export const OutputForm = ({ focusOutput, setFocusOutput }: Props) => {
  const { t } = useTranslation('domain-convert-outputForm')
  const { converter, inputString, outputString, setOutputString } =
    useConverterContext()
  const textareaRef = createRef<HTMLTextAreaElement>()

  // When a converter has been selected, we focus on the output field.
  useEffect(() => {
    if (focusOutput) {
      textareaRef.current?.focus()
      setFocusOutput(false)
    }
  }, [focusOutput, setFocusOutput, textareaRef])

  // Use a dynamic output component based on the converter's 'output' string.
  const OutputElement = useMemo(() => {
    return outputs[`${upperFirst(converter.outputId)}Output` as OutputName]
  }, [converter])

  const [errorMessage, setErrorMessage] = useState<string | undefined>()
  const { options } = useConverterOptionsContext(converter.outputId)
  const output = useMemo(() => {
    try {
      const result = converter.operation(inputString, options)
      if (errorMessage !== undefined) {
        setErrorMessage(undefined)
      }
      return result
    } catch (err) {
      const msg = typeof err === 'string' ? err : (err as Error).message
      if (errorMessage !== msg) {
        setErrorMessage(msg)
      }
      return ''
    }
  }, [converter, errorMessage, inputString, options])

  // Other components such as the use-as-input button use this output.
  useEffect(() => {
    if (output !== outputString) {
      setOutputString(output)
    }
  }, [output, outputString, setOutputString])

  // If we don't have any input or output, there is no point enabling the output.
  const disabled = useMemo(
    () => isEmpty(inputString) || isEmpty(output),
    [inputString, output],
  )

  return (
    <LayoutColumn
      disabled={disabled}
      inputString={inputString}
      label={
        converter.id !== NullConverter.id
          ? `3. ${t(`lib-converters-results:${converter.id}`)} 👇`
          : t('default_label')
      }
      outputString={outputString}
    >
      <OutputError message={errorMessage} />

      <OutputElement
        converter={converter}
        disabled={disabled}
        flex={1}
        height="100%"
        input={inputString}
        output={output}
        readOnly={true}
        ref={textareaRef}
        tabIndex={3}
      />
    </LayoutColumn>
  )
}
