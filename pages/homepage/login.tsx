import React, { useEffect, useState } from "react";
import Head from "next/head";
import { CampusGlobalStyle } from "../../components/Background/style";
import { GreenButton, SmallButtonLink } from "../../components/Button/Buttons";
import { TitleCard, HelpSection, Footer } from "../../components/Card/Cards";
import RectangleLogo from "../../components/Card/RectangleLogo";
import { StyledCardCampus } from "../../components/Card/style";
import { ResponsiveRow, Row } from "../../components/Container/style";
import Checkbox from "../../components/Input/Checkbox";
import { StyledInputLabel, StyledInput } from "../../components/Input/style";
import { BlackText } from "../../components/Text/style";
import axios from "axios";
import { useRouter } from "next/router";
import getToken from "../../components/Utils/auth-token";
import { motion } from "framer-motion";
import { variants } from "../../components/Utils/animation-variants";
import oldURL from "../../components/Utils/oldURL";
import CampusBackground from "../../components/Background/CampusBackground";
import dynamic from "next/dynamic";
const ErrorP = dynamic(() => import("../../components/Text/style").then((mod) => mod.ErrorP));
const PasswordInput = dynamic(() => import("../../components/Input/PasswordInput"), {
  loading: () => <StyledInput/>
});
const Modal = dynamic(() => import("../../components/Card/Modals/Modal"));

export async function getServerSideProps({ req, query }) {
  const { access_token } = getToken(req)

  if (access_token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return { props: { modal: query.modal === "true", from: oldURL(req) } }
}

export default function Login(props: { modal: boolean, from: string }) {
  const [form, setForm] = useState({ name: "", password: "", checked: false });
  const [error, setError] = useState(false);
  const [login, setLogin] = useState(false);
  const [variant, setVariant] = useState(variants(
    props.from === "/homepage" ? "left" : "right",
    "left", null, "#E8EFEA"
  ));

  const handleCheckboxChange = (elmt) => {
    const newForm = { ...form };
    newForm.checked = elmt.target.checked;
    setForm(newForm);
  };

  const handleFormChange = (elmt) => {
    const newForm = { ...form };
    newForm[elmt.currentTarget.id] = elmt.target.value;
    setForm(newForm);
  };

  const router = useRouter();

  useEffect(() => {
    if (props.modal) router.prefetch('/homepage/unsubscribe');
    else router.prefetch('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSignIn = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/login', form);

      if (!props.modal) {
        const newVariant = { ...variant };
        newVariant.exit = { opacity: 1, x: 0, backgroundColor: "#E8EFEA" };
        setVariant(newVariant);
        setLogin(true);
      }

      if (props.modal) router.push("/homepage/unsubscribe", null, { scroll: false });
      else router.push("/", null, { scroll: false });

    } catch (err: any) {
      if (err.response.status === 401) setError(true);
    }
  };

  return (
    <>
      <Head>
        <title>Connexion &bull; AMNet</title>
        <meta name="description" content="Connexion AMNet : accédez à votre espace personnel pour gérer votre compte AMNet et vos appareils connectés" />
      </Head>
      <CampusGlobalStyle />
      <CampusBackground />

      <Modal show={props.modal} style={{ width: "425px", textAlign: "justify" }}>
        Vous devez être connecté pour vous désinscrire de la liste de diffusion
      </Modal>

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
              flex: "1",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px 0"
            }}
          >
            <StyledCardCampus width="auto" >
              <Row style={{ marginBottom: "20px", marginTop: "10px", justifyContent: "center" }}>
                <RectangleLogo onClick={() => setVariant(variants(props.from === "/homepage" ? "left" : "right", "right"))} />
              </Row>

              <TitleCard>Connexion</TitleCard>

              <form onSubmit={handleSignIn}>
                <div style={{ marginBottom: "20px" }}>
                  <StyledInputLabel htmlFor="name">Nom d&apos;utilisateur</StyledInputLabel>
                  <StyledInput id="name" type="text" onChange={handleFormChange} required />
                </div>

                <div style={{ marginBottom: "23px", position: "relative" }}>
                  <StyledInputLabel htmlFor="password">Mot de passe</StyledInputLabel>
                  <PasswordInput id="password" onChange={handleFormChange} required />
                  {error &&
                    <ErrorP>
                      Identifiant ou mot de passe invalide
                    </ErrorP>
                  }
                </div>

                <label style={{ display: "flex", alignItems: "Center", marginBottom: "20px" }}>
                  <Checkbox checked={form.checked} onChange={handleCheckboxChange} />
                  <BlackText style={{ marginLeft: "10px" }}>Rester connecté</BlackText>
                </label>

                <Row style={{ justifyContent: "center" }}>
                  <GreenButton width="300px" type="submit">Connexion</GreenButton>
                </Row>
              </form>

              <ResponsiveRow
                mediaWidth="500px"
                style={{
                  justifyContent: "space-around",
                  marginTop: "30px",
                  alignItems: "center"
                }}
              >
                <SmallButtonLink href="/homepage/signup" mobileMarginBottom="30px" left>Inscription</SmallButtonLink>
                <SmallButtonLink width="220px" href="/homepage/lostpassword">Identifiants oubliés</SmallButtonLink>
              </ResponsiveRow>
            </StyledCardCampus>
          </Row>

          <HelpSection padding="0 5%" />
          <Footer page="campus" />
        </motion.div>
      </motion.main>
    </>
  );
}