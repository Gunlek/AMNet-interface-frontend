import React, { useState } from "react";
import Head from "next/head";
import dynamic from 'next/dynamic'
import { HelpSection, Footer } from "../components/Card/Cards";
import { StyledRequestsContainer } from "../components/Card/style";
import { DashboardContainer, ResponsiveRow, Column, StyledMain } from "../components/Container/style";
import UserMenu from "../components/Menu/UserMenu";
import IoTUserTable from "../components/Table/User/IoT";
import { BlackTitle, BlackP, StyledLink, BlackUl } from "../components/Text/style";
import axios from "axios";
import { user, access } from "../components/Utils/types";
import getToken from "../components/Utils/auth-token";
import getConfig from "../components/Utils/req-config";
import usePageTransition from "../components/Utils/usePageTransition";
import { StyledGreenButton } from "../components/Button/style";
import { AnimatePresence, motion } from "framer-motion";
const IoTModal = dynamic(() => import("../components/Card/Modals/IoTModal"), {
  loading: () => <StyledGreenButton width="280px">Nouvelle demande</StyledGreenButton>
})

export async function getServerSideProps({ req }) {
  const { access_token, userId, localNetwork } = getToken(req)

  if (access_token) {
    const config = getConfig(access_token)

    const [
      access,
      user
    ] = await Promise.all([
      axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/access/user/${userId}`, config),
      axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/user/${userId}`, config)
    ])

    if (user.data.user_pay_status) {
      return {
        props: {
          access: access.data as access[],
          user: user.data as user,
          localNetwork: localNetwork
        }
      }
    }

    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }

  }

  return {
    redirect: {
      destination: '/homepage',
      permanent: false,
    },
  }

}

export default function UserIoT(props: {
  access: access[],
  user: user,
  localNetwork: boolean
}) {
  const [access, setAccess] = useState(props.access)
  const empty = (access.length === 0);
  const { roadTo, pageTransition, roadToHome } = usePageTransition('admin');

  return (
    <>
      <Head>
        <title>Mes demandes &bull; AMNet</title>
      </Head>

      <StyledMain variants={pageTransition}>
        <UserMenu
          page="iot"
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
          <ResponsiveRow margin="1% 0" mobileMargin="20px 0" style={{ alignItems: "center" }}>
            <Column mobileMarginBottom="20px" style={{ justifyContent: "center" }}>
              <BlackTitle>Mes demandes d&apos;accès à AMNet IoT</BlackTitle>
            </Column>

            <div style={{ flex: "1" }}>
              <IoTModal userId={props.user.user_id} setAccess={setAccess} />
            </div>
          </ResponsiveRow>

          <Column
            mobileMarginBottom="30px"
            marginBottom="2%"
          >
            <BlackP mobileMarginBottom="30px" marginBottom="2%">
              Bien qu&apos;il soit préférable de connecter vos appareils incompatibles avec AMNet Wi-Fi en filaire aux prises ethernet de votre logement, certains appareils ne proposent pas cette option.
              <br /><br />
              Cette page vous permet de créer une demande d&apos;accès au réseau Wi-Fi : <span style={{ color: "#096a09", fontWeight: "bold" }}>AMNet IoT</span>, conçu pour supporter la connexion de Chromecast, Google Home, Xbox, Playstation et autres appareils qui ne disposent pas d&apos;une connexion filaire et qui sont incompatibles avec AMNet Wi-Fi.
              <br /><br />
              <span style={{ color: "#096a09", fontWeight: "bold" }}>Attention</span> : si vous choisissez de brancher votre appareil en Ethernet, il ne sert à rien de créer une demande sur cette page : Il suffit de vous authentifier en accédant au <StyledLink color="#096a09" hovercolor="#67bc45" style={{ fontWeight: "bold" }} href="https://portail.amnet.fr:8003/index.php?zone=lan_birse" target="_blank" >Portail de connexion</StyledLink>  depuis votre navigateur web !
            </BlackP>

            <BlackP>
              <span style={{ color: "#096a09", fontWeight: "bold" }}>La démarche</span> pour pouvoir se connecter à AMNet IoT est la suivante :
            </BlackP>

            <BlackUl>
              <li>
                Renseigner l&apos;adresse physique (aussi appelée adresse MAC) de votre appareil, ainsi qu&apos;une photo où l&apos;on distingue clairement l&apos;objet et l&apos;adresse mac qui lui est associée
              </li>
              <li>
                Attendre qu&apos;un administrateur valide votre demande (2-3 jours, depassé ce laps de temps envoyez un mail à <StyledLink style={{ fontWeight: "bold" }} color="#096a09" hovercolor="#67bc45" href="mailto:contact@amnet.fr">contact@amnet.fr</StyledLink>)
              </li>
              <li>
                Une fois la demande validée vous receverez un mail et vous pourrez connecter votre appareil au réseau :{" "}<span style={{ color: "#096a09", fontWeight: "bold" }}>AMNet IoT</span>
              </li>
            </BlackUl>
          </Column>

          <div style={{ flex: "1", display: "flex" }}>
            <AnimatePresence initial={false}>
              {!empty &&
                <StyledRequestsContainer
                  style={{ flex: "1" }}
                  as={motion.div}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ ease: "linear" }}
                >
                  <IoTUserTable requests={access} setAccess={setAccess} userId={props.user.user_id} />
                </StyledRequestsContainer>
              }
            </AnimatePresence>
          </div>

          <HelpSection color="#096A09" />
          <Footer />
        </DashboardContainer>
      </StyledMain>
    </>
  );
}
