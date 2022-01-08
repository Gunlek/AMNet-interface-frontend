import { Column, Row } from "../Container/style";
import { SVGFaq } from "../SVG/faq";
import { SVGFiles } from "../SVG/files";
import { SVGGadzflix } from "../SVG/gadzflix";
import { SVGHome } from "../SVG/home";
import { SVGLogOut } from "../SVG/log_out";
import { SVGMaterial } from "../SVG/material";
import { SVGIoT } from "../SVG/network";
import { SVGProfil } from "../SVG/profil";
import { SVGSettings } from "../SVG/settings";
import { SVGUsers } from "../SVG/users";
import { StyledMenu } from "./style";

export function Menu(props: {page?: string}){
    const positionning = {
      flex: "1", 
      margin: "5px 0", 
      justifyContent:"center", 
      alignItems: "center"
    };
    return(
      <div 
        style={{
          width:"85px", 
          position:"fixed", 
          height:"96vh"
        }}
      >
        <StyledMenu >
          <Column 
            style={{
              height: "100%", 
              paddingTop:"20px",
              paddingBottom:"10px", 
              alignItems: "center",
            }}
          >
            <Row 
              style={{
                flex: "1", 
                alignItems: "start", 
                justifyContent:"center", 
                
                marginBottom: "10px",
              }}
            >
              <a href="../homepage" style={{display: "flex", justifyContent:"center"}}>
                <img style={{width:"90%"}} src="/static/logo/small_logo.svg" />
              </a>
            </Row>
            
            <Row style={positionning}>
              <SVGHome page={props.page}/>
            </Row>
            
            <Row style={positionning}>
                <SVGProfil page={props.page}/>
            </Row>
            
            <Row style={positionning}>
                <SVGFaq page={props.page}/>
            </Row>
            
            <Row style={positionning}>
                <SVGIoT page={props.page}/>
            </Row>
            
            <Row style={positionning}>
                <SVGMaterial page={props.page}/>
            </Row>
            
            <Row style={positionning}>
                <SVGGadzflix/>
            </Row>
            
            <Row style={positionning}>
                <SVGSettings page={props.page}/>        
            </Row>
  
            <Row 
              style={{
                flex: "2", 
                alignItems: "end", 
                justifyContent:"center", 
                width:"60px"
              }}
            >
              <SVGLogOut />
            </Row>
          </Column>
        </StyledMenu>
      </div>
    )
  }
  
  export function AdminMenu(props: {page?: string}){
    const positionning = {
      flex: "1", 
      margin: "5px 0", 
      justifyContent:"center", 
      alignItems: "center"
    };
    
    return(
      <div 
        style={{
          width:"85px", 
          position:"fixed", 
          height:"96vh"
        }}
      >
        <StyledMenu>
          <Column 
            style={{
              height: "100%", 
              paddingTop:"20px",
              paddingBottom:"10px", 
              alignItems: "center"
            }}
          >
            <Row 
              style={{
                flex: "1", 
                alignItems: "start", 
                justifyContent:"center",  
                marginBottom: "10px"}}
            >
              <a href="../homepage" style={{display: "flex", justifyContent:"center"}}>
                <img style={{width:"90%"}} src="/static/logo/small_logo.svg" />
              </a>
            </Row>
            
            <Row style={positionning}>
                <SVGSettings page={props.page}/>        
            </Row>
            
            <Row style={positionning}>
                <SVGUsers page={props.page}/>
            </Row>
            
            <Row style={positionning}>
                <SVGIoT page={props.page}/>
            </Row>
            
            <Row style={positionning}>
                <SVGMaterial page={props.page}/>
            </Row>
  
            <Row style={positionning}>
                <SVGFiles page={props.page}/>
            </Row>
  
            <Row style={positionning}>
              <SVGHome page={props.page}/>
            </Row>
            
            <Row 
              style={{
                flex: "3", 
                alignItems: "end", 
                justifyContent:"center", 
                width:"60px",
                marginTop: "15px"
              }}
            >
              <SVGLogOut />
            </Row>
          </Column>
        </StyledMenu>
      </div>
    )
  }