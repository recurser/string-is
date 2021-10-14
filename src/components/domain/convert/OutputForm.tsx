import { Textarea } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'
import { useMemo } from 'react'

import { LayoutColumn } from '@components/domain/convert/LayoutColumn'
import { useInputContext } from '@contexts/InputContext'
import { Output } from '@lib/outputs'

interface Props {
  output?: Output
}
export const OutputForm = ({ output }: Props) => {
  const { t } = useTranslation('domain-convert-result')
  const { inputString } = useInputContext()

  const value = useMemo(() => {
    if (!output) {
      return ''
    }

    return output.operation(inputString)
  }, [inputString, output])

  return (
    <LayoutColumn label={output ? `3. ${output?.id} 👇` : t('default_label')}>
      <Textarea
        disabled={!output}
        height="100%"
        readOnly={true}
        value={value}
      />
    </LayoutColumn>
  )
}
