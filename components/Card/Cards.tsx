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
  StyledIcon
} from "./style";
import {
  Col4,
  Column,
  Row
} from "../Container/style";
import "inline-svg";
import CloseSVG from "/static/icons/faq.svg";


export function HelpSection(props: { color?: string }) {
  return (
    <StyledHelpSection color={props.color}>
      Besoin d'assistance ?{" "}
      <StyledMail color="#67bc45" href="mailto:contact@amnet.fr">contact@amnet.fr</StyledMail> !
    </StyledHelpSection>
  );
}

export function RectangleLogo(props: { color?: string }) {
  if (props.color == "blanc") {
    return (
        <img
          style={{ height: "100px", aspectRatio: "19 / 9" }}
          src="/static/logo/logoamnet2021blanc.svg"
          alt="Logo AMNet"
        />
    );
  } else {
    return (
      <img
        style={{  height: "100px", aspectRatio: "19 / 9" }}
        src="/static/logo/logoamnet2021.svg"
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
      <StyledCotisaion>
        <BlackText style={{paddingRight: "10px"}}>Cotisation :</BlackText>
        <img height={"20px"} src="/static/icons/fail.svg"/> 
      </StyledCotisaion>
    );
  }
}

export function Menu(props: {page?: string}){
  const positionning = {flex: "1", margin: "5px 0", justifyContent:"center", alignItems: "center"};
  const sizeIcon = {width: "60%"};

  return(
    <StyledMenu>
      <Column style={{height: "100%", padding:"20px 0", alignItems: "center"}}>
        <Row 
          style={{
            flex: "2", 
            alignItems: "start", 
            justifyContent:"center", 
            margin: "5px 0"}}
        >
          <a href="./homepage" style={{display: "flex", justifyContent:"center"}}>
            <img style={{width:"100%"}} src="/static/logo/logo.svg " />
          </a>
        </Row>
        
        <Row style={positionning}>
          <StyledBackIcon>
            <CloseSVG />
          </StyledBackIcon>
        </Row>
        
        <Row style={positionning}>
          <StyledBackIcon>
            <StyledIcon style={sizeIcon} src="/static/icons/user.svg" />
          </StyledBackIcon>
        </Row>
        
        <Row style={positionning}>
          <StyledBackIcon>
            <StyledIcon style={sizeIcon} src="/static/icons/faq.svg" />
          </StyledBackIcon>
        </Row>
        
        <Row style={positionning}>
          <StyledBackIcon>
            <StyledIcon style={sizeIcon} src="/static/icons/network.svg" />
          </StyledBackIcon>
        </Row>
        
        <Row style={positionning}>
          <StyledBackIcon>
            <StyledIcon style={sizeIcon} src="/static/icons/material.svg" />
          </StyledBackIcon>
        </Row>
        
        <Row style={positionning}>
          <StyledBackIcon>
            <StyledIcon style={sizeIcon} src="/static/icons/gadzflix.svg" />
          </StyledBackIcon>
        </Row>
        
        <Row style={positionning}>
          <StyledBackIcon>
            <StyledIcon style={sizeIcon} src="/static/icons/setting.svg" />
          </StyledBackIcon>
        </Row>

        <Row 
          style={{
            flex: "2", 
            alignItems: "end", 
            justifyContent:"center", 
            margin: "5px 0", 
            width:"60px"
          }}
        >
          <img style={sizeIcon} src="/static/icons/log_out.svg" />
        </Row>
      </Column>
    </StyledMenu>
  )
}