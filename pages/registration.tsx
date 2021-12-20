import React from "react";
import Head from "next/head";
import { CampusBackground } from "../components/Background/style";
import {
  HelpSection,
  RectangleLogo,
  TitleCard
} from "../components/Card/Cards";
import { GreenButton } from "../components/Button/Buttons";
import {
  GreenText,
  StyledCard,
  StyledInput,
  StyledCheckbox,
  BlackText,
  BlackTitle,
  StyledSelect
} from "../components/Card/style";
import {
  Col2,
  Col6,
  Col8,
  Col3,
  Row,
  Column,
} from "../components/Container/style";

export default function Homepage() {
  return (
    <>
      <Head>
        <title>Inscirption &bull; AMNet</title>
      </Head>
      <CampusBackground  
        style=
          {{
            justifyContent:"space-between", 
            paddingTop: "30px"
          }}
      >
          <Row 
            style=
              {{
                flex: "10", 
                justifyContent:"center", 
                alignItems:"center"
              }}
            >
            <StyledCard 
              width="70%" 
              height="auto" 
              padding="20px"
            >
              <Row style={{justifyContent:"center"}}>
                <RectangleLogo/>
              </Row>

              <Row style={{justifyContent:"center"}}>
                <BlackTitle>
                  Espace AMNet
                </BlackTitle>
              </Row>

              <Row style={{width: "100%", padddingBottom: "20px"}}>
                <TitleCard>
                  Inscription
                </TitleCard>
              </Row>

              <form method="post">
                <Row style={{alignItems:"center", paddingBottom:"20px"}}>
                  <Col6 style={{marginRight:"20px"}}>
                    <GreenText style={{paddingBottom:"5px"}}>Nom d'utilisateur</GreenText>
                    <StyledInput type="text"/>
                  </Col6>
                  <Col6>
                    <BlackText>Votre nom d'utilisateur ne doit contenir 
                      que des lettres, des chiffres ou des espaces.
                    </BlackText>
                  </Col6>
                </Row>

                <Row style={{paddingBottom:"20px"}}>
                  <Col3 style={{paddingRight:"-20px"}}>
                    <GreenText style={{paddingBottom:"5px"}}>Prénom</GreenText>
                    <StyledInput type="text"/>
                  </Col3>
                  <Col3 style={{marginRight:"20px"}}>
                    <GreenText style={{paddingBottom:"5px"}}>Nom</GreenText>
                    <StyledInput type="text"/>
                  </Col3>
                  <Col6>
                    <GreenText style={{paddingBottom:"5px"}}>Adresse e-mail</GreenText>
                    <StyledInput type="email"/>
                  </Col6>
                </Row>

                <Row style={{paddingBottom:"20px"}}>
                  <Col6 style={{marginRight:"20px"}}>
                    <GreenText style={{paddingBottom:"5px"}}>Téléphone</GreenText>
                    <StyledInput type="phone"/>
                  </Col6>
                  <Col6>
                    <GreenText style={{paddingBottom:"5px"}}>Promotion</GreenText>
                    <StyledSelect name="user_proms_select" id="user_proms_select">
                      <option value="219">219</option>
                      <option value="220">220</option>
                      <option value="221" selected>220+1</option>
                      <option value="autre">Autre</option>
                    </StyledSelect>
                  </Col6>
                </Row>

                <Row style={{paddingBottom:"20px"}}>
                  <Col6 style={{marginRight:"20px"}}>
                    <GreenText style={{paddingBottom:"5px"}}>Bucque</GreenText>
                    <StyledInput type="text"/>
                  </Col6>
                  <Col3>
                    <GreenText style={{paddingBottom:"5px"}}>Fam's</GreenText>
                    <StyledInput type="text"/>
                  </Col3>
                  <Col3>
                    <GreenText style={{paddingBottom:"5px"}}>Tabagn's</GreenText>
                    <StyledSelect name="tbk">
                        <option value="li" selected>Birse</option>
                        <option value="kin">KIN</option>
                        <option value="an">Boquette</option>
                        <option value="me">Siber'ss</option>
                        <option value="pa">P3</option>
                        <option value="bo">Bordel'ss</option>
                        <option value="cl">Clun'ss</option>
                        <option value="ch">Chalon'ss</option>
                    </StyledSelect>
                  </Col3>
                </Row>

                <Row style={{paddingBottom:"20px"}}>
                  <Col6 style={{marginRight:"20px"}}>
                    <GreenText style={{paddingBottom:"5px"}}>Mot de passe</GreenText>
                    <StyledInput type="password"/>
                  </Col6>
                  <Col6>
                    <GreenText style={{paddingBottom:"5px"}}>Confirmez votre Mot de passe</GreenText>
                    <StyledInput type="password"/>
                  </Col6>
                </Row>

                <Column style={{alignItems:"start"}} >
                  <BlackText>
                    <GreenText>Réglementation</GreenText>
                    <p>
                      Consulter les statuts de l'assocation : 
                      {" "}<a style={{ color: "#096A09" }} href="/static/docs/Reglement_Interieur_AMNet.pdf">Statuts de l'association</a>
                      <br/>    
                      Consultez le règlement intérieur de l'assocation : 
                      {" "}<a style={{ color: "#096A09" }} href="/static/docs/Statuts_AMNet.pdf">Règlement intérieur de l'association</a>
                      <br/><br/>
                      AMNet Birse est une association Loi 1901, vous devez en accepter les statuts et le réglement intérieur. La validation de ce formulaire et le réglement de la cotisation vaut pour adhésion à l'association.
                    </p>
                  </BlackText>
                </Column>

                <Row style={{paddingBottom:"20px"}}>
                  <Col6 
                    style=
                    {{
                      flexDirection:"row", 
                      justifyContent:"center", 
                      alignItems: "center"
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
                    <StyledCheckbox type="radio" checked name="accept_rules" />
                    <BlackText style={{paddingLeft:"10px"}}>Refuser les statuts et le réglement interieur</BlackText>
                  </Col6>
                </Row>

                <Row style={{justifyContent:"center"}}>
                  <GreenButton>Inscription</GreenButton>
                </Row>
              </form>
            </StyledCard> 
          </Row>

          <Row style={{flex: "1",}}><HelpSection /></Row>
      </CampusBackground>
    </>
  );
}
