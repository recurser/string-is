import { majorScale, Pane } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'

import { Form } from '@components/domain/input'
import { Plain } from '@components/domain/output'
import { Card } from '@components/layout/Card'
import { useInputContext } from '@contexts/InputContext'

export const Convert = () => {
  const { t } = useTranslation('pages-convert')

  const { input } = useInputContext()

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

          <Pane flex={1} flexDirection="column">
            <Plain input={input} operation={btoa} />
          </Pane>
        </Pane>
      </Card>
    </Pane>
  )
}
