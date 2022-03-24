import styled, { keyframes } from "styled-components";
import { StyledCardCampus } from "../style";

export const StyledBackgroundModal = styled.div`
  background: rgba(0, 0, 0, 0.5); 
  position: fixed; 
  height: 150%; 
  width: 100%; 
  left: 0; 
  top: 0;  
  transition: z-index 0.3s linear, opacity 0.3s linear;
  z-index: ${props => props.reveal ? "3" : "-1"};
  opacity: ${props => props.reveal ? "1" : "0"};
`;

export const StyledModal = styled(StyledCardCampus)`
  background: white;
  width: ${props => props.width || "90%"};
  align-items: center; 
  justify-content: center;
  padding: 30px; 
  position: fixed; 
  top: 50%; 
  left: 50%;
  transition: z-index 0.3s linear, opacity 0.3s linear;
  transform: translate(-50%, -50%);
  z-index: ${props => (props.reveal ? "4" : "-1")};
  opacity: ${props => (props.reveal ? "1" : "0")};
`

const opacityIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const opacityOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const StyledBackgroundModal2 = styled.div`
  background: rgba(0, 0, 0, 0.5); 
  position: fixed; 
  height: 150%; 
  width: 100%; 
  left: 0; 
  top: 0;
  z-index: 3;
  display: ${(props) => props.Display ? undefined : "none"};
  animation: ${(props) => props.Opacity ? opacityIn : opacityOut}  0.3s linear;  
`;

export const StyledModal2 = styled(StyledCardCampus)`
  background: white;
  width: ${props => props.width || "90%"};
  align-items: center; 
  justify-content: center;
  padding: 30px; 
  position: fixed; 
  top: 50%; 
  left: 50%;
  z-index: 3;
  transform: translate(-50%, -50%);
  display: ${(props) => props.Display ? undefined : "none"};
  animation: ${(props) => props.Opacity ? opacityIn : opacityOut}  0.3s linear;
`