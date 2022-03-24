import { Row } from "../Container/style";
import { StyledTabColumn } from "./style";

export default function RequestTab(props: { status: string, TabChange: Function }){
    const pending = (props.status == "pending");
    const active = (props.status == "active");
    const declined = (props.status == "declined");
  
    return(
    <Row 
        marginBottom="2%"
        mobileMarginBottom="30px"
        mobileJustify="center"
        style={{
            borderBottom: "2px solid rgba(0, 0, 0, 0.2)", 
            height: "46px"
        }}
    >
        <StyledTabColumn
            id="pending"
            onClick={!pending ? props.TabChange : undefined}
            focus={pending}
            afterBackground={pending && "#096A09"}
            afterHeight={pending && "4px"}
            style={{
                width:"100px",
                marginRight:"40px"
            }}
        >
            En cours
        </StyledTabColumn>
        
        <StyledTabColumn 
            id="active"
            onClick={!active ? props.TabChange : undefined}
            focus={active}
            afterBackground={active && "#096A09"}
            afterHeight={active && "4px"}
            style={{
                width:"100px",
                marginRight:"40px"
            }}
        >
            Validées
        </StyledTabColumn>

        <StyledTabColumn
            id="declined"
            focus={declined}
            onClick={!declined ? props.TabChange : undefined} 
            afterBackground={declined && "#096A09"}
            afterHeight={declined && "4px"}
            style={{ width:"124px" }}
        >
            Révoquées
        </StyledTabColumn>
    </Row>
    )
  }