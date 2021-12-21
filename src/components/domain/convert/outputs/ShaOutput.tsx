import { majorScale, Pane, Select } from 'evergreen-ui'
import { isEmpty } from 'lodash'
import useTranslation from 'next-translate/useTranslation'
import { ChangeEvent, forwardRef, useMemo } from 'react'

import { CodeTextarea } from '@components/forms'
import { useConverterOptionsContext } from '@contexts/ConverterOptionsContext'
import { OutputProps } from '@lib/types'

export const ShaOutput = forwardRef<HTMLTextAreaElement, OutputProps>(
  ({ converter, disabled, input, ...props }: OutputProps, ref) => {
    const { t } = useTranslation('domain-convert-outputs-shaOutput')
    const { options, setOptions } = useConverterOptionsContext(
      converter.outputId,
    )

    const value = useMemo(() => {
      if (isEmpty(input)) {
        return ''
      }

      return converter.operation(input, options)
    }, [input, converter, options])

    const onChangeAlgorithm = (event: ChangeEvent<HTMLSelectElement>) => {
      setOptions({ ...options, algorithm: event.target.value })
    }

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
            <Select
              alignSelf="start"
              disabled={disabled}
              onChange={onChangeAlgorithm}
              value={options.algorithm as string}
              width={majorScale(12)}
            >
              <option value={'sha1'}>{t('sha1Option')}</option>
              <option value={'sha224'}>{t('sha224Option')}</option>
              <option value={'sha256'}>{t('sha256Option')}</option>
              <option value={'sha384'}>{t('sha384Option')}</option>
              <option value={'sha512'}>{t('sha512Option')}</option>
            </Select>
          </Pane>
        </Pane>

        <CodeTextarea
          {...props}
          disabled={disabled}
          minHeight={
            `calc(100% - ${majorScale(
              8,
            )}px)` /* Allow for the select box height in settings */
          }
          ref={ref}
          value={value}
        />
      </>
    )
  },
)
