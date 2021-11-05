import { Checkbox, majorScale, Pane, Select, TextareaProps } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'
import {
  ChangeEvent,
  Dispatch,
  forwardRef,
  SetStateAction,
  useEffect,
  useState,
} from 'react'

import { CodeTextarea } from '@components/forms'
import { ConverterOptions } from '@lib/types'

interface Props extends TextareaProps {
  setOptions: Dispatch<SetStateAction<ConverterOptions>>
}

export const YamlOutput = forwardRef<HTMLTextAreaElement, Props>(
  ({ setOptions, ...props }: Props, ref) => {
    const { t } = useTranslation('domain-convert-outputs-yamlOutput')
    const [forceQuotes, setForceQuotes] = useState(true)
    const [indent, setIndent] = useState(2)
    const [sortKeys, setSortKeys] = useState(true)

    useEffect(() => {
      setOptions({ forceQuotes, indent, sortKeys })
    }, [forceQuotes, indent, setOptions, sortKeys])

    const onChangeForceQuotes = (event: ChangeEvent<HTMLInputElement>) => {
      setForceQuotes(event.target.checked)
    }

    const onChangeIndent = (event: ChangeEvent<HTMLSelectElement>) => {
      setIndent(parseInt(event.target.value, 10))
    }

    const onChangeSortKeys = (event: ChangeEvent<HTMLInputElement>) => {
      setSortKeys(event.target.checked)
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
              value={indent}
              width={majorScale(12)}
            >
              <option value={2}>{t('2SpacesOption')}</option>
              <option value={3}>{t('3SpacesOption')}</option>
              <option value={4}>{t('4SpacesOption')}</option>
            </Select>
          </Pane>

          <Checkbox
            checked={sortKeys}
            label={t('sortKeysLabel')}
            marginBottom={0}
            marginTop={0}
            onChange={onChangeSortKeys}
          />

          <Checkbox
            checked={forceQuotes}
            label={t('forceQuotesLabel')}
            marginBottom={0}
            marginTop={0}
            onChange={onChangeForceQuotes}
          />
        </Pane>
        <CodeTextarea {...props} ref={ref} />
      </>
    )
  },
)
