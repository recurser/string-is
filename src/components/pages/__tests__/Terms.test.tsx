/**
 * \@jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import I18nProvider from 'next-translate/I18nProvider'
import React from 'react'

import { Terms } from '@pages/Terms'
import translations from '@locales/en/pages-terms'

describe('Terms', () => {
  it('renders a heading', () => {
    render(
      <I18nProvider lang={'en'} namespaces={{ 'pages-terms': translations }}>
        <Terms />
      </I18nProvider>,
    )

    const heading = screen.getByRole('heading', {
      name: translations.page_heading,
    })

    expect(heading).toBeInTheDocument()
  })
})
