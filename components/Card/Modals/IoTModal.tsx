import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { GreenButton } from "../../Button/Buttons";
import { ResponsiveRow, Row } from "../../Container/style";
import FileUploader from "../../Input/FileUploader";
import { StyledInputLabel, StyledInput } from "../../Input/style";
import useMediaQuery from "../../MediaQueries/MediaQuery";
import { StyledLink } from "../../Text/style";
import MacAddressVerification from "../../Utils/macaddress";
import { TitleCard } from "../Cards";
import { StyledDeleteImg } from "../Images/style";
import { ModalLogic } from "./ModalLogic";
import { validateImage } from "image-validator";
import dynamic from "next/dynamic";
import { DefaultModal } from "./Modal";
const ErrorP = dynamic(() => import("../../Text/style").then((mod) => mod.ErrorP));
const AnimatePresence = dynamic(() => import("framer-motion").then((mod) => mod.AnimatePresence));

export default function IoTModal(props: { setAccess: Function, userId: Number | string }) {
    const minWidth1000 = useMediaQuery('(min-width: 1000px)');
    const { Display, toggle } = ModalLogic();
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
        access_proof: false,
        type_access_proof: false
    });

    useEffect(() => {
        if (error.access_proof && form.access_proof) {
            const Newerror = { ...error };
            Newerror.access_proof = false;
            setError(Newerror);
        }
    }, [error, form]);

    const handleFormChange = async (elmt, id?: string) => {
        const newForm = { ...form };
        if (id) {
            newForm[id] = elmt;
            const Newerror = { ...error };
            Newerror.access_proof = false;
            Newerror.type_access_proof = !(await validateImage(URL.createObjectURL(elmt)));
            setError(Newerror);
        }
        else newForm[elmt.currentTarget.id] = elmt.target.value;
        setForm(newForm);
    };

    const verification = (elmt) => {
        const newError = { ...error };

        if (elmt.currentTarget.id == "access_mac") newError.access_mac = MacAddressVerification(elmt.target.value) === "";
        else newError.access_description = elmt.target.value === "";

        setError(newError)
    };

    const deleteFile = (elmt) => {
        elmt.preventDefault();
        (document.getElementById("access_proof") as HTMLInputElement).value = null;
        const newForm = { ...form };
        newForm.access_proof = null;
        setForm(newForm);
        const Newerror = { ...error };
        Newerror.access_proof = true;
        Newerror.type_access_proof = false;
        setError(Newerror);
    };

    const SendReq = async (e) => {
        e.preventDefault();
        const newError = {
            access_mac: MacAddressVerification(form.access_mac) === "",
            access_description: form.access_description === "",
            access_proof: form.access_proof === null,
            access_mac_exist: false,
            type_access_proof: error.type_access_proof
        };
        setError(newError);

        if (!newError.access_proof && !newError.access_description && !newError.access_mac && !error.type_access_proof) {
            const config = { headers: { 'Content-Type': 'multipart/form-data' } };

            axios.post(`/access`, form, config)
                .then(async (res: AxiosResponse) => {
                    if (res.status === 200) {
                        const access = await axios.get(`/access/user/${props.userId}`);
                        props.setAccess(access.data);
                        toggle();
                    }
                    if (res.status === 409) {
                        const newError = { ...error };
                        newError.access_mac_exist = true;
                        setError(newError);
                    }
                });
        }
    };

    return (
        <>
            <GreenButton width="280px" onClick={toggle}>Nouvelle demande</GreenButton>
            <DefaultModal
                style={{ width: "900px" }}
                toggle={toggle}
                Display={Display}
            >
                <TitleCard hideLine={!minWidth1000}>Demande d&apos;accès pour un objet connecté</TitleCard>
                <form onSubmit={SendReq} style={{ width: "100%" }}>
                    <div style={{ width: "100%", position: "relative" }}>
                        <StyledInputLabel htmlFor="access_mac">Adresse Physique</StyledInputLabel>
                        <StyledInput
                            border="2px solid rgba(0, 159, 0, 0.15)"
                            id="access_mac"
                            placeholder="Par exemple: 5E:FF:56:A2:AF:15"
                            onChange={handleFormChange}
                            onBlur={verification}
                            required
                        />
                        <AnimatePresence>
                            {error.access_mac &&
                                <ErrorP key="invalid">
                                    L&apos;adresse physique est invalide
                                </ErrorP>
                            }
                            {error.access_mac_exist &&
                                <ErrorP key="exist">
                                    L&apos;adresse physique est déjà utilisée par un autre appareil
                                </ErrorP>
                            }
                        </AnimatePresence>
                    </div>

                    <div style={{ marginTop: "20px", width: "100%", position: "relative" }}>
                        <StyledInputLabel htmlFor="access_description">Description</StyledInputLabel>
                        <StyledInput
                            border="2px solid rgba(0, 159, 0, 0.15)"
                            id="access_description"
                            placeholder="Par exemple: Chromecast"
                            onChange={handleFormChange}
                            onBlur={verification}
                            required
                        />
                        <AnimatePresence>
                            {error.access_description &&
                                <ErrorP>
                                    La description est obligatoire
                                </ErrorP>
                            }
                        </AnimatePresence>
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
                        <AnimatePresence>
                            {error.access_proof &&
                                <ErrorP key="required">
                                    La photo est obligatoire
                                </ErrorP>
                            }
                            {error.type_access_proof &&
                                <ErrorP key="picture">
                                    Le fichier n&apos;est pas une image
                                </ErrorP>
                            }
                        </AnimatePresence>
                    </div>
                    <Row style={{ justifyContent: "center" }}>
                        <GreenButton type="submit" width="350px">Envoyer la demande</GreenButton>
                    </Row>
                </form>
            </DefaultModal>
        </>
    )
}