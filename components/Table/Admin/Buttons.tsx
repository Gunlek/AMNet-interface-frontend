import axios from "axios"
import { useState } from "react";
import { OrangeButton, SmallGreenButton, SmallOrangeButton, SmallRedButton } from "../../Button/Buttons"
import { TitleCard } from "../../Card/Cards";
import ModalLogic from "../../Card/Modals/ModalLogic";
import { StyledBackgroundModal, StyledModal } from "../../Card/Modals/style";
import { Row } from "../../Container/style";
import AutoTextArea from "../../Input/TextArea";

export const Buttons = (props: {
    status: string,
    id: Number,
    requestType: string,
    setTab: Function,
    inProof?: boolean,
    toggleProofModal?: Function
}) => {
    const [reason, setReason] = useState("");
    const { Display, Opacity, toggle } = ModalLogic();
    const handleTabChange = async () => {
        const newTab = await (await axios.get(`/${props.requestType}`)).data
        props.setTab(newTab);
    };

    const Delete = async (e) => {
        e.preventDefault();
        await axios.delete(`/${props.requestType}/${props.id}`);
        if(props.toggleProofModal) props.toggleProofModal();
        handleTabChange();
    };

    const Enable = async (e) => {
        e.preventDefault();
        await axios.put(`/${props.requestType}/enable/${props.id}`);
        if(props.toggleProofModal) props.toggleProofModal();
        handleTabChange();
    };

    const Disable = async (e) => {
        e.preventDefault();
        await axios.put(`/${props.requestType}/disable/${props.id}`, { reason: reason.replaceAll('\n', '<br>') });
        toggle();
        if(props.toggleProofModal) props.toggleProofModal();
        handleTabChange();
    };

    return (
        <>
            {!(props.status == "active") &&
                <SmallGreenButton onClick={Enable}>
                    Accorder
                </SmallGreenButton>
            }
            {!(props.status == "declined") &&
                <SmallOrangeButton onClick={toggle}>
                    Revoquer
                </SmallOrangeButton>
            }
            <SmallRedButton onClick={Delete}>Supprimer</SmallRedButton>
            {Display &&
                <>
                    <StyledBackgroundModal onClick={toggle} Opacity={Opacity} style={{ height: "100%", borderRadius: props.inProof ? "30px" : undefined }} />
                    <StyledModal width="450px" Opacity={Opacity}>
                        <TitleCard>Motif du refus</TitleCard>
                        <div style={{ marginBottom: "30px", width: "100%", position: "relative" }}>
                            <AutoTextArea onChange={(elmt) => setReason(elmt.target.value)} />
                        </div>

                        <Row style={{ justifyContent: "center" }}>
                            <OrangeButton width="300px" mobileWidth="100%" onClick={Disable}>
                                Revoquer
                            </OrangeButton>
                        </Row>
                    </StyledModal>
                </>
            }
        </>
    )
}