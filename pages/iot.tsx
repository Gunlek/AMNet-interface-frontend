import React from "react";
import Head from "next/head";
import { HelpSection, Footer } from "../components/Card/Cards";
import IoTModal from "../components/Card/Modals/IoTModal";
import { StyledCard } from "../components/Card/style";
import { DashboardContainer, ResponsiveRow, Column } from "../components/Container/style";
import UserMenu from "../components/Menu/UserMenu";
import IoTUserTable from "../components/Table/User/IoT";
import { BlackTitle, BlackP, StyledLink, BlackText, BlackUl } from "../components/Text/style";


const Iot = [

]

export default function UserIoT() {
  const empty = (Iot.length === 0);

  return (
    <>
      <Head>
        <title>Mes demandes &bull; AMNet</title>
      </Head>
      <UserMenu page="iot" />

      <DashboardContainer>
        <ResponsiveRow margin="1% 0" mobileMargin="20px 0" style={{ alignItems: "center" }}>
          <Column mobileMarginBottom="20px" style={{ justifyContent: "center" }}>
            <BlackTitle>Mes demandes d'accès à AMNet IoT</BlackTitle>
          </Column>

          <div
            style={{
              flex: "1",
              alignItems: "end",
              justifyContent: "center"
            }}
          >
            <IoTModal />
          </div>
        </ResponsiveRow>

        <BlackP mobileMarginBottom="30px" marginBottom="2%">
          Bien qu'il soit préférable de connecter vos appareils incompatibles avec AMNet Wi-Fi en filaire aux prises ethernet de votre logement, certains appareils ne proposent pas cette option.
          <br /><br />
          Cette page vous permet de créer une demande d'accès au réseau Wi-Fi : <span style={{ color: "#096a09", fontWeight: "bold" }}>AMNet IoT</span>, conçu pour supporter la connexion de Chromecast, Google Home, Xbox, Playstation et autres appareils qui ne disposent pas d'une connexion filaire et qui sont incompatibles avec AMNet Wi-Fi.
          <br /><br />
          <span style={{ color: "#096a09", fontWeight: "bold" }}>Attention</span> : si vous choisissez de brancher votre appareil en Ethernet, il ne sert à rien de créer une demande sur cette page : Il suffit de vous authentifier en accédant au <StyledLink color="#096a09" hovercolor="#67bc45" style={{ fontWeight: "bold" }} href="https://portail.amnet.fr:8003/index.php?zone=lan_birse" target="_blank" >Portail de connexion</StyledLink>  depuis votre navigateur web !
        </BlackP>

        <BlackText>
          <span style={{ color: "#096a09", fontWeight: "bold" }}>La démarche</span> pour pouvoir se connecter à AMNet IoT est la suivante :
        </BlackText>

        <BlackUl mobileMarginBottom="30px" marginBottom="2%">
          <li>
            Renseigner l'adresse physique (aussi appelée adresse MAC) de votre appareil, ainsi qu'une photo où l'on distingue clairement l'objet et l'adresse mac qui lui est associée
          </li>
          <li>
            Attendre qu'un administrateur valide votre demande (2-3 jours, depassé ce laps de temps envoyez un mail à <StyledLink style={{ fontWeight: "bold" }} color="#096a09" hovercolor="#67bc45" href="mailto:contact@amnet.fr">contact@amnet.fr</StyledLink>)
          </li>
          <li>
            Une fois la demande validée vous receverez un mail et vous pourrez connecter votre appareil au réseau :{" "}<span style={{ color: "#096a09", fontWeight: "bold" }}>AMNet Wi-Fi IoT</span>
          </li>
        </BlackUl>

        <StyledCard
          mobileMarginBottom={empty ? "0" : "30px"} marginBottom={empty ? "0" : "2%"}
          style={{
            flex: "1 1 0",
            background: empty ? "none" : undefined,
            padding: empty ? "0" : undefined,
            boxShadow: empty ? "none" : undefined
          }}
        >
          {!empty &&
            <IoTUserTable requests={Iot} />
          }
        </StyledCard>

        <HelpSection color="#096A09" />
        <Footer />
      </DashboardContainer>
    </>
  );
}
