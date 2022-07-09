import React, { useRef, useState } from "react";
import Head from "next/head";
import { StyledCard } from "../../components/Card/style";
import AdminMenu from "../../components/Menu/AdminMenu";
import { DashboardContainer, Row } from "../../components/Container/style";
import { BlackTitle } from "../../components/Text/style";
import RequestTab from "../../components/Card/RequestTab";
import { Footer } from "../../components/Card/Cards";
import IoTAdminTable from "../../components/Table/Admin/IoT";
import useMediaQuery from "../../components/MediaQueries/MediaQuery";
import axios from "axios";
import { adminAccess } from "../../components/Utils/types";
import parseCookies from "../../components/Utils/cookie";
import jwt_decode from "jwt-decode";
import { user } from "../../components/Utils/types";
import useTransition from "../../components/Table/Admin/TableTransition";

export async function getServerSideProps({ req, res }) {
  const cookies = parseCookies(req)

  if (cookies.access_token) {
    const userId = await jwt_decode(cookies.access_token)['id'];
    const user = await (await axios.get(`http://localhost:3333/user/${userId}`)).data as user;

    if (user.user_rank === "admin") {
      if (res) {
        if (Object.keys(cookies).length === 0 && cookies.constructor === Object) {
          res.writeHead(301, { Location: "/" })
          res.end()
        }
      }

      const access = await (await axios.get(`http://localhost:3333/access`)).data as adminAccess[]

      return {
        props: { access }
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

export default function AdminIoT(props: { access: adminAccess[] }) {
  const mobileContainerRef = useRef(null)
  const { Display, Opacity, Tab, handleTabChange } = useTransition(mobileContainerRef)
  const minWidth1000 = useMediaQuery('(min-width:1000px)');

  return (
    <>
      <Head>
        <title>Administration &bull; AMNet</title>
      </Head>
      <AdminMenu page="iot" />

      <DashboardContainer>
        <Row margin="1% 0" mobileMargin="20px 0" mobileJustify="center">
          <BlackTitle>Demandes d&apos;accès à AMNet IoT</BlackTitle>
        </Row>

        <RequestTab status={Tab.new} TabChange={handleTabChange} />

        <StyledCard
          marginBottom="2%"
          mobileMarginBottom="10px"
          style={{ flex: "1 0 0", minHeight: minWidth1000 ? "0" : "300px" }}
        >
          <IoTAdminTable 
            status={Tab} 
            requests={props.access} 
            display={Display} 
            opacity={Opacity} 
            mobileRef={mobileContainerRef} 
          />
        </StyledCard>

        <Footer marginTop="0" />
      </DashboardContainer>
    </>
  );
}
