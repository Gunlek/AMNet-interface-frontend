import React from "react";
import { SmallRedButton } from "../Button/Buttons";
import { StateRequest } from "../Status/Status";
import { StyledLink } from "../Text/style";
import { 
    StyledTr, 
    StyledTd, 
    StyledFlexTd, 
    StyledTable, 
    StyledGreenTr, 
    StyledTh 
} from "./style";

export function IoTUserTable(props: { RequestTable: any[] }) {
    let listHTML = [];

    props.RequestTable.map((value, index) => { 
        listHTML.push(
            <StyledTr key={index}>
                <StyledTd>{index+1}</StyledTd>
                <StyledFlexTd>{value['access_description']}</StyledFlexTd>
                <StyledTd>{value['access_mac']}</StyledTd>
                <StyledTd>
                    <StyledLink color="#096a09" hovercolor="#67bc45">Preuve Image</StyledLink>
                </StyledTd>
                <StyledTd>
                    <StateRequest state={value['acces_state']} />
                </StyledTd>
                <StyledTd>
                    <SmallRedButton>Supprimer</SmallRedButton>  
                </StyledTd>
            </StyledTr>
        );  
    })

    return (
        <StyledTable>
            <thead>
                <StyledGreenTr>
                    <StyledTh scope="col">#</StyledTh>
                    <StyledTh scope="col">Description</StyledTh>
                    <StyledTh scope="col">Adresse Mac</StyledTh>
                    <StyledTh scope="col">Preuve Image</StyledTh>
                    <StyledTh scope="col"><span style={{ paddingLeft: "5px" }}>Etat</span></StyledTh>
                    <StyledTh scope="col"><span style={{ paddingLeft: "5px" }}>Actions</span></StyledTh>
                </StyledGreenTr>
            </thead>
            <tbody>{listHTML}</tbody>
        </StyledTable>
    );
};


export function MaterialUserTable(props: { RequestTable: any[] }) {
    let listHTML = [];

    props.RequestTable.map((value, index) => { 
        listHTML.push(
            <StyledTr key={index}>
                <StyledTd>{index+1}</StyledTd>
                <StyledFlexTd>{value['material_description']}</StyledFlexTd>
                <StyledTd>
                    <StateRequest state={value['material_state']} />
                </StyledTd>
                <StyledTd>
                    <SmallRedButton>Supprimer</SmallRedButton>  
                </StyledTd>
            </StyledTr>
        );  
    })

    return (
        <StyledTable>
            <thead>
                <StyledGreenTr>
                    <StyledTh scope="col">#</StyledTh>
                    <StyledTh scope="col">Description</StyledTh>
                    <StyledTh scope="col"><span style={{ paddingLeft: "5px" }}>Etat</span></StyledTh>
                    <StyledTh scope="col"><span style={{ paddingLeft: "5px" }}>Actions</span></StyledTh>
                </StyledGreenTr>
            </thead>
            <tbody>{listHTML}</tbody>
        </StyledTable>
    );
};