import { useEffect, useState } from 'react'

const useScrollingUp = () => {
  const [scrollingUp, setScrollingUp] = useState(true)
  const [scroll, setScroll] = useState(0)
  const [top, setTop] = useState(true)

  useEffect(() => {
    let prevScroll = window.pageYOffset
    const handleScroll = () => {
      const currScroll = window.pageYOffset
      setScroll(currScroll)
      setScrollingUp(prevScroll > currScroll)
      prevScroll = currScroll
      if (currScroll > 100) setTop(false)
      if (currScroll < 2) setTop(true)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return [scroll, scrollingUp, top]
}

export default useScrollingUp