import styled from "styled-components";
import constants from "../../styles/constants";

export const StyledButton = styled.button`
  border-radius: 90px;
  border: transparent;
  height: ${(props) => props.height || "60px"};
  width: ${(props) => props.width || constants.defaultButtonWidth};
  color: white;
  font-family: "Poppins";
  font-size: 1.2em;
  text-align: center;
  transition: 0.75s;
  background: linear-gradient(90deg, var(--c1, #f6d365), var(--c2, #fda085) 51%, var(--c1, #f6d365)) var(--x, 0)/ 200%;

  &:hover{
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    --x: 100%;
  }
`;

export const StyledGreenButton = styled(StyledButton)`
  --c1: #67bc45;
  --c2: #096a09;
`;

export const StyledRedButton = styled(StyledButton)`
  --c1: #f23232;
  --c2: #890909;
`;

export const StyledOrangeButton = styled(StyledButton)`
  --c1: #FF9900;
  --c2: #AA6B0B;
`;


export const SmallStyledButton = styled(StyledButton)`
  border-radius: 16px;
  height: 40px;
  width: ${(props) => props.width || "150px"};
  font-size: 1em;
  background: none;
  transition: background-color 0.3s;
`

  

export const SmallStyledGreenButton = styled(SmallStyledButton)`
  background-color: #67BC45;
  
  &:hover{
    background-color: #096a09;
  }
`;

export const SmallStyledRedButton = styled(SmallStyledButton)`
  background-color: #F23232;

  &:hover{
    background-color: #890909;
  }
`;

export const SmallStyledOrangeButton = styled(SmallStyledButton)`
  background-color: #D78306;

  &:hover{
    background-color: #AA6B0B;
  }
`;
