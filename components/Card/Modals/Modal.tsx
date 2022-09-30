import { AnimatePresence, motion } from "framer-motion"
import React, { ReactNode, useEffect, useState } from "react"
import ModalLogic from "./ModalLogic"
import { StyledBackgroundModal, StyledModal } from "./style"

const divProps = {
    as: motion.div,
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { ease: "linear" }
}

export default function Modal(props: {
    children: ReactNode,
    show?: boolean,
    style?: React.CSSProperties
}) {
    const { Display, toggle } = ModalLogic(props.show);
    const [mount, setMount] = useState(false);

    useEffect(() => {
        setMount(true)
        if (mount) { toggle() }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.show])

    return (
        <AnimatePresence initial={false}>
            {Display &&
                <>
                    <StyledBackgroundModal onClick={toggle} {...divProps} />
                    <StyledModal width="600px" {...divProps} style={props.style}>
                        {props.children}
                    </StyledModal>
                </>
            }
        </AnimatePresence>
    )
}

export function DefaultModal(props: {
    children: ReactNode,
    Display: boolean,
    style?: React.CSSProperties,
    backgroundStyle?: React.CSSProperties,
    toggle: Function
}) {

    return (
        <AnimatePresence initial={false}>
            {props.Display &&
                <>
                    <StyledBackgroundModal
                        onClick={props.toggle}
                        {...divProps}
                        style={props.backgroundStyle}
                    />
                    <StyledModal style={props.style} {...divProps}>
                        {props.children}
                    </StyledModal>
                </>
            }
        </AnimatePresence>
    )
}