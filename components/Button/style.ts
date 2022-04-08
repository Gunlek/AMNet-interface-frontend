import styled from "styled-components";
import constants from "../../styles/constants";

export const StyledButton = styled.button`
  border-radius: 90px;
  border: transparent;
  outline: none;
  height: ${(props) => props.height || "60px"};
  width: ${(props) => props.width || constants.defaultButtonWidth};
  color: white;
  font-size: 19px;
  text-align: center;
  transition: 0.3s linear, box-shadow 0.3s;
  background: linear-gradient(90deg, var(--c1, #f6d365), var(--c2, #fda085) 51%, var(--c1, #f6d365)) var(--x, 0)/ 200%;
  user-select: none;

  &:hover{ 
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    --x: 100%;
  } 

  @media screen and (max-width: 1000px){
    margin-bottom: ${(props) => props.mobileMarginBottom};
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
  height: ${(props) => props.height || "40px"};
  width: ${(props) => props.width || "150px"};
  font-size: ${(props) => props.fontSize || "1.2rem"};
  background: none;
  transition: background-color 0.3s ease-out;

  @media screen and (max-width: 1000px){
    width: ${(props) => props.width || "140px"};
  }
`;

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
  background-color: #FF9900;

  &:hover{
    background-color: #D78306
  }
`;

export const StyledBackArrow = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${(props) => "translateY("+props.translate+")"};
  user-select: none;
`;