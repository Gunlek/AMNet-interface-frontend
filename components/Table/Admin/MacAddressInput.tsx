import React, { useEffect, useState } from "react";
import { MacAddressVerification } from "../../Card/Modals/IoTModal";
import { StyledTd } from "../style";

export default function MacAdressTd(props: { access_mac: string, id: any }) {
    const [input, setInput] = useState(false)
    const [newMAC, setNewMac] = useState(props.access_mac)
    const [tooltip, setTooltip] = useState(false)

    function handleDoubleClick() {
        setInput(true)
    }

    function handleBlur() {
        const MacAdress = MacAddressVerification(newMAC)
        if (MacAdress === "") {
            setTooltip(true)
            setNewMac(props.access_mac)

            setTimeout(() => {
                setTooltip(false)
            }, 3000);
        }
        else {
            setNewMac(MacAdress)
        }
        
        setInput(false)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            const MacAdress = MacAddressVerification(newMAC)
            if (MacAdress === "") {
                setTooltip(true)
                setNewMac(props.access_mac)

                setTimeout(() => {
                    setTooltip(false)
                }, 3000);
            }
            else {
                setNewMac(MacAdress)
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
                    id={"mac_add"}
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
                    onKeyDown={handleKeyDown}
                    defaultValue={newMAC}
                    onChange={(elmt) => setNewMac(elmt.target.value)}
                    onBlur={handleBlur}
                />
                :
                newMAC
            }

            <div
                style={{
                    position: "absolute",
                    bottom: "-70px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    color: "red",
                    border: "2px solid red",
                    background: "white",
                    zIndex: tooltip ? "7" : "-1",
                    opacity: tooltip ? "1" : "0",
                    width: "auto",
                    padding: "10px",
                    borderRadius: "15px",
                    transition: "opacity 0.3s, z-index 0.3s"
                }}
            >
                L'adresse physique<br/>entrée est invalide
            </div>
        </StyledTd>
    )
};