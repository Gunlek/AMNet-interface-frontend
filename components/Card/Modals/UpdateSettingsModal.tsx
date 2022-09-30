import axios from "axios"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { GreenButton } from "../../Button/Buttons"
import { TitleCard } from "../Cards"
import { DefaultModal } from "./Modal"
import ModalLogic from "./ModalLogic"

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
    const { Display, toggle } = ModalLogic();
    const [message, setMessage] = useState(true);
    const showMessage = message ?
        !props.settings.usins_state && props.settings.usins_state !== props.original_usins_state
        :
        false;

    const divProps = {
        initial: { opacity: 0, height: 89 },
        animate: { opacity: 1, height: "auto" },
        exit: { opacity: 0, height: 89 },
        transition: { ease: "linear" }
    };

    const updateSettings = async (e, modal?: boolean) => {
        e.preventDefault();

        if (!showMessage || modal) {
            Promise.all([
                axios.put(`/settings/lydia_cotiz`, { value: props.settings.lydia_cotiz }),
                axios.put(`/settings/active_proms`, { value: props.settings.active_proms }),
                axios.put(`/settings/guest_access`, { value: props.settings.guest_access }),
                axios.put(`/settings/usins_state`, { value: props.settings.usins_state })
            ]).then(([res1, res2, res3, res4]) => {
                if (res1.status === 200 &&
                    res2.status === 200 &&
                    res3.status === 200 &&
                    res4.status === 200 ) {
                    if(modal) setMessage(false);
                    else toggle(e);
                }
            });
        }
        else toggle(e)

    }
    return (
        <>
            <GreenButton
                mobileWidth="100%"
                onClick={updateSettings}
            >
                Mettre à jour
            </GreenButton>
            <DefaultModal
                style={{ width: "575px", transition: "width 0.3s linear" }}
                toggle={toggle}
                Display={Display}

            >
                <AnimatePresence initial={false} exitBeforeEnter>
                    {showMessage ?
                        <motion.div
                            {...divProps}
                            key="modification"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center"
                            }}
                        >
                            <TitleCard hideLine={true}>Modification du statut de l&apos;usinage</TitleCard>
                            <div style={{ marginBottom: "20px", width: "100%", textAlign: "center" }}>
                                Tu as modifié le statut de l&apos;usinage en :{" "}
                                <span style={{ fontWeight: "bold", color: "#096a09" }}>
                                    Fini
                                </span><br />
                                Si tu valides cette modification cela va transformer
                                <div
                                    style={{
                                        fontWeight: "bold",
                                        color: "#096a09",
                                        fontSize: "1.6rem",
                                        textAlign: "center",
                                        margin: "10px"
                                    }}
                                >
                                    {props.active_proms + 1801} en {props.active_proms + 1}
                                </div>
                                Et update leur statut en Gadz, <br />
                                ils auront donc accès à Gadzflix.
                            </div>

                            <GreenButton
                                onClick={(e) => { updateSettings(e, true) }}>
                                Mettre à jour
                            </GreenButton>
                        </motion.div>
                        :
                        <motion.div {...divProps} key="message">Les Paramètres ont été mis à jour</motion.div>
                    }
                </AnimatePresence>
            </DefaultModal>
        </>
    )
}