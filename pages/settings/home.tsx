import React, { useState } from "react";
import Head from "next/head";
import { DefaultBackground } from "../../components/Background/style";
import { GreenButton } from "../../components/Button/Buttons";
import { TitleCard } from "../../components/Card/Cards"
import { StyledCard } from "../../components/Card/style";
import AdminMenu from "../../components/Menu/AdminMenu";
import { StateIntegration, StateInvite } from "../../components/Status/Status";
import AutoTextArea from "../../components/Input/TextArea";
import useMediaQuery from "../../components/MediaQueries/MediaQuery";
import Checkbox from "../../components/Input/Checkbox";
import { StyledInput, StyledLabel, StyledSelect } from "../../components/Input/style";
import { BlackTitle, BlackText, GreenText } from "../../components/Text/style";
import {
  Row,
  Col6,
  DashboardContainer,
  Col3,
  ResponsiveRow,
  CheckboxRow
} from "../../components/Container/style";

export default function Settings() {
  const minWidth1000 = useMediaQuery('(min-width:1000px)');
  
  const [Checked, setChecked] = useState({
    "OldPromotion": false,  
    "ActivePromotion": false, 
    "NewPromotion": false,
    "Other": false,
  });

  const handleCheckboxChange = (elmt) =>{
    const NewChecked = {...Checked};
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
                    <GreenText style={{ marginBottom: "5px" }}>Montant de la cotisation</GreenText>
                    <StyledInput type="number"/>
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                    <GreenText style={{ marginBottom: "5px" }}>Promotion active</GreenText>
                    <StyledInput type="number"/>
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
                <ResponsiveRow style={{ marginTop: "20px", marginBottom: "20px" }}>
                  <Col3 style={{ marginRight: minWidth1000 ? "1%" : "0", marginBottom: minWidth1000 ? "0" : "20px" }}>
                    <GreenText style={{ marginBottom: "5px" }}>Cotisation payée</GreenText>
                    <StyledSelect>
                      <option value="yes" selected>Oui</option>
                      <option value="no">Non</option>
                      <option value="" >Peu importe</option>
                    </StyledSelect>
                  </Col3>

                  <Col3 style={{ margin: minWidth1000 ? "0 1%" : "0", marginBottom: minWidth1000 ? "0" : "20px" }}>
                    <GreenText style={{ marginBottom: "5px" }}>Gadzarts</GreenText>
                    <StyledSelect type="text" >
                      <option value="yes" selected>Oui</option>
                      <option value="no">Non</option>
                      <option value="" >Peu importe</option>
                    </StyledSelect>
                  </Col3>

                  <Col6 style={{ marginLeft: minWidth1000 ? "1%" : "0" }}>
                    <GreenText style={{ marginBottom: "5px" }}>Prom's</GreenText>
                    <CheckboxRow style={{ flex: "1", alignItems: "center" }}>
                      <StyledLabel>
                        <Checkbox id="OldPromotion" checked={Checked["OldPromotion"]} onChange={handleCheckboxChange} />
                        <span style={{ marginLeft: "10px" }}><BlackText>2021</BlackText></span>
                      </StyledLabel>
                      <StyledLabel>
                        <Checkbox id="ActivePromtion" checked={Checked["ActivePromtion"]} onChange={handleCheckboxChange} />
                        <span style={{ marginLeft: "10px" }}><BlackText>220</BlackText></span>
                      </StyledLabel>
                      <StyledLabel>
                        <Checkbox id="NewPromotion" checked={Checked["NewPromotion"]} onChange={handleCheckboxChange} />
                        <span style={{ marginLeft: "10px" }}><BlackText>219</BlackText></span>
                      </StyledLabel>
                      <StyledLabel>
                        <Checkbox id="Other" checked={Checked["Other"]} onChange={handleCheckboxChange} />
                        <span style={{ marginLeft: "10px" }}><BlackText>Autres</BlackText></span>
                      </StyledLabel>
                    </CheckboxRow>
                  </Col6>
                </ResponsiveRow>

                <div style={{ marginBottom: "20px" }}>
                  <GreenText style={{ marginBottom: "5px" }}>Titre du Mail</GreenText>
                  <StyledInput type="text" />
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <GreenText style={{ marginBottom: "5px" }}>Corps du Mail</GreenText>
                  <AutoTextArea />
                </div>

                <Row style={{ marginTop: "-5px", justifyContent: "center" }}>
                  <GreenButton>Envoyer</GreenButton>
                </Row>
              </form>
            </StyledCard>
          </Row>
        </DashboardContainer>
      </DefaultBackground>
    </>
  );
}
