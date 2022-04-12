import { GreenButton } from "../../Button/Buttons"
import { Row } from "../../Container/style"
import { StyledInputLabel, StyledInput, StyledTextArea } from "../../Input/style"
import useMediaQuery from "../../MediaQueries/MediaQuery"
import { TitleCard } from "../Cards"
import { ModalLogic } from "./ModalLogic"
import { StyledBackgroundModal, StyledModal } from "./style"

export default function MaterialModal() {
    const minWidth1000 = useMediaQuery('(min-width: 1000px)')
    const { Display, Opacity, toggle } = ModalLogic()

    return (
        <>
            <GreenButton width="280px" onClick={toggle}>Nouvelle demande</GreenButton>
            <StyledBackgroundModal onClick={toggle} Display={Display} Opacity={Opacity} />
            <StyledModal width={minWidth1000 ? "800px" : undefined} Display={Display} Opacity={Opacity}>
                <TitleCard>Demande de matériel</TitleCard>
                <div style={{ marginBottom: "20px", width: "100%" }}>
                    <StyledInputLabel htmlFor="description_equipment">Description</StyledInputLabel>
                    <StyledInput border="2px solid rgba(0, 159, 0, 0.15)" id="description_equipment" placeholder="Par exemple: 1 écran" />
                </div>
                <div style={{ marginBottom: "30px", width: "100%" }}>
                    <StyledInputLabel htmlFor="reason_equipment">Détails</StyledInputLabel>
                    <StyledTextArea border="2px solid rgba(0, 159, 0, 0.15)" id="reason_equipment" placeholder="Par exemple: Je souhaite avoir un second écran pour faire de la CAO" />
                </div>
                <Row style={{ justifyContent: "center" }}>
                    <GreenButton width="350px">Envoyer la demande</GreenButton>
                </Row>
            </StyledModal>
        </>
    )
}