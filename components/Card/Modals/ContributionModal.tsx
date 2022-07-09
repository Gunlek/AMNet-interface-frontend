import { GreenButton } from "../../Button/Buttons"
import useMediaQuery from "../../MediaQueries/MediaQuery"
import { BlackText, StyledLink } from "../../Text/style"
import { TitleCard } from "../Cards"
import ModalLogic from "./ModalLogic"
import { StyledBackgroundModal, StyledModal } from "./style"

export default function ContributionModal(props: { lydia_cotiz: Number }) {
    const minWidth1000 = useMediaQuery('(min-width: 1000px)')
    const { Display, Opacity, toggle } = ModalLogic()

    return (
        <>
            <GreenButton width="150px" height="50px" onClick={toggle}>Payer</GreenButton>
            {Display &&
                <>
                    <StyledBackgroundModal onClick={toggle} Opacity={Opacity} />
                    <StyledModal width={minWidth1000 ? "650px" : undefined} Opacity={Opacity}>
                        <TitleCard>Cotisation</TitleCard>
                        <BlackText style={{ marginBottom: "30px", textAlign: "justify" }}>
                            Le paiement de la cotisation (<span style={{ color: "#096a09" }}>{props.lydia_cotiz}€</span>) s&apos;effectue en utilisant Lydia. Il vous sera proposé d&apos;utiliser votre compte Lydia pour régler votre cotisation. Si vous n&apos;êtes pas titulaire d&apos;un compte Lydia, il vous sera possible de réaliser le paiement en utilisant votre carte bancaire.
                            <br /><br />
                            En cas de problème lors du paiement, n&apos;hésitez pas à nous en informer à  <StyledLink color="#096a09" href="mailto:contact@amnet.fr">contact@amnet.fr</StyledLink>
                        </BlackText>
                        <GreenButton fontSize={minWidth1000 ? undefined : "16px"} width={minWidth1000 ? "80%" : "100%"}>Cliquez pour procéder au paiement</GreenButton>
                    </StyledModal>
                </>
            }
        </>
    )
}