import styled from "styled-components";

export const StyledButton = styled.button`
  border-radius: 90px;
  border: transparent;
  height: 60px;
  width: ${props=>props.size || '347px'};
  color: white;
  font-family: "Poppins";
  font-size: 1rem;
  text-align: center;
`;

export const StyledGreenButton = styled(StyledButton)`
  background: linear-gradient(91.71deg, #67BC45 7.99%, #096A09 94.71%);
`;

export const StyledRedButton = styled(StyledButton)`
  background: linear-gradient(91.71deg, #F23232 7.99%, #890909 94.71%);
`;
