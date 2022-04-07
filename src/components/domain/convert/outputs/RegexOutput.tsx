import { Alert, Button, SelectMenu, TextInput, majorScale } from 'evergreen-ui'
import { ChangeEvent, Fragment, forwardRef, useEffect, useMemo } from 'react'
import { compact, isEqual } from 'lodash'
import useTranslation from 'next-translate/useTranslation'

import { CodeTextarea, CopyButton, Label } from '@components/forms'
import type { OutputProps } from '@lib/types'
import { useConverterContext } from '@contexts/ConverterContext'
import { useConverterOptionsContext } from '@contexts/ConverterOptionsContext'

/**
 * Regex modifiers that we support.
 */
const regexModifiers = 'igm'

/**
 * A regex to match modifiers at the end of a regex.
 */
const modifierRegex = new RegExp(`/([${regexModifiers}]+)?$`)

/**
 * A regex to match a regex :)
 */
const regexRegex = new RegExp(`^/?(.*?)/?([${regexModifiers}]+)?$`)

/**
 * Type of a selected modifier in an Evergreen SelectMenu.
 */
interface ModifierOption {
  label: string
  value: string
}

/**
 * Be explicit about the type of the modifiers option.
 */
type Modifiers = string[] | undefined

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
    const { setForceInput } = useConverterContext()
    const { options, setOptions } = useConverterOptionsContext(
      converter.outputId,
    )
    const testString = (options.testString || '') as string
    const modifiers = ((options.modifiers as Modifiers) || []).sort()

    // This is a bit of a hack to provide a test string when 'load an example' is clicked.
    useEffect(() => {
      if (
        input === t('pages-converter:regexDebugger-examples.example-1') &&
        testString === ''
      ) {
        setOptions({
          ...options,
          testString:
            'The quick brown fox jumps over the lazy dog\nThe early bird gets the worm',
        })
      }
    }, [input, options, setOptions, t, testString])

    // If the modifiers in the input regex change, update the options.
    useEffect(() => {
      const [_, modifierStr] = input.match(modifierRegex) || []
      const newModifiers = compact((modifierStr || '').split('')).sort()
      if (modifierStr && !isEqual(newModifiers, modifiers)) {
        setOptions({ ...options, modifiers: newModifiers })
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [input])

    // If the modifier options change, update the input regex.
    useEffect(() => {
      if (input.match(modifierRegex)) {
        const newInput = input.replace(modifierRegex, `/${modifiers.join('')}`)
        if (newInput !== input) {
          setForceInput([newInput, converter])
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [modifiers])

    /**
     * Updates the output options state when a modifier is removed.
     *
     * @param event - the HTML select change event.
     */
    const onDeselectModifier = (item: ModifierOption) => {
      const newModifiers = modifiers.filter((mod) => mod !== item.value)
      setOptions({ ...options, modifiers: newModifiers })
    }

    /**
     * Updates the output options state when a modifier is added.
     *
     * @param event - the HTML select change event.
     */
    const onSelectModifier = (item: ModifierOption) => {
      setOptions({
        ...options,
        modifiers: [...modifiers, item.value],
      })
    }

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
        const [_, regexStr, _modifiers] = input.match(regexRegex) || []
        const regex = new RegExp(regexStr.replace(/\n/, ''), modifiers.join(''))
        // The matchAll() method throws an error if the 'g' modifier has not been provided.
        if (modifiers.includes('g')) {
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
    }, [input, modifiers, testString])

    const hasTestString = testString.trim().length > 0

    return (
      <>
        <Label
          disabled={disabled}
          htmlFor="modifiersInput"
          label={t('modifiers_label')}
        >
          <SelectMenu
            isMultiSelect={true}
            onDeselect={onDeselectModifier}
            onSelect={onSelectModifier}
            options={[
              { label: t('modifier_global_option'), value: 'g' },
              { label: t('modifier_insensitive_option'), value: 'i' },
              { label: t('modifier_multiline_option'), value: 'm' },
            ]}
            selected={modifiers}
          >
            <Button
              disabled={disabled}
              id="modifiersInput"
              minWidth={majorScale(10)}
            >
              {modifiers.length === 0
                ? t('modifiers_none_selected')
                : modifiers.join(', ')}
            </Button>
          </SelectMenu>
        </Label>

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

        {!disabled && hasTestString && matches?.length === 0 ? (
          <Alert intent="warning" title={t('alert_no_matches')} />
        ) : null}

        {!disabled && matches && matches.length > 0 ? (
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
