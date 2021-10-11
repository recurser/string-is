import { Paragraph, Textarea } from 'evergreen-ui'
import { debounce } from 'lodash'
import useTranslation from 'next-translate/useTranslation'
import { useMemo, useEffect, useState } from 'react'

import { Output } from '@lib/outputs'
import { useInputContext } from '@contexts/InputContext'

interface Props {
  output: Output
}
export const Plain = ({ output }: Props) => {
  const { t } = useTranslation('domain-output-plain')

  const { inputString } = useInputContext()

  const [encoded, setEncoded] = useState(inputString)

  const doDebounce = useMemo(
    () => debounce((data: string) => setEncoded(output.operation(data)), 300),
    [output],
  )

  useEffect(() => doDebounce(inputString), [inputString, doDebounce])

  return (
    <>
      <Paragraph>{t('label')}</Paragraph>
      <Textarea readOnly={true} value={encoded} />
    </>
  )
}
