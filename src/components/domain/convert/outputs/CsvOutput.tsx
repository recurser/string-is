import { Checkbox, majorScale, Pane } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'
import { ChangeEvent, forwardRef, useMemo } from 'react'

import { CodeTextarea } from '@components/forms'
import { useConverterOptionsContext } from '@contexts/ConverterOptionsContext'
import { OutputProps } from '@lib/types'

export const CsvOutput = forwardRef<HTMLTextAreaElement, OutputProps>(
  ({ converter, input, ...props }: OutputProps, ref) => {
    const { t } = useTranslation('domain-convert-outputs-csvOutput')
    const { options, setOptions } = useConverterOptionsContext(
      converter.outputId,
    )

    const value = useMemo(() => {
      return converter.operation(input, options)
    }, [input, converter, options])

    const onChangeHeader = (event: ChangeEvent<HTMLInputElement>) => {
      setOptions({ ...options, header: event.target.checked })
    }

    const onChangeQuotes = (event: ChangeEvent<HTMLInputElement>) => {
      setOptions({ ...options, quotes: event.target.checked })
    }

    return (
      <>
        <Pane
          alignItems="end"
          display="flex"
          flexDirection="row"
          gap={majorScale(2)}
        >
          <Checkbox
            checked={options.quotes as boolean}
            label={t('quotesLabel')}
            marginTop={0}
            onChange={onChangeQuotes}
          />

          <Checkbox
            checked={options.header as boolean}
            label={t('headerLabel')}
            marginTop={0}
            onChange={onChangeHeader}
          />
        </Pane>

        <CodeTextarea
          {...props}
          minHeight={
            `calc(100% - ${majorScale(
              7,
            )}px)` /* Allow for the checkbox height in settings */
          }
          ref={ref}
          value={value}
        />
      </>
    )
  },
)
