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
import { hardware, user } from "../components/Utils/types";
import getToken from "../components/Utils/auth-token";
import getConfig from "../components/Utils/req-config";

export async function getServerSideProps({ req }) {
  const { access_token, userId } = getToken(req)

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
          user: user.data as user
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
            Pour compléter votre installation, vous pouvez avoir besoin d&apos;un écran, d&apos;un cable ethernet ou de matériel informatique.
            <br /><span style={{ color: "#096a09", fontWeight: "bold" }}>Cette page</span> page est là pour vous permettre de formuler vos besoins dans la limite de nos stocks. Nous reviendrons vers vous dès que votre demande aura été étudiée !
          </BlackP>
        </Column>

        {!empty &&
          <StyledCard style={{ flex: "1" }} mobileMarginBottom="30px" marginBottom="2%">
            <MaterialUserTable requests={material} />
          </StyledCard>
        }

        <HelpSection color="#096A09" />
        <Footer />
      </DashboardContainer>
    </>
  );
}
