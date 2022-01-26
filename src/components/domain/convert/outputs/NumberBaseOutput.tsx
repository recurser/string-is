import { ChangeEvent, forwardRef, useEffect, useMemo } from 'react'
import { Select, Textarea, majorScale } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'

import { CopyButton, Form, Label } from '@components/forms'
import {
  defaultOptions,
  maxRadix,
  minRadix,
  validRadices,
} from '@lib/outputs/NumberBaseOutput'
import { OutputProps } from '@lib/types'
import { useConverterOptionsContext } from '@contexts/ConverterOptionsContext'

export const NumberBaseOutput = forwardRef<HTMLTextAreaElement, OutputProps>(
  (
    { converter, disabled: baseDisabled, input, output, ...props }: OutputProps,
    ref,
  ) => {
    const { t } = useTranslation('domain-convert-outputs-numberBaseOutput')
    const { options, setOptions } = useConverterOptionsContext(
      converter.outputId,
    )

    const fromRadices = useMemo(() => validRadices(input), [input])

    // If we have an existing fromRadix, but the given input isn't valid in that base,
    // use the first available radice.
    useEffect(() => {
      if (
        (!options.fromRadix ||
          !fromRadices.includes(options.fromRadix as number)) &&
        fromRadices.length > 0
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
        <Label
          disabled={disabled}
          htmlFor="fromRadixInput"
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
          htmlFor="toRadixInput"
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
          htmlFor="resultInput"
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
            value={output}
          />
          {!disabled && (
            <CopyButton marginLeft={majorScale(1)} value={output} />
          )}
        </Label>
      </Form>
    )
  },
)
