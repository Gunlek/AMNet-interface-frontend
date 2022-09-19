import axios, { AxiosResponse } from "axios"
import { useState } from "react"
import { GreenButton } from "../../Button/Buttons"
import useMediaQuery from "../../MediaQueries/MediaQuery"
import { BlackText, StyledLink } from "../../Text/style"
import { TitleCard } from "../Cards"
import { DefaultModal } from "./Modal"
import ModalLogic from "./ModalLogic"

export default function ContributionModal(props: { userId: number }) {
    const minWidth1000 = useMediaQuery('(min-width: 1000px)');
    const { Display, toggle } = ModalLogic();
    const [cotiz, setCotiz] = useState(47);
    axios.get('/settings/lydia_cotiz').then((res: AxiosResponse) => { setCotiz(res.data) });

    const startPayment = (e) => {
        e.preventDefault();
        axios.post(`/lydia/start/${props.userId}`)
            .then((res: AxiosResponse) => {
                window.location.replace(res.data);
            })
    };

    return (
        <>
            <GreenButton width="150px" height="50px" onClick={toggle}>Payer</GreenButton>
            <DefaultModal style={{ width: minWidth1000 ? "650px" : undefined }} toggle={toggle} Display={Display}>
                <TitleCard>Cotisation</TitleCard>
                <BlackText style={{ marginBottom: "30px", textAlign: "justify" }}>
                    Le paiement de la cotisation (<span style={{ color: "#096a09" }}>{cotiz}€</span>) s&apos;effectue en utilisant Lydia. Il vous sera proposé d&apos;utiliser votre compte Lydia pour régler votre cotisation. Si vous n&apos;êtes pas titulaire d&apos;un compte Lydia, il vous sera possible de réaliser le paiement en utilisant votre carte bancaire.
                    <br /><br />
                    En cas de problème lors du paiement, n&apos;hésitez pas à nous en informer à  <StyledLink color="#096a09" href="mailto:contact@amnet.fr">contact@amnet.fr</StyledLink>
                </BlackText>
                <GreenButton
                    fontSize={minWidth1000 ? undefined : "16px"}
                    width={minWidth1000 ? "80%" : "100%"}
                    onClick={startPayment}
                >
                    Cliquez pour procéder au paiement
                </GreenButton>
            </DefaultModal>
        </>
    )
}