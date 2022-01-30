import { Row } from "../Container/style";
import EditionIcon from "../NavIcons/edition";
import HomeIcon from "../NavIcons/home";
import LogOutIcon from "../NavIcons/log_out";
import MaterialIcon from "../NavIcons/material";
import IoTIcon from "../NavIcons/network";
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
  const minWidth750 = useMediaQuery('(min-width:750px)');
  const [open, SetOpen] = useState(false);

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
          <BurgerMenu open={open} onClick={handleChange} />
        </Row>

        <StyledDivLogo>
          <a href="../" style={{ display: "flex", justifyContent: "center" }}>
            <img width="75px" src="/static/logo/small_logo.svg" />
          </a>
        </StyledDivLogo>

        <StyledDivLogOut display={minWidth750 ? "none" : "flex"}>
          <LogOutIcon id="1" />
        </StyledDivLogOut>

        <Row style={positionning}>
          <SettingsIcon page={props.page} />
        </Row>

        <Row style={positionning}>
          <UsersIcon page={props.page} />
        </Row>

        <Row style={positionning}>
          <IoTIcon page={props.page} />
        </Row>

        <Row style={positionning}>
          <MaterialIcon page={props.page} />
        </Row>

        <Row style={positionning}>
          <EditionIcon page={props.page} />
        </Row>

        <Row style={positionning}>
          <HomeIcon page={props.page} />
        </Row>

        <StyledDivLogOut
          style={{
            flex: minWidth750 ? "3" : "1",
            marginTop: minWidth750 ? "10px" : "0"
          }}
          display={minWidth750 ? "flex" : "none"}>
          <LogOutIcon id="2" />
        </StyledDivLogOut>
      </StyledMenu>
    </MenuContener>
  )
}