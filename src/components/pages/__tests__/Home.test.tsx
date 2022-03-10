import { render, screen } from '@testing-library/react'
import I18nProvider from 'next-translate/I18nProvider'
import React from 'react'
import { act } from 'react-dom/test-utils'

import { Home } from '@pages/Home'
import translations from '@locales/en/domain-convert-inputForm'

describe('Home', () => {
  it('renders a heading', async () => {
    await act(async () => {
      render(
        <I18nProvider
          lang={'en'}
          namespaces={{ 'domain-convert-inputForm': translations }}
        >
          <Home />
        </I18nProvider>,
      )
    })

    const heading = screen.getByRole('label', {
      name: translations.label,
    })

    expect(heading).toBeInTheDocument()
  })
})
