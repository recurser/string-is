import {
  Button,
  Pane,
  ShareIcon,
  TickIcon,
  Tooltip,
  majorScale,
} from 'evergreen-ui'
import { encode, encodeURI } from 'js-base64'
import { useMemo, useState } from 'react'
import { isEmpty } from 'lodash'
import useTranslation from 'next-translate/useTranslation'

import { copyToClipboard } from '@lib/utilities/Clipboard'
import { useConverterContext } from '@contexts/ConverterContext'
import { useConverterOptionsContext } from '@contexts/ConverterOptionsContext'

/**
 * Renders a button to move the content of the output textarea into
 * the input textarea. This is convenient for chaining operations,
 * and feeding the result of one operation into another.
 */
export const ShareButton = () => {
  const { t } = useTranslation('domain-convert-shareButton')
  const [copied, setCopied] = useState(false)
  const { inputString, converter } = useConverterContext()
  const { options } = useConverterOptionsContext(converter.outputId)
  const disabled = useMemo(() => isEmpty(inputString), [inputString])

  const onClick = async () => {
    if (!isEmpty(inputString) && !copied) {
      const encodedInput = encodeURI(inputString)
      const encodedOptions = encode(JSON.stringify(options))
      const url = `${window.location.href.replace(
        /[#\?].*$/,
        '',
      )}?i=${encodedInput}&o=${encodedOptions}`
      await copyToClipboard(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 1000)
    }
  }

  return (
    <Pane display="flex" flexDirection="row" marginTop={majorScale(1)}>
      <Tooltip content={t('copied_tooltip')} isShown={copied}>
        <Button
          disabled={disabled}
          flex={1}
          iconBefore={copied ? <TickIcon color="success" /> : <ShareIcon />}
          maxWidth={majorScale(20)}
          onClick={onClick}
        >
          {t('button_label')}
        </Button>
      </Tooltip>
    </Pane>
  )
}
