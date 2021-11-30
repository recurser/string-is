import { majorScale, Pane, Select, Textarea } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'
import { ChangeEvent, forwardRef, useMemo } from 'react'

import { Label } from '@components/forms'
import { useConverterOptionsContext } from '@contexts/ConverterOptionsContext'
import { input as numberInput } from '@lib/inputs/NumberInput'
import {
  defaultOptions,
  maxRadix,
  minRadix,
  validRadices,
} from '@lib/outputs/NumberBaseOutput'
import { OutputProps } from '@lib/types'

export const NumberBaseOutput = forwardRef<HTMLTextAreaElement, OutputProps>(
  ({ converter, input, ...props }: OutputProps, ref) => {
    const { t } = useTranslation('domain-convert-outputs-numberBaseOutput')
    const { options, setOptions } = useConverterOptionsContext(
      converter.outputId,
    )

    const parsedInput = useMemo(() => numberInput(input), [input])

    const value = useMemo(
      () => converter.operation(parsedInput || '', options),
      [parsedInput, converter, options],
    )

    const fromRadices = useMemo(() => validRadices(parsedInput), [parsedInput])

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
        <Pane
          alignItems="baseline"
          display="flex"
          flexDirection="row"
          gap={majorScale(2)}
          marginBottom={majorScale(1)}
        >
          <Pane>
            <Label label={t('label_from_radix')}>
              <Select
                alignSelf="start"
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

            <Label label={t('label_to_radix')}>
              <Select
                alignSelf="start"
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

        <Label label={t('label_result', { base: toRadix })}>
          <Textarea
            {...props}
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
