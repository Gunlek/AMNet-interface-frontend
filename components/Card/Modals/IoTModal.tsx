import { useState, useEffect } from "react";
import { GreenButton } from "../../Button/Buttons";
import { ResponsiveRow, Row } from "../../Container/style";
import FileUploader from "../../Input/FileUploader";
import { StyledInputLabel, StyledInput } from "../../Input/style";
import useMediaQuery from "../../MediaQueries/MediaQuery";
import { BlackText, ErrorP, StyledLink } from "../../Text/style";
import MacAddressVerification from "../../Utils/macaddress";
import { TitleCard } from "../Cards";
import { StyledDeleteImg } from "../Images/style";
import { ModalLogic } from "./ModalLogic";
import { StyledBackgroundModal, StyledModal } from "./style";

export default function IoTModal() {
    const minWidth1000 = useMediaQuery('(min-width: 1000px)')
    const { Display, Opacity, toggle } = ModalLogic()
    const [form, setForm] = useState({ access_mac: "", access_description: "", acces_proof: null });

    const [error, setError] = useState({
        access_mac: false,
        access_description: false,
        acces_proof: false
    });

    useEffect(() => {
        if (error.acces_proof && form.acces_proof) {
            const Newerror = { ...error };
            Newerror.acces_proof = false;
            setError(Newerror);
        }
    }, [Display]);

    const handleFormChange = (elmt, id?: string) => {
        const newForm = { ...form };
        if (id) newForm[id] = elmt
        else newForm[elmt.currentTarget.id] = elmt.target.value;
        setForm(newForm);
    }

    const verification = (elmt) => {
        const newError = { ...error };

        if (elmt.currentTarget.id == "access_mac") newError.access_mac = MacAddressVerification(elmt.target.value) === "";
        else newError.access_description = elmt.target.value === "";

        setError(newError)
    }

    const deleteFile = (elmt) => {
        elmt.preventDefault();
        (document.getElementById("acces_proof") as HTMLInputElement).value = null;
        const newForm = { ...form };
        newForm.acces_proof = null;
        setForm(newForm);
        const Newerror = { ...error };
        Newerror.acces_proof = true;
        setError(Newerror);
    }

    const SendReq = (e) => {
        e.preventDefault();
        const newError = {
            access_mac: MacAddressVerification(form.access_mac) === "",
            access_description: form.access_description === "",
            acces_proof: form.acces_proof === null
        };
        setError(newError);
    }

    return (
        <>
            <GreenButton width="280px" onClick={toggle}>Nouvelle demande</GreenButton>
            {Display &&
                <>
                    <StyledBackgroundModal onClick={toggle} Opacity={Opacity} />
                    <StyledModal width={minWidth1000 ? "900px" : undefined} Opacity={Opacity}>
                        <TitleCard hideLine={!minWidth1000}>Demande d'accès pour un objet connecté</TitleCard>
                        <div style={{ width: "100%", position: "relative" }}>
                            <StyledInputLabel htmlFor="access_mac">Adresse Physique</StyledInputLabel>
                            <StyledInput
                                border="2px solid rgba(0, 159, 0, 0.15)"
                                id="access_mac"
                                placeholder="Par exemple: 5E:FF:56:A2:AF:15"
                                onChange={handleFormChange}
                                onBlur={verification}
                            />
                            {error.access_mac &&
                                <ErrorP Fixed={true}>
                                    L'adresse physique est invalide
                                </ErrorP>
                            }
                        </div>

                        <div style={{ marginTop: "20px", width: "100%", position: "relative" }}>
                            <StyledInputLabel htmlFor="access_description">Description</StyledInputLabel>
                            <StyledInput
                                border="2px solid rgba(0, 159, 0, 0.15)"
                                id="access_description"
                                placeholder="Par exemple: Chromecast"
                                onChange={handleFormChange}
                                onBlur={verification}
                            />
                            {error.access_description &&
                                <ErrorP Fixed={true}>
                                    La description est obligatoire
                                </ErrorP>
                            }
                        </div>

                        <div style={{ marginBottom: "30px", width: "100%", marginTop: "20px", position: "relative" }}>
                            <StyledInputLabel
                                style={{ display: "block" }}
                                htmlFor="acces_proof"
                            >
                                Photo de l'objet
                            </StyledInputLabel>
                            <ResponsiveRow style={{ alignItems: "center" }}>
                                <FileUploader id="acces_proof" setfile={handleFormChange} accept=".jpeg, .jpg, .png, .svg" />
                                {form.acces_proof &&
                                    <div
                                        style={{
                                            marginLeft: minWidth1000 && "10px",
                                            marginTop: !minWidth1000 && "10px",
                                            display: "flex",
                                            alignItems: "center"
                                        }}
                                    >
                                        <StyledLink
                                            color="black"
                                            hovercolor="#2E8A21"
                                            target="_blank"
                                            href={URL.createObjectURL(form.acces_proof)}
                                        >
                                            {form.acces_proof["name"]}
                                        </StyledLink>
                                        <StyledDeleteImg onClick={deleteFile} />
                                    </div>
                                }
                            </ResponsiveRow>
                            {error.acces_proof &&
                                <ErrorP Fixed={true}>
                                    La photo est obligatoire
                                </ErrorP>
                            }
                        </div>
                        <Row style={{ justifyContent: "center" }}>
                            <GreenButton onClick={SendReq} width="350px">Envoyer la demande</GreenButton>
                        </Row>
                    </StyledModal>
                </>
            }
        </>
    )
}