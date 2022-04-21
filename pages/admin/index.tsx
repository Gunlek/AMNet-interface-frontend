import React, { useState } from "react";
import Head from "next/head";
import { GreenButton } from "../../components/Button/Buttons";
import { Footer, TitleCard } from "../../components/Card/Cards"
import { StyledCard } from "../../components/Card/style";
import AdminMenu from "../../components/Menu/AdminMenu";
import { StateIntegration, StateInvite } from "../../components/Status/Status";
import Checkbox from "../../components/Input/Checkbox";
import { StyledInput, StyledInputLabel, StyledLabel } from "../../components/Input/style";
import { BlackTitle, BlackText, GreenText } from "../../components/Text/style";
import {
  Row,
  Col6,
  DashboardContainer,
  ResponsiveRow,
  CheckboxRow,
  Col2,
  Col4
} from "../../components/Container/style";
import Editor from "../../components/Input/Editor";
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorStyle } from "../../styles/editor";
import MailModal from "../../components/Card/Modals/MailModal";

export default function Settings() {
  const [Checked, setChecked] = useState({
    "Contribution": false,
    "NoContribution": false,
    "OldPromotion": false,
    "ActivePromotion": false,
    "NewPromotion": false,
    "Other": false,
    "AllSelect": false
  });

  const handleAllCheckboxChange = () => {
    if (Checked.AllSelect) {
      const NewChecked = {
        "Contribution": false,
        "NoContribution": false,
        "OldPromotion": false,
        "ActivePromotion": false,
        "NewPromotion": false,
        "Other": false,
        "AllSelect": false
      }
      setChecked(NewChecked)
    }
    else {
      const NewChecked = {
        "Contribution": true,
        "NoContribution": true,
        "OldPromotion": true,
        "ActivePromotion": true,
        "NewPromotion": true,
        "Other": true,
        "AllSelect": true
      }
      setChecked(NewChecked)
    }

  };

  const handleCheckboxChange = (elmt) => {
    const NewChecked = { ...Checked };
    NewChecked[elmt.currentTarget.id] = !NewChecked[elmt.currentTarget.id];
    if (
      NewChecked.ActivePromotion &&
      NewChecked.Contribution &&
      NewChecked.NewPromotion &&
      NewChecked.NoContribution &&
      NewChecked.OldPromotion &&
      NewChecked.Other
    ) {
      NewChecked.AllSelect = true
    }
    else { NewChecked.AllSelect = false }
    setChecked(NewChecked)
  };

  const [WelcomeMessageEditor, WelcomeMessageHTML] = Editor('<p style="text-align:center;"><strong>Bienvenue sur le site de l\'AMNet</strong></p><p style="text-align:center;">Si vous avez un problème avec le portail de connexion voici le <a href="https://amnet.fr" target="_blank">lien</a>&nbsp; <br>Et voici le lien Gadzflix.fr</p>');
  const [MailEditor, MailHTML] = Editor();

  return (
    <>
      <EditorStyle />
      <Head>
        <title>Administration &bull; AMNet</title>
      </Head>
      <AdminMenu page="admin" />

      <DashboardContainer>
        <Row margin="1% 0" mobileMargin="20px 0" mobileJustify="center">
          <BlackTitle>Espace d'administration</BlackTitle>
        </Row>

        <ResponsiveRow marginBottom="2%" mobileMarginBottom="30px">
          <Col6 paddingRight="1%" mobileMarginBottom="30px">
            <StyledCard style={{ flex: "1" }}>
              <TitleCard>Etat des demandes</TitleCard>
              <BlackText>
                Nombre d'utilisateurs: 6 <br />
                Nombre d'utilisateurs ayant payé la cotiz': 3 <br />
                <br /><br />
                Demandes d'accès internet: 1<br />
                Demandes de matériel: 1
              </BlackText>
            </StyledCard>
          </Col6>

          <Col6 paddingLeft="1%">
            <StyledCard>
              <TitleCard>Paramètres</TitleCard>
              <form method="post" style={{ marginTop: "20px", height: "100%" }}>
                <Row style={{ marginBottom: "20px" }}>
                  <Col6>
                    <GreenText style={{ marginBottom: "5px" }}>Compte Invité</GreenText>
                  </Col6>
                  <Col6 style={{ alignItems: "end" }}>
                    <StateInvite state={true} />
                  </Col6>
                </Row>

                <Row style={{ marginBottom: "20px" }}>
                  <Col6>
                    <GreenText style={{ marginBottom: "5px" }}>Usinage</GreenText>
                  </Col6>
                  <Col6 style={{ alignItems: "end" }}>
                    <StateIntegration state={true} />
                  </Col6>
                </Row>

                <div style={{ marginBottom: "20px" }}>
                  <StyledInputLabel htmlFor="AmountContribution">Montant de la cotisation</StyledInputLabel>
                  <StyledInput id="AmountContribution" type="number" />
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <StyledInputLabel htmlFor="SetActivePromotion">Promotion active</StyledInputLabel>
                  <StyledInput id="SetActivePromotion" type="number" />
                </div>

                <Row style={{ justifyContent: "center" }}>
                  <GreenButton>Mettre à jour</GreenButton>
                </Row>
              </form>
            </StyledCard>
          </Col6>
        </ResponsiveRow>

        <Row marginBottom="2%" mobileMarginBottom="30px">
          <StyledCard style={{ height: "100%" }}>
            <TitleCard>Message d'actualité</TitleCard>
            <div style={{ marginBottom: "10px" }}>
              {WelcomeMessageEditor}
            </div>

            <BlackText
              style={{
                textAlign: "center",
                fontSize: "10px",
                marginBottom: "20px"
              }}
            >
              Petite tuysse : appuyer sur SHIFT+ENTREE pour faire un retour à la ligne sans espaces
            </BlackText>

            <Row style={{ justifyContent: "center" }}>
              <GreenButton>Mettre à jour</GreenButton>
            </Row>
          </StyledCard>
        </Row>

        <Row marginBottom="2%" mobileMarginBottom="10px">
          <StyledCard>
            <TitleCard>Système de mail</TitleCard>
            <ResponsiveRow
              direction="column-reverse"
              marginBottom="20px"
              style={{ marginTop: "20px" }}
            >
              <Col4 style={{ paddingRight: "10px" }}>
                <StyledInputLabel htmlFor="object">Objet</StyledInputLabel>
                <StyledInput id="object" type="text" />
              </Col4>
              <Col2 paddingLeft="10px" mobileMarginBottom="30px">
                <GreenText style={{ marginBottom: "5px" }}>Cotisation payée</GreenText>
                <CheckboxRow mobileColWidth="125px" colWidth="85px" style={{ flex: "1", alignItems: "center" }}>
                  <StyledLabel style={{ width: "fit-content" }}>
                    <Checkbox id="Contribution" checked={Checked["Contribution"]} onChange={handleCheckboxChange} />
                    <BlackText style={{ marginLeft: "10px" }}>Oui</BlackText>
                  </StyledLabel>
                  <StyledLabel style={{ width: "fit-content" }}>
                    <Checkbox id="NoContribution" checked={Checked["NoContribution"]} onChange={handleCheckboxChange} />
                    <BlackText style={{ marginLeft: "10px" }}>Non</BlackText>
                  </StyledLabel>
                </CheckboxRow>
              </Col2>

              <Col6 paddingLeft="1%" mobileMarginBottom="30px">
                <Row>
                  <Col6>
                    <GreenText style={{ marginBottom: "5px" }}>Prom's</GreenText>
                  </Col6>
                  <Col6>
                    <StyledLabel style={{ width: "fit-content" }}>
                      <Checkbox id="AllSelect" checked={Checked["AllSelect"]} onChange={handleAllCheckboxChange} />
                      <BlackText style={{ marginLeft: "10px" }}>Tout sélectionner</BlackText>
                    </StyledLabel>
                  </Col6>
                </Row>

                <CheckboxRow colWidth="140px" mobileColWidth="125px" style={{ flex: "1", alignItems: "center" }}>
                  <StyledLabel style={{ width: "fit-content" }}>
                    <Checkbox id="NewPromotion" checked={Checked["NewPromotion"]} onChange={handleCheckboxChange} />
                    <BlackText style={{ marginLeft: "10px" }}>2021</BlackText>
                  </StyledLabel>
                  <StyledLabel style={{ width: "fit-content" }}>
                    <Checkbox id="ActivePromotion" checked={Checked["ActivePromotion"]} onChange={handleCheckboxChange} />
                    <BlackText style={{ marginLeft: "10px" }}>220</BlackText>
                  </StyledLabel>
                  <StyledLabel style={{ width: "fit-content" }}>
                    <Checkbox id="OldPromotion" checked={Checked["OldPromotion"]} onChange={handleCheckboxChange} />
                    <BlackText style={{ marginLeft: "10px" }}>219/Archis</BlackText>
                  </StyledLabel>
                  <StyledLabel style={{ width: "fit-content" }}>
                    <Checkbox id="Other" checked={Checked["Other"]} onChange={handleCheckboxChange} />
                    <BlackText style={{ marginLeft: "10px" }}>Autres</BlackText>
                  </StyledLabel>
                </CheckboxRow>
              </Col6>
            </ResponsiveRow>
            <StyledInputLabel htmlFor="Mail">Corps du Mail</StyledInputLabel>
            <div style={{ marginBottom: "10px" }}>
              {MailEditor}
            </div>

            <BlackText
              style={{
                textAlign: "center",
                fontSize: "10px",
                marginBottom: "20px"
              }}
            >
              Petite tuysse : appuyer sur SHIFT+ENTREE pour faire un retour à la ligne sans espaces
            </BlackText>

            <Row style={{ justifyContent: "center" }}>
              <MailModal html={MailHTML} />
            </Row>
          </StyledCard>
        </Row>

        <Footer marginTop="0" />
      </DashboardContainer>
    </>
  );
}
