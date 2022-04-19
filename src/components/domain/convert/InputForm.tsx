import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react'
import { debounce, isEmpty, isEqual } from 'lodash'
import useTranslation from 'next-translate/useTranslation'

import { CodeTextarea } from '@components/forms'
import { LayoutColumn } from '@components/domain/convert/LayoutColumn'
import { useConverterContext } from '@contexts/ConverterContext'
import { useConverterOptionsContext } from '@contexts/ConverterOptionsContext'
import { useResponsive } from '@hooks/useResponsive'

// Timeout before deciding that the user has stopped typing.
const DebounceTimeout = 500

/**
 * Renders an input textarea where the user pastes text for conversion.
 */
export const InputForm = () => {
  const { t } = useTranslation('domain-convert-inputForm')
  const {
    converter,
    forceInput,
    inputString,
    outputString,
    setConverter,
    setForceInput,
    setInputString,
  } = useConverterContext()
  const { options, setOptions } = useConverterOptionsContext(converter.outputId)
  const { isMobile } = useResponsive()
  const [input, setInput] = useState('')

  // Focus on the textarea on first load. Don't load on mobile, since it zooms the page.
  // See https://stackoverflow.com/a/67906087
  const inputRef = useCallback(
    (el: HTMLTextAreaElement) => (isMobile ? el : el?.focus()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  const doDebounce = useMemo(
    () => debounce((data: string) => setInputString(data), DebounceTimeout),
    [setInputString],
  )

  useEffect(() => doDebounce(input), [input, doDebounce])

  useEffect(() => {
    if (forceInput) {
      const [newInputString, newConverter, newOptions] = forceInput
      setForceInput(undefined)
      setInputString(newInputString)
      setInput(newInputString)
      setConverter(newConverter)
      // If new options have been set (usually by loading a 'shared' URL), set them up.
      if (newOptions && !isEmpty(newOptions) && !isEqual(options, newOptions)) {
        setOptions(newOptions)
      }
    }
  }, [
    forceInput,
    options,
    setConverter,
    setForceInput,
    setInputString,
    setOptions,
  ])

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
      label={`1. ${t(
        `pages-converter:${converter.id}-input-label`,
        {},
        { fallback: 'pages-converter:nullConverter-input-label' },
      )} 👇`}
      outputString={outputString}
    >
      <CodeTextarea
        autoFocus={
          true
        } /* This doesn't seem to do anything, but might help in some browsers? */
        copy={false}
        data-testid="user-input"
        display="flex"
        flex={1}
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
