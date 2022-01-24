import { Row } from "../Container/style";
import useMediaQuery from "../MediaQueries/MediaQuery";
import { StyledTabColumn } from "./style";

export default function RequestTab(props: { status: string, TabChange: Function }){
    const minWidth1000 = useMediaQuery('(min-width:1000px)');
    const inProcess = (props.status == "inProcess");
    const accepted = (props.status == "accepted");
    const denied = (props.status == "denied");
  
    return(
    <Row 
        style={{
        marginBottom: minWidth1000 ? "2%" : "4%", 
        borderBottom: "2px solid rgba(0, 0, 0, 0.2)", 
        height: "46px"
        }}
    >
        <StyledTabColumn
        id="inProcess"
        onClick={props.TabChange}
        focus={inProcess}
        style={{
            width:"100px",
            marginRight:"40px"
        }}
        >
        En cours
        <div 
            style={{ 
            width:"100%",
            transform:"translateY(50%)", 
            backgroundColor: inProcess && "#096A09", 
            height: inProcess && "4px", 
            transition: "0.3s"
            }}
        />
        </StyledTabColumn>
        <StyledTabColumn 
        id="accepted"
        onClick={props.TabChange}
        focus={accepted}
        style={{
            width:"100px",
            marginRight:"40px"
        }}
        >
        Validées
        <div 
            style={{ 
            width:"100%",
            transform:"translateY(50%)", 
            backgroundColor: accepted && "#096A09", 
            height: accepted && "4px", 
            transition: "0.3s"
            }}
        />
        </StyledTabColumn>
        <StyledTabColumn
        id="denied"
        focus={denied}
        onClick={props.TabChange} 
        style={{
            width:"124px",
            
        }}
        >
        Révoquées
        <div 
            style={{ 
            width:"100%",
            transform:"translateY(50%)", 
            backgroundColor: denied && "#096A09", 
            height: denied && "4px", 
            transition: "0.3s"
            }}
        />
        </StyledTabColumn>
    </Row>
    )
  }