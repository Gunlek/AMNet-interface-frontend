import { Row } from "../Container/style";
import FAQIcon from "../NavIcons/faq";
import GadzflixIcon from "../NavIcons/gadzflix";
import IndexIcon from "../NavIcons";
import LogOutIcon from "../NavIcons/log_out";
import MaterialIcon from "../NavIcons/material";
import IoTIcon from "../NavIcons/iot";
import ProfilIcon from "../NavIcons/profil";
import AdminIcon from "../NavIcons/admin";
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
    if (!scrolled) if (open) setTimeout(() => {handleChange()}, 525);
  }, [scrolled])

  const positionning = {
    flex: "1",
    minHeight: "70px",
    justifyContent: "center",
    alignItems: "center",
    userSelect: "none"
  };

  return (
    <MenuContener id="menu" timeTransform={open ? "0.5s" : "0.3s"} top={top} scroll={scroll} sticky={scrolled}>
      <StyledMenu mobileHeight={open ? mobileHeight : "95"}>
        <Row
          Display="none"
          mobileDisplay="flex"
          justify="center"
          align="center"
        >
          <BurgerMenu open={open} onClick={handleChange} />
        </Row>
        <StyledDivLogo>
          <SmallLogo />
        </StyledDivLogo>

        <StyledDivLogOut Display="none" mobileDisplay="flex">
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
              <IoTIcon page={props.page} />
            </Row>

            <Row style={positionning}>
              <MaterialIcon page={props.page} />
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
            <AdminIcon page={props.page} />
          </Row>
        }

        <StyledDivLogOut 
          Display="flex"
          mobileDisplay="none"
          flex={NumHiddenIcon + 2}
        >
          <LogOutIcon id="2" />
        </StyledDivLogOut>
      </StyledMenu>
    </MenuContener >
  )
}