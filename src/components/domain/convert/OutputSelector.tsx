import { Combobox } from 'evergreen-ui'
import { uniqBy } from 'lodash'
import useTranslation from 'next-translate/useTranslation'
import { useMemo } from 'react'

import { LayoutColumn } from '@components/domain/convert/LayoutColumn'
import { Input } from '@lib/inputs'

interface Props {
  inputs: Input[]
}

export const OutputSelector = ({ inputs }: Props) => {
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
        onChange={(selected) => console.log(selected)}
        openOnFocus={true}
        placeholder={t('placeholder')}
      />
    </LayoutColumn>
  )
}
