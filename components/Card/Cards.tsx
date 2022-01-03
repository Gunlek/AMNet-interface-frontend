import React from "react";
import {
  StyledTeamPicture,
  StyledGreenCard,
  StyledCard,
  GreenText,
  BlackText,
  StyledHelpSection,
  GreenLine,
  StyledCotisaion,
  StyledMenu, 
  StyledMail,
  StyledBackIcon,
} from "./style";
import {
  Col4,
  Column,
  Row
} from "../Container/style";
import {GreenButton} from "../../components/Button/Buttons";
import {SVGHome} from "../SVG/home";
import {SVGProfil} from "../SVG/profil";
import {SVGFaq} from "../SVG/faq";
import {SVGIoT} from "../SVG/network";
import {SVGMaterial} from "../SVG/material";
import {SVGGadzflix} from "../SVG/gadzflix";
import {SVGSettings} from "../SVG/settings";
import {SVGUsers} from "../SVG/users";
import {SVGLogOut} from "../SVG/log_out"

export function HelpSection(props: { color?: string }) {
  return (
    <StyledHelpSection color={props.color}>
      Besoin d'assistance ?{" "}
      <StyledMail color="#67bc45" href="mailto:contact@amnet.fr">contact@amnet.fr</StyledMail> !
    </StyledHelpSection>
  );
}

export function RectangleLogo(props: { color?: string }) {
  if (props.color == 'blanc') {
    return (
        <img
          style={{ height: "100px", aspectRatio: "19 / 9" }}
          src="/static/logo/white_logo.svg"
          alt="Logo AMNet"
        />
    );
  } else {
    return (
      <img
        style={{  height: "100px", aspectRatio: "19 / 9" }}
        src="/static/logo/logo.svg"
        alt="Logo AMNet"
      />
    );
  }
}

export function TitleCard(props: { children: string }){
  return(
    <div 
      style={{width:"100%"  }}
    >             
      <GreenText 
        style=
        {{
          float:"left", 
          paddingRight: "10px", 
          fontSize: "1.8em" 
        }}
      >
        {props.children}
      </GreenText>
      <div 
        style=
        {{
          overflow:"hidden", 
          width:"auto",
          display: "flex",
          alignItems: "center",
          height:"100%",
        }}
      >
        <GreenLine />
      </div>  
    </div>
  );
}

export function GreenCard(props: { year: string }) {
  var year = Number(props.year) + 1800;
  return (
    <StyledGreenCard>
      La Team qui gère l’AMNet pour l’année {year.toString()}-
      {(year + 1).toString()}
    </StyledGreenCard>
  );
}

export function TeamPicture(props: { names?: string; nums?: string }) {
  var separator = /\s*(;|$)\s*/;
  var names = props.names.split(separator);
  var nums = props.nums.split(separator);
  var size = Math.round(names.length / 2);

  return (
    <StyledTeamPicture
      style=
      {{ 
        aspectRatio: "16/8", 
        maxHeight: "50vh", 
        justifyContent:"end"
      }}
    >
      <Column 
        style=
        {{ 
          width:"100%", 
          height:"96%", 
          justifyContent:"space-between"
        }}
      >
      <GreenCard year="221"/>
      <StyledCard width="100%" radius="30px" height="90px" padding="10px 0" style={{display: "flex", alignItems:"center"}}>
        <Row>
          <Col4>
            <Column style={{ alignItems: "center" }}>
              <BlackText>Trobotyk'ss (ML)°</BlackText>
              <GreenText>47Li220</GreenText>
            </Column>
          </Col4>
          <Col4>
            <Column style={{ alignItems: "center" }}>
              <BlackText>Sdoosh</BlackText>
              <GreenText>96Li220</GreenText>
            </Column>
          </Col4>
          <Col4>
            <Column style={{ alignItems: "center" }}>
              <BlackText>Nem'O</BlackText>
              <GreenText>74Li220</GreenText>
            </Column>
          </Col4>
        </Row>
      </StyledCard>
      </Column>
    </StyledTeamPicture>
  );
}

