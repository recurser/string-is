import {
  camelCaseConverterSlug,
  hyphenateConverterId,
  sortByKeys,
} from '@lib/utilities/String'

describe('utilities', () => {
  describe('String', () => {
    describe('camelCaseConverterSlug', () => {
      it('camel-cases slugs', () => {
        const expected = {
          'base64-converter': 'base64Converter',
          'javascript-formatter': 'javaScriptFormatter',
        }
        Object.entries(expected).forEach(([input, expected]) => {
          expect(camelCaseConverterSlug(input)).toEqual(expected)
        })
      })
    })

    describe('hyphenateConverterId', () => {
      it('hyphenates IDs', () => {
        const expected = {
          base64Converter: 'base64-converter',
          javaScriptFormatter: 'javascript-formatter',
        }
        Object.entries(expected).forEach(([input, expected]) => {
          expect(hyphenateConverterId(input)).toEqual(expected)
        })
      })
    })

    describe('sortByKeys', () => {
      it('sorts the keys of an shallow object', () => {
        const input = { b: 2, a: 1 } // eslint-disable-line sort-keys
        const expected = { a: 1, b: 2 }
        expect(sortByKeys(input)).toEqual(expected)
      })

      it('sorts the keys of a deep object', () => {
        const input = { d: { b: 2, a: 1 }, c: 3 } // eslint-disable-line sort-keys
        const expected = { c: 3, d: { a: 1, b: 2 } }
        expect(sortByKeys(input)).toEqual(expected)
      })

      it('preserves array element order while sorting object keys', () => {
        const input = [
          { name: 'Charlie', age: 30 }, // eslint-disable-line sort-keys
          { name: 'Alice', age: 25 }, // eslint-disable-line sort-keys
          { name: 'Bob', age: 28 } // eslint-disable-line sort-keys
        ]
        const expected = [
          { age: 30, name: 'Charlie' },
          { age: 25, name: 'Alice' },
          { age: 28, name: 'Bob' }
        ]
        expect(sortByKeys(input)).toEqual(expected)
      })

      it('handles nested objects within arrays', () => {
        const input = [
          { 
            name: 'Charlie',
            details: { // eslint-disable-line sort-keys
              role: 'Developer',
              team: 'Frontend'
            }
          }
        ]
        const expected = [
          { 
            details: { 
              role: 'Developer',
              team: 'Frontend'
            },
            name: 'Charlie'
          }
        ]
        expect(sortByKeys(input)).toEqual(expected)
      })

      it('preserves primitive values in arrays', () => {
        const input = [1, 'two', true, null]
        expect(sortByKeys(input)).toEqual(input)
      })

      it('handles empty objects and arrays', () => {
        const input = { emptyArray: [], emptyObject: {} }
        const expected = { emptyArray: [], emptyObject: {} }
        expect(sortByKeys(input)).toEqual(expected)
      })

      it('preserves null and undefined values', () => {
        const input = { 
          a: null,
          b: undefined,
          c: { d: null }
        }
        const expected = { 
          a: null,
          b: undefined,
          c: { d: null }
        }
        expect(sortByKeys(input)).toEqual(expected)
      })

      it('handles mixed arrays of objects and primitives', () => {
        const input = [
          { name: 'Charlie' },
          42,
          { age: 30 },
          'string',
          null
        ]
        const expected = [
          { name: 'Charlie' },
          42,
          { age: 30 },
          'string',
          null
        ]
        expect(sortByKeys(input)).toEqual(expected)
      })

      it('handles deeply nested objects with arrays', () => {
        const input = {
          users: [
            {
              name: 'Charlie',
              roles: ['admin', 'user'],
              permissions: { // eslint-disable-line sort-keys
                read: true,
                write: false
              }
            },
            {
              name: 'Alice',
              roles: ['user'],
              permissions: { // eslint-disable-line sort-keys
                read: true,
                write: true
              }
            }
          ],
          settings: { // eslint-disable-line sort-keys
            features: {
              enabled: ['auth', 'logging'],
              disabled: ['analytics'] // eslint-disable-line sort-keys
            }
          }
        }
        const expected = {
          settings: {
            features: {
              disabled: ['analytics'],
              enabled: ['auth', 'logging']
            }
          },
          users: [
            {
              name: 'Charlie',
              permissions: {
                read: true,
                write: false
              },
              roles: ['admin', 'user']
            },
            {
              name: 'Alice',
              permissions: {
                read: true,
                write: true
              },
              roles: ['user']
            }
          ]
        }
        expect(sortByKeys(input)).toEqual(expected)
      })

      it('handles arrays nested within arrays', () => {
        const input = [
          [
            { name: 'Charlie', age: 30 }, // eslint-disable-line sort-keys
            { name: 'Alice', age: 25 } // eslint-disable-line sort-keys
          ],
          [
            { name: 'Bob', age: 28 } // eslint-disable-line sort-keys
          ]
        ]
        const expected = [
          [
            { age: 30, name: 'Charlie' },
            { age: 25, name: 'Alice' }
          ],
          [
            { age: 28, name: 'Bob' }
          ]
        ]
        expect(sortByKeys(input)).toEqual(expected)
      })

      it('handles complex mixed structures', () => {
        const input = {
          data: [
            {
              id: 1,
              items: [
                { name: 'Item A', value: 100 },
                { name: 'Item B', value: 200 }
              ],
              metadata: {
                created: '2024-01-01',
                tags: ['important', 'urgent']
              }
            },
            {
              id: 2,
              items: [
                { name: 'Item C', value: 300 }
              ],
              metadata: {
                created: '2024-01-02',
                tags: ['normal']
              }
            }
          ],
          config: { // eslint-disable-line sort-keys
            options: {
              enabled: true,
              features: ['feature1', 'feature2']
            }
          }
        }
        const expected = {
          config: {
            options: {
              enabled: true,
              features: ['feature1', 'feature2']
            }
          },
          data: [
            {
              id: 1,
              items: [
                { name: 'Item A', value: 100 },
                { name: 'Item B', value: 200 }
              ],
              metadata: {
                created: '2024-01-01',
                tags: ['important', 'urgent']
              }
            },
            {
              id: 2,
              items: [
                { name: 'Item C', value: 300 }
              ],
              metadata: {
                created: '2024-01-02',
                tags: ['normal']
              }
            }
          ]
        }
        expect(sortByKeys(input)).toEqual(expected)
      })
    })
  })
})
