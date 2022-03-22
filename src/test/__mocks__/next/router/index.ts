// See discussion at https://github.com/vercel/next.js/issues/7479
jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({
    asPath: '/',
    push: jest.fn(),
  })),
}))

module.exports = jest.requireMock('next/router')
