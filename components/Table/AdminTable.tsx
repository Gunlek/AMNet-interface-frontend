import React from "react"
import { SmallGreenButton, SmallRedButton } from "../Button/Buttons";
import { StateRequest } from "../Status/Status";
import { StyledLink } from "../Text/style";
import { 
    StyledFlexTd, 
    StyledGreenTr, 
    StyledTable, 
    StyledTd, 
    StyledTh, 
    StyledTr 
} from "./style";

function Buttons(props: { status: string, id?: string }) {
    return (
        <>
            {(props.status != "active") && <SmallGreenButton>Accorder</SmallGreenButton>}
            {(props.status != "declined") && <SmallRedButton>Revoquer</SmallRedButton>}
            <SmallRedButton>Supprimer</SmallRedButton>
        </>
    )
}

export function IoTAdminTable(props: { RequestTable: any[], status: string }) {
    let listHTML = [];
    var index = 1

    props.RequestTable.map((value) => {
        if (value['acces_state'] == props.status) {
            listHTML.push(
                <StyledTr key={index}>
                    <StyledTd>{index}</StyledTd>
                    <StyledTd>
                        <StyledLink color="#096a09" hovercolor="#67bc45">{value['user_name']}</StyledLink>
                    </StyledTd>
                    <StyledTd>
                        <img style={{ height: "20px", marginLeft: "35px" }} src={value['user_pay_status'] ? "/static/icons/succes.svg" : "/static/icons/fail.svg"} />
                    </StyledTd>
                    <StyledFlexTd>{value['access_description']}</StyledFlexTd>
                    <StyledTd>{value['access_mac']}</StyledTd>
                    <StyledTd>
                        <StyledLink color="#096a09" hovercolor="#67bc45">Preuve Image</StyledLink>
                    </StyledTd>
                    <StyledTd>
                        <StateRequest state={value['acces_state']} />
                    </StyledTd>
                    <StyledTd>
                        <div 
                            style={{ 
                                width: (props.status == "pending") ? "500px" : "325px", 
                                display: "flex", 
                                justifyContent:"space-between"
                            }}
                        >
                        <Buttons status={value['acces_state']} />
                        </div>  
                    </StyledTd>
                </StyledTr>
            );
            index++
        }
    })

    return (
        <StyledTable>
            <thead>
                <StyledGreenTr>
                    <StyledTh scope="col">#</StyledTh>
                    <StyledTh scope="col">Utilisateur</StyledTh>
                    <StyledTh scope="col">Cotisation</StyledTh>
                    <StyledTh scope="col">Description</StyledTh>
                    <StyledTh scope="col">Adresse Mac</StyledTh>
                    <StyledTh scope="col">Preuve Image</StyledTh>
                    <StyledTh scope="col"><span style={{ paddingLeft: "5px" }}>Etat</span></StyledTh>
                    <StyledTh scope="col"><span style={{ paddingLeft: "5px" }}>Actions</span></StyledTh>
                </StyledGreenTr>
            </thead>
            <tbody style={{transition: "all 0.3s linear"}}>{listHTML}</tbody>
        </StyledTable>
    );
};

export function MaterialAdminTable(props: { RequestTable: any[], status: string }) {
    let listHTML = [];
    var index = 1

    props.RequestTable.map((value) => {
        if (value['material_state'] == props.status) {
            listHTML.push(
                <StyledTr key={index} style={{ padding: "10px 0 10px 30px" }}>
                    <StyledTd>{index}</StyledTd>
                    <StyledTd>
                        <StyledLink hovercolor="#67bc45">{value['user_name']}</StyledLink>
                    </StyledTd>
                    <StyledTd>
                        <img style={{ height: "20px", marginLeft: "40px" }} src={value['user_pay_status'] ? "/static/icons/succes.svg" : "/static/icons/fail.svg"} />
                    </StyledTd>
                    <StyledFlexTd>{value['material_description']}</StyledFlexTd>
                    <StyledTd>
                        <StateRequest state={value['material_state']} />
                    </StyledTd>
                    <StyledTd>
                        <div 
                            style={{ 
                                width: (props.status == "pending") ? "500px" : "325px", 
                                display: "flex", 
                                justifyContent:"space-between"
                            }}
                        >
                        <Buttons status={value['material_state']} />
                        </div> 
                    </StyledTd>
                </StyledTr>
            );
            index++
        }
    })

    return (
        <StyledTable style={{ width: "100%" }}>
            <thead>
                <StyledGreenTr style={{ padding: "10px 0 10px 30px" }}>
                    <StyledTh scope="col">#</StyledTh>
                    <StyledTh scope="col">Utilisateur</StyledTh>
                    <StyledTh scope="col">Cotisation</StyledTh>
                    <StyledTh scope="col">Description</StyledTh>
                    <StyledTh scope="col"><span style={{ paddingLeft: "5px" }}>Etat</span></StyledTh>
                    <StyledTh scope="col"><span style={{ paddingLeft: "5px" }}>Actions</span></StyledTh>
                </StyledGreenTr>
            </thead>
            <tbody>{listHTML}</tbody>
        </StyledTable>
    );

};

