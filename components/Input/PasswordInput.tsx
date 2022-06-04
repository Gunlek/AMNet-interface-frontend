import React, { useState } from "react";
import { StyledInput, StyledSpan, StyledWrapper } from "./style";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

export default function PasswordInput(props: { id?: string, style?: React.CSSProperties, onChange?: Function, ref?: any }) {
    const [visible, setVisible] = useState(false)

    return (
        <StyledWrapper>
            <StyledInput
                autocomplete="off"
                type={visible ? "text" : "password"}
                ref={props.ref}
                id={props.id}
                style={props.style}
                onChange={props.onChange}
                required
            />
            <StyledSpan onClick={() => setVisible(!visible)}>
                {visible ? <VscEyeClosed style={{ height: "20px", width: "20px" }} /> : <VscEye style={{ height: "20px", width: "20px", transform: "translateY(-1px)" }} />}
            </StyledSpan>
        </StyledWrapper>
    )
}