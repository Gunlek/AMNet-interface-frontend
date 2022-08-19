import React, { useEffect, useState } from "react";
import MacAddressVerification from "../Utils/macaddress";
import { MacTooltip, StyledTd } from "../Table/style";
import { useLongPress } from "react-use";
import useMediaQuery from "../MediaQueries/MediaQuery";
import axios from "axios";

export default function MacAdressTd(props: { access_mac: string, access_id: number }) {
    const minWidth1000 = !useMediaQuery('(min-width:1000px)');
    const [input, setInput] = useState(false)
    const [mac, setMac] = useState(props.access_mac)
    const [tooltip, setTooltip] = useState({ display: false, opacity: "" })
    const verifiedMac = MacAddressVerification(mac)
    const longPressEvent = useLongPress(handleDoubleClick, { isPreventDefault: true, delay: 300 });

    function handleDoubleClick() {
        setInput(true)
    }

    const handleChange = (elmt) => {
        if (!elmt.key || elmt.key === 'Enter') {
            if (verifiedMac === "") {
                setTooltip({ display: true, opacity: "in" })
                setMac(props.access_mac)

                setTimeout(() => {
                    setTooltip({ display: true, opacity: "out" })
                    setTimeout(() => {
                        setTooltip({ display: false, opacity: "" })
                    }, 390);
                }, 3000);
            }
            else {
                axios.put(`/access/${props.access_id}`, { access_mac: verifiedMac });
                setMac(verifiedMac);
            }
            setInput(false)
        }
    }

    useEffect(() => {
        if (input) document.getElementById("mac_add").focus()
    }, [input])

    return (
        <StyledTd
            style={{
                textAlign: "center",
                paddingBottom: "0",
                paddingTop: "0",
                position: tooltip.display ? "relative" : undefined
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
                mac
            }

            {tooltip.display &&
                <MacTooltip Opacity={tooltip.opacity}>
                    L&apos;adresse physique<br />entrée est invalide
                </MacTooltip>
            }
        </StyledTd>
    )
};