import Link from "next/link";
import { useState, useEffect } from "react";
import ProoveModal from "../../Card/Modals/AdminProoveModal";
import { MediaContextProvider, Media } from "../../MediaQueries/MediaSSR";
import Fail from "../../NavIcons/fail";
import Succes from "../../NavIcons/succes";
import { StateRequest } from "../../Status/Status";
import { StyledLink } from "../../Text/style";
import { StyledTr, StyledTd, MobileTbody, StyledTable, StyledHeadTr, StyledTh, Tbody } from "../style";
import { Buttons } from "./Buttons";
import MacAdressTd from "./MacAddressInput";
import IoTMobileLine from "./MobileLine/IoT";

export default function IoTAdminTable(props: { requests: any[], status: { old: string, new: string } }) {
    let listHTML = { active: [], declined: [], pending: [] };
    let mobilelistHTML = { active: [], declined: [], pending: [] };
    let index = { active: 1, declined: 1, pending: 1 };
    const [Display, setDisplay] = useState({ active: false, declined: false, pending: true })
    const [Opacity, setOpacity] = useState({ active: "", declined: "", pending: "" })

    useEffect(() => {
        if (props.status.old !== null) {
            const newOpacity = { active: "", declined: "", pending: "" }
            newOpacity[props.status.old] = "out"
            setOpacity(newOpacity)

            setTimeout(() => {
                const newDisplay = { active: false, declined: false, pending: false}
                newDisplay[props.status.new] = true
                setDisplay(newDisplay)
                const newOpacity = { active: "", declined: "", pending: "" }
                newOpacity[props.status.new] = "in"
                setOpacity(newOpacity)
            }, 500);
        }
    }, [props.status]);

    props.requests.map((value, id) => {
        listHTML[value['acces_state']].push(
            <StyledTr key={index[value['acces_state']]}>
                <StyledTd>{index[value['acces_state']]}</StyledTd>
                <StyledTd>
                    <Link
                        href={{
                            pathname: '/admin/users/[user_id]',
                            query: { user_id: value['acces_user'] },
                        }}
                        prefetch={false}
                        passHref
                    >
                        <StyledLink color="#096a09">{value['user_name']}</StyledLink>
                    </Link>
                </StyledTd>
                <StyledTd style={{ textAlign: "center" }}>
                    {value['user_pay_status'] ? <Succes marginRight="15px" /> : <Fail marginRight="15px" />}
                </StyledTd>
                <StyledTd>{value['access_description']}</StyledTd>
                <MacAdressTd access_mac={value['access_mac']} id={id} />
                <StyledTd>
                    <ProoveModal request={value} link="/static/images/homepage/campus.jpg" />
                </StyledTd>
                <StyledTd>
                    <StateRequest state={value['acces_state']} />
                </StyledTd>
                <StyledTd>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: (props.status.new == "pending") ? "495px" : "320px",
                            transition: "width 0.5s linear"
                        }}
                    >
                        <Buttons status={value['acces_state']} />
                    </div>
                </StyledTd>
            </StyledTr>
        );

        mobilelistHTML[value['acces_state']].push(

            <IoTMobileLine
                key={index[value['acces_state']]}
                index={index[value['acces_state']]}
                value={value}
                status={props.status.new}
                display={Display}
            />
        );

        index[value['acces_state']]++
    });

    return (
        <MediaContextProvider>
            <Media at="sm">
                <MobileTbody
                    Opacity={Opacity.pending}
                    Display={Display.pending}
                >
                    {mobilelistHTML.pending}
                </MobileTbody>
                <MobileTbody
                    Opacity={Opacity.active}
                    Display={Display.active}
                >
                    {mobilelistHTML.active}
                </MobileTbody>
                <MobileTbody
                    Opacity={Opacity.declined}
                    Display={Display.declined}
                >
                    {mobilelistHTML.declined}
                </MobileTbody>
            </Media>
            <Media greaterThan="sm">
                <StyledTable>
                    <thead style={{ position: "sticky", top: "0", zIndex: "2" }}>
                        <StyledHeadTr>
                            <StyledTh scope="col">#</StyledTh>
                            <StyledTh scope="col">Utilisateur</StyledTh>
                            <StyledTh scope="col">Cotisation</StyledTh>
                            <StyledTh scope="col">Description</StyledTh>
                            <StyledTh style={{ width: "230px", textAlign: "center" }} scope="col">Adresse Mac</StyledTh>
                            <StyledTh scope="col">Preuve</StyledTh>
                            <StyledTh scope="col"><span style={{ paddingLeft: "5px" }}>Etat</span></StyledTh>
                            <StyledTh scope="col">
                                <div
                                    style={{
                                        width: (props.status.new == "pending") ? "500px" : "325px",
                                        paddingLeft: "5px",
                                        transition: "width 0.5s linear"
                                    }}
                                >
                                    Actions
                                </div>
                            </StyledTh>
                        </StyledHeadTr>
                    </thead>
                    
                    <Tbody
                        Opacity={Opacity.pending}
                        Display={Display.pending}
                    >
                        {listHTML.pending}
                    </Tbody>
                    <Tbody
                        Opacity={Opacity.active}
                        Display={Display.active}
                    >
                        {listHTML.active}
                    </Tbody>
                    <Tbody
                        Opacity={Opacity.declined}
                        Display={Display.declined}
                    >
                        {listHTML.declined}
                    </Tbody>
                </StyledTable>
            </Media>
        </MediaContextProvider>
    );
};