import { Checkbox, majorScale, Pane, Select, TextareaProps } from 'evergreen-ui'
import {
  ChangeEvent,
  Dispatch,
  forwardRef,
  SetStateAction,
  useEffect,
  useState,
} from 'react'

import { CodeTextarea } from '@components/forms'
import { ConverterOptions } from '@lib/types'

interface Props extends TextareaProps {
  setOptions: Dispatch<SetStateAction<ConverterOptions>>
}

export const JsonOutput = forwardRef<HTMLTextAreaElement, Props>(
  ({ setOptions, ...props }: Props, ref) => {
    const [space, setSpace] = useState(2)
    const [sortKeys, setSortKeys] = useState(true)

    useEffect(() => {
      setOptions({ sortKeys, space })
    }, [setOptions, space, sortKeys])

    const onChangeSpace = (event: ChangeEvent<HTMLSelectElement>) => {
      setSpace(parseInt(event.target.value, 10))
    }

    const onChangeSortKeys = (event: ChangeEvent<HTMLInputElement>) => {
      setSortKeys(event.target.checked)
    }

    return (
      <>
        <Pane
          alignItems="end"
          display="flex"
          flexDirection="row"
          gap={majorScale(2)}
        >
          <Pane>
            <Select
              alignSelf="start"
              marginBottom={majorScale(1)}
              onChange={onChangeSpace}
              value={space}
              width={majorScale(12)}
            >
              <option value={2}>2 spaces</option>
              <option value={3}>3 spaces</option>
              <option value={4}>4 spaces</option>
            </Select>
          </Pane>

          <Checkbox
            checked={sortKeys}
            label="Sort keys"
            marginTop={0}
            onChange={onChangeSortKeys}
          />
        </Pane>
        <CodeTextarea {...props} ref={ref} />
      </>
    )
  },
)
