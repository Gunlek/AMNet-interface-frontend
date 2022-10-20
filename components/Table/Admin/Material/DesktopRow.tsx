import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useState } from "react";
import MacAdressTd from "../../../Input/MacAddressInput";
import Fail from "../../../NavIcons/fail";
import Succes from "../../../NavIcons/succes";
import { StateRequest } from "../../../Status/Status";
import { StyledLink } from "../../../Text/style";
import { hardware } from "../../../Utils/types";
import { AdminInnerHTMLDiv, AdminMotionDiv } from "../../MotionDiv";
import { StyledTr, StyledReqTd } from "../../style";
import Buttons from "../Buttons";

export const DesktopMaterialRow = (props: {
    value: hardware,
    setTab: Function,
    index: number,
    virtuosoProps: any
}) => {
    const [animate, setAnimate] = useState(false);

    const newSetTab = (newAccess) => {
        setAnimate(true);

        const timer = setTimeout(() => {
            props.setTab(newAccess);
        }, 350)

        return () => clearTimeout(timer)
    };

    return (
        <StyledTr
            {...props.virtuosoProps}
            key={props.value['access_id']}
            as={motion.tr}
            transition={{ ease: "linear", duration: 0.3 }}
            animate={animate ? { opacity: 0, borderBottom: "2px solid rgba(0,0,0,0)" } : null}
        >
            <StyledReqTd><AdminMotionDiv animate={animate}>{props.index}</AdminMotionDiv></StyledReqTd>
            <StyledReqTd>
                <AdminMotionDiv animate={animate}>
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
            </StyledReqTd>
            <StyledReqTd style={{ textAlign: "center" }}>
                <AdminMotionDiv animate={animate}>
                    {props.value['user_pay_status'] ? <Succes marginRight="15px" /> : <Fail marginRight="15px" />}
                </AdminMotionDiv>
            </StyledReqTd>
            <StyledReqTd><AdminMotionDiv animate={animate}>{props.value['material_description']}</AdminMotionDiv></StyledReqTd>
            <StyledReqTd style={{ whiteSpace: "normal" }}>
                <AdminInnerHTMLDiv animate={animate} dangerouslySetInnerHTML={props.value['material_reason']}/>
            </StyledReqTd>
            {props.value.material_state === "declined" && <StyledReqTd><AdminMotionDiv animate={animate}>{props.value.declined_reason}</AdminMotionDiv></StyledReqTd>}
            <StyledReqTd>
                <AdminMotionDiv animate={animate}><StateRequest state={props.value['material_state']} center={true}/></AdminMotionDiv>
            </StyledReqTd>
            <StyledReqTd style={{ paddingRight: "5px" }}>
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
            </StyledReqTd>
        </StyledTr>
    )
}

export default DesktopMaterialRow