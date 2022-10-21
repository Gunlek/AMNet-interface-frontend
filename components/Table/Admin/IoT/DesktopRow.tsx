import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useState } from "react";
import MacAdressTd from "../../../Input/MacAddressInput";
import Fail from "../../../NavIcons/fail";
import Succes from "../../../NavIcons/succes";
import { StateRequest } from "../../../Status/Status";
import { StyledLink } from "../../../Text/style";
import { access } from "../../../Utils/types";
import { StyledTr, StyledReqTd } from "../../style";
import Buttons from "../Buttons";
import { AdminMotionDiv } from "../../MotionDiv";
import { motion } from "framer-motion";

const ProofModal = dynamic(() => import("../../../Card/Modals/AdminProofModal"), {
    loading: () => <StyledLink color="#096a09">Image</StyledLink>
});

const DesktopIoTRow = (props: {
    value: access,
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
                            query: { user_id: props.value['access_user'] },
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
                    {props.value['user_pay_status'] ? <Succes /> : <Fail />}
                </AdminMotionDiv>
            </StyledReqTd>
            <StyledReqTd ><AdminMotionDiv animate={animate}>{props.value['access_description']}</AdminMotionDiv></StyledReqTd>
            {props.value.access_state === "declined" && <StyledReqTd >{props.value.declined_reason}</StyledReqTd>}
            <MacAdressTd access_mac={props.value['access_mac']} access_id={props.value.access_id} animate={animate} />
            <StyledReqTd style={{ textAlign: "center" }}>
                <AdminMotionDiv animate={animate}><ProofModal request={props.value} setTab={props.setTab} /></AdminMotionDiv>
            </StyledReqTd>
            <StyledReqTd >
                <AdminMotionDiv animate={animate}>
                    <StateRequest state={props.value['access_state']} center={true} />
                </AdminMotionDiv>
            </StyledReqTd>
            <StyledReqTd>
                <AdminMotionDiv
                    animate={animate}
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: (props.value['access_state'] == "pending") ? "495px" : "320px",
                    }}
                >
                    <Buttons
                        id={props.value['access_id']}
                        status={props.value['access_state']}
                        requestType="access"
                        setTab={newSetTab}
                    />
                </AdminMotionDiv>
            </StyledReqTd>
        </StyledTr>
    )
};

export default DesktopIoTRow 