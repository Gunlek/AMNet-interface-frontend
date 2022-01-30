import React, { useState } from "react";
import Head from "next/head";
import { DefaultBackground } from "../../components/Background/style";
import {GreenButton} from "../../components/Button/Buttons";
import { 
  Col6,
  Col3,
  Column,
  DashboardContainer,
  ResponsiveRow
} from "../../components/Container/style";
import { Footer, HelpSection } from "../../components/Card/Cards"
import { StyledInput, StyledSelect } from "../../components/Input/style";
import UserMenu  from "../../components/Menu/UserMenu";
import { StateContribution } from "../../components/Status/Status";
import { 
  BlackTitle,
  GreenText, 
  BlackText 
} from "../../components/Text/style";
import useMediaQuery from "../../components/MediaQueries/MediaQuery";


export default function Profil() {
  const minWidth1000 = useMediaQuery('(min-width:1000px)');
  var [isGadz, setGadz] = useState(false);
  var [isOther, setOther] = useState(false);


  const handleValueChange = (elmt) => {
    setGadz(elmt.target.value == "219" || elmt.target.value == "220");
    setOther(elmt.target.value == "other");
  }
  return (
    <>
      <Head>
        <title>Mon Profil &bull; AMNet</title>
      </Head>
      <DefaultBackground>
        <UserMenu page="profil" />

        <DashboardContainer>
          <ResponsiveRow style={{ margin: minWidth1000 ? "1% 0" : "4% 0", justifyContent: minWidth1000 ? "start" : "center" }}>
            <Column style={{justifyContent: "center"}}>
              <BlackTitle>Editer mon Profil</BlackTitle>
            </Column>
            
            <Column style={{ flex: "1", alignItems: minWidth1000 ? "end" : "center", justifyContent: "center"}}>
              <StateContribution status="unpaid"/>
            </Column>
          </ResponsiveRow>

          <form style={{width: "100%", flex:"1", display:"flex", flexDirection:"column"}} method="post">
            <ResponsiveRow style={{alignItems:"center", marginBottom:"20px"}}>
              <Col6 style={{paddingRight: minWidth1000 ? "10px" : "0px", width:"100%"}}>
                <GreenText style={{marginBottom: "5px"}}>Nom d'utilisateur</GreenText>
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
                <GreenText style={{marginBottom: "5px"}}>Prénom</GreenText>
                <StyledInput type="text"/>
              </Col3>
              <Col3 
                style={{
                  paddingLeft: minWidth1000 ? "10px" : "0", 
                  paddingRight: minWidth1000 ? "10px" : "0", 
                  marginBottom: minWidth1000 ? "0" : "20px"
                }}
              >
                <GreenText style={{marginBottom: "5px"}}>Nom</GreenText>
                <StyledInput type="text"/>
              </Col3>
              <Col6 style={{paddingLeft: minWidth1000 ? "10px" : "0"}}>
                <GreenText style={{marginBottom: "5px"}}>Adresse e-mail</GreenText>
                <StyledInput type="email"/>
              </Col6>
            </ResponsiveRow>

            <ResponsiveRow style={{marginBottom:"20px"}}>
              <Col6 style={{paddingRight: minWidth1000 ? "10px" : "0", marginBottom: minWidth1000 ? "0" : "20px"}}>
                <GreenText style={{marginBottom: "5px"}}>Téléphone</GreenText>
                <StyledInput type="phone"/>
              </Col6>
              <Col6 style={{paddingLeft: minWidth1000 ? "10px" : "0"}}>
                <GreenText style={{marginBottom: "5px"}}>Promotion</GreenText>
                <StyledSelect style={{display: isOther? "none" : "inline"}} onChange={handleValueChange}>
                  <option value="219">219</option>
                  <option value="220">220</option>
                  <option value="2021" selected>2021</option>
                  <option value="other">Autre</option>
                </StyledSelect>
                <StyledInput 
                    ref={
                      PromotionInput => {
                        if (PromotionInput && isOther){
                          PromotionInput.focus();
                        }
                      }
                    } 
                    style={{display: isOther? "inline" : "none"}} 
                    type="text" 
                  />
              </Col6>
            </ResponsiveRow>

            <ResponsiveRow style={{marginBottom:"20px", display: isGadz? "flex": "none"}}>
              <Col6 style={{paddingRight: minWidth1000 ? "10px" : "0", marginBottom: minWidth1000 ? "0" : "20px"}}>
                <GreenText style={{marginBottom: "5px"}}>Bucque</GreenText>
                <StyledInput type="text"/>
              </Col6>
              <Col3 
                style={{
                  paddingLeft: minWidth1000 ? "10px" : "0", 
                  paddingRight: minWidth1000 ? "10px" : "0", 
                  marginBottom: minWidth1000 ? "0" : "20px"
                }}
              >
                <GreenText style={{marginBottom: "5px"}}>Fam's</GreenText>
                <StyledInput type="text"/>
              </Col3>
              <Col3 style={{paddingLeft: minWidth1000 ? "10px" : "0"}}>
                <GreenText style={{marginBottom: "5px"}}>Tabagn's</GreenText>
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
                <GreenText style={{marginBottom: "5px"}}>Mot de passe</GreenText>
                <StyledInput type="password"/>
              </Col6>
              <Col6 style={{paddingLeft: minWidth1000 ? "10px" : "0"}}>
                <GreenText style={{marginBottom: "5px"}}>Confirmez votre Mot de passe</GreenText>
                <StyledInput type="password"/>
              </Col6>
            </ResponsiveRow>

            <ResponsiveRow style={{marginBottom: "20px", flex:"1"}}>
              <Col6 
                style={{
                  paddingRight: minWidth1000 ? "10px" : "0", 
                  marginBottom: minWidth1000 ? "0" : "20px", 
                  display: isGadz? "flex": "none"
                }}
              >
                <GreenText style={{marginBottom: "5px"}}>Identifiants gadzariques</GreenText>
                <StyledInput readonly type="text"/>
              </Col6>
              <Col6 
                style={{
                  alignItems: minWidth1000 ? "end" : "center", 
                  paddingLeft: minWidth1000 ? "10px" : "0", 
                  justifyContent: "end", 
                  maxWidth: isGadz? "50%": "100%"
                }}
              >
                <GreenButton>Editer mon profil</GreenButton>
              </Col6>
            </ResponsiveRow>     
          </form>   
 
          <HelpSection color="#096A09"/>
          <Footer />
        </DashboardContainer>
      </DefaultBackground>
    </>
  );
}
