import { majorScale, Pane, Select, TextareaProps } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'
import {
  ChangeEvent,
  Dispatch,
  forwardRef,
  SetStateAction,
  useState,
} from 'react'

import { CodeTextarea } from '@components/forms'
import { useConverterOptionsContext } from '@contexts/ConverterOptionsContext'
import { id as outputId } from '@lib/outputs/HtmlOutput'
import { ConverterOptions } from '@lib/types'

interface Props extends TextareaProps {
  setOptions: Dispatch<SetStateAction<ConverterOptions>>
}

export const HtmlOutput = forwardRef<HTMLTextAreaElement, Props>(
  (props: Props, ref) => {
    const { t } = useTranslation('domain-convert-outputs-htmlOutput')
    const { options, setOptions } = useConverterOptionsContext(outputId)
    const [space, setSpace] = useState(
      (options.indent_char as string).repeat(options.indent_size as number),
    )

    const onChangeSpace = (event: ChangeEvent<HTMLSelectElement>) => {
      const spc = event.target.value
      const indent_char = spc[0]
      const indent_size = spc.split(spc[0]).length
      setOptions({ ...options, indent_char, indent_size })
      setSpace(event.target.value)
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
        </Pane>
        <CodeTextarea {...props} ref={ref} />
      </>
    )
  },
)
