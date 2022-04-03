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

export function StateContribution(props: { status: string }) {
  if (props.status == 'paid') {
    return (
      <StyledStateContribution>
        <BlackText style={{ paddingRight: "10px" }}>Cotisation :</BlackText>
        <Succes/>
      </StyledStateContribution>
    );
  }
  else if(props.status == 'unpaid')
  {
    return (
      <Row style={{ alignItems: "baseline", justifyContent: "center" }}>
        <StyledStateContribution style={{ marginRight: "15px" }}>
          <BlackText style={{ paddingRight: "10px" }}>Cotisation :</BlackText>
          <Fail/>
        </StyledStateContribution>
        <ContributionModal/>
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