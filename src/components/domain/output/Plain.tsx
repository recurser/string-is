import { Paragraph, Textarea } from 'evergreen-ui'
import { debounce } from 'lodash'
import useTranslation from 'next-translate/useTranslation'
import { useMemo, useEffect, useState } from 'react'

interface Props {
  input: string
  operation: (input: string) => string
}
export const Plain = ({ input, operation }: Props) => {
  const { t } = useTranslation('domain-output-plain')

  const [encoded, setEncoded] = useState(input)

  const doDebounce = useMemo(
    () => debounce((data: string) => setEncoded(operation(data)), 300),
    [operation],
  )

  useEffect(() => doDebounce(input), [input, doDebounce])

  return (
    <>
      <Paragraph>{t('label')}</Paragraph>
      <Textarea readOnly={true} value={encoded} />
    </>
  )
}
