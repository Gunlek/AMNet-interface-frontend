import React from "react"
import { SmallGreenButton, SmallRedButton } from "../Button/Buttons";
import useMediaQuery from "../MediaQueries/MediaQuery";
import { StateRequest } from "../Status/Status";
import { StyledLink } from "../Text/style";
import {
    StyledFlexTd,
    StyledHeadTr,
    StyledTable,
    StyledTd,
    StyledTh,
    StyledTr
} from "./style";
import IoTMobileLine  from "./MobileLine/IoT";
import { ProoveModal } from "../Card/Modals";
import MaterialMobileLine from "./MobileLine/Material";

export const Buttons = (props: { status: string, id?: string }) => {
    return (
        <>
            {(props.status != "active") && <SmallGreenButton>Accorder</SmallGreenButton>}
            {(props.status != "declined") && <SmallRedButton>Revoquer</SmallRedButton>}
            <SmallRedButton>Supprimer</SmallRedButton>
        </>
    )
}

export function IoTAdminTable(props: { requests: any[], status: string }) {
    let listHTML = [];
    var index = 1;
    const minWidth1000 = useMediaQuery('(min-width:1000px)');

    props.requests.map((value) => {
        if (value['acces_state'] == props.status) {
            listHTML.push(minWidth1000 ?
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
                        <ProoveModal request={value} link="/static/images/campus.png" />
                    </StyledTd>
                    <StyledTd>
                        <StateRequest state={value['acces_state']} />
                    </StyledTd>
                    <StyledTd>
                        <div
                            style={{
                                width: (props.status == "pending") ? "500px" : "325px",
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <Buttons status={value['acces_state']} />
                        </div>
                    </StyledTd>
                </StyledTr>
                :
                <IoTMobileLine key={index} index={index} value={value} status={props.status} />
            );
            index++
        }
    })

    return (minWidth1000 ?
        <StyledTable>
            <thead>
                <StyledHeadTr>
                    <StyledTh scope="col">#</StyledTh>
                    <StyledTh scope="col">Utilisateur</StyledTh>
                    <StyledTh scope="col">Cotisation</StyledTh>
                    <StyledTh scope="col">Description</StyledTh>
                    <StyledTh scope="col">Adresse Mac</StyledTh>
                    <StyledTh scope="col">Preuve</StyledTh>
                    <StyledTh scope="col"><span style={{ paddingLeft: "5px" }}>Etat</span></StyledTh>
                    <StyledTh scope="col"><span style={{ paddingLeft: "5px" }}>Actions</span></StyledTh>
                </StyledHeadTr>
            </thead>
            <tbody>{listHTML}</tbody>
        </StyledTable>
        :
        <StyledTable style={{ tableLayout: "fixed" }}>
            <tbody>{listHTML}</tbody>
        </StyledTable>
    );
};

export function MaterialAdminTable(props: { requests: any[], status: string }) {
    let listHTML = [];
    var index = 1
    const minWidth1000 = useMediaQuery('(min-width:1000px)');

    props.requests.map((value) => {
        if (value['material_state'] == props.status) {
            listHTML.push(minWidth1000 ?
                <StyledTr key={index} style={{ padding: "10px 0 10px 30px" }}>
                    <StyledTd>{index}</StyledTd>
                    <StyledTd>
                        <StyledLink hovercolor="#67bc45">{value['user_name']}</StyledLink>
                    </StyledTd>
                    <StyledTd>
                        <img style={{ height: "20px", marginLeft: "40px" }} src={value['user_pay_status'] ? "/static/icons/succes.svg" : "/static/icons/fail.svg"} />
                    </StyledTd>
                    <StyledTd>{value['material_description']}</StyledTd>
                    <StyledFlexTd style={{ whiteSpace: "normal" }}><div style={{ width: "300px", maxWidth: "max-content" }}>{value['material_reason']}</div></StyledFlexTd>
                    <StyledTd>
                        <StateRequest state={value['material_state']} />
                    </StyledTd>
                    <StyledTd>
                        <div
                            style={{
                                width: (props.status == "pending") ? "500px" : "325px",
                                display: "flex",
                                justifyContent: "space-between"
                            }}
                        >
                            <Buttons status={value['material_state']} />
                        </div>
                    </StyledTd>
                </StyledTr>
                :
                <MaterialMobileLine key={index} index={index} value={value} status={props.status}/>
            );
            index++
        }
    })

    return (minWidth1000 ?
        <StyledTable style={{ width: "100%" }}>
            <thead>
                <StyledHeadTr>
                    <StyledTh scope="col">#</StyledTh>
                    <StyledTh scope="col">Utilisateur</StyledTh>
                    <StyledTh scope="col">Cotisation</StyledTh>
                    <StyledTh scope="col">Description</StyledTh>
                    <StyledTh scope="col">Détails</StyledTh>
                    <StyledTh scope="col"><span style={{ paddingLeft: "5px" }}>Etat</span></StyledTh>
                    <StyledTh scope="col"><span style={{ paddingLeft: "5px" }}>Actions</span></StyledTh>
                </StyledHeadTr>
            </thead>
            <tbody>{listHTML}</tbody>
        </StyledTable>
        :
        <StyledTable style={{ tableLayout: "fixed" }}>
            <tbody>{listHTML}</tbody>
        </StyledTable>
    );

};

