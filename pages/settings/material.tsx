import React, { useState } from "react";
import Head from "next/head";
import { DefaultBackground } from "../../components/Background/style";
import { Row, DashboardContainer } from "../../components/Container/style";
import { StyledCard } from "../../components/Card/style";
import AdminMenu from "../../components/Menu/AdminMenu";
import { BlackTitle } from "../../components/Text/style";
import useMediaQuery from "../../components/MediaQueries/MediaQuery";
import RequestTab from "../../components/Card/RequestTab";
import { MaterialAdminTable } from "../../components/Table/Admin";
import { Footer } from "../../components/Card/Cards";

const material = [
  {
      "material_id": 1,
      "material_user": 1,
      "material_description": "Ordinateur portable",
      "material_state": "declined",
      "user_pay_status": 1,
      "user_name": "Greg"
  },
  {
      "material_id": 2,
      "material_user": 4,
      "material_description": "Ordinateur portable",
      "material_state": "pending",
      "user_pay_status": 1,
      "user_name": "Greg"
  },
  {
      "material_id": 1,
      "material_user": 5,
      "material_description": "Ordinateur portable",
      "material_state": "active",
      "user_pay_status": 1,
      "user_name": "Greg"
  }
]

export default function AdminMaterial() {
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
      <DefaultBackground>
        <AdminMenu page="material" />

        <DashboardContainer>
          <Row style={{margin: minWidth1000 ? "1% 0" : "4% 0", justifyContent: minWidth1000 ? "start" : "center"}}>
            <BlackTitle>Demandes de matériel </BlackTitle>
          </Row>
          
          <RequestTab status={Tab} TabChange={handleTabChange}/>

          <StyledCard style={{ flex: "1", marginBottom: minWidth1000 ? "2%" : "4%" }}>
            <div style={{ height:"100%", width:"100%", overflowX:"auto" }}>
              <MaterialAdminTable status={Tab} requests={material}/>
            </div>
          </StyledCard>

          <Footer />
        </DashboardContainer>
      </DefaultBackground>
    </>
  );
}
