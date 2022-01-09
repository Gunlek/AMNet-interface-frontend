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

  &:hover{
    transition: color 0.2s;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`;

export const StyledGreenButton = styled(StyledButton)`
  background: linear-gradient(91.71deg, #67bc45 7.99%, #096a09 94.71%);

  &:hover{
    background: #096a09;
  }
`;

export const StyledRedButton = styled(StyledButton)`
  background: linear-gradient(91.71deg, #f23232 7.99%, #890909 94.71%);

  &:hover{
    background: #890909;
  }
`;

export const StyledOrangeButton = styled(StyledButton)`
  background: linear-gradient(91.71deg, #FF9900 7.99%, #AA6B0B 94.71%);

  &:hover{
    background: #AA6B0B;
}
`;


export const SmallStyledGreenButton = styled(StyledButton)`
  background: #67BC45;
  border-radius: 16px;
  height: 40px;
  width: ${(props) => props.width || "150px"};
  font-size: 1em;

  &:hover{
    background: #096a09;
  }
`;

export const SmallStyledRedButton = styled(SmallStyledGreenButton)`
  background: #F23232;

  &:hover{
    background: #890909;
  }
`;

export const SmallStyledOrangeButton = styled(SmallStyledGreenButton)`
  background: #D78306;

  &:hover{
    background: #AA6B0B;
  }
`;
