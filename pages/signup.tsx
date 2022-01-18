import React from "react";
import Head from "next/head";
import { CampusBackground } from "../components/Background/style";
import { GreenButton } from "../components/Button/Buttons";
import {
  Footer,
  HelpSection,
  RectangleLogo,
  TitleCard
} from "../components/Card/Cards";
import {StyledCardCampus} from "../components/Card/style";
import {
  Col6,
  Col3,
  Row,
  ResponsiveRow,
  Column,
} from "../components/Container/style";
import { 
  StyledInput, 
  StyledSelect, 
  StyledCheckbox 
} from "../components/Input/style";
import { 
  BlackTitle, 
  GreenText, 
  BlackText, 
  StyledLink
} from "../components/Text/style";
import useMediaQuery from "../components/MediaQueries/MediaQuery";



export default function Homepage() {
  const minWidth1000 = useMediaQuery('(min-width:1000px)');
  return (
    <>
    
      <Head>
        <title>Inscirption &bull; AMNet</title>
      </Head>
      <CampusBackground>
        <Row 
          style={{
            flex:1, 
            justifyContent:"center", 
            alignItems:"center"
          }}
        >
          <StyledCardCampus 
            width="75%" 
            height="auto" 
            style={{marginBottom:"20px"}}
          >
            <Row style={{marginBottom:"20px", marginTop:"10px", justifyContent:"center"}}>
              <RectangleLogo height={minWidth1000 ? "125px" : "100px"}/>
            </Row>

            <Row style={{width: "100%", marginBottom: "20px"}}>
              <TitleCard>
                Inscription
              </TitleCard>
            </Row>

            <form method="post">
              <ResponsiveRow style={{alignItems:"center", marginBottom:"20px"}}>
                <Col6 style={{paddingRight: minWidth1000 ? "10px" : "0px", width:"100%"}}>
                  <GreenText style={{marginBottom:"5px", paddingLeft:"5px"}}>Nom d'utilisateur</GreenText>
                  <StyledInput type="text"/>
                </Col6> 
                <Col6 
                  style={{
                    justifyContent: "end", 
                    height: minWidth1000 ? "75px" : "auto", 
                    alignItems:  minWidth1000 ? "start" : "center", 
                    marginTop: minWidth1000 ? "0" : "20px",
                    paddingLeft: minWidth1000 ? "10px" : "0",
                  }}
                >
                  <BlackText>Votre nom d'utilisateur ne doit contenir 
                    que des lettres, des chiffres ou des espaces.
                  </BlackText>
                </Col6>
              </ResponsiveRow>

              <ResponsiveRow style={{marginBottom:"20px"}}>
                <Col3 style={{paddingRight: minWidth1000 ? "10px" : "0", marginBottom: minWidth1000 ? "0" : "20px"}}>
                  <GreenText style={{marginBottom:"5px", paddingLeft:"5px"}}>Prénom</GreenText>
                  <StyledInput type="text"/>
                </Col3>
                <Col3 style={{paddingLeft: minWidth1000 ? "10px" : "0", paddingRight: minWidth1000 ? "10px" : "0", marginBottom: minWidth1000 ? "0" : "20px"}}>
                  <GreenText style={{marginBottom:"5px", paddingLeft:"5px"}}>Nom</GreenText>
                  <StyledInput type="text"/>
                </Col3>
                <Col6 style={{paddingLeft: minWidth1000 ? "10px" : "0"}}>
                  <GreenText style={{marginBottom:"5px", paddingLeft:"5px"}}>Adresse e-mail</GreenText>
                  <StyledInput type="email"/>
                </Col6>
              </ResponsiveRow>

              <ResponsiveRow style={{marginBottom:"20px"}}>
                <Col6 style={{paddingRight: minWidth1000 ? "10px" : "0", marginBottom: minWidth1000 ? "0" : "20px"}}>
                  <GreenText style={{marginBottom:"5px", paddingLeft:"5px"}}>Téléphone</GreenText>
                  <StyledInput type="phone"/>
                </Col6>
                <Col6 style={{paddingLeft: minWidth1000 ? "10px" : "0"}}>
                  <GreenText style={{marginBottom:"5px", paddingLeft:"5px"}}>Promotion</GreenText>
                  <StyledSelect name="user_proms_select" id="user_proms_select">
                    <option value="219">219</option>
                    <option value="220">220</option>
                    <option value="2021" selected>2021</option>
                    <option value="autre">Autre</option>
                  </StyledSelect>
                </Col6>
              </ResponsiveRow>

              <ResponsiveRow style={{marginBottom:"20px"}}>
                <Col6 style={{paddingRight: minWidth1000 ? "10px" : "0", marginBottom: minWidth1000 ? "0" : "20px"}}>
                  <GreenText style={{marginBottom:"5px", paddingLeft:"5px"}}>Bucque</GreenText>
                  <StyledInput type="text"/>
                </Col6>
                <Col3 style={{paddingLeft: minWidth1000 ? "10px" : "0", paddingRight: minWidth1000 ? "10px" : "0", marginBottom: minWidth1000 ? "0" : "20px"}}>
                  <GreenText style={{marginBottom:"5px", paddingLeft:"5px"}}>Fam's</GreenText>
                  <StyledInput type="text"/>
                </Col3>
                <Col3 style={{paddingLeft: minWidth1000 ? "10px" : "0"}}>
                  <GreenText style={{marginBottom:"5px", paddingLeft:"5px"}}>Tabagn's</GreenText>
                  <StyledSelect name="tbk">
                    <option value="li">Birse</option>
                    <option value="an">Boquette</option>
                    <option value="bo">Bordel's</option>
                    <option value="ch">Chalon's</option>
                    <option value="cl">Clun's</option>
                    <option value="kin">KIN</option>
                    <option value="pa">P3</option>
                    <option value="me">Siber's</option>
                  </StyledSelect>
                </Col3>
              </ResponsiveRow>

              <ResponsiveRow style={{marginBottom:"20px"}}>
                <Col6 style={{paddingRight: minWidth1000 ? "10px" : "0",  marginBottom: minWidth1000 ? "0" : "20px"}}>
                  <GreenText style={{marginBottom:"5px", paddingLeft:"5px"}}>Mot de passe</GreenText>
                  <StyledInput type="password"/>
                </Col6>
                <Col6 style={{paddingLeft: minWidth1000 ? "10px" : "0"}}>
                  <GreenText style={{marginBottom:"5px", paddingLeft:"5px"}}>Confirmez votre Mot de passe</GreenText>
                  <StyledInput type="password"/>
                </Col6>
              </ResponsiveRow>

              <ResponsiveRow style={{alignItems:"start"}} >
                <BlackText>
                  <GreenText>Réglementation</GreenText>
                  <p style={{marginTop:"5px"}}>
                    Consultez <StyledLink color= "#096a09" target="_blank" href="/static/docs/Statuts_AMNet.pdf">les Statuts de l'association</StyledLink>
                    <br/>    
                    Consultez <StyledLink color= "#096a09" target="_blank" href="/static/docs/Reglement_Interieur_AMNet.pdf">le Règlement intérieur de l'association</StyledLink>
                    <br/>
                    <br/>
                    AMNet Birse est une association Loi 1901, vous devez en accepter les statuts et le réglement intérieur. La validation de ce formulaire et le réglement de la cotisation vaut pour adhésion à l'association.
                  </p>
                </BlackText>
              </ResponsiveRow>

              <ResponsiveRow style={{marginBottom:"20px", alignItems: "start"}}>
                <Col6 
                  style=
                  {{
                    flexDirection:"row", 
                    justifyContent:"center", 
                    alignItems: "center",
                    marginBottom: minWidth1000 ? "0" : "10px"
                  }}
                >
                  <StyledCheckbox type="radio" name="accept_rules"/>
                  <BlackText style={{paddingLeft:"10px"}}>Accepter les statuts et le réglement interieur</BlackText>
                </Col6>
                <Col6 
                  style=
                    {{
                      flexDirection:"row", 
                      justifyContent:"center", 
                      alignItems: "center"
                    }}
                >
                  <StyledCheckbox type="radio" defaultChecked name="accept_rules" />
                  <BlackText style={{paddingLeft:"10px"}}>Refuser les statuts et le réglement interieur</BlackText>
                </Col6>
              </ResponsiveRow>

              <Row style={{justifyContent:"center"}}>
                <GreenButton>Inscription</GreenButton>
              </Row>
            </form>
          </StyledCardCampus>
        </Row>

        <Column style={{width:"111.1%"}}>
          <HelpSection/>
          <Footer page="campus"/>
        </Column>
      </CampusBackground>
    </>
  );
}
