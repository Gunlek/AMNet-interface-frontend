import { Row } from "../Container/style";
import { StyledActive, StyledTabColumn } from "./style";

export default function RequestTab(props: { status: string, TabChange: Function }) {
    const pending = (props.status == "pending");
    const active = (props.status == "active");
    const declined = (props.status == "declined");
    const transform = "translateX(" + (active ? "140" : declined ? "235" : "0") + "%)"

    return (
        <Row
            marginBottom="2%"
            mobileMarginBottom="30px"
            mobileJustify="center"
            style={{
                borderBottom: "2px solid rgba(0, 0, 0, 0.2)",
                height: "46px",

            }}
        >
            <StyledTabColumn
                id="pending"
                onClick={pending ? undefined : props.TabChange}
                focus={pending}
                style={{
                    width: "100px",
                    marginRight: "40px",
                    position: "relative"
                }}
            >
                En cours
                <StyledActive Transform={transform} Declined={declined} />
            </StyledTabColumn>

            <StyledTabColumn
                id="active"
                onClick={active ? undefined : props.TabChange}
                focus={active}
                style={{
                    width: "100px",
                    marginRight: "40px"
                }}
            >
                Validées
            </StyledTabColumn>

            <StyledTabColumn
                id="declined"
                focus={declined}
                onClick={declined ? undefined : props.TabChange}
                style={{ width: "125px" }}
            >
                Révoquées
            </StyledTabColumn>
        </Row>
    )
}