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
    const [space, setSpace] = useState('  ')
    const [sortKeys, setSortKeys] = useState(true)

    useEffect(() => {
      setOptions({ sortKeys, space })
    }, [setOptions, space, sortKeys])

    const onChangeSpace = (event: ChangeEvent<HTMLSelectElement>) => {
      setSpace(event.target.value as string)
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
              <option value={'  '}>{t('2SpacesOption')}</option>
              <option value={'   '}>{t('3SpacesOption')}</option>
              <option value={'    '}>{t('4SpacesOption')}</option>
              <option value={'\t'}>{t('1TabOption')}</option>
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

        <CodeTextarea
          {...props}
          minHeight={
            `calc(100% - ${majorScale(
              8,
            )}px)` /* Allow for the select box height in settings */
          }
          ref={ref}
        />
      </>
    )
  },
)
