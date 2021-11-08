import { majorScale, Pane, Select, TextareaProps } from 'evergreen-ui'
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

export const HtmlOutput = forwardRef<HTMLTextAreaElement, Props>(
  ({ setOptions, ...props }: Props, ref) => {
    const { t } = useTranslation('domain-convert-outputs-htmlOutput')
    const [space, setSpace] = useState('  ')

    useEffect(() => {
      const indent_char = space[0]
      const indent_size = space.split(space[0]).length
      setOptions({ indent_char, indent_size })
    }, [setOptions, space])

    const onChangeSpace = (event: ChangeEvent<HTMLSelectElement>) => {
      setSpace(event.target.value)
    }

    useEffect

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
        </Pane>
        <CodeTextarea {...props} ref={ref} />
      </>
    )
  },
)
