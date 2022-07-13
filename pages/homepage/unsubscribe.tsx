import React, { useState } from "react";
import Head from "next/head";
import { CampusGlobalStyle } from "../../components/Background/style";
import { ButtonLink, GreenButton } from "../../components/Button/Buttons";
import { TitleCard, HelpSection, Footer } from "../../components/Card/Cards";
import RectangleLogo from "../../components/Card/RectangleLogo";
import { StyledCardCampus } from "../../components/Card/style";
import { Row } from "../../components/Container/style";
import { BlackText } from "../../components/Text/style";
import axios from "axios";
import { user } from "../../components/Utils/types";
import Modal from "../../components/Card/Modals/Modal";
import getToken from "../../components/Utils/auth-token";
import getConfig from "../../components/Utils/req-config";

export async function getServerSideProps({ req }) {
  const { access_token, userId } = getToken(req)

  if (access_token) {
    const config = getConfig(access_token)
    const user = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/user/${userId}`)
    
    return { props: { user: user.data as user } }
  }
  else {
    return {
      redirect: {
        destination: '/homepage/login?modal=true',
        permanent: false,
      }
    }
  }
}

export default function Unsubscribe(props: { user: user }) {
  const [show, setShow] = useState(false)
  
  const unsubscrive = async (e) => {
    e.preventDefault();
    await axios.put(`${process.env.NEXT_PUBLIC_API_HOST}/mail/user/${props.user.user_id}`)
    setShow(!show)
  }

  return (
    <>
      <Head>
        <title>Liste de diffusion &bull; AMNet</title>
      </Head>
      <CampusGlobalStyle />

      <Modal show={show} style={{ width: "500px", textAlign: "justify" }}>
        <BlackText>
          Vous avez été <span style={{ color: "#096a09", fontWeight: "bold", display: "contents" }}>désabonné</span> de la liste de diffusion <br /><br />
          Si vous souhaitez vous réabonner vous devez revenir sur cette page
        </BlackText>

        <Row style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}>
          <ButtonLink href="/">Accéder à l&apos;accueil</ButtonLink>
        </Row>
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
        <StyledCardCampus width="715px">
          <Row style={{ marginBottom: "20px", marginTop: "10px", justifyContent: "center" }}>
            <RectangleLogo />
          </Row>

          <TitleCard>Liste de diffusion</TitleCard>
          <BlackText style={{ marginBottom: "20px", textAlign: "justify" }}>
            {props.user.user_notification ?
              <>
                Vous souhaitez retirer l&apos;adresse <span style={{ color: "#096a09" }}>{props.user.user_email}</span> de notre liste de diffusion ? <br /><br />

                Nous utilisons uniquement votre adresse e-mail pour vous communiquer des informations sur l&apos;AMNet, comme une maintenance potentielle ou sur l&apos;instabilité du réseau.
              </>
              :
              <>
              </>
            }
          </BlackText>

          <Row style={{ justifyContent: "center" }}>
            <GreenButton onClick={unsubscrive}>{props.user.user_notification ? "Se désabonner" : "Se réabonner"}</GreenButton>
          </Row>
        </StyledCardCampus>
      </Row>

      <HelpSection padding="0 5%" />
      <Footer page="campus" />
    </>
  );
}
