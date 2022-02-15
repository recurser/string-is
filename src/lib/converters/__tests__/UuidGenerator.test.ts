import { validate as uuidValidate } from 'uuid'

import { operation } from '@lib/converters/UuidGenerator'

describe('converters', () => {
  describe('UuidGenerator', () => {
    describe('operation', () => {
      it('generates a UUID', () => {
        const input = 'ignore this'
        expect(uuidValidate(operation(input))).toBeTruthy()
      })
    })
  })
})
