import '@testing-library/jest-dom/extend-expect'

global.console = {
  debug: console.debug,
  dir: console.dir,
  error: jest.fn(), // console.error is ignored in tests.
  info: console.info,
  log: console.log,
  warn: jest.fn(), // console.warn is ignored in tests.
}

// See https://stackoverflow.com/a/69199963
const { randomFillSync } = require('crypto')
Object.defineProperty(globalThis, 'crypto', {
  value: { getRandomValues: randomFillSync },
})
