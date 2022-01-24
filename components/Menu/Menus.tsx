import { Column, Row } from "../Container/style";
import { SVGFaq } from "../SVG/faq";
import SVGEdition from "../SVG/edition";
import { SVGGadzflix } from "../SVG/gadzflix";
import { SVGHome } from "../SVG/home";
import { SVGLogOut } from "../SVG/log_out";
import { SVGMaterial } from "../SVG/material";
import { SVGIoT } from "../SVG/network";
import { SVGProfil } from "../SVG/profil";
import { SVGSettings } from "../SVG/settings";
import { SVGUsers } from "../SVG/users";
import { MenuContener, StyledDivLogo, StyledDivLogOut, StyledImg, StyledMenu } from "./style";
import SVGBurgerMenu from "../SVG/burgermenu";
import useMediaQuery from "../MediaQueries/MediaQuery";
import { useState } from "react";

export function Menu(props: { page?: string }) {
  const minWidth750 = useMediaQuery('(min-width:750px)');
  var [open, SetOpen] = useState(false);

  function handleChange() {
    SetOpen(!open);
  }

  const positionning = {
    flex: "1",
    margin: "5px 0",
    justifyContent: "center",
    alignItems: "center",
    display: (minWidth750 || open) ? "flex" : "none"
  };

  const MenuStyle = (!minWidth750 && open) ? {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    justifyItems: "center",
  } : {};

  return (
    <MenuContener>
      <StyledMenu style={MenuStyle}>
        <Row
          style={{
            flex: "1",
            margin: "5px 0",
            justifyContent: "center",
            alignItems: "center",
            display: minWidth750 ? "none" : "flex"
          }}
        >
          <SVGBurgerMenu open={open} onClick={handleChange} />
        </Row>

        <StyledDivLogo>
          <a href="../" style={{ display: "flex", justifyContent: "center" }}>
            <StyledImg src="/static/logo/small_logo.svg" />
          </a>
        </StyledDivLogo>

        <StyledDivLogOut display={minWidth750 ? "none" : "flex"}>
          <SVGLogOut id="1" />
        </StyledDivLogOut>

        <Row style={positionning}>
          <SVGHome page={props.page} />
        </Row>

        <Row style={positionning}>
          <SVGProfil page={props.page} />
        </Row>

        <Row style={positionning}>
          <SVGFaq page={props.page} />
        </Row>

        <Row style={positionning}>
          <SVGIoT page={props.page} />
        </Row>

        <Row style={positionning}>
          <SVGMaterial page={props.page} />
        </Row>

        <Row style={positionning}>
          <SVGGadzflix />
        </Row>

        <Row style={positionning}>
          <SVGSettings page={props.page} />
        </Row>

        <StyledDivLogOut display={minWidth750 ? "flex" : "none"}>
          <SVGLogOut id="2" />
        </StyledDivLogOut>
      </StyledMenu>
    </MenuContener>
  )
}

export function AdminMenu(props: { page?: string }) {
  const minWidth750 = useMediaQuery('(min-width:750px)');
  var [open, SetOpen] = useState(false);

  function handleChange() {
    SetOpen(!open);
  }

  const positionning = {
    flex: "1",
    margin: "5px 0",
    justifyContent: "center",
    alignItems: "center",
    display: (minWidth750 || open) ? "flex" : "none"
  };

  const MenuStyle = (!minWidth750 && open) ? {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    justifyItems: "center",
  } : {};

  return (
    <MenuContener>
      <StyledMenu style={MenuStyle}>
        <Row
          style={{
            flex: "1",
            margin: "5px 0",
            justifyContent: "center",
            alignItems: "center",
            display: minWidth750 ? "none" : "flex"
          }}
        >
          <SVGBurgerMenu open={open} onClick={handleChange} />
        </Row>

        <StyledDivLogo>
          <a href="../" style={{ display: "flex", justifyContent: "center" }}>
            <StyledImg src="/static/logo/small_logo.svg" />
          </a>
        </StyledDivLogo>

        <StyledDivLogOut display={minWidth750 ? "none" : "flex"}>
          <SVGLogOut id="1" />
        </StyledDivLogOut>

        <Row style={positionning}>
          <SVGSettings page={props.page} />
        </Row>

        <Row style={positionning}>
          <SVGUsers page={props.page} />
        </Row>

        <Row style={positionning}>
          <SVGIoT page={props.page} />
        </Row>

        <Row style={positionning}>
          <SVGMaterial page={props.page} />
        </Row>

        <Row style={positionning}>
          <SVGEdition page={props.page} />
        </Row>

        <Row style={positionning}>
          <SVGHome page={props.page} />
        </Row>

        <StyledDivLogOut
          style={{
            flex: minWidth750 ? "3" : "1",
            marginTop: minWidth750 ? "10px" : "0"
          }}
          display={minWidth750 ? "flex" : "none"}>
          <SVGLogOut id="2" />
        </StyledDivLogOut>
      </StyledMenu>
    </MenuContener>
  )
}