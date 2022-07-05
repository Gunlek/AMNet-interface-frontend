import React from "react";
import Head from "next/head";
import { CampusGlobalStyle } from "../../components/Background/style";
import { GreenButton } from "../../components/Button/Buttons";
import { TitleCard, HelpSection, Footer } from "../../components/Card/Cards";
import RectangleLogo from "../../components/Card/RectangleLogo";
import { StyledCardCampus } from "../../components/Card/style";
import { Row } from "../../components/Container/style";
import { BlackText } from "../../components/Text/style";
import parseCookies from "../../components/Utils/cookie";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { user } from "../../components/Utils/types";

export async function getServerSideProps({ req, res }) {
  const cookies = parseCookies(req)

  if (cookies.access_token) {
    const userId = await jwt_decode(cookies.access_token)['id'];
    const user = await axios.get(`http://localhost:3333/user/${userId}`)

    if (res) {
      if (Object.keys(cookies).length === 0 && cookies.constructor === Object) {
        res.writeHead(301, { Location: "/" })
        res.end()
      }
    }

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
  const unsubscrive = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3333/mail/user/${props.user.user_id}`)
  }

  return (
    <>
      <Head>
        <title>Liste de diffusion &bull; AMNet</title>
      </Head>
      <CampusGlobalStyle />
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

          <form onSubmit={unsubscrive}>
            <BlackText style={{ marginBottom: "20px", textAlign: "justify" }}>
              {props.user.user_notification ?
                <>
                  Vous souhaitez retirer l'adresse <span style={{ color: "#096a09" }}>{props.user.user_email}</span> de notre liste de diffusion ? <br /><br />
                  
                  Nous utilisons uniquement votre adresse e-mail pour vous communiquer des informations sur l'AMNet, comme une maintenance potentielle ou sur l'instabilité du réseau.
                </>
                :
                <>
                </>
              }
            </BlackText>

            <Row style={{ justifyContent: "center" }}>
              <GreenButton type="submit">{props.user.user_notification ? "Se désabonner" : "Se réabonner"}</GreenButton>
            </Row>
          </form>
        </StyledCardCampus>
      </Row>

      <HelpSection padding="0 5%" />
      <Footer page="campus" />
    </>
  );
}
