import React from "react";
import Head from "next/head";
import { DefaultBackground } from "../../components/Background/style";
import { GreenButton, SmallRedButton } from "../../components/Button/Buttons";
import { 
  Row, 
  Column,
  DashboardContainer,
  ResponsiveRow
} from "../../components/Container/style";
import { Footer, HelpSection } from "../../components/Card/Cards"
import { StyledCard } from "../../components/Card/style";
import { Menu } from "../../components/Menu/Menus";
import { 
  StyledTable, 
  StyledGreenTr, 
  StyledTr,
  StyledTd150,
  StyledTd200,
  StyledTd50
} from "../../components/Table/style";
import { 
  BlackTitle, 
  BlackText, 
  StyledLink 
} from "../../components/Text/style";
import { StateRequest } from "../../components/Status/Status";
import useMediaQuery from "../../components/MediaQueries/MediaQuery";

export default function Dashboard() {
  const minWidth1000 = useMediaQuery('(min-width:1000px)');
  return (
    <>
      <Head>
        <title>Mon Espace &bull; AMNet</title>
      </Head>
      <DefaultBackground>
        <Menu page="iot" />

        <DashboardContainer>
          <ResponsiveRow style={{margin: minWidth1000 ? "1% 0" : "4% 0", alignItems:"center"}}>
            <Column style={{justifyContent: "center"}}>
              <BlackTitle>Mes demandes d'accès à AMNet IoT</BlackTitle>
            </Column>
            
            <form style={{flex:"1", alignItems: "end", justifyContent: "center", marginTop: minWidth1000 ? "0" : "4%"}}>
              <GreenButton width="280px">Nouvelle demande</GreenButton>
            </form>
          </ResponsiveRow>

          <Column>
            <BlackText>
              <p 
                style={
                  {marginTop:"0",
                  marginBottom:"0", 
                  textAlign: "justify"
                }}
              >
                Cette page est utile <span style={{ color: "#096a09", fontWeight: "bold"}}>uniquement</span>  pour les appareils qui ne peuvent <span style={{ color: "#096a09", fontWeight: "bold"}}>pas se connecter à AMNet Wi-Fi</span>. C'est à dire les objets connectés, comme les enceintes, les chromecasts ou les consoles de jeux.<br/>
                Cependant nous vous conseillons vivement de brancher votre console en Ethernet (Filaire)° car vous aurez un débit plus élevé, un ping plus faible et une meilleure stabilité. Si vous branchez votre appareil en Ethernet cette page ne vous est pas utile. Apres avoir branché votre appareil en Ethernet une page devrait s'ouvrir dans votre navigateur web pour que vous puissiez rentrer vos identifiants AMNet et obtenir un accès à Internet. Si ce n'est pas le cas, cliquez sur ce lien pour accéder au <StyledLink color= "#096a09" hovercolor="#67bc45" style={{fontSize:"1em", fontWeight: "bold"}}href="https://portail.amnet.fr:8003/index.php?zone=lan_birse" target="_blank" >Portail de connexion</StyledLink>
                <br/><br/>
                <span style={{color: "#096a09", fontWeight: "bold"}}>La démarche</span> pour pouvoir se connecter à AMNet IoT est la suivante :
              </p>
              
              <ul 
                style={{
                  marginTop:"0", 
                  textAlign: "justify", 
                  marginBottom:"2%"
                }}
              >
                  <li>
                      Renseigner l'adresse physique (aussi appelée adresse MAC) de votre appareil, ainsi qu'une photo où l'on distingue clairement l'objet et l'adresse mac qui lui est associée
                  </li>
                  <li>
                      Attendre qu'un administrateur valide votre demande (2-3 jours, depassé ce laps de temps envoyez un mail à <StyledLink style={{fontSize:"1em", fontWeight: "bold"}} color= "#096a09" hovercolor="#67bc45" href="mailto:contact@amnet.fr">contact@amnet.fr</StyledLink>)
                  </li>
                  <li>
                      Une fois la demande validée vous pourrez connecter votre appareil au réseau Wi-Fi : <span style={{color: "#096a09", fontWeight: "bold"}}>AMNet IoT</span>
                  </li>
              </ul>
            </BlackText>
          </Column>

          <StyledCard style={{ flex: "1", marginBottom: minWidth1000 ? "2%" : "4%"}}>
            <div 
              style={{ 
                height:"100%", 
                width:"100%", 
                overflowX:"auto" 
              }}
            >
              <StyledTable>
                <tbody>
                  <StyledGreenTr>
                    <StyledTd50>#</StyledTd50>
                    <StyledTd200>Description</StyledTd200>
                    <StyledTd200>Adresse Mac</StyledTd200>
                    <StyledTd150><span style={{paddingLeft: "5px"}}>Etat</span></StyledTd150>
                    <StyledTd150><span style={{paddingLeft: "5px"}}>Action</span></StyledTd150>
                  </StyledGreenTr>
                  <StyledTr>
                    <StyledTd50>1</StyledTd50>
                    <StyledTd200 >Test1</StyledTd200>
                    <StyledTd200>aa:bb:cc:dd:ee:fff</StyledTd200>
                    <StyledTd150 ><StateRequest state="accepted"/> </StyledTd150>
                    <StyledTd150 >
                      <form>
                        <SmallRedButton>Supprimer</SmallRedButton>
                      </form>
                    </StyledTd150>
                  </StyledTr>
                  <StyledTr>
                    <StyledTd50>2</StyledTd50>
                    <StyledTd200>Test2</StyledTd200>
                    <StyledTd200>aa:bb:cc:dd:ee:fff</StyledTd200>
                    <StyledTd150><StateRequest state="denied"/> </StyledTd150>
                    <StyledTd150>
                      <form>
                        <SmallRedButton>Supprimer</SmallRedButton>
                      </form></StyledTd150>
                  </StyledTr>
                  <StyledTr>
                    <StyledTd50>3</StyledTd50>
                    <StyledTd200>Test3</StyledTd200>
                    <StyledTd200>aa:bb:cc:dd:ee:fff</StyledTd200>
                    <StyledTd150><StateRequest state="inProcess"/> </StyledTd150>
                    <StyledTd150>
                      <form>
                        <SmallRedButton>Supprimer</SmallRedButton>
                      </form>
                    </StyledTd150>
                  </StyledTr>
                </tbody>
              </StyledTable>
            </div>
          </StyledCard>

          <HelpSection color="#096A09"/>  
          <Footer /> 
        </DashboardContainer> 
      </DefaultBackground>
    </>
  );
}
