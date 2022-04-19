/**
 * This is based on satya164/react-simple-code-editor:
 *
 * https://github.com/satya164/react-simple-code-editor/blob/master/src/index.js
 *
 * Simplified to remove edit capabilities (we're read-only), and to add
 * ref forwarding for auto-focus support.
 */

import { CSSProperties, ReactElement, forwardRef } from 'react'
import { Pane, Pre, Textarea, minorScale } from 'evergreen-ui'
import { styled } from '@compiled/react'

import type { CodeTextareaProps } from '@components/forms/CodeTextarea'
import { theme } from '@services/Theme'

/**
 * Over-ride some styles on the wrapper Pane, to
 * make it look like an Evergreen UI Textarea.
 */
const StyledPane = styled(Pane)`
  border-radius: ${theme.radii[1]};
  border: 1px solid ${theme.colors.gray400};
  font-family: ${theme.fontFamilies.mono};
  font-size: ${theme.fontSizes[1]};
  width: 100%;

  &:focus-within {
    border-color: ${theme.colors.blue200};
    box-shadow: ${theme.shadows.focusRing};
  }

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    /**
      * IE doesn't support '-webkit-text-fill-color'
      * So we use 'color: transparent' to make the text transparent on IE
      * Unlike other browsers, it doesn't affect caret color in IE
      */
    color: transparent !important;

    &::selection {
      background-color: transparent !important;
      color: transparent !important;
    }
  }
`

/**
 * Over-ride some styles on the hidden Textarea.
 */
const StyledTextarea = styled(Textarea)`
  padding: ${minorScale(2)}px ${minorScale(3)}px;

  &:focus-visible {
    outline: none;
  }
`

/**
 * These are common styles used to make the formatted and
 * syntax-highlit <pre /> code (which is visible) fit the
 * hidden raw text in the textarea.
 */
const editorStyles = {
  border: 'none',
  boxSizing: 'inherit',
  display: 'inherit',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  fontStyle: 'inherit',
  fontVariantLigatures: 'inherit',
  fontWeight: 'inherit',
  letterSpacing: 'inherit',
  lineHeight: 'inherit',
  margin: 0,
  overflowWrap: 'break-word',
  tabSize: 'inherit',
  textIndent: 'inherit',
  textRendering: 'inherit',
  textTransform: 'inherit',
  whiteSpace: 'pre-wrap',
  wordBreak: 'keep-all',
} as CSSProperties

export const SyntaxHighlitTextarea = forwardRef<
  HTMLTextAreaElement,
  CodeTextareaProps
>(
  /**
   * Renders a monospace font textarea for displaying code or structured text.
   *
   * @param props - The component props.
   * @param ref   - The forwarded ref, which becomes a reference to the TextArea.
   */
  (
    { highlight, value, className, ...props }: CodeTextareaProps,
    ref,
  ): ReactElement => {
    const formatted = highlight ? highlight(value as string) : value

    return (
      <StyledPane
        className={className}
        flex={1}
        height="100%"
        overflow="hidden"
        position="relative"
      >
        <StyledTextarea
          left={0}
          position="absolute"
          ref={ref}
          style={{
            ...editorStyles,
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            WebkitTextFillColor: 'transparent',
            // We don't want to over-ride the Evergreen UI background style for disabled textareas.
            background: props.disabled ? undefined : 'none',
          }}
          top={0}
          value={value}
          {...props}
        />
        <Pre
          aria-hidden="true"
          dangerouslySetInnerHTML={{ __html: formatted + '<br />' }}
          paddingX={minorScale(3)}
          paddingY={minorScale(2)}
          pointerEvents="none"
          position="relative"
          style={editorStyles}
        />
      </StyledPane>
    )
  },
)
