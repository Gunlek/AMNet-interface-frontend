import React, { useState } from "react";
import Head from "next/head";
import { DefaultBackground } from "../../components/Background/style";
import { GreenButton } from "../../components/Button/Buttons";
import {
  Col6,
  Col3,
  Column,
  DashboardContainer,
  ResponsiveRow
} from "../../components/Container/style";
import { Footer, HelpSection } from "../../components/Card/Cards"
import { StyledInput, StyledInputLabel, StyledSelect } from "../../components/Input/style";
import UserMenu from "../../components/Menu/UserMenu";
import { StateContribution } from "../../components/Status/Status";
import {
  BlackTitle,
  GreenText,
  BlackText
} from "../../components/Text/style";
import useMediaQuery from "../../components/MediaQueries/MediaQuery";
import { StyledImg } from "../../components/Card/style";


export default function Profil() {
  const minWidth1000 = useMediaQuery('(min-width:1000px)');
  var [isGadz, setGadz] = useState(false);
  var [isOther, setOther] = useState(false);


  const handleValueChange = (elmt) => {
    setGadz(elmt.target.value == "219" || elmt.target.value == "220");
    setOther(elmt.target.value == "other");
  }

  function CancelChange() {
    setOther(!isOther);
  }

  return (
    <>
      <Head>
        <title>Mon Profil &bull; AMNet</title>
      </Head>
      <DefaultBackground>
        <UserMenu page="profil" />

        <DashboardContainer>
          <ResponsiveRow style={{ margin: minWidth1000 ? "1% 0" : "4% 0", justifyContent: minWidth1000 ? "start" : "center" }}>
            <Column style={{ justifyContent: "center" }}>
              <BlackTitle>Editer mon Profil</BlackTitle>
            </Column>

            <Column style={{ flex: "1", alignItems: minWidth1000 ? "end" : "center", justifyContent: "center" }}>
              <StateContribution status="unpaid" />
            </Column>
          </ResponsiveRow>

          <form style={{ width: "100%", flex: "1", display: "flex", flexDirection: "column" }} method="post">
            <ResponsiveRow style={{ alignItems: "center", marginBottom: "20px" }}>
              <Col6 style={{ paddingRight: minWidth1000 ? "10px" : "0px", width: "100%" }}>
                <StyledInputLabel htmlFor="user_name">Nom d'utilisateur</StyledInputLabel>
                <StyledInput id="user_name" type="text" />
              </Col6>
              <Col6
                style={{
                  justifyContent: "end",
                  height: minWidth1000 ? "75px" : "auto",
                  alignItems: minWidth1000 ? "start" : "center",
                  marginTop: minWidth1000 ? "0" : "20px",
                  paddingLeft: minWidth1000 ? "10px" : "0",
                }}
              >
                <BlackText>Votre nom d'utilisateur ne doit contenir
                  que des lettres, des chiffres ou des espaces.
                </BlackText>
              </Col6>
            </ResponsiveRow>

            <ResponsiveRow style={{ marginBottom: "20px" }}>
              <Col3 style={{ paddingRight: minWidth1000 ? "10px" : "0", marginBottom: minWidth1000 ? "0" : "20px" }}>
                <StyledInputLabel htmlFor="user_firstname">Prénom</StyledInputLabel>
                <StyledInput id="user_firstname" type="text" />
              </Col3>
              <Col3
                style={{
                  paddingLeft: minWidth1000 ? "10px" : "0",
                  paddingRight: minWidth1000 ? "10px" : "0",
                  marginBottom: minWidth1000 ? "0" : "20px"
                }}
              >
                <StyledInputLabel htmlFor="user_lastname">Nom</StyledInputLabel>
                <StyledInput id="user_lastname" type="text" />
              </Col3>
              <Col6 style={{ paddingLeft: minWidth1000 ? "10px" : "0" }}>
                <StyledInputLabel htmlFor="user_email">Adresse e-mail</StyledInputLabel>
                <StyledInput id="user_email" type="email" />
              </Col6>
            </ResponsiveRow>

            <ResponsiveRow style={{ marginBottom: "20px" }}>
              <Col6 style={{ paddingRight: minWidth1000 ? "10px" : "0", marginBottom: minWidth1000 ? "0" : "20px" }}>
                <StyledInputLabel htmlFor="user_phone">Téléphone</StyledInputLabel>
                <StyledInput id="user_phone" type="phone" />
              </Col6>
              <Col6 style={{ paddingLeft: minWidth1000 ? "10px" : "0" }}>
                <StyledInputLabel htmlFor="user_promotion">Promotion</StyledInputLabel>
                <StyledSelect id="user_promotion" style={{ display: isOther ? "none" : "inline" }} onChange={handleValueChange}>
                  <option value="219">219</option>
                  <option value="220">220</option>
                  <option value="2021" selected>2021</option>
                  <option value="other">Autre</option>
                </StyledSelect>
                <div style={{ display: isOther ? "flex" : "none", alignItems: "center" }} >
                  <StyledInput
                    id="user_promotion2"
                    ref={PromotionInput => { (PromotionInput && isOther) && PromotionInput.focus() }}
                    type="text"
                  />
                  <StyledImg
                    padding="0"
                    width="35px"
                    marginLeft="20px"
                    shadow="1"
                    onClick={CancelChange}
                    src="/static/icons/cancel.svg"
                  />
                </div>
              </Col6>
            </ResponsiveRow>

            <ResponsiveRow
              style={{
                marginBottom: isGadz ? "20px" : "0",
                height: isGadz ? minWidth1000 ? "73px" : "244.6px" : "0px",
                transition: "0.3s linear",
                overflowY: isGadz ? undefined : "hidden"
              }}
            >
              <Col6 style={{ paddingRight: minWidth1000 ? "10px" : "0", marginBottom: minWidth1000 ? "0" : "20px" }}>
                <StyledInputLabel htmlFor="user_surname">Bucque</StyledInputLabel>
                <StyledInput id="user_surname" type="text" />
              </Col6>
              <Col3
                style={{
                  paddingLeft: minWidth1000 ? "10px" : "0",
                  paddingRight: minWidth1000 ? "10px" : "0",
                  marginBottom: minWidth1000 ? "0" : "20px"
                }}
              >
                <StyledInputLabel htmlFor="user_fams">Fam's</StyledInputLabel>
                <StyledInput id="user_fams" type="text" />
              </Col3>
              <Col3 style={{ paddingLeft: minWidth1000 ? "10px" : "0" }}>
                <StyledInputLabel htmlFor="user_campus">Tabagn's</StyledInputLabel>
                <StyledSelect id="user_campus" name="tbk">
                  <option value="li">Birse</option>
                  <option value="an">Boquette</option>
                  <option value="bo">Bordel's</option>
                  <option value="ch">Chalon's</option>
                  <option value="cl">Clun's</option>
                  <option value="kin">KIN</option>
                  <option value="pa">P3</option>
                  <option value="me">Siber's</option>
                </StyledSelect>
              </Col3>
            </ResponsiveRow>

            <ResponsiveRow style={{ marginBottom: "20px" }}>
              <Col6 style={{ paddingRight: minWidth1000 ? "10px" : "0", marginBottom: minWidth1000 ? "0" : "20px" }}>
                <StyledInputLabel htmlFor="user_password">Mot de passe</StyledInputLabel>
                <StyledInput id="user_password" type="password" />
              </Col6>
              <Col6 style={{ paddingLeft: minWidth1000 ? "10px" : "0" }}>
                <StyledInputLabel htmlFor="user_password2">Confirmez votre Mot de passe</StyledInputLabel>
                <StyledInput id="user_password2" type="password" />
              </Col6>
            </ResponsiveRow>

            <ResponsiveRow style={{ marginBottom: "20px", flex: "1" }}>
              <Col6
                style={{
                  paddingRight: minWidth1000 ? "10px" : "0",
                  marginBottom: (isGadz && !minWidth1000) ? "20px" : "0",
                  height: isGadz ? "73px" : "0",
                  transition: "0.3s linear",
                  overflowY: isGadz ? undefined : "hidden",
                  flex: (isGadz && !minWidth1000) ? undefined : "none",
                }}
              >
                <GreenText style={{ marginBottom: "5px" }}>Identifiants gadzariques</GreenText>
                <StyledInput hoverBorder="transparent" readOnly value="Mac Nhat'sss 47-102Li219" type="text" />
              </Col6>
              <Col6
                style={{
                  alignItems: minWidth1000 ? "end" : "center",
                  paddingLeft: minWidth1000 ? "10px" : "0",
                  justifyContent: "end"
                }}
              >
                <GreenButton>Editer mon profil</GreenButton>
              </Col6>
            </ResponsiveRow>
          </form>

          <HelpSection color="#096A09" />
          <Footer />
        </DashboardContainer>
      </DefaultBackground>
    </>
  );
}
