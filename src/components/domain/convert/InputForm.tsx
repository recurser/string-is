import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react'
import { debounce } from 'lodash'
import useTranslation from 'next-translate/useTranslation'

import { CodeTextarea } from '@components/forms'
import { LayoutColumn } from '@components/domain/convert/LayoutColumn'
import { useConverterContext } from '@contexts/ConverterContext'

// Timeout before deciding that the user has stopped typing.
const DebounceTimeout = 500

/**
 * Renders an input textarea where the user pastes text for conversion.
 */
export const InputForm = () => {
  const { t } = useTranslation('domain-convert-inputForm')
  const {
    inputString,
    outputString,
    setClearConverter,
    setInputString,
    setUseOutput,
    useOutput,
  } = useConverterContext()
  const [input, setInput] = useState('')

  // Focus on the textarea on first load.
  // See https://stackoverflow.com/a/67906087
  const inputRef = useCallback((el) => el?.focus(), [])

  const doDebounce = useMemo(
    () => debounce((data: string) => setInputString(data), DebounceTimeout),
    [setInputString],
  )

  useEffect(() => doDebounce(input), [input, doDebounce])

  useEffect(() => {
    if (useOutput) {
      setUseOutput(false)
      setInputString(outputString)
      setInput(outputString)
      setClearConverter(true)
    }
  }, [outputString, setClearConverter, setInputString, setUseOutput, useOutput])

  /**
   * Updates the state with the user input, when the textarea content is changed.
   *
   * @param event - the HTML input change event.
   */
  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setInput(event.target.value)

  return (
    <LayoutColumn
      htmlFor="user-input"
      inputString={inputString}
      label={t('label')}
      outputString={outputString}
    >
      <CodeTextarea
        autoFocus={
          true
        } /* This doesn't seem to do anything, but might help in some browsers? */
        copy={false}
        data-testid="user-input"
        flex={1}
        height="100%"
        id="user-input"
        onChange={onChange}
        placeholder={t('placeholder')}
        ref={inputRef}
        tabIndex={1}
        value={input}
      />
    </LayoutColumn>
  )
}
