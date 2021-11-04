import { Checkbox, majorScale, Pane, TextareaProps } from 'evergreen-ui'
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

export const CsvOutput = forwardRef<HTMLTextAreaElement, Props>(
  ({ setOptions, ...props }: Props, ref) => {
    const { t } = useTranslation('domain-convert-outputs-csvOutput')
    const [header, setHeader] = useState(true)
    const [quotes, setQuotes] = useState(true)

    useEffect(() => {
      setOptions({ header, quotes })
    }, [header, quotes, setOptions])

    const onChangeHeader = (event: ChangeEvent<HTMLInputElement>) => {
      setHeader(event.target.checked)
    }

    const onChangeQuotes = (event: ChangeEvent<HTMLInputElement>) => {
      setQuotes(event.target.checked)
    }

    return (
      <>
        <Pane
          alignItems="end"
          display="flex"
          flexDirection="row"
          gap={majorScale(2)}
        >
          <Checkbox
            checked={quotes}
            label={t('quotesLabel')}
            marginTop={0}
            onChange={onChangeQuotes}
          />

          <Checkbox
            checked={header}
            label={t('headerLabel')}
            marginTop={0}
            onChange={onChangeHeader}
          />
        </Pane>
        <CodeTextarea {...props} ref={ref} />
      </>
    )
  },
)
