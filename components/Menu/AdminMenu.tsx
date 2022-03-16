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
import { useEffect, useState } from "react";
import useScrollingUp from "./scroll";
import {
  MenuContener,
  StyledDivLogo,
  StyledDivLogOut,
  StyledMenu
} from "./style";

export default function AdminMenu(props: { page: string }) {
  const minWidth800 = useMediaQuery('(min-width:801px)');
  const minWidth1000 = useMediaQuery('(min-width:1000px)');
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
    minHeight: (minWidth800) ? "70px" : undefined,
    justifyContent: "center",
    alignItems: "center",
    height: !minWidth1000 ? open ? "95px" : "0" : "auto",
    overflow: !minWidth800 ? "hidden" : undefined,
    transition: "height 0.25s linear"
  };

  return (
    <MenuContener timeTransform={open ? "0.6s" : "0.3s"} top={top} scroll={scroll} sticky={scrolled}>
      <StyledMenu>
        {!minWidth800 &&
          <Row
            style={{
              flex: "1",
              margin: "5px 0",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <BurgerMenu open={open} onClick={handleChange} />
          </Row>
        }

        <StyledDivLogo>
          <a href="../" style={{ display: "flex", justifyContent: "center" }}>
            <img width="75px" src="/static/logo/small_logo.svg" />
          </a>
        </StyledDivLogo>

        {!minWidth800 &&
          <StyledDivLogOut>
            <LogOutIcon />
          </StyledDivLogOut>
        }

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

        {minWidth800 &&
          <StyledDivLogOut
            style={{
              flex: minWidth1000 ? "3" : "1",
              marginTop: minWidth1000 ? "10px" : "0"
            }}
          >
            <LogOutIcon />
          </StyledDivLogOut>
        }
      </StyledMenu>
    </MenuContener>
  )
}