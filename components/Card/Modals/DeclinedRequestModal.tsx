import axios from "axios"
import { useState } from "react"
import { OrangeButton, SmallOrangeButton } from "../../Button/Buttons"
import { Row } from "../../Container/style"
import AutoTextArea from "../../Input/TextArea"
import { TitleCard } from "../Cards"
import ModalLogic from "./ModalLogic"
import { StyledBackgroundModal, StyledModal } from "./style"

export default function DeclinedRequestModal(props: {
    handleTabChange: Function,
    requestType: string,
    id: Number,
    inProof: boolean
}) {
    const { Display, Opacity, toggle } = ModalLogic();
    const [reason, setReason] = useState("");

    const Disable = async (e) => {
        e.preventDefault();
        await axios.put(`/${props.requestType}/disable/${props.id}`, { reason: reason.replaceAll('\n', '<br>') });
        toggle();
        props.handleTabChange();
    };

    return (
        <>
            <SmallOrangeButton onClick={toggle}>
                Revoquer
            </SmallOrangeButton>
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