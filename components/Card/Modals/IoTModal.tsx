import { useState, useEffect } from "react";
import { BodyWithModal } from "../../Background/style";
import { GreenButton } from "../../Button/Buttons";
import { ResponsiveRow, Row } from "../../Container/style";
import FileUploader from "../../Input/FileUploader";
import { StyledInputLabel, StyledInput } from "../../Input/style";
import useMediaQuery from "../../MediaQueries/MediaQuery";
import { StyledLink } from "../../Text/style";
import { TitleCard } from "../Cards";
import { StyledImg } from "../Images/style";
import { ModalLogic } from "./ModalLogic";
import { StyledBackgroundModal, StyledModal } from "./style";

export default function IoTModal() {
    const minWidth1000 = useMediaQuery('(min-width: 1000px)')
    const { reveal, toggle } = ModalLogic();
    const [File, setFile] = useState(null);

    useEffect(() => {
        const input = document.getElementById("picture_equipment") as HTMLInputElement;
        input.value = null;
    }, []);

    function Setfile(id: string, file: any) {
        setFile(file);
    }

    function DeleteFile() {
        const input = document.getElementById("picture_equipment") as HTMLInputElement;
        input.value = null;
        setFile(null);
    }

    return (
        <>
            <BodyWithModal reveal={reveal} />
            <GreenButton width="280px" onClick={toggle}>Nouvelle demande</GreenButton>
            <StyledBackgroundModal onClick={toggle} reveal={reveal} />
            <StyledModal width={minWidth1000 ? "900px" : undefined} reveal={reveal}>
                <TitleCard hideLine={!minWidth1000}>Demande d'accès pour un objet connecté</TitleCard>
                <div style={{ marginBottom: "20px", width: "100%" }}>
                    <StyledInputLabel htmlFor="mac_adress_equipment">Adresse Physique</StyledInputLabel>
                    <StyledInput style={{ boxShadow: "0px 4px 14px rgba(0, 159, 0, 0.15)" }} id="mac_adress_equipment" placeholder="Par exemple: 5E:FF:56:A2:AF:15" />
                </div>
                <div style={{ marginBottom: "20px", width: "100%" }}>
                    <StyledInputLabel htmlFor="description_equipment">Description</StyledInputLabel>
                    <StyledInput style={{ boxShadow: "0px 4px 14px rgba(0, 159, 0, 0.15)" }} id="description_equipment" placeholder="Par exemple: Chromecast" />
                </div>
                <div style={{ marginBottom: "30px", width: "100%" }}>
                    <StyledInputLabel
                        style={{ display: "block" }}
                        htmlFor="picture_equipment"
                    >
                        Photographie de l'objet avec Adresse Physique visible</StyledInputLabel>
                    <ResponsiveRow style={{ alignItems: "center" }}>
                        <FileUploader id="picture_equipment" setfile={Setfile} accept=".jpeg, .jpg, .png, .svg" />
                        <div
                            style={{
                                marginLeft: minWidth1000 && "10px",
                                marginTop: !minWidth1000 && "10px",
                                display: File ? "flex" : "none",
                                alignItems: "center"
                            }}
                        >
                            <StyledLink
                                color="black"
                                hovercolor="#2E8A21"
                                target="_blank"
                                href={File && URL.createObjectURL(File)}
                            >
                                {File && File["name"]}
                            </StyledLink>
                            <StyledImg width="1.2rem" onClick={() => DeleteFile()} src="/static/icons/fail.svg" />
                        </div>
                    </ResponsiveRow>
                </div>
                <Row style={{ justifyContent: "center" }}>
                    <GreenButton width="350px">Envoyer la demande</GreenButton>
                </Row>
            </StyledModal>
        </>
    )
}