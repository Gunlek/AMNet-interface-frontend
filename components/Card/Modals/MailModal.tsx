import { GreenButton } from "../../Button/Buttons"
import useMediaQuery from "../../MediaQueries/MediaQuery"
import { TitleCard } from "../Cards"
import ModalLogic from "./ModalLogic"
import { StyledBackgroundModal, StyledModal } from "./style"

export default function MailModal(props: { html: any }) {
    const minWidth1000 = useMediaQuery('(min-width: 1000px)')
    const { Display, Opacity, toggle } = ModalLogic()

    return (
        <>
            <GreenButton onClick={toggle}>Pré-visualiser le Mail</GreenButton>
            {Display &&
                <>
                    <StyledBackgroundModal onClick={toggle} Opacity={Opacity} />
                    <StyledModal
                        width={minWidth1000 ? "800px" : undefined}
                        Opacity={Opacity}
                        style={{ maxHeight: "90vh" }}
                    >
                        <TitleCard>Pré-visualisation du Mail</TitleCard>
                        <div style={{ width: "100%", borderRadius: "20px", marginBottom: "30px", overflowY: "auto" }}>
                            {Display &&
                                <table style={{ background: "#E8EFEA", border: "none", borderCollapse: "collapse" }} width="100%">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table style={{ background: "#E8EFEA", border: "none", borderCollapse: "collapse", width: "600px", margin: "0 auto" }} width="600px">
                                                    <tbody>
                                                        <tr>
                                                            <td style={{ textAlign: "center", background: "white", padding: "0" }}>
                                                                <img style={{ width: "600px", display: "block", border: "none" }}
                                                                    src="/static/images/template/info.png"
                                                                />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ padding: "0" }}>
                                                                <table
                                                                    style={{
                                                                        background: "url(/static/images/template/body.png)",
                                                                        backgroundSize: "contain",
                                                                        border: "none",
                                                                        borderCollapse: "collapse",
                                                                        width: "600px",
                                                                        backgroundColor: "#E8EFEA",
                                                                        margin: "0 auto"
                                                                    }}
                                                                >
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                <table style={{ width: "533px", margin: "0 auto" }}>
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td>
                                                                                                <div dangerouslySetInnerHTML={{ __html: props.html || "" }} style={{ width: "100%", padding: "0 30px", fontSize: "18px" }}>

                                                                                                </div>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td style={{ textAlign: "center", fontSize: "18px", padding: "0 10px", color: "#096A09" }}>
                                                                                                Besoin d'assistance ? <a
                                                                                                    style={{ textDecoration: "none", color: "#096A09" }}
                                                                                                    href="mailto:contact@amnet.fr">contact@amnet.fr</a>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ textAlign: "center", background: "white", padding: "0" }}>
                                                                <img style={{ width: "600px", display: "block", border: "none" }}
                                                                    src="/static/images/template/bottom.png"
                                                                />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <table style={{ border: "none", borderCollapse: "collapse", width: "600px", margin: "0 auto" }}>
                                                    <tbody>
                                                        <tr style={{ textAlign: "center" }}>
                                                            <td>
                                                                <a target="_blank" href="https://amnet.fr">
                                                                    <img style={{ display: "inline-block", border: "none" }}
                                                                        src="/static/images/template/amnet.png" />
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ fontSize: "10px" }}>&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ textAlign: "center", fontSize: "12px", padding: "0 10px" }} >
                                                                Pour vous désabonner <a href="/homepage/unsubscribe" target="_blank" style={{ textDecoration: "none", color: "#096A09" }}
                                                                >Cliquez ici</a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ fontSize: "10px" }}>&nbsp;</td>
                                        </tr>
                                    </tbody>
                                </table>
                            }
                        </div>
                        <GreenButton>Envoyer le Mail</GreenButton>
                    </StyledModal>
                </>
            }
        </>
    )
}