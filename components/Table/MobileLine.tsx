import {StyledHeadTr, StyledTd, StyledTh, StyledTr} from "./style";
import {StyledLink} from "../Text/style";
import {StateRequest} from "../Status/Status";
import React, {useState} from "react";
import {Buttons} from "./Admin";

export const MobileLine = ({index, value, status}: {
    index: number,
    value: {
        access_id: string,
        access_description: string,
        access_mac: string,
        access_proof: string,
        access_user: number,
        access_state: string,
        user_pay_status: number,
        user_name: string
    },
    status: string
}) => {

    const [scrolled, setScrolled] = useState(false);

    return (
        <React.Fragment key={index}>
            <StyledHeadTr onClick={() => setScrolled(!scrolled)}>
                <StyledTh>Equipement {index}</StyledTh>
                <StyledTh style={{textAlign: "center"}}>{value['access_description']}</StyledTh>
            </StyledHeadTr>
            <StyledTr style={{ display: scrolled ? "table-row" : "none"}}>
                <StyledTd>Utilisateur</StyledTd>
                <StyledTd style={{textAlign: "center"}}>{value['user_name']}</StyledTd>
            </StyledTr>
            <StyledTr style={{ display: scrolled ? "table-row" : "none"}}>
                <StyledTd>Cotisation</StyledTd>
                <StyledTd style={{textAlign: "center"}}>
                <img style={{ height: "20px" }} src={value['user_pay_status'] ? "/static/icons/succes.svg" : "/static/icons/fail.svg"} />
                </StyledTd>
            </StyledTr>
            <StyledTr style={{ display: scrolled ? "table-row" : "none"}}>
                <StyledTd>Adresse Mac</StyledTd>
                <StyledTd style={{textAlign: "center"}}>{value['access_mac']}</StyledTd>
            </StyledTr>
            <StyledTr style={{ display: scrolled ? "table-row" : "none"}}>
                <StyledTd>Preuve</StyledTd>
                <StyledTd style={{textAlign: "center"}}>
                <StyledLink color="#096a09" hovercolor="#67bc45">Image</StyledLink>
                </StyledTd>
            </StyledTr>
            <StyledTr style={{ display: scrolled ? "table-row" : "none"}}>
                <StyledTd>Etat</StyledTd>
                <StyledTd><StateRequest center={true} state={value['acces_state']} /></StyledTd>
            </StyledTr>
            <StyledTr style={{ height: "0px", overflow: "hidden", display: scrolled ? "table-row" : "none"}}>
                <StyledTd>Actions</StyledTd>
                <StyledTd style={{textAlign: "center"}}>
                    <div
                        style={{
                        height: (status == "pending") ? "160px" : "100px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent:"space-between",
                            flexDirection: "column"
                    }}
                >
                    <Buttons status={value['acces_state']} />
                    </div>
                </StyledTd>
            </StyledTr>
        </React.Fragment>
    );
}