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
import {
  BlackTitle,
  BlackText,
  StyledLink,
  BlackP,
  BlackUl
} from "../../components/Text/style";
import useMediaQuery from "../../components/MediaQueries/MediaQuery";
import { IoTUserTable } from "../../components/Table/User";
import { ModalLogic, IoTModal } from "../../components/Card/Modals";

const Iot = [
  {
    "acces_id": 1,
    "access_description": "Chromecast",
    "access_mac": "AABBCCDDEEFF",
    "access_proof": "photoProof-1621263399914.jpg",
    "acces_state": "pending",
  },
  {
    "acces_id": 2,
    "access_description": "Chromecast",
    "access_mac": "AABBCCDDEEFF",
    "access_proof": "photoProof-1621263399914.jpg",
    "acces_user": 1,
    "acces_state": "active",
  },
  {
    "acces_id": 3,
    "access_description": "Chromecast",
    "access_mac": "AABBCCDDEEFF",
    "access_proof": "photoProof-1621263399914.jpg",
    "acces_state": "declined",
  },
  {
    "acces_id": 1,
    "access_description": "Chromecast",
    "access_mac": "AABBCCDDEEFF",
    "access_proof": "photoProof-1621263399914.jpg",
    "acces_state": "pending",
  }
]

export default function UserIoT() {
  const minWidth1000 = useMediaQuery('(min-width:1000px)')
  const {reveal, toggle} = ModalLogic();

  return (
    <>
      <Head>
        <title>Mes demandes &bull; AMNet</title>
      </Head>
      <DefaultBackground>
        <UserMenu page="iot" />

        <DashboardContainer>
          <ResponsiveRow style={{ margin: minWidth1000 ? "1% 0" : "4% 0", alignItems: "center" }}>
            <Column style={{ justifyContent: "center" }}>
              <BlackTitle>Mes demandes d'accès à AMNet IoT</BlackTitle>
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
              <IoTModal reveal={reveal} hide={toggle}/>
            </div>
          </ResponsiveRow>

          <BlackP style={{ marginBottom: "2%" }}>
            Cette page est utile <span style={{ color: "#096a09", fontWeight: "bold" }}>uniquement</span>  pour les appareils qui ne peuvent <span style={{ color: "#096a09", fontWeight: "bold" }}>pas se connecter à AMNet Wi-Fi</span>. C'est à dire les objets connectés, comme les enceintes, les chromecasts ou les consoles de jeux.<br />
            Cependant nous vous conseillons vivement de brancher votre console en Ethernet (Filaire)° car vous aurez un débit plus élevé, un ping plus faible et une meilleure stabilité. Si vous branchez votre appareil en Ethernet cette page ne vous est pas utile. Apres avoir branché votre appareil en Ethernet une page devrait s'ouvrir dans votre navigateur web pour que vous puissiez rentrer vos identifiants AMNet et obtenir un accès à Internet. Si ce n'est pas le cas, cliquez sur ce lien pour accéder au <StyledLink color="#096a09" hovercolor="#67bc45" style={{ fontWeight: "bold" }} href="https://portail.amnet.fr:8003/index.php?zone=lan_birse" target="_blank" >Portail de connexion</StyledLink>
          </BlackP>

          <BlackText>
            <span style={{ color: "#096a09", fontWeight: "bold" }}>La démarche</span> pour pouvoir se connecter à AMNet IoT est la suivante :
          </BlackText>

          <BlackUl style={{ marginBottom: "2%" }}>
            <li>
              Renseigner l'adresse physique (aussi appelée adresse MAC) de votre appareil, ainsi qu'une photo où l'on distingue clairement l'objet et l'adresse mac qui lui est associée
            </li>
            <li>
              Attendre qu'un administrateur valide votre demande (2-3 jours, depassé ce laps de temps envoyez un mail à <StyledLink style={{ fontSize: "1em", fontWeight: "bold" }} color="#096a09" hovercolor="#67bc45" href="mailto:contact@amnet.fr">contact@amnet.fr</StyledLink>)
            </li>
            <li>
              Une fois la demande validée vous pourrez connecter votre appareil au réseau Wi-Fi : <span style={{ color: "#096a09", fontWeight: "bold" }}>AMNet IoT</span>
            </li>
          </BlackUl>

          <StyledCard style={{ flex: "1", marginBottom: minWidth1000 ? "2%" : "4%" }}>
            <div
              style={{
                height: "100%",
                width: "100%",
                overflowX: "auto"
              }}
            >
              <IoTUserTable RequestTable={Iot} />
            </div>
          </StyledCard>

          <HelpSection color="#096A09" />
          <Footer />
        </DashboardContainer>
      </DefaultBackground>
    </>
  );
}
