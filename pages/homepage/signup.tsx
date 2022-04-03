import React, { useEffect, useState } from "react";
import Head from "next/head";
import { CampusGlobalStyle } from "../../components/Background/style";
import { GreenButton } from "../../components/Button/Buttons";
import { TitleCard, HelpSection, Footer } from "../../components/Card/Cards";
import { StyledImg } from "../../components/Card/Images/style";
import RectangleLogo from "../../components/Card/RectangleLogo";
import { StyledCardCampus } from "../../components/Card/style";
import RoundCheckbox from "../../components/Input/RoundCheckbox";
import { StyledInputLabel, StyledInput, StyledSelect } from "../../components/Input/style";
import useMediaQuery from "../../components/MediaQueries/MediaQuery";
import { 
  Row, 
  ResponsiveRow, 
  Col6, 
  Col3, 
  Column 
} from "../../components/Container/style";
import { 
  BlackText, 
  GreenText, 
  StyledLink, 
  BlackP 
} from "../../components/Text/style";


export default function SignUp() {
  const minWidth1000 = useMediaQuery('(min-width:1000px)');
  const [isGadz, setGadz] = useState(false);
  const [isOther, setOther] = useState(false);
  const [acceptRules, setacceptRules] = useState(false);


  const handleValueChange = (elmt) => {
    setGadz(elmt.target.value == "OldPromotion" || elmt.target.value == "ActivePromotion");
    setOther(elmt.target.value == "Other");
    if (elmt.target.value == "Other") elmt.target.value = "NewPromotion"
  }

  const CancelChange = () => {
    setOther(!isOther);
  }

  function handleRadioChange() {
    setacceptRules(!acceptRules);
  }

  useEffect(() => {
    if (isOther) document.getElementById("user_promotion2").focus()
  }, [isOther])

  return (
    <>
      <Head>
        <title>Inscirption &bull; AMNet</title>
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
        <StyledCardCampus width="75%">
          <Row style={{ marginBottom: "20px", marginTop: "10px", justifyContent: "center" }}>
            <RectangleLogo height={"125px"} />
          </Row>

          <TitleCard>Inscription</TitleCard>

          <form method="post">
            <ResponsiveRow style={{ alignItems: "center", marginBottom: "20px" }}>
              <Col6 mobileMarginBottom="20px" paddingRight="10px" style={{ width: "100%" }}>
                <StyledInputLabel htmlFor="user_name">Nom d'utilisateur</StyledInputLabel>
                <StyledInput id="user_name" type="text" />
              </Col6>
              
              <Col6
                paddingLeft="10px" mobileAlign="center"
                style={{
                  justifyContent: "end",
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

              <Col3
                paddingRight="10px"
                paddingLeft="10px"
                mobileMarginBottom="20px"
              >
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
                <StyledSelect
                  id="user_promotion"
                  style={{ display: isOther ? "none" : "inline" }}
                  onChange={handleValueChange}
                  defaultValue="NewPromotion"
                >
                  <option value="OldPromotion">219</option>
                  <option value="ActivePromotion">220</option>
                  <option value="NewPromotion">2021</option>
                  <option value="Other">Autre</option>
                </StyledSelect>
                <div style={{ display: isOther ? "flex" : "none", alignItems: "center" }} >
                  <StyledInput
                    id="user_promotion2"
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
                height: isGadz ? minWidth1000 ? "93px" : "244.6px" : "0px",
                transition: "height 0.3s linear",
                overflowY: "clip"
              }}
            >
              <Col6 paddingRight="10px" mobileMarginBottom="20px">
                <StyledInputLabel htmlFor="user_bucque">Bucque</StyledInputLabel>
                <StyledInput id="user_bucque" type="text" />
              </Col6>

              <Col3
                paddingRight="10px"
                paddingLeft="10px"
                mobileMarginBottom="20px"
              >
                <StyledInputLabel htmlFor="user_fams">Fam's</StyledInputLabel>
                <StyledInput id="user_fams" type="text" />
              </Col3>

              <Col3 paddingLeft="10px">
                <StyledInputLabel htmlFor="user_campus">Tabagn's</StyledInputLabel>
                <StyledSelect id="user_campus">
                  <option value="Li">Birse</option>
                  <option value="An">Boquette</option>
                  <option value="Bo">Bordel's</option>
                  <option value="Ch">Chalon's</option>
                  <option value="Cl">Clun's</option>
                  <option value="KIN">KIN</option>
                  <option value="Pa">P3</option>
                  <option value="Me">Siber's</option>
                </StyledSelect>
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

            <Column style={{ alignItems: "start", marginBottom: "20px" }} >
              <GreenText>Réglementation</GreenText>
              <BlackText style={{ marginTop: "5px", marginBottom: "1.2rem" }}>
                Consultez <StyledLink color="#096a09" target="_blank" href="/static/docs/Statuts_AMNet.pdf">les Statuts de l'association</StyledLink>
                <br />
                Consultez <StyledLink color="#096a09" target="_blank" href="/static/docs/Reglement_Interieur_AMNet.pdf">le Règlement intérieur de l'association</StyledLink>
              </BlackText>
              <BlackP>
                AMNet Birse est une association Loi 1901, vous devez en accepter les statuts et le réglement intérieur. La validation de ce formulaire et le réglement de la cotisation annuelle (35€) vaut pour adhésion à l'association.
              </BlackP>
            </Column>

            <Row style={{ marginBottom: "20px", justifyContent: "center" }}>
              <label
                htmlFor="accept_rules"
                style={{
                  display: "flex",
                  alignItems: minWidth1000 ? "end" : "center",
                  justifyContent: "center"
                }}
              >
                <RoundCheckbox id="accept_rules" checked={acceptRules} onChange={handleRadioChange} />
                <BlackText  mobileAlignTxt="center" style={{ paddingLeft: "10px" }}>
                  Accepter les Statuts et le Réglement interieur
                </BlackText>
              </label>
            </Row>

            <Row style={{ justifyContent: "center" }}>
              <GreenButton>Inscription</GreenButton>
            </Row>
          </form>
        </StyledCardCampus>
      </Row>

      <HelpSection padding="0 5%"/>
      <Footer page="campus" />
    </>
  );
}
