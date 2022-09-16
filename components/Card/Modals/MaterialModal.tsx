import axios, { AxiosResponse } from "axios"
import { useState } from "react"
import { GreenButton } from "../../Button/Buttons"
import { Row } from "../../Container/style"
import { StyledInputLabel, StyledInput } from "../../Input/style"
import AutoTextArea from "../../Input/TextArea"
import useMediaQuery from "../../MediaQueries/MediaQuery"
import { TitleCard } from "../Cards"
import { ModalLogic } from "./ModalLogic"
import { StyledBackgroundModal, StyledModal } from "./style"
import dynamic from "next/dynamic";
const ErrorP = dynamic(() => import("../../Text/style").then((mod) => mod.ErrorP));

export default function MaterialModal(props: { setHardware: Function, userId: Number }) {
    const minWidth1000 = useMediaQuery('(min-width: 1000px)');
    const { Display, Opacity, toggle } = ModalLogic();

    const [form, setForm] = useState({
        material_description: "",
        material_reason: "",
        material_user: props.userId
    });

    const [error, setError] = useState({ material_description: false, material_reason: false });

    const handleFormChange = (elmt) => {
        const newForm = { ...form };
        const Newerror = { ...error };
        newForm[elmt.currentTarget.id] = elmt.target.value;
        Newerror[elmt.currentTarget.id] = elmt.target.value === "";
        setForm(newForm);
        setError(Newerror);
    };


    const SendReq = async (e) => {
        e.preventDefault();
        const newError = { material_description: form.material_description === "", material_reason: form.material_reason === "" };
        setError(newError);

        if (!newError.material_description && !newError.material_reason) {
            await axios.post(`/hardware`, form)
                .then(async (res: AxiosResponse) => {
                    if (res.status === 200) {
                        const hardware = await axios.get(`/hardware/user/${props.userId}`);
                        props.setHardware(hardware.data);
                        toggle();
                    }
                })
        }
    };

    return (
        <>
            <GreenButton width="280px" onClick={toggle}>Nouvelle demande</GreenButton>
            {Display &&
                <>
                    <StyledBackgroundModal onClick={toggle} Opacity={Opacity} />
                    <StyledModal width={minWidth1000 ? "800px" : undefined} Opacity={Opacity}>
                        <TitleCard>Demande de matériel</TitleCard>
                        <form onSubmit={SendReq} style={{ width: "100%" }}>
                            <div style={{ marginBottom: "20px", width: "100%", position: "relative" }}>
                                <StyledInputLabel htmlFor="material_description">Description</StyledInputLabel>
                                <StyledInput
                                    border="2px solid rgba(0, 159, 0, 0.15)"
                                    id="material_description"
                                    placeholder="Par exemple: 1 écran"
                                    onChange={handleFormChange}
                                />
                                {error.material_description &&
                                    <ErrorP>
                                        La description est obligatoire
                                    </ErrorP>
                                }
                            </div>

                            <div style={{ marginBottom: "30px", width: "100%", position: "relative" }}>
                                <StyledInputLabel htmlFor="material_reason">Détails</StyledInputLabel>
                                <AutoTextArea
                                    id="material_reason"
                                    placeholder="Par exemple: Je souhaite avoir un second écran pour faire de la CAO"
                                    onChange={handleFormChange}
                                />
                                {error.material_reason &&
                                    <ErrorP>
                                        La raison est obligatoire pour comprendre au mieux votre besoin
                                    </ErrorP>
                                }
                            </div>

                            <Row style={{ justifyContent: "center" }}>
                                <GreenButton type="submit" width="350px">Envoyer la demande</GreenButton>
                            </Row>
                        </form>
                    </StyledModal>
                </>
            }
        </>
    )
}