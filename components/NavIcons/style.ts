import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledBackIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;
  z-index: 3;
  position: relative;

  &::before{
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(135deg, #67BC45 5.67%, #096A09 94.96%);
    z-index: -1;
    transition: opacity 0.2s linear;
    opacity: 0;
    border-radius: 15px;
  }

  &:hover::before{
    opacity: 1;
  }
  
  &::after{
    position: absolute;
    content:  ${(props) => props.tooltip && '"' + props.tooltip + '"'};
    top: 50%;
    left: 135%;
    transform: translateY(-50%);
    transition: opacity 0.2s linear;
    opacity: 0;
    border-radius: 15px;
    padding: 10px;
    background: white;
    width: max-content;
    pointer-events: none;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.06);
    z-index: 3;
  }  
`;

export const StyledBackBurger = styled.div.attrs({
  as: motion.div,
  exit: { opacity: 0},
  transition: { ease: "linear", duration: 0.2 }
})`
  height: 60px;
  width: 60px;
  position: absolute;
  z-index: -1;
  background: linear-gradient(135deg, #67BC45 5.67%, #096A09 94.96%);
  border-radius: 15px;

  @media screen and (max-width: 1000px){
    margin: 0 5px;
  }
`;

export const StyledActiveIcon = styled.div.attrs({
  as: motion.div,
  variants: { exit: { opacity: 0 } },
  exit: "exit",
  transition: { ease: "linear" }
})`
  height: 60px; 
  width: 60px; 
  background: linear-gradient(135deg, #67BC45 5.67%, #096A09 94.96%); 
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  @media screen and (max-width: 1000px){
    margin: 7.5px 5px 10px;

    &::after{
      position: absolute;
      content:  ${(props) => props.tooltip && '"' + props.tooltip + '"'};
      border-radius: 15px;
      padding: 10px;
      width: max-content;
      z-index: 3;
      left: 50%;
      top: 85%;
      transform: translateX(-50%);
    }  
  }
`;

export const StyledIcon = styled.svg`
  fill: #C5C7C6;
  transition: fill 0.2s linear;

  ${StyledBackIcon}:hover & {
    fill: white;    
  }

  ${StyledBackBurger}:hover & {
    fill: white;    
  }
`;

export const StyledActiveSVG = styled.svg.attrs({
  as: motion.svg,
  variants: { exit: { fill: "#C5C7C6" }, initial: { fill: "#FFFFFF" } },
  initial: "initial",
  animate: "initial",
  exit: "exit",
  transition: { ease: "linear" }
})`
  position: relative;
`;


export const StyledBackLogOut = styled.a`
  display: flex;
  justify-content: center;
  align-items: end;
  width: 100%;
  height: 60px;
  position: relative;

  @media screen and (max-width: 1000px){
    align-items: center;
  }
`;

export const StyledTooltip = styled.div.attrs({
  as: motion.div,
  variants: { exit: { opacity: "0" } },
  exit: "exit",
  transition: { ease: "linear" }
})`
  position: absolute;
  top: 50%;
  left: 135%;
  transform: translateY(-50%);
  transition: opacity 0.2s linear;
  opacity: 0;
  border-radius: 15px;
  padding: 10px;
  background: white;
  width: max-content;
  pointer-events: none;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.06);
  z-index: 3;

  ${StyledBackIcon}:hover &, ${StyledBackLogOut}:hover & {
    opacity: 1;   
  }

  @media screen and (max-width: 1000px){
    left: 50%;
    top: 85%;
    opacity: 1;
    box-shadow: none;
    background: none;
    transform: translateX(-50%);
  }
`;

export const StyledLogOutTooltip = styled(StyledTooltip)`
  top: 60%;
  left: 115%;
`;

export const StyledLogOut = styled.svg`
  position: absolute;
  opacity: 1;
  transition: opacity 0.2s;
  
  ${StyledBackLogOut}:hover & {
    opacity: 0;  
  }
`;

export const StyledLinkGitHub = styled.a`
  justify-content: center; 
  display: flex;
  align-items: center; 
  margin-left: 7.5px;
`;

export const StyledGitHub = styled.path`
  fill: #096a09; 
  transition: fill 0.2s;

  ${StyledLinkGitHub}:hover &{
    fill: #67bc45;
  }
`;