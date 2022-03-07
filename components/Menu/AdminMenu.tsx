import { Row } from "../Container/style";
import EditionIcon from "../NavIcons/edition";
import IndexIcon from "../NavIcons";
import LogOutIcon from "../NavIcons/log_out";
import MaterialIcon from "../NavIcons/material";
import IoTIcon from "../NavIcons/iot";
import SettingsIcon from "../NavIcons/settings";
import UsersIcon from "../NavIcons/users";
import BurgerMenu from "../NavIcons/burgermenu";
import useMediaQuery from "../MediaQueries/MediaQuery";
import { useState } from "react";
import {
  MenuContener,
  StyledDivLogo,
  StyledDivLogOut,
  StyledMenu
} from "./style";

export default function AdminMenu(props: { page: string }) {
  const minWidth800 = useMediaQuery('(min-width:800px)');
  const minWidth1000 = useMediaQuery('(min-width:1000px)');
  const [open, SetOpen] = useState(false);

  function handleChange() {
    SetOpen(!open);
  }

  const positionning = {
    flex: "1",
    margin: (minWidth800) ? "5px 0" : "0",
    justifyContent: "center",
    alignItems: "center",
    height: !minWidth1000 ? open ? "90px" : "0" : "auto",
    overflow: "hidden",
    transition: "height 0.25s linear"
  };

  return (
    <MenuContener>
      <StyledMenu>
        <Row
          style={{
            flex: "1",
            margin: "5px 0",
            justifyContent: "center",
            alignItems: "center",
            display: minWidth800 ? "none" : "flex"
          }}
        >
          <BurgerMenu open={open} onClick={handleChange} />
        </Row>

        <StyledDivLogo>
          <a href="../" style={{ display: "flex", justifyContent: "center" }}>
            <img width="75px" src="/static/logo/small_logo.svg" />
          </a>
        </StyledDivLogo>

        <StyledDivLogOut display={minWidth800 ? "none" : "flex"}>
          <LogOutIcon id="1" />
        </StyledDivLogOut>

        <Row style={positionning}>
          <SettingsIcon page={props.page} />
        </Row>

        <Row style={positionning}>
          <UsersIcon page={props.page} />
        </Row>

        <Row style={positionning}>
          <IoTIcon page={props.page} location="settings" />
        </Row>

        <Row style={positionning}>
          <MaterialIcon page={props.page} location="settings" />
        </Row>

        <Row style={positionning}>
          <EditionIcon page={props.page} />
        </Row>

        <Row style={positionning}>
          <IndexIcon page={props.page} />
        </Row>

        <StyledDivLogOut
          style={{
            flex: minWidth1000 ? "3" : "1",
            marginTop: minWidth1000 ? "10px" : "0",
            display: minWidth800 ? "flex" : "none"
          }}
        >
          <LogOutIcon id="2" />
        </StyledDivLogOut>
      </StyledMenu>
    </MenuContener>
  )
}