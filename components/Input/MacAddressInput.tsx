import React, { useEffect, useState } from "react";
import MacAddressVerification from "../Utils/macaddress";
import { useLongPress } from "react-use";
import useMediaQuery from "../MediaQueries/MediaQuery";
import axios, { AxiosResponse } from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { StyledReqTd } from "../Table/style";
import dynamic from "next/dynamic";
import { AdminMotionDiv } from "../Table/MotionDiv";
const MacTooltip = dynamic<any>(() => import("./style").then(mod => mod.MacTooltip));

export default function MacAdressTd(props: { access_mac: string, access_id: number, animate?: boolean }) {
    const minWidth1000 = !useMediaQuery('(min-width:1000px)');
    const [input, setInput] = useState(false)
    const [mac, setMac] = useState(props.access_mac)
    const [tooltip, setTooltip] = useState(false)
    const verifiedMac = MacAddressVerification(mac)
    const longPressEvent = useLongPress(handleDoubleClick, { isPreventDefault: true, delay: 650 });

    function handleDoubleClick() {
        setInput(true)
    }

    const handleChange = (elmt) => {
        if (!elmt.key || elmt.key === 'Enter') {
            if (verifiedMac === "") {
                setTooltip(true)
                setMac(props.access_mac)

                const timer = setTimeout(() => {
                    setTooltip(false)
                }, 3500);

                return () => clearTimeout(timer);
            }
            else {
                axios.put(`/access/${props.access_id}`, { access_mac: verifiedMac })
                    .then((res: AxiosResponse) => {
                        if (res.status === 200) setMac(verifiedMac);
                    });
            }
            setInput(false)
        }
    }

    useEffect(() => {
        if (input) document.getElementById("mac_add").focus()
    }, [input])

    return (
        <StyledReqTd
            style={{
                textAlign: "center",
                paddingBottom: "0",
                paddingTop: "0",
                position: tooltip ? "relative" : undefined
            }}
            onDoubleClick={handleDoubleClick}
            {...minWidth1000 && { ...longPressEvent }}
        >
            {input ?
                <input
                    id="mac_add"
                    style={{
                        width: "100%",
                        fontSize: "1.2rem",
                        outline: "none",
                        border: "2px solid #096A09",
                        background: "none",
                        borderRadius: "10px",
                        padding: "4px 0px 4px 0px",
                        textAlign: "center",
                    }}
                    type="text"
                    onKeyDown={handleChange}
                    defaultValue={mac}
                    onChange={(elmt) => setMac(elmt.target.value)}
                    onBlur={handleChange}
                />
                :
                <AdminMotionDiv animate={props.animate}>{mac}</AdminMotionDiv>
            }

            <AnimatePresence>
                {tooltip &&
                    <MacTooltip
                        as={motion.div}
                        intial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 1 }}
                        transition={{ ease: "linear" }}
                    >
                        L&apos;adresse physique<br />entrée est invalide
                    </MacTooltip>
                }
            </AnimatePresence>
        </StyledReqTd>
    )
};