import {
  StyledGreenCard,
  StyledHelpSection,
  GreenLine,
  StyledFooter,
  StyledCampusFooter
} from "./style";
import { Row } from "../Container/style";
import {
  StyledLink,
  GreenTitle
} from "../Text/style";
import GitHub from "../NavIcons/github";

export function HelpSection(props: { color?: string, marginBottom?: string, mobileMarginBottom?: string, padding?: string }) {
  return (
    <StyledHelpSection
      marginBottom={props.marginBottom}
      mobileMarginBottom={props.mobileMarginBottom}
      color={props.color}
      padding={props.padding}
    >
      Besoin d&apos;assistance ?
      {process.env.NEXT_PUBLIC_FAQ_STATE === 'inactive' ?
        ' Par '
        :
        <>
          Rdv sur la page
          <StyledLink href="/homepage/faq" target="_blank" color={props.color}>{" "}FAQ</StyledLink>
          {" "}ou par
        </>
      }
      mail à{" "}
      <StyledLink color={props.color} href="mailto:contact@amnet.fr">contact@amnet.fr</StyledLink>
    </StyledHelpSection>
  );
}

export function TitleCard(props: { children: React.ReactNode, hideLine?: boolean }) {
  return (
    <Row style={{ marginBottom: "0.5rem", alignItems: "center" }}>
      <GreenTitle>
        {props.children}
      </GreenTitle>
      <GreenLine hideLine={props.hideLine} />
    </Row>
  );
}

export function GreenCard(props: { promotion: string }) {
  const year = Number(props.promotion) + 1801;
  return (
    <StyledGreenCard>
      La Team qui gère l’AMNet pour l’année {year.toString()}-
      {(year + 1).toString()}
    </StyledGreenCard>
  );
}

export function Footer(props: { page?: string, marginTop?: string }) {
  if (props.page == "campus") {
    return (
      <StyledCampusFooter>
        Projet développé et maintenu par Hard Win&apos;∫ 58Li218, Squall&apos;∫ 4Li218 et Mac Nhat&apos;∫ 47-102Li219 &bull; Version 2.0.1 <GitHub />
      </StyledCampusFooter>
    );
  }
  else {
    return (
      <StyledFooter marginTop={props.marginTop}>
        Projet développé et maintenu par Hard Win&apos;∫ 58Li218, Squall&apos;∫ 4Li218 et Mac Nhat&apos;∫ 47-102Li219 &bull; Version 2.0.1 <GitHub />
      </StyledFooter>
    );
  }
}