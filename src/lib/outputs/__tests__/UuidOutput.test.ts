import { validate as uuidValidate } from 'uuid'

import { output } from '@lib/outputs/UuidOutput'

describe('outputs', () => {
  describe('UuidOutput', () => {
    describe('output', () => {
      it('generates a UUID', () => {
        const input = 'ignore this'
        expect(uuidValidate(output(input))).toBeTruthy()
      })

      it('passes through an existing UUID', () => {
        const input = '55da00a1-f708-4321-b2c6-d7c7551f35f8'
        expect(output(input)).toEqual(input)
      })

      it('allows the version to be specified', () => {
        const input = 'fe92b79a-2c5b-557f-9957-487c0dfb7fd2'
        expect(output(input, { version: 'v5' })).toEqual(input)
      })

      it("generates a new UUID if the version doesn't match", () => {
        const input = '55da00a1-f708-4321-b2c6-d7c7551f35f8'
        expect(output(input, { version: 'v5' })).not.toEqual(input)
        expect(uuidValidate(output(input))).toBeTruthy()
      })
    })
  })
})
