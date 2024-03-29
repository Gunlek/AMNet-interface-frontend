import { Row } from "../Container/style";
import GadzflixIcon from "../NavIcons/gadzflix";
import IndexIcon from "../NavIcons";
import LogOutIcon from "../NavIcons/log_out";
import MaterialIcon from "../NavIcons/material";
import IoTIcon from "../NavIcons/iot";
import ProfileIcon from "../NavIcons/profile";
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
import useMediaQuery from "../MediaQueries/MediaQuery";
import { motion } from "framer-motion";

export default function UserMenu(props: {
  page: string,
  user: {
    "is_gadz": boolean,
    "rank": string,
    "pay_status": boolean
  },
  localNetwork: boolean,
  setTransition: Function,
  setHomeTransition: Function
}) {
  const [scroll, scrolled, top] = useScrollingUp()
  const [open, SetOpen] = useState(false);
  const isGadz = props.user.pay_status ? props.user.is_gadz : false;
  const isAdmin = props.user.rank === "admin";
  const inactiveFaq = (process.env.NEXT_PUBLIC_FAQ_STATE === 'inactive');
  const minWidth1000 = useMediaQuery('(min-width: 1000px)');

  let NumHiddenIcon = 0;
  if (!isGadz) NumHiddenIcon++;
  if (props.user.rank === "user") NumHiddenIcon++;
  if (!props.user.pay_status) NumHiddenIcon = NumHiddenIcon + 2;

  const mobileHeight = (Math.ceil((6 - NumHiddenIcon) / 3) * 95 + 95).toString()

  function handleChange() {
    SetOpen(!open);
  }

  useEffect(() => {
    if (!scrolled) if (open) setTimeout(() => { SetOpen(!open); }, 525);
  }, [scrolled, open])

  const positionning = {
    flex: "1",
    minHeight: (70 + NumHiddenIcon * 5).toString() + "px",
    justifyContent: "center",
    alignItems: "center",
    userSelect: "none",
    position: "relative"
  };

  return (
    <MenuContener
      id="menu"
      timeTransform={open ? "0.5s" : "0.3s"}
      top={top}
      scroll={scroll}
      sticky={scrolled}
      Shadow={top || scrolled}
    >
      <StyledMenu
        as={motion.div}
        variants={minWidth1000 ? undefined : { exit: { height: "95px" } }}
        exit="exit"
        transition={{ ease: "linear" }}
      >
        <StyledIconContener as="nav" maxHeight={(620 - NumHiddenIcon * 70).toString() + "px"} mobileHeight={open ? mobileHeight : "95"}>
          <Row
            Display="none"
            mobileDisplay="flex"
            justify="center"
            align="center"
            onClick={handleChange}
          >
            <BurgerMenu open={open} />
          </Row>
          
          <StyledDivLogo>
            <SmallLogo setTransition={props.setHomeTransition} />
          </StyledDivLogo>

          <StyledDivLogOut Display="none" mobileDisplay="flex">
            <LogOutIcon setTransition={props.setHomeTransition} id="1" />
          </StyledDivLogOut>

          <Row style={positionning}>
            <IndexIcon page={props.page} />
          </Row>

          <Row style={positionning}>
            <ProfileIcon page={props.page} />
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
              <GadzflixIcon localNetwork={props.localNetwork} />
            </Row>
            :
            undefined
          }

          {isAdmin &&
            <Row style={positionning}>
              <AdminIcon page={props.page} setTransition={props.setTransition} />
            </Row>
          }

          <StyledDivLogOut
            Display="flex"
            mobileDisplay="none"
            flex={NumHiddenIcon + 3}
          >
            <LogOutIcon id="2" setTransition={props.setHomeTransition} />
          </StyledDivLogOut>
        </StyledIconContener>
      </StyledMenu>
    </MenuContener >
  )
}
