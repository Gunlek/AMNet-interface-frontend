import React, { useRef, useState } from "react";
import Head from "next/head";
import { StyledCard } from "../../../components/Card/style";
import AdminMenu from "../../../components/Menu/AdminMenu";
import { DashboardContainer, ResponsiveRow, Row, StyledMain } from "../../../components/Container/style";
import { BlackTitle } from "../../../components/Text/style";
import RequestTab from "../../../components/Card/RequestTab";
import { Footer, InfoAdmin } from "../../../components/Card/Cards";
import IoTAdminTable from "../../../components/Table/Admin/IoT/IoT";
import axios from "axios";
import { adminAccess } from "../../../components/Utils/types";
import useTransition from "../../../components/Table/Admin/TableTransition";
import getToken from "../../../components/Utils/auth-token";
import getConfig from "../../../components/Utils/req-config";
import usePageTransition from "../../../components/Utils/usePageTransition";
import { ButtonLink } from "../../../components/Button/Buttons";
import oldURL from "../../../components/Utils/oldURL";

export async function getServerSideProps({ req }) {
  const { access_token, userId } = getToken(req)

  if (access_token) {
    const config = getConfig(access_token);
    const user = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/user/${userId}`, config);

    if (user.data.user_rank === "admin") {
      const access = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/access`, config);

      return {
        props: { access: access.data, fromIndex: (oldURL(req)) === "/" }
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

export default function AdminIoT(props: { access: adminAccess[], fromIndex: boolean }) {
  const [access, setAccess] = useState(props.access);
  const { Display, Tab, handleTabChange } = useTransition();
  const { roadTo, pageTransition, roadToHome } = usePageTransition('user');

  const variants = props.fromIndex ?
    {
      hidden: { opacity: 0, x: 100 },
      enter: { opacity: 1, x: 0 }
    }
    :
    pageTransition;

  return (
    <>
      <Head>
        <title>Accès IoT &bull; AMNet</title>
      </Head>

      <StyledMain variants={variants}>
        <AdminMenu page="iot" setTranstion={roadTo} setHomeTransition={roadToHome} />

        <DashboardContainer
          initial={props.fromIndex ? "false" : undefined}
          exit={pageTransition.exit ? "false" : undefined}
        >
          <ResponsiveRow margin="1% 0" mobileMargin="20px 0" style={{ alignItems: "center" }}>
            <Row mobileMarginBottom="20px" style={{ justifyContent: "center", width: "fit-content", alignItems: "center", position: "relative" }}>
              <BlackTitle>Demandes d&apos;accès à AMNet IoT</BlackTitle>
              <InfoAdmin />
            </Row>

            <div
              style={{
                flex: "1",
                display: "flex",
                alignItems: "end",
                justifyContent: "end"
              }}
            >
              <ButtonLink href="/admin/iot/aeg" style={{ width: "280px" }}>Accès de  l&apos;AEG</ButtonLink>
            </div>
          </ResponsiveRow>

          <RequestTab status={Tab.new} TabChange={handleTabChange} name="IoT"/>

          <StyledCard
            marginBottom="2%"
            mobileMarginBottom="10px"
            minHeight="0"
            mobileMinHeight="550px"
            style={{ flex: "1 0 0" }}
          >
            <IoTAdminTable
              status={Tab}
              requests={access}
              display={Display}
              setTab={setAccess}
            />
          </StyledCard>

          <Footer marginTop="0" />
        </DashboardContainer>
      </StyledMain>
    </>
  );
}
