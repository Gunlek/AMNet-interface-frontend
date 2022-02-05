import React from 'react';
import { SmallRedButton } from '../Button/Buttons';
import { Column } from '../Container/style';
import { StyledTd, StyledTr } from '../Table/style';
import { GreenText } from '../Text/style';

export const TeamList = (props: {list: any[], setter?: Function}) => {
    let listHTML = [];
    
    props.list.map((value, index) => {
        listHTML.push(
            <StyledTr style={{ padding:"10px 0" }} key={index}>
                <StyledTd>{value['pseudo']}</StyledTd>
                <StyledTd>{value.id}</StyledTd>
                <StyledTd><SmallRedButton onClick={(elmt) => props.setter(elmt, index)}>Supprimer</SmallRedButton></StyledTd>
            </StyledTr>
        );
    })
    
    return (
        <Column style={{marginTop:"20px"}}>
            <GreenText>La Team actuelle</GreenText>
            <table style={{width: "100%"}}> 
                <tbody>{listHTML}</tbody>
            </table> 
        </Column>
    );
};

export default TeamList