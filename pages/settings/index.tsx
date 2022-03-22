import React, { useState } from "react";
import Head from "next/head";
import { GreenButton } from "../../components/Button/Buttons";
import { Footer, TitleCard } from "../../components/Card/Cards"
import { StyledCard } from "../../components/Card/style";
import AdminMenu from "../../components/Menu/AdminMenu";
import { StateIntegration, StateInvite } from "../../components/Status/Status";
import AutoTextArea from "../../components/Input/TextArea";
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

export default function Settings() {
  const [Checked, setChecked] = useState({
    "Contribution": false,
    "NoContribution": false,
    "OldPromotion": false,
    "ActivePromotion": false,
    "NewPromotion": false,
    "Other": false,
  });

  const handleCheckboxChange = (elmt) => {
    const NewChecked = { ...Checked };
    NewChecked[elmt.currentTarget.id] = !NewChecked[elmt.currentTarget.id];
    setChecked(NewChecked)
  }

  return (
    <>
      <Head>
        <title>Administration &bull; AMNet</title>
      </Head>
      <AdminMenu page="settings" />

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

            <form method="post" style={{ marginTop: "20px", flex: "1" }}>
              <AutoTextArea />
              <Row style={{ marginTop: "20px", justifyContent: "center" }}>
                <GreenButton>Mettre à jour</GreenButton>
              </Row>
            </form>
          </StyledCard>
        </Row>

        <Row marginBottom="2%" mobileMarginBottom="10px">
          <StyledCard>
            <TitleCard>Système de mail</TitleCard>

            <form method="post" style={{ flex: "1" }}>
              <ResponsiveRow
                direction="column-reverse" 
                marginBottom="20px"
                style={{ marginTop: "20px" }}
              >
                <Col4 style={{ paddingRight: "10px" }}>
                  <StyledInputLabel htmlFor="MailTitle">Titre du Mail</StyledInputLabel>
                  <StyledInput id="MailTitle" type="text" />
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
                  <GreenText style={{ marginBottom: "5px" }}>Prom's</GreenText>
                  <CheckboxRow colWidth="140px" mobileColWidth="125px" style={{ flex: "1", alignItems: "center" }}>
                    <StyledLabel style={{ width: "fit-content" }}>
                      <Checkbox id="NewPromotion" checked={Checked["NewPromotion"]} onChange={handleCheckboxChange} />
                      <BlackText style={{ marginLeft: "10px" }}>2021</BlackText>
                    </StyledLabel>
                    <StyledLabel style={{ width: "fit-content" }}>
                      <Checkbox id="ActivePromtion" checked={Checked["ActivePromtion"]} onChange={handleCheckboxChange} />
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

              <div style={{ marginBottom: "20px" }}>
                <StyledInputLabel htmlFor="Mail">Corps du Mail</StyledInputLabel>
                <AutoTextArea id="Mail" />
              </div>

              <Row style={{ justifyContent: "center" }}>
                <GreenButton>Envoyer</GreenButton>
              </Row>
            </form>
          </StyledCard>
        </Row>

        <Footer marginTop="0"/>
      </DashboardContainer>
    </>
  );
}
