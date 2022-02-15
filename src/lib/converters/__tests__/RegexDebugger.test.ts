import { operation } from '@lib/converters/RegexDebugger'

describe('converters', () => {
  describe('RegexDebugger', () => {
    describe('operation', () => {
      it('passes the input straight through', () => {
        const input = "don't touch this"
        expect(operation(input)).toEqual(input)
      })
    })
  })
})
