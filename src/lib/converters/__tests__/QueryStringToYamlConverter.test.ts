import { operation } from '@lib/converters/QueryStringToYamlConverter'

describe('converters', () => {
  describe('QueryStringToYamlConverter', () => {
    describe('operation', () => {
      it('converts the query string input to YAML', () => {
        const input = 'https://string.is/?foo=bar&today=2022-02-13'
        const expected = `---
foo: 'bar'
today: '2022-02-13'
`
        expect(operation(input)).toEqual(expected)
      })
    })
  })
})
