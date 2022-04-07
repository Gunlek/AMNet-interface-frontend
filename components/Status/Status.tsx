import React, { useState } from "react";
import { Row } from "../Container/style";
import { BlackText } from "../Text/style";
import {
  StyledStateContribution,
  StyledStateInvite,
  StyledStateRequest
} from "./style";
import Fail from "../NavIcons/fail";
import Succes from "../NavIcons/succes";
import ContributionModal from "../Card/Modals/ContributionModal";
import { SmallGreenButton, SmallOrangeButton, SmallRedButton } from "../Button/Buttons";

export function StateContribution(props: { status: string, admin?: boolean }) {
  if (props.status == 'paid') {
    return (
      <Row
        style={{
          alignItems: "baseline",
          justifyContent: "center",
          width: props.admin ? "auto" : undefined
        }}
      >
        <StyledStateContribution style={{ marginRight: "15px" }}>
          <BlackText style={{ paddingRight: "10px" }}>Cotisation :</BlackText>
          <Succes />
        </StyledStateContribution>
        {props.admin && <SmallRedButton>Annuler</SmallRedButton>}
      </Row>
    )
  }
  else if (props.status == 'unpaid') {
    return (
      <Row
        style={{
          alignItems: "baseline",
          justifyContent: "center",
          width: props.admin ? "auto" : undefined
        }}
      >
        <StyledStateContribution style={{ marginRight: "15px"}}>
          <BlackText style={{ paddingRight: "10px" }}>Cotisation :</BlackText>
          <Fail />
        </StyledStateContribution>
        {props.admin ?
          <SmallGreenButton>Confirmer</SmallGreenButton>
          :
          <ContributionModal />
        }
      </Row>
    );
  }
}

export function StateAdmin(props: { status: string, admin?: boolean }) {
  if (props.status == 'admin') {
    return (
      <Row style={{ alignItems: "baseline", justifyContent: "center" }}>
        <StyledStateContribution style={{ marginRight: "15px", marginLeft: "15px"  }}>
          <BlackText style={{ paddingRight: "10px" }}>Admin</BlackText>
        </StyledStateContribution>
        <SmallOrangeButton>Rétrograder</SmallOrangeButton>
      </Row>
    );
  }
  else if (props.status == 'user') {
    return (
      <Row style={{ alignItems: "baseline", justifyContent: "center" }}>
        <StyledStateContribution style={{ marginRight: "15px", marginLeft: "15px"  }}>
          <BlackText style={{ paddingRight: "10px" }}>Utilisateur</BlackText>
        </StyledStateContribution>
        <SmallGreenButton height="40px">Promouvoir</SmallGreenButton>
      </Row>
    );
  }
}

export function StateRequest(props: { state: string, center?: boolean }) {
  if (props.state == 'active') {
    return <StyledStateRequest center={props.center} color="#67BC45">Acceptée</StyledStateRequest>
  }
  if (props.state == 'declined') {
    return <StyledStateRequest center={props.center} color="#F23232">Refusée</StyledStateRequest>
  }
  if (props.state == 'pending') {
    return <StyledStateRequest center={props.center} color="#FF9900">En cours</StyledStateRequest>
  }
}

export function StateInvite(props: { state?: boolean }) {
  const [state, setState] = useState(props.state);

  const handleValueChange = (elmt) => {
    setState(elmt.target.value == "enabled");
  }

  return (
    <StyledStateInvite status={state} onChange={handleValueChange}>
      <option value="enabled">Activé</option>
      <option value="disabled">Désactivé</option>
    </StyledStateInvite>
  );
}

export function StateIntegration(props: { state?: boolean }) {
  const [state, setState] = useState(props.state);

  const handleValueChange = (elmt) => {
    setState(elmt.target.value == "enabled");
  }

  return (
    <StyledStateInvite status={state} onChange={handleValueChange}>
      <option value="enabled">Ayat's</option>
      <option value="disabled">Fini</option>
    </StyledStateInvite>
  );
}