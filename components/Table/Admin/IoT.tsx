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
                const newDisplay = { active: false, declined: false, pending: false }
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
                status={value['acces_state']}
                display={Display}
            />
        );

        index[value['acces_state']]++
    });

    mobilelistHTML.active[mobilelistHTML.active.length - 1] = <IoTMobileLine
        key={mobilelistHTML.active[mobilelistHTML.active.length - 1].props.index}
        index={mobilelistHTML.active[mobilelistHTML.active.length - 1].props.index}
        value={mobilelistHTML.active[mobilelistHTML.active.length - 1].props.value}
        status={mobilelistHTML.active[mobilelistHTML.active.length - 1].props.status}
        display={Display}
        isLast={true}
    />

    mobilelistHTML.pending[mobilelistHTML.pending.length - 1] = <IoTMobileLine
        key={mobilelistHTML.pending[mobilelistHTML.pending.length - 1].props.index}
        index={mobilelistHTML.pending[mobilelistHTML.pending.length - 1].props.index}
        value={mobilelistHTML.pending[mobilelistHTML.pending.length - 1].props.value}
        status={mobilelistHTML.pending[mobilelistHTML.pending.length - 1].props.status}
        display={Display}
        isLast={true}
    />

    mobilelistHTML.declined[mobilelistHTML.declined.length - 1] = <IoTMobileLine
        key={mobilelistHTML.declined[mobilelistHTML.declined.length - 1].props.index}
        index={mobilelistHTML.declined[mobilelistHTML.declined.length - 1].props.index}
        value={mobilelistHTML.declined[mobilelistHTML.declined.length - 1].props.value}
        status={mobilelistHTML.declined[mobilelistHTML.declined.length - 1].props.status}
        display={Display}
        isLast={true}
    />
    
    const ContainerStyle = {
        height: "100%",
        width: "100%",
        overflow: "auto",
    }

    return (
        <MediaContextProvider>
            <Media at="sm" style={ContainerStyle}>
                {Display.pending &&
                    <MobileTbody Opacity={Opacity.pending}>
                        {mobilelistHTML.pending}
                    </MobileTbody>
                }

                {Display.active &&
                    <MobileTbody Opacity={Opacity.active}>
                        {mobilelistHTML.active}
                    </MobileTbody>
                }

                {Display.declined &&
                    <MobileTbody Opacity={Opacity.declined} >
                        {mobilelistHTML.declined}
                    </MobileTbody>
                }
            </Media>

            <Media greaterThan="sm" style={ContainerStyle}>
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

                    {Display.pending &&
                        <Tbody Opacity={Opacity.pending}>
                            {listHTML.pending}
                        </Tbody>
                    }
                    {Display.active &&
                        <Tbody Opacity={Opacity.active}>
                            {listHTML.active}
                        </Tbody>
                    }
                    {Display.declined &&
                        <Tbody Opacity={Opacity.declined} >
                            {listHTML.declined}
                        </Tbody>
                    }
                </StyledTable>
            </Media>
        </MediaContextProvider>
    );
};