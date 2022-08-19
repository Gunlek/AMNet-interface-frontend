import { Row } from "../Container/style";
import EditionIcon from "../NavIcons/edition";
import IndexIcon from "../NavIcons";
import LogOutIcon from "../NavIcons/log_out";
import MaterialIcon from "../NavIcons/material";
import IoTIcon from "../NavIcons/iot";
import AdminIcon from "../NavIcons/admin";
import UsersIcon from "../NavIcons/users";
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
import { motion } from "framer-motion";
import useMediaQuery from "../MediaQueries/MediaQuery";

export default function AdminMenu(props: { page?: string, setTranstion: Function, setHomeTransition: Function }) {
  const [scroll, scrolled, top] = useScrollingUp()
  const [open, SetOpen] = useState(false);
  const minWidth1000 = useMediaQuery('(min-width: 1000px)');

  function handleChange() {
    SetOpen(!open);
  }

  useEffect(() => {
    if (!scrolled) if (open) setTimeout(() => { SetOpen(!open); }, 525);
  }, [scrolled, open])

  const positionning = {
    flex: "1",
    minHeight: "70px",
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
        transition={{ type: 'linear' }}
      >
        <StyledIconContener as="nav" maxHeight={"615px"} mobileHeight={open ? "285" : "95"}>
          <Row
            Display="none"
            mobileDisplay="flex"
            justify="center"
            align="center"
          >
            <BurgerMenu open={open} onClick={handleChange} />
          </Row>
          <StyledDivLogo>
            <SmallLogo setTransition={props.setHomeTransition} />
          </StyledDivLogo>

          <StyledDivLogOut Display="none" mobileDisplay="flex">
            <LogOutIcon id="1" setTransition={props.setHomeTransition} />
          </StyledDivLogOut>

          <Row style={positionning}>
            <AdminIcon page={props.page} />
          </Row>

          <Row style={positionning}>
            <UsersIcon page={props.page} />
          </Row>

          <Row style={positionning}>
            <IoTIcon page={props.page} admin={true} />
          </Row>

          <Row style={positionning}>
            <MaterialIcon page={props.page} admin={true} />
          </Row>

          <Row style={positionning}>
            <EditionIcon page={props.page} />
          </Row>

          <Row style={positionning}>
            <IndexIcon page={props.page} setTranstion={props.setTranstion} />
          </Row>

          <StyledDivLogOut
            flex="3"
            Display="flex"
            mobileDisplay="none"
          >
            <LogOutIcon id="2" setTransition={props.setHomeTransition} />
          </StyledDivLogOut>
        </StyledIconContener>
      </StyledMenu>
    </MenuContener>
  )
}

