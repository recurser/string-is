import { majorScale, Pane, Select, TextareaProps } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'
import { ChangeEvent, Dispatch, forwardRef, SetStateAction } from 'react'

import { CodeTextarea } from '@components/forms'
import { useConverterOptionsContext } from '@contexts/ConverterOptionsContext'
import { id as outputId } from '@lib/outputs/ShaOutput'
import { ConverterOptions } from '@lib/types'

interface Props extends TextareaProps {
  setOptions: Dispatch<SetStateAction<ConverterOptions>>
}

export const ShaOutput = forwardRef<HTMLTextAreaElement, Props>(
  (props: Props, ref) => {
    const { t } = useTranslation('domain-convert-outputs-shaOutput')
    const { options, setOptions } = useConverterOptionsContext(outputId)

    const onChangeAlgorithm = (event: ChangeEvent<HTMLSelectElement>) => {
      setOptions({ ...options, algorithm: event.target.value })
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
              onChange={onChangeAlgorithm}
              value={options.algorithm as string}
              width={majorScale(12)}
            >
              <option value={'sha1'}>{t('sha1Option')}</option>
              <option value={'sha224'}>{t('sha224Option')}</option>
              <option value={'sha256'}>{t('sha256Option')}</option>
              <option value={'sha384'}>{t('sha384Option')}</option>
              <option value={'sha512'}>{t('sha512Option')}</option>
            </Select>
          </Pane>
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
