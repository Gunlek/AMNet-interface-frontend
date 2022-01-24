import React from 'react'
import styled from 'styled-components'

const RadioContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
`

const HiddenRadio = styled.input.attrs({ type: 'Radio' })`
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`

const StyledRadio = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    transition: all 0.3s ;
    border: solid #096A09 2px;

    &::before{
        width: 15px;
        height: 15px;
        content: "";
        background: linear-gradient(135deg, #67BC45 25%, #096A09 75%);
        transition: opacity 0.3s;
        opacity: ${props => (props.checked ? '1' : '0')};
        border-radius: 50%;   
    }

    &:hover{
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    }
`

const Radio = ({ checked, ...props }) => (
    <RadioContainer>
        <HiddenRadio checked={checked} {...props} />
        <StyledRadio checked={checked} />
    </RadioContainer>
)

export default Radio