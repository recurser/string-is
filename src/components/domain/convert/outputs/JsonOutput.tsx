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

export const JsonOutput = forwardRef<HTMLTextAreaElement, Props>(
  ({ setOptions, ...props }: Props, ref) => {
    const { t } = useTranslation('domain-convert-outputs-jsonOutput')
    const [space, setSpace] = useState(2)
    const [sortKeys, setSortKeys] = useState(true)

    useEffect(() => {
      setOptions({ sortKeys, space })
    }, [setOptions, space, sortKeys])

    const onChangeSpace = (event: ChangeEvent<HTMLSelectElement>) => {
      setSpace(parseInt(event.target.value, 10))
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
              onChange={onChangeSpace}
              value={space}
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
        </Pane>
        <CodeTextarea {...props} ref={ref} />
      </>
    )
  },
)
