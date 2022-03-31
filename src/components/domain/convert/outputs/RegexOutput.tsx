import { Alert, TextInput, majorScale } from 'evergreen-ui'
import { ChangeEvent, Fragment, forwardRef, useEffect, useMemo } from 'react'
import useTranslation from 'next-translate/useTranslation'

import { CodeTextarea, CopyButton, Label } from '@components/forms'
import type { OutputProps } from '@lib/types'
import { useConverterOptionsContext } from '@contexts/ConverterOptionsContext'

/**
 * Forwards the Textarea ref to the output component.
 */
export const RegexOutput = forwardRef<HTMLTextAreaElement, OutputProps>(
  /**
   * Provides a UI for formatting Regex output.
   *
   * @param props - The output props.
   * @param ref   - The forwarded ref, which becomes a reference to the TextArea.
   */
  ({ converter, disabled, input, ...props }: OutputProps, ref) => {
    const { t } = useTranslation('domain-convert-outputs-regexOutput')
    const { options, setOptions } = useConverterOptionsContext(
      converter.outputId,
    )
    const testString = (options.testString || '') as string

    // This is a bit of a hack to provide a test string when 'load an example' is clicked.
    useEffect(() => {
      if (
        input === t('pages-converter:regexDebugger-example') &&
        testString === ''
      ) {
        setOptions({
          ...options,
          testString:
            'The quick brown fox jumps over the lazy dog\nThe early bird gets the worm',
        })
      }
    }, [input, options, setOptions, t, testString])

    /**
     * Updates the output options state when the test-string text input is changed.
     *
     * @param event - the HTML input change event.
     */
    const onChangeTestString = (event: ChangeEvent<HTMLTextAreaElement>) => {
      setOptions({ ...options, testString: event.target.value })
    }

    const matches = useMemo((): Array<Array<string>> | undefined => {
      try {
        const [_, regexStr, modifiers] =
          input.match(/^\/(.*)\/([igm]+)?$/) || []
        const regex = new RegExp(regexStr.replace(/\n/, ''), modifiers)
        // The matchAll() method throws an error if the 'g' modifier has not been provided.
        if (modifiers?.includes('g')) {
          return [...testString.matchAll(regex)]
        } else {
          const result = testString.match(regex)
          if (result && result.length > 0) {
            return [result]
          } else {
            return []
          }
        }
      } catch (err) {
        return undefined
      }
    }, [input, testString])

    const hasTestString = testString.trim().length > 0

    return (
      <>
        <CodeTextarea
          {...props}
          copy={false}
          data-testid="regex-input"
          disabled={disabled}
          id="converted-output"
          isInvalid={!disabled && !hasTestString}
          marginBottom={disabled ? 0 : majorScale(1)}
          onChange={onChangeTestString}
          placeholder={disabled ? '' : t('test_string_placeholder')}
          readOnly={false}
          ref={ref}
          value={disabled ? '' : testString}
        />

        {!disabled && !hasTestString && matches ? (
          <Alert intent="info" title={t('alert_no_input')} />
        ) : null}

        {!disabled && !matches ? (
          <Alert
            data-testid="output-error"
            intent="danger"
            title={t('alert_invalid_input')}
          />
        ) : null}

        {hasTestString && matches?.length === 0 ? (
          <Alert intent="warning" title={t('alert_no_matches')} />
        ) : null}

        {matches && matches.length > 0 ? (
          <>
            {matches.map((match, matchIndex) => {
              const [whole, ...groups] = match
              const matchKey = `regexMatch-${matchIndex}`

              return (
                <Fragment key={matchKey}>
                  <Alert
                    data-testid="output-success"
                    intent="success"
                    marginBottom={majorScale(1)}
                    title={
                      matches.length === 1
                        ? t('alert_single_match', { count: groups.length })
                        : t('alert_multiple_matches', {
                            count: groups.length,
                            number: matchIndex + 1,
                          })
                    }
                  />

                  {
                    <Label
                      htmlFor={matchKey}
                      key={matchKey}
                      label={t('match_label', {
                        count: matches.length,
                        number: matchIndex + 1,
                      })}
                    >
                      <TextInput
                        data-testid="regex-match-output"
                        id={matchKey}
                        readOnly={true}
                        value={whole}
                        width="100%"
                      />
                      <CopyButton marginLeft={majorScale(1)} value={whole} />
                    </Label>
                  }

                  {groups.map((group, groupIndex) => {
                    const groupKey = `regexMatch-${matchIndex}-${groupIndex}`
                    return (
                      <Label
                        htmlFor={groupKey}
                        key={groupKey}
                        label={t('group_label', { number: groupIndex + 1 })}
                      >
                        <TextInput
                          data-testid="regex-group-output"
                          id={groupKey}
                          readOnly={true}
                          value={group}
                          width="100%"
                        />
                        <CopyButton marginLeft={majorScale(1)} value={group} />
                      </Label>
                    )
                  })}
                </Fragment>
              )
            })}
          </>
        ) : null}
      </>
    )
  },
)
