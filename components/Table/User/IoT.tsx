import React from "react";
import { SmallRedButton } from "../../Button/Buttons";
import UserProoveModal from "../../Card/Modals/UserProoveModal";
import { MediaContextProvider, Media } from "../../MediaQueries/MediaSSR";
import { StateRequest } from "../../Status/Status";
import { access } from "../../Utils/types";
import {
    StyledTr,
    StyledTd,
    StyledFlexTd,
    StyledTable,
    StyledTh,
    StyledHeadTr
} from "../style";

export default function IoTUserTable(props: { requests: access[] }) {
    let listHTML = [];
    let mobilelistHTML = [];
    const containerStyle = {
        height: "100%",
        width: "100%",
        overflow: "auto"
    }

    props.requests.map((value, index) => {
        listHTML.push(
            <StyledTr key={index}>
                <StyledTd>{index + 1}</StyledTd>
                <StyledFlexTd>{value.access_description}</StyledFlexTd>
                <StyledTd>{value.access_mac}</StyledTd>
                <StyledTd>
                    <UserProoveModal link="/static/images/homepage/campus.jpg"/>
                </StyledTd>
                <StyledTd>
                    <StateRequest state={value.access_state} />
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
                    <StyledTh style={{ textAlign: "center", paddingRight: "10px" }}>{value.access_description}</StyledTh>
                </StyledHeadTr>
                <StyledTr>
                    <StyledTd>Adresse Mac </StyledTd>
                    <StyledTd style={{ textAlign: "center" }}>{value.access_mac}</StyledTd>
                </StyledTr>
                <StyledTr>
                    <StyledTd>Preuve</StyledTd>
                    <StyledTd style={{ textAlign: "center", whiteSpace: "normal" }}>
                        <UserProoveModal link="/static/images/homepage/campus.jpg"/>
                    </StyledTd>
                </StyledTr>
                <StyledTr>
                    <StyledTd>Etat</StyledTd>
                    <StyledTd><StateRequest center={true} state={value.access_state} /></StyledTd>
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
            <Media at="sm" style={containerStyle}>
                <StyledTable>
                    <tbody>{mobilelistHTML}</tbody>
                </StyledTable>
            </Media>

            <Media greaterThan="sm" style={containerStyle}>
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