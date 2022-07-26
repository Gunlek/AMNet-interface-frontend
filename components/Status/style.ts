import styled, { keyframes } from "styled-components";
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
  background-color: ${(props) => props.status ? "#67BC45" : (props.DefaultColor || "#F23232")};
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
  margin-right: 25px;
  display: flex;
  font-size: 1.2rem;
  z-index: ${(props) => props.Display ? "3" : "1"};
  -webkit-tap-highlight-color: transparent;
  
  &::before{
    content: ${(props) => props.notifNumber && '"' + props.notifNumber + '"'};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: red;
    font-size: 14px;
    height: 24px;
    width: 24px;
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
  height: ${(props) => props.Display ? "108px" : "43.8px"}; 
  position: absolute;
  top: 180%;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  width: ${(props) => props.Display ? "340px" : "119px"};
  border-radius: ${(props) => !props.Display && "15px"};
  padding: ${(props) => !props.Display && "7.5px"};
  z-index: ${(props) => props.Display ? "3" : "-2"};
  overflow: hidden;
  pointer-events: ${(props) => props.Display ? undefined : "none"};
  

  @media screen and (max-width: 1000px){
    transition: opacity 0.3s, z-index 0.3s,;
    left: ${(props) => props.Unpaid ? "-300%" : "285%"};
    width: max-content;
    height: auto;
    border-radius: 30px;
    padding: 20px;

    span{
      opacity: 1
    }
  }
  
  @media screen and (min-width: 1000px){
    ${StyledConteneurNotif}:hover & {
      opacity: 1;
    }
  }
`;