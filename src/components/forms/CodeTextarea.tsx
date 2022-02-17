import { Pane, Textarea, TextareaProps, majorScale } from 'evergreen-ui'
import { ReactElement, forwardRef } from 'react'
import styledComponents from 'styled-components'

import { CopyButton } from '@components/forms/CopyButton'
import { theme } from '@services/Theme'

interface Props extends TextareaProps {
  /**
   * True if we should display a 'copy' button on the
   * textarea, false or undefined otherwise.
   */
  copy?: boolean
}

const MonoFontTextarea = styledComponents(Textarea)`
  font-family: ${theme.fontFamilies.mono} !important;
`

/**
 * Forwards the ref to the textarea component, to enable us to focus dynamically.
 */
export const CodeTextarea = forwardRef<HTMLTextAreaElement, Props>(
  /**
   * Renders a monospace font textarea for displaying code or structured text.
   *
   * @param props - The component props.
   * @param ref   - The forwarded ref, which becomes a reference to the TextArea.
   */
  ({ copy, disabled, value, ...props }: Props, ref): ReactElement => {
    return (
      <Pane
        alignItems="flex-end"
        display="flex"
        flex={1}
        flexDirection="column"
        width="100%"
      >
        {copy && !disabled && (
          <CopyButton
            disabled={disabled}
            margin={majorScale(1)}
            position="absolute"
            value={value as string}
            zIndex={3}
          />
        )}

        <MonoFontTextarea
          {...props}
          disabled={disabled}
          ref={ref}
          value={value}
        />
      </Pane>
    )
  },
)

CodeTextarea.defaultProps = {
  copy: true,
  minHeight: majorScale(20),
}
