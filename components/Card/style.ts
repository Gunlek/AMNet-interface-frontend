import styled from "styled-components";

export const StyledCard = styled.div`
    width: ${props=>props.width || '90%'};
    height: ${props=>props.height || '40%'};
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.06);
    border-radius: ${props=>props.radius || '30px'};
`;

export const StyledGreenCard = styled.div`
    background: #096A09;
    border-radius: 13px 20px 20px 0px;
    color: #FFFFFF;
    width: 99%;
    margin-top:2%;
    padding-left:20px;
    height:2rem;
    line-height: 2rem;
`;


export const StyledFlexDivCol = styled.div`
    flex-direction: column;
    display: flex;
    align-items: ${props=>props.align || 'center'};
    justify-content: ${props=>props.justify || 'center'};
    height: 100%;
    width: ${props=>props.width || '100%'};
    margin: ${props=>props.margin || '0.5%'} 0;
    padding: ${props=>props.padding || '0%'} 0;
`;

export const StyledFlexDivRow = styled(StyledFlexDivCol)`
    flex-direction: row;
    width: ${props=>props.width || '90%'};
    height: ${props=>props.height || '100%'};
`;

export const StyledRectangleLogo = styled.div`
    height: 135px;
`;

export const  StyledCol = styled.div`
    flex-grow: ${props=>props.colnumber || '2'};
    width: ${props=>props.width || '50%'};
`;

export const StyledTeamPicture = styled(StyledCol)`
  background-image: url("/static/images/team.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 350px;
  width: 100%;
  border-radius: 30px;
`;

export const StyledHelpSection= styled.div`
    color: ${props=>props.color || '#FFFFFF'};
    margin-top:1%;
`;

export const StyledWhiteTxt= styled.div`
    color: #FFFFFF;
    font-size: 20px;
`;

export const StyledGreenText = styled(StyledWhiteTxt)`
    color: #096A09;
`;

export const StyledGreenLine = styled.div`
    width: 90%;
    height: 0px;
    border: 1px solid #096A09;
`;

