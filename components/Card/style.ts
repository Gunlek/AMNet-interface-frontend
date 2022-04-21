import styled from "styled-components";
import { Column } from "../Container/style";

export const StyledCard = styled.div`
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.06);
  border-radius: ${(props) => props.radius || "30px"};
  padding: ${(props) => props.padding || "20px"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height};
  display: flex;
  flex-direction: column;
  scrollbar-color: #C4C4C4 rgba(255, 255, 255, 0.6);
  margin-bottom: ${(props) => props.marginBottom};

  @media screen and (max-width: 1000px){
    margin-bottom: ${(props) => props.mobileMarginBottom};
  } 
`;

export const StyledCardCampus = styled(StyledCard)`
  background: rgba(255, 255, 255, 0.9);
  scrollbar-color: #C4C4C4 rgba(255, 255, 255, 0.9);
  
  @media screen and (max-width: 1000px){
    width: 100%;
  } 
`;

export const StyledGreenCard = styled.div`
  background: #096a09;
  border-radius: 13px 20px 20px 0px;
  color: #ffffff;
  width: 99%;
  padding: 5px 0 5px 40px;
  font-size: 1.2rem;
`;

export const StyledTeamPicture = styled(Column)`
  background-image: url(${props => props.background || "/static/images/homepage/team.jpg"});
  outline: ${props => props.outline};
  background-repeat: no-repeat;
  background-position: 50% 0%;
  background-size: cover;
  aspect-ratio: 16 / 9;
  border-radius: 30px;
  
  @media screen and (max-width: 1000px){
    height: 400px;
  } 
`;

export const StyledHelpSection = styled.div`
  color: ${(props) => props.color || "#FFFFFF"};
  text-align: center;
  font-size: 1.2em;
  width: 100%;
  margin-bottom: ${(props) => props.marginBottom};
  
  @media screen and (max-width: 1000px){
    margin-bottom: ${(props) => props.mobileMarginBottom};
    padding: ${(props) => props.padding};
  }
`;

export const GreenLine = styled.div`
  flex: 1;
  border: 1px solid #096A09;
  height: 0px;
  background: #096a09;
  display: ${(props) => props.hideLine ? "none" : "block"};
  margin-left: ${(props) => props.hideLine ? "0" : "10px"};
`;

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 0;
  margin-right: -2%;
  padding: 0 5px;
  margin-top: ${(props) => props.marginTop || "10px"};
  margin-bottom: 10px;
  
  @media screen and (max-width: 1000px){
    text-align: center;
    margin-right: 0;
    margin-top: 15px;
    margin-bottom: 15px;
  } 
`;

export const StyledCampusFooter = styled(StyledFooter)`
  background: rgba(255, 255, 255, 0.9);
  width: 100%;
  margin-right: 0;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 0;

  
  @media screen and (max-width: 1000px){
    padding-right: 10px;
    padding-left: 10px;
  } 
`;

export const StyledTabColumn = styled(Column)`
  color: ${(props) => props.focus ? "black" : "rgba(0, 0, 0, 0.3)"};
  font-size: 1.2em;
  text-align: center;
  line-height: 40px;
  transition: color 0.3s, background-color 0.3s;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
  cursor: ${(props) => !props.focus && "pointer"};

  &:hover{
    background-color: ${(props) => !props.focus && "rgba(0, 0, 0, 0.1)"};
    color: black;
  }

  &:after{
    transform: translateY(50%);
    content: "";
    width: 100%;
    background-color: ${(props) => props.focus && "#096A09"};;
    height: 4px;
    transition: background-color 0.3s;
  }
`;