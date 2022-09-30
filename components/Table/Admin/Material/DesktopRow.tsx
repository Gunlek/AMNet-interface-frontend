import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import MacAdressTd from "../../../Input/MacAddressInput";
import Fail from "../../../NavIcons/fail";
import Succes from "../../../NavIcons/succes";
import { StateRequest } from "../../../Status/Status";
import { StyledLink } from "../../../Text/style";
import { hardware } from "../../../Utils/types";
import { AdminMotionDiv } from "../../MotionDiv";
import { StyledTr, StyledTd } from "../../style";
import Buttons from "../Buttons";

export const DesktopMaterialRow = (props: {
    value: hardware,
    setTab: Function,
    index: number,
    virtuosoProps: any,
    isScrolling: boolean
}) => {
    return (
        <StyledTr
            as={motion.tr}
            exit={props.isScrolling ? null : { opacity: 0, borderBottom: "2px solid rgba(0,0,0,0)" }}
            transition={{ ease: "linear" }}
            {...props.virtuosoProps}
        >
            <StyledTd><AdminMotionDiv isScrolling={props.isScrolling}>{props.index}</AdminMotionDiv></StyledTd>
            <StyledTd>
                <AdminMotionDiv isScrolling={props.isScrolling}>
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
                </AdminMotionDiv>
            </StyledTd>
            <StyledTd style={{ textAlign: "center" }}>
                <AdminMotionDiv isScrolling={props.isScrolling}>
                    {props.value['user_pay_status'] ? <Succes marginRight="15px" /> : <Fail marginRight="15px" />}
                </AdminMotionDiv>
            </StyledTd>
            <StyledTd><AdminMotionDiv isScrolling={props.isScrolling}>{props.value['material_description']}</AdminMotionDiv></StyledTd>
            <StyledTd style={{ whiteSpace: "normal" }}>
                <AdminMotionDiv isScrolling={props.isScrolling}>{props.value['material_reason']}</AdminMotionDiv>
            </StyledTd>
            {props.value.material_state === "declined" && <StyledTd><AdminMotionDiv isScrolling={props.isScrolling}>{props.value.declined_reason}</AdminMotionDiv></StyledTd>}
            <StyledTd>
                <AdminMotionDiv isScrolling={props.isScrolling}><StateRequest state={props.value['material_state']} /></AdminMotionDiv>
            </StyledTd>
            <StyledTd style={{ paddingRight: "5px" }}>
                <AdminMotionDiv
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
                </AdminMotionDiv>
            </StyledTd>
        </StyledTr>
    )
}

export default DesktopMaterialRow