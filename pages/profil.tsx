import React, { useEffect, useState } from "react";
import Head from "next/head";
import { GreenButton } from "../components/Button/Buttons";
import { HelpSection, Footer } from "../components/Card/Cards";
import { StyledCancelImg } from "../components/Card/Images/style";
import { DashboardContainer, ResponsiveRow, Column, Col6, Col3 } from "../components/Container/style";
import { StyledInputLabel, StyledInput } from "../components/Input/style";
import useMediaQuery from "../components/MediaQueries/MediaQuery";
import UserMenu from "../components/Menu/UserMenu";
import { StateContribution } from "../components/Status/Status";
import { BlackTitle, BlackText, GreenText } from "../components/Text/style";

export default function Profil() {
  const minWidth1000 = useMediaQuery('(min-width:1000px)');
  var [isGadz, setGadz] = useState(false);
  var [isOther, setOther] = useState(false);


  const handleValueChange = (elmt) => {
    setGadz(elmt.target.value == "OldPromotion" || elmt.target.value == "ActivePromotion");
    setOther(elmt.target.value == "Other");
    if (elmt.target.value == "Other") elmt.target.value = "NewPromotion"
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
        <title>Mon Profil &bull; AMNet</title>
      </Head>
      <UserMenu page="profil" />

      <DashboardContainer>
        <ResponsiveRow margin="1% 0" mobileMargin="20px 0" mobileJustify="center">
          <Column mobileMarginBottom="20px" style={{ justifyContent: "center" }}>
            <BlackTitle>Editer mon Profil</BlackTitle>
          </Column>

          <Column align="end" mobileAlign="center" style={{ flex: "1", justifyContent: "center" }}>
            <StateContribution status="unpaid" />
          </Column>
        </ResponsiveRow>

        <form style={{ width: "100%", flex: "1", display: "flex", flexDirection: "column" }} method="post">
          <ResponsiveRow style={{ alignItems: "center", marginBottom: "20px" }}>
            <Col6 mobileMarginBottom="20px" paddingRight="10px" style={{ width: "100%" }}>
              <StyledInputLabel htmlFor="user_name">Nom d'utilisateur</StyledInputLabel>
              <StyledInput id="user_name" type="text" />
            </Col6>
            <Col6
              paddingLeft="10px" mobileAlign="center"
              style={{
                justifyContent: "center",
                height: "100%"
              }}
            >
              <BlackText mobileAlignTxt="justify">
                Votre nom d'utilisateur ne doit contenir
                que des lettres, des chiffres ou des espaces.
              </BlackText>
            </Col6>
          </ResponsiveRow>

          <ResponsiveRow style={{ marginBottom: "20px" }}>
            <Col3 paddingRight="10px" mobileMarginBottom="20px">
              <StyledInputLabel htmlFor="user_firstname">Prénom</StyledInputLabel>
              <StyledInput id="user_firstname" type="text" />
            </Col3>
            <Col3 paddingLeft="10px" paddingRight="10px" mobileMarginBottom="20px">
              <StyledInputLabel htmlFor="user_lastname">Nom</StyledInputLabel>
              <StyledInput id="user_lastname" type="text" />
            </Col3>
            <Col6 paddingLeft="10px">
              <StyledInputLabel htmlFor="user_email">Adresse e-mail</StyledInputLabel>
              <StyledInput id="user_email" type="email" />
            </Col6>
          </ResponsiveRow>

          <ResponsiveRow style={{ marginBottom: "20px" }}>
            <Col6 paddingRight="10px" mobileMarginBottom="20px">
              <StyledInputLabel htmlFor="user_phone">Téléphone</StyledInputLabel>
              <StyledInput id="user_phone" type="tel" />
            </Col6>
            <Col6 paddingLeft="10px">
              <StyledInputLabel htmlFor={isOther ? "user_promotion2" : "user_promotion"}>Promotion</StyledInputLabel>
              <StyledInput
                defaultValue="NewPromotion"
                id="user_promotion"
                style={{ display: isOther ? "none" : "inline" }}
                onChange={handleValueChange}
                as="select"
              >
                <option value="OldPromotion">219</option>
                <option value="ActivePromotion">220</option>
                <option value="NewPromotion">2021</option>
                <option value="Other">Autre</option>
              </StyledInput>
              <div style={{ display: isOther ? "flex" : "none", alignItems: "center" }} >
                <StyledInput
                  id="user_promotion2"
                  type="text"
                />
                <StyledCancelImg onClick={CancelChange} />
              </div>
            </Col6>
          </ResponsiveRow>

          <ResponsiveRow
            mobileMarginBottom={isGadz ? "20px" : undefined}
            style={{
              height: isGadz ? minWidth1000 ? "93px" : "264.6px" : "0px",
              transition: "height 0.3s linear",
              overflowY: "clip",
            }}
          >
            <Col6 paddingRight="10px" mobileMarginBottom="20px">
              <StyledInputLabel htmlFor="user_bucque">Bucque</StyledInputLabel>
              <StyledInput id="user_bucque" type="text" />
            </Col6>
            <Col3 paddingRight="10px" paddingLeft="10px" mobileMarginBottom="20px">
              <StyledInputLabel htmlFor="user_fams">Fam's</StyledInputLabel>
              <StyledInput id="user_fams" type="text" />
            </Col3>
            <Col3 paddingLeft="10px">
              <StyledInputLabel htmlFor="user_campus">Tabagn's</StyledInputLabel>
              <StyledInput id="user_campus" name="tbk" as="select">
                <option value="Li">Birse</option>
                <option value="An">Boquette</option>
                <option value="Bo">Bordel's</option>
                <option value="Ch">Chalon's</option>
                <option value="Cl">Clun's</option>
                <option value="KIN">KIN</option>
                <option value="Pa">P3</option>
                <option value="Me">Siber's</option>
              </StyledInput>
            </Col3>
          </ResponsiveRow>

          <ResponsiveRow style={{ marginBottom: "20px" }}>
            <Col6 paddingRight="10px" mobileMarginBottom="20px">
              <StyledInputLabel htmlFor="user_password">Mot de passe</StyledInputLabel>
              <StyledInput id="user_password" type="password" />
            </Col6>
            <Col6 paddingLeft="10px">
              <StyledInputLabel htmlFor="user_password2">Confirmez votre Mot de passe</StyledInputLabel>
              <StyledInput id="user_password2" type="password" />
            </Col6>
          </ResponsiveRow>

          <ResponsiveRow
            marginBottom={isGadz ? "0" : "20px"}
            mobileMarginBottom={isGadz ? "10px" : "30px"}
            style={{ flex: "1", transition: "margin-bottom 0.3s linear" }}
          >
            <Col6 paddingRight="10px"
              mobileMarginBottom={isGadz ? "20px" : "0"}
              mobileFlex={isGadz ? undefined : "none !important"}
              style={{
                height: isGadz ? "93px" : "0",
                transition: "height 0.3s linear",
                overflowY: "clip",

              }}
            >
              <GreenText style={{ marginBottom: "5px" }}>Identifiants gadzariques</GreenText>
              <StyledInput hoverBorder="transparent" readOnly value="Mac Nhat'sss 47-102Li219" type="text" />
            </Col6>
            <Col6
              paddingLeft="10px"
              align="end"
              mobileAlign="center"
              style={{
                justifyContent: "end",
                paddingBottom: isGadz ? "20px" : "0",
                transition: "padding-bottom 0.3s linear"
              }}
            >
              <GreenButton>Editer mon profil</GreenButton>
            </Col6>
          </ResponsiveRow>
        </form>

        <HelpSection color="#096A09" />
        <Footer />
      </DashboardContainer>
    </>
  );
}
