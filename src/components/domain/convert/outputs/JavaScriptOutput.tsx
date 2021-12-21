import { Checkbox, majorScale, Pane, Select, TextInput } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'
import { ChangeEvent, forwardRef, useMemo, useState } from 'react'

import { OutputError } from '@components/domain/convert/OutputError'
import { CodeTextarea, Label } from '@components/forms'
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
      <>
        <OutputError message={errorMessage} />

        <Pane
          display="flex"
          flexDirection="column"
          gap={majorScale(2)}
          marginBottom={majorScale(1)}
        >
          <Label disabled={disabled} label={t('indentLabel')} marginBottom={0}>
            <Select
              alignSelf="start"
              disabled={disabled}
              flex="none"
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
            label={t('printWidthLabel')}
            marginBottom={0}
            suffix={t('charactersSuffix')}
          >
            <TextInput
              disabled={disabled}
              flex={1}
              maxWidth={majorScale(12)}
              min={1}
              onChange={onChangePrintWidth}
              type="number"
              value={options.printWidth as number}
            />
          </Label>

          <Label
            alignItems="start"
            disabled={disabled}
            flexDirection="row"
            marginBottom={0}
          >
            <Checkbox
              checked={options.semi as boolean}
              disabled={disabled}
              label={t('semicolonLabel')}
              marginBottom={0}
              marginTop={0}
              onChange={onChangeSemicolon}
            />
          </Label>

          <Label alignItems="start" disabled={disabled} flexDirection="row">
            <Checkbox
              checked={options.singleQuote as boolean}
              disabled={disabled}
              label={t('singleQuoteLabel')}
              marginBottom={0}
              marginTop={0}
              onChange={onChangeSingleQuote}
            />
          </Label>
        </Pane>

        <hr />

        <CodeTextarea {...props} ref={ref} value={value} />
      </>
    )
  },
)
