import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import MacAdressTd from "../../../Input/MacAddressInput";
import Fail from "../../../NavIcons/fail";
import Succes from "../../../NavIcons/succes";
import { StateRequest } from "../../../Status/Status";
import { StyledLink } from "../../../Text/style";
import {  hardware } from "../../../Utils/types";
import { StyledTr, StyledTd } from "../../style";
import Buttons from "../Buttons";

export const DesktopMaterialRow = (props: {
    value: hardware,
    setTab: Function,
    index: { active: number, declined: number, pending: number },
    style?: React.CSSProperties
}) => {
    return (
        <StyledTr
            as={motion.tr}
            initial={{ opacity: 0, borderBottom: "2px solid rgba(0,0,0,0)" }}
            animate={{ opacity: 1, borderBottom: "2px solid rgba(0,0,0,0.1)" }}
            exit={{ opacity: 0, borderBottom: "2px solid rgba(0,0,0,0)" }}
            transition={{ ease: "linear" }}
        >
            <StyledTd>{props.index[props.value['material_state']]}</StyledTd>
            <StyledTd>
                <Link
                    href={{
                        pathname: '/admin/users/[user_id]',
                        query: { user_id: props.value['material_user'] },
                    }}
                    passHref
                    scroll={false}
                >
                    <StyledLink color="#096a09">{props.value['user_name']}</StyledLink>
                </Link>
            </StyledTd>
            <StyledTd style={{ textAlign: "center" }}>
                {props.value['user_pay_status'] ? <Succes marginRight="15px" /> : <Fail marginRight="15px" />}
            </StyledTd>
            <StyledTd>{props.value['material_description']}</StyledTd>
            <StyledTd style={{ whiteSpace: "normal" }}>
                <div style={{ width: "400px" }}>
                    {props.value['material_reason']}
                </div>
            </StyledTd>
            {props.value.material_state === "declined" && <StyledTd>{props.value.declined_reason}</StyledTd>}
            <StyledTd>
                <StateRequest state={props.value['material_state']} />
            </StyledTd>
            <StyledTd style={{ paddingRight: "5px" }}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: (props.value['material_state'] == "pending") ? "495px" : "320px"
                    }}
                >
                    <Buttons
                        id={props.value['material_id']}
                        status={props.value['material_state']}
                        requestType="hardware"
                        setTab={props.setTab}
                    />
                </div>
            </StyledTd>
        </StyledTr>
    )
}

export default DesktopMaterialRow