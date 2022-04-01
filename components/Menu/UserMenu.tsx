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
  StyledMenu
} from "./style";
import SmallLogo from "../NavIcons/smallLogo";


export default function UserMenu(props: { page: string }) {
  const [scroll, scrolled, top] = useScrollingUp()
  const [open, SetOpen] = useState(false);
  const Contribution = true;
  const isGadz = Contribution ? true : false;
  const isAdmin = true;

  var NumHiddenIcon = 0
  if (!isGadz) NumHiddenIcon++
  if (!isAdmin) NumHiddenIcon++
  if (!Contribution) NumHiddenIcon = NumHiddenIcon + 2

  const mobileHeight = (Math.ceil((7 - NumHiddenIcon) / 3) * 95 + 95).toString()
  
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
      <StyledMenu mobileHeight={open ? mobileHeight : "95"}>
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
          <IndexIcon page={props.page} />
        </Row>

        <Row style={positionning}>
          <ProfilIcon page={props.page} />
        </Row>

        {Contribution &&
          <>
            <Row style={positionning}>
              <IoTIcon page={props.page} location="dashboard" />
            </Row>

            <Row style={positionning}>
              <MaterialIcon page={props.page} location="dashboard" />
            </Row>
          </>
        }

        {isGadz && 
          <Row style={positionning}>
            <GadzflixIcon />
          </Row>
        }

        <Row style={positionning}>
          <FAQIcon page={props.page} />
        </Row>

        {isAdmin &&
          <Row style={positionning}>
            <SettingsIcon page={props.page} />
          </Row>
        }

        <StyledDivLogOut display="flex"
          mobileDisplay="none"
          flex={NumHiddenIcon + 2}
        >
          <LogOutIcon id="2" />
        </StyledDivLogOut>
      </StyledMenu>
    </MenuContener >
  )
}