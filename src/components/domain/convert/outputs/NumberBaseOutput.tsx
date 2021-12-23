import { majorScale, Select, Textarea } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'
import { ChangeEvent, forwardRef, useMemo, useEffect } from 'react'

import { OutputError } from '@components/domain/convert/OutputError'
import { Form, Label } from '@components/forms'
import { useConverterOptionsContext } from '@contexts/ConverterOptionsContext'
import { input as numberInput } from '@lib/inputs/NumberInput'
import {
  defaultOptions,
  maxRadix,
  minRadix,
  validRadices,
  error,
} from '@lib/outputs/NumberBaseOutput'
import { OutputProps } from '@lib/types'

export const NumberBaseOutput = forwardRef<HTMLTextAreaElement, OutputProps>(
  (
    { converter, disabled: baseDisabled, input, ...props }: OutputProps,
    ref,
  ) => {
    const { t } = useTranslation('domain-convert-outputs-numberBaseOutput')
    const { options, setOptions } = useConverterOptionsContext(
      converter.outputId,
    )

    const parsedInput = useMemo(() => numberInput(input), [input])

    const errorMessage = useMemo(() => error(input), [input])

    const value = useMemo(
      () => converter.operation(parsedInput || '', options),
      [parsedInput, converter, options],
    )

    const fromRadices = useMemo(() => validRadices(parsedInput), [parsedInput])

    // If we have an existing fromRadix, but the given input isn't valid in that base,
    // use the first available radice.
    useEffect(() => {
      if (
        !options.fromRadix ||
        !fromRadices.includes(options.fromRadix as number)
      ) {
        setOptions({ ...options, fromRadix: fromRadices[0] })
      }
    }, [fromRadices, options, setOptions])

    const disabled = useMemo(
      () => baseDisabled || fromRadices.length === 0,
      [baseDisabled, fromRadices],
    )

    const onChangeFromRadix = (event: ChangeEvent<HTMLSelectElement>) => {
      setOptions({ ...options, fromRadix: parseInt(event.target.value, 10) })
    }

    const onChangeToRadix = (event: ChangeEvent<HTMLSelectElement>) => {
      setOptions({ ...options, toRadix: parseInt(event.target.value, 10) })
    }

    const fromRadix = (options.fromRadix as number) || defaultOptions.fromRadix
    const toRadix = (options.toRadix as number) || defaultOptions.toRadix

    return (
      <Form>
        <OutputError message={errorMessage} />

        <Label
          disabled={disabled}
          inputId="fromRadixInput"
          label={t('label_from_radix')}
        >
          <Select
            disabled={disabled}
            id="fromRadixInput"
            maxWidth={majorScale(8)}
            onChange={onChangeFromRadix}
            value={fromRadix}
          >
            {fromRadices.map((radix, idx) => (
              <option key={`fromRadixOption-${idx}`} value={radix}>
                {radix}
              </option>
            ))}
          </Select>
        </Label>

        <Label
          disabled={disabled}
          inputId="toRadixInput"
          label={t('label_to_radix')}
        >
          <Select
            disabled={disabled}
            id="toRadixInput"
            maxWidth={majorScale(8)}
            onChange={onChangeToRadix}
            value={toRadix}
          >
            {Array.from(Array(maxRadix - minRadix).keys())
              .map((idx) => idx + minRadix)
              .map((radix, idx) => (
                <option key={`toRadixOption-${idx}`} value={radix}>
                  {radix}
                </option>
              ))}
          </Select>
        </Label>

        <hr />

        <Label
          disabled={disabled}
          inputId="resultInput"
          label={t('label_result', { base: toRadix })}
        >
          <Textarea
            {...props}
            disabled={disabled}
            height={majorScale(4)}
            id="resultInput"
            maxWidth={majorScale(27)}
            minHeight={undefined}
            ref={ref}
            resize="none"
            value={value}
          />
        </Label>
      </Form>
    )
  },
)
