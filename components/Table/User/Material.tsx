import axios, { AxiosResponse } from "axios";
import React, { useState } from "react";
import { SmallRedButton } from "../../Button/Buttons";
import { StyledMaterialToolTip } from "../../Card/style";
import { MediaContextProvider, Media } from "../../MediaQueries/MediaSSR";
import { StateRequest } from "../../Status/Status";
import { hardware } from "../../Utils/types";
import { StyledTr, StyledTd, StyledFlexTd, StyledHeadTr, StyledTh, StyledTable } from "../style";

export default function MaterialUserTable(props: { requests: hardware[], setHardware: Function, userId: Number }) {
    let listHTML = [];
    let mobilelistHTML = [];
    const [declinedExist, setDeclinedExist] = useState(false);
    const containerStyle = {
        height: "100%",
        width: "100%",
        overflow: "auto"
    };

    const deleteMaterial = async (e, materialId: Number) => {
        e.preventDefault();
        axios.delete(`/hardware/${materialId}`)
            .then(async (res: AxiosResponse) => {
                if (res.status === 200) {
                    const hardware = await axios.get(`/hardware/user/${props.userId}`);
                    props.setHardware(hardware.data);
                }
            });
    };

    props.requests.map((value, index) => {
        if (value.material_state === "declined" && !declinedExist) setDeclinedExist(true);

        listHTML.push(
            <StyledTr key={index}>
                <StyledTd>{index + 1}</StyledTd>
                <StyledTd>{value['material_description']}</StyledTd>
                {declinedExist && <StyledTd>{value.declined_reason}</StyledTd>}
                <StyledFlexTd style={{ whiteSpace: "normal" }}>
                    <div style={{ minWidth: "100%", width: "400px", maxWidth: "max-content" }}>
                        {value['material_reason']}
                    </div>
                </StyledFlexTd>
                <StyledTd>
                    <StateRequest state={value['material_state']} />
                </StyledTd>
                <StyledTd style={{ position: "relative" }}>
                    <SmallRedButton
                        onClick={value['material_state'] !== 'active' ? (e) => deleteMaterial(e, value.material_id) : undefined}
                        style={{
                            backgroundColor: value['material_state'] === 'active' ? "rgba(242,50,50, 0.5)" : undefined,
                            boxShadow: value['material_state'] === 'active' ? "0px 0px 0px rgba(0, 0, 0, 0)" : undefined
                        }}
                    >
                        Supprimer
                        {value['material_state'] === 'active' &&
                            <StyledMaterialToolTip>
                                Vous ne pouvez pas supprimer <br />
                                une demande acceptée
                            </StyledMaterialToolTip>
                        }
                    </SmallRedButton>
                </StyledTd>
            </StyledTr>
        );

        mobilelistHTML.push(
            <React.Fragment key={index}>
                <StyledHeadTr>
                    <StyledTh>Demande {index + 1} </StyledTh>
                    <StyledTh style={{ textAlign: "center", paddingRight: "10px" }}>{value['material_description']}</StyledTh>
                </StyledHeadTr>
                {value.material_state === "declined" &&
                    <StyledTr>
                        <StyledTd>Motif du Refus</StyledTd>
                        <StyledTd>{value.declined_reason}</StyledTd>
                    </StyledTr>
                }
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
                    <StyledTd style={{ textAlign: "center", position: "relative" }}>
                        <SmallRedButton
                            onClick={value['material_state'] !== 'active' ? (e) => deleteMaterial(e, value.material_id) : undefined}
                            style={{
                                backgroundColor: value['material_state'] === 'active' ? "rgba(242,50,50, 0.5)" : undefined,
                                boxShadow: value['material_state'] === 'active' ? "0px 0px 0px rgba(0, 0, 0, 0)" : undefined
                            }}
                        >
                            Supprimer
                            {value['material_state'] === 'active' &&
                                <StyledMaterialToolTip>
                                    Vous ne pouvez pas supprimer <br />
                                    une demande acceptée
                                </StyledMaterialToolTip>
                            }
                        </SmallRedButton>
                    </StyledTd>
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
                            {declinedExist && <StyledTh scope="col">Motif de Refus</StyledTh>}
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