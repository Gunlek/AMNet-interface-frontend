import React, { useState } from "react";
import { Row } from "../Container/style";
import { BlackText, StyledLink } from "../Text/style";
import {
  StyledConteneurNotif,
  StyledNotification,
  StyledStateContribution,
  StyledStateInvite,
  StyledStateRequest,
  StyledSVG
} from "./style";
import Fail from "../NavIcons/fail";
import Succes from "../NavIcons/succes";
import Link from "next/link";
import dynamic from "next/dynamic";
import { StyledGreenButton } from "../Button/style";
const ContributionModal = dynamic(() => import("../Card/Modals/ContributionModal"), {
    loading: () => <StyledGreenButton width="150px" height="50px">Payer</StyledGreenButton>
});

export function StateContribution(props: { status: string, userId: number }) {
  if (props.status == 'paid') {
    return (
      <StyledStateContribution>
        <BlackText style={{ paddingRight: "10px", fontSize: "18px" }}>Cotisation :</BlackText>
        <Succes />
      </StyledStateContribution>
    )
  }
  else if (props.status == 'unpaid') {
    return (
      <Row
        style={{
          alignItems: "baseline",
          justifyContent: "center"
        }}
      >
        <StyledStateContribution style={{ marginRight: "15px" }}>
          <BlackText style={{ paddingRight: "10px", fontSize: "18px" }}>Cotisation :</BlackText>
          <Fail />
        </StyledStateContribution>
        <ContributionModal userId={props.userId} />
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

export function StateInvite(props: { state: boolean, onChange: Function }) {
  const [state, setState] = useState(props.state);

  const handleValueChange = (elmt) => {
    setState(elmt.target.value == "enabled");
    props.onChange({
      currentTarget: { id: elmt.currentTarget.id },
      target: { value: (elmt.target.value == "enabled") ? 1 : 0 }
    });
  }

  return (
    <StyledStateInvite
      status={state}
      onChange={handleValueChange}
      defaultValue={props.state ? "enabled" : "disabled"}
      id="guest_access"
    >
      <option value="enabled">Activé</option>
      <option value="disabled">Désactivé</option>
    </StyledStateInvite>
  );
}

export function StateIntegration(props: { state: boolean, onChange: Function }) {
  const [state, setState] = useState(props.state);

  const handleValueChange = (elmt) => {
    setState(elmt.target.value == "enabled");
    props.onChange({
      currentTarget: { id: elmt.currentTarget.id },
      target: { value: (elmt.target.value == "enabled") ? 1 : 0 }
    });
  }

  return (
    <StyledStateInvite
      status={state}
      onChange={handleValueChange}
      defaultValue={props.state ? "enabled" : "disabled"}
      id="usins_state"
    >
      <option value="enabled">Ayat&apos;s</option>
      <option value="disabled">Fini</option>
    </StyledStateInvite>
  );
}

export function AdminStateContribution(props: { state: boolean, id: string, onChange: Function }) {
  const handleChange = (elmt) => {
    props.onChange({
      currentTarget: { id: elmt.currentTarget.id },
      target: { value: elmt.target.value === "enabled" }
    });
  }

  return (
    <StyledStateInvite
      id={props.id}
      status={props.state}
      onChange={handleChange}
      defaultValue={props.state ? "enabled" : "disabled"}
      style={{ width: "100%" }}
    >
      <option value="enabled">Payée</option>
      <option value="disabled">Non Payée</option>
    </StyledStateInvite>
  );
}

export function AdminStateRank(props: { state: string, id: string, onChange: Function }) {
  return (
    <StyledStateInvite
      id={props.id}
      status={props.state === "admin"}
      onChange={props.onChange}
      defaultValue={props.state}
      DefaultColor="#FF9900"
      style={{ width: "100%" }}
    >
      <option value="admin">Admin</option>
      <option value="user">Utilisateur</option>
    </StyledStateInvite>
  );
}

export function AdminNotifications(props: {
  notifNumber: number,
  unpaid?: boolean,
  access_quantity: number,
  material_quantity: number,
  setTransition: Function
}) {
  const notifNumber = props.notifNumber !== 0 ? props.notifNumber : undefined;
  const [Display, setDisplay] = useState(false);
  const [Opacity, setOpacity] = useState(true);

  const handleChange = (e) => {
    e.preventDefault()

    if (Display) {
      setOpacity(false);
      setTimeout(() => {
        setDisplay(false)
        setOpacity(true)
      }, 300);
    }
  }
  return (
    <>
      <StyledConteneurNotif
        onClick={() => setDisplay(!Display)}
        Display={Display}
        notifNumber={notifNumber}
        Unpaid={props.unpaid}
      >
        <StyledSVG width="42px" height="30px" viewBox="0 0 16 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-444.000000, -4100.000000)">
              <g transform="translate(100.000000, 4044.000000)">
                <g transform="translate(340.000000, 54.000000)">
                  <g>
                    <polygon points="0 0 24 0 24 24 0 24" />
                    <path d="M12,22 C13.1,22 14,21.1 14,20 L10,20 C10,21.1 10.89,22 12,22 Z M18,16 L18,11 C18,7.93 16.36,5.36 13.5,4.68 L13.5,4 C13.5,3.17 12.83,2.5 12,2.5 C11.17,2.5 10.5,3.17 10.5,4 L10.5,4.68 C7.63,5.36 6,7.92 6,11 L6,16 L4.71,17.29 C4.08,17.92 4.52,19 5.41,19 L18.58,19 C19.47,19 19.92,17.92 19.29,17.29 L18,16 Z" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </StyledSVG>
        <StyledNotification Display={Display} Opacity={Opacity} Unpaid={props.unpaid}>
          <Link href="/admin/iot" passHref>
            <StyledLink
              style={{
                width: "max-content"
              }}
              color="#096a09"
              onClick={props.setTransition}
            >
              Demandes d&apos;accès internet: {props.access_quantity}
            </StyledLink>
          </Link>
          <Link href="/admin/material" passHref>
            <StyledLink
              style={{ width: "max-content" }}
              color="#096a09"
              onClick={props.setTransition}
            >
              Demandes de matériel: {props.material_quantity}
            </StyledLink>
          </Link>
        </StyledNotification>
      </StyledConteneurNotif>
      {Display &&
        <div
          onClick={handleChange}
          style={{
            position: "fixed",
            height: "100%",
            width: "100%",
            left: "0",
            top: "0",
            zIndex: "2"
          }}
        />
      }
    </>
  );
}