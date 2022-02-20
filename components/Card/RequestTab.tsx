import { Row } from "../Container/style";
import useMediaQuery from "../MediaQueries/MediaQuery";
import { StyledTabColumn } from "./style";

export default function RequestTab(props: { status: string, TabChange: Function }){
    const minWidth1000 = useMediaQuery('(min-width:1000px)');
    const inProcess = (props.status == "pending");
    const accepted = (props.status == "active");
    const denied = (props.status == "declined");
  
    return(
    <Row 
        style={{
            marginBottom: minWidth1000 ? "2%" : "4%", 
            justifyContent: !minWidth1000 && "center",
            borderBottom: "2px solid rgba(0, 0, 0, 0.2)", 
            height: "46px"
        }}
    >
        <StyledTabColumn
            id="pending"
            onClick={props.TabChange}
            focus={inProcess}
            afterBackground={inProcess && "#096A09"}
            afterHeight={inProcess && "4px"}
            style={{
                width:"100px",
                marginRight:"40px"
            }}
        >
            En cours
        </StyledTabColumn>
        
        <StyledTabColumn 
            id="active"
            onClick={props.TabChange}
            focus={accepted}
            afterBackground={accepted && "#096A09"}
            afterHeight={accepted && "4px"}
            style={{
                width:"100px",
                marginRight:"40px"
            }}
        >
            Validées
        </StyledTabColumn>

        <StyledTabColumn
            id="declined"
            focus={denied}
            onClick={props.TabChange} 
            afterBackground={denied && "#096A09"}
            afterHeight={denied && "4px"}
            style={{
                width:"124px",
                
            }}
        >
            Révoquées
        </StyledTabColumn>
    </Row>
    )
  }