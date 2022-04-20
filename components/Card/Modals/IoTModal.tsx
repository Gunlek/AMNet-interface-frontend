import { useState, useEffect } from "react";
import { GreenButton } from "../../Button/Buttons";
import { ResponsiveRow, Row } from "../../Container/style";
import FileUploader from "../../Input/FileUploader";
import { StyledInputLabel, StyledInput } from "../../Input/style";
import useMediaQuery from "../../MediaQueries/MediaQuery";
import { StyledLink } from "../../Text/style";
import { TitleCard } from "../Cards";
import { StyledDeleteImg } from "../Images/style";
import { ModalLogic } from "./ModalLogic";
import { StyledBackgroundModal, StyledModal } from "./style";

export default function IoTModal() {
    const minWidth1000 = useMediaQuery('(min-width: 1000px)')
    const { Display, Opacity, toggle } = ModalLogic()
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
            <GreenButton width="280px" onClick={toggle}>Nouvelle demande</GreenButton>
            <StyledBackgroundModal onClick={toggle} Display={Display} Opacity={Opacity} />
            <StyledModal width={minWidth1000 ? "900px" : undefined} Display={Display} Opacity={Opacity}>
                <TitleCard hideLine={!minWidth1000}>Demande d'accès pour un objet connecté</TitleCard>
                <div style={{ marginBottom: "20px", width: "100%" }}>
                    <StyledInputLabel htmlFor="mac_adress_equipment">Adresse Physique</StyledInputLabel>
                    <StyledInput border="2px solid rgba(0, 159, 0, 0.15)" id="mac_adress_equipment" placeholder="Par exemple: 5E:FF:56:A2:AF:15" />
                </div>
                <div style={{ marginBottom: "20px", width: "100%" }}>
                    <StyledInputLabel htmlFor="description_equipment">Description</StyledInputLabel>
                    <StyledInput border="2px solid rgba(0, 159, 0, 0.15)" id="description_equipment" placeholder="Par exemple: Chromecast" />
                </div>
                <div style={{ marginBottom: "30px", width: "100%" }}>
                    <StyledInputLabel
                        style={{ display: "block" }}
                        htmlFor="picture_equipment"
                    >
                        Photographie de l'objet avec Adresse Physique visible</StyledInputLabel>
                    <ResponsiveRow style={{ alignItems: "center" }}>
                        <FileUploader id="picture_equipment" setfile={Setfile} accept=".jpeg, .jpg, .png, .svg" />
                        {File &&
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
                                    href={URL.createObjectURL(File)}
                                >
                                    {File["name"]}
                                </StyledLink>
                                <StyledDeleteImg onClick={() => DeleteFile()} />
                            </div>
                        }
                    </ResponsiveRow>
                </div>
                <Row style={{ justifyContent: "center" }}>
                    <GreenButton width="350px">Envoyer la demande</GreenButton>
                </Row>
            </StyledModal>
        </>
    )
}