import React from 'react';
import { SmallRedButton } from '../Button/Buttons';
import { StyledTable, StyledTd, StyledTr } from '../Table/style';

export const TeamList = (props: { list: any[], setter?: Function }) => {
    let listHTML = [];

    props.list.map((value, index) => {
        listHTML.push(
            <StyledTr key={index}>
                <StyledTd style={{ width: "41.66%" }}>{value['pseudo']}</StyledTd>
                <StyledTd style={{ width: "41.66%", paddingLeft: "35px" }}>{value.id}</StyledTd>
                <StyledTd><SmallRedButton onClick={(elmt) => props.setter(elmt, index)}>Supprimer</SmallRedButton></StyledTd>
            </StyledTr>
        );
    })

    return (
        <StyledTable>
            <tbody>{listHTML}</tbody>
        </StyledTable>
    );
};

export default TeamList