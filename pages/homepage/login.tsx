import React, { useEffect, useState } from "react";
import Head from "next/head";
import { CampusGlobalStyle } from "../../components/Background/style";
import { GreenButton } from "../../components/Button/Buttons";
import { TitleCard, HelpSection, Footer } from "../../components/Card/Cards";
import RectangleLogo from "../../components/Card/RectangleLogo";
import { StyledCardCampus } from "../../components/Card/style";
import { Row } from "../../components/Container/style";
import Checkbox from "../../components/Input/Checkbox";
import { StyledInputLabel, StyledInput } from "../../components/Input/style";
import { BlackText, ErrorP, StyledLink } from "../../components/Text/style";
import Link from "next/link";
import PasswordInput from "../../components/Input/PasswordInput";
import { useCookies } from "react-cookie"
import axios from "axios";
import { useRouter } from "next/router";
import Modal from "../../components/Card/Modals/Modal";
import getToken from "../../components/Utils/auth-token";

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
  
  return { props: { modal: query.modal === "true" } }
}

export default function Login(props: { modal: boolean }) {
  const [checked, setChecked] = useState(false);
  const [form, setForm] = useState({ name: "", password: "" });
  const [error, setError] = useState(false);

  const handleCheckboxChange = (elmt) => {
    setChecked(elmt.target.checked);
  };

  const handleFormChange = (elmt) => {
    const newForm = { ...form };
    newForm[elmt.currentTarget.id] = elmt.target.value;
    setForm(newForm);
  };

  const [cookie, setCookie] = useCookies(["access_token"]);
  const router = useRouter();


  useEffect(() => {
    if (props.modal) router.prefetch('/homepage/unsubscribe')
    else router.prefetch('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSignIn = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3333/auth', form)
      const access_token = response.data['access_token']

      setCookie("access_token", access_token, {
        path: "/",
        maxAge: checked ? 60 * 60 * 24 * 365 * 10 : 3600,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== 'development'
      })

      if (props.modal) router.push("/homepage/unsubscribe")
      else router.push("/")

    } catch (err: any) {
      if (err.response.status === 401) setError(true)
      else console.log(err)
    }
  };

  return (
    <>
      <Head>
        <title>Connexion &bull; AMNet</title>
      </Head>
      <CampusGlobalStyle />

      <Modal show={props.modal} style={{ width: "425px", textAlign: "justify" }}>
        Vous devez être connecté pour vous désinscrire de la liste de diffusion
      </Modal>

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
            <RectangleLogo />
          </Row>

          <TitleCard>Connexion</TitleCard>

          <form onSubmit={handleSignIn}>
            <div style={{ marginBottom: "20px" }}>
              <StyledInputLabel htmlFor="name">Nom d&apos;utilisateur</StyledInputLabel>
              <StyledInput id="name" type="text" onChange={handleFormChange} />
            </div>

            <div style={{ marginBottom: "20px", position: "relative" }}>
              <StyledInputLabel htmlFor="password">Mot de passe</StyledInputLabel>
              <PasswordInput id="password" onChange={handleFormChange} />
              {error &&
                <ErrorP Fixed={true}>
                  Identifiant ou mot de passe invalide
                </ErrorP>
              }
            </div>

            <label style={{ display: "flex", alignItems: "Center", marginBottom: "20px" }}>
              <Checkbox checked={checked} onChange={handleCheckboxChange} />
              <BlackText style={{ marginLeft: "10px" }}>Rester connecté</BlackText>
            </label>

            <div style={{ marginBottom: "5px" }}>
              <Link href="/homepage/lostpassword" passHref>
                <StyledLink hovercolor="#096A09" >Mot de passe / Identifiant oublié</StyledLink>
              </Link>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <Link href="/homepage/signup" passHref>
                <StyledLink hovercolor="#096A09"> Pas encore inscrit ? Inscrivez-vous en cliquant ici</StyledLink>
              </Link>
            </div>

            <Row style={{ justifyContent: "center" }}>
              <GreenButton type="submit">Connexion</GreenButton>
            </Row>
          </form>
        </StyledCardCampus>
      </Row>

      <HelpSection padding="0 5%" />
      <Footer page="campus" />
    </>
  );
}