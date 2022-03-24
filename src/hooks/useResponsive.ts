import { useMediaQuery } from 'react-responsive'

import { MOBILE } from '@services/Breakpoints'

interface Breakpoints {
  /**
   * True if the user is using a mobile-sized screen.
   */
  isMobile: boolean
}

/**
 * A hook that returns boolean flags describing what kind of screen size
 * we are working with. This is used to adjust layout responsively.
 */
export const useResponsive = (): Breakpoints => {
  const isMobile = useMediaQuery({ maxWidth: MOBILE })

  return {
    isMobile,
  }
}

export const Responsive = {
  useResponsive,
}
