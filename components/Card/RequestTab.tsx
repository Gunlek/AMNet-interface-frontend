import { Row } from "../Container/style";
import { StyledTabColumn } from "./style";

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

                <div
                    style={{
                        transform: transform,
                        width: declined ? "120px" : "100px",
                        backgroundColor: "#096A09",
                        height: "4px",
                        transition: "transform 0.5s, width 0.5s",
                        position: "absolute",
                        bottom: "-2px",
                        left: "0"
                    }}
                />
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