import React, { useEffect, useState } from "react";
import Head from "next/head";
import { CampusGlobalStyle } from "../../components/Background/style";
import { Footer, HelpSection, TitleCard } from "../../components/Card/Cards";
import { Col3, Col4, Col6, Col8, Column, ResponsiveRow, Row } from "../../components/Container/style";
import RectangleLogo from "../../components/Card/RectangleLogo";
import { ButtonLink, GreenButton } from "../../components/Button/Buttons";
import { StyledCardCampus } from "../../components/Card/style";
import { StyledInputLabel, StyledInput, StyledLabel } from "../../components/Input/style";
import { BlackText, StyledLink } from "../../components/Text/style";
import AutoTextArea from "../../components/Input/TextArea";
import { StyledDeleteImg } from "../../components/Card/Images/style";
import FileUploader from "../../components/Input/FileUploader";
import useMediaQuery from "../../components/MediaQueries/MediaQuery";
import Checkbox from "../../components/Input/Checkbox";


export default function BugReport() {
    const [File, setFile] = useState(null);
    const minWidth1000 = useMediaQuery('(min-width:1000px)');
    useEffect(() => {
        const input = document.getElementById("picture") as HTMLInputElement;
        input.value = null;
    }, []);

    function Setfile(id: string, file: any) {
        setFile(file);
    }

    function DeleteFile() {
        const input = document.getElementById("picture") as HTMLInputElement;
        input.value = null;
        setFile(null);
    }
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = (elmt) => {
        setChecked(elmt.target.checked);
    }
    return (
        <>
            <Head>
                <title>Rapport Problème &bull; AMNet</title>
            </Head>
            <CampusGlobalStyle />

            <Row
                mobileWidth="90%"
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "20px 0"
                }}
            >
                <StyledCardCampus width="40%">
                    <Row style={{ marginBottom: "20px", marginTop: "10px", justifyContent: "center" }}>
                        <RectangleLogo height="125px" />
                    </Row>

                    <TitleCard>Rapporter un Problème</TitleCard>
                    <ResponsiveRow style={{ alignItems: "center", marginBottom: "20px" }}>
                        <Col8 mobileMarginBottom="20px" paddingRight="10px">
                            <StyledInputLabel htmlFor="user_name">Nom d&apos;utilisateur</StyledInputLabel>
                            <StyledInput hoverBorder={checked ? "transparent" : undefined} id="user_name" type="text" readOnly={checked} />
                            <BlackText style={{ marginTop: "5px" }} mobileAlignTxt="justify">
                                Entrez votre pseudo si vous avez un compte
                            </BlackText>
                        </Col8>

                        <Col4 style={{ maxWidth: "max-content" }}>
                            <StyledLabel style={{ width: "max-content" }}>
                                <Checkbox checked={checked} onChange={handleCheckboxChange} />
                                <BlackText style={{ marginLeft: "10px" }}>Je n&apos;ai pas de comtpte</BlackText>
                            </StyledLabel>
                        </Col4>
                    </ResponsiveRow>

                    <Column style={{ marginBottom: "20px" }}>
                        <StyledInputLabel htmlFor="bug_type">Problème rencontré avec</StyledInputLabel>
                        <StyledInput id="bug_type" as="select">
                            <option value="Li">Site</option>
                            <option value="An">Wi-Fi</option>
                            <option value="Bo">Filaire</option>
                            <option value="Ch">Minecraft</option>
                        </StyledInput>
                    </Column>

                    <Column style={{ marginBottom: "20px" }}>
                        <StyledInputLabel htmlFor="ubug_description">Détails</StyledInputLabel>
                        <AutoTextArea id="bug_description" />
                        <BlackText style={{ marginTop: "5px", textAlign: "center", fontSize: "1rem" }} mobileAlignTxt="justify">
                            Merci de nous donner un maximum de détails.
                            <br />
                            Que s&apos;est-il produit, à quelle heure le problème a eu lieu, qu&apos;étiez-vous en train de faire exactement, avez-vous remarqué une action qui permettrait de le répéter etc..
                            <br /><br />
                            Vous pouvez également nous forunir un screenshot si cela est nécessaire
                        </BlackText>
                    </Column>

                    <Column
                        width="auto"
                        mobileWidth="100%"
                        mobileJustify="center"
                        align="center"
                        justify="center"
                        style={{ marginBottom: "20px" }}
                    >
                        <FileUploader id="picture" setfile={Setfile} accept=".jpeg, .jpg, .png, .svg" />
                        {File &&
                            <div
                                style={{
                                    marginTop: "10px",
                                    display: "flex",
                                    alignItems: "center"
                                }}
                            >
                                <StyledLink
                                    color="#096a09"
                                    target="_blank"
                                    href={URL.createObjectURL(File)}
                                >
                                    {File["name"]}
                                </StyledLink>
                                <StyledDeleteImg onClick={() => DeleteFile()} src="/static/icons/fail.svg" />
                            </div>
                        }
                    </Column>

                    <Row style={{ justifyContent: "center" }}>
                        <GreenButton>Envoyer</GreenButton>
                    </Row>
                </StyledCardCampus>
            </Row>

            <HelpSection />
            <Footer page="campus" />
        </>
    );
}
