import { render, screen } from '@testing-library/react'
import I18nProvider from 'next-translate/I18nProvider'
import React from 'react'

import { Security } from '@pages/Security'
import translations from '@locales/en/pages-security'

describe('Security', () => {
  it('renders a heading', () => {
    render(
      <I18nProvider lang={'en'} namespaces={{ 'pages-security': translations }}>
        <Security />
      </I18nProvider>,
    )

    const heading = screen.getByRole('heading', {
      name: translations.page_heading,
    })

    expect(heading).toBeInTheDocument()
  })
})
