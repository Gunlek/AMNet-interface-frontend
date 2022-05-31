import React from "react";
import Head from "next/head";
import { HelpSection, Footer } from "../components/Card/Cards";
import MaterialModal from "../components/Card/Modals/MaterialModal";
import { StyledCard } from "../components/Card/style";
import { DashboardContainer, ResponsiveRow, Column } from "../components/Container/style";
import UserMenu from "../components/Menu/UserMenu";
import MaterialUserTable from "../components/Table/User/Material";
import { BlackTitle, BlackP } from "../components/Text/style";

const material = [

]

export default function UserMaterial() {
  const empty = (material.length === 0);

  return (
    <>
      <Head>
        <title>Mes demandes &bull; AMNet</title>
      </Head>
      <UserMenu page="material" />

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

        <Column mobileMarginBottom="30px" marginBottom="2%">
          <BlackP>
            Pour compléter votre installation, vous pouvez avoir besoin d'un écran, d'un cable ethernet ou de matériel informatique.
            <br /><span style={{ color: "#096a09", fontWeight: "bold" }}>Cette page</span> page est là pour vous permettre de formuler vos besoins dans la limite de nos stocks. Nous reviendrons vers vous dès que votre demande aura été étudiée !
          </BlackP>
        </Column>

        <StyledCard
          mobileMarginBottom={empty ? "0" : "30px"}
          marginBottom={empty ? "0" : "2%"}
          style={{
            flex: "1 1 0",
            background: empty ? "none" : undefined,
            padding: empty ? "0" : undefined,
            boxShadow: empty ? "none" : undefined,
          }}
        >
          {!empty &&
            <MaterialUserTable requests={material} />
          }
        </StyledCard>

        <HelpSection color="#096A09" />
        <Footer />
      </DashboardContainer>
    </>
  );
}
