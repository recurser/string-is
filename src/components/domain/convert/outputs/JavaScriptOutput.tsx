import { Checkbox, majorScale, Select, TextInput } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'
import { ChangeEvent, forwardRef, useMemo, useState } from 'react'

import { OutputError } from '@components/domain/convert/OutputError'
import { CodeTextarea, Form, Label } from '@components/forms'
import { useConverterOptionsContext } from '@contexts/ConverterOptionsContext'
import { error } from '@lib/outputs/JavaScriptOutput'
import { OutputProps } from '@lib/types'

export const JavaScriptOutput = forwardRef<HTMLTextAreaElement, OutputProps>(
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

    const onChangeSemicolon = (event: ChangeEvent<HTMLInputElement>) => {
      setOptions({ ...options, semi: event.target.checked })
    }

    const onChangeSingleQuote = (event: ChangeEvent<HTMLInputElement>) => {
      setOptions({ ...options, singleQuote: event.target.checked })
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
            maxWidth={majorScale(15)}
            onChange={onChangePrintWidth}
            type="number"
            value={options.printWidth as number}
          />
        </Label>

        <Label
          disabled={disabled}
          htmlFor="semicolonInput"
          label={t('semicolonLabel')}
        >
          <Checkbox
            checked={options.semi as boolean}
            disabled={disabled}
            id="semicolonInput"
            onChange={onChangeSemicolon}
          />
        </Label>

        <Label
          disabled={disabled}
          htmlFor="singleQuoteInput"
          label={t('singleQuoteLabel')}
        >
          <Checkbox
            checked={options.singleQuote as boolean}
            disabled={disabled}
            id="singleQuoteInput"
            onChange={onChangeSingleQuote}
          />
        </Label>

        <CodeTextarea {...props} ref={ref} value={value} />
      </Form>
    )
  },
)
