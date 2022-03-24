import { BodyWithModal } from "../../Background/style"
import { GreenButton } from "../../Button/Buttons"
import { Row } from "../../Container/style"
import { StyledInputLabel, StyledInput, StyledTextArea } from "../../Input/style"
import useMediaQuery from "../../MediaQueries/MediaQuery"
import { TitleCard } from "../Cards"
import { ModalLogic } from "./ModalLogic"
import { StyledBackgroundModal, StyledModal } from "./style"

export default function MaterialModal() {
    const minWidth1000 = useMediaQuery('(min-width: 1000px)')
    const { reveal, toggle } = ModalLogic()

    return (
        <>
            <BodyWithModal reveal={reveal} />
            <GreenButton width="280px" onClick={toggle}>Nouvelle demande</GreenButton>
            <StyledBackgroundModal onClick={toggle} reveal={reveal} />
            <StyledModal width={minWidth1000 ? "800px" : undefined} reveal={reveal}>
                <TitleCard>Demande de matériel</TitleCard>
                <div style={{ marginBottom: "20px", width: "100%" }}>
                    <StyledInputLabel htmlFor="description_equipment">Description</StyledInputLabel>
                    <StyledInput id="description_equipment" placeholder="Par exemple: 1 écran" />
                </div>
                <div style={{ marginBottom: "30px", width: "100%" }}>
                    <StyledInputLabel htmlFor="reason_equipment">Détails</StyledInputLabel>
                    <StyledTextArea id="reason_equipment" placeholder="Par exemple: Je souhaite avoir un second écran pour faire de la CAO" />
                </div>
                <Row style={{ justifyContent: "center" }}>
                    <GreenButton width="350px">Envoyer la demande</GreenButton>
                </Row>
            </StyledModal>
        </>
    )
}