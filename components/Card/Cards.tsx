import {
  StyledGreenCard,
  StyledHelpSection,
  GreenLine,
  StyledFooter,
  StyledCampusFooter,
  ContainerAdminToolTip,
  StyledInfoSVG
} from "./style";
import { Row } from "../Container/style";
import {
  StyledLink,
  GreenTitle
} from "../Text/style";
import GitHub from "../NavIcons/github";
import dynamic from "next/dynamic";
import { useState } from "react";
const StyledAdminToolTip = dynamic<any>(() => import("./style").then((mod) => mod.StyledAdminToolTip));
const StyledGuestToolTip = dynamic<any>(() => import("./style").then((mod) => mod.StyledGuestToolTip));
const AnimatePresence = dynamic<any>(() => import("framer-motion").then((mod) => mod.AnimatePresence));
const MotionDiv = dynamic<any>(() => import("framer-motion").then((mod) => mod.motion.div));

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

export function InfoAdmin() {
  const [display, setDisplay] = useState(false);

  return (
    <ContainerAdminToolTip
      onMouseEnter={() => setDisplay(true)}
      onMouseLeave={() => setDisplay(false)}
    >
      <StyledInfoSVG xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 496.304 496.303" >
        <path d="M248.146,0C111.314,0,0,111.321,0,248.152c0,136.829,111.314,248.151,248.146,248.151
		c136.835,0,248.158-111.322,248.158-248.151C496.304,111.321,384.98,0,248.146,0z M248.146,472.093
		c-123.473,0-223.935-100.459-223.935-223.941c0-123.479,100.462-223.941,223.935-223.941
		c123.488,0,223.947,100.462,223.947,223.941C472.093,371.634,371.634,472.093,248.146,472.093z M319.536,383.42v32.852
		c0,1.383-1.123,2.494-2.482,2.494H196.45c-1.374,0-2.482-1.117-2.482-2.494V383.42c0-1.372,1.114-2.482,2.482-2.482h34.744V205.831
		h-35.101c-1.375,0-2.468-1.111-2.468-2.474v-33.6c0-1.38,1.1-2.479,2.468-2.479h82.293c1.371,0,2.482,1.105,2.482,2.479v211.181
		h36.186C318.413,380.938,319.536,382.048,319.536,383.42z M209.93,105.927c0-20.895,16.929-37.829,37.829-37.829
		c20.886,0,37.826,16.935,37.826,37.829s-16.94,37.829-37.826,37.829C226.853,143.756,209.93,126.822,209.93,105.927z"/>
      </StyledInfoSVG>

      <AnimatePresence>
        {display &&
          <StyledAdminToolTip
            as={MotionDiv}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "linear", duration: 0.3 }}
          >
            Petite thuysse pour éditer l&apos;adresse MAC d&apos;une personne : <br />
            &bull; sur PC tu fais un double-clic dessus<br />
            &bull; sur Téléphone tu fais un appui long
          </StyledAdminToolTip>
        }
      </AnimatePresence>
    </ContainerAdminToolTip>
  )
}

export function GuestLogin() {
  const [display, setDisplay] = useState(false);

  return (
    <ContainerAdminToolTip
      onMouseEnter={() => setDisplay(true)}
      onMouseLeave={() => setDisplay(false)}
    >
      <StyledInfoSVG xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 496.304 496.303"  >
        <path d="M248.146,0C111.314,0,0,111.321,0,248.152c0,136.829,111.314,248.151,248.146,248.151
		c136.835,0,248.158-111.322,248.158-248.151C496.304,111.321,384.98,0,248.146,0z M248.146,472.093
		c-123.473,0-223.935-100.459-223.935-223.941c0-123.479,100.462-223.941,223.935-223.941
		c123.488,0,223.947,100.462,223.947,223.941C472.093,371.634,371.634,472.093,248.146,472.093z M319.536,383.42v32.852
		c0,1.383-1.123,2.494-2.482,2.494H196.45c-1.374,0-2.482-1.117-2.482-2.494V383.42c0-1.372,1.114-2.482,2.482-2.482h34.744V205.831
		h-35.101c-1.375,0-2.468-1.111-2.468-2.474v-33.6c0-1.38,1.1-2.479,2.468-2.479h82.293c1.371,0,2.482,1.105,2.482,2.479v211.181
		h36.186C318.413,380.938,319.536,382.048,319.536,383.42z M209.93,105.927c0-20.895,16.929-37.829,37.829-37.829
		c20.886,0,37.826,16.935,37.826,37.829s-16.94,37.829-37.826,37.829C226.853,143.756,209.93,126.822,209.93,105.927z"/>
      </StyledInfoSVG>

      <AnimatePresence>
        {display &&
          <StyledGuestToolTip
            as={MotionDiv}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "linear", duration: 0.3 }}
          >
            Les identifiants du compte invité pour AMNet Wi-Fi :<br />
            &bull; Identifiant : {process.env.NEXT_PUBLIC_GUEST_LOGIN}<br />
            &bull; Mot de passe : {process.env.NEXT_PUBLIC_GUEST_PASSWORD}
          </StyledGuestToolTip>
        }
      </AnimatePresence>
    </ContainerAdminToolTip>
  )
}