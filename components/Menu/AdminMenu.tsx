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
import { MediaContextProvider, Media } from "../MediaQueries/MediaSSR";


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
    <MediaContextProvider>
      <Media at="sm">
        <MenuContener timeTransform={open ? "0.6s" : "0.3s"} top={top} scroll={scroll} sticky={scrolled}>
          <StyledMenu>
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

            <StyledDivLogo>
              <a href="../" style={{ display: "flex", justifyContent: "center" }}>
                <img style={{ width: "75px", height: "75px" }} src="/static/logo/small_logo.svg" />
              </a>
            </StyledDivLogo>

            <StyledDivLogOut>
              <LogOutIcon />
            </StyledDivLogOut>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gridColumnStart: "1",
                gridColumnEnd: "4",
                height: open ? "200px" : "0",
                overflow: "hidden",
                transition: "height 0.3s linear, padding-bottom 0.3s linear",
                paddingBottom: open ? "10px" : "0",
                gridAutoRows: "95px"
              }}
            >
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
            </div>
          </StyledMenu>
        </MenuContener>
      </Media>

      <Media greaterThan="sm">
        <MenuContener timeTransform="0.3s" top={top} scroll={scroll} sticky={scrolled}>
          <StyledMenu>
            <StyledDivLogo>
              <a href="../" style={{ display: "flex", justifyContent: "center" }}>
                <img style={{ width: "75px", height: "75px" }} src="/static/logo/small_logo.svg" />
              </a>
            </StyledDivLogo>

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
            >
              <LogOutIcon />
            </StyledDivLogOut>
          </StyledMenu>
        </MenuContener>
      </Media>
    </MediaContextProvider>

  )
}

