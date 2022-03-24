import {
  DuplicateIcon,
  IconButton,
  IconButtonProps,
  TickIcon,
  Tooltip,
} from 'evergreen-ui'
import { isEmpty } from 'lodash'
import { styled } from '@compiled/react'
import { useState } from 'react'
import useTranslation from 'next-translate/useTranslation'

interface Props extends IconButtonProps {
  /**
   * The value of the text string to copy to the
   * clipboard when the button is clicked.
   */
  value: string | number
}

// Put a slight transparent background for readability when there's text behind the button.
const StyledButton = styled(IconButton)`
  &:not(:hover) {
    background-color: rgba(255, 255, 255, 0.8) !important;
  }
`

/**
 * Copies the given string to the browser's clipboard.
 *
 * @param text - the text to copy.
 */
const copyToClipboard = async (text: string) => {
  if (navigator.clipboard) {
    return await navigator.clipboard.writeText(text)
  } else {
    return document.execCommand('copy', true, text)
  }
}

/**
 * Renders a button that will copy the given value to the
 * browser's clipboard when clicked.
 *
 * @param props - the component props.
 */
export const CopyButton = ({ value, ...props }: Props) => {
  const { t } = useTranslation('forms-copyButton')
  const [copied, setCopied] = useState(false)
  const strValue = value.toString()

  /**
   * Handles a click on the copy button, and calls
   * the copy-to-clipboard operation if necessary.
   */
  const onClick = async () => {
    if (!isEmpty(strValue) && !copied) {
      await copyToClipboard(strValue)
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
