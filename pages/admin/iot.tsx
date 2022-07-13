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
import useTransition from "../../components/Table/Admin/TableTransition";
import getToken from "../../components/Utils/auth-token";
import getConfig from "../../components/Utils/req-config";

export async function getServerSideProps({ req }) {
  const { access_token, userId } = getToken(req)

  if (access_token) {
    const config = getConfig(access_token);
    const user = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/user/${userId}`, config);

    if (user.data.user_rank === "admin") {
      const access = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/access`, config);
      
      return {
        props: { access: access.data }
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
