import React from "react";
import Head from "next/head";
import { DefaultBackground } from "../../components/Background/style";
import {GreenButton} from "../../components/Button/Buttons";
import { 
  Row, 
  Col6,
  Col3,
  Column,
  DashboardContainer
} from "../../components/Container/style";
import { HelpSection } from "../../components/Card/Cards"
import { StyledInput, StyledSelect } from "../../components/Input/style";
import { Menu } from "../../components/Menu/Menus";
import { StateContribution } from "../../components/State/States";
import { 
  BlackTitle,
  GreenText, 
  BlackText 
} from "../../components/Text/style";


export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Mon Profil &bull; AMNet</title>
      </Head>
      <DefaultBackground>
        <Menu page="profil" />

        <DashboardContainer>
          <Row style={{ margin:"1% 0"}}>
            <Column style={{justifyContent: "center"}}>
              <BlackTitle>Editer mon profil</BlackTitle>
            </Column>
            
            <Column style={{ flex: "1", alignItems: "end", justifyContent: "center"}}>
              <StateContribution status="unpaid"/>
            </Column>
          </Row>

          <Row style={{flex: "10", marginBottom:"1%"}}>
            <form style={{width: "100%"}} method="post">
              <Row style={{alignItems:"center", marginBottom:"20px"}}>
                <Col6 style={{paddingRight: "20px"}}>
                  <GreenText style={{marginBottom:"5px"}}>Nom d'utilisateur</GreenText>
                  <StyledInput type="text"/>
                </Col6>
                <Col6 style={{justifyContent: "end", height: "74px"}}>
                  <BlackText>Votre nom d'utilisateur ne doit contenir 
                    que des lettres, des chiffres ou des espaces.
                  </BlackText>
                </Col6>
              </Row>

              <Row style={{marginBottom:"20px"}}>
                <Col3 style={{paddingRight: "10px"}}>
                  <GreenText style={{marginBottom:"5px"}}>Prénom</GreenText>
                  <StyledInput type="text"/>
                </Col3>
                <Col3 style={{paddingLeft: "10px", paddingRight: "20px"}}>
                  <GreenText style={{marginBottom:"5px"}}>Nom</GreenText>
                  <StyledInput type="text"/>
                </Col3>
                <Col6>
                  <GreenText style={{marginBottom:"5px"}}>Adresse e-mail</GreenText>
                  <StyledInput type="email"/>
                </Col6>
              </Row>

              <Row style={{marginBottom:"20px"}}>
                <Col6 style={{paddingRight: "20px"}}>
                  <GreenText style={{marginBottom:"5px"}}>Téléphone</GreenText>
                  <StyledInput type="phone"/>
                </Col6>
                <Col6>
                  <GreenText style={{marginBottom:"5px"}}>Promotion</GreenText>
                  <StyledSelect name="user_proms_select" id="user_proms_select">
                    <option value="219">219</option>
                    <option value="220">220</option>
                    <option value="2021" selected>2021</option>
                    <option value="autre">Autre</option>
                  </StyledSelect>
                </Col6>
              </Row>

              <Row style={{marginBottom:"20px"}}>
                <Col6 style={{paddingRight: "20px"}}>
                  <GreenText style={{marginBottom:"5px"}}>Bucque</GreenText>
                  <StyledInput type="text"/>
                </Col6>
                <Col3 style={{paddingRight: "10px"}}>
                  <GreenText style={{marginBottom:"5px"}}>Fam's</GreenText>
                  <StyledInput type="text"/>
                </Col3>
                <Col3 style={{paddingLeft: "10px"}}>
                  <GreenText style={{marginBottom:"5px"}}>Tabagn's</GreenText>
                  <StyledSelect name="tbk">
                      <option value="li" selected>Birse</option>
                      <option value="an">Boquette</option>
                      <option value="bo">Bordel's</option>
                      <option value="ch">Chalon's</option>
                      <option value="cl">Clun's</option>
                      <option value="kin">KIN</option>
                      <option value="pa">P3</option>
                      <option value="me">Siber's</option>
                  </StyledSelect>
                </Col3>
              </Row>

              <Row style={{marginBottom:"20px"}}>
                <Col6 style={{paddingRight: "20px"}}>
                  <GreenText style={{marginBottom:"5px"}}>Mot de passe</GreenText>
                  <StyledInput type="password"/>
                </Col6>
                <Col6>
                  <GreenText style={{marginBottom:"5px"}}>Confirmez votre Mot de passe</GreenText>
                  <StyledInput type="password"/>
                </Col6>
              </Row>           

              <Row>
                <Col6 style={{paddingRight: "20px"}}>
                  <GreenText style={{marginBottom:"5px"}}>Identifiants gadzariques</GreenText>
                  <StyledInput type="text"/>
                </Col6>
                <Col6 style={{alignItems: "end", justifyContent: "end"}}>
                  <GreenButton>Editer mon profil</GreenButton>
                </Col6>
              </Row>
            </form>
          </Row>
          
          <Row>
            <HelpSection color="#096A09"/>
          </Row>   
        </DashboardContainer>
      </DefaultBackground>
    </>
  );
}