export function ContributionStatus(props: {status: string}){
  if(props.status == 'paid')
  {
    return(
      <StyledCotisaion>
        <BlackText style={{paddingRight: "10px"}}>Cotisation :</BlackText>
        <img style={{height: "20px"}} src="/static/icons/succes.svg"/> 
      </StyledCotisaion>
    );
  }
  else(props.status == 'unpaid')
  {
    return(
      <div style={{display:"flex"}}>
        <StyledCotisaion style={{marginRight: "15px"}}>
          <BlackText style={{paddingRight: "10px"}}>Cotisation :</BlackText>
          <img style={{height: "20px"}} src="/static/icons/fail.svg"/> 
        </StyledCotisaion>
        <GreenButton width="175px" height="50px">La payer</GreenButton>
      </div>
      
    );
  }
}

export function Menu(props: {page?: string}){
  const positionning = {
    flex: "1", 
    margin: "5px 0", 
    justifyContent:"center", 
    alignItems: "center"
  };
  return(
    <StyledMenu style={{}}>
      <Column 
        style={{
          height: "100%", 
          paddingTop:"20px",
          paddingBottom:"10px", 
          alignItems: "center",
        }}
      >
        <Row 
          style={{
            flex: "1", 
            alignItems: "start", 
            justifyContent:"center", 
            marginTop: "5px", 
            marginBottom: "20px",
          }}
        >
          <a href="./homepage" style={{display: "flex", justifyContent:"center"}}>
            <img style={{width:"90%"}} src="/static/logo/small_logo.svg" />
          </a>
        </Row>
        
        <Row style={positionning}>
           <SVGHome page={props.page}/>
        </Row>
        
        <Row style={positionning}>
            <SVGProfil page={props.page}/>
        </Row>
        
        <Row style={positionning}>
            <SVGFaq page={props.page}/>
        </Row>
        
        <Row style={positionning}>
            <SVGIoT page={props.page}/>
        </Row>
        
        <Row style={positionning}>
            <SVGMaterial page={props.page}/>
        </Row>
        
        <Row style={positionning}>
            <SVGGadzflix/>
        </Row>
        
        <Row style={positionning}>
            <SVGSettings page={props.page}/>        
        </Row>

        <Row 
          style={{
            flex: "2", 
            alignItems: "end", 
            justifyContent:"center", 
            marginTop: "10px", 
            width:"60px"
          }}
        >
          <SVGLogOut />
        </Row>
      </Column>
    </StyledMenu>
  )
}

export function AdminMenu(props: {page?: string}){
  const positionning = {
    flex: "1", 
    margin: "5px 0", 
    justifyContent:"center", 
    alignItems: "center"
  };
  return(
    <StyledMenu>
      <Column 
        style={{
          height: "100%", 
          paddingTop:"20px",
          paddingBottom:"10px", 
          alignItems: "center"
        }}
      >
        <Row 
          style={{
            flex: "1", 
            alignItems: "start", 
            justifyContent:"center", 
            marginTop: "5px", 
            marginBottom: "20px"}}
        >
          <a href="./homepage" style={{display: "flex", justifyContent:"center"}}>
            <img style={{width:"90%"}} src="/static/logo/small_logo.svg" />
          </a>
        </Row>
        
        <Row style={positionning}>
            <SVGSettings page={props.page}/>        
        </Row>
        
        <Row style={positionning}>
            <SVGUsers page={props.page}/>
        </Row>
        
        <Row style={positionning}>
            <SVGIoT page={props.page}/>
        </Row>
        
        <Row style={positionning}>
            <SVGMaterial page={props.page}/>
        </Row>

        <Row style={positionning}>
            <SVGMaterial page={props.page}/>
        </Row>

        <Row style={positionning}>
           <SVGHome page={props.page}/>
        </Row>
        
        <Row 
          style={{
            flex: "3", 
            alignItems: "end", 
            justifyContent:"center", 
            width:"60px",
            paddingTop: "20px"
          }}
        >
          <SVGLogOut />
        </Row>
      </Column>
    </StyledMenu>
  )
}