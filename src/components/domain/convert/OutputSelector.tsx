import { Combobox } from 'evergreen-ui'
import { uniqBy } from 'lodash'
import useTranslation from 'next-translate/useTranslation'
import { useMemo } from 'react'

import { LayoutColumn } from '@components/domain/convert/LayoutColumn'
import { Input } from '@lib/inputs'
import { Output } from '@lib/outputs'

interface Props {
  inputs: Input[]
  setOutput: (output: Output) => void
}

export const OutputSelector = ({ inputs, setOutput }: Props) => {
  const { t } = useTranslation('domain-convert-outputSelector')

  const outputs = useMemo(
    () => uniqBy(inputs.map((input) => input.outputs).flat(), 'id'),
    [inputs],
  )

  return (
    <LayoutColumn>
      <Combobox
        itemToString={(item) => (item ? item.id : '')}
        items={outputs}
        onChange={(selected) => setOutput(selected)}
        openOnFocus={true}
        placeholder={t('placeholder')}
      />
    </LayoutColumn>
  )
}
