import { GreenButton } from "../../Button/Buttons"
import useMediaQuery from "../../MediaQueries/MediaQuery"
import { TitleCard } from "../Cards"
import ModalLogic from "./ModalLogic"
import { StyledBackgroundModal, StyledModal } from "./style"
import Image from 'next/image'
import RectangleLogo from "../RectangleLogo"
import { ErrorP, StyledLink } from "../../Text/style"
import { Row } from "../../Container/style"
import DOMPurify from 'isomorphic-dompurify';
import axios, { AxiosResponse } from "axios"
import { useState } from "react"

export default function MailModal(props: { html: any, subject: string, recipients: any, setHTML: any }) {
    const minWidth1000 = useMediaQuery('(min-width: 1000px)');
    const { Display, Opacity, toggle } = ModalLogic();
    const [send, setSend] = useState(false)
    const html = DOMPurify.sanitize(props.html);
    const noRecipients = !(
        (props.recipients.Contribution || props.recipients.NoContribution) &&
        (
            props.recipients.OldPromotion ||
            props.recipients.ActivePromotion ||
            props.recipients.NewPromotion ||
            props.recipients.Other
        )
    );

    const sendMail = async (e) => {
        e.preventDefault();
        await axios.post(
            `/mail/info`,
            {
                subject: props.subject,
                content: html,
                recipients: props.recipients
            }
        )
            .then((res: AxiosResponse) => {
                if (res.status == 200) { setSend(true); props.setHTML(""); }
            });
    }

    return (
        <>
            <GreenButton mobileWidth="100%" onClick={toggle}>Pré-visualiser le Mail</GreenButton>
            {Display &&
                <>
                    <StyledBackgroundModal onClick={(e) => { toggle(e); setSend(false); }} Opacity={Opacity} />
                    <StyledModal
                        width={minWidth1000 ? "800px" : undefined}
                        Opacity={Opacity}
                        style={{ maxHeight: "90vh" }}
                    >
                        {send ?
                            <>
                                Le Mail d&apos;information pour les utilisateurs a été envoyé <br />
                                Tu vas en recevoir une copie du mail sur ton adresse de boul&apos;s
                            </>
                            :
                            <>
                                <TitleCard>Pré-visualisation du Mail</TitleCard>
                                <div
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        overflow: "auto",
                                        borderRadius: "20px",
                                        marginBottom: "30px",
                                        background: "#E8EFEA ",
                                        paddingBottom: "20px"
                                    }}
                                >
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}>
                                        <Image
                                            width={600}
                                            height={77}
                                            src="/static/images/template/info.png"
                                            alt="template info"
                                            layout="fixed"
                                        />

                                        <div
                                            style={{
                                                background: "url(/static/images/template/body.png)",
                                                backgroundSize: "contain",
                                                width: "600px",
                                                padding: "0 40px",
                                            }}
                                        >
                                            <div
                                                dangerouslySetInnerHTML={{ __html: html || "" }}
                                                style={{
                                                    width: "100%",
                                                    padding: "15px 30px",
                                                    fontSize: "18px"
                                                }}
                                            />

                                            <div style={{ textAlign: "center" }}>
                                                Besoin d&apos;assistance ?{" "}
                                                <StyledLink
                                                    color="#096A09"
                                                    href="mailto:contact@amnet.fr"
                                                >
                                                    contact@amnet.fr
                                                </StyledLink>
                                            </div>
                                        </div>

                                        <Image
                                            width={600}
                                            height={50}
                                            alt="template bottom"
                                            src="/static/images/template/bottom.png"
                                            layout="fixed"
                                        />

                                        <RectangleLogo />

                                        <div style={{ fontSize: "12px", marginTop: "10px" }}>
                                            Pour vous désabonner{" "}
                                            <StyledLink
                                                color="#096A09"
                                                href="/homepage/unsubscribe"
                                                target="_blank"
                                                rel="noreferrer"
                                                style={{ fontSize: "12px" }}
                                            >
                                                Cliquez ici
                                            </StyledLink>
                                        </div>
                                    </div>
                                </div>

                                {noRecipients &&
                                    <ErrorP style={{ marginBottom: "30px" }}>
                                        Tu n&apos;as pas sélectionné assez des casses pour créer une liste de diffusion<br />
                                        C&apos;est au moins une casse dans <strong>Cotisation payée</strong><br />
                                        Et au moins une casse dans <strong>Prom&apos;s</strong>
                                    </ErrorP>
                                }

                                {props.subject == "" &&
                                    <ErrorP style={{ marginBottom: "30px" }}>
                                        <strong>Attention</strong> tu n&apos;as pas rempli l&apos;Objet du mail
                                    </ErrorP>
                                }
                                
                                <Row style={{ justifyContent: "center" }}>
                                    <GreenButton onClick={noRecipients ? undefined : sendMail}>Envoyer le Mail</GreenButton>
                                </Row>
                            </>
                        }
                    </StyledModal>
                </>
            }
        </>
    )
}