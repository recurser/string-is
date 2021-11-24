import { Checkbox, majorScale, Pane, Select } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'
import { ChangeEvent, forwardRef, useMemo } from 'react'

import { CodeTextarea } from '@components/forms'
import { useConverterOptionsContext } from '@contexts/ConverterOptionsContext'
import { OutputProps } from '@lib/types'

export const YamlOutput = forwardRef<HTMLTextAreaElement, OutputProps>(
  ({ converter, input, ...props }: OutputProps, ref) => {
    const { t } = useTranslation('domain-convert-outputs-yamlOutput')
    const { options, setOptions } = useConverterOptionsContext(
      converter.outputId,
    )

    const value = useMemo(() => {
      return converter.operation(input, options)
    }, [input, converter, options])

    const onChangeForceQuotes = (event: ChangeEvent<HTMLInputElement>) => {
      setOptions({ ...options, forceQuotes: event.target.checked })
    }

    const onChangeIndent = (event: ChangeEvent<HTMLSelectElement>) => {
      setOptions({ ...options, indent: parseInt(event.target.value, 10) })
    }

    const onChangeSortKeys = (event: ChangeEvent<HTMLInputElement>) => {
      setOptions({ ...options, sortKeys: event.target.checked })
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
              onChange={onChangeIndent}
              value={options.indent as number}
              width={majorScale(12)}
            >
              <option value={2}>{t('2SpacesOption')}</option>
              <option value={3}>{t('3SpacesOption')}</option>
              <option value={4}>{t('4SpacesOption')}</option>
            </Select>
          </Pane>

          <Checkbox
            checked={options.sortKeys as boolean}
            label={t('sortKeysLabel')}
            marginBottom={0}
            marginTop={0}
            onChange={onChangeSortKeys}
          />

          <Checkbox
            checked={options.forceQuotes as boolean}
            label={t('forceQuotesLabel')}
            marginBottom={0}
            marginTop={0}
            onChange={onChangeForceQuotes}
          />
        </Pane>

        <CodeTextarea
          {...props}
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
