import styled, { keyframes }  from "styled-components";
import { StyledCard } from "../Card/style";

export const StyledStateRequest = styled.div`
  border-radius: 16px;
  height: 40px;
  width: 150px;
  line-height: 40px;
  color: ${(props) => props.color || "#FF9900"};
  text-align: center;
  margin: ${(props) => props.center && "0 auto"};
  user-select: none;
  position: relative;
  outline: 2px solid ${(props) => props.color || "#FF9900"};

  @media screen and (max-width: 1000px){
    width: 140px;
  }
`

export const StyledStateContribution = styled.div`
  background: #D1D5D2;
  border-radius: 20px;
  line-height: 40px;
  padding: 5px;
  width: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledStateInvite = styled.select`
  background-color: ${(props) => props.status ? "#67BC45" : "#F23232"};
  border-radius: 16px;
  height: 40px;
  width: 150px;
  font-size: 1.2em;
  font-family: "Poppins";
  padding-left: 20px;
  color: white;
  border: none;
  font-family: "Poppins";
  transition: background-color 0.2s;

  option {
      color: black;
      background: white;
    }

  &:focus{
    outline: none;
  }
`;

export const StyledSVG = styled.svg`
  path{
    fill: #BABBBA;
    transition: fill 0.2s;
  }

  &:hover{
    path{
      fill: #67bc45;
    }
  }
`;

export const StyledConteneurNotif = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 15px;
  display: flex;
  font-size: 1.2rem;
  z-index: ${(props) => props.Display ? "4" : "1"};
  
  &::before{
    content: ${(props) => props.notifNumber && '"' + props.notifNumber + '"'};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: red;
    font-size: 14px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(25%, -25%);
  }
`;

export const StyledNotification = styled(StyledCard)`
  opacity : ${(props) => props.Display ? props.Opacity ? "1" : "0" : "0"};
  transition: width 0.3s, height 0.3s, border-radius 0.3s, padding 0.3s, z-index 0.3s, opacity 0.3s;
  height: ${(props) => props.Display ? "97.6px" : "48.8px"}; 
  position: absolute;
  top: 180%;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  width: ${(props) => props.Display ? "340px" : "126px"};
  border-radius: ${(props) => !props.Display && "15px"};
  padding: ${(props) => !props.Display && "10px"};
  z-index: ${(props) => props.Display ? "5" : "-2"};
  overflow: hidden;
  pointer-events: ${(props) => props.Display ? undefined : "none"};

  ${StyledConteneurNotif}:hover & {
    opacity: 1;
  }

  @media screen and (max-width: 1000px){
    transition: opacity 0.3s;
    left: 285%;
    padding: ${(props) => !props.Display && "0"};
    width: ${(props) => props.Display ? "max-content" : "0"};
    height: ${(props) => props.Display ? "auto" : "0"};
  }
`;