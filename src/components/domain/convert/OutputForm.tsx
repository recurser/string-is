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
  const { t } = useTranslation('domain-convert-outputForm')
  const { inputString } = useInputContext()
  const disabled = !output

  const value = useMemo(() => {
    if (!output) {
      return ''
    }

    return output.operation(inputString)
  }, [inputString, output])

  return (
    <LayoutColumn
      disabled={disabled}
      label={output ? `3. ${output?.id} 👇` : t('default_label')}
    >
      <Textarea
        disabled={disabled}
        height="100%"
        readOnly={true}
        tabIndex={3}
        value={value}
      />
    </LayoutColumn>
  )
}
