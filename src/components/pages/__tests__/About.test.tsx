/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import I18nProvider from 'next-translate/I18nProvider'
import React from 'react'

import { About } from '@pages/About'
import translations from '@locales/en/pages-about'

describe('About', () => {
  it('renders a heading', () => {
    render(
      <I18nProvider lang={'en'} namespaces={{ 'pages-about': translations }}>
        <About />
      </I18nProvider>,
    )

    const heading = screen.queryByRole('heading', {
      name: translations.page_heading,
    })

    expect(heading).toBeInTheDocument()
  })
})
