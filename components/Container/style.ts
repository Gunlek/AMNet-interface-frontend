import styled from "styled-components";

export const StyledFlexCol = styled.div`
    flex-direction: column;
    display: flex;
    align-items: ${props=>props.align || 'center'};
    justify-content: ${props=>props.justify || 'center'};
    height: ${props=>props.height || '100%'};;
    width: ${props=>props.width || '100%'};
    margin: ${props=>props.margin || '0'};
    padding: ${props=>props.padding || '0'};
`;

export const StyledFlexRow = styled(StyledFlexCol)`
    flex-direction: row;
    width: ${props=>props.width || '100%'};
    height: ${props=>props.height || '100%'};
`;

export const  StyledFlexDiv = styled.div`
    flex-grow: ${props=>props.grow || '0'};
    width: ${props=>props.width || '50%'};
    height: ${props=>props.height || '100%'};
    margin: ${props=>props.margin || '0'};
    padding: ${props=>props.padding || '0'};
`;