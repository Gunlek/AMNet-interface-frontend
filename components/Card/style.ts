import styled from "styled-components";
import {StyledFlexCol, StyledFlexDiv} from "../Container/style";

export const StyledCard = styled(StyledFlexDiv)`
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.06);
    border-radius: ${props=>props.radius || '30px'};
    min-height: ${props=>props.minheight};
`;

export const StyledGreenCard = styled.div`
    background: #096A09;
    border-radius: 13px 20px 20px 0px;
    color: #FFFFFF;
    width: 99%;
    padding-left:47px;
    height:2.2rem;
    line-height: 2.2rem;
    font-size: 1.1rem;
`;

export const StyledInput = styled(StyledCard)`
    background: rgba(255, 255, 255, 0.6);
    border-radius: 20px;
`;

export const StyledRadio = styled.input`
    width: 34px;
    height: 34px;
    border: 4px solid #096A09;
    box-sizing: border-box;
    border-radius: 9px;
`;

export const StyledTeamPicture = styled(StyledFlexCol)`
    background-image: url("/static/images/team.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
    border-radius: 30px;
`;

export const StyledHelpSection= styled.div`
    color: ${props=>props.color || '#FFFFFF'};
    text-align: center;
    font-size: 1.1rem
`;

export const StyledWhiteTxt= styled.div`
    color: white;
    font-size: ${props=>props.fontsize || '1.4rem'};
    line-height: ${props=>props.lineheight};
`;

export const StyledGreenText = styled(StyledWhiteTxt)`
    color: #096A09;
`;

export const StyledBlackText = styled(StyledWhiteTxt)`
    color: black;
`;

export const StyledGreenLine = styled.div`
    width: 95%;
    height: 2px;
    background: #096A09;
    margin-left:20px;
`;
