import axios, { AxiosResponse } from "axios"
import { GreenButton } from "../../Button/Buttons"
import useMediaQuery from "../../MediaQueries/MediaQuery"
import { TitleCard } from "../Cards"
import ModalLogic from "./ModalLogic"
import { StyledBackgroundModal, StyledModal } from "./style"

export default function SettingsModal(props: {
    settings: {
        lydia_cotiz: number,
        active_proms: number,
        usins_state: boolean,
        guest_access: boolean
    },
    original_usins_state: boolean,
    active_proms: number
}) {
    const minWidth1000 = useMediaQuery('(min-width: 1000px)');
    const { Display, Opacity, toggle } = ModalLogic();

    const updateSettings = async (e) => {
        e.preventDefault();

        await Promise.all([
            axios.put(`/settings/lydia_cotiz`, { value: props.settings.lydia_cotiz }),
            axios.put(`/settings/active_proms`, { value: props.settings.active_proms }),
            axios.put(`/settings/usins_state`, { value: props.settings.usins_state }),
            axios.put(`/settings/guest_access`, { value: props.settings.guest_access })
        ]);
    }

    const showModal = !props.settings.usins_state && props.settings.usins_state !== props.original_usins_state;

    return (
        <>
            <GreenButton onClick={showModal ? toggle : (e) => { updateSettings; toggle(e) }}>Mettre à jour</GreenButton>
            {Display &&
                <>
                    <StyledBackgroundModal onClick={toggle} Opacity={Opacity} />
                    <StyledModal width={showModal ? "675px" : "450px"} Opacity={Opacity}>
                        {showModal ?
                            <>
                                <TitleCard hideLine={!minWidth1000}>Modification du statut de l&apos;usinage</TitleCard>
                                <div style={{ marginBottom: "20px", width: "100%" }}>
                                    Tu as modifié le statut de l&apos;usinage en :{" "}
                                    <span style={{ fontWeight: "bold", color: "#096a09" }}>
                                        Fini
                                    </span><br />
                                    Si valides cette modification cela va transformer la Prom&apos;s
                                    <div
                                        style={{
                                            fontWeight: "bold",
                                            color: "#096a09",
                                            fontSize: "1.4rem",
                                            textAlign: "center",
                                            margin: "5px"
                                        }}
                                    >
                                        {props.active_proms + 1801} en {props.active_proms + 1}
                                    </div>
                                    Et update leur statut en Gadz, ils auront donc accès à Gadzflix.
                                </div>

                                <GreenButton onClick={updateSettings}>Mettre à jour</GreenButton>
                            </>
                            :
                            <>Les Paramètres ont été mis à jour</>
                        }

                    </StyledModal>
                </>
            }
        </>
    )
}