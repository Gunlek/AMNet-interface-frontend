import React, { useState } from "react";
import Head from "next/head";
import { HelpSection, Footer } from "../components/Card/Cards";
import { StyledRequestsContainer } from "../components/Card/style";
import { DashboardContainer, ResponsiveRow, Column, StyledMain } from "../components/Container/style";
import UserMenu from "../components/Menu/UserMenu";
import MaterialUserTable from "../components/Table/User/Material";
import { BlackTitle, BlackP } from "../components/Text/style";
import axios from "axios";
import { hardware, user } from "../components/Utils/types";
import getToken from "../components/Utils/auth-token";
import getConfig from "../components/Utils/req-config";
import usePageTransition from "../components/Utils/usePageTransition";
import dynamic from "next/dynamic";
import { StyledGreenButton } from "../components/Button/style";
import { AnimatePresence, motion } from "framer-motion";
const MaterialModal = dynamic(() => import("../components/Card/Modals/MaterialModal"), {
  loading: () => <StyledGreenButton width="280px">Nouvelle demande</StyledGreenButton>
})

export async function getServerSideProps({ req }) {
  const { access_token, userId, localNetwork } = getToken(req)

  if (access_token) {
    const config = getConfig(access_token)

    const [
      material,
      user
    ] = await Promise.all([
      axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/hardware/user/${userId}`, config),
      axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/user/${userId}`, config)
    ])

    if (user.data.user_pay_status) {
      return {
        props: {
          material: material.data as hardware[],
          user: user.data as user,
          localNetwork: localNetwork
        }
      }
    }

    return {
      redirect: {
        destination: '/',
        permanent: false,
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

export default function UserMaterial(props: {
  material: hardware[],
  user: user,
  localNetwork: boolean
}) {
  const [material, setMaterial] = useState(props.material)
  const empty = (material.length === 0);
  const { roadTo, pageTransition, roadToHome } = usePageTransition('admin');

  return (
    <>
      <Head>
        <title>Mes demandes &bull; AMNet</title>
      </Head>

      <StyledMain variants={pageTransition}>
        <UserMenu
          page="material"
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
              <BlackTitle>Mes demandes de matériel</BlackTitle>
            </Column>

            <div
              style={{
                flex: "1",
                alignItems: "end",
                justifyContent: "center"
              }}
            >
              <MaterialModal setHardware={setMaterial} userId={props.user.user_id} />
            </div>
          </ResponsiveRow>

          <Column mobileMarginBottom="30px" marginBottom="2%">
            <BlackP>
              Pour compléter votre installation, vous pouvez avoir besoin d&apos;un écran, d&apos;un cable ethernet ou de matériel informatique.
              <br /><span style={{ color: "#096a09", fontWeight: "bold" }}>Cette page</span> page vous permet de formuler vos besoins dans la limite de nos stocks. Nous reviendrons vers vous dès que votre demande aura été étudiée !
            </BlackP>
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
                  <MaterialUserTable requests={material} setHardware={setMaterial} userId={props.user.user_id} />
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
