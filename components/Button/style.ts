import styled from "styled-components";
import constants from "../../styles/constants";

export const StyledButton = styled.button`
  border-radius: 90px;
  border: transparent;
  height: ${(props) => props.height || "60px"};
  width: ${(props) => props.width || constants.defaultButtonWidth};
  color: white;
  font-family: "Poppins";
  font-size: 1.1em;
  text-align: center;
`;

export const StyledGreenButton = styled(StyledButton)`
  background: linear-gradient(91.71deg, #67bc45 7.99%, #096a09 94.71%);

  &:hover{
    transition: color 0.2s;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    background: #096a09;
    cursor: pointer;
  }
`;

export const StyledRedButton = styled(StyledButton)`
  background: linear-gradient(91.71deg, #f23232 7.99%, #890909 94.71%);
`;
