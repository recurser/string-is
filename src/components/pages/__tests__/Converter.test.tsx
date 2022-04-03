import { render, screen } from '@testing-library/react'
import I18nProvider from 'next-translate/I18nProvider'
import React from 'react'
import { act } from 'react-dom/test-utils'

import { Converter } from '@pages/Converter'
import translations from '@locales/en/pages-converter'

describe('Converter', () => {
  it('renders a heading', async () => {
    await act(async () => {
      render(
        <I18nProvider
          lang={'en'}
          namespaces={{ 'pages-converter': translations }}
        >
          <Converter />
        </I18nProvider>,
      )
    })

    const heading = screen.getByRole('label', {
      name: `1. ${translations['nullConverter-input-label']} 👇`,
    })

    expect(heading).toBeInTheDocument()
  })
})
