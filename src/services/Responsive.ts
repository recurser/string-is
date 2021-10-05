import { useMediaQuery } from 'react-responsive'

export const MOBILE = 768
export const TABLET = 992
export const DESKTOP = 1400

interface Breakpoints {
  isBigscreen: boolean
  isDesktop: boolean
  isMobile: boolean
  isTablet: boolean
}

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
