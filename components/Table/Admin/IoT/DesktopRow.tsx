import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import MacAdressTd from "../../../Input/MacAddressInput";
import Fail from "../../../NavIcons/fail";
import Succes from "../../../NavIcons/succes";
import { StateRequest } from "../../../Status/Status";
import { StyledLink } from "../../../Text/style";
import { access } from "../../../Utils/types";
import { StyledTr, StyledTd } from "../../style";
import Buttons from "../Buttons";
import { AdminMotionDiv } from "../../MotionDiv";
const ProofModal = dynamic(() => import("../../../Card/Modals/AdminProofModal"), {
    loading: () => <StyledLink color="#096a09">Image</StyledLink>
});

const DesktopIoTRow = (props: {
    value: access,
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
                            query: { user_id: props.value['access_user'] },
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
            <StyledTd><AdminMotionDiv isScrolling={props.isScrolling}>{props.value['access_description']}</AdminMotionDiv></StyledTd>
            {props.value.access_state === "declined" && <StyledTd>{props.value.declined_reason}</StyledTd>}
            <MacAdressTd access_mac={props.value['access_mac']} access_id={props.value.access_id} />
            <StyledTd style={{ textAlign: "center" }}>
                <AdminMotionDiv isScrolling={props.isScrolling}><ProofModal request={props.value} setTab={props.setTab} /></AdminMotionDiv>
            </StyledTd>
            <StyledTd>
                <AdminMotionDiv isScrolling={props.isScrolling}>
                    <StateRequest state={props.value['access_state']} />
                </AdminMotionDiv>
            </StyledTd>
            <StyledTd>
                <AdminMotionDiv
                    isScrolling={props.isScrolling}
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: (props.value['access_state'] == "pending") ? "495px" : "320px",
                    }}
                >
                    <Buttons
                        status={props.value['access_state']}
                        id={props.value['access_id']}
                        requestType="access"
                        setTab={props.setTab}
                    />
                </AdminMotionDiv>
            </StyledTd>
        </StyledTr>
    )
};

export default DesktopIoTRow 