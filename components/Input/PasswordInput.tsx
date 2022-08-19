import React, { useRef, useState } from "react";
import { StyledInput, StyledSpan, StyledWrapper } from "./style";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

export default function PasswordInput(props: { 
    id?: string, 
    style?: React.CSSProperties, 
    onChange?: Function, 
    onBlur?: Function, 
    required?: boolean
}) {
    const [visible, setVisible] = useState(false)
    const inputRef = useRef(null);

    return (
        <StyledWrapper>
            <StyledInput
                ref={inputRef}
                autocomplete="off"
                type={visible ? "text" : "password"}
                id={props.id}
                style={props.style}
                onChange={props.onChange}
                onBlur={props.onBlur}
                required={props.required}
                Empty={!inputRef.current || inputRef.current.value === ""}
            />
            <StyledSpan onClick={() => setVisible(!visible)}>
                {visible ? <VscEyeClosed style={{ height: "20px", width: "20px" }} /> : <VscEye style={{ height: "20px", width: "20px", transform: "translateY(-1px)" }} />}
            </StyledSpan>
        </StyledWrapper>
    )
}