import { useEffect, useState } from 'react'

const useScrollingUp = () => {
  let prevScroll: number
  //if it is SSR then check you are now on the client and window object is available
  if (process.browser) {
    prevScroll = window.pageYOffset
  }

  const [scrollingUp, setScrollingUp] = useState(true)
  const [scroll, setScroll] = useState(0)

  const handleScroll = () => {
    const currScroll = window.pageYOffset
    setScroll(currScroll)
    setScrollingUp(prevScroll > currScroll)
    prevScroll = currScroll
    
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return [scroll, scrollingUp]
}

export default useScrollingUp