import React, { useState } from "react";
import Head from "next/head";
import { DefaultBackground } from "../../components/Background/style";
import { GreenButton } from "../../components/Button/Buttons";
import { Footer, TitleCard } from "../../components/Card/Cards"
import { StyledCard } from "../../components/Card/style";
import AdminMenu from "../../components/Menu/AdminMenu";
import { StateIntegration, StateInvite } from "../../components/Status/Status";
import AutoTextArea from "../../components/Input/TextArea";
import useMediaQuery from "../../components/MediaQueries/MediaQuery";
import Checkbox from "../../components/Input/Checkbox";
import { StyledInput, StyledInputLabel, StyledLabel, StyledSelect } from "../../components/Input/style";
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
  const minWidth1000 = useMediaQuery('(min-width:1000px)');

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
      <DefaultBackground>
        <AdminMenu page="settings" />

        <DashboardContainer>
          <Row style={{ margin: minWidth1000 ? "1% 0" : "4% 0", justifyContent: minWidth1000 ? "start" : "center" }}>
            <BlackTitle>Espace d'administration</BlackTitle>
          </Row>

          <ResponsiveRow style={{ marginBottom: minWidth1000 ? "2%" : "4%" }}>
            <Col6 style={{ marginRight: minWidth1000 ? "1%" : "0", marginBottom: minWidth1000 ? "0" : "4%" }}>
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

            <Col6 style={{ marginLeft: minWidth1000 ? "1%" : "0" }}>
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

          <Row style={{ marginBottom: minWidth1000 ? "2%" : "4%" }}>

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

          <Row style={{ marginBottom: minWidth1000 ? "2%" : "4%" }}>
            <StyledCard>
              <TitleCard>Système de mail</TitleCard>

              <form method="post" style={{ flex: "1" }}>
                <ResponsiveRow
                  style={{
                    marginTop: "20px",
                    marginBottom: "20px",
                    flexDirection: !minWidth1000 && "column-reverse"
                  }}
                >
                  <Col4 style={{ paddingRight: "10px" }}>
                    <StyledInputLabel htmlFor="MailTitle">Titre du Mail</StyledInputLabel>
                    <StyledInput id="MailTitle" type="text" />
                  </Col4>
                  <Col2 style={{ paddingLeft: minWidth1000 ? "10px" : "0", marginBottom: minWidth1000 ? "0" : "20px" }}>
                    <GreenText style={{ marginBottom: "5px" }}>Cotisation payée</GreenText>
                    <CheckboxRow width={minWidth1000 ? "85px" : "125px"} style={{ flex: "1", alignItems: "center" }}>
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

                  <Col6 style={{ marginLeft: minWidth1000 ? "1%" : "0", marginBottom: minWidth1000 ? "0" : "20px" }}>
                    <GreenText style={{ marginBottom: "5px" }}>Prom's</GreenText>
                    <CheckboxRow width={minWidth1000 ? "140px" : "125px"} style={{ flex: "1", alignItems: "center" }}>
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

                <Row style={{ marginTop: "-5px", justifyContent: "center" }}>
                  <GreenButton>Envoyer</GreenButton>
                </Row>
              </form>
            </StyledCard>
          </Row>

          <Footer />
        </DashboardContainer>
      </DefaultBackground>
    </>
  );
}
