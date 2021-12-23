import { majorScale, Pane, Select, Textarea } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'
import { ChangeEvent, forwardRef, useMemo, useEffect } from 'react'

import { OutputError } from '@components/domain/convert/OutputError'
import { Label } from '@components/forms'
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
      <>
        <OutputError message={errorMessage} />

        <Pane
          alignItems="baseline"
          display="flex"
          flexDirection="row"
          gap={majorScale(2)}
          marginBottom={majorScale(1)}
        >
          <Pane>
            <Label disabled={disabled} label={t('label_from_radix')}>
              <Select
                alignSelf="start"
                disabled={disabled}
                onChange={onChangeFromRadix}
                value={fromRadix}
                width={majorScale(8)}
              >
                {fromRadices.map((radix, idx) => (
                  <option key={`fromRadixOption-${idx}`} value={radix}>
                    {radix}
                  </option>
                ))}
              </Select>
            </Label>

            <Label disabled={disabled} label={t('label_to_radix')}>
              <Select
                alignSelf="start"
                disabled={disabled}
                onChange={onChangeToRadix}
                value={toRadix}
                width={majorScale(8)}
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
          </Pane>
        </Pane>

        <hr />

        <Label disabled={disabled} label={t('label_result', { base: toRadix })}>
          <Textarea
            {...props}
            disabled={disabled}
            height={majorScale(4)}
            maxWidth={majorScale(27)}
            minHeight={undefined}
            ref={ref}
            resize="none"
            value={value}
          />
        </Label>
      </>
    )
  },
)
