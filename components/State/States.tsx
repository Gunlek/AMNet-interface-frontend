import React, { useState } from "react";
import { GreenButton } from "../Button/Buttons";
import { Row } from "../Container/style";
import useMediaQuery from "../MediaQueries/MediaQuery";
import { BlackText } from "../Text/style";
import { 
  StyledStateContribution,
  StyledStateInvite, 
  StyledStateRequest 
} from "./style";


export function StateContribution(props: {status: string}){
  const minWidth1000 = useMediaQuery('(min-width: 1000px)')
  
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
      <Row style={{alignItems: "baseline", justifyContent:"space-between"}}>
        <StyledStateContribution style={{marginRight: "15px"}}>
          <BlackText style={{paddingRight: "10px"}}>Cotisation :</BlackText>
          <img style={{height: "20px"}} src="/static/icons/fail.svg"/> 
        </StyledStateContribution>
        <GreenButton width={minWidth1000 ? "175px" : "150px"} height="50px">La payer</GreenButton>
      </Row>
      
    );
  }
}

  export function StateRequest(props: { state: string }) {
    if(props.state == 'accepted')
    {
      return <StyledStateRequest background="#67BC45">Acceptée</StyledStateRequest>
    }
    if(props.state == 'denied')
    {
      return <StyledStateRequest background="#F23232">Refusée</StyledStateRequest>
    }
    if(props.state == 'inProcess')
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
      <option value="enabled" selected>Activé</option>
      <option value="disabled">Désactivé</option>
    </StyledStateInvite>
  );
  }