import { majorScale, Pane, Text } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import { useEffect, useState } from 'react'

import { Form } from '@components/domain/input'
import { Plain } from '@components/domain/output'
import { Card } from '@components/layout/Card'
import { useInputContext } from '@contexts/InputContext'
import { DefaultInput, selectInput } from '@services/Converter'

export const Convert = () => {
  const { t } = useTranslation('pages-convert')
  const [input, setInput] = useState(DefaultInput)

  const { inputString } = useInputContext()

  useEffect(() => {
    const select = async () => {
      const selected = await selectInput(inputString)
      setInput(selected)
    }
    select()
  }, [inputString])

  return (
    <Pane display="flex" gap={majorScale(2)}>
      <Head>
        <title>{t('page_title')}</title>
      </Head>

      <Card title={t('page_heading')}>
        <Pane display="flex" flexDirection="row" gap={majorScale(3)}>
          <Pane flex={1} flexDirection="column">
            <Form />
          </Pane>

          <ul>
            {input.outputs.map((output, index) => (
              <li key={`output-${index}`}>
                <Text>{output.id}</Text>
              </li>
            ))}
          </ul>

          <Pane flex={1} flexDirection="column">
            <Plain output={input.outputs[0]} />
          </Pane>
        </Pane>
      </Card>
    </Pane>
  )
}
