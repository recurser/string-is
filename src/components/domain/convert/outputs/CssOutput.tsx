import { majorScale, Select, TextInput } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'
import { ChangeEvent, forwardRef, useMemo, useState } from 'react'

import { OutputError } from '@components/domain/convert/OutputError'
import { CodeTextarea, Form, Label } from '@components/forms'
import { useConverterOptionsContext } from '@contexts/ConverterOptionsContext'
import { error } from '@lib/outputs/CssOutput'
import { OutputProps } from '@lib/types'

export const CssOutput = forwardRef<HTMLTextAreaElement, OutputProps>(
  ({ converter, disabled, input, ...props }: OutputProps, ref) => {
    const { t } = useTranslation('domain-convert-outputs-javaScriptOutput')
    const { options, setOptions } = useConverterOptionsContext(
      converter.outputId,
    )
    const [space, setSpace] = useState(
      (options.useTabs ? '\t' : ' ').repeat(options.tabWidth as number),
    )

    const errorMessage = useMemo(() => error(input), [input])

    const value = useMemo(() => {
      return converter.operation(input, options)
    }, [input, converter, options])

    const onChangePrintWidth = (event: ChangeEvent<HTMLInputElement>) => {
      const printWidth = parseInt(event.target.value, 10)
      if (printWidth > 0) {
        setOptions({ ...options, printWidth })
      }
    }

    const onChangeSpace = (event: ChangeEvent<HTMLSelectElement>) => {
      const spc = event.target.value
      const useTabs = spc[0] === '\t'
      const tabWidth = spc.split('').length
      setOptions({ ...options, tabWidth, useTabs })
      setSpace(event.target.value)
    }

    return (
      <Form>
        <OutputError message={errorMessage} />

        <Label
          disabled={disabled}
          htmlFor="indentInput"
          label={t('indentLabel')}
        >
          <Select
            disabled={disabled}
            id="indentInput"
            maxWidth={majorScale(15)}
            onChange={onChangeSpace}
            value={space}
          >
            <option value={'  '}>{t('2SpacesOption')}</option>
            <option value={'    '}>{t('4SpacesOption')}</option>
            <option value={'\t'}>{t('1TabOption')}</option>
          </Select>
        </Label>

        <Label
          disabled={disabled}
          htmlFor="printWidthInput"
          label={t('printWidthLabel')}
          suffix={t('charactersSuffix')}
        >
          <TextInput
            disabled={disabled}
            id="printWidthInput"
            maxWidth={majorScale(12)}
            onChange={onChangePrintWidth}
            type="number"
            value={options.printWidth as number}
          />
        </Label>

        <CodeTextarea {...props} disabled={disabled} ref={ref} value={value} />
      </Form>
    )
  },
)
