import React, { useState } from "react";
import Head from "next/head";
import { HelpSection, Footer } from "../components/Card/Cards";
import MaterialModal from "../components/Card/Modals/MaterialModal";
import { StyledCard } from "../components/Card/style";
import { DashboardContainer, ResponsiveRow, Column } from "../components/Container/style";
import UserMenu from "../components/Menu/UserMenu";
import MaterialUserTable from "../components/Table/User/Material";
import { BlackTitle, BlackP } from "../components/Text/style";
import axios from "axios";
import jwt_decode from "jwt-decode";
import parseCookies from "../components/Utils/cookie";
import { user } from "../components/Utils/types";

export async function getServerSideProps({ req, res }) {
  const cookies = parseCookies(req)

  if (cookies.access_token) {
    const userId = await jwt_decode(cookies.access_token)['id'];

    const [
      material,
      user
    ] = await Promise.all([
      axios.get(`http://localhost:3333/hardware/user/${userId}`),
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
          material: material.data,
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

export default function UserMaterial(props: {
  material: any[],
  access_token: string,
  user: user
}) {
  const [material, setMaterial] = useState(props.material)
  const empty = (material.length === 0);

  return (
    <>
      <Head>
        <title>Mes demandes &bull; AMNet</title>
      </Head>
      <UserMenu
        page="material"
        user={{
          is_gadz: props.user.user_is_gadz,
          rank: props.user.user_rank,
          pay_status: props.user.user_pay_status
        }}
      />

      <DashboardContainer>
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
            <MaterialModal />
          </div>
        </ResponsiveRow>

        <Column
          mobileMarginBottom="30px"
          marginBottom={empty ? "0" : "2%"}
          style={{ flex: empty ? "1" : undefined }}
        >
          <BlackP>
            Pour compléter votre installation, vous pouvez avoir besoin d'un écran, d'un cable ethernet ou de matériel informatique.
            <br /><span style={{ color: "#096a09", fontWeight: "bold" }}>Cette page</span> page est là pour vous permettre de formuler vos besoins dans la limite de nos stocks. Nous reviendrons vers vous dès que votre demande aura été étudiée !
          </BlackP>
        </Column>

        {!empty &&
          <StyledCard mobileMarginBottom="30px" marginBottom="2%">
            <MaterialUserTable requests={material} />
          </StyledCard>
        }

        <HelpSection color="#096A09" />
        <Footer />
      </DashboardContainer>
    </>
  );
}
