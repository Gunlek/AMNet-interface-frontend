import { BodyWithModal } from "../../Background/style"
import useMediaQuery from "../../MediaQueries/MediaQuery"
import { StyledLink } from "../../Text/style"
import { TitleCard } from "../Cards"
import { ModalLogic } from "./ModalLogic"
import { StyledBackgroundModal, StyledModal } from "./style"

export default function UserProoveModal(props: { link: string }) {
    const minWidth1000 = useMediaQuery('(min-width: 1200px)')
    const { reveal, toggle } = ModalLogic()

    return (
        <>
            <BodyWithModal reveal={reveal} />
            <StyledLink color="#096a09" onClick={toggle}>Image</StyledLink>
            <StyledBackgroundModal onClick={toggle} reveal={reveal} />
            <StyledModal
                width={minWidth1000 ? "800px" : undefined}
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
                        overflow: "auto"
                    }}
                >
                    <TitleCard>Photo de votre equipement</TitleCard>
                    <img style={{ borderRadius: "30px", maxWidth: "100%" }} src={props.link} />
                </div>
            </StyledModal>
        </>
    )
} 