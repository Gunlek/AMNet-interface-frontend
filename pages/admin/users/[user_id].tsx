import React, { useEffect, useState } from "react";
import Head from "next/head";
import { GreenButton, RedButton } from "../../../components/Button/Buttons";
import { Footer } from "../../../components/Card/Cards";
import { StyledCancelImg } from "../../../components/Card/Images/style";
import { DashboardContainer, ResponsiveRow, Col6, Col3, Col, Row } from "../../../components/Container/style";
import { StyledInputLabel, StyledInput } from "../../../components/Input/style";
import { BlackTitle, BlackText, GreenText } from "../../../components/Text/style";
import AdminMenu from "../../../components/Menu/AdminMenu";
import { AdminStateContribution, AdminStateRank } from "../../../components/Status/Status";
import Page404 from "../../404"
import PasswordInput from "../../../components/Input/PasswordInput";
import axios from "axios";

export async function getServerSideProps({ params }) {
    const user = await (await axios.get(`http://localhost:3333/user/${params.user_id}`)).data
    const active_proms = await (await axios.get(`http://localhost:3333/settings/active_proms`)).data
    const usins_state = await (await axios.get(`http://localhost:3333/settings/usins_state`)).data

    return {
        props: { user, active_proms, usins_state }
    }
}

export default function User(props: {
    user: {
        "user_id": number,
        "user_name": string,
        "user_firstname": string,
        "user_lastname": string,
        "user_email": string,
        "user_phone": string,
        "user_bucque": string,
        "user_fams": string,
        "user_campus": string,
        "user_proms": string,
        "user_rank": string,
        "user_is_gadz": number,
        "user_pay_status": number
    },
    active_proms: number,
    usins_state: number
}) {
    if (props.user) {
        const [isGadz, setGadz] = useState(props.user.user_is_gadz === 1);
        const [isOther, setOther] = useState(props.user.user_is_gadz === 0);

        const handleValueChange = (elmt) => {
            setGadz(elmt.target.value == "OldPromotion" || elmt.target.value == "ActivePromotion");
            setOther(elmt.target.value == "Other");
            if (elmt.target.value == "Other") elmt.target.value = "NewPromotion"
        }
        
        const handleValueChange2 = (elmt) => {
            setGadz(elmt.target.value == "Yes");
        }

        const CancelChange = () => {
            setOther(!isOther);
        }

        useEffect(() => {
            if (isOther) document.getElementById("user_promotion2").focus()
        }, [isOther])

        return (
            <>
                <Head>
                    <title>Administration &bull; AMNet</title>
                </Head>
                <AdminMenu />

                <DashboardContainer>
                    <ResponsiveRow margin="1% 0" mobileMargin="20px 0" mobileJustify="center">
                        <Col mobileMarginBottom="20px" style={{ justifyContent: "center", flex: "1" }}>
                            <BlackTitle>Editer le Profil &bull; {props.user.user_name}</BlackTitle>
                        </Col>

                        <Row width="auto">
                            <Col6 style={{ paddingRight: "10px" }}>
                                <StyledInputLabel htmlFor="user_cotisation">Cotisation</StyledInputLabel>
                                <AdminStateContribution id="user_cotisation" state={props.user.user_pay_status == 1} />
                            </Col6>
                            <Col6 style={{ paddingLeft: "10px" }}>
                                <StyledInputLabel htmlFor="user_rank">Rang</StyledInputLabel>
                                <AdminStateRank id="user_rank" state={props.user.user_rank == "admin"} />
                            </Col6>
                        </Row>
                    </ResponsiveRow>

                    <ResponsiveRow style={{ alignItems: "center", marginBottom: "20px" }}>
                        <Col6 mobileMarginBottom="20px" paddingRight="10px" style={{ width: "100%" }}>
                            <StyledInputLabel htmlFor="user_name">Nom d'utilisateur</StyledInputLabel>
                            <StyledInput id="user_name" type="text" defaultValue={props.user.user_name} />
                        </Col6>
                        <Col6
                            paddingLeft="10px" mobileAlign="center"
                            style={{
                                justifyContent: "center",
                                height: "100%"
                            }}
                        >
                            <BlackText mobileAlignTxt="justify">
                                Le nom d'utilisateur ne doit contenir
                                que des lettres, des chiffres ou des espaces.
                            </BlackText>
                        </Col6>
                    </ResponsiveRow>

                    <ResponsiveRow style={{ marginBottom: "20px" }}>
                        <Col3 paddingRight="10px" mobileMarginBottom="20px">
                            <StyledInputLabel htmlFor="user_firstname">Prénom</StyledInputLabel>
                            <StyledInput id="user_firstname" type="text" defaultValue={props.user.user_firstname} />
                        </Col3>
                        <Col3 paddingLeft="10px" paddingRight="10px" mobileMarginBottom="20px">
                            <StyledInputLabel htmlFor="user_lastname">Nom</StyledInputLabel>
                            <StyledInput id="user_lastname" type="text" defaultValue={props.user.user_lastname} />
                        </Col3>
                        <Col6 paddingLeft="10px">
                            <StyledInputLabel htmlFor="user_email">Adresse e-mail</StyledInputLabel>
                            <StyledInput id="user_email" type="email" defaultValue={props.user.user_email} />
                        </Col6>
                    </ResponsiveRow>

                    <ResponsiveRow style={{ marginBottom: "20px" }}>
                        <Col6 paddingRight="10px" mobileMarginBottom="20px">
                            <StyledInputLabel htmlFor="user_phone">Téléphone</StyledInputLabel>
                            <StyledInput id="user_phone" type="tel" defaultValue={props.user.user_phone} />
                        </Col6>
                        <Col3 paddingLeft="10px" paddingRight="10px" mobileMarginBottom="20px">
                            <StyledInputLabel htmlFor={isOther ? "user_promotion2" : "user_promotion"}>Promotion</StyledInputLabel>
                            <StyledInput
                                defaultValue={props.user.user_proms}
                                id="user_promotion"
                                style={{ display: isOther ? "none" : "inline" }}
                                onChange={handleValueChange}
                                as="select"
                            >
                                <option value="OldPromotion">{props.active_proms - 1}</option>
                                <option value="ActivePromotion">{props.active_proms}</option>
                                <option value="NewPromotion">{props.usins_state ? props.active_proms + 1801 : props.active_proms + 1}</option>
                                <option value="Other">Autre</option>
                            </StyledInput>
                            <div style={{ display: isOther ? "flex" : "none", alignItems: "center" }} >
                                <StyledInput
                                    id="user_promotion2"
                                    type="text"
                                    defaultValue={props.user.user_proms}
                                />
                                <StyledCancelImg onClick={CancelChange} />
                            </div>
                        </Col3>
                        <Col3 paddingLeft="10px">
                            <StyledInputLabel htmlFor="user_gadz">Gadz</StyledInputLabel>
                            <StyledInput id="user_gadz" as="select" onChange={handleValueChange2} value={isGadz ? "Yes" : "No"}>
                                <option value="Yes">Oui</option>
                                <option value="No">Non</option>
                            </StyledInput>
                        </Col3>
                    </ResponsiveRow>

                    <ResponsiveRow
                        Height={isGadz ? "93px" : "0px"}
                        MobileHiehgt={isGadz ? "264.6px" : "0px"}
                        style={{
                            transition: "height 0.3s linear",
                            overflowY: "clip",
                        }}
                    >
                        <Col6 paddingRight="10px" mobileMarginBottom="20px">
                            <StyledInputLabel htmlFor="user_bucque">Bucque</StyledInputLabel>
                            <StyledInput id="user_bucque" type="text" defaultValue={props.user.user_bucque} />
                        </Col6>
                        <Col3 paddingRight="10px" paddingLeft="10px" mobileMarginBottom="20px">
                            <StyledInputLabel htmlFor="user_fams">Fam's</StyledInputLabel>
                            <StyledInput id="user_fams" type="text" defaultValue={props.user.user_fams} />
                        </Col3>
                        <Col3 paddingLeft="10px" mobileMarginBottom="20px">
                            <StyledInputLabel htmlFor="user_campus">Tabagn's</StyledInputLabel>
                            <StyledInput id="user_campus" name="tbk" as="select" defaultValue={props.user.user_campus}>
                                <option value="li">Birse</option>
                                <option value="an">Boquette</option>
                                <option value="bo">Bordel's</option>
                                <option value="ch">Chalon's</option>
                                <option value="cl">Clun's</option>
                                <option value="kin">KIN</option>
                                <option value="pa">P3</option>
                                <option value="me">Siber's</option>
                            </StyledInput>
                        </Col3>
                    </ResponsiveRow>

                    <ResponsiveRow style={{ marginBottom: "20px" }}>
                        <Col6 paddingRight="10px" mobileMarginBottom="20px">
                            <StyledInputLabel htmlFor="user_password">Mot de passe</StyledInputLabel>
                            <PasswordInput id="user_password" />
                        </Col6>
                        <Col6 mobileMarginBottom={isGadz ? undefined : "10px"} paddingLeft="10px">
                            <StyledInputLabel htmlFor="user_password2">Confirmez le Mot de passe</StyledInputLabel>
                            <PasswordInput id="user_password2" />
                        </Col6>
                    </ResponsiveRow>

                    <ResponsiveRow
                        marginBottom={isGadz ? "0" : "20px"}
                        mobileMarginBottom="10px"
                        style={{ flex: "1", transition: "margin-bottom 0.3s linear" }}
                    >
                        <Col6 paddingRight="10px"
                            mobileMarginBottom={isGadz ? "30px" : "0"}
                            mobileFlex={isGadz ? undefined : "none !important"}
                            style={{
                                height: isGadz ? "93px" : "0",
                                transition: "height 0.3s linear",
                                overflowY: "clip"
                            }}
                        >
                            <GreenText style={{ marginBottom: "5px" }}>Identifiants gadzariques</GreenText>
                            <StyledInput
                                style={{ border: "2px solid transparent", backgroundColor: "rgba(255, 255, 255, 0.6)" }}
                                readOnly value={props.user.user_bucque + " " + props.user.user_fams + props.user.user_campus + props.user.user_proms}
                                type="text"
                            />
                        </Col6>

                        <ResponsiveRow
                            paddingLeft="10px"
                            align="end"
                            mobileAlign="center"
                            paddingBottom={isGadz ? "20px" : "0"}
                            style={{
                                transition: "padding-bottom 0.3s linear",
                                width: "auto",
                                flex: "6",
                                justifyContent: "space-around"
                            }}
                        >
                            <RedButton width="300px" mobileMarginBottom="25px">Supprimer le profil</RedButton>
                            <GreenButton width="300px">Editer le profil</GreenButton>
                        </ResponsiveRow>
                    </ResponsiveRow>

                    <Footer marginTop="0" />
                </DashboardContainer>
            </>
        );
    }
    else return <Page404 />
}
