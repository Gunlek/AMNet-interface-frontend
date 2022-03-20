import React from "react";
import Head from "next/head";
import { GreenButton } from "../../components/Button/Buttons";
import {
  Column,
  DashboardContainer,
  ResponsiveRow,
} from "../../components/Container/style";
import { Footer, HelpSection } from "../../components/Card/Cards";
import { StyledCard } from "../../components/Card/style";
import UserMenu from "../../components/Menu/UserMenu";
import {
  BlackTitle,
  BlackText,
  StyledLink,
  BlackP,
  BlackUl,
} from "../../components/Text/style";
import useMediaQuery from "../../components/MediaQueries/MediaQuery";
import { IoTUserTable } from "../../components/Table/User";
import { ModalLogic, IoTModal } from "../../components/Card/Modals";

const Iot = [
  {
    acces_id: 1,
    access_description: "Chromecast",
    access_mac: "AABBCCDDEEFF",
    access_proof: "photoProof-1621263399914.jpg",
    acces_state: "pending",
  },
  {
    acces_id: 2,
    access_description: "Chromecast",
    access_mac: "AABBCCDDEEFF",
    access_proof: "photoProof-1621263399914.jpg",
    acces_user: 1,
    acces_state: "active",
  },
  {
    acces_id: 3,
    access_description: "Chromecast",
    access_mac: "AABBCCDDEEFF",
    access_proof: "photoProof-1621263399914.jpg",
    acces_state: "declined",
  },
  {
    acces_id: 1,
    access_description: "Chromecast",
    access_mac: "AABBCCDDEEFF",
    access_proof: "photoProof-1621263399914.jpg",
    acces_state: "pending",
  },
];

export default function UserIoT() {
  const minWidth1000 = useMediaQuery("(min-width:1000px)");
  const { reveal, toggle } = ModalLogic();
  const empty = Iot.length === 0;

  return (
    <>
      <Head>
        <title>Mes demandes &bull; AMNet</title>
      </Head>
      <UserMenu page="iot" />

      <DashboardContainer>
        <ResponsiveRow
          margin="1% 0"
          mobileMargin="20px 0"
          style={{ alignItems: "center" }}
        >
          <Column
            mobileMarginBottom="30px"
            style={{ justifyContent: "center" }}
          >
            <BlackTitle>Mes demandes d'accès à AMNet IoT</BlackTitle>
          </Column>

          <div
            style={{
              flex: "1",
              alignItems: "end",
              justifyContent: "center",
            }}
          >
            <GreenButton width="280px" onClick={toggle}>
              Nouvelle demande
            </GreenButton>
            <IoTModal reveal={reveal} hide={toggle} />
          </div>
        </ResponsiveRow>

        <BlackP mobileMarginBottom="30px" marginBottom="2%">
          Bien qu'il soit préférable de connecter vos appareils incompatibles
          avec AMNet Wi-Fi en filaire aux prises ethernet de votre logement,
          certains appareils ne proposent pas cette option.
          <br />
          <br />
          Cette page vous permet de créer une demande d'accès au réseau Wi-Fi :{" "}
          <span style={{ color: "#096a09", fontWeight: "bold" }}>
            AMNet IoT
          </span>
          , conçu pour supporter la connexion de Chromecast, Google Home, Xbox,
          Playstation et autres appareils qui ne disposent pas d'une connexion
          filaire et qui sont incompatibles avec AMNet Wi-Fi.
          <br />
          <br />
          <span style={{ color: "#096a09", fontWeight: "bold" }}>
            Attention
          </span>{" "}
          : si vous choisissez de brancher votre appareil en Ethernet, il ne
          sert à rien de créer une demande sur cette page : Il suffit de vous
          authentifier en accédant au{" "}
          <StyledLink
            color="#096a09"
            hovercolor="#67bc45"
            style={{ fontWeight: "bold" }}
            href="https://portail.amnet.fr:8003/index.php?zone=lan_birse"
            target="_blank"
          >
            Portail de connexion
          </StyledLink>{" "}
          depuis votre navigateur web !
        </BlackP>

        <BlackText>
          <span style={{ color: "#096a09", fontWeight: "bold" }}>
            La démarche
          </span>{" "}
          pour pouvoir se connecter à AMNet IoT est la suivante :
        </BlackText>

        <BlackUl mobileMarginBottom="30px" marginBottom="2%">
          <li>
            Renseigner l'adresse physique (aussi appelée adresse MAC) de votre
            appareil, ainsi qu'une photo où l'on distingue clairement l'objet et
            l'adresse mac qui lui est associée
          </li>
          <li>
            Attendre qu'un administrateur valide votre demande (2-3 jours,
            depassé ce laps de temps envoyez un mail à{" "}
            <StyledLink
              style={{ fontWeight: "bold" }}
              color="#096a09"
              hovercolor="#67bc45"
              href="mailto:contact@amnet.fr"
            >
              contact@amnet.fr
            </StyledLink>
            )
          </li>
          <li>
            Une fois la demande validée vous pourrez connecter votre appareil au
            réseau Wi-Fi :{" "}
            <span style={{ color: "#096a09", fontWeight: "bold" }}>
              AMNet IoT
            </span>
          </li>
        </BlackUl>

        <StyledCard
          mobileMarginBottom={empty ? "0" : "30px"}
          marginBottom={empty ? "0" : "2%"}
          style={{
            flex: "1",
            background: empty ? "none" : undefined,
            padding: empty ? "0" : undefined,
            boxShadow: empty ? "none" : undefined,
          }}
        >
          <div
            style={{
              height: "100%",
              width: "100%",
              overflowX: "auto",
              display: empty ? "none" : "block",
            }}
          >
            <IoTUserTable requests={Iot} />
          </div>
        </StyledCard>

        <HelpSection color="#096A09" />
        <Footer />
      </DashboardContainer>
    </>
  );
}
