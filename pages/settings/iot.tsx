import React, { useState } from "react";
import Head from "next/head";
import { StyledCard } from "../../components/Card/style";
import AdminMenu from "../../components/Menu/AdminMenu";
import { DashboardContainer, Row } from "../../components/Container/style";
import { BlackTitle } from "../../components/Text/style";
import useMediaQuery from "../../components/MediaQueries/MediaQuery";
import RequestTab from "../../components/Card/RequestTab";
import { IoTAdminTable } from "../../components/Table/Admin";
import { Footer } from "../../components/Card/Cards";

const Iot = [
  {
    "acces_id": 1,
    "access_description": "Chromecast",
    "access_mac": "AABBCCDDEEFF",
    "access_proof": "photoProof-1621263399914.jpg",
    "acces_user": 1,
    "acces_state": "pending",
    "user_pay_status": 1,
    "user_name": "Harwins",
  },
  {
    "acces_id": 2,
    "access_description": "Chromecast",
    "access_mac": "AABBCCDDEEFF",
    "access_proof": "photoProof-1621263399914.jpg",
    "acces_user": 5,
    "acces_state": "active",
    "user_pay_status": 0,
    "user_name": "Argilla",
  },
  {
    "acces_id": 3,
    "access_description": "Chromecast",
    "access_mac": "AABBCCDDEEFF",
    "access_proof": "photoProof-1621263399914.jpg",
    "acces_user": 6,
    "acces_state": "declined",
    "user_pay_status": 1,
    "user_name": "Greg"
  },
  {
    "acces_id": 1,
    "access_description": "Chromecast",
    "access_mac": "AABBCCDDEEFF",
    "access_proof": "photoProof-1621263399914.jpg",
    "acces_user": 1,
    "acces_state": "pending",
    "user_pay_status": 1,
    "user_name": "Greg",
  }
]

export default function AdminIoT() {
  const minWidth1000 = useMediaQuery('(min-width:1000px)');
  const [Tab, setTab] = useState("pending");

  const handleTabChange = (elmt) => {
    setTab(elmt.currentTarget.id);
  }

  return (
    <>
      <Head>
        <title>Administration &bull; AMNet</title>
      </Head>
      <AdminMenu page="iot" />

      <DashboardContainer>
        <Row style={{ margin: minWidth1000 ? "1% 0" : "4% 0", justifyContent: minWidth1000 ? "start" : "center" }}>
          <BlackTitle>Demandes d'accès à AMNet IoT </BlackTitle>
        </Row>

        <RequestTab status={Tab} TabChange={handleTabChange} />

        <StyledCard style={{ flex: "1", marginBottom: "2%" }}>
          <div
            style={{
              height: "100%",
              width: "100%",
              overflowX: "auto",
            }}
          >
            <IoTAdminTable status={Tab} requests={Iot} />
          </div>
        </StyledCard>

        <Footer />
      </DashboardContainer>
    </>
  );
}
