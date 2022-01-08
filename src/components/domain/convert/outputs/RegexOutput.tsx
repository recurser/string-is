import { Alert, majorScale, TextInput } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'
import { ChangeEvent, forwardRef, useMemo, useState } from 'react'

import { CodeTextarea, Label } from '@components/forms'
import { OutputProps } from '@lib/types'

export const RegexOutput = forwardRef<HTMLTextAreaElement, OutputProps>(
  ({ disabled, input, ...props }: OutputProps, ref) => {
    const { t } = useTranslation('domain-convert-outputs-regexOutput')

    const [testString, setTestString] = useState('')

    const onChangeTestString = (event: ChangeEvent<HTMLTextAreaElement>) => {
      setTestString(event.target.value)
    }

    const matches = useMemo((): Array<Array<string>> | undefined => {
      try {
        const [_, regexStr, modifiers] =
          input.match(/^\/(.*)\/([igm]+)?$/) || []
        const regex = new RegExp(regexStr.replace(/\n/, ''), modifiers)
        // The matchAll() method throws an error if the 'g' modifier has not been provided.
        if (modifiers.includes('g')) {
          return [...testString.matchAll(regex)]
        } else {
          return [testString.match(regex) || []]
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
          disabled={disabled}
          id="testStringInput"
          isInvalid={!disabled && !hasTestString}
          marginBottom={disabled ? 0 : majorScale(1)}
          onChange={onChangeTestString}
          placeholder={disabled ? '' : t('test_string_placeholder')}
          readOnly={false}
          ref={ref}
          value={disabled ? '' : testString}
        />

        {!disabled && !hasTestString && matches && (
          <Alert intent="info" title={t('alert_no_input')} />
        )}

        {!disabled && !matches && (
          <Alert intent="danger" title={t('alert_invalid_input')} />
        )}

        {hasTestString && matches?.length === 0 && (
          <Alert intent="warning" title={t('alert_no_matches')} />
        )}

        {matches && matches.length > 0 && (
          <>
            {matches.map((match, matchIndex) => {
              const [whole, ...groups] = match
              const matchKey = `regexMatch-${matchIndex}`
              const isSingleMatch = matches.length === 1

              return (
                <>
                  <Alert
                    intent="success"
                    marginBottom={majorScale(1)}
                    title={
                      isSingleMatch
                        ? t('alert_num_groups', { count: groups.length })
                        : t('alert_match_label', {
                            count: groups.length,
                            number: matchIndex + 1,
                          })
                    }
                  />

                  {!isSingleMatch && (
                    <Label
                      htmlFor={matchKey}
                      key={matchKey}
                      label={t('match_label', { number: matchIndex + 1 })}
                    >
                      <TextInput
                        id={matchKey}
                        readOnly={true}
                        value={whole}
                        width="100%"
                      />
                    </Label>
                  )}

                  {groups.map((group, groupIndex) => {
                    const groupKey = `regexMatch-${matchIndex}-${groupIndex}`
                    return (
                      <Label
                        htmlFor={groupKey}
                        key={groupKey}
                        label={t('group_label', { number: groupIndex + 1 })}
                      >
                        <TextInput
                          id={groupKey}
                          readOnly={true}
                          value={group}
                          width="100%"
                        />
                      </Label>
                    )
                  })}
                </>
              )
            })}
          </>
        )}
      </>
    )
  },
)
