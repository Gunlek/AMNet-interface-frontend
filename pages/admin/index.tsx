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
import Editor from "../../components/Input/Editor2";
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorStyle } from "../../styles/editor";
import MailModal from "../../components/Card/Modals/MailModal";
import axios from "axios";

export async function getServerSideProps() {
  const [access_quantity, material_quantity, users_quantity, paid_users_quantity, lydia_cotiz, active_proms, usins_state, guest_access, news_message,] = await Promise.all([
    axios.get(`http://localhost:3333/access/quantity`),
    axios.get(`http://localhost:3333/hardware/quantity`),
    axios.get(`http://localhost:3333/user/quantity`),
    axios.get(`http://localhost:3333/user/quantity/paid`),
    axios.get(`http://localhost:3333/settings/lydia_cotiz`),
    axios.get(`http://localhost:3333/settings/active_proms`),
    axios.get(`http://localhost:3333/settings/usins_state`),
    axios.get(`http://localhost:3333/settings/guest_access`),
    axios.get(`http://localhost:3333/settings/news_message`)
  ])

  return {
    props: {
      access_quantity: access_quantity.data,
      material_quantity: material_quantity.data,
      users_quantity: users_quantity.data,
      lydia_cotiz: lydia_cotiz.data,
      active_proms: active_proms.data,
      usins_state: usins_state.data,
      guest_access: guest_access.data,
      news_message: news_message.data,
      paid_users_quantity: paid_users_quantity.data
    }
  }
}

export default function Settings(props: {
  access_quantity: number,
  material_quantity: number,
  users_quantity: number,
  lydia_cotiz: number,
  active_proms: number,
  usins_state: boolean,
  guest_access: boolean,
  news_message: string,
  paid_users_quantity: number
}) {
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
    const NewChecked = Checked.AllSelect ? {
      "Contribution": false,
      "NoContribution": false,
      "OldPromotion": false,
      "ActivePromotion": false,
      "NewPromotion": false,
      "Other": false,
      "AllSelect": false
    }
      :
      {
        "Contribution": true,
        "NoContribution": true,
        "OldPromotion": true,
        "ActivePromotion": true,
        "NewPromotion": true,
        "Other": true,
        "AllSelect": true
      }

    setChecked(NewChecked)
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
    ) NewChecked.AllSelect = true
    else NewChecked.AllSelect = false

    setChecked(NewChecked)
  };

  const [WelcomeMessageEditor, WelcomeMessageHTML] = Editor(props.news_message);
  const [MailEditor, MailHTML] = Editor();

  const updateSettings = (e) => {
    e.preventDefault();
  }

  const updateWelcomeMessage = (e) => {
    e.preventDefault();
  }

  const sendMail = (e) => {
    e.preventDefault();
  }

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
                Nombre d'utilisateurs: {props.users_quantity} <br />
                Nombre d'utilisateurs ayant payé la cotiz': {props.paid_users_quantity} <br />
                <br /><br />
                Demandes d'accès internet: {props.access_quantity}<br />
                Demandes de matériel: {props.material_quantity}
              </BlackText>
            </StyledCard>
          </Col6>

          <Col6 paddingLeft="1%">
            <StyledCard>
              <TitleCard>Paramètres</TitleCard>
              <Row style={{ marginBottom: "20px" }}>
                <Col6>
                  <GreenText style={{ marginBottom: "5px" }}>Compte Invité</GreenText>
                </Col6>
                <Col6 style={{ alignItems: "end" }}>
                  <StateInvite state={props.guest_access} />
                </Col6>
              </Row>

              <Row style={{ marginBottom: "20px" }}>
                <Col6>
                  <GreenText style={{ marginBottom: "5px" }}>Usinage</GreenText>
                </Col6>
                <Col6 style={{ alignItems: "end" }}>
                  <StateIntegration state={props.usins_state} />
                </Col6>
              </Row>

              <div style={{ marginBottom: "20px" }}>
                <StyledInputLabel htmlFor="AmountContribution">Montant de la cotisation</StyledInputLabel>
                <StyledInput id="AmountContribution" type="number" defaultValue={props.lydia_cotiz} />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <StyledInputLabel htmlFor="SetActivePromotion">Promotion active</StyledInputLabel>
                <StyledInput id="SetActivePromotion" type="number" defaultValue={props.active_proms} />
              </div>

              <Row style={{ justifyContent: "center" }}>
                <GreenButton onClick={updateSettings}>Mettre à jour</GreenButton>
              </Row>
            </StyledCard>
          </Col6>
        </ResponsiveRow>

        <Row marginBottom="2%" mobileMarginBottom="30px">
          <StyledCard style={{ height: "100%" }}>
            <TitleCard>Message d'actualité</TitleCard>
            <div style={{ marginBottom: "20px" }}>
              {WelcomeMessageEditor}
            </div>

            <Row style={{ justifyContent: "center" }}>
              <GreenButton onClick={updateWelcomeMessage}>Mettre à jour</GreenButton>
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
                    <BlackText style={{ marginLeft: "10px" }}>{props.usins_state ? props.active_proms + 1801 : props.active_proms + 1}</BlackText>
                  </StyledLabel>
                  <StyledLabel style={{ width: "fit-content" }}>
                    <Checkbox id="ActivePromotion" checked={Checked["ActivePromotion"]} onChange={handleCheckboxChange} />
                    <BlackText style={{ marginLeft: "10px" }}>{props.active_proms}</BlackText>
                  </StyledLabel>
                  <StyledLabel style={{ width: "fit-content" }}>
                    <Checkbox id="OldPromotion" checked={Checked["OldPromotion"]} onChange={handleCheckboxChange} />
                    <BlackText style={{ marginLeft: "10px" }}>{props.active_proms - 1}</BlackText>
                  </StyledLabel>
                  <StyledLabel style={{ width: "fit-content" }}>
                    <Checkbox id="Other" checked={Checked["Other"]} onChange={handleCheckboxChange} />
                    <BlackText style={{ marginLeft: "10px" }}>Autres</BlackText>
                  </StyledLabel>
                </CheckboxRow>
              </Col6>
            </ResponsiveRow>
            <StyledInputLabel htmlFor="Mail">Corps du Mail</StyledInputLabel>
            <div style={{ marginBottom: "20px" }}>
              {MailEditor}
            </div>

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
