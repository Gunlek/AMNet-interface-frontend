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
  Col4,
  StyledMain,
} from "../../components/Container/style";
import Editor from "../../components/Input/Editor/Editor";
import { EditorStyle } from "../../styles/editor";
import MailModal from "../../components/Card/Modals/MailModal";
import axios, { AxiosResponse } from "axios";
import getConfig from "../../components/Utils/req-config";
import getToken from "../../components/Utils/auth-token";
import Modal from "../../components/Card/Modals/Modal";
import SettingsModal from "../../components/Card/Modals/UpdateSettingsModal";
import oldURL from "../../components/Utils/oldURL";
import { motion } from "framer-motion";

export async function getServerSideProps({ req }) {
  const { access_token, userId, } = getToken(req)

  if (access_token) {
    const config = getConfig(access_token)
    const user = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/user/${userId}`, config)

    if (user.data.user_rank === "admin") {
      const [
        access_quantity,
        material_quantity,
        users_quantity,
        lydia_cotiz,
        active_proms,
        usins_state,
        guest_access,
        news_message
      ] = await Promise.all([
        axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/access/quantity`, config),
        axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/hardware/quantity`, config),
        axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/user/quantity`, config),
        axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/settings/lydia_cotiz`, config),
        axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/settings/active_proms`, config),
        axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/settings/usins_state`, config),
        axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/settings/guest_access`, config),
        axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/settings/news_message`, config)
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
          fromIndex: !(/\/admin(\/\w*)?/).test(oldURL(req)),
        }
      }
    }

    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    redirect: {
      destination: '/homepage',
      permanent: false,
    }
  }
}



export default function Admin(props: {
  access_quantity: number,
  material_quantity: number,
  users_quantity: number[],
  lydia_cotiz: number,
  active_proms: number,
  usins_state: boolean,
  guest_access: boolean,
  news_message: string,
  access_token: string,
  fromIndex: boolean
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

  const [show, setShow] = useState(false);
  const [roadToIndex, setRoadToIndex] = useState(false);
  const [roadToHomePage, setRoadToHomePage] = useState(false);

  const variants = {
    hidden: { opacity: 0, x: 100, y: 0 },
    enter: { opacity: 1, x: 0},
    exit: roadToIndex ? { opacity: 0, x: -100 } : roadToHomePage? { opacity: 0, x: 100 }  : null
  };

  const roadIndex = () => {
    setRoadToIndex(true);
  };

  const roadHomePage = () => {
    setRoadToHomePage(true);
  };

  const handleAllCheckboxChange = () => {
    const NewChecked = Checked.AllSelect ?
      {
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

  const [WelcomeMessageEditor, WelcomeMessageHTML] = Editor("2", props.news_message);
  const [MailEditor, MailHTML] = Editor("1");
  const [subject, setSubject] = useState("");
  const [settings, setSettings] = useState({
    lydia_cotiz: props.lydia_cotiz,
    active_proms: props.active_proms,
    usins_state: props.usins_state,
    guest_access: props.guest_access
  });

  const handleSettingsChange = (e) => {
    const newSettings = { ...settings };
    newSettings[e.currentTarget.id] = e.target.value;
    setSettings(newSettings)
  }

  const updateWelcomeMessage = async (e) => {
    e.preventDefault();
    axios.put(`/settings/news_message`, { value: WelcomeMessageHTML })
      .then((res: AxiosResponse) => {
        if (res.status == 200) setShow(!show)
      });
  }

  return (
    <>
      <Modal show={show} style={{ width: "450px" }}>Le Message d&apos;actualité a été mis à jour</Modal>
      <EditorStyle />
      <Head>
        <title>Administration &bull; AMNet</title>
      </Head>

      <StyledMain variants={props.fromIndex || roadToIndex ? variants : undefined}>
        <AdminMenu page="admin" setTranstion={roadIndex} setHomeTransition={roadHomePage} />

        <DashboardContainer initial={props.fromIndex ? "false" : undefined} exit={variants.exit ? "false" : undefined}>

          <Row margin="1% 0" mobileMargin="20px 0" mobileJustify="center">
            <BlackTitle>Espace d&apos;administration</BlackTitle>
          </Row>

          <ResponsiveRow marginBottom="2%" mobileMarginBottom="30px">
            <Col6 paddingRight="1%" mobileMarginBottom="30px">
              <StyledCard style={{ flex: "1" }}>
                <TitleCard>Etat des demandes</TitleCard>
                <BlackText>
                  Nombre d&apos;utilisateurs: {props.users_quantity[0]} <br />
                  Nombre d&apos;utilisateurs ayant payé la cotiz&apos;: {props.users_quantity[1]} <br />
                  <br /><br />
                  Demandes d&apos;accès internet: {props.access_quantity}<br />
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
                    <StateInvite state={props.guest_access} onChange={handleSettingsChange} />
                  </Col6>
                </Row>

                <Row style={{ marginBottom: "20px" }}>
                  <Col6>
                    <GreenText style={{ marginBottom: "5px" }}>Usinage</GreenText>
                  </Col6>
                  <Col6 style={{ alignItems: "end" }}>
                    <StateIntegration state={props.usins_state} onChange={handleSettingsChange} />
                  </Col6>
                </Row>

                <div style={{ marginBottom: "20px" }}>
                  <StyledInputLabel htmlFor="lydia_cotiz">Montant de la cotisation</StyledInputLabel>
                  <StyledInput
                    id="lydia_cotiz"
                    type="number"
                    defaultValue={props.lydia_cotiz}
                    onChange={handleSettingsChange}
                  />
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <StyledInputLabel htmlFor="active_proms">Promotion active</StyledInputLabel>
                  <StyledInput
                    id="active_proms"
                    type="number"
                    defaultValue={props.active_proms}
                    onChange={handleSettingsChange}
                  />
                </div>

                <Row style={{ justifyContent: "center" }}>
                  <SettingsModal
                    settings={settings}
                    original_usins_state={props.usins_state}
                    active_proms={props.active_proms}
                  />
                </Row>
              </StyledCard>
            </Col6>
          </ResponsiveRow>

          <Row marginBottom="2%" mobileMarginBottom="30px">
            <StyledCard style={{ height: "100%" }}>
              <TitleCard>Message d&apos;actualité</TitleCard>
              <div style={{ marginBottom: "20px" }}>
                {WelcomeMessageEditor}
              </div>

              <Row style={{ justifyContent: "center" }}>
                <GreenButton onClick={updateWelcomeMessage} mobileWidth="100%">Mettre à jour</GreenButton>
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
                  <StyledInputLabel htmlFor="object" >Objet</StyledInputLabel>
                  <StyledInput id="object" type="text" onChange={(e) => setSubject(e.target.value)} />
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
                      <GreenText style={{ marginBottom: "5px" }}>Prom&apos;s</GreenText>
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
                <MailModal html={MailHTML} subject={subject} recipients={Checked} />
              </Row>
            </StyledCard>
          </Row>

          <Footer marginTop="0" />
        </DashboardContainer>
      </StyledMain>
    </>
  );
}