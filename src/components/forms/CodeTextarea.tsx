import { Pane, Textarea, TextareaProps, majorScale } from 'evergreen-ui'
import { ReactElement, forwardRef } from 'react'
import styledComponents from 'styled-components'

import { CopyButton } from '@components/forms/CopyButton'
import { theme } from '@services/Theme'

interface Props extends TextareaProps {
  copy?: boolean
}

const MonoFontTextarea = styledComponents(Textarea)`
  font-family: ${theme.fontFamilies.mono} !important;
`

export const CodeTextarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ copy, disabled, value, ...props }: Props, ref): ReactElement => {
    return (
      <Pane
        alignItems="end"
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
