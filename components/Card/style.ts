import styled from "styled-components";
import { Column } from "../Container/style";

export const StyledCard = styled.div`
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.06);
  border-radius: ${(props) => props.radius || "30px"};
  padding: ${(props) => props.padding || "0"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height};
`;

export const StyledCardCampus = styled(StyledCard)`
  background: rgba(255, 255, 255, 0.9);
`;

export const StyledGreenCard = styled.div`
  background: #096a09;
  border-radius: 13px 20px 20px 0px;
  color: #ffffff;
  width: 99%;
  padding-left: 40px;
  height: 2.2em;
  line-height: 2.2em;
  font-size: 1.1em;
`;

export const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.06);
  border-radius: 15px;
  width: ${(props) => props.width || "100%"};
  padding-left:20px;
  height: 40px;
  font-size: 1.1em;
  border: none;
  font-family: "Poppins";

  &:hover{
    border: 1px solid #096A09;
    transition: color 0.2s;
  }

  &:focus {
    outline: none;
    border: 1px solid #096A09;
    transition: color 0.2s;
  }
`;

export const StyledSelect = styled.select`
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.06);
  border-radius: 15px;
  width: ${(props) => props.width || "100%"};
  padding-left: 20px;
  height: 40px;
  border: none;
  font-size: 1.1em;
  font-family: "Poppins";

  &:hover{
    border: 1px solid #096A09;
    transition: color 0.2s;
  }

  &:focus{
      outline: none;
      border: 1px solid #096A09;
      transition: color 0.2s;
  }
`;

export const StyledMail = styled.a`
  font-size: 1.1em;
  font-family: "Poppins";
  
  &:hover{
        color: ${(props) => props.color};
        transition: color 0.2s;
  }
`;

export const StyledCheckbox = styled.input`
  width: 34px;
  height: 34px;
  border: 4px solid #096a09;
  box-sizing: border-box;
  border-radius: 9px;
`;

export const StyledTeamPicture = styled(Column)`
  background-image: url("/static/images/team.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  border-radius: 30px;
`;

export const StyledHelpSection = styled.div`
  color: ${(props) => props.color || "#FFFFFF"};
  text-align: center;
  font-size: 1.1em;
  width: 100%;
`;

export const WhiteText = styled.div`
  color: white;
  font-size: 1.2em;
`;

export const GreenText = styled(WhiteText)`
  color: #096a09;
`;

export const BlackText = styled(WhiteText)`
  color: black;
`;

export const BlackTitle = styled(BlackText)`
  font-size: 2.6em;
  line-height: 80px;
`

export const GreenLine = styled.div`
  width: 100%;
  border: 1px solid #096A09;
  height: 0px;
  background: #096a09;
`;

export const Spacer = styled.div`
  height: ${(props) => props.height};
`;

export const StyledCotisaion = styled.div`
  background: #D1D5D2;
  border-radius: 30px;
  line-height: 40px;
  margin-right: 15px;
  padding: 5px;
  width: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledMenu = styled(StyledCard)`
  height: 100%;
  width: 85px;
`;

export const StyledBackIcon = styled.a`
  display: flex;
  justify-content: center;

  height: 60px;
  width: 60px;

  &:hover{
    background: linear-gradient(134.54deg, #67BC45 5.67%, #096A09 94.96%);
    border-radius: 15px;
    transition: color 0.2s;
  }
`;

export const StyledIcon = styled.img`
  ${StyledBackIcon}:hover & {
    display: none;
  }
`;