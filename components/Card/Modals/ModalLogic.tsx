import { useEffect, useState } from 'react'
import useMediaQuery from "../../MediaQueries/MediaQuery";

const scrollbarWidth = () => {
    if (typeof window !== "undefined") {
        return window.innerWidth - document.documentElement.clientWidth;
    }
    else {
        return null
    }
}

const Scroll = () => {
    let Scroll: number
    if (typeof window !== "undefined") {
        Scroll = window.pageYOffset
    }

    const [scrolling, setScrolling] = useState(Scroll)

    const handleScroll = () => {
        setScrolling(window.pageYOffset)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (scrolling)
}

function ModalBody(reveal: boolean, scrolled: number, minWidth1000: boolean) {
    const menu = document.getElementById("menu");
    const barWidth = scrollbarWidth();

    document.body.style.width = reveal ? "100%" : "";
    document.body.style.position = reveal ? "fixed" : "";
    document.body.style.height = reveal ? "100vh" : "";
    document.body.style.overflowY = reveal ? "hidden" : "";
    document.body.style.top = reveal ? "-" + scrolled.toString() + "px" : "";
    document.body.style.paddingRight = reveal ? minWidth1000 ? "calc( 1.95% + " + barWidth.toString() + "px )" : barWidth.toString() + "px" : "";
    menu.style.top = reveal ? "0" : "";
    menu.style.paddingRight = reveal ? minWidth1000 ? "" : barWidth.toString() + "px" : "";
}

export const ModalLogic = () => {
    const [Display, setDisplay] = useState(false)
    const [Opacity, setOpacity] = useState(false)
    const scrolled = Scroll()
    const minWidth1000 = useMediaQuery('(min-width: 1000px)')

    const toggle = (e) => {
        const menu = document.getElementById("menu")
        e.preventDefault();

        if (Display) {
            setOpacity(false)
            setTimeout(() => {
                setDisplay(false)
                const scrollY = document.body.style.top;
                ModalBody(false, scrolled, minWidth1000)
                menu.style.transition = "none";
                window.scrollTo(0, parseInt(scrollY || '0') * -1);

                setTimeout(() => {
                    menu.style.transition = "";
                }, 100);
            }, 280);
        }
        else {
            ModalBody(true, scrolled, minWidth1000)
            setDisplay(true)
            setOpacity(true)
        }
    }

    return {
        Display,
        Opacity,
        toggle
    }
}

export default ModalLogic