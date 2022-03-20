import { Row } from "../Container/style";
import FAQIcon from "../NavIcons/faq";
import GadzflixIcon from "../NavIcons/gadzflix";
import IndexIcon from "../NavIcons";
import LogOutIcon from "../NavIcons/log_out";
import MaterialIcon from "../NavIcons/material";
import IoTIcon from "../NavIcons/iot";
import ProfilIcon from "../NavIcons/profil";
import SettingsIcon from "../NavIcons/settings";
import BurgerMenu from "../NavIcons/burgermenu";
import { useEffect, useState } from "react";
import useScrollingUp from "./scroll";
import {
  MenuContener,
  StyledDivLogo,
  StyledDivLogOut,
  StyledMenu,
} from "./style";
import { MediaContextProvider, Media } from "../MediaQueries/MediaSSR";

export default function UserMenu(props: { page: string }) {
  const [scroll, scrolled, top] = useScrollingUp();
  const [open, SetOpen] = useState(false);

  function handleChange() {
    SetOpen(!open);
  }

  useEffect(() => {
    if (!scrolled) if (open) handleChange();
  }, [scrolled]);

  const positionning = {
    flex: "1",
    minHeight: "70px",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <MediaContextProvider>
      <Media at="sm">
        <MenuContener
          timeTransform={open ? "0.6s" : "0.3s"}
          top={top}
          scroll={scroll}
          sticky={scrolled}
        >
          <StyledMenu>
            <Row
              style={{
                flex: "1",
                margin: "5px 0",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BurgerMenu open={open} onClick={handleChange} />
            </Row>

            <StyledDivLogo>
              <a
                href="../"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img
                  style={{ width: "75px", height: "75px" }}
                  src="/static/logo/small_logo.svg"
                />
              </a>
            </StyledDivLogo>

            <StyledDivLogOut>
              <LogOutIcon />
            </StyledDivLogOut>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gridAutoRows: "95px",
                gridColumnStart: "1",
                gridColumnEnd: "4",
                height: open ? "295px" : "0",
                overflow: "hidden",
                transition: "height 0.3s linear, padding-bottom 0.3s linear",
                paddingBottom: open ? "10px" : "0",
              }}
            >
              <Row style={positionning}>
                <IndexIcon page={props.page} />
              </Row>

              <Row style={positionning}>
                <ProfilIcon page={props.page} />
              </Row>

              <Row style={positionning}>
                <IoTIcon page={props.page} location="dashboard" />
              </Row>

              <Row style={positionning}>
                <MaterialIcon page={props.page} location="dashboard" />
              </Row>

              <Row style={positionning}>
                <GadzflixIcon />
              </Row>

              <Row style={positionning}>
                <FAQIcon page={props.page} />
              </Row>

              <Row style={positionning}>
                <SettingsIcon page={props.page} />
              </Row>
            </div>
          </StyledMenu>
        </MenuContener>
      </Media>

      <Media greaterThan="sm">
        <MenuContener
          timeTransform="0.3s"
          top={top}
          scroll={scroll}
          sticky={scrolled}
        >
          <StyledMenu>
            <StyledDivLogo>
              <a
                href="../"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img
                  style={{ width: "75px", height: "75px" }}
                  src="/static/logo/small_logo.svg"
                />
              </a>
            </StyledDivLogo>

            <Row style={positionning}>
              <IndexIcon page={props.page} />
            </Row>

            <Row style={positionning}>
              <ProfilIcon page={props.page} />
            </Row>

            <Row style={positionning}>
              <IoTIcon page={props.page} location="dashboard" />
            </Row>

            <Row style={positionning}>
              <MaterialIcon page={props.page} location="dashboard" />
            </Row>

            <Row style={positionning}>
              <GadzflixIcon />
            </Row>

            <Row style={positionning}>
              <FAQIcon page={props.page} />
            </Row>

            <Row style={positionning}>
              <SettingsIcon page={props.page} />
            </Row>

            <StyledDivLogOut>
              <LogOutIcon />
            </StyledDivLogOut>
          </StyledMenu>
        </MenuContener>
      </Media>
    </MediaContextProvider>
  );
}
