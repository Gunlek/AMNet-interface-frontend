import React from 'react';
import { SmallRedButton } from '../Button/Buttons';
import { Column } from '../Container/style';
import { StyledTd, StyledTr } from '../Table/style';
import { GreenText } from '../Text/style';

export const TeamList = (props: {list: any[], setter: Function}) => {
    let listHTML = [];
    
    props.list.map((value, index) => {
        listHTML.push(
            <StyledTr style={{ padding:"10px 0" }} key={index}>
                <StyledTd style={{ paddingLeft:"20px", paddingRight:"10px", flex: "5"}}>{value['pseudo']}</StyledTd>
                <StyledTd style={{ paddingLeft:"30px", paddingRight:"10px", flex: "5"}}>{value.id}</StyledTd>
                <StyledTd style={{ paddingLeft:"10px", justifyContent: "center", alignItems:"center", minWidth:"160px", flex:"2"}}><SmallRedButton onClick={props.setter(index, this)}>Supprimer</SmallRedButton></StyledTd>
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