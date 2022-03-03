import { Pane, Textarea, TextareaProps, majorScale } from 'evergreen-ui'
import { ReactElement, forwardRef } from 'react'
import styledComponents from 'styled-components'

import { CopyButton } from '@components/forms/CopyButton'
import { SyntaxHighlitTextarea } from '@components/forms/Textarea/SyntaxHighlitTextarea'
import { theme } from '@services/Theme'

export interface CodeTextareaProps extends TextareaProps {
  /**
   * True if we should display a 'copy' button on the
   * textarea, false or undefined otherwise.
   */
  copy?: boolean

  /**
   * Provides a syntax highlighting function for the
   * appropriate language.
   */
  highlight?: (value: string) => string
}

const MonoFontTextarea = styledComponents(Textarea)`
  font-family: ${theme.fontFamilies.mono} !important;
`

/**
 * Forwards the ref to the textarea component, to enable us to focus dynamically.
 */
export const CodeTextarea = forwardRef<HTMLTextAreaElement, CodeTextareaProps>(
  /**
   * Renders a monospace font textarea for displaying code or structured text.
   *
   * @param props - The component props.
   * @param ref   - The forwarded ref, which becomes a reference to the TextArea.
   */
  (
    {
      copy,
      disabled,
      highlight,
      minHeight,
      value,
      ...props
    }: CodeTextareaProps,
    ref,
  ): ReactElement => {
    return (
      <Pane
        alignItems="flex-end"
        display="flex"
        flex={1}
        flexDirection="column"
        height="100%"
        minHeight={minHeight}
        width="100%"
      >
        {copy && !disabled ? (
          <CopyButton
            disabled={disabled}
            margin={majorScale(1)}
            position="absolute"
            value={value as string}
            zIndex={3}
          />
        ) : null}

        {!highlight ? (
          <MonoFontTextarea
            {...props}
            disabled={disabled}
            ref={ref}
            spellCheck={false}
            value={value}
          />
        ) : null}

        {highlight ? (
          <SyntaxHighlitTextarea
            {...props}
            disabled={disabled}
            highlight={highlight}
            ref={ref}
            value={value}
          />
        ) : null}
      </Pane>
    )
  },
)

CodeTextarea.defaultProps = {
  autoCapitalize: 'off',
  autoComplete: 'off',
  autoCorrect: 'off',
  copy: true,
  height: '100%',
  minHeight: majorScale(20),
  spellCheck: false,
  width: '100%',
}
