import React, { useState } from "react";
import { GreenButton } from "../Button/Buttons";
import { Row } from "../Container/style";
import FileUploader from "../Input/FileUploader";
import { StyledInput } from "../Input/style";
import useMediaQuery from "../MediaQueries/MediaQuery";
import { BlackText, GreenText, GreenTitle, StyledLink } from "../Text/style";
import { TitleCard } from "./Cards";
import { StyledBackgroundModal, StyledCard, StyledModal } from "./style";

export const ModalLogic = () => {
    var [reveal, setreveal] = useState(false);

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
            <StyledBackgroundModal onClick={props.hide} reveal={props.reveal} />
            <StyledModal width={minWidth1000 ? "600px" : undefined} reveal={props.reveal}>
                <TitleCard>Cotisation</TitleCard>
                <BlackText style={{ marginBottom: "30px", textAlign: "justify" }}>
                    Le paiement de la cotisation s'effectue en utilisant Lydia. Il vous sera proposé d'utiliser votre compte Lydia pour régler votre cotisation. Si vous n'êtes pas titulaire d'un compte Lydia, il vous sera possible de réaliser le paiement en utilisant votre carte bancaire.
                    <br /><br />
                    En cas de problème lors du paiement, n'hésitez pas à nous en informer à  <StyledLink color="#096a09" style={{ fontSize: "1em" }} href="mailto:contact@amnet.fr">contact@amnet.fr</StyledLink>
                </BlackText>
                <GreenButton width="100%">Cliquez pour procéder au paiement (35€)</GreenButton>
            </StyledModal>
        </>
    )
}

export function IoTModal(props: { reveal: boolean, hide: any }) {
    const minWidth1000 = useMediaQuery('(min-width: 1000px)')

    return (
        <>
            <StyledBackgroundModal onClick={props.hide} reveal={props.reveal} />
            <StyledModal width={minWidth1000 ? "900px" : undefined} reveal={props.reveal}>
                <TitleCard hideLine={!minWidth1000}>Demande d'accès pour un objet connecté</TitleCard>
                <div style={{ marginBottom: "20px" }}>
                    <GreenText style={{ marginBottom: "5px" }}>Adresse Physique</GreenText>
                    <StyledInput  placeholder="Par exemple: 5E:FF:56:A2:AF:15"/>
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <GreenText style={{ marginBottom: "5px" }}>Description</GreenText>
                    <StyledInput placeholder="Par exemple: Chromecast"/>
                </div>
                <div style={{ marginBottom: "30px" }}>
                    <GreenText style={{ marginBottom: "5px" }}>Photographie de l'objet avec Adresse Physique visible</GreenText>
                    <FileUploader/>
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
            <StyledBackgroundModal onClick={props.hide} reveal={props.reveal} />
            <StyledModal width={minWidth1000 ? "800px" : undefined} reveal={props.reveal}>
                <TitleCard>Demande de matériel</TitleCard>
                <div style={{ marginBottom: "30px" }}>
                    <GreenText style={{ marginBottom: "5px" }}>Description</GreenText>
                    <StyledInput placeholder="Par exemple: 1 écran"/>
                </div>
                <Row style={{ justifyContent: "center" }}>
                    <GreenButton width="350px">Envoyer la demande</GreenButton>
                </Row>
            </StyledModal>
        </>
    )
} 