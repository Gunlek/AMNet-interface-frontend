import { useEffect, useState } from 'react'

 export function on(obj, ...args) {
    obj.addEventListener(...args)
  }
  
  export function off(obj, ...args) {
    obj.removeEventListener(...args)
  }

const useScrollingUp = () => {
  let prevScroll
  //if it is SSR then check you are now on the client and window object is available
  if (process.browser) {
    prevScroll = window.pageYOffset
  }
  const [scrollingUp, setScrollingUp] = useState(true)
  const handleScroll = () => {
    const currScroll = window.pageYOffset
    const isScrolled = prevScroll > currScroll
    setScrollingUp(isScrolled)
    prevScroll = currScroll
  }
  useEffect(() => {
    on(window, 'scroll', handleScroll, { passive: true })
    return () => {
      off(window, 'scroll', handleScroll, { passive: true })
    }
  }, [])
  return scrollingUp
}

export default useScrollingUp