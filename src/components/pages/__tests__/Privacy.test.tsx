import { render, screen } from '@testing-library/react'
import I18nProvider from 'next-translate/I18nProvider'
import React from 'react'

import { Privacy } from '@pages/Privacy'
import translations from '@locales/en/pages-privacy'

describe('Privacy', () => {
  it('renders a heading', () => {
    render(
      <I18nProvider lang={'en'} namespaces={{ 'pages-privacy': translations }}>
        <Privacy />
      </I18nProvider>,
    )

    const heading = screen.getByRole('heading', {
      name: translations.page_heading,
    })

    expect(heading).toBeInTheDocument()
  })
})
