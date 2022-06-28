import { useState, useEffect } from 'react'

const breakpoints = {
  xs: '(min-width: 320px)',
  sm: '(min-width: 481px)',
  md: '(min-width: 769px)',
  lg: '(min-width: 1025px)',
  xl: '(min-width: 1201px)',
}

const useMediaQuery = (
    breakpoint,
    defaultMatches = window.matchMedia(breakpoints[breakpoint])
  ) => {
    const [matches, setMatches] = useState(defaultMatches)

    useEffect(() => {
      const query = breakpoints[breakpoint]
      const media = window.matchMedia(query)
      const listener = () => setMatches(media.matches)

      if (media.matches !== matches) setMatches(media.matches)
      media.addListener(listener)

      return () => media.removeListener(listener)
  }, [breakpoint, matches])

  return matches
}

export default useMediaQuery