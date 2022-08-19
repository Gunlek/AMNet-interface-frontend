import React, { useState } from "react";
import Head from "next/head";
import { GreenButton } from "../components/Button/Buttons";
import { HelpSection, Footer } from "../components/Card/Cards";
import { DashboardContainer, ResponsiveRow, Column, Col6, Col3, StyledMain } from "../components/Container/style";
import { StyledInputLabel, StyledInput } from "../components/Input/style";
import UserMenu from "../components/Menu/UserMenu";
import { StateContribution } from "../components/Status/Status";
import { BlackTitle, BlackText, GreenText } from "../components/Text/style";
import PasswordInput from "../components/Input/PasswordInput";
import axios, { AxiosResponse } from "axios";
import useForm from "../components/Input/useForm";
import PhoneInput from "../components/Input/PhoneInput";
import { user } from "../components/Utils/types";
import getToken from "../components/Utils/auth-token";
import getConfig from "../components/Utils/req-config";
import Modal from "../components/Card/Modals/Modal";
import usePageTransition from "../components/Utils/usePageTransition";

export async function getServerSideProps({ req }) {
  const { access_token, userId, localNetwork } = getToken(req)

  if (access_token) {
    const config = getConfig(access_token);

    const [user, active_proms, usins_state, lydia_cotiz] = await Promise.all([
      axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/user/${userId}`, config),
      axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/settings/active_proms`, config),
      axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/settings/usins_state`, config),
      axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/settings/lydia_cotiz`, config)
    ]);

    return {
      props: {
        user: user.data,
        active_proms: active_proms.data,
        usins_state: usins_state.data,
        lydia_cotiz: lydia_cotiz.data,
        localNetwork: localNetwork
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

export default function Profil(props: {
  user: user,
  active_proms: number,
  usins_state: boolean,
  phone_err?: boolean,
  localNetwork: boolean
}) {
  const {
    form,
    errorMessage,
    handleFormChange,
    handleFormErrors,
    handlePasswordChange,
    handleNameChange,
    handlePhoneChange,
    blurPassword2,
    blurPhone
  } = useForm(props.active_proms, props.usins_state, props.user)
  const [show, setShow] = useState(false);
  const { roadTo, pageTransition, roadToHome } = usePageTransition('admin');
  const editProfil = (elmt) => {
    elmt.preventDefault();
    blurPassword2();
    blurPhone();

    if (!errorMessage.password && !errorMessage.format_name && !errorMessage.phone) {
      axios.put(`/user/${props.user.user_id}`, form)
        .then((res: AxiosResponse) => {
          if (res.status === 409) handleFormErrors(res.data['user_name'], res.data['user_email']);
          if (res.status === 200) setShow(!show)
        })
    }
  }

  return (
    <>
      <Head>
        <title>Mon Profil &bull; AMNet</title>
      </Head>

      <Modal show={show} style={{ width: "350px" }}>
        Votre Profil a été mis à jour
      </Modal>

      <StyledMain variants={pageTransition}>
        <UserMenu
          page="profil"
          user={{
            is_gadz: props.user.user_is_gadz,
            rank: props.user.user_rank,
            pay_status: props.user.user_pay_status
          }}
          localNetwork={props.localNetwork}
          setTransition={roadTo}
          setHomeTransition={roadToHome}
        />

        <DashboardContainer exit={pageTransition.exit ? "false" : undefined}>
          <ResponsiveRow margin="1% 0" mobileMargin="20px 0" mobileJustify="center">
            <Column mobileMarginBottom="20px" style={{ justifyContent: "center" }}>
              <BlackTitle>Editer mon Profil</BlackTitle>
            </Column>

            <Column align="end" mobileAlign="center" style={{ flex: "1", justifyContent: "center" }}>
              <StateContribution
                status={props.user.user_pay_status ? "paid" : "unpaid"}
                userId={props.user.user_id}
              />
            </Column>
          </ResponsiveRow>

          <form style={{ width: "100%", flex: "1", display: "flex", flexDirection: "column" }} onSubmit={editProfil}>
            <ResponsiveRow style={{ alignItems: "center", marginBottom: "20px" }}>
              <Col6 mobileMarginBottom="20px" paddingRight="10px" style={{ width: "100%", position: "relative" }}>
                <StyledInputLabel htmlFor="user_name">Nom d&apos;utilisateur</StyledInputLabel>
                <StyledInput id="user_name" type="text" onChange={handleNameChange} defaultValue={form.user_name} required />
                {errorMessage.name}
                {errorMessage.format_name}
              </Col6>

              <Col6
                paddingLeft="10px" mobileAlign="center"
                style={{
                  justifyContent: "center",
                  height: "100%"
                }}
              >
                <BlackText mobileAlignTxt="justify">
                  Votre nom d&apos;utilisateur ne doit contenir
                  que des lettres, des chiffres ou des espaces.
                </BlackText>
              </Col6>
            </ResponsiveRow>

            <ResponsiveRow style={{ marginBottom: "20px" }}>
              <Col3 paddingRight="10px" mobileMarginBottom="20px">
                <StyledInputLabel htmlFor="user_firstname">Prénom</StyledInputLabel>
                <StyledInput id="user_firstname" type="text" onChange={handleFormChange} defaultValue={form.user_firstname} />
              </Col3>
              <Col3 paddingLeft="10px" paddingRight="10px" mobileMarginBottom="20px">
                <StyledInputLabel htmlFor="user_lastname">Nom</StyledInputLabel>
                <StyledInput id="user_lastname" type="text" onChange={handleFormChange} defaultValue={form.user_lastname} />
              </Col3>
              <Col6 paddingLeft="10px" style={{ position: "relative" }}>
                <StyledInputLabel htmlFor="user_email">Adresse e-mail</StyledInputLabel>
                <StyledInput id="user_email" type="email" onChange={handleFormChange} defaultValue={form.user_email} required />
                {errorMessage.email}
              </Col6>
            </ResponsiveRow>

            <ResponsiveRow style={{ marginBottom: "20px" }}>
              <Col6 paddingRight="10px" mobileMarginBottom="20px" style={{ position: "relative" }}>
                <StyledInputLabel htmlFor="user_phone">Téléphone</StyledInputLabel>
                <PhoneInput value={form.user_phone} onChange={handlePhoneChange} onBlur={blurPhone} />
                {errorMessage.phone}
              </Col6>

              <Col6 paddingLeft="10px">
                <StyledInputLabel htmlFor="user_proms2">Promotion</StyledInputLabel>
                <StyledInput
                  id="user_proms2"
                  type="text"
                  onChange={handleFormChange}
                  defaultValue={form.user_proms}
                  required
                />
              </Col6>
            </ResponsiveRow>

            <ResponsiveRow
              mobileMarginBottom={form.user_is_gadz ? "20px" : undefined}
              Height={form.user_is_gadz ? "93px" : "0px"}
              MobileHeight={form.user_is_gadz ? "244.6px" : "0px"}
              style={{
                transition: "height 0.3s linear",
                overflowY: "clip",
              }}
            >
              <Col6 paddingRight="10px" mobileMarginBottom="20px">
                <StyledInputLabel htmlFor="user_bucque">Bucque</StyledInputLabel>
                <StyledInput id="user_bucque" type="text" onChange={handleFormChange} defaultValue={form.user_bucque} />
              </Col6>
              <Col3 paddingRight="10px" paddingLeft="10px" mobileMarginBottom="20px">
                <StyledInputLabel htmlFor="user_fams">Fam&apos;s</StyledInputLabel>
                <StyledInput id="user_fams" type="text" onChange={handleFormChange} defaultValue={form.user_fams} />
              </Col3>
              <Col3 paddingLeft="10px">
                <StyledInputLabel htmlFor="user_campus">Tabagn&apos;s</StyledInputLabel>
                <StyledInput id="user_campus" name="tbk" as="select" onChange={handleFormChange} defaultValue={form.user_campus}>
                  <option value="Li">Birse</option>
                  <option value="An">Boquette</option>
                  <option value="Bo">Bordel&apos;s</option>
                  <option value="Ch">Chalon&apos;s</option>
                  <option value="Cl">Clun&apos;s</option>
                  <option value="KIN">KIN</option>
                  <option value="Pa">P3</option>
                  <option value="Me">Siber&apos;s</option>
                </StyledInput>
              </Col3>
            </ResponsiveRow>

            <ResponsiveRow>
              <Col6 paddingRight="10px" mobileMarginBottom="20px">
                <StyledInputLabel htmlFor="user_password">Mot de passe</StyledInputLabel>
                <PasswordInput id="user_password" onChange={handlePasswordChange} />
              </Col6>
              <Col6 paddingLeft="10px">
                <StyledInputLabel htmlFor="user_password2">Confirmez votre Mot de passe</StyledInputLabel>
                <PasswordInput id="user_password2" onChange={handlePasswordChange} onBlur={blurPassword2} />
              </Col6>
            </ResponsiveRow>
            {errorMessage.password}

            <ResponsiveRow
              marginBottom="1%"
              mobileMarginBottom="20px"
              style={{ flex: "1", transition: "margin-bottom 0.3s linear", marginTop: "20px" }}
            >
              <Col6 paddingRight="10px"
                mobileMarginBottom={form.user_is_gadz ? "20px" : "0"}
                mobileFlex={form.user_is_gadz ? undefined : "none !important"}
                style={{
                  height: form.user_is_gadz ? "93px" : "0",
                  transition: "height 0.3s linear",
                  overflowY: "clip",
                }}
              >
                <GreenText style={{ marginBottom: "5px" }}>Identifiants gadzariques</GreenText>
                <StyledInput
                  style={{ border: "2px solid transparent", backgroundColor: "rgba(255, 255, 255, 0.6)" }}
                  readOnly
                  value={form.user_bucque + " " + form.user_fams + form.user_campus + form.user_proms}
                  type="text"
                />
              </Col6>
              <Col6
                paddingLeft="10px"
                align="end"
                mobileAlign="center"
                style={{ justifyContent: "end" }}
              >
                <GreenButton type="submit">Sauvegarder mon profil</GreenButton>
              </Col6>
            </ResponsiveRow>
          </form>

          <HelpSection color="#096A09" />
          <Footer />
        </DashboardContainer>
      </StyledMain>
    </>
  );
}