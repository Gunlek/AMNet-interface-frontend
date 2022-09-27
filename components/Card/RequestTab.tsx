import { motion } from "framer-motion";
import { Row } from "../Container/style";
import { StyledActive, StyledDeclinedAtive, StyledTabColumn } from "./style";

export default function RequestTab(props: { status: string, TabChange: Function }) {
    const pending = (props.status == "pending");
    const active = (props.status == "active");
    const declined = (props.status == "declined");

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
                    width: "6.25rem",
                    marginRight: "2.5rem",
                    position: "relative"
                }}
            >
                En cours
                {pending && <StyledActive as={motion.div} layoutId="underline" />}
            </StyledTabColumn>

            <StyledTabColumn
                id="active"
                onClick={active ? undefined : props.TabChange}
                focus={active}
                style={{
                    width: "6.25rem",
                    marginRight: "2.5rem",
                    position: "relative"
                }}
            >
                Validées
                {active && <StyledActive as={motion.div} layoutId="underline" />}
            </StyledTabColumn>

            <StyledTabColumn
                id="declined"
                focus={declined}
                onClick={declined ? undefined : props.TabChange}
                style={{ width: "7.8rem", position: "relative" }}
            >
                Révoquées
                {declined && <StyledDeclinedAtive as={motion.div} layoutId="underline" />}
            </StyledTabColumn>
        </Row>
    )
}