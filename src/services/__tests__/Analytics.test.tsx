import { render, screen } from '@testing-library/react'

import { AnalyticsProvider } from '@services/Analytics'

describe('services', () => {
  describe('Analytics', () => {
    describe('AnalyticsProvider', () => {
      const originalEnv = process.env

      beforeEach(() => {
        jest.resetModules()
        process.env = {
          ...originalEnv,
        }
      })

      afterEach(() => {
        process.env = originalEnv
      })

      const doRender = () => {
        render(
          <AnalyticsProvider>
            <>testing</>
          </AnalyticsProvider>,
        )
      }

      it('does nothing if not enabled', async () => {
        doRender()
        expect(() => getByTestId('plausible-provider')).toThrow()
      })

      it('does nothing if the analytics domain is not set', async () => {
        process.env.NEXT_PUBLIC_ANALYTICS_ENABLED = 'true'
        doRender()
        expect(() => getByTestId('plausible-provider')).toThrow()
      })

      it('includes the plausible provider', async () => {
        process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN = 'example.com'
        process.env.NEXT_PUBLIC_ANALYTICS_ENABLED = 'true'
        doRender()
        const element = screen.getByTestId('plausible-provider')
        expect(element).toBeInTheDocument()
      })
    })
  })
})
