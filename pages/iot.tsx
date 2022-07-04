import React, { useState } from "react";
import Head from "next/head";
import { HelpSection, Footer } from "../components/Card/Cards";
import IoTModal from "../components/Card/Modals/IoTModal";
import { StyledCard } from "../components/Card/style";
import { DashboardContainer, ResponsiveRow, Column } from "../components/Container/style";
import UserMenu from "../components/Menu/UserMenu";
import IoTUserTable from "../components/Table/User/IoT";
import { BlackTitle, BlackP, StyledLink, BlackText, BlackUl } from "../components/Text/style";
import axios from "axios";
import jwt_decode from "jwt-decode";
import parseCookies from "../components/Utils/cookie";
import { user, access } from "../components/Utils/types";

export async function getServerSideProps({ req, res }) {
  const cookies = parseCookies(req)

  if (cookies.access_token) {
    const userId = await jwt_decode(cookies.access_token)['id'];

    const [
      access,
      user
    ] = await Promise.all([
      axios.get(`http://localhost:3333/access/user/${userId}`),
      axios.get(`http://localhost:3333/user/${userId}`)
    ])

    if (user.data.user_pay_status) {
      if (res) {
        if (Object.keys(cookies).length === 0 && cookies.constructor === Object) {
          res.writeHead(301, { Location: "/" })
          res.end()
        }
      }

      return {
        props: {
          access: access.data,
          access_token: cookies.access_token,
          user: user.data
        }
      }
    }
    else {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }
  }
  else {
    return {
      redirect: {
        destination: '/homepage',
        permanent: false,
      },
    }
  }
}

export default function UserIoT(props: {
  access: access[],
  access_token: string,
  user: user
}) {
  const [access, setAccess] = useState(props.access)
  const empty = (access.length === 0);

  return (
    <>
      <Head>
        <title>Mes demandes &bull; AMNet</title>
      </Head>
      <UserMenu
        page="iot"
        user={{
          is_gadz: props.user.user_is_gadz,
          rank: props.user.user_rank,
          pay_status: props.user.user_pay_status
        }}
      />

      <DashboardContainer>
        <ResponsiveRow margin="1% 0" mobileMargin="20px 0" style={{ alignItems: "center" }}>
          <Column mobileMarginBottom="20px" style={{ justifyContent: "center" }}>
            <BlackTitle>Mes demandes d'accès à AMNet IoT</BlackTitle>
          </Column>

          <div
            style={{
              flex: "1",
              alignItems: "end",
              justifyContent: "center"
            }}
          >
            <IoTModal />
          </div>
        </ResponsiveRow>

        <Column
          mobileMarginBottom="30px"
          marginBottom={empty ? "0" : "2%"}
          style={{ flex: empty ? "1" : undefined }}
        >
          <BlackP mobileMarginBottom="30px" marginBottom="2%">
            Bien qu'il soit préférable de connecter vos appareils incompatibles avec AMNet Wi-Fi en filaire aux prises ethernet de votre logement, certains appareils ne proposent pas cette option.
            <br /><br />
            Cette page vous permet de créer une demande d'accès au réseau Wi-Fi : <span style={{ color: "#096a09", fontWeight: "bold" }}>AMNet IoT</span>, conçu pour supporter la connexion de Chromecast, Google Home, Xbox, Playstation et autres appareils qui ne disposent pas d'une connexion filaire et qui sont incompatibles avec AMNet Wi-Fi.
            <br /><br />
            <span style={{ color: "#096a09", fontWeight: "bold" }}>Attention</span> : si vous choisissez de brancher votre appareil en Ethernet, il ne sert à rien de créer une demande sur cette page : Il suffit de vous authentifier en accédant au <StyledLink color="#096a09" hovercolor="#67bc45" style={{ fontWeight: "bold" }} href="https://portail.amnet.fr:8003/index.php?zone=lan_birse" target="_blank" >Portail de connexion</StyledLink>  depuis votre navigateur web !
          </BlackP>

          <BlackP>
            <span style={{ color: "#096a09", fontWeight: "bold" }}>La démarche</span> pour pouvoir se connecter à AMNet IoT est la suivante :
          </BlackP>

          <BlackUl>
            <li>
              Renseigner l'adresse physique (aussi appelée adresse MAC) de votre appareil, ainsi qu'une photo où l'on distingue clairement l'objet et l'adresse mac qui lui est associée
            </li>
            <li>
              Attendre qu'un administrateur valide votre demande (2-3 jours, depassé ce laps de temps envoyez un mail à <StyledLink style={{ fontWeight: "bold" }} color="#096a09" hovercolor="#67bc45" href="mailto:contact@amnet.fr">contact@amnet.fr</StyledLink>)
            </li>
            <li>
              Une fois la demande validée vous receverez un mail et vous pourrez connecter votre appareil au réseau :{" "}<span style={{ color: "#096a09", fontWeight: "bold" }}>AMNet Wi-Fi IoT</span>
            </li>
          </BlackUl>
        </Column>

        {!empty &&
          <StyledCard mobileMarginBottom="30px" marginBottom="2%">
            <IoTUserTable requests={access} />
          </StyledCard>
        }

        <HelpSection color="#096A09" />
        <Footer />
      </DashboardContainer>
    </>
  );
}
