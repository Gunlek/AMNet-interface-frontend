import { Row } from "../Container/style";
import EditionIcon from "../NavIcons/edition";
import IndexIcon from "../NavIcons";
import LogOutIcon from "../NavIcons/log_out";
import MaterialIcon from "../NavIcons/material";
import IoTIcon from "../NavIcons/iot";
import SettingsIcon from "../NavIcons/settings";
import UsersIcon from "../NavIcons/users";
import BurgerMenu from "../NavIcons/burgermenu";
import { useEffect, useState } from "react";
import useScrollingUp from "./scroll";
import {
  MenuContener,
  StyledDivLogo,
  StyledDivLogOut,
  StyledMenu
} from "./style";
import SmallLogo from "../NavIcons/smallLogo";


export default function AdminMenu(props: { page: string }) {
  const [scroll, scrolled, top] = useScrollingUp()
  const [open, SetOpen] = useState(false);

  function handleChange() {
    SetOpen(!open);
  }

  useEffect(() => {
    if (!scrolled) if (open) handleChange()
  }, [scrolled])

  const positionning = {
    flex: "1",
    minHeight: "70px",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <MenuContener timeTransform={open ? "0.6s" : "0.3s"} top={top} scroll={scroll} sticky={scrolled}>
      <StyledMenu mobileHeight={open ? "285px" : "95px"}>
        <Row
          display="none"
          mobileDisplay="flex"
          justify="center"
          align="center"
          style={{
            flex: "1",
            margin: "5px 0",
          }}
        >
          <BurgerMenu open={open} onClick={handleChange} />
        </Row>
        <StyledDivLogo>
          <SmallLogo />
        </StyledDivLogo>

        <StyledDivLogOut
          display="none"
          mobileDisplay="flex"
        >
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
          flex="3"
          marginTop="10px"
          display="flex"
          mobileDisplay="none"
        >
          <LogOutIcon id="2" />
        </StyledDivLogOut>
      </StyledMenu>
    </MenuContener>
  )
}

