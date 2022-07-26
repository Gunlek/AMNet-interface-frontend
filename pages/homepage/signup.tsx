import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { CampusGlobalStyle } from "../../components/Background/style";
import { GreenButton } from "../../components/Button/Buttons";
import { TitleCard, HelpSection, Footer } from "../../components/Card/Cards";
import { StyledCancelImg } from "../../components/Card/Images/style";
import RectangleLogo from "../../components/Card/RectangleLogo";
import { StyledCardCampus } from "../../components/Card/style";
import RoundCheckbox from "../../components/Input/RoundCheckbox";
import { StyledInputLabel, StyledInput } from "../../components/Input/style";
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
  BlackP,
  ErrorP
} from "../../components/Text/style";
import PasswordInput from "../../components/Input/PasswordInput";
import PhoneInput from "../../components/Input/PhoneInput";
import useForm from "../../components/Input/useForm";
import { useRouter } from "next/router";
import axios, { AxiosResponse } from 'axios';
import getToken from "../../components/Utils/auth-token";

export async function getServerSideProps({ req }) {
  const { access_token } = getToken(req)

  if (access_token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const [active_proms, usins_state, lydia_cotiz] = await Promise.all([
    axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/settings/active_proms`),
    axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/settings/usins_state`),
    axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/settings/lydia_cotiz`)
  ])

  return {
    props: { active_proms: active_proms.data, usins_state: usins_state.data, lydia_cotiz: lydia_cotiz.data }
  }
}

export default function SignUp(props: { active_proms: number, usins_state: boolean, lydia_cotiz: number }) {
  const minWidth1000 = useMediaQuery('(min-width:1000px)');
  const [acceptRules, setacceptRules] = useState({ state: false, error: false });
  const router = useRouter();

  useEffect(() => {
    router.prefetch('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRadioChange = () => {
    setacceptRules({ state: !acceptRules.state, error: acceptRules.state })
  };

  const {
    form,
    isOther,
    promotion,
    errorMessage,
    handleFormChange,
    handleFormErrors,
    handlePasswordChange,
    handleNameChange,
    handlePhoneChange,
    cancelOther,
    blurPassword2,
    blurPhone
  } = useForm(props.active_proms, props.usins_state);

  const createUser = (e) => {
    e.preventDefault();
    blurPhone();
    blurPassword2();

    if (acceptRules && !errorMessage.password && !errorMessage.format_name && !errorMessage.phone) {
      axios.post("/user", form, { validateStatus: () => true })
        .then(async (res: AxiosResponse) => {
          if (res.status == 200) {
            await axios.post(
              '/auth',
              { name: form.user_name, password: form.user_password }
            )

            router.push("/")
          }
          if (res.status === 409) handleFormErrors(res.data['user_name'], res.data['user_email']);
        })
    };

    if (!acceptRules.state) {
      setacceptRules({ state: false, error: true })
    };
  };

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
            <RectangleLogo height="125px" />
          </Row>

          <TitleCard>Inscription</TitleCard>

          <form onSubmit={createUser}>
            <ResponsiveRow style={{ alignItems: "center", marginBottom: "20px" }}>
              <Col6
                mobileMarginBottom="20px"
                paddingRight="10px"
                style={{
                  width: "100%",
                  position: "relative"
                }}
              >
                <StyledInputLabel htmlFor="user_name">Nom d&apos;utilisateur</StyledInputLabel>
                <StyledInput onChange={handleNameChange} id="user_name" type="text" required />
                {errorMessage.name}
                {errorMessage.format_name}
              </Col6>

              <Col6
                paddingLeft="10px" mobileAlign="center"
                style={{
                  justifyContent: "end",
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
                <StyledInput onChange={handleFormChange} id="user_firstname" type="text" required />
              </Col3>

              <Col3
                paddingRight="10px"
                paddingLeft="10px"
                mobileMarginBottom="20px"
              >
                <StyledInputLabel htmlFor="user_lastname">Nom</StyledInputLabel>
                <StyledInput onChange={handleFormChange} id="user_lastname" type="text" required />
              </Col3>

              <Col6 paddingLeft="10px" style={{ position: "relative" }}>
                <StyledInputLabel htmlFor="user_email">Adresse e-mail</StyledInputLabel>
                <StyledInput onChange={handleFormChange} id="user_email" type="email" required />
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
                <StyledInputLabel htmlFor={isOther ? "user_proms2" : "user_proms"}>Promotion</StyledInputLabel>
                {isOther ?
                  <div style={{ display: "flex", alignItems: "center" }} >
                    <StyledInput
                      id="user_proms2"
                      type="text"
                      onChange={handleFormChange}
                      required
                    />
                    <StyledCancelImg onClick={cancelOther} />
                  </div>
                  :
                  <StyledInput
                    id="user_proms"
                    as="select"
                    onChange={handleFormChange}
                    defaultValue={promotion.new}
                  >
                    <option value={promotion.old}>{promotion.old}</option>
                    <option value={promotion.active}>{promotion.active}</option>
                    <option value={promotion.new}>{promotion.new}</option>
                    <option value="Other">Autre</option>
                  </StyledInput>
                }
              </Col6>
            </ResponsiveRow>

            <ResponsiveRow
              style={{
                height: form.user_is_gadz ? minWidth1000 ? "93px" : "244.6px" : "0px",
                transition: "height 0.3s linear",
                overflowY: "clip",
              }}
              mobileMarginBottom={form.user_is_gadz ? "20px" : undefined}
            >
              <Col6 paddingRight="10px" mobileMarginBottom="20px">
                <StyledInputLabel htmlFor="user_bucque">Bucque</StyledInputLabel>
                <StyledInput onChange={handleFormChange} id="user_bucque" type="text" />
              </Col6>

              <Col3
                paddingRight="10px"
                paddingLeft="10px"
                mobileMarginBottom="20px"
              >
                <StyledInputLabel htmlFor="user_fams">Fam&apos;s</StyledInputLabel>
                <StyledInput onChange={handleFormChange} id="user_fams" type="text" />
              </Col3>

              <Col3 paddingLeft="10px">
                <StyledInputLabel htmlFor="user_campus">Tabagn&apos;s</StyledInputLabel>
                <StyledInput onChange={handleFormChange} id="user_campus" as="select" defaultValue="Li">
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
                <PasswordInput onChange={handlePasswordChange} id="user_password" />
              </Col6>

              <Col6 paddingLeft="10px">
                <StyledInputLabel htmlFor="user_password2">Confirmez votre Mot de passe</StyledInputLabel>
                <PasswordInput onChange={handlePasswordChange} onBlur={blurPassword2} id="user_password2" />
              </Col6>
            </ResponsiveRow>
            {errorMessage.password}

            <Column style={{ alignItems: "start", marginBottom: "20px", marginTop: "20px" }} >
              <GreenText>Réglementation</GreenText>
              <BlackText style={{ marginTop: "5px", marginBottom: "1.2rem" }}>
                Consultez <StyledLink color="#096a09" target="_blank" href={`${process.env.NEXT_PUBLIC_API_HOST}/Statuts-AMNet.pdf`}>les Statuts de l&apos;association</StyledLink>
                <br />
                Consultez <StyledLink color="#096a09" target="_blank" href={`${process.env.NEXT_PUBLIC_API_HOST}/RI-AMNet.pdf`}>le Règlement intérieur de l&apos;association</StyledLink>
              </BlackText>
              <BlackP>
                AMNet Birse est une association Loi 1901, vous devez en accepter les statuts et le réglement intérieur. La validation de ce formulaire et le réglement de la cotisation annuelle ({props.lydia_cotiz}€) valent pour adhésion à l&apos;association.
              </BlackP>
            </Column>

            <Row style={{ justifyContent: "center" }}>
              <label
                htmlFor="accept_rules"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <RoundCheckbox id="accept_rules" checked={acceptRules.state} onChange={handleRadioChange} />
                <BlackText mobileAlignTxt="center" style={{ paddingLeft: "10px", userSelect: "none" }}>
                  Accepter les Statuts et le Réglement interieur
                </BlackText>
              </label>
            </Row>

            {acceptRules.error &&
              <ErrorP>
                Vous devez les accepter pour vous inscrire !
              </ErrorP>
            }

            <Row style={{ justifyContent: "center", marginTop: "20px" }}>
              <GreenButton type="submit">Inscription</GreenButton>
            </Row>
          </form>
        </StyledCardCampus>
      </Row>

      <HelpSection padding="0 5%" />
      <Footer page="campus" />
    </>
  );
}