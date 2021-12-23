import { majorScale, Select } from 'evergreen-ui'
import { isEmpty } from 'lodash'
import useTranslation from 'next-translate/useTranslation'
import { ChangeEvent, forwardRef, useMemo } from 'react'

import { CodeTextarea, Form, Label } from '@components/forms'
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
      <Form>
        <Label
          disabled={disabled}
          inputId="algorithmInput"
          label={t('algorithmLabel')}
        >
          <Select
            disabled={disabled}
            id="algorithmInput"
            maxWidth={majorScale(12)}
            onChange={onChangeAlgorithm}
            value={options.algorithm as string}
          >
            <option value={'sha1'}>{t('sha1Option')}</option>
            <option value={'sha224'}>{t('sha224Option')}</option>
            <option value={'sha256'}>{t('sha256Option')}</option>
            <option value={'sha384'}>{t('sha384Option')}</option>
            <option value={'sha512'}>{t('sha512Option')}</option>
          </Select>
        </Label>

        <CodeTextarea {...props} disabled={disabled} ref={ref} value={value} />
      </Form>
    )
  },
)
