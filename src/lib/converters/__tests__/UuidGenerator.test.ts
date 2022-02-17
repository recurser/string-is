import { screen } from '@testing-library/react'
import { validate as uuidValidate } from 'uuid'

import { UuidGenerator } from '@lib/converters'
import { assertOutput } from './_helpers'

describe('converters', () => {
  describe('UuidGenerator', () => {
    it('generates a UUID', async () => {
      await assertOutput(UuidGenerator, 'ignore this', () => {
        const output = screen.getByTestId('uuid-output')
        expect(uuidValidate(output.value)).toBeTruthy()
      })
    })
  })
})
