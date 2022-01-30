import React from 'react'
import styled from 'styled-components'

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const Icon = styled.svg`
  fill: none;
  stroke: ${props => (props.color ? '#096A09' : 'white')};
  stroke-width: 2.5px;
`
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
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

const StyledCheckbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border-radius: 9px;
  border: ${props => (props.color ? 'solid white 2.5px' : 'solid #096A09 2.5px')};
  z-index: 1;
  position: relative;
  transition: border 0.3s ;

  &::before{
    position: absolute;
    content: "";
    height:25px;
    width:25px;
    top: -2.5px;
  
    left: -2.5px;
    z-index: -1;
    background:  ${props => (props.color ? 'white' : 'linear-gradient(135deg, #67BC45 5.67%, #096A09 94.96%)')};
    transition: opacity 0.3s;
    opacity: ${props => (props.checked ? '1' : '0')};
    border-radius: 9px;
  }

  &:hover{
    box-shadow: 0px 2px 10px ${props => (props.color ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.3)')};
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')}
  }
`

const Checkbox = (props: any) => (
  <CheckboxContainer>
    <HiddenCheckbox checked={props.checked} {...props} />
    <StyledCheckbox color={props.color} checked={props.checked}>
      <Icon color={props.color} viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
)



export default Checkbox
