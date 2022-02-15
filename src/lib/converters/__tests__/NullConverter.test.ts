import { operation } from '@lib/converters/NullConverter'

describe('converters', () => {
  describe('NullConverter', () => {
    describe('operation', () => {
      it('always returns an empty string', () => {
        const input = 'ignore this'
        expect(operation(input)).toEqual('')
      })
    })
  })
})
