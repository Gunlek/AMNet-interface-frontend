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
import PhoneInput from "../../components/Input/PhoneInput";
import useForm from "../../components/Input/useForm";
import { useRouter } from "next/router";
import axios, { AxiosResponse } from 'axios';
import getToken from "../../components/Utils/auth-token";
import { AnimatePresence, motion } from "framer-motion";
import { variants } from "../../components/Utils/animation-variants";
import CampusBackground from "../../components/Background/CampusBackground";
import dynamic from "next/dynamic";
const ErrorPNoFixed = dynamic<any>(() => import("../../components/Text/style").then((mod) => mod.ErrorPNoFixed));
const PasswordInput = dynamic(() => import("../../components/Input/PasswordInput"), {
  loading: () => <StyledInput />
});

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
  const [acceptRules, setacceptRules] = useState({ state: false, error: false });
  const router = useRouter();
  const [variant, setVariant] = useState(variants("left", "right"));
  const [login, setLogin] = useState(false);

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
    error,
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

    if (acceptRules.state && !error.user_password && !error.user_name_format && !error.phone) {
      axios.post("/user", form, { validateStatus: () => true })
        .then(async (res: AxiosResponse) => {
          if (res.status == 200) {
            await axios.post(
              '/login',
              { name: form.user_name, password: form.user_password }
            )
            const newVariant = { ...variant };
            newVariant.exit = { opacity: 1, x: 0, backgroundColor: "#E8EFEA" };
            setVariant(newVariant);
            setLogin(true);

            router.push("/", null, { scroll: false })
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
        <meta name="description" content="Inscription AMNet : créez votre espace personnel pour accéder au réseau de la résidence Jacques Pagliero du campus Arts et Métiers de Lille" />
      </Head>

      <CampusGlobalStyle />
      <CampusBackground />

      <motion.main
        variants={variant}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ ease: "linear" }}
      >
        <motion.div
          variants={{ exit: { opacity: 0, x: login ? -100 : 0 } }}
          exit="exit"
          transition={{ ease: "linear" }}
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            alignItems: "center"
          }}
        >
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

                <AnimatePresence initial={false}>
                  {form.user_is_gadz &&
                    <ResponsiveRow
                      as={motion.div}
                      variants={{
                        initial: { height: 0, marginBottom: 0, overflowY: "clip" },
                        animate: { height: "auto", marginBottom: "20px", overflowY: "visible", transition: { overflowY: { delay: 0.3 } } },
                        exit: { height: 0, marginBottom: 0, overflowY: "clip" }
                      }}
                      initial="initial" animate="animate" exit="exit"
                      transition={{ ease: "linear", duration: 0.3 }}
                      layout
                    >
                      <Col6 paddingRight="10px" mobileMarginBottom="20px">
                        <StyledInputLabel htmlFor="user_bucque">Bucque</StyledInputLabel>
                        <StyledInput
                          id="user_bucque"
                          type="text"
                          defaultValue={form.user_bucque}
                          onChange={handleFormChange}
                        />
                      </Col6>
                      <Col3 paddingRight="10px" paddingLeft="10px" mobileMarginBottom="20px">
                        <StyledInputLabel htmlFor="user_fams">Fam&apos;s</StyledInputLabel>
                        <StyledInput
                          id="user_fams"
                          type="text"
                          defaultValue={form.user_fams}
                          onChange={handleFormChange}
                        />
                      </Col3>
                      <Col3 paddingLeft="10px">
                        <StyledInputLabel htmlFor="user_campus">Tabagn&apos;s</StyledInputLabel>
                        <StyledInput
                          id="user_campus"
                          name="tbk"
                          as="select"
                          defaultValue={form.user_campus}
                          onChange={handleFormChange}
                        >
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
                  }
                </AnimatePresence>

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

                <AnimatePresence>
                  {acceptRules.error &&
                    <ErrorPNoFixed
                      as={motion.p}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ ease: "linear", duration: 0.2 }}
                      layout
                    >
                      Vous devez les accepter pour vous inscrire !
                    </ErrorPNoFixed>
                  }
                </AnimatePresence>

                <Row style={{ justifyContent: "center", marginTop: "20px" }}>
                  <GreenButton type="submit">Inscription</GreenButton>
                </Row>
              </form>
            </StyledCardCampus>
          </Row>

          <HelpSection padding="0 5%" />
          <Footer page="campus" />
        </motion.div>
      </motion.main>
    </>
  );
}