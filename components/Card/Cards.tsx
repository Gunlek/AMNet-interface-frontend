import {
  StyledGreenCard,
  StyledHelpSection,
  GreenLine,
  StyledFooter,
  StyledCampusFooter} from "./style";
import { Row } from "../Container/style";
import { 
  StyledLink, 
  GreenTitle 
} from "../Text/style";
import GitHub from "../NavIcons/github";

export function HelpSection(props: { color?: string, style?: any }) {
  return (
    <StyledHelpSection style={props.style} color={props.color}>
      Besoin d'assistance ?{" "}
      <StyledLink color={props.color} href="./faq">FAQ</StyledLink>{" "}ou{" "}
      <StyledLink color={props.color} href="mailto:contact@amnet.fr">contact@amnet.fr</StyledLink>
    </StyledHelpSection>
  );
}

export function TitleCard(props: { children: string, hideLine?: boolean }){
  return(
    <Row style={{ marginBottom:"0.5rem", alignItems: "center"}}>             
      <GreenTitle >
        {props.children}
      </GreenTitle>
      <GreenLine hideLine={props.hideLine}/>
    </Row>
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

export function Footer(props: { page?: string }) {
  if(props.page == "campus"){
    return (
      <StyledCampusFooter>
        Projet développé et maintenu par Hard Win'∫ 58Li218, Squall'∫ 4Li218 et Mac Nhat'∫ 47-102Li219 &bull; Version 2.0.1 <GitHub />
      </StyledCampusFooter>
    );
  }
  else{
    return (
      <StyledFooter>
        Projet développé et maintenu par Hard Win'∫ 58Li218, Squall'∫ 4Li218 et Mac Nhat'∫ 47-102Li219 &bull; Version 2.0.1 <GitHub />
      </StyledFooter>
    );
  }
}