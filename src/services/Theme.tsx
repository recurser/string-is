import { defaultTheme } from 'evergreen-ui'

export interface Theme {
  colors: { [key: string]: string }
  fontFamilies: {
    display: string
    mono: string
    ui: string
  }
}

// Common settings that aren't part of the theme.
export const settings = {}

// Expose the theme.
export const theme = defaultTheme as Theme
