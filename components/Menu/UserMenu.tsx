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
  StyledIconContener,
  StyledMenu
} from "./style";
import SmallLogo from "../NavIcons/smallLogo";

export default function UserMenu(props: { 
  page: string, 
  user: { 
    "is_gadz": boolean,
    "rank": string,
    "pay_status": boolean
  } 
}) {
  const [scroll, scrolled, top] = useScrollingUp()
  const [open, SetOpen] = useState(false);
  const isGadz = props.user.pay_status ? props.user.is_gadz : false;
  const isAdmin = props.user.rank === "admin";
  
  var NumHiddenIcon = 0
  if (!isGadz) NumHiddenIcon++
  if (props.user.rank === "user") NumHiddenIcon++
  if (!props.user.pay_status) NumHiddenIcon = NumHiddenIcon + 2

  const mobileHeight = (Math.ceil((7 - NumHiddenIcon) / 3) * 95 + 95).toString()

  function handleChange() {
    SetOpen(!open);
  }

  useEffect(() => {
    if (!scrolled) if (open) setTimeout(() => { handleChange() }, 525);
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
      <StyledMenu Shadow={open}>
        <StyledIconContener as="nav" maxHeight={(690-NumHiddenIcon*70).toString()+"px"} mobileHeight={open ? mobileHeight : "95"}>
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

          {props.user.pay_status ?
            <>
              <Row style={positionning}>
                <IoTIcon page={props.page} />
              </Row>

              <Row style={positionning}>
                <MaterialIcon page={props.page} />
              </Row>
            </>
            :
            undefined
          }

          {isGadz ?
            <Row style={positionning}>
              <GadzflixIcon />
            </Row>
            :
            undefined
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
        </StyledIconContener>
      </StyledMenu>
    </MenuContener >
  )
}