import React, { useState } from "react";
import { GreenButton } from "../Button/Buttons";
import { Row } from "../Container/style";
import { BlackText } from "../Text/style";
import { 
  StyledStateContribution,
  StyledStateInvite, 
  StyledStateRequest 
} from "./style";
import Modal, {ModalLogic} from "../Card/Modal";

export function StateContribution(props: {status: string}){
  const {reveal, toggle} = ModalLogic();

  if(props.status == 'paid')
  {
    return(
      <StyledStateContribution>
        <BlackText style={{paddingRight: "10px"}}>Cotisation :</BlackText>
        <img style={{height: "20px"}} src="/static/icons/succes.svg"/> 
      </StyledStateContribution>
    );
  }
  else(props.status == 'unpaid')
  {
    return(
      <Row style={{alignItems: "baseline", justifyContent:"center"}}>
        <StyledStateContribution style={{marginRight: "15px"}}>
          <BlackText style={{paddingRight: "10px"}}>Cotisation :</BlackText>
          <img style={{height: "20px"}} src="/static/icons/fail.svg"/> 
        </StyledStateContribution>
        <GreenButton width="150px" height="50px" onClick={toggle}>Payer</GreenButton>
        <Modal reveal={reveal} hide={toggle}/>
      </Row>
      
    );
  }
}

export function StateRequest(props: { state: string }) {
  if(props.state == 'active')
  {
    return <StyledStateRequest background="#67BC45">Acceptée</StyledStateRequest>
  }
  if(props.state == 'declined')
  {
    return <StyledStateRequest background="#F23232">Refusée</StyledStateRequest>
  }
  if(props.state == 'pending')
  {
    return <StyledStateRequest background="#FF9900">En cours</StyledStateRequest>
  }
}
  
export function StateInvite(props: {state?: boolean}){
  var [state, setState] = useState(props.state);

  const handleValueChange = (elmt) => {
    setState(elmt.target.value == "enabled");
  }

  return(
    <StyledStateInvite status={state} onChange={handleValueChange}>
      <option value="enabled" >Activé</option>
      <option value="disabled">Désactivé</option>
    </StyledStateInvite>
  );
}

export function StateIntegration(props: {state?: boolean}){
  var [state, setState] = useState(props.state);

  const handleValueChange = (elmt) => {
    setState(elmt.target.value == "enabled");
  }

  return(
    <StyledStateInvite status={state} onChange={handleValueChange}>
      <option value="enabled" >Ayat's</option>
      <option value="disabled">Fini</option>
    </StyledStateInvite>
  );
}