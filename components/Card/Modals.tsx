import React, { useEffect, useState } from "react";
import { BodyWithModal } from "../Background/style";
import { GreenButton } from "../Button/Buttons";
import { Col4, Col8, ResponsiveRow, Row } from "../Container/style";
import FileUploader from "../Input/FileUploader";
import { StyledInput, StyledInputLabel } from "../Input/style";
import useMediaQuery from "../MediaQueries/MediaQuery";
import { StateRequest } from "../Status/Status";
import { Buttons } from "../Table/Admin";
import { StyledHeadTr, StyledTable, StyledTd, StyledTh, StyledTr } from "../Table/style";
import { BlackText, StyledLink } from "../Text/style";
import { TitleCard } from "./Cards";
import { StyledBackgroundModal, StyledImg, StyledModal } from "./style";

export const ModalLogic = () => {
    const [reveal, setreveal] = useState(false);


    function toggle() {
        setreveal(!reveal);
    }

    return {
        reveal,
        toggle
    }
}

export function ContributionModal(props: { reveal: boolean, hide: any }) {
    const minWidth1000 = useMediaQuery('(min-width: 1000px)')

    return (
        <>
            <BodyWithModal reveal={props.reveal} />
            <StyledBackgroundModal onClick={props.hide} reveal={props.reveal} />
            <StyledModal width={minWidth1000 ? "600px" : undefined} reveal={props.reveal}>
                <TitleCard>Cotisation</TitleCard>
                <BlackText style={{ marginBottom: "30px", textAlign: "justify" }}>
                    Le paiement de la cotisation s'effectue en utilisant Lydia. Il vous sera proposé d'utiliser votre compte Lydia pour régler votre cotisation. Si vous n'êtes pas titulaire d'un compte Lydia, il vous sera possible de réaliser le paiement en utilisant votre carte bancaire.
                    <br /><br />
                    En cas de problème lors du paiement, n'hésitez pas à nous en informer à  <StyledLink color="#096a09" href="mailto:contact@amnet.fr">contact@amnet.fr</StyledLink>
                </BlackText>
                <GreenButton width="100%">Cliquez pour procéder au paiement (35€)</GreenButton>
            </StyledModal>
        </>
    )
}

export function IoTModal(props: { reveal: boolean, hide: any }) {
    const minWidth1000 = useMediaQuery('(min-width: 1000px)')
    const [File, setFile] = useState(null);

    useEffect(() => {
        const input = document.getElementById("picture_equipment") as HTMLInputElement;
        input.value = null;
    }, []);

    function Setfile(id: string, file: any) {
        setFile(file);
    }

    function DeleteFile() {
        const input = document.getElementById("picture_equipment") as HTMLInputElement;
        input.value = null;
        setFile(null);
    }

    return (
        <>
            <BodyWithModal reveal={props.reveal} />
            <StyledBackgroundModal onClick={props.hide} reveal={props.reveal} />
            <StyledModal width={minWidth1000 ? "900px" : undefined} reveal={props.reveal}>
                <TitleCard hideLine={!minWidth1000}>Demande d'accès pour un objet connecté</TitleCard>
                <div style={{ marginBottom: "20px", width: "100%" }}>
                    <StyledInputLabel htmlFor="mac_adress_equipment">Adresse Physique</StyledInputLabel>
                    <StyledInput id="mac_adress_equipment" placeholder="Par exemple: 5E:FF:56:A2:AF:15" />
                </div>
                <div style={{ marginBottom: "20px", width: "100%" }}>
                    <StyledInputLabel htmlFor="description_equipment">Description</StyledInputLabel>
                    <StyledInput id="description_equipment" placeholder="Par exemple: Chromecast" />
                </div>
                <div style={{ marginBottom: "30px", width: "100%" }}>
                    <StyledInputLabel
                        style={{ display: "block" }}
                        htmlFor="picture_equipment"
                    >
                        Photographie de l'objet avec Adresse Physique visible</StyledInputLabel>
                    <ResponsiveRow style={{ alignItems: "center" }}>
                        <FileUploader id="picture_equipment" setfile={Setfile} accept=".jpeg, .jpg, .png, .svg" />
                        <div
                            style={{
                                marginLeft: minWidth1000 && "10px",
                                marginTop: !minWidth1000 && "10px",
                                display: File ? "flex" : "none",
                                alignItems: "center"
                            }}
                        >
                            <StyledLink
                                color="black"
                                hovercolor="#2E8A21"
                                target="_blank"
                                href={File && URL.createObjectURL(File)}
                            >
                                {File && File["name"]}
                            </StyledLink>
                            <StyledImg width="1.2rem" onClick={() => DeleteFile()} src="/static/icons/fail.svg" />
                        </div>
                    </ResponsiveRow>
                </div>
                <Row style={{ justifyContent: "center" }}>
                    <GreenButton width="350px">Envoyer la demande</GreenButton>
                </Row>
            </StyledModal>
        </>
    )
}

export function MaterialModal(props: { reveal: boolean, hide: any }) {
    const minWidth1000 = useMediaQuery('(min-width: 1000px)')

    return (
        <>
            <BodyWithModal reveal={props.reveal} />
            <StyledBackgroundModal onClick={props.hide} reveal={props.reveal} />
            <StyledModal width={minWidth1000 ? "800px" : undefined} reveal={props.reveal}>
                <TitleCard>Demande de matériel</TitleCard>
                <div style={{ marginBottom: "30px", width: "100%" }}>
                    <StyledInputLabel htmlFor="description_equipment">Description</StyledInputLabel>
                    <StyledInput id="description_equipment" placeholder="Par exemple: 1 écran" />
                </div>
                <Row style={{ justifyContent: "center" }}>
                    <GreenButton width="350px">Envoyer la demande</GreenButton>
                </Row>
            </StyledModal>
        </>
    )
}

export function ProoveModal(props: { request: any, link: string }) {
    const minWidth1000 = useMediaQuery('(min-width: 1200px)')
    const { reveal, toggle } = ModalLogic()

    return (
        <>
            <BodyWithModal reveal={reveal} />
            <StyledLink onClick={toggle}>Image</StyledLink>
            <StyledBackgroundModal onClick={toggle} reveal={reveal} />
            <StyledModal
                width={minWidth1000 ? "1200px" : undefined}
                reveal={reveal}
                style={{
                    maxHeight: "90vh",
                    padding: minWidth1000 ? "30px" : "20px",
                    paddingRight: minWidth1000 ? "17.5px" : "7.5px"
                }}
            >
                <div
                    style={{
                        width: "100%",
                        overflow: "auto",
                        paddingRight: "12.5px"
                    }}
                >
                    <TitleCard hideLine={!minWidth1000}>Demande d'accès pour un objet connecté</TitleCard>
                    <ResponsiveRow>
                        <Col8 style={{ paddingRight: minWidth1000 ? "1%" : "0", marginBottom: minWidth1000 ? "0" : "20px" }}>
                            <img style={{ borderRadius: "30px", minWidth: "100%" }} src={props.link} />
                        </Col8>
                        <Col4 style={{ paddingLeft: minWidth1000 ? "1%" : "0", overflow: "auto" }}>
                            <StyledTable>
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
                            </StyledTable>
                        </Col4>
                    </ResponsiveRow>
                </div>
            </StyledModal>
        </>
    )
} 