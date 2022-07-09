import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { GreenButton } from "../../Button/Buttons";
import { ResponsiveRow, Row } from "../../Container/style";
import FileUploader from "../../Input/FileUploader";
import { StyledInputLabel, StyledInput } from "../../Input/style";
import useMediaQuery from "../../MediaQueries/MediaQuery";
import { ErrorP, StyledLink } from "../../Text/style";
import MacAddressVerification from "../../Utils/macaddress";
import { TitleCard } from "../Cards";
import { StyledDeleteImg } from "../Images/style";
import { ModalLogic } from "./ModalLogic";
import { StyledBackgroundModal, StyledModal } from "./style";

export default function IoTModal(props: { setAccess: Function, userId: Number }) {
    const minWidth1000 = useMediaQuery('(min-width: 1000px)')
    const { Display, Opacity, toggle } = ModalLogic()
    const [form, setForm] = useState({
        access_mac: "",
        access_description: "",
        access_proof: null,
        access_user: props.userId
    });

    const [error, setError] = useState({
        access_mac: false,
        access_mac_exist: false,
        access_description: false,
        access_proof: false
    });

    useEffect(() => {
        if (error.access_proof && form.access_proof) {
            const Newerror = { ...error };
            Newerror.access_proof = false;
            setError(Newerror);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
        (document.getElementById("access_proof") as HTMLInputElement).value = null;
        const newForm = { ...form };
        newForm.access_proof = null;
        setForm(newForm);
        const Newerror = { ...error };
        Newerror.access_proof = true;
        setError(Newerror);
    }

    const SendReq = async (e) => {
        e.preventDefault();
        const newError = {
            access_mac: MacAddressVerification(form.access_mac) === "",
            access_description: form.access_description === "",
            access_proof: form.access_proof === null,
            access_mac_exist: false
        };
        setError(newError);

        if (!newError.access_proof && !newError.access_description && !newError.access_mac) {
            await axios.post(
                'http://localhost:3333/access',
                form,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    }
                })
                .then(async (res: AxiosResponse) => {
                    if (res.status === 200) {
                        const access = await axios.get(`http://localhost:3333/access/user/${props.userId}`);
                        props.setAccess(access.data);
                        toggle()
                    }
                    if(res.status === 409){
                        const newError = { ...error };
                        newError.access_mac_exist = true;
                        setError(newError)
                    }
                })
        }
    }

    return (
        <>
            <GreenButton width="280px" onClick={toggle}>Nouvelle demande</GreenButton>
            {Display &&
                <>
                    <StyledBackgroundModal onClick={toggle} Opacity={Opacity} />
                    <StyledModal width={minWidth1000 ? "900px" : undefined} Opacity={Opacity}>
                        <TitleCard hideLine={!minWidth1000}>Demande d&apos;accès pour un objet connecté</TitleCard>
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
                                    L&apos;adresse physique est invalide
                                </ErrorP>
                            }
                            {error.access_mac_exist &&
                                <ErrorP Fixed={true}>
                                    L&apos;adresse physique est déjà utilisée par un autre appareil
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
                                htmlFor="access_proof"
                            >
                                Photo de l&apos;objet
                            </StyledInputLabel>
                            <ResponsiveRow style={{ alignItems: "center" }}>
                                <FileUploader id="access_proof" setfile={handleFormChange} accept=".jpeg, .jpg, .png, .svg" />
                                {form.access_proof &&
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
                                            href={URL.createObjectURL(form.access_proof)}
                                        >
                                            {form.access_proof["name"]}
                                        </StyledLink>
                                        <StyledDeleteImg onClick={deleteFile} />
                                    </div>
                                }
                            </ResponsiveRow>
                            {error.access_proof &&
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