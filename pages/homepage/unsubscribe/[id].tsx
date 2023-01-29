import axios from "axios"
import Head from "next/head";
import { useState } from "react"
import CampusBackground from "../../../components/Background/CampusBackground"
import { CampusGlobalStyle } from "../../../components/Background/style"
import { GreenButton } from "../../../components/Button/Buttons"
import { TitleCard, HelpSection, Footer } from "../../../components/Card/Cards"
import Modal from "../../../components/Card/Modals/Modal"
import RectangleLogo from "../../../components/Card/RectangleLogo"
import { StyledCardCampus } from "../../../components/Card/style"
import { Row } from "../../../components/Container/style"
import { BlackText } from "../../../components/Text/style"

export async function getServerSideProps({ params }) {
    const user = await (await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/mail/user/${params.id}`)).data as { user_email: string, user_notification: boolean, id: string };
    
    if (user.user_email) {
        user['id'] = params.id;
        return { props: { user: user } }
    }

    return { notFound: true };
}

export default function Unsubscribe(props: { user: { user_email: string, user_notification: boolean, id: string } }) {
    const [show, setShow] = useState(false);
    const [notification, setNotification] = useState(props.user.user_notification);

    const unsubscrive = async (e) => {
        e.preventDefault();
        await axios.put(`/mail/user/${props.user.id}`)
        setShow(!show);
        setNotification(!notification)
    }

    return (
        <>
            <Head>
                <title>Liste de diffusion &bull; AMNet</title>
            </Head>
            <CampusGlobalStyle flexDirection="column" />
            <CampusBackground />

            <Modal show={show} style={{ width: "500px", textAlign: "justify" }}>
                <BlackText>
                    {notification ?
                        <>
                            Vous avez été <span style={{ color: "#096a09", fontWeight: "bold", display: "contents" }}>ajouté</span> dans  la liste de diffusion <br /><br />
                            Si vous souhaitez vous désabonner vous devez revenir sur cette page
                        </>
                        :
                        <>
                            Vous avez été <span style={{ color: "#096a09", fontWeight: "bold", display: "contents" }}>retiré</span> de la liste de diffusion <br /><br />
                            Si vous souhaitez vous réabonner vous devez revenir sur cette page
                        </>
                    }
                </BlackText>
            </Modal>

            <main>
                <Row
                    mobileWidth="90%"
                    style={{
                        flex: "1",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "20px 0"
                    }}
                >
                    <StyledCardCampus width="715px">
                        <Row style={{ marginBottom: "20px", marginTop: "10px", justifyContent: "center" }}>
                            <RectangleLogo />
                        </Row>

                        <TitleCard>Liste de diffusion</TitleCard>
                        <BlackText style={{ marginBottom: "20px", textAlign: "justify" }}>
                            {notification ?
                                <>
                                    Vous souhaitez <span style={{ color: "#096a09", fontWeight: "bold" }}>retirer</span> l&apos;adresse <span style={{ color: "#096a09" }}>{props.user.user_email}</span> de notre liste de diffusion ?
                                </>
                                :
                                <>
                                    Vous souhaitez <span style={{ color: "#096a09", fontWeight: "bold" }}>ajouter</span> l&apos;adresse <span style={{ color: "#096a09" }}>{props.user.user_email}</span> à notre liste de diffusion ?
                                </>
                            }
                            <br /><br />
                            Nous utilisons uniquement votre adresse e-mail pour vous communiquer des informations sur l&apos;AMNet, comme une maintenance potentielle ou sur l&apos;instabilité du réseau.
                        </BlackText>

                        <Row style={{ justifyContent: "center" }}>
                            <GreenButton onClick={unsubscrive}>{notification ? "Se désabonner" : "Se réabonner"}</GreenButton>
                        </Row>
                    </StyledCardCampus>
                </Row>

                <HelpSection padding="0 5%" />
                <Footer page="campus" />
            </main>
        </>
    );
}
