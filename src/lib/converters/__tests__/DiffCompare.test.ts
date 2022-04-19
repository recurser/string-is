import { fireEvent, screen } from '@testing-library/react'

import { DiffCompare } from '@lib/converters'
import { assertOutput } from './_helpers'

describe('converters', () => {
  describe('DiffCompare', () => {
    it('displays a single match', async () => {
      await assertOutput(DiffCompare, 'string 1\nstring 2\n', async () => {
        const inputElement = await screen.getByTestId('compare-input')
        await fireEvent.change(inputElement, {
          target: { value: 'string 1\nstring 3\n' },
        })
        const matchOutput = await screen.getByTestId('diff-output')
        expect(matchOutput.value).toEqual(`@@ -1,2 +1,2 @@
 string 1
-string 2
+string 3
`)
      })
    })
  })
})
