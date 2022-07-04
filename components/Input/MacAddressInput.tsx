import React, { useEffect, useState } from "react";
import MacAddressVerification from "../Utils/macaddress";
import { MacTooltip, StyledTd } from "../Table/style";

export default function MacAdressTd(props: { access_mac: string, id: any }) {
    const [input, setInput] = useState(false)
    const [mac, setMac] = useState(props.access_mac)
    const [tooltip, setTooltip] = useState({ display: false, opacity: "" })
    const verifiedMac = MacAddressVerification(mac)

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
                setMac(verifiedMac)
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
                position: "relative"
            }}
            onDoubleClick={handleDoubleClick}
        >
            {input ?
                <input
                    id="mac_add"
                    style={{
                        width: "100%",
                        fontSize: "1.2rem",
                        outline: "none",
                        padding: "0",
                        border: "2px solid #096A09",
                        background: "none",
                        borderRadius: "10px",
                        paddingLeft: "5px"
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
                    L'adresse physique<br />entrée est invalide
                </MacTooltip>
            }
        </StyledTd>
    )
};