import { forwardRef, useMemo } from 'react'
import { majorScale } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'

import { Form, JsonTextarea, Label } from '@components/forms'
import type { OutputProps } from '@lib/types'
import { header } from '@lib/outputs/JwtOutput'

// Used to calculate heights for the textareas to display all of the content.
const TextAreaLineHeight = 20

/**
 * Forwards the Textarea ref to the output component.
 */
export const JwtOutput = forwardRef<HTMLTextAreaElement, OutputProps>(
  /**
   * Provides a UI for formatting JWT output.
   *
   * @param props - The output props.
   * @param ref   - The forwarded ref, which becomes a reference to the TextArea.
   */
  ({ disabled, input, output, ...props }: OutputProps, ref) => {
    const { t } = useTranslation('domain-convert-outputs-jwtOutput')

    const headerStr = useMemo(() => header(input), [input])

    const headerStrHeight = Math.max(
      headerStr.split('\n').length * TextAreaLineHeight,
      majorScale(10),
    )

    const payloadHeight = Math.max(
      output.split('\n').length * TextAreaLineHeight,
      majorScale(20),
    )

    return (
      <Form>
        <Label
          alignItems="start"
          disabled={disabled}
          flexDirection="column"
          htmlFor="headerInput"
          label={t('label_header')}
        >
          <JsonTextarea
            data-testid="jwt-header-output"
            disabled={disabled}
            id="headerInput"
            minHeight={headerStrHeight}
            readOnly={true}
            value={headerStr}
          />
        </Label>

        <Label
          alignItems="start"
          disabled={disabled}
          flexDirection="column"
          htmlFor="converted-output"
          label={t('label_payload')}
        >
          <JsonTextarea
            {...props}
            data-testid="jwt-body-output"
            disabled={disabled}
            minHeight={payloadHeight}
            ref={ref}
            value={output}
          />
        </Label>
      </Form>
    )
  },
)
