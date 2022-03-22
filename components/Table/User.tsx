import React, { useEffect, useState } from "react";
import { SmallRedButton } from "../Button/Buttons";
import { UserProoveModal } from "../Card/Modals";
import { Row } from "../Container/style";
import useMediaQuery from "../MediaQueries/MediaQuery";
import { MediaContextProvider, Media } from "../MediaQueries/MediaSSR";
import { StateRequest } from "../Status/Status";
import { StyledLink } from "../Text/style";
import {
    StyledTr,
    StyledTd,
    StyledFlexTd,
    StyledTable,
    StyledTh,
    StyledHeadTr
} from "./style";

export function IoTUserTable(props: { requests: any[] }) {
    let listHTML = [];
    let mobilelistHTML = [];

    props.requests.map((value, index) => {
        listHTML.push(
            <StyledTr key={index}>
                <StyledTd>{index + 1}</StyledTd>
                <StyledFlexTd>{value['access_description']}</StyledFlexTd>
                <StyledTd>{value['access_mac']}</StyledTd>
                <StyledTd>
                    <UserProoveModal link="/static/images/homepage/campus.jpg"/>
                </StyledTd>
                <StyledTd>
                    <StateRequest state={value['acces_state']} />
                </StyledTd>
                <StyledTd>
                    <SmallRedButton>Supprimer</SmallRedButton>
                </StyledTd>
            </StyledTr>
        );

        mobilelistHTML.push(
            <React.Fragment key={index}>
                <StyledHeadTr>
                    <StyledTh>Equipement {index + 1}</StyledTh>
                    <StyledTh style={{ textAlign: "center", paddingRight: "10px" }}>{value['access_description']}</StyledTh>
                </StyledHeadTr>
                <StyledTr>
                    <StyledTd>Adresse Mac </StyledTd>
                    <StyledTd style={{ textAlign: "center" }}>{value['access_mac']}</StyledTd>
                </StyledTr>
                <StyledTr>
                    <StyledTd>Preuve</StyledTd>
                    <StyledTd style={{ textAlign: "center", whiteSpace: "normal" }}>
                        <UserProoveModal link="/static/images/homepage/campus.jpg"/>
                    </StyledTd>
                </StyledTr>
                <StyledTr>
                    <StyledTd>Etat</StyledTd>
                    <StyledTd><StateRequest center={true} state={value['acces_state']} /></StyledTd>
                </StyledTr>
                <StyledTr style={{ borderBottom: props.requests.length == (index + 1) ? undefined : "2px solid transparent" }}>
                    <StyledTd>Action</StyledTd>
                    <StyledTd style={{ textAlign: "center" }}><SmallRedButton>Supprimer</SmallRedButton></StyledTd>
                </StyledTr>
            </React.Fragment>
        )
    })

    return (
        <MediaContextProvider>
            <Media at="sm">
                <StyledTable>
                    <tbody>{mobilelistHTML}</tbody>
                </StyledTable>
            </Media>
            <Media greaterThan="sm">
                <StyledTable>
                    <thead>
                        <StyledHeadTr>
                            <StyledTh scope="col">#</StyledTh>
                            <StyledTh scope="col">Description</StyledTh>
                            <StyledTh scope="col">Adresse Mac</StyledTh>
                            <StyledTh scope="col">Preuve</StyledTh>
                            <StyledTh scope="col"><span style={{ paddingLeft: "5px" }}>Etat</span></StyledTh>
                            <StyledTh scope="col"><span style={{ paddingLeft: "5px" }}>Action</span></StyledTh>
                        </StyledHeadTr>
                    </thead>
                    <tbody>{listHTML}</tbody>
                </StyledTable>
            </Media>
        </MediaContextProvider>
    );
};


export function MaterialUserTable(props: { requests: any[] }) {
    let listHTML = [];
    let mobilelistHTML = [];

    props.requests.map((value, index) => {
        listHTML.push(
            <StyledTr key={index}>
                <StyledTd>{index + 1}</StyledTd>
                <StyledTd>{value['material_description']}</StyledTd>
                <StyledFlexTd style={{ whiteSpace: "normal" }}>{value['material_reason']}</StyledFlexTd>
                <StyledTd>
                    <StateRequest state={value['material_state']} />
                </StyledTd>
                <StyledTd>
                    <SmallRedButton>Supprimer</SmallRedButton>
                </StyledTd>
            </StyledTr>
        );

        mobilelistHTML.push(
            <React.Fragment key={index}>
                <StyledHeadTr>
                    <StyledTh>Demande {index + 1} </StyledTh>
                    <StyledTh style={{ textAlign: "center", paddingRight: "10px" }}>{value['material_description']}</StyledTh>
                </StyledHeadTr>
                <StyledTr>
                    <StyledTd>Détails</StyledTd>
                    <StyledTd style={{ textAlign: "center", whiteSpace: "normal" }}>{value['material_reason']}</StyledTd>
                </StyledTr>
                <StyledTr>
                    <StyledTd>Etat</StyledTd>
                    <StyledTd><StateRequest center={true} state={value['material_state']} /></StyledTd>
                </StyledTr>
                <StyledTr style={{ borderBottom: props.requests.length == (index + 1) ? undefined : "2px solid transparent" }}>
                    <StyledTd>Action</StyledTd>
                    <StyledTd style={{ textAlign: "center" }}><SmallRedButton>Supprimer</SmallRedButton></StyledTd>
                </StyledTr>
            </React.Fragment>
        )
    })

    return (
        <MediaContextProvider>
            <Media at="sm">
                <StyledTable>
                    <tbody>{mobilelistHTML}</tbody>
                </StyledTable>
            </Media>
            <Media greaterThan="sm">
                <StyledTable>
                    <thead>
                        <StyledHeadTr>
                            <StyledTh scope="col">#</StyledTh>
                            <StyledTh scope="col">Description</StyledTh>
                            <StyledTh scope="col">Détails</StyledTh>
                            <StyledTh scope="col"><span style={{ paddingLeft: "5px" }}>Etat</span></StyledTh>
                            <StyledTh scope="col"><span style={{ paddingLeft: "5px" }}>Action</span></StyledTh>
                        </StyledHeadTr>
                    </thead>
                    <tbody>{listHTML}</tbody>
                </StyledTable>
            </Media>
        </MediaContextProvider>
    );
};