import {
  StyledTeamPicture,
  StyledGreenCard,
  StyledHelpSection,
  GreenLine,
  StyledFooter,
  StyledCampusFooter,
  StyledCardCampus
} from "./style";
import { Column, Row } from "../Container/style";
import { 
  GreenText, 
  BlackText, 
  StyledLink, 
  GreenTitle 
} from "../Text/style";
import GitHub from "../SVG/github";
import useMediaQuery from "../MediaQueries/MediaQuery";

export function HelpSection(props: { color?: string }) {
  return (
    <StyledHelpSection color={props.color}>
      Besoin d'assistance ?{" "}
      <StyledLink href="mailto:contact@amnet.fr">contact@amnet.fr</StyledLink> !
    </StyledHelpSection>
  );
}

export function RectangleLogo(props: { color?: string, height?: string }) {
  const height = {
    height:  props.height ? props.height : "100px",
    aspectRatio: "19 / 8.5"
  };

  const minWidth1000 = useMediaQuery('(min-width:1000px)');

  if (props.color == 'blanc') {
    return (
      <a target="_blank" href="https://www.google.com/search?q=the+answer+to+life%2C+the+universe+and+everything&amp;sxsrf=AOaemvKRvpra0jq__iVMCWg_q7g361ifag%3A1641475979658&amp;ei=i-_WYcjSJ82PlwTJ4o3IAw&amp;ved=0ahUKEwiIxLLFnp31AhXNx4UKHUlxAzkQ4dUDCA4&amp;uact=5&amp;oq=the+answer+to+life%2C+the+universe+and+everything&amp;gs_lcp=Cgdnd3Mtd2l6EAMyBAgAEEMyBggAEAcQHjIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB46BQgAEMsBSgQIQRgASgQIRhgAUABY5xhgkCNoAHACeACAAXKIAZUCkgEDMy4xmAEAoAECoAEBwAEB&amp;sclient=gws-wiz" 
        style={{ 
          width: minWidth1000? "auto": "80%",
          marginTop: minWidth1000? "0": "4%", 
          height: minWidth1000? "100px": "auto", 
          cursor: "auto" 
        }}
      >
        <img
          style={{ 
            width: minWidth1000? "auto": "100%", 
            height: minWidth1000? "100px": "auto", 
            aspectRatio: "19 / 8.5" }}
          src="/static/logo/white_logo.svg"
          alt="Logo AMNet"
        />
      </a>
    );
  } else {
    return (
      <a href="../" style={height}>
        <img
        style={height}
        src="/static/logo/logo.svg"
        alt="Logo AMNet"
      />
      </a>
    );
  }
}

export function TitleCard(props: { children: string }){
  return(
    <div style={{width:"100%", display:"flex"}}>             
      <GreenTitle>
        {props.children}
      </GreenTitle>
      <Row style={{ flex: "1", alignItems: "center" }}>
        <GreenLine />
      </Row>  
    </div>
  );
}

export function GreenCard(props: { promotion: string }) {
  var year = Number(props.promotion) + 1801;
  return (
    <StyledGreenCard>
      La Team qui gère l’AMNet pour l’année {year.toString()}-
      {(year + 1).toString()}
    </StyledGreenCard>
  );
}

export function TeamPicture(props: { promotion: string, names: string, nums: string}) {
  var separator = /\s*(;|$)\s*/;
  var names = props.names.split(separator);
  var nums = props.nums.split(separator);
  var size = Math.round(names.length / 2);

  const Flex = {
    flex: (12 / size).toString(),
    alignItems: "center",
    textAlign: "center"
  };

  let Team = [];
  var i = 0;
  
  for (var pas = 0; pas < size; pas++){
    Team.push(
      <Column style={Flex}>
        <BlackText>
          {names[i]}
        </BlackText>
        <GreenText>
          {nums[i]}
        </GreenText>
      </Column>
    )
    i = i+2;
  }

  return (
    <StyledTeamPicture style={{ paddingTop:"15px", justifyContent:"space-between" }}>
      <GreenCard promotion={props.promotion}/>
      <StyledCardCampus style={{ alignItems:"center", flexDirection: "row" }}>
        {Team}
      </StyledCardCampus> 
    </StyledTeamPicture>
  );
}

export function Footer(props: { page?: string }) {
  if(props.page == "campus"){
    return (
      <StyledCampusFooter>
        Projet développé et maintenu par Hard Win's 58Li218, Squall's 4Li218 et Mac Nhat's 47-102Li219 &bull; Version 2.0.1 <GitHub />
      </StyledCampusFooter>
    );
  }
  else{
    return (
      <StyledFooter>
        Projet développé et maintenu par Hard Win's 58Li218, Squall's 4Li218 et Mac Nhat's 47-102Li219 &bull; Version 2.0.1 <GitHub />
      </StyledFooter>
    );
  }
}
