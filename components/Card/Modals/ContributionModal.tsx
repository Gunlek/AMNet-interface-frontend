import { GreenButton } from "../../Button/Buttons"
import useMediaQuery from "../../MediaQueries/MediaQuery"
import { BlackText, StyledLink } from "../../Text/style"
import { TitleCard } from "../Cards"
import ModalLogic from "./ModalLogic"
import { StyledBackgroundModal, StyledModal } from "./style"

export default function ContributionModal() {
    const minWidth1000 = useMediaQuery('(min-width: 1000px)')
    const { Display, Opacity, toggle } = ModalLogic()

    return (
        <>
            <GreenButton width="150px" height="50px" onClick={toggle}>Payer</GreenButton>
            {Display &&
                <>
                    <StyledBackgroundModal onClick={toggle} Opacity={Opacity} />
                    <StyledModal width={minWidth1000 ? "600px" : undefined} Opacity={Opacity}>
                        <TitleCard>Cotisation</TitleCard>
                        <BlackText style={{ marginBottom: "30px", textAlign: "justify" }}>
                            Le paiement de la cotisation s'effectue en utilisant Lydia. Il vous sera proposé d'utiliser votre compte Lydia pour régler votre cotisation. Si vous n'êtes pas titulaire d'un compte Lydia, il vous sera possible de réaliser le paiement en utilisant votre carte bancaire.
                            <br /><br />
                            En cas de problème lors du paiement, n'hésitez pas à nous en informer à  <StyledLink color="#096a09" href="mailto:contact@amnet.fr">contact@amnet.fr</StyledLink>
                        </BlackText>
                        <GreenButton width="100%">Cliquez pour procéder au paiement (35€)</GreenButton>
                    </StyledModal>
                </>
            }
        </>
    )
}