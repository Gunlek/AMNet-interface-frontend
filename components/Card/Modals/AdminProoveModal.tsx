import { useState } from "react";
import { ResponsiveRow, Col8, Col4 } from "../../Container/style";
import useMediaQuery from "../../MediaQueries/MediaQuery";
import { StateRequest } from "../../Status/Status";
import { Buttons } from "../../Table/Admin/Buttons";
import { StyledTable, StyledHeadTr, StyledTh, StyledTr, StyledTd } from "../../Table/style";
import { StyledLink } from "../../Text/style";
import { TitleCard } from "../Cards";
import ModalLogic from "./ModalLogic";
import { StyledBackgroundModal, StyledModal } from "./style";

export default function ProoveModal(props: { request: any, link: string }) {
    const minWidth1000 = useMediaQuery('(min-width: 1200px)')
    const { Display, Opacity, toggle } = ModalLogic()
    
    return (
        <>
            <StyledLink color="#096a09" onClick={toggle}>Image</StyledLink>
            <StyledBackgroundModal onClick={toggle} Display={Display} Opacity={Opacity}/>
            <StyledModal
                width={minWidth1000 ? "1200px" : undefined}
                Display={Display} Opacity={Opacity}
                style={{
                    maxHeight: "90vh",
                    padding: minWidth1000 ? "30px" : "20px",
                    paddingRight: minWidth1000 ? "17.5px" : "7.5px"
                }}
            >
                <div
                    style={{
                        width: "100%",
                        overflow: "auto"
                    }}
                >
                    <TitleCard hideLine={!minWidth1000}>Demande d'accès pour un objet connecté</TitleCard>
                    <ResponsiveRow>
                        <Col8 style={{ paddingRight: minWidth1000 ? "1%" : "0", marginBottom: minWidth1000 ? "0" : "20px" }}>
                            <img style={{ borderRadius: "30px", minWidth: "100%" }} src={props.link} />
                        </Col8>
                        <Col4 style={{ paddingLeft: minWidth1000 ? "1%" : "0", overflow: "auto" }}>
                            <StyledTable>
                                <tbody>
                                    <StyledHeadTr>
                                        <StyledTh>Equipement</StyledTh>
                                        <StyledTh style={{ textAlign: "center" }}>{props.request['access_description']}</StyledTh>
                                    </StyledHeadTr>
                                    <StyledTr>
                                        <StyledTd>Utilisateur</StyledTd>
                                        <StyledTd style={{ textAlign: "center" }}>{props.request['user_name']}</StyledTd>
                                    </StyledTr>
                                    <StyledTr>
                                        <StyledTd>Adresse Mac</StyledTd>
                                        <StyledTd style={{ textAlign: "center" }}>{props.request['access_mac']}</StyledTd>
                                    </StyledTr>
                                    <StyledTr>
                                        <StyledTd>Etat</StyledTd>
                                        <StyledTd><StateRequest center={true} state={props.request['acces_state']} /></StyledTd>
                                    </StyledTr>
                                    <StyledTr>
                                        <StyledTd>Actions</StyledTd>
                                        <StyledTd style={{ textAlign: "center" }}>
                                            <div
                                                style={{
                                                    height: (props.request['acces_state'] == "pending") ? "160px" : "100px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "space-between",
                                                    flexDirection: "column"
                                                }}
                                            >
                                                <Buttons status={props.request['acces_state']} />
                                            </div>
                                        </StyledTd>
                                    </StyledTr>
                                </tbody>
                            </StyledTable>
                        </Col4>
                    </ResponsiveRow>
                </div>
            </StyledModal>
        </>
    )
}
