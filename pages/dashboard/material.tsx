import React from "react";
import Head from "next/head";
import { DefaultBackground } from "../../components/Background/style";
import { GreenButton } from "../../components/Button/Buttons";
import {
  Column,
  DashboardContainer,
  ResponsiveRow
} from "../../components/Container/style";
import { Footer, HelpSection } from "../../components/Card/Cards"
import { StyledCard } from "../../components/Card/style";
import UserMenu from "../../components/Menu/UserMenu";
import { BlackTitle, BlackText, BlackP } from "../../components/Text/style";
import useMediaQuery from "../../components/MediaQueries/MediaQuery";
import { MaterialUserTable } from "../../components/Table/User";
import { ModalLogic, MaterialModal } from "../../components/Card/Modals";

const material = [
  {
    "material_id": 1,
    "material_user": 1,
    "material_description": "Ordinateur portable",
    "material_state": "declined",
  },
  {
    "material_id": 2,
    "material_user": 4,
    "material_description": "Ordinateur portable",
    "material_state": "pending",
  },
  {
    "material_id": 1,
    "material_user": 5,
    "material_description": "Ordinateur portable",
    "material_state": "active",
  }
]

export default function UserMaterial() {
  const minWidth1000 = useMediaQuery('(min-width:1000px)');
  const {reveal, toggle} = ModalLogic();

  return (
    <>
      <Head>
        <title>Mes demandes &bull; AMNet</title>
      </Head>
      <DefaultBackground>
        <UserMenu page="material" />

        <DashboardContainer>
          <ResponsiveRow style={{ margin: minWidth1000 ? "1% 0" : "4% 0", alignItems: "center" }}>
            <Column style={{ justifyContent: "center" }}>
              <BlackTitle>Mes demandes de matériel</BlackTitle>
            </Column>

            <div 
              style={{ 
                flex: "1", 
                alignItems: "end", 
                justifyContent: "center", 
                marginTop: minWidth1000 ? "0" : "4%" 
              }}
            >
              <GreenButton width="280px" onClick={toggle}>Nouvelle demande</GreenButton>
              <MaterialModal reveal={reveal} hide={toggle}/>
            </div>
          </ResponsiveRow>

          <Column style={{ marginBottom: "2%" }}>
            <BlackP>
               Pour compléter votre installation, vous pouvez avoir besoin d'un écran, d'un cable ethernet ou de matériel informatique.
               <br/><span style={{ color: "#096a09", fontWeight: "bold" }}>Cette page</span> page est là pour vous permettre de formuler vos besoins dans la limite de nos stocks. Nous reviendrons vers vous dès que votre demande aura été étudiée !
            </BlackP>
          </Column>

          <StyledCard style={{ flex: "1", marginBottom: minWidth1000 ? "2%" : "4%" }}>
            <div
              style={{
                height: "100%",
                width: "100%",
                overflowX: "auto"
              }}
            >
              <MaterialUserTable RequestTable={material} />
            </div>
          </StyledCard>

          <HelpSection color="#096A09" />
          <Footer />
        </DashboardContainer>
      </DefaultBackground>
    </>
  );
}
