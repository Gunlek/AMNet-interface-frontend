import React, { ReactNode, useEffect, useState } from "react"
import ModalLogic from "./ModalLogic"
import { StyledBackgroundModal, StyledModal } from "./style"

export default function Modal(props: {
    children: ReactNode,
    show?: boolean,
    style?: React.CSSProperties
}) {
    const { Display, Opacity, toggle } = ModalLogic(props.show)
    const [mount, setMount] = useState(false)

    useEffect(() => {
        setMount(true)
        if (mount) { toggle() }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.show])

    return (
        <>
            {Display &&
                <>
                    <StyledBackgroundModal onClick={toggle} Opacity={Opacity} />
                    <StyledModal width="600px" Opacity={Opacity} style={props.style}>
                        {props.children}
                    </StyledModal>
                </>
            }
        </>
    )
}