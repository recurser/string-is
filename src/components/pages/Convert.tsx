import { majorScale, Pane, Text } from 'evergreen-ui'
import { uniqBy } from 'lodash'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import { useEffect, useMemo, useState } from 'react'

import { Form } from '@components/domain/input'
import { Plain } from '@components/domain/output'
import { Card } from '@components/layout/Card'
import { useInputContext } from '@contexts/InputContext'
import { DefaultInput, selectInputs } from '@services/Converter'

export const Convert = () => {
  const { t } = useTranslation('pages-convert')
  const [inputs, setInputs] = useState([DefaultInput])

  console.log(
    'inputs',
    inputs.map((input) => input.id),
  )

  const { inputString } = useInputContext()

  useEffect(() => {
    const select = async () => {
      const selected = await selectInputs(inputString)
      setInputs(selected)
    }
    select()
  }, [inputString])

  // We want a unique list of outputs supported by our list of inputs.
  const outputs = useMemo(
    () => uniqBy(inputs.map((input) => input.outputs).flat(), 'id'),
    [inputs],
  )

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
            {outputs.map((output, index) => (
              <li key={`output-${index}`}>
                <Text>{output.id}</Text>
              </li>
            ))}
          </ul>

          <Pane flex={1} flexDirection="column">
            <Plain output={inputs[0].outputs[0]} />
          </Pane>
        </Pane>
      </Card>
    </Pane>
  )
}
