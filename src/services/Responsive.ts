import { useMediaQuery } from 'react-responsive'

export const MOBILE = 768
export const TABLET = 992
export const DESKTOP = 1400

interface Breakpoints {
  /**
   * True if the use has a 'big' screen, false otherwise.
   */
  isBigscreen: boolean

  /**
   * True if the user is using a desktop-sized screen.
   */
  isDesktop: boolean

  /**
   * True if the user is using a mobile-sized screen.
   */
  isMobile: boolean

  /**
   * True if the user is using a tablet-sized screen.
   */
  isTablet: boolean
}

/**
 * A hook that returns boolean flags describing what kind of screen size
 * we are working with. This is used to adjust layout responsively.
 */
export const useBreakpoints = (): Breakpoints => {
  const isMobile = useMediaQuery({ maxWidth: MOBILE })
  const isTablet = useMediaQuery({ maxWidth: TABLET, minWidth: MOBILE + 1 })
  const isDesktop = useMediaQuery({ maxWidth: DESKTOP, minWidth: TABLET + 1 })
  const isBigscreen = useMediaQuery({ minWidth: DESKTOP + 1 })

  return {
    isBigscreen,
    isDesktop,
    isMobile,
    isTablet,
  }
}

export const Responsive = {
  DESKTOP,
  MOBILE,
  TABLET,
  useBreakpoints,
}
