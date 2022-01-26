import {
  DuplicateIcon,
  IconButton,
  IconButtonProps,
  TickIcon,
  Tooltip,
} from 'evergreen-ui'
import { isEmpty } from 'lodash'
import styledComponents from 'styled-components'
import { useState } from 'react'
import useTranslation from 'next-translate/useTranslation'

interface Props extends IconButtonProps {
  value: string
}

// Put a slight transparent background for readability when there's text behind the button.
const StyledButton = styledComponents(IconButton)`
  &:not(:hover) {
    background-color: rgba(255, 255, 255, 0.8) !important;
  }
`

const copyToClipboard = async (text: string) => {
  if (navigator.clipboard) {
    return await navigator.clipboard.writeText(text)
  } else {
    return document.execCommand('copy', true, text)
  }
}

export const CopyButton = ({ value, ...props }: Props) => {
  const { t } = useTranslation('forms-copyButton')
  const [copied, setCopied] = useState(false)

  const onClick = async () => {
    if (!isEmpty(value) && !copied) {
      await copyToClipboard(`${value}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 1000)
    }
  }

  return (
    <Tooltip content={t('copy_tooltip')}>
      <StyledButton
        appearance="minimal"
        icon={
          copied ? <TickIcon color="success" /> : <DuplicateIcon margin={0} />
        }
        onClick={onClick}
        {...props}
      />
    </Tooltip>
  )
}
