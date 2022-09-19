import React, { useState } from "react";
import Head from "next/head";
import { CampusGlobalStyle } from "../../../components/Background/style";
import { GreenButton } from "../../../components/Button/Buttons";
import { TitleCard, HelpSection, Footer } from "../../../components/Card/Cards";
import RectangleLogo from "../../../components/Card/RectangleLogo";
import { StyledCardCampus } from "../../../components/Card/style";
import { Row } from "../../../components/Container/style";
import { StyledInputLabel, StyledInput } from "../../../components/Input/style";
import axios, { AxiosResponse } from "axios";
import { motion } from "framer-motion";
import { variants } from "../../../components/Utils/animation-variants";
import CampusBackground from "../../../components/Background/CampusBackground";
import dynamic from "next/dynamic";
const Modal = dynamic(() => import("../../../components/Card/Modals/Modal"));

export default function LostPassword() {
  const [mail, setMail] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const resetPassword = (e) => {
    e.preventDefault();
    axios.post(`/mail/password-reset`, { user_email: mail })
      .then((res: AxiosResponse) => {
        if (res.status === 200) setShow(true)
        if (res.status === 204) { setShow(true); setError(true) }
      })
  }

  return (
    <>
      <Head>
        <title>Mot de passe oublié &bull; AMNet</title>
        <meta name="description" content="Identifiants oubliés : Recevoir son identifiant et reinitialiser son mot de passe" />
      </Head>
      <CampusGlobalStyle />
      <CampusBackground/>
      
      <Modal show={show} style={{ width: "450px", textAlign: "center", color: error ? "red" : undefined }}>
        {error ?
          <>
            Cette adresse e-mail n&apos;est associée à aucun compte
          </>
          :
          <>
            Nous venons de vous envoyer un mail <br />
            Pour réinitialiser votre mot de passe
          </>
        }
      </Modal>

      <motion.main
        variants={variants("left", "right")}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ ease: "linear" }}
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
          <StyledCardCampus width="45%">
            <Row style={{ marginBottom: "20px", marginTop: "10px", justifyContent: "center" }}>
              <RectangleLogo />
            </Row>

            <TitleCard>Mot de passe oublié</TitleCard>

            <form onSubmit={resetPassword}>
              <div style={{ marginBottom: "20px" }}>
                <StyledInputLabel htmlFor="user_mail">Adresse e-mail associée au compte</StyledInputLabel>
                <StyledInput id="user_mail" type="email" onChange={(e) => setMail(e.target.value)} />
              </div>

              <Row style={{ justifyContent: "center" }}>
                <GreenButton type="submit">Envoyer un mail de réinitialisation</GreenButton>
              </Row>
            </form>
          </StyledCardCampus>
        </Row>

        <HelpSection padding="0 5%" />
        <Footer page="campus" />
      </motion.main>
    </>
  );
}
